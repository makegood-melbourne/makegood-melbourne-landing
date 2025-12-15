import commercialCleaningImage from "@/assets/services/commercial-cleaning-melbourne-supplies.jpeg";

export interface Service {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  heroText: string;
  heroImage?: string;
  heroImageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  relatedServices: string[];
  category: 'demolition' | 'make-good' | 'trade' | 'cleaning';
}

export const services: Service[] = [
  {
    name: "Office Strip Out",
    slug: "office-strip-out",
    title: "Office Strip Out Melbourne",
    metaTitle: "Office Strip Out Melbourne | Commercial Experts",
    description: "Complete office strip out services for Melbourne commercial properties. We remove partitions, furniture, flooring and all fitout elements efficiently.",
    metaDescription: "Professional office strip out Melbourne. Remove partitions, ceilings, flooring and fitouts. Fast turnaround, full waste disposal. Free quotes from licensed contractors.",
    heroText: "Transform your commercial space back to base building condition with our comprehensive office strip out services.",
    benefits: [
      "Complete fitout removal",
      "Partition and ceiling demolition",
      "Floor covering removal",
      "Electrical and data de-commissioning",
      "Full waste management included",
      "Minimal disruption to building"
    ],
    process: [
      { step: "Site Assessment", description: "We inspect your office to understand scope and identify any hazardous materials." },
      { step: "Detailed Quote", description: "Transparent pricing covering all strip out works, waste disposal and make good." },
      { step: "Safe Execution", description: "Our team completes the strip out efficiently, minimising disruption to other tenants." },
      { step: "Clean Handover", description: "Space returned to base building condition, ready for the next tenant." }
    ],
    relatedServices: ["commercial-make-good", "carpet-removal", "ceiling-tile-replacement"],
    category: "demolition"
  },
  {
    name: "Warehouse Make Good",
    slug: "warehouse-make-good",
    title: "Warehouse Make Good Melbourne",
    metaTitle: "Warehouse Make Good Melbourne | Industrial Experts",
    description: "Industrial warehouse make good services across Melbourne. From floor repairs to racking removal, we restore warehouses to lease-compliant condition.",
    metaDescription: "Warehouse make good Melbourne specialists. Floor restoration, racking removal, line marking and industrial repairs. End of lease compliance guaranteed. Free quotes.",
    heroText: "Restore your industrial warehouse to original condition and meet all end of lease obligations with our specialist services.",
    benefits: [
      "Complete racking removal",
      "Concrete floor restoration",
      "Line marking reinstatement",
      "Roller door and dock repairs",
      "Electrical make-safe works",
      "Industrial cleaning included"
    ],
    process: [
      { step: "Lease Review", description: "We review your lease obligations to ensure all requirements are addressed." },
      { step: "Scope Development", description: "Detailed scope covering all make good works required for compliance." },
      { step: "Works Execution", description: "Our industrial team completes restoration to original condition." },
      { step: "Landlord Sign-off", description: "We liaise with landlords to achieve smooth handover and bond return." }
    ],
    relatedServices: ["pallet-racking-removal", "epoxy-flooring", "line-marking"],
    category: "make-good"
  },
  {
    name: "Pallet Racking Removal",
    slug: "pallet-racking-removal",
    title: "Pallet Racking Removal Melbourne",
    metaTitle: "Pallet Racking Removal Melbourne | Fast Service",
    description: "Safe and efficient pallet racking removal across Melbourne. We dismantle, remove and dispose of all racking systems for warehouse make goods.",
    metaDescription: "Pallet racking removal Melbourne. Safe dismantling, transport and disposal of warehouse racking. Licensed removalists, competitive pricing. Free quotes available.",
    heroText: "Safe, efficient removal of pallet racking systems to meet your warehouse make good requirements.",
    benefits: [
      "All racking types handled",
      "Safe dismantling procedures",
      "Floor anchor removal",
      "Concrete patching included",
      "Recycling where possible",
      "Fast turnaround times"
    ],
    process: [
      { step: "Racking Assessment", description: "We assess racking type, quantity and condition to plan safe removal." },
      { step: "Safety Planning", description: "Detailed safety plan developed for dismantling and removal." },
      { step: "Professional Removal", description: "Experienced team dismantles and removes all racking safely." },
      { step: "Floor Remediation", description: "Anchor points removed and concrete patched to restore floor." }
    ],
    relatedServices: ["warehouse-make-good", "concrete-floor-repair", "epoxy-flooring"],
    category: "demolition"
  },
  {
    name: "Epoxy Flooring",
    slug: "epoxy-flooring",
    title: "Epoxy Flooring Melbourne",
    metaTitle: "Epoxy Flooring Melbourne | Industrial Specialists",
    description: "Industrial epoxy flooring solutions for Melbourne warehouses and factories. We repair, resurface and install durable epoxy floor coatings.",
    metaDescription: "Industrial epoxy flooring Melbourne. Warehouse floor coatings, concrete repair and resurfacing. Durable, chemical-resistant finishes. Licensed applicators. Free quotes.",
    heroText: "Durable, professional epoxy flooring solutions for warehouses, factories and commercial facilities.",
    benefits: [
      "Chemical-resistant finishes",
      "Anti-slip coatings available",
      "Concrete crack repair",
      "Fast curing options",
      "Range of colours and finishes",
      "Long-lasting durability"
    ],
    process: [
      { step: "Floor Assessment", description: "We inspect your concrete floor condition and discuss requirements." },
      { step: "Surface Preparation", description: "Diamond grinding and crack repair to ensure proper adhesion." },
      { step: "Epoxy Application", description: "Professional application of primer, base coat and top coat." },
      { step: "Curing and Handover", description: "Proper cure time observed before returning floor to service." }
    ],
    relatedServices: ["concrete-floor-repair", "warehouse-make-good", "line-marking"],
    category: "trade"
  },
  {
    name: "Commercial Painting",
    slug: "commercial-painting",
    title: "Commercial Painting Melbourne",
    metaTitle: "Commercial Painting Melbourne | Quality Finish",
    description: "Professional commercial painting services for Melbourne offices, warehouses and retail spaces. Quality finishes for make good and refurbishment projects.",
    metaDescription: "Commercial painting Melbourne. Office, warehouse and retail painting. Make good painting, touch-ups and full repaints. Licensed painters, quality guaranteed. Free quotes.",
    heroText: "Transform your commercial space with professional painting services that meet landlord and lease requirements.",
    benefits: [
      "Interior and exterior painting",
      "Make good colour matching",
      "Low-odour paint options",
      "After-hours work available",
      "All surface types covered",
      "Quality finish guaranteed"
    ],
    process: [
      { step: "Colour Consultation", description: "We match existing colours or discuss new schemes for your space." },
      { step: "Surface Preparation", description: "Walls patched, sanded and primed for perfect adhesion." },
      { step: "Professional Application", description: "Skilled painters apply coats for even, lasting coverage." },
      { step: "Final Inspection", description: "Quality check to ensure flawless finish before handover." }
    ],
    relatedServices: ["patching-plastering", "commercial-make-good", "ceiling-tile-replacement"],
    category: "make-good"
  },
  {
    name: "Electrical Make Safe",
    slug: "electrical-make-safe",
    title: "Electrical Make Safe Melbourne",
    metaTitle: "Electrical Make Safe Melbourne | Licensed Sparkies",
    description: "Licensed electrical make safe services for Melbourne commercial and industrial properties. Safe disconnection, capping and removal of electrical installations.",
    metaDescription: "Electrical make safe Melbourne. Licensed electricians for safe disconnection, capping and removal. Commercial and industrial specialists. Certificates provided. Free quotes.",
    heroText: "Safe, compliant electrical disconnection and removal by licensed Melbourne electricians.",
    benefits: [
      "Licensed electricians",
      "Compliance certificates",
      "All installations covered",
      "Data and comms removal",
      "Switchboard modifications",
      "After-hours available"
    ],
    process: [
      { step: "Electrical Audit", description: "Licensed electrician assesses all circuits and installations to be removed." },
      { step: "Safe Isolation", description: "Circuits safely isolated and de-energised before any work begins." },
      { step: "Removal and Capping", description: "Installations removed and cables safely capped or terminated." },
      { step: "Certification", description: "Compliance certificate issued for all electrical make safe works." }
    ],
    relatedServices: ["office-strip-out", "warehouse-make-good", "led-lighting"],
    category: "demolition"
  },
  {
    name: "Concrete Floor Repair",
    slug: "concrete-floor-repair",
    title: "Concrete Floor Repair Melbourne",
    metaTitle: "Concrete Floor Repair Melbourne | Industrial Experts",
    description: "Industrial concrete floor repair services across Melbourne. We fix cracks, spalling, pitting and damage for warehouse and factory floors.",
    metaDescription: "Concrete floor repair Melbourne. Industrial crack repair, spalling fix, joint restoration and resurfacing. Warehouse and factory specialists. Free quotes available.",
    heroText: "Restore your industrial concrete floors to meet lease obligations and provide a safe working surface.",
    benefits: [
      "Crack injection and repair",
      "Spalling and pitting repair",
      "Joint restoration",
      "High-traffic area solutions",
      "Fast-cure products available",
      "Colour-matched finishes"
    ],
    process: [
      { step: "Floor Survey", description: "We assess damage extent and identify underlying causes." },
      { step: "Repair Specification", description: "Appropriate repair methods selected for each defect type." },
      { step: "Professional Repair", description: "Skilled technicians complete repairs using industrial-grade materials." },
      { step: "Surface Restoration", description: "Repaired areas blended and finished to match surrounding floor." }
    ],
    relatedServices: ["epoxy-flooring", "warehouse-make-good", "line-marking"],
    category: "trade"
  },
  {
    name: "Ceiling Tile Replacement",
    slug: "ceiling-tile-replacement",
    title: "Ceiling Tile Replacement Melbourne",
    metaTitle: "Ceiling Tile Replacement Melbourne | Fast Service",
    description: "Commercial ceiling tile replacement and repair services in Melbourne. We match, replace and restore suspended ceiling systems for make goods.",
    metaDescription: "Ceiling tile replacement Melbourne. Suspended ceiling repairs, tile matching and grid restoration. Commercial offices and retail. Fast service, quality finish. Free quotes.",
    heroText: "Restore your commercial ceiling to perfect condition with professional tile replacement and grid repairs.",
    benefits: [
      "Tile matching service",
      "Grid and suspension repair",
      "Stain and damage repair",
      "Full ceiling replacement",
      "Access panel installation",
      "Minimal disruption"
    ],
    process: [
      { step: "Ceiling Inspection", description: "We assess damage and identify matching tiles for replacement." },
      { step: "Material Sourcing", description: "Matching tiles sourced or closest alternatives recommended." },
      { step: "Professional Installation", description: "Damaged tiles replaced and grid repaired as needed." },
      { step: "Final Inspection", description: "Ceiling checked for uniform appearance and proper fit." }
    ],
    relatedServices: ["commercial-painting", "office-strip-out", "commercial-make-good"],
    category: "make-good"
  },
  {
    name: "Line Marking",
    slug: "line-marking",
    title: "Line Marking Melbourne",
    metaTitle: "Line Marking Melbourne | Warehouse & Car Park",
    description: "Industrial and commercial line marking services in Melbourne. Warehouse floor markings, car park lines and safety zones professionally applied.",
    metaDescription: "Line marking Melbourne. Warehouse floor markings, car park lines, safety zones and pedestrian walkways. Durable paints and thermoplastics. Free quotes available.",
    heroText: "Professional line marking for warehouses, car parks and commercial facilities across Melbourne.",
    benefits: [
      "Durable industrial paints",
      "Thermoplastic available",
      "Safety zone marking",
      "Pedestrian walkways",
      "Pallet and bay locations",
      "Fast drying formulas"
    ],
    process: [
      { step: "Layout Planning", description: "We plan line locations based on your requirements or lease specifications." },
      { step: "Surface Preparation", description: "Floor cleaned and old markings removed where required." },
      { step: "Professional Application", description: "Precision application using professional line marking equipment." },
      { step: "Cure and Handover", description: "Lines protected during curing for durable, long-lasting finish." }
    ],
    relatedServices: ["epoxy-flooring", "warehouse-make-good", "concrete-floor-repair"],
    category: "trade"
  },
  {
    name: "Commercial Make Good",
    slug: "commercial-make-good",
    title: "Commercial Make Good Melbourne",
    metaTitle: "Commercial Make Good Melbourne | End of Lease",
    description: "Complete commercial make good services for Melbourne offices, retail and commercial properties. Full restoration to meet lease obligations.",
    metaDescription: "Commercial make good Melbourne. Office, retail and commercial property restoration. End of lease compliance, landlord liaison and full project management. Free quotes.",
    heroText: "Complete make good solutions for commercial properties, ensuring full lease compliance and smooth handover.",
    benefits: [
      "Full lease compliance",
      "Single point of contact",
      "All trades coordinated",
      "Landlord liaison included",
      "Bond return assistance",
      "Transparent pricing"
    ],
    process: [
      { step: "Lease Assessment", description: "We review your make good clause to understand all obligations." },
      { step: "Scope and Quote", description: "Detailed scope developed with transparent, competitive pricing." },
      { step: "Works Coordination", description: "All trades managed to complete works efficiently and on time." },
      { step: "Landlord Handover", description: "We coordinate final inspection and handover with your landlord." }
    ],
    relatedServices: ["office-strip-out", "commercial-painting", "ceiling-tile-replacement"],
    category: "make-good"
  },
  {
    name: "Patching and Plastering",
    slug: "patching-plastering",
    title: "Patching and Plastering Melbourne",
    metaTitle: "Patching and Plastering Melbourne | Commercial",
    description: "Commercial patching and plastering services for Melbourne offices and retail. Wall repairs, hole patching and plaster restoration for make goods.",
    metaDescription: "Commercial patching and plastering Melbourne. Wall repairs, hole filling, plaster restoration and smooth finishes. Make good specialists. Quality guaranteed. Free quotes.",
    heroText: "Restore walls to perfect condition with professional patching and plastering for your make good project.",
    benefits: [
      "All wall types covered",
      "Seamless repairs",
      "Texture matching",
      "Cornices and architraves",
      "Paint-ready finish",
      "Fast turnaround"
    ],
    process: [
      { step: "Damage Assessment", description: "We inspect all walls to identify repairs needed." },
      { step: "Preparation", description: "Areas prepared with appropriate backing and bonding agents." },
      { step: "Repair Application", description: "Skilled plasterers complete repairs with smooth, seamless finish." },
      { step: "Sanding and Prep", description: "Repairs sanded smooth, ready for painting." }
    ],
    relatedServices: ["commercial-painting", "commercial-make-good", "ceiling-tile-replacement"],
    category: "make-good"
  },
  {
    name: "LED Lighting Upgrade",
    slug: "led-lighting",
    title: "LED Lighting Upgrade Melbourne",
    metaTitle: "LED Lighting Upgrade Melbourne | Commercial",
    description: "Commercial LED lighting upgrades for Melbourne offices, warehouses and retail. Replace fluorescent with energy-efficient LED solutions.",
    metaDescription: "LED lighting upgrade Melbourne. Replace fluorescent with LED. Commercial offices, warehouses and retail. Energy savings, better light quality. Licensed electricians. Free quotes.",
    heroText: "Upgrade to energy-efficient LED lighting and reduce your commercial electricity costs.",
    benefits: [
      "Energy cost savings",
      "Better light quality",
      "Reduced maintenance",
      "All fittings replaced",
      "Disposal included",
      "Licensed electricians"
    ],
    process: [
      { step: "Lighting Audit", description: "We assess existing lighting and recommend LED alternatives." },
      { step: "Product Selection", description: "Quality LED products selected to suit your space and budget." },
      { step: "Professional Installation", description: "Licensed electricians replace all fittings efficiently." },
      { step: "Testing and Handover", description: "All new lighting tested and old fittings disposed of responsibly." }
    ],
    relatedServices: ["electrical-make-safe", "commercial-make-good", "office-strip-out"],
    category: "trade"
  },
  {
    name: "Commercial Cleaning",
    slug: "commercial-cleaning",
    title: "Commercial Cleaning Melbourne",
    metaTitle: "Commercial Cleaning Melbourne | Make Good & Handover",
    description: "Professional commercial cleaning services for Melbourne offices, warehouses and industrial properties. Ride-on sweepers for large areas, pressure washing, chemical cleaning and handover-ready results.",
    metaDescription: "Commercial cleaning Melbourne for make good projects. Ride-on sweepers, pressure washing, chemical cleaning for warehouses and offices. Pass your final inspection first time. Free quotes.",
    heroText: "Professional cleaning services that ensure your property passes final inspection and handover requirements.",
    secondaryImage: commercialCleaningImage,
    secondaryImageAlt: "Commercial cleaning supplies Melbourne - professional bucket, sponges and cleaning products for office and warehouse make good services",
    benefits: [
      "End of lease deep cleaning",
      "Post-construction cleaning",
      "Ride-on sweepers for warehouses",
      "Pressure washing (internal and external)",
      "Chemical floor cleaning",
      "Window and facade cleaning",
      "Industrial floor scrubbing",
      "Graffiti removal",
      "Carpet steam cleaning",
      "Handover-ready results"
    ],
    process: [
      { step: "Site Assessment", description: "We inspect your property to understand cleaning scope and landlord requirements." },
      { step: "Cleaning Plan", description: "Tailored cleaning schedule developed to meet your handover deadline." },
      { step: "Professional Execution", description: "Our experienced team delivers thorough cleaning to inspection standards." },
      { step: "Final Walkthrough", description: "Quality check to ensure property is handover-ready before you present to landlord." }
    ],
    relatedServices: ["commercial-make-good", "warehouse-make-good", "office-strip-out"],
    category: "cleaning"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: 'demolition' | 'make-good' | 'trade' | 'cleaning'): Service[] {
  return services.filter(service => service.category === category);
}
