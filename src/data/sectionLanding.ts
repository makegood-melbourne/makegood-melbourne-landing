// Section landing page data for the 4 main service categories:
// Strip Out, Make Good, Handover, Remediation

import buildingRemediationHero from "@/assets/services/building-remediation-melbourne-shotcrete.jpg";
import stripOutHero from "@/assets/services/commercial-industrial-strip-out-melbourne.jpg";

export interface SectionLandingFAQ {
  question: string;
  answer: string;
}

export interface SectionLandingTrustBadge {
  icon: string;
  title: string;
}

export interface SectionLandingRelatedCard {
  slug: string;
  name: string;
  description: string;
}

export interface SectionLandingRelatedBlock {
  title: string;
  cards: SectionLandingRelatedCard[];
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
  
  // Related Services Block (optional - appears between carousel and FAQ)
  relatedServicesBlock?: SectionLandingRelatedBlock;
  
  // FAQ
  faqs: SectionLandingFAQ[];
  
  // CTA
  ctaTitle: string;
  ctaSubtitle?: string;
  ctaText: string;
}

export const sectionLandingPages: SectionLandingData[] = [
  {
    slug: "strip-out",
    metaTitle: "Commercial Strip Out Melbourne | End of Lease Specialists",
    metaDescription: "Expert commercial strip out and back to base services in Melbourne. Office, retail and warehouse defits. Licensed demolition. Hazardous waste removal. Free quotes.",
    ogImage: "/og/strip-out.jpg",
    
    title: "EXPERT STRIP OUTS, MADE BETTER.",
    titleHighlight: "MADE BETTER.",
    tagline: "Preparing a commercial or industrial space for its next chapter requires more than just demolition. It demands precision, safety, and a deep understanding of lease obligations. Our expert strip out and 'back to base' services for office, retail, and warehouse properties across Melbourne ensure your project is completed on time, on budget, and ready for handover.",
    trustBadges: [
      { icon: "shield", title: "Licensed & Insured" },
      { icon: "clipboard", title: "Lease Compliance Experts" },
      { icon: "dollar", title: "Fixed-Price Quotes" },
      { icon: "document", title: "Full Project Documentation" }
    ],
    heroImage: stripOutHero,
    heroImageAlt: "A large commercial space undergoing a full strip out and back to base works by the Makegood Melbourne team.",
    heroImageTitle: "Makegood Melbourne - Commercial and Industrial Strip Out Specialists",
    
    aboutTitlePrefix: "YOUR END-OF-LEASE,",
    aboutTitleHighlight: "SIMPLIFIED",
    aboutContentLeft: [
      "The transition between tenants is a critical moment for any property. A 'back to base' provision is not merely a checklist item; it is a complex project involving numerous trades, strict compliance standards, and significant financial risk. An improperly managed strip out can result in project delays, disputes over the final condition, and a longer vacancy period, all of which directly impact your return on investment."
    ],
    aboutContentRight: [
      "We provide a considered, methodical approach to end-of-lease projects. As integrated specialists, we manage every facet of the process, from the precise removal of internal structures to the certified decommissioning of essential services. By providing a single, accountable point of contact, we eliminate coordination failures and ensure a seamless workflow. Our objective is to return your property to its specified condition efficiently and correctly, ensuring it is ready for the next tenant without delay."
    ],
    
    serviceSlugs: [
      "demolition-works",
      "make-safe-works", 
      "pallet-racking-removal"
    ],
    carouselTitle: "OUR STRIP OUT SERVICES",
    carouselTitleHighlight: "SERVICES",
    carouselDescription: "Comprehensive solutions to return any commercial or industrial space to base condition.",
    
    relatedServicesBlock: {
      title: "A COMPLETE STRIP OUT SERVICE",
      cards: [
        {
          slug: "demolition-works",
          name: "DEMOLITION WORKS",
          description: "Our licensed teams perform precise internal demolition, safely removing non-structural partitions, ceilings, flooring and fixtures."
        },
        {
          slug: "make-safe-works",
          name: "MAKE SAFE WORKS",
          description: "We manage the full 'back to base' process, including the disconnection and make-safe of all essential building services."
        }
      ]
    },
    
    faqs: [
      {
        question: "What does \"back to base\" or \"make good\" actually mean?",
        answer: "It refers to the clause in most commercial leases that requires a tenant to return the property to its original condition at the end of the lease term. This typically involves removing all partitions, fixtures, data cabling, and other additions, and making good any damage to the base building."
      },
      {
        question: "How is a commercial strip out different from standard demolition?",
        answer: "A commercial strip out is a form of selective, internal demolition. Unlike a full building demolition, the goal is to carefully remove internal elements without damaging the base building's structure, essential services, or surrounding tenancies. It requires precision, planning, and a deep understanding of live environments."
      },
      {
        question: "Can you handle the removal of hazardous materials like asbestos?",
        answer: "Yes. We are licensed and certified to manage the identification, testing, and removal of hazardous materials, including asbestos, in full compliance with all Victorian regulations and WorkSafe standards. We provide all necessary clearance certificates for your peace of mind."
      },
      {
        question: "How do you manage waste and recycling?",
        answer: "We are committed to responsible waste management. We develop a waste management plan for every project, maximising the amount of material that can be recycled or repurposed. We provide full documentation of waste disposal, helping you meet your project's sustainability goals."
      },
      {
        question: "How long does a typical office strip out in Melbourne take?",
        answer: "A standard office strip out can take anywhere from a few days to several weeks, depending on the size of the space, the complexity of the fit-out, and any building restrictions (like noise or working hours). We provide a detailed and reliable timeline with every quote."
      }
    ],
    
    ctaTitle: "EXPERTS IN COMMERCIAL & INDUSTRIAL STRIP OUTS",
    ctaSubtitle: "Make Good, BETTER.",
    ctaText: "We are Melbourne's end-of-lease make good specialists. From a simple office defit to a complex industrial strip out, we deliver a seamless, reliable, and fully compliant service. Contact us today for a free site assessment and a detailed, fixed-price quote."
  },
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
    heroImage: buildingRemediationHero,
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
