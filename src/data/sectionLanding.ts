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
    
    title: "Building Remediation Melbourne",
    tagline: "Structural integrity issues, non-compliant cladding or water ingress? Our remediation services restore your building to compliance—protecting your asset and your tenants.",
    trustBadges: ["Licensed & Insured", "Structural Engineers", "NCC Compliant"],
    
    aboutTitlePrefix: "MELBOURNE'S LEADING",
    aboutTitleHighlight: "REMEDIATION SPECIALISTS",
    aboutContentLeft: [
      "Building defects don't fix themselves. Whether you're dealing with concrete cancer eating through structural elements, combustible cladding that's putting tenants at risk, or persistent water ingress damaging your asset—professional remediation is the only solution.",
      "Our team works alongside structural engineers and building surveyors to diagnose issues accurately and deliver permanent solutions. From façade replacements that meet current NCC requirements to waterproofing systems that actually work, we handle the complex projects that general builders can't."
    ],
    aboutContentRight: [
      "Every remediation project starts with a thorough assessment. We identify the root cause—not just the symptoms—and provide clear, costed recommendations so you can make informed decisions about your building's future.",
      "Whether it's structural repairs, cladding compliance, roof restoration or waterproofing failures, our licensed contractors deliver certified solutions that protect your investment for the long term."
    ],
    
    serviceSlugs: [
      "cladding-glazing",
      "polycarbonate-roofing-skylights", 
      "structural-remediation",
      "waterproofing"
    ],
    carouselTitle: "Remediation Services",
    carouselDescription: "Specialist solutions for building defects, compliance issues and structural repairs",
    
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
