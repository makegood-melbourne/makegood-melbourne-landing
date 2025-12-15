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
  // Location pages are disabled until designs are approved
  // and correct contact information is added
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};
