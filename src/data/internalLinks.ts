// Internal linking data: blog topics, blog to service mapping, nearby areas and
// which suburbs each service page links to. Used by RelatedPosts, NearbyAreas and
// ServiceLinks so every post and area page has several plain HTML inlinks.
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { locations } from "@/data/locations";
import { sortBlogPostsByDate } from "@/lib/blogUtils";

type Topic = "warehouse" | "roofing" | "remediation" | "interiors" | "lease";

// Every published post needs a topic and a service page. The sitemap build check
// fails if a post is missing from either map, so new posts can't be orphaned.
export const blogTopicAndService: Record<string, { topic: Topic; service: string }> = {
  // Warehouse and industrial
  "racking-removal-anchor-holes-lease-melbourne": { topic: "warehouse", service: "strip-out-solutions/pallet-racking-removal" },
  "guide-to-pallet-racking-solutions": { topic: "warehouse", service: "racking-solutions/pallet-racking-installation" },
  "warehouse-hardstand-loading-dock-repair-melbourne": { topic: "warehouse", service: "make-good-solutions/warehouse-flooring" },
  "warehouse-floor-restoration-racking-removal": { topic: "warehouse", service: "make-good-solutions/warehouse-flooring" },
  "restoring-concrete-floors": { topic: "warehouse", service: "make-good-solutions/flooring-reinstatement" },
  "slab-rectification-concrete-floor-movement": { topic: "warehouse", service: "remediation-solutions/structural" },
  "car-park-repairs-line-marking-make-good": { topic: "warehouse", service: "make-good-solutions/line-marking" },
  "warehouse-factory-make-good-melbourne": { topic: "warehouse", service: "make-good-solutions/warehouse-make-good" },
  "port-melbourne-warehouse-end-of-lease-make-good": { topic: "warehouse", service: "make-good-solutions/warehouse-make-good" },
  "warehouse-demolition-mezzanine-cool-room-removal": { topic: "warehouse", service: "strip-out-solutions/demolition" },
  // Roofing
  "commercial-roof-storm-damage-first-24-hours-melbourne": { topic: "roofing", service: "roofing-solutions/storm-damage-make-safe" },
  "asbestos-cement-roof-restore-overclad-replace-melbourne": { topic: "roofing", service: "roofing-solutions/metal-roof-replacement" },
  "commercial-roof-make-good-melbourne": { topic: "roofing", service: "roofing-solutions/roof-inspections-maintenance" },
  "box-gutter-leaks-warehouse-melbourne": { topic: "roofing", service: "roofing-solutions/box-gutters-roof-drainage" },
  "warehouse-polycarbonate-roofing-replacement": { topic: "roofing", service: "roofing-solutions/polycarbonate-roofing-skylights" },
  "metal-roof-replacement-warehouse-melbourne": { topic: "roofing", service: "roofing-solutions/metal-roof-replacement" },
  // Remediation and compliance
  "parapet-failure-emergency-building-repairs": { topic: "remediation", service: "remediation-solutions/structural" },
  "fire-damage-restoration-make-good-commercial-properties": { topic: "remediation", service: "remediation-solutions/fire-compliance-facade-cladding-remediation" },
  "facade-cladding-remediation-fireproof-compliance": { topic: "remediation", service: "remediation-solutions/cladding-glazing" },
  "building-defect-remediation-commercial-property": { topic: "remediation", service: "remediation-solutions" },
  "balcony-waterproofing-preventing-fixing-leaks": { topic: "remediation", service: "remediation-solutions/waterproofing" },
  "concrete-cancer-prevention-remediation": { topic: "remediation", service: "remediation-solutions/structural" },
  "commercial-water-damage-mould-remediation-melbourne": { topic: "remediation", service: "remediation-solutions/water-damage-mould-remediation" },
  "asbestos-management-commercial-make-good-safe-removal": { topic: "remediation", service: "strip-out-solutions" },
  // Office, retail and interiors
  "patching-plastering-commercial-lease-handback": { topic: "interiors", service: "make-good-solutions/patching-plastering" },
  "ceiling-repairs-suspended-acoustic-tiles-make-good": { topic: "interiors", service: "make-good-solutions/suspended-ceilings" },
  "the-importance-of-painting": { topic: "interiors", service: "make-good-solutions/painting" },
  "carpet-tile-replacement-installation-floor-preparation": { topic: "interiors", service: "make-good-solutions/flooring-reinstatement" },
  "office-strip-out": { topic: "interiors", service: "strip-out-solutions" },
  "electrical-make-safe-decommissioning-demolition": { topic: "interiors", service: "strip-out-solutions/make-safe" },
  "make-good-strip-out-defit-melbourne": { topic: "interiors", service: "strip-out-solutions" },
  "medical-dental-clinic-make-good-melbourne": { topic: "interiors", service: "make-good-solutions" },
  "restaurant-cafe-make-good-melbourne": { topic: "interiors", service: "make-good-solutions" },
  "retail-make-good-melbourne-shopping-centre-tenants": { topic: "interiors", service: "make-good-solutions" },
  "waste-management-sustainability-make-good-works": { topic: "interiors", service: "strip-out-solutions/demolition" },
  "end-of-lease-cleaning-services": { topic: "interiors", service: "handover-solutions/end-of-lease-cleaning" },
  // Lease planning and process
  "make-good-cost-drivers-melbourne": { topic: "lease", service: "make-good-solutions" },
  "dilapidation-reports-melbourne-make-good": { topic: "lease", service: "make-good-solutions" },
  "what-are-make-goods": { topic: "lease", service: "make-good-solutions" },
  "ultimate-guide-to-make-good-services": { topic: "lease", service: "make-good-solutions" },
  "importance-of-commercial-property-make-good": { topic: "lease", service: "make-good-solutions" },
  "maximising-property-value-lease-end": { topic: "lease", service: "make-good-solutions" },
  "strategic-make-good-planning": { topic: "lease", service: "handover-solutions" },
  "year-end-property-planning": { topic: "lease", service: "handover-solutions" },
  "new-year-property-transformations": { topic: "lease", service: "handover-solutions" },
  "last-minute-make-good-melbourne": { topic: "lease", service: "handover-solutions" },
  "love-your-property": { topic: "lease", service: "handover-solutions" },
  "understanding-property-condition-reports": { topic: "lease", service: "handover-solutions" },
  "top-5-tips-tenant-landlord-communication": { topic: "lease", service: "handover-solutions" },
  "tenants-guide-smooth-make-good-experience": { topic: "lease", service: "handover-solutions" },
  "simplifying-property-management": { topic: "lease", service: "handover-solutions/end-of-lease-relocation" },
  "mastering-lease-transitions": { topic: "lease", service: "handover-solutions/end-of-lease-relocation" },
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

export const getPostsForService = (serviceSlug: string): BlogPost[] =>
  sortBlogPostsByDate(blogPosts).filter((post) => blogTopicAndService[post.slug]?.service === serviceSlug);

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
