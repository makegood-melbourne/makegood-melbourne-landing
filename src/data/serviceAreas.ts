export interface ServiceArea {
  name: string;
  slug: string;
  description: string;
  icon: string;
  popular?: boolean;
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Melbourne CBD",
    slug: "melbourne-cbd",
    description: "Central business district",
    icon: "building-2",
    popular: true
  },
  {
    name: "South Melbourne",
    slug: "south-melbourne",
    description: "Vibrant inner suburb",
    icon: "map-pin",
    popular: true
  },
  {
    name: "Richmond",
    slug: "richmond",
    description: "Historic & trendy",
    icon: "map-pin",
    popular: true
  },
  {
    name: "Collingwood",
    slug: "collingwood",
    description: "Creative hub",
    icon: "map-pin",
    popular: true
  },
  {
    name: "Port Melbourne",
    slug: "port-melbourne",
    description: "Waterfront industrial",
    icon: "map-pin",
    popular: true
  },
  {
    name: "Docklands",
    slug: "docklands",
    description: "Modern waterfront",
    icon: "building",
    popular: true
  },
  {
    name: "Southbank",
    slug: "southbank",
    description: "Arts & entertainment",
    icon: "map-pin"
  },
  {
    name: "Carlton",
    slug: "carlton",
    description: "University precinct",
    icon: "map-pin"
  },
  {
    name: "Fitzroy",
    slug: "fitzroy",
    description: "Bohemian quarter",
    icon: "map-pin"
  },
  {
    name: "Abbotsford",
    slug: "abbotsford",
    description: "Industrial heritage",
    icon: "map-pin"
  }
];

export const getPopularAreas = () => serviceAreas.filter(area => area.popular);
