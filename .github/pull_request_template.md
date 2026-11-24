## What changed

<!-- One or two lines, plus the pages affected. -->

## Pre-merge checklist

Standards: [docs/SEO-STANDARDS.md](../blob/main/docs/SEO-STANDARDS.md). The build already fails on missing or duplicate titles, H1s and descriptions, image problems (alt, size, format, dimensions), broken or redirecting links, sitemap gaps, em dashes, phone numbers and the Kew address. Confirm the rest:

- [ ] `npm run build` passes, and I've read the warnings for pages this PR touches
- [ ] Titles put the topic first, with Melbourne or the suburb where relevant (homepage title unchanged unless the owner agreed)
- [ ] Each H1 is short and plain, and each meta description is a one line summary
- [ ] The opening sentence says what the page is about and who it's for, with no repeated banners or promo text near the top
- [ ] Images have descriptive filenames and alt text that describes what each one shows, and only the top image loads straight away
- [ ] New pages are linked from at least 3 relevant pages and added to the right link blocks (related services, from the blog, nearby areas)
- [ ] Copy is unique (no near duplicate suburb or service pages), plain and honest, with Australian spelling and no Oxford commas
- [ ] lastmod is bumped in `src/data/pageLastmod.json` (or `updated` on a blog post) for pages whose content changed
- [ ] Deploy preview checked by the owner before merge
