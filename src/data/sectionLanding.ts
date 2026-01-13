// Section landing page data for the 4 main service categories:
// Strip Out, Make Good, Handover, Remediation

import buildingRemediationHero from "@/assets/services/building-remediation-melbourne-shotcrete.jpg";

export interface SectionLandingFAQ {
  question: string;
  answer: string;
}

export interface SectionLandingTrustBadge {
  icon: string;
  title: string;
}

export interface SectionLandingData {
  // Meta
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;

  // Hero
  title: string;
  titleHighlight?: string; // Optional word to highlight in orange
  tagline: string;
  trustBadges: SectionLandingTrustBadge[];
  heroImage?: unknown;
  heroImageAlt?: string;
  heroImageTitle?: string; // Tooltip text on hover

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
    trustBadges: [
      { icon: "shield", title: "Licensed & Insured" },
      { icon: "compass", title: "Engineered Solutions" },
      { icon: "dollar", title: "Fixed-Price Quotes" },
      { icon: "document", title: "Full Documentation" }
    ],
    heroImage: "/src/assets/services/building-remediation-melbourne-shotcrete.jpg",
    heroImageAlt: "Close-up of a worker applying shotcrete for concrete remediation services in Melbourne",
    heroImageTitle: "Makegood Melbourne - Expert Building Remediation Services",
    
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
        answer: "We remediate a comprehensive range of building defects at their source. This includes concrete cancer and spalling, structural cracking, non-compliant facade and cladding issues, and complete waterproofing failures on roofs, basements, and podiums. Every project begins with a thorough assessment to ensure we recommend the correct, long-term solution."
      },
      {
        question: "Do you work with structural engineers?",
        answer: "Yes, always. For any project involving structural integrity, we work directly with qualified structural engineers. They provide the independent specifications and certifications required to ensure all repairs are not only effective but also fully compliant with Australian Standards. We manage this entire process for you."
      },
      {
        question: "Can remediation work be done while the building is occupied?",
        answer: "Yes, in most cases. Our project management is centred on minimising disruption. We develop detailed work plans to maintain safe access and schedule noisy or intrusive work after hours whenever possible. We coordinate closely with building managers to ensure tenants are informed and operations continue smoothly."
      },
      {
        question: "Is our building covered by the Victorian Cladding Rectification Scheme?",
        answer: "The government's scheme is primarily focused on residential buildings, meaning commercial and industrial properties are typically the owner's responsibility to rectify. We can definitively assess your building's cladding, advise on your compliance obligations under the National Construction Code, and provide a clear pathway to rectification."
      },
      {
        question: "What warranties do you provide on your work?",
        answer: "We stand behind our work with comprehensive warranties. While specific periods vary—for example, waterproofing systems often carry 10-15 year manufacturer warranties—all our workmanship is guaranteed. Upon completion, we provide a full handover package with all warranty documentation, certifications, and maintenance requirements for your records."
      }
    ],
    
    ctaTitle: "SECURE YOUR ASSET'S LONGEVITY",
    ctaSubtitle: "Make Good, BETTER.",
    ctaText: "We've built our reputation on delivering engineered remediation solutions for commercial and industrial properties across Melbourne. Don't let building defects compromise your safety or your investment. Contact us for a comprehensive site assessment and a clear, detailed proposal."
  }
];

export const getSectionLandingBySlug = (slug: string): SectionLandingData | undefined => {
  return sectionLandingPages.find(page => page.slug === slug);
};

export const getAllSectionLandingPages = (): SectionLandingData[] => {
  return sectionLandingPages;
};
