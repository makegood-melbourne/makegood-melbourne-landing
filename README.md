# makegood.melbourne

Website for MakeGOOD Melbourne: commercial make good, strip out, remediation, roofing, racking and handover.

## Stack

- [Astro](https://astro.build) with React islands and Tailwind CSS
- Hosted on Netlify (site `peaceful-arithmetic-d23971`). Every pull request gets a deploy preview, and merges to `main` go live
- Backend: Supabase project `krgbykvrigbbkvyprqnb` (set in `src/lib/backendClient.ts`)
  - `chat`: website chatbot (OpenAI)
  - `send-contact-email`: contact form emails via Resend, with an enquiry backup in `contact_enquiries`
  - Edge functions in `supabase/functions/` are **not** deployed automatically. After changing one, deploy it in the Supabase dashboard

## Working on the site

```sh
pnpm install    # Netlify installs with pnpm from pnpm-lock.yaml
pnpm dev        # local dev server
pnpm build      # production build
```

If you add or remove a package, update `pnpm-lock.yaml` too (Netlify uses a frozen lockfile and the build fails if it's out of date).

The Netlify build runs `scripts/smoke-tests.mjs` after building to check the chatbot and contact form endpoints are reachable.

## Rules

See `CLAUDE.md`: never push to `main` directly, always open a pull request and only merge after the deploy preview has been reviewed and approved.
