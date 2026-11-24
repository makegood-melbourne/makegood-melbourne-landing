// Checks titles, H1s and meta descriptions on every indexable page in the built site.
// Fails the build when an indexable page:
//   - has no H1, or more than one H1
//   - has no title, or the same title as another page
//   - has no meta description, or the same meta description as another page
// Also prints warnings (without failing) for titles over 60 characters or without the
// "| MakeGOOD" brand ending, and for descriptions outside 120 to 155 characters.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const decode = (text) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

const metaContent = (html, name) => {
  const tag = html.match(new RegExp(`<meta\\b[^>]*\\bname="${name}"[^>]*>`, 'i'));
  if (!tag) return null;
  const content = tag[0].match(/\bcontent="([^"]*)"/i);
  return content ? decode(content[1]) : '';
};

const failures = [];
const warnings = [];
const byTitle = new Map();
const byDescription = new Map();
let pages = 0;

for (const file of walk(DIST).filter((f) => f.endsWith('index.html'))) {
  const page = file.slice(DIST.length).replace(/index\.html$/, '').replace(/\\/g, '/') || '/';
  const html = readFileSync(file, 'utf8');

  // Skip pages that ask not to be indexed, and client-side redirect stubs
  const robots = metaContent(html, 'robots') || '';
  if (/noindex/i.test(robots)) continue;
  pages++;

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count === 0) failures.push(`${page}  no H1`);
  if (h1Count > 1) failures.push(`${page}  ${h1Count} H1s`);

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decode(titleMatch[1]) : '';
  if (!title) failures.push(`${page}  no title`);
  else {
    if (!byTitle.has(title)) byTitle.set(title, []);
    byTitle.get(title).push(page);
    if (title.length > 60) warnings.push(`${page}  title is ${title.length} characters: ${title}`);
    if (!/\| MakeGOOD( Melbourne)?$/.test(title)) warnings.push(`${page}  title doesn't end with "| MakeGOOD": ${title}`);
  }

  const description = metaContent(html, 'description');
  if (!description) failures.push(`${page}  no meta description`);
  else {
    if (!byDescription.has(description)) byDescription.set(description, []);
    byDescription.get(description).push(page);
    if (description.length < 120 || description.length > 155) {
      warnings.push(`${page}  meta description is ${description.length} characters`);
    }
  }
}

for (const [title, list] of byTitle) {
  if (list.length > 1) failures.push(`duplicate title "${title}" on ${list.join(', ')}`);
}
for (const [description, list] of byDescription) {
  if (list.length > 1) failures.push(`duplicate meta description on ${list.join(', ')}: "${description.slice(0, 80)}..."`);
}

if (warnings.length) {
  console.warn(`[seo] ${warnings.length} warning(s):\n  ${warnings.join('\n  ')}`);
}
if (failures.length) {
  console.error(`[seo] FAILED: ${failures.length} problem(s):\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`[seo] ${pages} indexable pages checked. One H1 each, unique titles and unique meta descriptions.`);
