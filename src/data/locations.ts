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

export const locations: Location[] = [];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};
