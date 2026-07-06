import commercialHeroImage from "@/assets/industries/commercial-office-make-good-polished-concrete-melbourne.jpeg";
import industrialHeroImage from "@/assets/industries/industrial-warehouse-make-good-empty-floor-melbourne.jpeg";
import warehouseFulfilmentHeroImage from "@/assets/industries/warehouse-fulfilment-centre-racking-make-good-melbourne.webp";
import warehousePolishedFloorImage from "@/assets/industries/industrial-warehouse-polished-concrete-floor-melbourne.jpeg";
import warehouseEmptyFloorImage from "@/assets/industries/industrial-warehouse-make-good-empty-floor-melbourne.jpeg";
import warehouseSteelTrussesImage from "@/assets/industries/industrial-warehouse-steel-trusses-skylights-melbourne.jpeg";
import warehouseFactoryRackingImage from "@/assets/industries/industrial-factory-roof-structure-racking-melbourne.jpeg";
import warehouseOpenFloorImage from "@/assets/industries/commercial-make-good-open-floor-industrial-windows-melbourne.jpeg";

import remediationHeroImage from "@/assets/services/glazing-facade-installation-commercial-building-melbourne.jpg";
import remediationCladdingImage from "@/assets/services/cladding-remediation-facade-glazing-melbourne.jpeg";
import remediationConcreteImage from "@/assets/services/concrete-cancer-exposed-rebar-column-spalling-melbourne.jpeg";

export interface FeaturedSection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: string; // Description of ideal image for this section
}

export interface Industry {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePlaceholder?: string; // Description of ideal hero image
  ogImage?: string; // Public URL for Open Graph image
  introduction: string;
  aboutTitlePrefix?: string;
  aboutTitleHighlight?: string;
  aboutContentLeft?: string[];
  aboutContentRight?: string[];
  propertyTypesTitle?: string;
  propertyTypesTitleHighlight?: string;
  propertyTypesSubtitle?: string;
  propertyTypes?: {
    title: string;
    description: string;
    image?: unknown;
    imageAlt?: string;
  }[];
  faqTitle?: string;
  faqSubtitle?: string;
  featuredSections?: FeaturedSection[];
  challenges: {
    title: string;
    description: string;
  }[];
  services: string[]; // service slugs
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industries: Industry[] = [
  {
    name: "Commercial",
    slug: "commercial",
    title: "Office & Commercial Make Good Melbourne",
    metaTitle: "Office & Commercial Make Good Melbourne | Retail Spaces",
    metaDescription: "Commercial make good services across Melbourne. Office strip outs, retail fitout removal, painting, flooring and full restoration. Fixed-price quotes. Call today.",
    heroText: "Complete make good solutions for Melbourne offices, retail spaces and commercial properties — from single tenancies to entire commercial floors.",
    heroImage: commercialHeroImage,
    heroImageAlt: "Completed commercial office make good with polished concrete floors and exposed ceiling services in Melbourne",
    ogImage: "/og/commercial.jpg",
    introduction: "Office make goods require precision, coordination and minimal disruption to building operations. Whether you're vacating a single office suite, retail tenancy or an entire floor, we deliver comprehensive restoration that meets landlord specifications and building management requirements. We coordinate all trades, manage after-hours access and provide full documentation for a successful handover.",
    challenges: [
      {
        title: "Building Access & Coordination",
        description: "Commercial buildings require coordination with building management, after-hours access and compliance with building rules."
      },
      {
        title: "Fitout Removal",
        description: "Office partitions, built-in furniture, reception desks and custom joinery require careful removal and disposal."
      },
      {
        title: "Floor Restoration",
        description: "Carpet tiles, vinyl, raised access flooring and damaged subfloors need professional removal and restoration."
      },
      {
        title: "Ceiling & Services",
        description: "Suspended ceilings, lighting modifications and data cabling all need to be addressed to meet base building specifications."
      }
    ],
    services: ["make-good-solutions/painting", "make-good-solutions/suspended-ceilings", "handover-solutions/end-of-lease-cleaning", "make-good-solutions/patching-plastering", "make-good-solutions/flooring-reinstatement"],
    benefits: [
      "Experienced in Melbourne's major commercial buildings",
      "After-hours and weekend work available",
      "Coordination with building management",
      "All trades under one contractor",
      "Fixed-price quotes with no surprises",
      "Full documentation for bond return"
    ],
    faqs: [
      {
        question: "How long does a commercial office make good take?",
        answer: "A typical commercial office make good takes 1-4 weeks depending on the size and scope. We work efficiently and can often accommodate tight deadlines with extended hours."
      },
      {
        question: "Can you work after hours to avoid disrupting other tenants?",
        answer: "Yes, we regularly work after-hours, overnight and on weekends to comply with building management requirements and minimise disruption to other tenants."
      },
      {
        question: "Do you handle the building management coordination?",
        answer: "Absolutely. We coordinate with building management for access, permits, rubbish removal scheduling and any building-specific requirements."
      }
    ]
  },
  {
    name: "Industrial",
    slug: "industrial",
    title: "Warehouse & Industrial Make Good Melbourne",
    metaTitle: "Warehouse & Industrial Make Good Melbourne | Factories",
    metaDescription: "Industrial make good specialists Melbourne. Factory strip outs, warehouse restoration, racking removal, floor repair, hazardous material removal. Full compliance. Free quotes.",
    heroText: "Warehouse and industrial make good services for Melbourne factories, warehouses and manufacturing facilities — from pallet racking removal to complete site restoration.",
    heroImage: industrialHeroImage,
    heroImageAlt: "Empty industrial warehouse after make good restoration with polished concrete floor and steel trusses in Melbourne",
    ogImage: "/og/industrial.jpg",
    introduction: "Industrial properties present the most complex make good challenges. Decades of manufacturing operations, heavy machinery anchored to floors, oil-stained concrete, hazardous materials and substantial modifications all require specialist handling. We've restored factories and warehouses across Melbourne to handover-ready condition, regardless of what operations occurred there.",
    challenges: [
      {
        title: "Heavy Machinery Removal",
        description: "Manufacturing equipment bolted to floors requires specialist disconnection, removal and anchor remediation."
      },
      {
        title: "Floor Contamination",
        description: "Years of industrial operations leave oil, chemical and other contamination requiring specialist treatment."
      },
      {
        title: "Hazardous Materials",
        description: "Asbestos, lead paint and other hazardous materials common in older industrial buildings require licensed removal."
      },
      {
        title: "Structural Modifications",
        description: "Mezzanines, partition walls and structural additions often need removal and slab restoration."
      }
    ],
    services: ["strip-out-solutions/pallet-racking-removal", "make-good-solutions/warehouse-flooring", "make-good-solutions/line-marking", "handover-solutions/end-of-lease-cleaning", "remediation-solutions/structural"],
    benefits: [
      "Heavy machinery removal and disposal",
      "Floor anchor extraction and repair",
      "Oil and chemical contamination treatment",
      "Hazardous material removal (licensed)",
      "Mezzanine and structural demolition",
      "Complete floor restoration"
    ],
    faqs: [
      {
        question: "Can you remove contaminated concrete?",
        answer: "Yes, we can grind, scarify or cut out contaminated concrete sections and restore with new concrete or epoxy coatings."
      },
      {
        question: "Do you handle asbestos removal?",
        answer: "We work with licensed asbestos removal contractors and coordinate the entire process, including testing, removal and clearance certification."
      },
      {
        question: "How do you handle machinery that's bolted to the floor?",
        answer: "We disconnect services, remove equipment, then core drill out floor anchors, fill with epoxy and grind flush to restore the slab."
      }
    ]
  },
  {
    name: "Warehouses & Logistics",
    slug: "warehouses-logistics",
    title: "WAREHOUSE & LOGISTICS MAKE GOOD MELBOURNE",
    metaTitle: "Warehouse & Logistics Make Good Melbourne | Make Good, BETTER.",
    metaDescription: "Warehouse and logistics make good services in Melbourne. Pallet racking removal, slab repairs, line marking, strip out and handover works for lease compliance.",
    heroText: "Warehouse and fulfilment tenancies leave behind racking, slab anchors, worn traffic areas, line marking, office pods, packing benches and service changes. Make Good Melbourne coordinates the strip out, floor restoration and handover works needed to return the property in line with the lease requirements.",
    heroImage: warehouseFulfilmentHeroImage,
    heroImageAlt: "Warehouse fulfilment centre with pallet racking and clear concrete floors in Melbourne",
    ogImage: "/og/industrial.jpg",
    introduction: "",
    aboutTitlePrefix: "NOT JUST A LARGER",
    aboutTitleHighlight: "OFFICE DE-FIT",
    aboutContentLeft: [
      "Warehouse make good is not just a larger office de-fit. The physical wear in a fulfilment centre, distribution warehouse or 3PL facility is concentrated in the slab, racking zones, loading areas and dispatch routes."
    ],
    aboutContentRight: [
      "Racking comes out before slab repairs start. Anchor holes are filled before grinding. Line marking is removed or reinstated in the right sequence.",
      "Make Good Melbourne works across warehouses, fulfilment centres, 3PL facilities, storage sites, dispatch operations and distribution warehouses throughout Melbourne, coordinating the strip out, floor restoration and handover works as one practical scope."
    ],
    propertyTypesTitle: "PROPERTY TYPES WE",
    propertyTypesTitleHighlight: "MAKE GOOD",
    propertyTypesSubtitle: "Distribution warehouses, fulfilment centres and 3PL facilities each wear differently and hand back differently. We plan the scope around the slab, the racking and the lease.",
    propertyTypes: [
      {
        title: "Distribution Warehouses",
        description: "High-turnover sites with heavy forklift traffic and racking runs. We strip the racking, repair the slab and get the floor back to handover condition.",
        image: warehouseEmptyFloorImage,
        imageAlt: "Empty distribution warehouse floor after make good in Melbourne"
      },
      {
        title: "Fulfilment Centres",
        description: "Pick-and-pack fitouts leave behind mezzanines, packing benches and cabling. We clear it out in the right order so the base building reads clean.",
        image: warehouseFulfilmentHeroImage,
        imageAlt: "Fulfilment centre with pallet racking during make good in Melbourne"
      },
      {
        title: "3PL Facilities",
        description: "Multi-tenant logistics sites with shared docks and tight handover windows. We work around the schedule so your exit does not hold up the next tenant.",
        image: warehousePolishedFloorImage,
        imageAlt: "Polished concrete floor in a 3PL logistics facility in Melbourne"
      },
      {
        title: "Cold Storage & Temperature-Controlled",
        description: "Insulated panel, refrigeration mounts and specialised flooring need careful removal. We make safe the services first, then bring the space back to base.",
        image: warehouseSteelTrussesImage,
        imageAlt: "Steel trusses and skylights in a temperature-controlled warehouse in Melbourne"
      },
      {
        title: "Manufacturing & Light Industrial",
        description: "Machinery bolts, bunding, three-phase feeds and slab damage from production lines. We handle the make safe, the removal and the slab repairs as one scope.",
        image: warehouseFactoryRackingImage,
        imageAlt: "Factory roof structure and racking during industrial make good in Melbourne"
      },
      {
        title: "Storage & Self-Storage",
        description: "Partition walls, roller doors and unit fitouts stripped back to an open shell. We patch, repair and clean so the site presents for the next lease.",
        image: warehouseOpenFloorImage,
        imageAlt: "Open industrial floor with windows after storage facility make good in Melbourne"
      }
    ],
    scopeTitle: "WAREHOUSE & LOGISTICS MAKE GOOD",
    scopeTitleHighlight: "SCOPE",
    scopeRows: [
      {
        scope: "Pallet Racking Removal",
        worksIncluded: "Dismantling racking systems, removing fixings and preparing slab areas after anchors are taken out so floor repair works can follow without delay.",
        link: "/services/strip-out-solutions/pallet-racking-removal/"
      },
      {
        scope: "Slab and Floor Repairs",
        worksIncluded: "Anchor holes, concrete damage, traffic wear, floor coating removal and surface preparation are assessed against the lease requirements and slab condition.",
        link: "/services/make-good-solutions/warehouse-flooring/"
      },
      {
        scope: "Line Marking",
        worksIncluded: "Removal, reinstatement or updating of warehouse, loading bay and pedestrian line marking to match the agreed handover condition.",
        link: "/services/make-good-solutions/line-marking/"
      },
      {
        scope: "Internal Strip Out",
        worksIncluded: "Packing benches, office pods, partitions, redundant fixtures and tenancy-specific fitout removed in the right order so floor and wall repairs can follow properly.",
        link: "/services/strip-out-solutions/demolition/"
      },
      {
        scope: "Make Safe Coordination",
        worksIncluded: "Electrical, plumbing, fire services, HVAC and data isolation coordinated before removal works begin where the scope requires it.",
        link: "/services/strip-out-solutions/make-safe/"
      },
      {
        scope: "End-of-Lease Cleaning and Site Clearing",
        worksIncluded: "Final warehouse floor cleaning, loading dock presentation, waste removal and site clearing for landlord or property manager inspection.",
        link: "/services/handover-solutions/end-of-lease-cleaning/"
      }
    ],
    services: [
      "strip-out-solutions/demolition",
      "handover-solutions/end-of-lease-cleaning",
      "make-good-solutions/flooring-reinstatement",
      "make-good-solutions/line-marking",
      "strip-out-solutions/make-safe",
      "make-good-solutions/painting",
      "strip-out-solutions/pallet-racking-removal",
      "make-good-solutions/patching-plastering",
      "make-good-solutions/warehouse-flooring"
    ],
    processTitle: "OUR WAREHOUSE MAKE GOOD PROCESS",
    processSteps: [
      { step: "Site Walkthrough", description: "We inspect the warehouse, review the racking layout, slab condition, line marking and lease requirements and identify access or dock constraints." },
      { step: "Scope & Quotation", description: "We prepare a fixed-price scope based on the lease, make good notes, photos and the trade sequence the floor works require." },
      { step: "Make Safe & Racking Removal", description: "Services are isolated where required, then racking, shelving and tenancy fitout come out with anchors removed ready for floor repairs." },
      { step: "Floor Restoration & Make Good Works", description: "Anchor holes filled, slab repairs, grinding, line marking removal or reinstatement, patching, painting and related trade items completed in order." },
      { step: "Handover Preparation", description: "Final cleaning, waste removal and presentation completed so the warehouse is ready for landlord or property manager inspection." }
    ],
    ctaTitle: "NEED A WAREHOUSE OR LOGISTICS MAKE GOOD?",
    ctaSubtitle: "We do Make Goods all day, every day.",
    ctaText: "Send through the property address, lease timing, photos, racking layout and any make good notes. We will review the strip out, floor restoration and handover scope and provide a practical fixed-price quote.",
    faqTitle: "WAREHOUSES & LOGISTICS MAKE GOOD FAQS",
    faqSubtitle: "Common questions about warehouse make goods",
    faqs: [
      {
        question: "Do you remove pallet racking before warehouse handover?",
        answer: "Yes. We dismantle racking systems, remove anchors and prepare the slab areas for repair. The removal sequence is planned so floor works can follow without starting from a worse position than necessary. Learn more about our [pallet racking removal](/services/strip-out-solutions/pallet-racking-removal/) services."
      },
      {
        question: "What affects the cost of a warehouse make good?",
        answer: "The size of the facility, the extent of racking to be removed, the condition of the slab, the amount of line marking and any specific lease requirements all affect the cost. We provide a fixed-price quote after our initial site walkthrough."
      },
      {
        question: "How early should we book warehouse make good works?",
        answer: "We recommend booking at least 4-6 weeks before your lease end date. This allows time for a proper assessment, quotation and coordination of the necessary trades, especially if you have a staged relocation."
      },
      {
        question: "Can you repair slab damage from racking anchors and forklift traffic?",
        answer: "Yes. Anchor holes, concrete damage, surface wear and coating removal are assessed and addressed as part of the floor scope. The extent of repairs depends on the lease requirements and the condition of the slab."
      },
      {
        question: "Do you handle line marking as part of the make good?",
        answer: "Yes. We can remove existing line marking, reinstate marking to the original layout or update it to match the agreed handover condition. The scope depends on the lease and ingoing condition report."
      },
      {
        question: "Can you work around a staged warehouse move?",
        answer: "Yes. Where the relocation is happening in stages, we can plan the strip out and make good works around the vacating schedule so the handover programme stays on track."
      },
      {
        question: "Is this service for fulfilment and storage facilities?",
        answer: "Yes. This page is for warehouse, fulfilment, storage and distribution tenancies. If you operate a related light industrial facility, send through the details and we can review whether the make good scope aligns with what we do."
      },
      {
        question: "Can you coordinate with our own trades?",
        answer: "Yes. If you have nominated trades for specific items, we can coordinate with them while managing the remaining make good scope as one project."
      }
    ]
  },
  {
    name: "Remediation",
    slug: "remediation",
    title: "Building Remediation Melbourne",
    metaTitle: "Building Remediation Melbourne | Make Good, BETTER.",
    metaDescription: "Specialist building remediation services in Melbourne. Cladding & glazing repairs, structural remediation, concrete cancer treatment, waterproofing solutions. Licensed contractors.",
    heroText: "Expert building remediation services across Melbourne—structural repairs, cladding replacement, concrete restoration and waterproofing solutions.",
    heroImage: remediationHeroImage,
    heroImageAlt: "Commercial building glazing and facade installation during remediation works in Melbourne",
    ogImage: "/og/remediation.jpg",
    introduction: "Building remediation addresses defects and deterioration that affect a building's structural integrity, safety and weatherproofing. From combustible cladding replacement to concrete cancer treatment, our remediation services restore buildings to compliant, safe condition. We work with strata managers, building owners and facility managers across Melbourne to deliver lasting solutions.",
    featuredSections: [
      {
        title: "Structural Systems & Building Envelope",
        description: "Our structural works are planned and executed with precision to deliver strength, accuracy, and efficiency. We coordinate fabrication, transport, and installation to ensure every lift, alignment, and connection meets engineering tolerances and safety requirements. Roofing, cladding, and glazing are installed to exacting standards, achieving early lock-up while delivering superior weatherproofing to protect your asset and enable internal works to progress without interruption.",
        image: remediationCladdingImage,
        imageAlt: "Building facade cladding remediation and glazing replacement works in Melbourne"
      },
      {
        title: "Concrete & Structural Restoration",
        description: "Concrete cancer, spalling and reinforcement corrosion are addressed through proven repair methodologies. We remove deteriorated concrete, treat exposed reinforcement with protective coatings, and restore structural elements using high-performance repair mortars. Our approach extends the service life of your building while meeting engineering certification requirements.",
        image: remediationConcreteImage,
        imageAlt: "Concrete cancer repair showing exposed steel reinforcement and spalling on column in Melbourne"
      }
    ],
    challenges: [
      {
        title: "Cladding & Glazing Defects",
        description: "Non-compliant or damaged cladding requires careful removal and replacement with compliant materials."
      },
      {
        title: "Structural Deterioration",
        description: "Concrete cancer, spalling and reinforcement corrosion compromise structural integrity and require expert repair."
      },
      {
        title: "Waterproofing Failures",
        description: "Failed membranes in balconies, roofs and wet areas lead to water ingress and building damage."
      },
      {
        title: "Compliance Requirements",
        description: "Remediation work must meet current building codes and often requires engineering certification."
      }
    ],
    services: ["cladding-glazing", "structural-remediation", "concrete-floor-repair", "waterproofing"],
    benefits: [
      "Licensed and insured contractors",
      "Engineering-certified solutions",
      "Compliant material specifications",
      "Minimal disruption to occupants",
      "Comprehensive project documentation",
      "Long-term warranty on works"
    ],
    faqs: [
      {
        question: "What is cladding remediation?",
        answer: "Cladding remediation involves removing non-compliant or defective external cladding and replacing it with materials that meet current fire safety and building standards."
      },
      {
        question: "What is concrete cancer?",
        answer: "Concrete cancer occurs when steel reinforcement corrodes and expands, causing the surrounding concrete to crack and spall. It requires removing damaged concrete, treating reinforcement and applying protective coatings."
      },
      {
        question: "Do you provide engineering certification?",
        answer: "Yes, we work with structural engineers to provide certification for remediation works, ensuring compliance with building regulations and providing documentation for building records."
      }
    ]
  }
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};

export const getAllIndustries = (): Industry[] => {
  return industries;
};
