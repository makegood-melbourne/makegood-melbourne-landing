// Map of old blog slugs to new slugs for 301 redirects
// These are URLs that Google indexed but have been changed

export const blogRedirects: Record<string, string> = {
  // Old slug -> Current slug mappings
  "year-end-planning-commercial-property": "year-end-property-planning",
  "waste-management-sustainability-commercial-demolition": "waste-management-sustainability-make-good-works",
  "strategic-planning-commercial-makegood": "strategic-make-good-planning",
  "office-strip-out-demolition-best-practices": "office-strip-out",
  "building-defect-remediation-compliance-process": "building-defect-remediation-commercial-property",
  "parapet-failure-emergency-repair-structural-safety": "parapet-failure-emergency-building-repairs",
  "property-transformation-makegood-renovation": "new-year-property-transformations",
  "commercial-makegood-complete-guide": "what-are-make-goods",
  "polycarbonate-roofing-replacement-commercial": "warehouse-polycarbonate-roofing-replacement",
  "makegood-services-comprehensive-overview": "ultimate-guide-to-make-good-services",
  "painting-commercial-property-makegood-standards": "the-importance-of-painting",
  "warehouse-makegood-industrial-lease-obligations": "port-melbourne-warehouse-end-of-lease-make-good",
  "balcony-waterproofing-membrane-replacement": "balcony-waterproofing-preventing-fixing-leaks",
  "car-park-line-marking-compliance-standards": "car-park-repairs-line-marking-make-good",
  "carpet-tile-replacement-commercial-office": "carpet-tile-replacement-installation-floor-preparation",
  "epoxy-flooring-industrial-applications": "restoring-concrete-floors",
  "commercial-cleaning-services-post-makegood": "end-of-lease-cleaning-services",
  "electrical-make-safe-emergency-response": "electrical-make-safe-decommissioning-demolition",
};

export const getRedirectSlug = (slug: string): string | null => {
  return blogRedirects[slug] || null;
};
