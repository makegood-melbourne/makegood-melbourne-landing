import { getPublishedServices } from "@/data/services";

// Service categories for navigation grouping - 5 main sections
export const serviceCategories: {
  label: string;
  href: string;
  slugs: string[];
  displayNames?: Record<string, string>;
}[] = [
  {
    label: "Strip Out Solutions",
    href: "/services/strip-out-solutions/",  // Clickable category header
    slugs: ['strip-out-solutions/demolition', 'strip-out-solutions/make-safe', 'strip-out-solutions/pallet-racking-removal'],
    displayNames: {
      'strip-out-solutions/demolition': 'Demolition',
      'strip-out-solutions/make-safe': 'Make Safe',
          'strip-out-solutions/pallet-racking-removal': 'Pallet Racking Removal'
    }
  },
  {
    label: "Make Good Solutions",
    href: "/services/make-good-solutions/",  // Clickable category header
    slugs: ['make-good-solutions/flooring-reinstatement', 'make-good-solutions/line-marking', 'make-good-solutions/patching-plastering', 'make-good-solutions/painting', 'make-good-solutions/suspended-ceilings', 'make-good-solutions/warehouse-flooring']
  },
  {
    label: "Handover Solutions",
    href: "/services/handover-solutions/",  // Clickable category header
    slugs: ['handover-solutions/end-of-lease-cleaning', 'handover-solutions/end-of-lease-relocation']
  },
  {
    label: "Remediation Solutions",
    href: "/services/remediation-solutions/",  // Clickable category header
    slugs: ['remediation-solutions/structural', 'remediation-solutions/cladding-glazing', 'remediation-solutions/fire-compliance-facade-cladding-remediation', 'remediation-solutions/waterproofing', 'remediation-solutions/water-damage-mould-remediation'],
    displayNames: {
      'remediation-solutions/structural': 'Structural',
      'remediation-solutions/cladding-glazing': 'Cladding & Glazing',
      'remediation-solutions/fire-compliance-facade-cladding-remediation': 'Fire Compliance & Facade Cladding Remediation',
      'remediation-solutions/waterproofing': 'Waterproofing',
      'remediation-solutions/water-damage-mould-remediation': 'Water Damage & Mould Remediation'
    }
  },
  {
    label: "Roofing Solutions",
    href: "/services/roofing-solutions/",  // Clickable category header
    slugs: ['roofing-solutions/roof-leak-repairs', 'roofing-solutions/metal-roof-replacement', 'roofing-solutions/box-gutters-roof-drainage', 'roofing-solutions/polycarbonate-roofing-skylights', 'roofing-solutions/storm-damage-make-safe', 'roofing-solutions/roof-inspections-maintenance'],
    displayNames: {
      'roofing-solutions/roof-leak-repairs': 'Roof Leak Repairs',
      'roofing-solutions/metal-roof-replacement': 'Metal Roof Replacement',
      'roofing-solutions/box-gutters-roof-drainage': 'Box Gutters & Drainage',
      'roofing-solutions/polycarbonate-roofing-skylights': 'Polycarbonate Roofing & Skylights',
      'roofing-solutions/storm-damage-make-safe': 'Storm Damage & Make Safe',
      'roofing-solutions/roof-inspections-maintenance': 'Roof Inspections & Maintenance'
    }
  }
];

// Published services for a category, in the order listed above
export const getServicesByCategory = (slugs: string[]) => {
  const publishedServices = getPublishedServices();
  return slugs
    .map(slug => publishedServices.find(service => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
};
