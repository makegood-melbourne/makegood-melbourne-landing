// Section landing page data for the 4 main service categories:
// Strip Out, Make Good, Handover, Remediation

export interface SectionLandingFAQ {
  question: string;
  answer: string;
}

export interface SectionLandingData {
  // Meta
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  
  // Hero
  title: string;
  titleHighlight?: string;  // Optional word to highlight in orange
  tagline: string;
  trustBadges: string[];
  heroImage?: string;
  heroImageAlt?: string;
  
  // About - supports styled header "TITLE PREFIX" + "TITLE HIGHLIGHT" in orange
  aboutTitlePrefix: string;  // e.g. "MELBOURNE'S LEADING"
  aboutTitleHighlight: string;  // e.g. "REMEDIATION SPECIALISTS" - shown in orange
  aboutContentLeft: string[];  // Left column paragraphs
  aboutContentRight: string[]; // Right column paragraphs
  
  // Services Carousel
  serviceSlugs: string[];
  carouselTitle?: string;
  carouselTitleHighlight?: string;  // Optional words to highlight in orange
  carouselDescription?: string;
  
  // FAQ
  faqs: SectionLandingFAQ[];
  
  // CTA
  ctaTitle: string;
  ctaSubtitle?: string;
  ctaText: string;
}

export const sectionLandingPages: SectionLandingData[] = [
  {
    slug: "remediation",
    metaTitle: "Building Remediation Melbourne | Structural Repairs & Compliance",
    metaDescription: "Expert building remediation services in Melbourne. Structural repairs, cladding compliance, waterproofing and defect rectification. Licensed contractors. Free site inspections.",
    ogImage: "/og/remediation.jpg",
    
    title: "Building Remediation, Made BETTER.",
    titleHighlight: "Made BETTER.",  // The word to highlight in orange
    tagline: "Your commercial property is a significant investment. We protect it. Our expert remediation services address structural decay, water damage, and facade issues at their source—restoring structural integrity, ensuring building compliance, and securing its long-term stability.",
    trustBadges: ["Licensed & Insured", "Fixed Price Quotes", "End-of-Lease Specialists"],
    
    aboutTitlePrefix: "Restoring",
    aboutTitleHighlight: "Your Building's Integrity",
    aboutContentLeft: [
      "Time and exposure are unforgiving. Concrete spalls, steel corrodes, and waterproof membranes inevitably fail. What starts as a hairline crack or a minor leak can quickly escalate, compromising the structural safety, regulatory compliance, and operational continuity of your property. Ignoring these symptoms isn't just risky—it's a liability in the making.",
      "Our remediation specialists work alongside structural engineers and building surveyors to diagnose defects at their source. We go beyond the surface to deliver certified, engineered solutions that solve the problem permanently."
    ],
    aboutContentRight: [
      "Every remediation project starts with a thorough building assessment. We identify the root cause—not just the visible symptoms—and provide a detailed, costed scope of works so you can make an informed decision about your asset.",
      "Whether you're an owner facing urgent structural repairs, a body corporate addressing cladding compliance, or a tenant managing end-of-lease obligations, our licensed contractors deliver solutions that meet all Australian building standards, protecting your investment and providing certainty for the long term."
    ],
    
    serviceSlugs: [
      "cladding-glazing",
      "polycarbonate-roofing-skylights", 
      "structural-remediation",
      "waterproofing"
    ],
    carouselTitle: "Our Remediation Services",
    carouselTitleHighlight: "Remediation Services",
    carouselDescription: "Engineered solutions that restore safety, compliance, and longevity.",
    
    faqs: [
      {
        question: "What types of building defects do you remediate?",
        answer: "We handle a comprehensive range of building defects including concrete cancer (spalling and carbonation), non-compliant cladding requiring replacement, structural cracking and movement, waterproofing failures, façade deterioration, and roofing issues. Our team assesses each situation and recommends the most appropriate remediation approach."
      },
      {
        question: "Do you work with structural engineers?",
        answer: "Yes, for structural remediation projects we work directly with qualified structural engineers. They provide the technical specifications and certifications required for the work. This ensures all structural repairs meet Australian Standards and can be properly certified upon completion."
      },
      {
        question: "How long does building remediation typically take?",
        answer: "Timeframes vary significantly based on the scope of work. Minor concrete repairs may take a few days, while major cladding replacement projects can span several months. After our initial assessment, we provide a detailed project timeline so you can plan accordingly and inform tenants if necessary."
      },
      {
        question: "Is my building covered by the Victorian Cladding Rectification Scheme?",
        answer: "The Victorian Government's Cladding Rectification Register covers certain residential buildings with combustible cladding. Commercial buildings are generally not covered and owners are responsible for rectification. We can assess your building and advise on compliance requirements under the current National Construction Code."
      },
      {
        question: "Can you work while the building is occupied?",
        answer: "In most cases, yes. We develop detailed work plans that maintain safe access for occupants and minimise disruption. For high-risk work like cladding removal, we may need to temporarily relocate some tenants for safety. We coordinate closely with building managers to schedule work around tenant needs."
      },
      {
        question: "What warranties do you provide on remediation work?",
        answer: "Warranty periods depend on the type of work performed. Waterproofing membrane systems typically carry 10-15 year warranties. Structural repairs are certified by engineers and warranted for the design life of the repair. We provide full documentation of all warranties and maintenance requirements upon project completion."
      }
    ],
    
    ctaTitle: "Protect Your Building Investment",
    ctaSubtitle: "Expert remediation, lasting solutions.",
    ctaText: "Building defects only get worse with time. Contact us today for a free site inspection and honest assessment of your remediation options."
  }
];

export const getSectionLandingBySlug = (slug: string): SectionLandingData | undefined => {
  return sectionLandingPages.find(page => page.slug === slug);
};

export const getAllSectionLandingPages = (): SectionLandingData[] => {
  return sectionLandingPages;
};
