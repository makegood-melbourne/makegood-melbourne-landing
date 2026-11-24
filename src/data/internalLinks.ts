// Internal linking data: blog topics, blog to service mapping, nearby areas and
// which suburbs each service page links to. Used by RelatedPosts, NearbyAreas and
// ServiceLinks so every post and area page has several plain HTML inlinks.
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { locations } from "@/data/locations";
import { sortBlogPostsByDate } from "@/lib/blogUtils";

type Topic = "warehouse" | "roofing" | "remediation" | "interiors" | "lease";

// Industry pages a post shows up on. List the best fit first: an industry page shows
// posts where it is the first tag before posts where it is a secondary tag.
export type IndustrySlug =
  | "commercial" | "industrial" | "warehouses-logistics"
  | "retail" | "medical-centres" | "hospitality-venues";

// Every published post needs a topic, a service page and at least one industry. The
// sitemap build check fails if any of these is missing, so new posts can't be orphaned
// and automatically appear on the matching service and industry pages.
export const blogTopicAndService: Record<string, { topic: Topic; service: string; industries: IndustrySlug[] }> = {
  // Warehouse and industrial
  "racking-removal-anchor-holes-lease-melbourne": { topic: "warehouse", service: "strip-out-solutions/pallet-racking-removal", industries: ["warehouses-logistics", "industrial"] },
  "guide-to-pallet-racking-solutions": { topic: "warehouse", service: "racking-solutions/pallet-racking-installation", industries: ["warehouses-logistics"] },
  "warehouse-hardstand-loading-dock-repair-melbourne": { topic: "warehouse", service: "make-good-solutions/warehouse-flooring", industries: ["industrial", "warehouses-logistics"] },
  "warehouse-floor-restoration-racking-removal": { topic: "warehouse", service: "make-good-solutions/warehouse-flooring", industries: ["warehouses-logistics", "industrial"] },
  "restoring-concrete-floors": { topic: "warehouse", service: "make-good-solutions/flooring-reinstatement", industries: ["industrial", "warehouses-logistics"] },
  "slab-rectification-concrete-floor-movement": { topic: "warehouse", service: "remediation-solutions/structural", industries: ["industrial"] },
  "car-park-repairs-line-marking-make-good": { topic: "warehouse", service: "make-good-solutions/line-marking", industries: ["warehouses-logistics", "industrial"] },
  "warehouse-factory-make-good-melbourne": { topic: "warehouse", service: "make-good-solutions/warehouse-make-good", industries: ["industrial", "warehouses-logistics"] },
  "port-melbourne-warehouse-end-of-lease-make-good": { topic: "warehouse", service: "make-good-solutions/warehouse-make-good", industries: ["warehouses-logistics", "industrial"] },
  "warehouse-demolition-mezzanine-cool-room-removal": { topic: "warehouse", service: "strip-out-solutions/demolition", industries: ["industrial", "warehouses-logistics"] },
  // Roofing
  "commercial-roof-storm-damage-first-24-hours-melbourne": { topic: "roofing", service: "roofing-solutions/storm-damage-make-safe", industries: ["industrial", "commercial"] },
  "asbestos-cement-roof-restore-overclad-replace-melbourne": { topic: "roofing", service: "roofing-solutions/metal-roof-replacement", industries: ["industrial"] },
  "commercial-roof-make-good-melbourne": { topic: "roofing", service: "roofing-solutions/roof-inspections-maintenance", industries: ["industrial", "commercial"] },
  "box-gutter-leaks-warehouse-melbourne": { topic: "roofing", service: "roofing-solutions/box-gutters-roof-drainage", industries: ["industrial", "warehouses-logistics"] },
  "warehouse-polycarbonate-roofing-replacement": { topic: "roofing", service: "roofing-solutions/polycarbonate-roofing-skylights", industries: ["industrial", "warehouses-logistics"] },
  "metal-roof-replacement-warehouse-melbourne": { topic: "roofing", service: "roofing-solutions/metal-roof-replacement", industries: ["industrial", "warehouses-logistics"] },
  // Remediation and compliance
  "parapet-failure-emergency-building-repairs": { topic: "remediation", service: "remediation-solutions/structural", industries: ["commercial"] },
  "fire-damage-restoration-make-good-commercial-properties": { topic: "remediation", service: "remediation-solutions/fire-compliance-facade-cladding-remediation", industries: ["commercial", "industrial"] },
  "facade-cladding-remediation-fireproof-compliance": { topic: "remediation", service: "remediation-solutions/cladding-glazing", industries: ["commercial"] },
  "building-defect-remediation-commercial-property": { topic: "remediation", service: "remediation-solutions", industries: ["commercial"] },
  "balcony-waterproofing-preventing-fixing-leaks": { topic: "remediation", service: "remediation-solutions/waterproofing", industries: ["commercial"] },
  "concrete-cancer-prevention-remediation": { topic: "remediation", service: "remediation-solutions/structural", industries: ["commercial", "industrial"] },
  "commercial-water-damage-mould-remediation-melbourne": { topic: "remediation", service: "remediation-solutions/water-damage-mould-remediation", industries: ["commercial", "retail"] },
  "asbestos-management-commercial-make-good-safe-removal": { topic: "remediation", service: "strip-out-solutions", industries: ["commercial", "industrial"] },
  // Office, retail and interiors
  "patching-plastering-commercial-lease-handback": { topic: "interiors", service: "make-good-solutions/patching-plastering", industries: ["commercial", "retail"] },
  "ceiling-repairs-suspended-acoustic-tiles-make-good": { topic: "interiors", service: "make-good-solutions/suspended-ceilings", industries: ["commercial", "medical-centres", "retail"] },
  "the-importance-of-painting": { topic: "interiors", service: "make-good-solutions/painting", industries: ["commercial", "retail"] },
  "carpet-tile-replacement-installation-floor-preparation": { topic: "interiors", service: "make-good-solutions/flooring-reinstatement", industries: ["commercial"] },
  "office-strip-out": { topic: "interiors", service: "strip-out-solutions", industries: ["commercial"] },
  "electrical-make-safe-decommissioning-demolition": { topic: "interiors", service: "strip-out-solutions/make-safe", industries: ["commercial", "medical-centres", "industrial"] },
  "make-good-strip-out-defit-melbourne": { topic: "interiors", service: "strip-out-solutions", industries: ["commercial", "retail"] },
  "medical-dental-clinic-make-good-melbourne": { topic: "interiors", service: "make-good-solutions", industries: ["medical-centres"] },
  "restaurant-cafe-make-good-melbourne": { topic: "interiors", service: "make-good-solutions", industries: ["hospitality-venues"] },
  "retail-make-good-melbourne-shopping-centre-tenants": { topic: "interiors", service: "make-good-solutions", industries: ["retail"] },
  "waste-management-sustainability-make-good-works": { topic: "interiors", service: "strip-out-solutions/demolition", industries: ["commercial", "industrial"] },
  "end-of-lease-cleaning-services": { topic: "interiors", service: "handover-solutions/end-of-lease-cleaning", industries: ["commercial", "hospitality-venues"] },
  // Lease planning and process
  "make-good-cost-drivers-melbourne": { topic: "lease", service: "make-good-solutions", industries: ["commercial", "industrial", "retail"] },
  "dilapidation-reports-melbourne-make-good": { topic: "lease", service: "make-good-solutions", industries: ["industrial", "commercial"] },
  "what-are-make-goods": { topic: "lease", service: "make-good-solutions", industries: ["commercial"] },
  "ultimate-guide-to-make-good-services": { topic: "lease", service: "make-good-solutions", industries: ["commercial"] },
  "importance-of-commercial-property-make-good": { topic: "lease", service: "make-good-solutions", industries: ["commercial"] },
  "maximising-property-value-lease-end": { topic: "lease", service: "make-good-solutions", industries: ["commercial"] },
  "strategic-make-good-planning": { topic: "lease", service: "handover-solutions", industries: ["commercial"] },
  "year-end-property-planning": { topic: "lease", service: "handover-solutions", industries: ["commercial"] },
  "new-year-property-transformations": { topic: "lease", service: "handover-solutions", industries: ["commercial"] },
  "last-minute-make-good-melbourne": { topic: "lease", service: "handover-solutions", industries: ["commercial", "industrial"] },
  "love-your-property": { topic: "lease", service: "handover-solutions", industries: ["commercial"] },
  "understanding-property-condition-reports": { topic: "lease", service: "handover-solutions", industries: ["commercial", "retail"] },
  "top-5-tips-tenant-landlord-communication": { topic: "lease", service: "handover-solutions", industries: ["commercial"] },
  "tenants-guide-smooth-make-good-experience": { topic: "lease", service: "handover-solutions", industries: ["commercial"] },
  "simplifying-property-management": { topic: "lease", service: "handover-solutions/end-of-lease-relocation", industries: ["commercial"] },
  "mastering-lease-transitions": { topic: "lease", service: "handover-solutions/end-of-lease-relocation", industries: ["commercial"] },
};

// Related posts: the next three posts in the same topic (newest first, wrapping
// around), so every post in a topic receives exactly three related links.
export const getRelatedPosts = (slug: string, count = 3): BlogPost[] => {
  const entry = blogTopicAndService[slug];
  if (!entry) return [];
  const inTopic = sortBlogPostsByDate(blogPosts).filter(
    (post) => blogTopicAndService[post.slug]?.topic === entry.topic
  );
  const index = inTopic.findIndex((post) => post.slug === slug);
  const related: BlogPost[] = [];
  for (let step = 1; step < inTopic.length && related.length < count; step++) {
    related.push(inTopic[(index + step) % inTopic.length]);
  }
  return related;
};

// Services with no posts of their own borrow the closest ones, so every service and
// category page ends with a "From the blog" block.
const servicePostFallback: Record<string, string[]> = {
  "roofing-solutions": ["box-gutter-leaks-warehouse-melbourne", "metal-roof-replacement-warehouse-melbourne", "commercial-roof-storm-damage-first-24-hours-melbourne"],
  "racking-solutions": ["racking-removal-anchor-holes-lease-melbourne", "guide-to-pallet-racking-solutions", "warehouse-floor-restoration-racking-removal"],
  "roofing-solutions/roof-leak-repairs": ["box-gutter-leaks-warehouse-melbourne", "commercial-roof-storm-damage-first-24-hours-melbourne"],
  "racking-solutions/racking-relocation-reconfiguration": ["racking-removal-anchor-holes-lease-melbourne", "guide-to-pallet-racking-solutions"],
};

export const getPostsBySlugs = (slugs: string[]): BlogPost[] =>
  slugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => Boolean(post));

// Newest posts tagged with an industry: posts where it is the first tag come first.
export const getPostsForIndustry = (industry: string, count = 3): BlogPost[] => {
  const tagged = sortBlogPostsByDate(blogPosts).filter((post) =>
    (blogTopicAndService[post.slug]?.industries as string[] | undefined)?.includes(industry)
  );
  const primary = tagged.filter((post) => blogTopicAndService[post.slug].industries[0] === industry);
  const secondary = tagged.filter((post) => blogTopicAndService[post.slug].industries[0] !== industry);
  return [...primary, ...secondary].slice(0, count);
};

export const getPostsForService = (serviceSlug: string): BlogPost[] => {
  const own = sortBlogPostsByDate(blogPosts).filter((post) => blogTopicAndService[post.slug]?.service === serviceSlug);
  if (own.length > 0) return own;
  return getPostsBySlugs(servicePostFallback[serviceSlug] ?? []);
};

// Approximate suburb centres, used only to work out neighbours.
const areaCoords: Record<string, [number, number]> = {
  "altona": [-37.867, 144.83], "bayswater": [-37.845, 145.268], "bentleigh": [-37.918, 145.035],
  "box-hill": [-37.819, 145.122], "braeside": [-37.99, 145.115], "brunswick": [-37.767, 144.96],
  "campbellfield": [-37.683, 144.958], "caroline-springs": [-37.741, 144.736], "caulfield": [-37.877, 145.025],
  "clayton": [-37.925, 145.12], "collingwood": [-37.802, 144.988], "cremorne": [-37.83, 144.993],
  "dandenong": [-37.987, 145.215], "dandenong-south": [-38.02, 145.22], "doncaster": [-37.787, 145.124],
  "epping": [-37.65, 145.02], "fitzroy": [-37.799, 144.978], "footscray": [-37.8, 144.9],
  "frankston": [-38.144, 145.126], "glen-waverley": [-37.878, 145.164], "hallam": [-38.0, 145.27],
  "hawthorn": [-37.822, 145.031], "heidelberg": [-37.756, 145.067], "kilsyth": [-37.8, 145.31],
  "laverton": [-37.86, 144.77], "malvern": [-37.857, 145.03], "melbourne-cbd": [-37.814, 144.963],
  "moorabbin": [-37.94, 145.06], "mulgrave": [-37.92, 145.17], "notting-hill": [-37.905, 145.14],
  "oakleigh": [-37.9, 145.09], "port-melbourne": [-37.84, 144.94], "preston": [-37.74, 145.0],
  "richmond": [-37.82, 144.998], "ringwood": [-37.815, 145.23], "scoresby": [-37.9, 145.23],
  "south-melbourne": [-37.833, 144.958], "south-yarra": [-37.838, 144.992], "thomastown": [-37.68, 145.02],
  "truganina": [-37.82, 144.73], "tullamarine": [-37.7, 144.88], "werribee": [-37.9, 144.66],
};

const distance = (a: [number, number], b: [number, number]) => {
  const dLat = a[0] - b[0];
  const dLng = (a[1] - b[1]) * Math.cos((a[0] * Math.PI) / 180);
  return Math.sqrt(dLat * dLat + dLng * dLng);
};

export const getNearbyAreas = (slug: string, count = 5) => {
  const here = areaCoords[slug];
  if (!here) return [];
  return locations
    .filter((location) => location.slug !== slug && areaCoords[location.slug])
    .sort((a, b) => distance(here, areaCoords[a.slug]) - distance(here, areaCoords[b.slug]))
    .slice(0, count)
    .map((location) => ({ slug: location.slug, name: location.name }));
};

// Suburbs grouped by the kind of work that's common there. Service pages link to a
// rotating set from the matching group so every suburb is linked from somewhere.
const industrialAreas = [
  "dandenong-south", "clayton", "mulgrave", "hallam", "dandenong", "port-melbourne", "braeside",
  "laverton", "truganina", "tullamarine", "campbellfield", "thomastown", "epping", "altona",
  "scoresby", "notting-hill", "moorabbin", "bayswater", "kilsyth", "footscray", "werribee",
  "caroline-springs",
];
const commercialAreas = [
  "melbourne-cbd", "south-melbourne", "richmond", "cremorne", "south-yarra", "collingwood",
  "fitzroy", "brunswick", "hawthorn", "box-hill", "doncaster", "glen-waverley", "oakleigh",
  "caulfield", "malvern", "bentleigh", "heidelberg", "preston", "ringwood", "frankston",
];

const industrialServicePrefixes = [
  "make-good-solutions/warehouse", "make-good-solutions/line-marking", "racking-solutions",
  "strip-out-solutions/pallet-racking-removal", "roofing-solutions", "remediation-solutions/structural",
];

const pick = (list: string[], start: number, count: number) =>
  Array.from({ length: count }, (_, i) => list[(start + i) % list.length]);

// Deterministic rotation: each service gets a different window of suburbs.
export const getAreasForService = (serviceSlug: string, allServiceSlugs: string[], count = 6) => {
  const industrial = industrialServicePrefixes.some((prefix) => serviceSlug.startsWith(prefix));
  const pool = industrial ? industrialAreas : commercialAreas;
  const peers = allServiceSlugs.filter(
    (slug) => industrialServicePrefixes.some((prefix) => slug.startsWith(prefix)) === industrial
  );
  const position = Math.max(0, peers.indexOf(serviceSlug));
  const start = (position * count) % pool.length;
  return pick(pool, start, Math.min(count, pool.length))
    .map((slug) => locations.find((location) => location.slug === slug))
    .filter((location): location is NonNullable<typeof location> => Boolean(location))
    .map((location) => ({ slug: location.slug, name: location.name }));
};

export const linkedAreaSlugs = [...industrialAreas, ...commercialAreas];
export const areaCoordSlugs = Object.keys(areaCoords);
