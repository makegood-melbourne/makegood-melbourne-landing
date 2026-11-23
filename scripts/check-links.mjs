// Checks every internal link in the built site. Fails the build when a link:
//   - points to a page without its trailing slash (Netlify would 301 it)
//   - points to a redirect source in netlify.toml
//   - points to a page or file that doesn't exist
// Also confirms every URL in dist/sitemap.xml is a real page.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://makegood.melbourne';

const redirectSources = [...readFileSync('netlify.toml', 'utf8').matchAll(/^\s*from\s*=\s*"([^"]+)"/gm)]
  .map((match) => match[1])
  .filter((from) => from.startsWith('/') && !from.includes('*'));
const redirectPatterns = redirectSources.map((from) => {
  const pattern = from.replace(/\/$/, '').replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/:\w+/g, '[^/]+');
  return new RegExp(`^${pattern}/?$`);
});

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const pageExists = (path) => existsSync(join(DIST, path, 'index.html'));
const fileExists = (path) => existsSync(join(DIST, path)) && statSync(join(DIST, path)).isFile();

const problems = new Map();
const note = (path, issue, page) => {
  const key = `${path}  [${issue}]`;
  if (!problems.has(key)) problems.set(key, new Set());
  problems.get(key).add(page);
};

let checked = 0;
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const page = file.slice(DIST.length).replace(/index\.html$/, '').replace(/\\/g, '/');
  const html = readFileSync(file, 'utf8');
  for (const [, rawHref] of html.matchAll(/<a\b[^>]*?\shref="([^"]+)"/g)) {
    let href = rawHref.replace(/&amp;/g, '&');
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || '/';
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = href.split('#')[0].split('?')[0];
    if (!path) continue;
    checked++;
    const last = path.split('/').pop();
    if (last.includes('.')) {
      if (!fileExists(path)) note(path, 'missing file', page);
      continue;
    }
    if (redirectPatterns.some((re) => re.test(path))) note(path, 'redirects (netlify.toml)', page);
    else if (!path.endsWith('/')) note(path, pageExists(path) ? 'missing trailing slash' : 'missing page', page);
    else if (!pageExists(path)) note(path, 'missing page', page);
  }
}

if (existsSync(join(DIST, 'sitemap.xml'))) {
  for (const [, loc] of readFileSync(join(DIST, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = loc.slice(SITE.length);
    if (!pageExists(path)) note(path, 'sitemap URL has no page', 'sitemap.xml');
  }
}

if (problems.size) {
  console.error(`\n[links] FAILED: ${problems.size} internal link problem(s)`);
  for (const [key, pages] of problems) {
    console.error(`  ${key} on ${[...pages].slice(0, 5).join(', ')}${pages.size > 5 ? ` and ${pages.size - 5} more` : ''}`);
  }
  process.exit(1);
}
console.log(`[links] ${checked} internal links checked. No redirects, missing slashes or broken links.`);
