// Checks every image on every built page (dist/**/*.html).
// Fails the build when an image:
//   - has no alt text (alt="" is only allowed on images marked aria-hidden="true")
//   - has no width or height attribute (stops the layout shifting while it loads)
//   - is a JPG or PNG instead of WebP (use Astro's image pipeline, see docs/SEO-STANDARDS.md)
//   - is over 300KB in any size it's served at (src, srcset, <picture> sources, preloads)
//   - points to a file that doesn't exist in the build
// Prints warnings (without failing) for image files over 200KB and for pages with more
// than three images that aren't lazy loaded.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const HARD_LIMIT = 300 * 1024;
const SOFT_LIMIT = 200 * 1024;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, 'i'));
  return match ? (match[1] ?? match[2]) : null;
};

const srcsetUrls = (value) =>
  (value || '')
    .split(',')
    .map((part) => part.trim().split(/\s+/)[0])
    .filter(Boolean);

const localFile = (url) => {
  if (url.startsWith('data:')) return null;
  let path = url;
  if (/^https?:\/\//i.test(url)) {
    const parsed = new URL(url);
    if (parsed.hostname !== 'makegood.melbourne' && parsed.hostname !== 'www.makegood.melbourne') return null;
    path = parsed.pathname;
  }
  return join(DIST, decodeURIComponent(path.split(/[?#]/)[0]));
};

const failures = [];
const warnings = [];
const sizeCache = new Map();
const oversized = new Map();
let imageCount = 0;
let pageCount = 0;

const checkFile = (url, page) => {
  const file = localFile(url);
  if (!file) return;
  if (!sizeCache.has(file)) sizeCache.set(file, existsSync(file) ? statSync(file).size : -1);
  const size = sizeCache.get(file);
  if (size === -1) failures.push(`${page}  image file not found: ${url}`);
  else if (size > HARD_LIMIT) failures.push(`${page}  ${Math.round(size / 1024)}KB image (limit 300KB): ${url}`);
  else if (size > SOFT_LIMIT) oversized.set(url, size);
};

for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const page = file.slice(DIST.length).replace(/index\.html$/, '').replace(/\\/g, '/') || '/';
  const html = readFileSync(file, 'utf8');
  pageCount++;
  let notLazy = 0;

  for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
    imageCount++;
    const src = attr(tag, 'src') || '';
    const alt = attr(tag, 'alt');
    const hidden = attr(tag, 'aria-hidden') === 'true';
    const label = src.split('/').pop() || '(no src)';

    if (alt === null || (alt.trim() === '' && !hidden)) failures.push(`${page}  image has no alt text: ${label}`);
    if (!attr(tag, 'width') || !attr(tag, 'height')) failures.push(`${page}  image has no width/height: ${label}`);

    const urls = [src, ...srcsetUrls(attr(tag, 'srcset'))].filter(Boolean);
    for (const url of urls) {
      if (/\.(jpe?g|png)(\?|#|$)/i.test(url)) failures.push(`${page}  JPG/PNG image, use WebP via astro:assets: ${url}`);
      checkFile(url, page);
    }
    if (attr(tag, 'loading') !== 'lazy') notLazy++;
  }

  // <picture> sources and image preloads are downloaded too
  for (const [tag] of html.matchAll(/<source\b[^>]*>/gi)) {
    for (const url of srcsetUrls(attr(tag, 'srcset'))) checkFile(url, page);
  }
  for (const [tag] of html.matchAll(/<link\b[^>]*rel="preload"[^>]*>/gi)) {
    if (attr(tag, 'as') !== 'image') continue;
    const urls = [attr(tag, 'href'), ...srcsetUrls(attr(tag, 'imagesrcset'))].filter(Boolean);
    if (urls.length === 0) failures.push(`${page}  image preload has no href or imagesrcset`);
    for (const url of urls) checkFile(url, page);
  }

  // The logo and the top image are normally the only images that aren't lazy
  if (notLazy > 3) warnings.push(`${page}  ${notLazy} images aren't lazy loaded (only the top image should load straight away)`);
}

for (const [url, size] of oversized) warnings.push(`${Math.round(size / 1024)}KB, over the 200KB target: ${url}`);

if (warnings.length) {
  console.warn(`[images] ${warnings.length} warning(s):`);
  for (const warning of warnings) console.warn(`  - ${warning}`);
}

if (failures.length) {
  console.error(`\n[images] FAILED: ${failures.length} problem(s):`);
  for (const failure of [...new Set(failures)]) console.error(`  - ${failure}`);
  console.error('\nSee docs/SEO-STANDARDS.md for the image rules.\n');
  process.exit(1);
}

console.log(`[images] ${imageCount} images on ${pageCount} pages checked. All have alt text, width and height, are WebP and under 300KB.`);
