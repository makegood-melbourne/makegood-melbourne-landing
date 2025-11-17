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
    title: "Make Good Services in Richmond",
    description: "Professional make good services for Richmond businesses. From Swan Street offices to industrial facilities, we deliver exceptional property restoration.",
    keyAreas: [
      "Swan Street businesses",
      "Bridge Road retail",
      "Church Street offices",
      "Cremorne industrial",
      "Victoria Gardens area"
    ],
    businessTypes: [
      "Corporate offices",
      "Retail stores",
      "Warehouses",
      "Manufacturing facilities",
      "Commercial properties"
    ],
    testimonial: {
      quote: "Make Good Melbourne handled our Richmond warehouse restoration professionally. Their team was efficient, thorough, and completed everything on schedule. Highly recommended!",
      author: "Sarah Chen",
      business: "Richmond Logistics"
    }
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};
