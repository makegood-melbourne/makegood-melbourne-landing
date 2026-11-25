# Repository Rules

- Never commit or push directly to main.
- - Always create a new branch and open a pull request for any change. Pushing the branch is not enough on its own, always follow through and click "Create pull request" to actually open it. A pushed branch with no open PR is an incomplete task, not a finished one.
  - - Wait for explicit approval in the pull request before it can be merged.
    - - Before editing an existing blog post, check that the post actually exists on the main branch first. If a fix references a post that was only added in a still-open, unmerged pull request, that post will not be visible from a fresh branch cut from main. In that case, stop and tell the user the referenced PR needs to be merged first, rather than guessing or recreating the post from scratch.
      - - Blog posts use exactly one image (the hero, which also serves as the body image). Never add a second mid-body image slot.
        - 
- Never merge a pull request to main if there is a known, already-identified problem with it (e.g. a title that's too long, a missing or wrong image, a flagged typo). Fix the problem in that same pull request first, then present it for sign-off once, as a finished version. Do not merge a known-incomplete version with the plan to patch it in a follow-up, even if asked to "go ahead and merge" in the middle of a separate conversation about a different fix.
- - Before merging anything, explicitly link the deploy preview URL and wait for the user to confirm they've reviewed it. Do not treat a general "yes, merge it" reply as confirmation that the preview itself was checked, ask for that confirmation directly.
  - 
- Every new blog post must be added to `blogTopicAndService` in `src/data/internalLinks.ts` with a `topic`, a `service` and `industries` (best fit first; options: commercial, industrial, warehouses-logistics, retail, medical-centres, hospitality-venues). The build fails if any of these is missing. Once tagged, the post appears automatically in the "From the blog" block on its service page, in related posts on its topic and on the matching industry pages.
- Every indexable page needs exactly one H1, a unique title (main topic first, under about 60 characters, ending "| MakeGOOD Melbourne" or "| MakeGOOD" if that doesn't fit) and a unique meta description of about 120 to 155 characters. `scripts/check-seo.mjs` runs in the build and fails on a missing or duplicate H1, title or description; it warns on length and brand ending. Blog posts with long titles set a shorter `seoTitle`. Don't change the homepage title without asking first.

# Page and SEO standards

- Before adding or changing any page, blog post, service, area or industry page, read and follow [docs/SEO-STANDARDS.md](docs/SEO-STANDARDS.md). It is the checklist for titles, H1s, meta descriptions, opening sentences, images, internal links, link blocks, sitemap, unique copy, tone of voice, lastmod dates and contact details.
- `npm run build` must pass. It runs `build-sitemap`, `check-links`, `check-seo`, `check-images` and `check-content` after `astro build`, and fails on anything those scripts can detect. Read the build warnings too and fix the ones your change caused.
- Images: import originals from `src/assets/` and render them with `<Image>` in `.astro` files or `<ResponsiveImg>` in React components, with the page passing `imageVariants` from `buildImageVariants()`. Never put page images in `public/` or reference a JPG or PNG directly.
- Before writing or changing any copy (pages, blog posts, FAQs, emails, chatbot prompts), read and follow [docs/TONE-OF-VOICE.md](docs/TONE-OF-VOICE.md): plain, specific, no claims we can't back up, no words from its avoid list. The build fails on those words.
- Fill in the checklist in the PR description (`.github/pull_request_template.md`) for every PR.
