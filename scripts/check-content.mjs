// Checks the text of every built page (dist/**/*.html) against the content rules in
// docs/SEO-STANDARDS.md.
// Fails the build when a page:
//   - shows an em dash in its visible text (house style: use commas, full stops or a colon)
//   - has a phone number in its visible text, a tel: link or a "telephone" in structured data
//   - mentions the Kew office address anywhere, including structured data
//   - shows raw markdown in its text: a link like [text](/page/) or **bold** that wasn't rendered
// Prints warnings (without failing) for indexable pages that fewer than three other pages
// link to from their main content (navigation, header and footer links don't count).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://makegood.melbourne';

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const decode = (text) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const visibleText = (html) =>
  decode(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<iframe\b[\s\S]*?<\/iframe>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ');

const snippet = (text, index) => text.slice(Math.max(0, index - 40), index + 40).trim();

// Australian phone numbers: mobiles, landlines with area code, 13/1300/1800 numbers
const PHONE = /(?:\+61\s?|\b0)[2-478](?:[\s-]?\d){8}\b|\b1[38]00(?:[\s-]?\d){6}\b|\b13(?:[\s-]?\d){4}\b(?=\s*$)/;
const KEW = /Cobden\s+St|\bKew,?\s+(?:VIC|Victoria|310[1-3])\b|"addressLocality"\s*:\s*"Kew"/i;

const failures = [];
const warnings = [];
const pages = new Map();

for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const page = file.slice(DIST.length).replace(/index\.html$/, '').replace(/\\/g, '/') || '/';
  const html = readFileSync(file, 'utf8');
  pages.set(page, html);
  const text = visibleText(html);

  const dash = text.indexOf('—');
  if (dash !== -1) failures.push(`${page}  em dash in page text: "...${snippet(text, dash)}..."`);

  const phone = text.match(PHONE);
  if (phone) failures.push(`${page}  phone number in page text: ${phone[0]}`);
  if (/href="tel:/i.test(html)) failures.push(`${page}  tel: link`);
  if (/"telephone"\s*:/i.test(html)) failures.push(`${page}  "telephone" in structured data`);

  const rawLink = text.match(/\[[^\]]{1,80}\]\((?:\/|https?:)[^)\s]*\)/);
  if (rawLink) failures.push(`${page}  raw markdown link in page text: ${rawLink[0]}`);
  const rawBold = text.match(/\*\*[^*\s][^*]{0,60}\*\*/);
  if (rawBold) failures.push(`${page}  raw markdown bold in page text: ${rawBold[0]}`);

  const kew = html.match(KEW);
  if (kew) failures.push(`${page}  Kew office address: ${kew[0]}`);
}

// In-content links to each indexable page
const isIndexable = (html) => !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
const skipLinkCheck = (page) =>
  page === '/' || page.startsWith('/404') || page.startsWith('/blog/page/') ||
  ['/privacy-policy/', '/terms-of-service/', '/thank-you/', '/contact/'].includes(page);
const inbound = new Map();
for (const [page, html] of pages) {
  const body = (html.match(/<body\b[\s\S]*<\/body>/i)?.[0] || html)
    .replace(/<(nav|header|footer)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ');
  for (const [, href] of body.matchAll(/href="([^"#?]+)/g)) {
    const path = href.startsWith(SITE) ? href.slice(SITE.length) || '/' : href;
    if (!path.startsWith('/') || path === page) continue;
    if (!inbound.has(path)) inbound.set(path, new Set());
    inbound.get(path).add(page);
  }
}
for (const [page, html] of pages) {
  if (!page.endsWith('/') || skipLinkCheck(page) || !isIndexable(html)) continue;
  const count = inbound.get(page)?.size || 0;
  if (count < 3) warnings.push(`${page}  linked from ${count} other page(s) in the main content (aim for at least 3)`);
}

if (warnings.length) {
  console.warn(`[content] ${warnings.length} warning(s):`);
  for (const warning of warnings) console.warn(`  - ${warning}`);
}

if (failures.length) {
  console.error(`\n[content] FAILED: ${failures.length} problem(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error('\nSee docs/SEO-STANDARDS.md for the content rules.\n');
  process.exit(1);
}

console.log(`[content] ${pages.size} pages checked. No em dashes, raw markdown, phone numbers or Kew address.`);
