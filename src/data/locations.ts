export interface Location {
  name: string;
  slug: string;
  title: string;
  description: string;
  keyAreas: string[];
  businessTypes: string[];
  testimonial?: {
    quote: string;
    author: string;
    business: string;
  };
}

export const locations: Location[] = [
  {
    name: "Richmond",
    slug: "richmond",
    title: "Make Good Services Richmond",
    description: "Professional make good and end of lease services for Richmond's commercial and industrial properties. From Bridge Road offices to Cremorne warehouses, we deliver expert restoration solutions.",
    keyAreas: [
      "Bridge Road precinct",
      "Swan Street businesses",
      "Church Street offices",
      "Cremorne industrial",
      "Victoria Gardens area",
      "Burnley surrounds"
    ],
    businessTypes: [
      "Corporate offices",
      "Retail showrooms",
      "Warehouses & logistics",
      "Manufacturing facilities",
      "Medical & dental practices",
      "Creative studios"
    ],
    testimonial: {
      quote: "Make Good Melbourne handled our entire office strip out flawlessly. Professional team, on time, and the final result exceeded our expectations.",
      author: "Sarah M.",
      business: "Property Manager, Richmond"
    }
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};
