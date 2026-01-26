# H1 Font-Weight Analysis

## Homepage Hero H1

**File:** `src/components/HeroContent.tsx`

**Code:**
```tsx
<h1 className="text-4xl md:text-6xl text-foreground mb-4 leading-tight font-bold">
  Commercial<br />
  Make Good &<br />
  Remedial Works
</h1>
```

**Font-weight:** `font-bold` = **700** (Tailwind default)

**Line-height:** `leading-tight` = **1.25**

---

## Service Page H1

**File:** `src/components/ServiceHeroSection.astro`

**Code:**
```astro
<h1 class="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
  {titleParts.highlight ? (
    <>
      {titleParts.main}{' '}<span class="text-primary">{titleParts.highlight}</span>
    </>
  ) : (
    service.title
  )}
</h1>
```

**Font-weight:** **NOT SPECIFIED** = defaults to browser default (usually **400** = normal)

**Line-height:** **NOT SPECIFIED** = defaults to browser default (usually **1.2-1.5**)

---

## The Difference

| Element | Font-Weight | Line-Height | Result |
|---------|-------------|-------------|--------|
| **Homepage Hero H1** | `font-bold` (700) | `leading-tight` (1.25) | **Bold, tight spacing** |
| **Service Page H1** | Default (400) | Default (~1.2-1.5) | **Normal weight, looser spacing** |

---

## Why This Happened

**Inconsistent styling** - The homepage H1 was explicitly styled with `font-bold`, but the service page H1 was not. This is likely an oversight rather than intentional design.

---

## Recommendation

**Option 1: Make them uniform (BOLD)**
Add `font-bold` to service page H1 for consistency with homepage

**Option 2: Make them uniform (NORMAL)**
Remove `font-bold` from homepage H1 (less recommended - homepage needs impact)

**Option 3: Keep different (intentional hierarchy)**
Homepage = Bold (high impact)
Service pages = Normal (softer, more readable)

---

## My Opinion

**Make them uniform with `font-bold`** - Consistency across all H1 headers creates a stronger brand identity and makes the site feel more cohesive. The homepage hero needs bold impact, and service pages should match that authority.
