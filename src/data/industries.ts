import commercialHeroImage from "@/assets/industries/commercial-office-make-good-polished-concrete-melbourne.jpeg";
import industrialHeroImage from "@/assets/industries/industrial-warehouse-make-good-empty-floor-melbourne.jpeg";
import fulfilmentFitOutHeroImage from "@/assets/industries/fulfilment-warehouse-fit-out-carton-flow-racking-melbourne.webp";
import fitOutRackingImage from "@/assets/industries/warehouse-fulfilment-centre-racking-make-good-melbourne.webp";
import fitOutSlabImage from "@/assets/services/warehouse-floor-repairs-scope-polished-concrete-melbourne.jpeg";
import fitOutLineMarkingImage from "@/assets/services/warehouse-fresh-yellow-line-marking-polished-concrete-melbourne.jpg";

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
    icon?: string;
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
    name: "Warehouses & Fulfilment",
    slug: "warehouses-logistics",
    title: "FULFILMENT WAREHOUSE FIT OUT MELBOURNE",
    metaTitle: "Fulfilment Warehouse Fit Out Melbourne | Make Good, BETTER.",
    metaDescription: "Fulfilment warehouse fit out in Melbourne for e-commerce, 3PL and distribution. Racking, slab repairs and line marking before you move in. Fixed price quotes.",
    heroText: "Racking in. Slab fixed. Aisles marked. Ready to pick, pack and ship. Then at lease end, we take it all out and hand the building back. Warehouse fit out and make good for e-commerce brands, 3PL providers and distributors across Melbourne.",
    heroImage: fulfilmentFitOutHeroImage,
    heroImageAlt: "Blue and orange carton flow racking with roller lanes set up for order picking in a Melbourne fulfilment warehouse",
    ogImage: "/og/warehouses-fulfilment.jpg",
    introduction: "",
    aboutTitlePrefix: "MOVE IN. SCALE UP.",
    aboutTitleHighlight: "MOVE OUT.",
    aboutContentLeft: [
      "Online orders keep growing and so does the need for warehouses set up to ship them. A fulfilment fit out is racking, a floor that can take it and aisles marked for forklifts and pickers. Get the order wrong and you pay for it every day you operate.",
      "We check the slab before anything is bolted to it, lay the racking out around how you pick and mark the floor before your first delivery lands."
    ],
    aboutContentRight: [
      "When you outgrow the layout, we reconfigure it. When you outgrow the building, we move your racking to the next one.",
      "And when the lease ends, our [warehouse make good](/services/make-good-solutions/warehouse-make-good/) team strips it back, fills every anchor hole and hands the building back. One contractor for the life of the lease."
    ],
    propertyTypesTitle: "BUILT FOR HOW",
    propertyTypesTitleHighlight: "YOU SHIP",
    propertyTypesSubtitle: "Every operation moves stock differently. We set the warehouse up around yours.",
    propertyTypes: [
      {
        title: "E-commerce & Online Retail",
        icon: "package",
        description: "Lots of SKUs, lots of small orders. Bulk stock up high, pick faces down low and short walks to the packing benches."
      },
      {
        title: "3PL & Contract Logistics",
        icon: "truck",
        description: "Clients come and go and layouts change with them. Racking that can be reconfigured without shutting the dock."
      },
      {
        title: "Distribution & Wholesale",
        icon: "warehouse",
        description: "Full pallets in, full pallets out. Selective racking, aisles set for your forklifts and a floor that takes the traffic."
      }
    ],
    featuredSections: [
      {
        title: "Racking Laid Out for Picking, Not Just Storage",
        description: "A fulfilment warehouse isn't a storage shed. Stock comes in on pallets and leaves in small parcels, so the layout has to work for both. We put bulk stock in selective pallet racking up high and fast movers on longspan shelving at pick height, close to the packing benches. Aisle widths are set for your forklifts, bay sizes for your pallets and beam levels for your stock, with room left for the SKUs you'll add next year. Every bay is installed to AS 4084 with load signs fitted, so the racking is compliant from day one.",
        image: fitOutRackingImage,
        imageAlt: "Selective pallet racking installed in a Melbourne fulfilment warehouse fit out"
      },
      {
        title: "Floor First, Then Racking",
        description: "Racking is only as good as the slab it's bolted into. Most fit outs skip this step and anchor new frames straight into cracked joints, broken edges and old anchor holes left by the last tenant. We fix warehouse floors every day, so we check the slab before anything goes in. Cracks and joints are repaired, old holes filled and the surface ground or sealed where it needs it. Your racking sits on something solid and your forklifts run on a floor that won't break up under them.",
        image: fitOutSlabImage,
        imageAlt: "Warehouse concrete slab repaired and prepared before a racking fit out in Melbourne"
      },
      {
        title: "Marked, Signed and Ready for Peak",
        description: "Once the racking is in, we mark the aisles, pedestrian walkways, loading bays and forklift zones to suit the new layout. Column guards and end of aisle barriers go where forklifts turn. Then the site is cleared and handed over ready for stock. Moving in before peak season? Talk to us early. We work across Melbourne's south east warehouse belt, including Dandenong South, Hallam, Clayton and Mulgrave, and can stage a fit out so you're shipping before the October rush.",
        image: fitOutLineMarkingImage,
        imageAlt: "Fresh yellow aisle line marking on a polished concrete floor in a Melbourne warehouse"
      }
    ],
    scopeTitle: "FULFILMENT WAREHOUSE FIT OUT",
    scopeTitleHighlight: "SCOPE",
    scopeRows: [
      {
        scope: "Pallet Racking Installation",
        worksIncluded: "Layout, supply and install. Pallet racking and longspan shelving for pick faces, load signs and column guards.",
        link: "/services/racking-solutions/pallet-racking-installation/"
      },
      {
        scope: "Racking Relocation",
        worksIncluded: "Your existing racking moved from the old site and reinstalled to a new layout, or reconfigured where it stands.",
        link: "/services/racking-solutions/racking-relocation-reconfiguration/"
      },
      {
        scope: "Slab and Floor Repairs",
        worksIncluded: "Cracks, failed joints and old anchor holes fixed before racking goes in. Grinding and sealing where needed.",
        link: "/services/make-good-solutions/warehouse-flooring/"
      },
      {
        scope: "Line Marking",
        worksIncluded: "Aisles, pedestrian walkways, loading bays and forklift zones marked to suit the new layout.",
        link: "/services/make-good-solutions/line-marking/"
      },
      {
        scope: "Pallet Racking Removal",
        worksIncluded: "At lease end, racking out, anchors core drilled, holes epoxy filled and the slab ground flush.",
        link: "/services/strip-out-solutions/pallet-racking-removal/"
      },
      {
        scope: "Warehouse Make Good",
        worksIncluded: "At lease end, strip out, slab repairs, painting and cleaning so the building is ready for the landlord's inspection.",
        link: "/services/make-good-solutions/warehouse-make-good/"
      }
    ],
    services: [
      "racking-solutions/pallet-racking-installation",
      "racking-solutions/racking-relocation-reconfiguration",
      "make-good-solutions/warehouse-flooring",
      "make-good-solutions/line-marking",
      "strip-out-solutions/pallet-racking-removal",
      "handover-solutions/end-of-lease-cleaning"
    ],
    processTitle: "OUR FULFILMENT WAREHOUSE FIT OUT PROCESS",
    processSteps: [
      { step: "Site Visit", description: "We measure the warehouse, check the slab, ceiling height and sprinklers. Then we talk through your stock, orders and forklifts." },
      { step: "Layout and Quote", description: "A racking and floor plan with one fixed price for racking, slab repairs and line marking." },
      { step: "Floor First", description: "Slab repaired and prepared before anything is anchored to it." },
      { step: "Racking and Line Marking", description: "Racking installed, load signs and guards fitted, aisles and walkways marked." },
      { step: "Ready to Ship", description: "Site cleared and handed over ready for stock." }
    ],
    ctaTitle: "SETTING UP A FULFILMENT WAREHOUSE?",
    ctaSubtitle: "Racking, floors and line marking. One contractor.",
    ctaText: "Send us the address, a floor plan or a few photos and what you're storing. We'll come out, check the slab and come back with a layout and a fixed price.",
    faqTitle: "FULFILMENT WAREHOUSE FIT OUT FAQS",
    faqSubtitle: "Common questions about setting up and handing back Melbourne warehouses",
    faqs: [
      {
        question: "What's included in a fulfilment warehouse fit out?",
        answer: "Usually racking, slab repairs and line marking. We lay out the racking around your stock and how you pick, fix the floor before anything is anchored and mark the aisles and walkways. See [pallet racking installation](/services/racking-solutions/pallet-racking-installation/) for more."
      },
      {
        question: "Can you set up a warehouse for e-commerce picking?",
        answer: "Yes. Most online retailers need pallet racking for bulk stock and longspan shelving for pick faces, laid out so pickers aren't walking further than they need to."
      },
      {
        question: "Do you work with 3PL providers?",
        answer: "Yes. 3PL layouts change as clients come and go. We reconfigure racking zone by zone so the dock keeps moving. See [racking relocation and reconfiguration](/services/racking-solutions/racking-relocation-reconfiguration/)."
      },
      {
        question: "Can you fit out our new warehouse and make good the old one?",
        answer: "Yes. We can move your racking from the old site, reinstall it at the new one and [make good the warehouse you're leaving](/services/make-good-solutions/warehouse-make-good/), all in one quote."
      },
      {
        question: "Do you remove racking and repair the slab at lease end?",
        answer: "Yes. Every anchor is core drilled out, the hole is epoxy filled and the repair is ground flush. See [pallet racking removal](/services/strip-out-solutions/pallet-racking-removal/)."
      },
      {
        question: "What affects the cost of a fulfilment warehouse fit out?",
        answer: "The floor area, how much racking and shelving you need, the racking height, the condition of the slab and how much line marking is involved. Moving existing racking usually costs less than buying new. We give a fixed price after a site visit."
      },
      {
        question: "How early should we get in touch?",
        answer: "As soon as you have the keys or a lease end date. A site visit early gives us time to plan the layout, fix the floor and schedule the work around your move or your peak season."
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
,
  {
    "name": "Retail",
    "slug": "retail",
    "title": "Retail Shop & Shopfront Make Good Melbourne",
    "metaTitle": "Retail Make Good Melbourne | Shopfront & Shopping Centre | MakeGOOD",
    "metaDescription": "Retail make good for Melbourne shops, shopfronts and shopping centre tenancies. Fitout removal, flooring, ceilings, painting and handover to landlord standard. Fixed price quotes.",
    "heroText": "Retail make good for Melbourne shopfronts, strip shops and shopping centre tenancies. We remove the fitout, restore the shell and hand back to your landlord's standard.",
    "heroImage": "/images/industries/retail-shopfront-make-good-melbourne.jpg",
    "heroImageAlt": "Retail shopfront tenancy stripped back for make good in Melbourne",
    "ogImage": "/og/commercial.jpg",
    "introduction": "Retail leases usually set a clear handback standard: fixtures and signage out, services capped, and floors, walls and ceilings returned to the landlord's base condition. Shopping centres add design criteria, trading hours and access rules on top. We review your lease, plan the works around centre requirements and deliver every trade under one fixed price quote.",
    "challenges": [
      {
        "title": "Landlord & Centre Requirements",
        "description": "Shopping centre handbacks follow landlord design criteria, approved contractor rules and strict access hours. We plan the program around them."
      },
      {
        "title": "Shopfront & Signage Removal",
        "description": "Fascias, signage, display fittings and shopfront changes need to be removed and the façade repaired to the original condition."
      },
      {
        "title": "Floors, Walls & Ceilings",
        "description": "Tiles, timber and carpet, feature walls and custom ceilings all need to be removed, patched and repainted to the lease standard."
      },
      {
        "title": "Services & Lighting",
        "description": "Added power, data, lighting and signage circuits need to be made safe and capped by licensed trades."
      }
    ],
    "services": [
      "strip-out-solutions/demolition",
      "strip-out-solutions/make-safe",
      "make-good-solutions/patching-plastering",
      "make-good-solutions/painting",
      "make-good-solutions/flooring-reinstatement",
      "handover-solutions/end-of-lease-cleaning"
    ],
    "benefits": [
      "Lease and handback standard reviewed before quoting",
      "After-hours and overnight works for centre tenancies",
      "Shopfront and signage removal with façade repair",
      "Licensed trades for services capping",
      "One contractor and one fixed price quote",
      "Documentation for landlord sign off"
    ],
    "faqs": [
      {
        "question": "What does a retail make good usually include?",
        "answer": "It depends on your lease, but it commonly includes removing shopfit joinery, signage and fixtures, capping services, repairing floors, walls and ceilings, repainting and a final clean. We review the lease clause and confirm the scope before we quote."
      },
      {
        "question": "Can you work around shopping centre trading hours?",
        "answer": "Yes. Centre tenancies often require after-hours or overnight works, approved contractors and set access times. We plan the program around the centre's rules."
      },
      {
        "question": "Do you offer a fixed price for a retail make good?",
        "answer": "Yes. We inspect the tenancy, review your lease and provide a fixed price quote covering every trade. See our [make good guide](/learn/make-good-guide/) for how the process works."
      }
    ]
  },
  {
    "name": "Medical Centres & Suites",
    "slug": "medical-centres",
    "title": "Medical Centre & Clinic Make Good Melbourne",
    "metaTitle": "Medical Centre Make Good Melbourne | Clinics & Suites | MakeGOOD",
    "metaDescription": "Make good for Melbourne medical centres, clinics and consulting suites. Fitout and joinery removal, services capping, flooring, painting and compliant handover. Fixed price quotes.",
    "heroText": "Make good for Melbourne medical centres, dental and allied health clinics and consulting suites. Fitout removed, services capped and the space cleared for handover.",
    "heroImage": "/images/industries/medical-centre-make-good-melbourne.jpg",
    "heroImageAlt": "Medical centre consulting suite after fitout removal and make good in Melbourne",
    "ogImage": "/og/commercial.jpg",
    "introduction": "Clinical fitouts are more heavily serviced than a standard office. Hand basins, plumbing to treatment rooms, specialised joinery, medical gas outlets and imaging rooms all have to be dealt with before the space can be handed back. We coordinate licensed trades, disposal and cleaning under one fixed price quote so you can meet your lease end date.",
    "challenges": [
      {
        "title": "Plumbing & Clinical Services",
        "description": "Added hand basins, sinks and treatment room plumbing need to be disconnected and capped by licensed plumbers."
      },
      {
        "title": "Specialised Joinery & Fixtures",
        "description": "Clinical cabinetry, benches, dental and treatment room fixtures need careful removal and repair of the surfaces behind them."
      },
      {
        "title": "Imaging & Special Rooms",
        "description": "Rooms built for imaging or similar equipment may have specialised wall construction that has to be removed and disposed of correctly."
      },
      {
        "title": "Flooring & Hygiene Finishes",
        "description": "Sheet vinyl, coved flooring and washable wall finishes need to be removed or restored to what your lease requires."
      }
    ],
    "services": [
      "strip-out-solutions/demolition",
      "strip-out-solutions/make-safe",
      "make-good-solutions/flooring-reinstatement",
      "make-good-solutions/patching-plastering",
      "make-good-solutions/painting",
      "handover-solutions/end-of-lease-cleaning"
    ],
    "benefits": [
      "Licensed trades for plumbing and electrical capping",
      "Careful removal of clinical joinery and fixtures",
      "Waste removal and disposal handled for you",
      "Lease reviewed before quoting",
      "One contractor and one fixed price quote",
      "Final clean ready for handover"
    ],
    "faqs": [
      {
        "question": "Can you make good a medical or dental clinic?",
        "answer": "Yes. We remove clinical joinery and fixtures, disconnect and cap services using licensed trades, repair floors, walls and ceilings and finish with a handover clean."
      },
      {
        "question": "What happens to plumbing and specialised equipment?",
        "answer": "Plumbing is disconnected and capped by licensed plumbers. Equipment owned by the tenant is removed under the agreed scope. We confirm responsibilities in the quote."
      },
      {
        "question": "How do you quote a medical centre make good?",
        "answer": "We inspect the premises, review your lease and provide a fixed price quote covering every trade. Learn more about the [make good process](/learn/our-process/)."
      }
    ]
  },
  {
    "name": "Hospitality & Venues",
    "slug": "hospitality-venues",
    "title": "Commercial Kitchen & Hospitality Make Good Melbourne",
    "metaTitle": "Hospitality & Kitchen Make Good Melbourne | Venues | MakeGOOD",
    "metaDescription": "Make good for Melbourne restaurants, cafes, bars and commercial kitchens. Kitchen strip out, services capping, flooring and handover. Fixed price quotes, one contractor.",
    "heroText": "Make good for Melbourne restaurants, cafes, bars and venues. Kitchen equipment removed, services made safe and the floor ready to hand over.",
    "heroImage": "/images/industries/hospitality-venue-kitchen-make-good-melbourne.jpg",
    "heroImageAlt": "Commercial kitchen stripped out for hospitality make good in Melbourne",
    "ogImage": "/og/commercial.jpg",
    "introduction": "Hospitality tenancies carry heavy fixed equipment and extensive services. Exhaust canopies and ducting, grease traps, gas and electrical connections, coolrooms and bar fitouts all need to be removed or capped before handback. We plan the sequence, use licensed trades for services and deliver the whole scope under one fixed price quote.",
    "challenges": [
      {
        "title": "Kitchen Equipment & Canopies",
        "description": "Cooking lines, exhaust canopies, ducting and coolrooms need to be disconnected and removed, with the openings and surfaces repaired."
      },
      {
        "title": "Gas, Electrical & Plumbing",
        "description": "Gas, power and water connections must be capped by licensed trades before equipment comes out."
      },
      {
        "title": "Grease Traps & Drainage",
        "description": "Grease traps and floor drainage need to be dealt with in line with your lease and local requirements."
      },
      {
        "title": "Floors, Bars & Front of House",
        "description": "Bars, booths, feature joinery and commercial floor finishes need to be removed and the surfaces restored."
      }
    ],
    "services": [
      "strip-out-solutions/demolition",
      "strip-out-solutions/make-safe",
      "make-good-solutions/flooring-reinstatement",
      "make-good-solutions/patching-plastering",
      "make-good-solutions/painting",
      "handover-solutions/end-of-lease-cleaning"
    ],
    "benefits": [
      "Kitchen strip out and equipment removal",
      "Licensed trades for gas, electrical and plumbing capping",
      "Bar, booth and joinery removal",
      "Waste removal and disposal handled for you",
      "One contractor and one fixed price quote",
      "Final clean ready for handover"
    ],
    "faqs": [
      {
        "question": "Can you strip out a commercial kitchen?",
        "answer": "Yes. We disconnect and remove cooking equipment, canopies, ducting and coolrooms, cap services with licensed trades and repair the surfaces left behind."
      },
      {
        "question": "Do you handle grease traps and drainage?",
        "answer": "We coordinate grease trap and drainage works as part of the scope where your lease requires it, and confirm what is included in the fixed price quote."
      },
      {
        "question": "Do you work to venue closing dates?",
        "answer": "We plan the program around your lease end date and any access limits. The earlier you contact us, the easier it is to meet your handover. See our [make good guide](/learn/make-good-guide/)."
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
