// Generates dist/sitemap.xml from the built site, then checks it.
//
// A page is included when it was built as dist/**/index.html, is not the 404 page,
// is not a redirect source in netlify.toml, has no noindex robots meta and its
// canonical URL points to itself. Every URL has a trailing slash.
//
// lastmod: blog posts use their updated or published date, the blog index and
// pagination use the newest post date, everything else comes from
// src/data/pageLastmod.json. Pages with no known date are listed without lastmod.
//
// The build fails if any published blog post, service, category or area page is
// missing, or if a blog post has no topic and service mapping for internal links.
import { readFileSync, writeFileSync, readdirSync, statSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://makegood.melbourne';
const DIST = 'dist';
const MANIFEST = join(DIST, 'sitemap-manifest.json');

const fail = (message) => {
  console.error(`\n[sitemap] FAILED: ${message}\n`);
  process.exit(1);
};

if (!existsSync(MANIFEST)) fail('dist/sitemap-manifest.json not found. Run astro build first.');
const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
rmSync(MANIFEST);

const pageLastmod = JSON.parse(readFileSync('src/data/pageLastmod.json', 'utf8'));

// Redirect sources on this host (paths only), normalised with a trailing slash.
const redirectSources = new Set(
  [...readFileSync('netlify.toml', 'utf8').matchAll(/^\s*from\s*=\s*"([^"]+)"/gm)]
    .map((match) => match[1])
    .filter((from) => from.startsWith('/') && !from.includes('*') && !from.includes(':'))
    .map((from) => (from.endsWith('/') ? from : `${from}/`))
);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const pages = walk(DIST)
  .filter((file) => file.endsWith('index.html'))
  .map((file) => {
    const path = file.slice(DIST.length).replace(/index\.html$/, '').replace(/\\/g, '/');
    return { path: path || '/', html: readFileSync(file, 'utf8') };
  });

const excluded = [];
const included = [];
for (const { path, html } of pages) {
  const robots = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i)?.[1] || '';
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)?.[1];
  let reason = null;
  if (path.startsWith('/404')) reason = '404 page';
  else if (redirectSources.has(path)) reason = 'redirect source';
  else if (/noindex/i.test(robots)) reason = 'noindex';
  else if (canonical && canonical !== `${SITE}${path}`) reason = `canonical points to ${canonical}`;
  if (reason) excluded.push(`${path} (${reason})`);
  else included.push(path);
}

const newestPost = Object.values(manifest.blogLastmod).sort().at(-1);
const lastmodFor = (path) => {
  if (manifest.blogLastmod[path]) return manifest.blogLastmod[path];
  if (path === '/blog/' || path.startsWith('/blog/page/')) return newestPost;
  return pageLastmod[path];
};

const badDates = included.filter((path) => {
  const date = lastmodFor(path);
  return date && !/^\d{4}-\d{2}-\d{2}$/.test(date);
});
if (badDates.length) fail(`lastmod is not YYYY-MM-DD for: ${badDates.join(', ')}`);

included.sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...included.map((path) => {
    const date = lastmodFor(path);
    return `  <url>\n    <loc>${SITE}${path}</loc>${date ? `\n    <lastmod>${date}</lastmod>` : ''}\n  </url>`;
  }),
  '</urlset>',
  '',
].join('\n');
writeFileSync(join(DIST, 'sitemap.xml'), xml);

const includedSet = new Set(included);
const missing = manifest.required.filter((path) => !includedSet.has(path));
if (manifest.unmappedPosts.length) {
  fail(`blog posts missing from src/data/internalLinks.ts (topic and service): ${manifest.unmappedPosts.join(', ')}`);
}
if (missing.length) fail(`published pages missing from the sitemap: ${missing.join(', ')}`);

const noDate = included.filter((path) => !lastmodFor(path));
console.log(`[sitemap] ${included.length} URLs written to dist/sitemap.xml (${excluded.length} built pages excluded).`);
if (excluded.length) console.log(`[sitemap] Excluded: ${excluded.join('; ')}`);
if (noDate.length) console.log(`[sitemap] No lastmod (add to src/data/pageLastmod.json): ${noDate.join(', ')}`);
