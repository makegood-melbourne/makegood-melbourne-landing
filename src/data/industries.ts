export interface Industry {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  heroImage?: string;
  introduction: string;
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
    name: "Hospitality",
    slug: "hospitality",
    title: "Hospitality Make Good Melbourne",
    metaTitle: "Hospitality Make Good Melbourne | Restaurant & Cafe Restoration",
    metaDescription: "Specialist make good services for Melbourne hospitality venues. Restaurant, cafe, bar and kitchen strip outs. Grease trap removal, exhaust cleaning, full restoration. Free quotes.",
    heroText: "Expert make good restoration for Melbourne's hospitality venues—from cafes and restaurants to bars and commercial kitchens.",
    introduction: "Hospitality venues face unique make good challenges. Years of cooking, foot traffic and commercial kitchen equipment leave their mark. Whether you're closing a cafe, relocating a restaurant or ending a bar lease, our team understands the specific requirements of hospitality make goods—from grease-stained surfaces to exhaust system removals.",
    challenges: [
      {
        title: "Commercial Kitchen Removal",
        description: "Exhaust hoods, grease traps, gas lines and heavy equipment require specialist disconnection and removal."
      },
      {
        title: "Grease & Odour Treatment",
        description: "Years of cooking leave residue on walls, ceilings and floors that standard cleaning won't remove."
      },
      {
        title: "Floor Restoration",
        description: "Commercial kitchen flooring, non-slip coatings and drainage channels often need complete removal and restoration."
      },
      {
        title: "Plumbing Modifications",
        description: "Commercial sinks, dishwashers and grease interceptors require proper decommissioning."
      }
    ],
    services: ["office-strip-out", "commercial-cleaning", "commercial-painting", "epoxy-flooring", "electrical-make-safe"],
    benefits: [
      "Licensed gas and plumbing disconnection",
      "Commercial exhaust system removal",
      "Grease trap decommissioning",
      "Deep cleaning and odour treatment",
      "Floor restoration including non-slip coatings",
      "Full compliance documentation"
    ],
    faqs: [
      {
        question: "How long does a restaurant make good take?",
        answer: "A typical restaurant make good takes 2-4 weeks depending on size and the extent of kitchen equipment. We work efficiently to minimise your lease overlap."
      },
      {
        question: "Do you handle grease trap removal?",
        answer: "Yes, we coordinate licensed plumbers for grease trap decommissioning, pump-out and removal, with all waste disposed of compliantly."
      },
      {
        question: "Can you remove commercial exhaust systems?",
        answer: "Absolutely. We remove exhaust hoods, ducting and roof penetrations, then patch and restore ceilings to original condition."
      }
    ]
  },
  {
    name: "Gyms & Fitness",
    slug: "gyms-fitness",
    title: "Gym Make Good Melbourne",
    metaTitle: "Gym Make Good Melbourne | Fitness Centre Restoration",
    metaDescription: "Specialist make good for Melbourne gyms and fitness centres. Equipment removal, rubber flooring, mirror walls, sauna demolition. Full restoration to base building. Free quotes.",
    heroText: "Complete make good solutions for Melbourne gyms, fitness studios and health clubs—from equipment removal to full floor restoration.",
    introduction: "Gyms and fitness centres have unique make good requirements. Heavy equipment bolted to floors, rubber flooring glued to concrete, mirror walls across multiple rooms and specialised areas like saunas and steam rooms all require expert handling. We've restored fitness venues of all sizes back to base building condition.",
    challenges: [
      {
        title: "Heavy Equipment Removal",
        description: "Gym equipment is often bolted or anchored to floors. We remove equipment, extract anchors and restore concrete."
      },
      {
        title: "Rubber Flooring Removal",
        description: "Commercial gym flooring is heavily glued. We strip rubber, remove adhesive and prepare floors for next tenant."
      },
      {
        title: "Mirror Wall Removal",
        description: "Full-height mirrors in studios require careful removal and wall restoration including patching and painting."
      },
      {
        title: "Wet Area Restoration",
        description: "Saunas, steam rooms and shower areas require specialist demolition and waterproofing restoration."
      }
    ],
    services: ["office-strip-out", "carpet-removal", "vinyl-removal", "adhesive-removal", "commercial-painting", "patching-plastering"],
    benefits: [
      "Equipment anchor removal and floor repair",
      "Rubber and sports flooring strip out",
      "Mirror and wall restoration",
      "Sauna and steam room demolition",
      "Change room and wet area restoration",
      "Full floor preparation for next tenant"
    ],
    faqs: [
      {
        question: "How do you remove gym rubber flooring?",
        answer: "We use industrial floor scrapers to remove glued rubber tiles or rolls, then grind away adhesive residue to leave a clean concrete surface."
      },
      {
        question: "Can you remove floor anchors from gym equipment?",
        answer: "Yes, we core drill out anchor bolts, fill with epoxy resin and grind flush to restore the floor to its original condition."
      },
      {
        question: "Do you handle sauna demolition?",
        answer: "Absolutely. We demolish saunas, steam rooms and their infrastructure, then restore the space to base building specification."
      }
    ]
  },
  {
    name: "Medical & Healthcare",
    slug: "medical-healthcare",
    title: "Medical Make Good Melbourne",
    metaTitle: "Medical Make Good Melbourne | Healthcare Facility Restoration",
    metaDescription: "Specialist make good for Melbourne medical centres, clinics and healthcare facilities. Lead-lined wall removal, clinical waste, vinyl flooring. Compliant restoration. Free quotes.",
    heroText: "Specialist make good services for Melbourne medical centres, dental clinics, pathology labs and healthcare facilities.",
    introduction: "Medical and healthcare facilities have strict make good requirements. From lead-lined X-ray rooms to clinical waste disposal, specialised plumbing to vinyl flooring in treatment rooms—these spaces demand experienced contractors who understand healthcare compliance. We deliver thorough, documented restoration that meets landlord and regulatory requirements.",
    challenges: [
      {
        title: "Lead-Lined Room Removal",
        description: "X-ray and imaging rooms require specialist lead removal and disposal with proper certification."
      },
      {
        title: "Clinical Waste Management",
        description: "Medical facilities generate waste that requires compliant handling and disposal procedures."
      },
      {
        title: "Specialised Plumbing",
        description: "Dental chairs, sterilisation equipment and medical gas lines require licensed disconnection."
      },
      {
        title: "Vinyl Flooring Restoration",
        description: "Welded vinyl sheets common in medical spaces need complete removal and subfloor preparation."
      }
    ],
    services: ["office-strip-out", "vinyl-removal", "commercial-painting", "electrical-make-safe", "commercial-cleaning"],
    benefits: [
      "Lead-lined room demolition and disposal",
      "Clinical waste handling and documentation",
      "Medical gas disconnection",
      "Dental chair and equipment removal",
      "Welded vinyl strip out",
      "Full compliance and certification"
    ],
    faqs: [
      {
        question: "Can you remove lead-lined walls from X-ray rooms?",
        answer: "Yes, we have experience removing lead-lined walls with proper safety protocols and licensed disposal documentation."
      },
      {
        question: "How do you handle medical equipment disposal?",
        answer: "We work with licensed medical waste contractors for any equipment requiring special disposal, with full documentation provided."
      },
      {
        question: "Do you provide compliance certificates?",
        answer: "Absolutely. We provide all necessary documentation including waste disposal certificates, electrical compliance and completion reports."
      }
    ]
  },
  {
    name: "Retail",
    slug: "retail",
    title: "Retail Make Good Melbourne",
    metaTitle: "Retail Make Good Melbourne | Shop Fitout Removal",
    metaDescription: "Professional retail make good Melbourne. Shop fitout removal, display removal, signage strip out. Shopping centre and street-front specialists. Fast turnaround. Free quotes.",
    heroText: "Complete make good solutions for Melbourne retail spaces—from boutiques and pop-ups to large format stores and shopping centre tenancies.",
    introduction: "Retail make goods often come with tight deadlines and specific shopping centre requirements. Whether you're closing a boutique, relocating a chain store or ending a pop-up lease, we understand the unique demands of retail restoration. Our team works efficiently—often after hours—to minimise disruption and meet handover deadlines.",
    challenges: [
      {
        title: "Shopfront Restoration",
        description: "Signage removal, facade restoration and shopfront reinstatement to landlord specifications."
      },
      {
        title: "Display & Fixture Removal",
        description: "Built-in displays, shelving systems and custom fixtures require careful removal and wall restoration."
      },
      {
        title: "Shopping Centre Requirements",
        description: "Centre management often has strict after-hours work requirements and specific restoration standards."
      },
      {
        title: "Fast Turnarounds",
        description: "Retail leases often end with tight deadlines. We work efficiently to meet aggressive timelines."
      }
    ],
    services: ["office-strip-out", "commercial-painting", "patching-plastering", "commercial-cleaning", "carpet-removal", "vinyl-removal"],
    benefits: [
      "Signage and facade restoration",
      "Display and shelving removal",
      "After-hours and weekend work",
      "Shopping centre compliance",
      "Fast turnaround capability",
      "Full documentation package"
    ],
    faqs: [
      {
        question: "Can you work after hours in shopping centres?",
        answer: "Yes, we regularly work after-hours and overnight to comply with shopping centre requirements and minimise disruption to other tenants."
      },
      {
        question: "How quickly can you complete a retail make good?",
        answer: "Depending on size and scope, retail make goods typically take 1-3 weeks. We can often accommodate urgent deadlines with extended hours."
      },
      {
        question: "Do you handle signage removal and facade restoration?",
        answer: "Absolutely. We remove signage, patch fixing holes and restore facades to match surrounding shopfronts."
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
    services: ["warehouse-make-good", "pallet-racking-removal", "epoxy-flooring", "concrete-floor-repair", "line-marking", "electrical-make-safe"],
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
  }
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};

export const getAllIndustries = (): Industry[] => {
  return industries;
};
