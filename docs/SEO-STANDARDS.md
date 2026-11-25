# Page and SEO standards

Follow this checklist whenever you add or change a page, blog post, service, area or
industry page on makegood.melbourne. It applies to people and to AI chats alike.

Rules marked **[build]** are enforced by a check that fails `npm run build`, so a
Netlify deploy (and the deploy preview on a PR) fails until they're fixed. Rules marked
**[warning]** print a warning in the build log without failing. Rules marked
**[checklist]** can't be checked automatically: confirm them yourself in the PR.

## 1. Title tag

- [ ] **[build]** Every indexable page has a title, and no two pages share one.
- [ ] **[warning]** Under about 60 characters.
- [ ] **[warning]** Ends with the brand: `| MakeGOOD Melbourne`, or `| MakeGOOD` if the longer ending doesn't fit.
- [ ] **[checklist]** Main topic first, then Melbourne or the suburb where it's relevant. Example: `Warehouse Make Good Melbourne | MakeGOOD Melbourne`.
- [ ] **[checklist]** Blog posts with long titles set a shorter `seoTitle` in `src/data/blogPosts.ts`.
- [ ] **[checklist]** Don't change the homepage title without asking the owner first. It ranks near the top for "make good melbourne".

## 2. H1

- [ ] **[build]** Exactly one H1 on every indexable page.
- [ ] **[checklist]** Short and plain, says what the page is. Not the same as another page's H1, and not a near copy of one.

## 3. Meta description

- [ ] **[build]** Every indexable page has one, and no two pages share one.
- [ ] **[warning]** 120 to 155 characters.
- [ ] **[checklist]** A one line summary of what the page offers and who it's for.

## 4. Opening and top of page

- [ ] **[checklist]** The first sentence says plainly what the page is about and who it's for (for example, warehouse tenants at lease end).
- [ ] **[checklist]** No repeated banners, badges or promo text near the top of the page. Say each thing once.

## 5. Images

- [ ] **[checklist]** Descriptive filename that says what's in the photo (`warehouse-pallet-racking-installation-melbourne.jpg`, not `IMG_2041.jpg`). Keep existing descriptive filenames.
- [ ] **[build]** Every image has alt text. (`alt=""` is only allowed on decorative images with `aria-hidden="true"`.)
- [ ] **[checklist]** Alt text describes what that image actually shows, and is different for different images, including different crops of the same photo.
- [ ] **[checklist]** The logo's alt text is `MakeGOOD Melbourne`.
- [ ] **[build]** Served as WebP. Put the original in `src/assets/` and import it. Never reference a JPG or PNG directly in `<img>`, and don't add page images to `public/`.
  - In `.astro` files use `<Image>` from `astro:assets` with `width`, `widths`, `sizes` and `quality={60}`.
  - In React components (`.tsx`) use `<ResponsiveImg image={...} alt="..." sizes="..." />` from `src/components/ResponsiveImg.tsx`. The page must pass `imageVariants={await buildImageVariants(...)}` (`src/lib/imageVariants.ts`) with every image the component renders, otherwise it falls back to the full size original and the size check fails.
- [ ] **[build]** Width and height set on every image, so the layout doesn't shift while it loads. `<Image>` and `<ResponsiveImg>` do this for you.
- [ ] **[warning]** Only the main image at the top of the page loads straight away (`loading="eager"` and `fetchpriority="high"`, or `priority` on `<ResponsiveImg>`). Everything below the fold is `loading="lazy"`, which is the default for `<ResponsiveImg>`. The build warns when a page has more than three images that aren't lazy loaded.
- [ ] **[build]** No image file over 300KB in any size it's served at.
- [ ] **[warning]** Target under 200KB for large images. Each served file over 200KB is listed in the build log.
- [ ] **[checklist]** Target under 100KB for card images (cards are served at 400 to 800px wide).
- [ ] **[checklist]** Social share images (`public/og/`) are JPG, 1200px wide and under 300KB. These stay in `public/` because they need fixed URLs.

## 6. Internal links

- [ ] **[build]** Internal links use the final URL with a trailing slash, never a redirect source in `netlify.toml`, and never a missing page.
- [ ] **[warning]** Every new page is linked from at least 3 relevant pages in their main content. Navigation, header and footer links don't count. The build lists pages below 3.
- [ ] **[checklist]** Link text describes the page it points to ("warehouse make good", not "click here").

## 7. Link blocks and sitemap

- [ ] **[build]** New blog posts are added to `blogTopicAndService` in `src/data/internalLinks.ts` with a `topic`, a `service` and `industries` (best fit first). They then appear automatically in "From the blog" on their service page, in related posts on their topic and on the matching industry pages.
- [ ] **[checklist]** New services list their `relatedServices`. New area pages are added to the area lists and coordinates in `src/data/internalLinks.ts` so they appear in nearby areas and on service pages.
- [ ] **[build]** Every published blog post, service, category and area page appears in `sitemap.xml`. The sitemap is built from the site automatically, and the build fails if one is missing.
- [ ] **[build]** Every URL in the sitemap is a real page.

## 8. Templates and unique copy

- [ ] **[checklist]** Each page type follows its template (service, category, area, industry, blog post) so the structure stays consistent.
- [ ] **[checklist]** The copy is unique. No near duplicate suburb or service pages: each area page names its own streets, estates and property types, and each service page describes its own scope.
- [ ] **[checklist]** Blog posts use exactly one image (the hero, which is also the body image).
- [ ] **[checklist]** No thin posts. A post under about 700 words that adds nothing new is merged into a stronger post or service page and its URL is 301 redirected there (both with and without the trailing slash). Update any redirect that pointed at it so there are no chains.

## 9. Tone of voice

The full guide, with the words to avoid and before and after examples, is [TONE-OF-VOICE.md](TONE-OF-VOICE.md).


- [ ] **[checklist]** Plain, honest and confident. No corporate jargon and no claims we can't back up (no invented figures, partners or awards).
- [ ] **[checklist]** Australian spelling (organise, colour, metres, centre).
- [ ] **[checklist]** No Oxford commas.
- [ ] **[warning]** None of the words to avoid listed in the tone guide ("comprehensive", "tailored", "we understand" and so on). The build lists every page that uses one.
- [ ] **[build]** No em dashes in page text. Use commas, full stops, a colon or restructure the sentence.
- [ ] **[build]** No raw markdown showing on the page. Links and bold must render, including inside tables.

## 10. Freshness

- [ ] **[build]** Every page in the sitemap has a lastmod date. Pages other than blog posts take it from `src/data/pageLastmod.json`. Blog posts use their `date` or `updated` field.
- [ ] **[checklist]** Bump the page's lastmod date (or the post's `updated` field) when its content changes.

## 11. Contact details

- [ ] **[build]** No phone number anywhere: no number in page text, no `tel:` links and no `telephone` in structured data.
- [ ] **[build]** No Kew office address anywhere, including structured data.

## Build checks

`npm run build` runs these after `astro build`. Any failure stops the build and the deploy.

| Script | Fails the build on | Warns on |
|---|---|---|
| `scripts/build-sitemap.mjs` | Published page missing from the sitemap, blog post missing its `internalLinks.ts` tags, page with no lastmod date | |
| `scripts/check-links.mjs` | Internal link without trailing slash, to a redirect, or to a missing page; sitemap URL that isn't a page | |
| `scripts/check-seo.mjs` | Missing or duplicate title, missing or duplicate meta description, no H1 or more than one H1 | Title over 60 characters or without the brand ending; description outside 120 to 155 characters |
| `scripts/check-images.mjs` | Image without alt text, without width or height, served as JPG/PNG, over 300KB, or pointing to a missing file | Image file over 200KB; page with more than three images that aren't lazy loaded |
| `scripts/check-content.mjs` | Em dash in page text, raw markdown (an unrendered `[link](/url/)` or `**bold**`), phone number or `tel:` link, `telephone` in structured data, Kew address | Words to avoid from the tone guide; indexable page linked from fewer than 3 other pages' main content |

Everything marked **[checklist]** above relies on the person (or chat) making the change,
and on the PR checklist in `.github/pull_request_template.md`.
