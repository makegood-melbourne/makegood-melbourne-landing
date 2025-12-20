import commercialHeroImage from "@/assets/industries/commercial-office-make-good-polished-concrete-melbourne.jpeg";
import commercialSitePreparationImage from "@/assets/industries/commercial-make-good-open-floor-industrial-windows-melbourne.jpeg";
import commercialFitOutImage from "@/assets/industries/commercial-office-fitout-kitchen-breakroom-melbourne.jpeg";

import industrialHeroImage from "@/assets/industries/industrial-warehouse-make-good-empty-floor-melbourne.jpeg";
import industrialSitePreparationImage from "@/assets/industries/industrial-warehouse-steel-trusses-skylights-melbourne.jpeg";
import industrialStructuralImage from "@/assets/industries/industrial-factory-roof-structure-racking-melbourne.jpeg";
import industrialFitOutImage from "@/assets/industries/industrial-warehouse-polished-concrete-floor-melbourne.jpeg";

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
  introduction: string;
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
    title: "Commercial Make Good Melbourne",
    metaTitle: "Commercial Make Good Melbourne | Office & Retail Restoration",
    metaDescription: "Expert commercial make good services across Melbourne. Office strip outs, retail fitout removal, painting, flooring and full restoration. Fixed-price quotes. Call today.",
    heroText: "Complete make good solutions for Melbourne's commercial properties—from office towers and retail spaces to multi-tenancy buildings.",
    heroImage: commercialHeroImage,
    heroImageAlt: "Completed commercial office make good with polished concrete floors and exposed ceiling services in Melbourne",
    introduction: "Commercial make goods require precision, efficiency and minimal disruption to building operations. Whether you're vacating an office suite, retail tenancy or entire commercial floor, our team delivers comprehensive restoration that meets landlord specifications and building management requirements. We coordinate all trades, manage after-hours access and ensure your bond is returned in full.",
    featuredSections: [
      {
        title: "Site Preparation & Services Coordination",
        description: "We start by ensuring your project foundations—both literally and operationally—are set for success. Comprehensive surveys, service location mapping, and pre-construction compliance checks ensure every aspect of the site is ready before major works commence. Underground services are installed or safeguarded early, and bulk earthworks are sequenced correctly to maintain a safe, organised, and disruption-free work environment—protecting timelines and budgets from the very start.",
        image: commercialSitePreparationImage,
        imageAlt: "Large open commercial floor with industrial windows after make good restoration in Melbourne"
      },
      {
        title: "Services Integration & Quality Fit-Out",
        description: "We integrate mechanical, electrical, and plumbing services seamlessly within the structural framework, using coordinated drawings and clash detection to avoid costly rework. Our fit-out delivery follows rigorous quality assurance procedures, ensuring every element—from mezzanines and partitions to specialist systems—meets specification. By the time we hand over, your building is fully functional, compliant, and ready for immediate operational use.",
        image: commercialFitOutImage,
        imageAlt: "Commercial office kitchen and breakroom fit-out with quality joinery in Melbourne"
      }
    ],
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
    services: ["office-strip-out", "commercial-make-good", "commercial-painting", "carpet-removal", "vinyl-removal", "ceiling-tile-replacement", "patching-plastering", "commercial-cleaning"],
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
    title: "Industrial Make Good Melbourne",
    metaTitle: "Industrial Make Good Melbourne | Factory & Warehouse Restoration",
    metaDescription: "Industrial make good specialists Melbourne. Factory strip outs, warehouse restoration, racking removal, floor repair, hazardous material removal. Full compliance. Free quotes.",
    heroText: "Expert industrial make good services for Melbourne factories, warehouses and manufacturing facilities—from machinery removal to complete site restoration.",
    heroImage: industrialHeroImage,
    heroImageAlt: "Empty industrial warehouse after make good restoration with polished concrete floor and steel trusses in Melbourne",
    introduction: "Industrial properties present the most complex make good challenges. Decades of manufacturing operations, heavy machinery anchored to floors, oil-stained concrete, hazardous materials and substantial modifications all require specialist handling. We've restored factories and warehouses across Melbourne to handover-ready condition, regardless of what operations occurred there.",
    featuredSections: [
      {
        title: "Site Preparation & Services Coordination",
        description: "We start by ensuring your project foundations—both literally and operationally—are set for success. Comprehensive surveys, service location mapping, and pre-construction compliance checks ensure every aspect of the site is ready before major works commence. Underground services are installed or safeguarded early, and bulk earthworks are sequenced correctly to maintain a safe, organised, and disruption-free work environment—protecting timelines and budgets from the very start.",
        image: industrialSitePreparationImage,
        imageAlt: "Industrial warehouse interior with steel roof trusses and skylights during make good preparation in Melbourne"
      },
      {
        title: "Structural Systems & Building Envelope",
        description: "Our structural works are planned and executed with precision to deliver strength, accuracy, and efficiency. We coordinate fabrication, transport, and installation to ensure every lift, alignment, and connection meets engineering tolerances and safety requirements. Roofing, cladding, and glazing are installed to exacting standards, achieving early lock-up while delivering superior weatherproofing to protect your asset and enable internal works to progress without interruption.",
        image: industrialStructuralImage,
        imageAlt: "Industrial factory roof structure with steel trusses and pallet racking in Melbourne warehouse"
      },
      {
        title: "Services Integration & Quality Fit-Out",
        description: "We integrate mechanical, electrical, and plumbing services seamlessly within the structural framework, using coordinated drawings and clash detection to avoid costly rework. Our fit-out delivery follows rigorous quality assurance procedures, ensuring every element—from mezzanines and partitions to specialist systems—meets specification. By the time we hand over, your building is fully functional, compliant, and ready for immediate operational use.",
        image: industrialFitOutImage,
        imageAlt: "Symmetrical view of industrial warehouse with polished concrete floor and high bay lighting in Melbourne"
      }
    ],
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
    services: ["warehouse-make-good", "pallet-racking-removal", "epoxy-flooring", "concrete-floor-repair", "line-marking", "electrical-make-safe", "commercial-cleaning"],
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
    name: "Remediation",
    slug: "remediation",
    title: "Building Remediation Melbourne",
    metaTitle: "Building Remediation Melbourne | Structural, Cladding & Waterproofing",
    metaDescription: "Specialist building remediation services in Melbourne. Cladding & glazing repairs, structural remediation, concrete cancer treatment, waterproofing solutions. Licensed contractors.",
    heroText: "Expert building remediation services across Melbourne—structural repairs, cladding replacement, concrete restoration and waterproofing solutions.",
    heroImage: remediationHeroImage,
    heroImageAlt: "Commercial building glazing and facade installation during remediation works in Melbourne",
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
