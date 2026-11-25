# Tone of voice

How MakeGOOD Melbourne sounds on the website, in blog posts, emails and the chatbot.
Read this before writing or changing any copy. The pages that already sound right are the
benchmark: the homepage, About, the warehouse make good page and the newer blog posts.

## Who we're writing for

Warehouse and industrial tenants nearing the end of a lease, and the property managers,
leasing agents and facility managers around them. They're busy and practical. They want to
know what has to happen, what it will cost, how long it takes and whether we'll be finished
before the lease ends.

## How we sound

Plain, honest and confident. Like a site manager walking the person who's paying through
the job: what we'll do, in what order, and what they need to know. Never like a brochure.

## The rules

1. **Say what physically happens.** Short fragments are fine.
   > Racking out. Slab repaired. Lines marked. Building handed back.
2. **Specifics, not adjectives.** Name the street, the material, the trade, the order of
   work. If you couldn't prove an adjective, cut it.
   > Racking out, anchor holes filled, the slab repaired, line marking sorted, offices stripped, walls painted.
3. **Admit the plain truth**, even when it's not what people want to hear.
   > There is no honest square metre rate for a warehouse make good.
4. **No claims we can't back up.** No invented figures, project counts, partners, awards,
   guarantees or response times, and no "experts" or "leading". What we can say: a free
   site visit, one fixed price grouped by type of works, a reply within one business day,
   and licensed trades for electrical, plumbing, gas and asbestos work.
5. **Lead with the reader's problem**, not with us. Start with the lease, the building or
   the deadline, then say what we do about it.
6. **Talk to one person.** "You" and "your lease", not "clients" or "stakeholders".
7. **One idea per sentence.** If a sentence needs a second comma to hold together, split it.
8. **Point to the next step plainly.** The quote form at /contact/ or
   enquiries@makegood.melbourne. There is no phone number, so never write "call us".

## Mechanics

- Australian spelling: organise, colour, metres, centre, licence (noun), license (verb).
- No Oxford commas: "racking, slabs and line marking".
- No em dashes, and no hyphens used as separators. Use a comma, a full stop, a colon or a new sentence. (The build fails on em dashes.)
- Digits for measurements and sizes (2,500 m², 1,200 mm). Small counts and time spans can be words (three to six months).
- "make good" is two words with no hyphen, as a noun and before a noun ("make good clause"). Same for "strip out" and "end of lease".
- The business is **MakeGOOD Melbourne**. Not "Make Good Melbourne", "MakeGOOD.Melbourne" or "Makegood".
- Page titles, H1s and meta descriptions follow [SEO-STANDARDS.md](SEO-STANDARDS.md).

## Words to avoid

The build fails when one of the starred words appears on a page (`scripts/check-content.mjs`).

| Avoid | Write instead |
|---|---|
| comprehensive \* | Say what's included: "racking, slab, line marking and the clean" |
| tailored \*, bespoke \* | "to what your lease asks for", or "custom" for a fitout |
| seamless, seamlessly \* | Say what actually happens: "in one programme", "one contractor" ("a seamless coating" for a membrane is fine, that's what it is) |
| we understand \* | Cut it and say the thing |
| "Whether you're a..." as an opener \* | Name the situations, or just start with the first one |
| proven \* | Show it: the steps, the photos, the sign off |
| cutting-edge, state-of-the-art, world-class, top-notch, unparalleled, second to none, industry-leading \* | Cut it |
| hassle-free, stress-free, peace of mind \* | Say what we take off their plate: "one contractor, one price, one handover" |
| leverage \*, utmost \*, highest standards \* | Cut it, or name the standard |
| solutions (as a vague noun) | Name the work. Our section names ("Strip Out Solutions") are fine |
| expert, specialist, professional (about us) | Say what we did, or cut it |
| premium (about us) | Cut it. "Bill you at a premium" or "premium acoustic panels" is fine |

## Before and after, from this site

| Before | After |
|---|---|
| The structural integrity of your building is non-negotiable... restore strength, safety and long-term stability to your asset. | Structural defects don't fix themselves, and patching over them only hides the problem for a while. |
| We apply proven membrane systems that protect your building for decades. | We find where the water is getting in, repair the surface underneath and apply a membrane system to the manufacturer's specification. |
| Our remediation service connects affected material removal, drying coordination, leak damage repairs and final reinstatement into one practical building scope. | Wet materials out, drying organised, the leak fixed and the walls, ceilings and floors put back, all as one building scope. |
| Premium make good services in Mulgrave. Corporate office restoration... | Warehouse make good in Mulgrave: racking out, slab repairs, docks and line marking around Jacksons Road. |
| Deep knowledge of City of Whittlesea's make good requirements. | City of Whittlesea permit and waste requirements checked before work starts on an industrial exit. |
| Years of grime, oil stains and tyre marks don't stand a chance. | Ride-on scrubbers and high pressure washers take years of grime, oil stains and tyre marks off warehouse floors before the landlord's inspection. |
| Short on time? Call us anyway. | Short on time? Get in touch anyway. |

## Before you publish

- [ ] Could the first sentence only be about this page? If it would fit any contractor's site, rewrite it.
- [ ] Every claim is true and something we could show.
- [ ] No words from the list above, unless the exception applies.
- [ ] Read it aloud. If you wouldn't say it to a tenant on site, change it.
- [ ] `npm run build` passes (it fails on em dashes and the starred words).
