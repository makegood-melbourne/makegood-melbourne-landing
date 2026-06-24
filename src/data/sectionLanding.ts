// Section landing page data for the 4 main service categories:
// Strip Out, Make Good, Handover, Remediation

import buildingRemediationHero from "@/assets/services/building-remediation-melbourne-shotcrete.jpg";
import buildingRemediationHeroMobile from "@/assets/services/building-remediation-melbourne-shotcrete-mobile.jpg";
import stripOutHero from "@/assets/services/commercial-industrial-strip-out-melbourne.jpg";
import stripOutHeroMobile from "@/assets/services/commercial-industrial-strip-out-melbourne-mobile.jpg";
import makeGoodHero from "@/assets/services/melbourne-warehouse-make-good-hero.jpg";
import makeGoodHeroMobile from "@/assets/services/melbourne-warehouse-make-good-hero-mobile.jpg";
import commercialFloorSweepingImage from "@/assets/services/commercial-floor-sweeping-concrete-melbourne.jpeg";
import commercialDemolitionHeroImage from "@/assets/services/commercial-demolition-melbourne-hero.jpg";
import flooringReinstatementHeroImage from "@/assets/services/flooring-reinstatement-hero.webp";
import makeSafeWorksHeroImage from "@/assets/services/make-safe-works-melbourne-hero.jpg";
import palletRackingRemovalHeroImage from "@/assets/services/pallet-racking-removal-melbourne-warehouse.jpeg";
import patchingPlasteringHeroImage from "@/assets/services/patching-plastering-commercial-office-walls-ceiling-melbourne.jpeg";

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

export interface SectionLandingScopeRow {
  scope: string;
  worksIncluded: string;
  link?: string;
  linkLabel?: string;
  image?: unknown;
  imageAlt?: string;
  imageTitle?: string;
}

export interface SectionLandingPropertyType {
  title: string;
  description: string;
}

export interface SectionLandingProcessStep {
  step: string;
  description: string;
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
  heroImageMobile?: unknown; // Mobile-optimized version of hero image
  heroImageAlt?: string;
  heroImageTitle?: string; // Tooltip text on hover

  // About - supports styled header "TITLE PREFIX" + "TITLE HIGHLIGHT" in orange
  aboutTitlePrefix: string;  // e.g. "MELBOURNE'S LEADING"
  aboutTitleHighlight: string;  // e.g. "REMEDIATION SPECIALISTS" - shown in orange
  aboutContentLeft: string[];  // Left column paragraphs
  aboutContentRight: string[]; // Right column paragraphs
  
  // Services Carousel/Grid
  serviceSlugs: string[];
  carouselTitle?: string;
  carouselTitleHighlight?: string;  // Optional words to highlight in orange
  carouselDescription?: string;
  useGrid?: boolean;  // If true, displays services in static grid instead of carousel
  
  // Related Services Block (optional - appears between carousel and FAQ)
  relatedServicesBlock?: SectionLandingRelatedBlock;

  // Expanded content blocks (optional)
  scopeRows?: SectionLandingScopeRow[];
  propertyTypes?: SectionLandingPropertyType[];
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: SectionLandingProcessStep[];
  
  // FAQ
  faqTitle?: string;  // e.g. "Make Good FAQs"
  faqSubtitle?: string;  // e.g. "Common questions about make good services"
  faqs: SectionLandingFAQ[];
  
  // CTA
  ctaTitle: string;
  ctaSubtitle?: string;
  ctaText: string;
}

export const sectionLandingPages: SectionLandingData[] = [
  {
    slug: "strip-out-solutions",
    metaTitle: "Strip Out Services Melbourne | Make Good, BETTER.",
    metaDescription: "Commercial and industrial strip out services in Melbourne for offices, warehouses, factories, retail, medical and hospitality tenancies. Fitout removal, make safe coordination, waste removal and handover preparation.",
    ogImage: "/og/strip-out.jpg",
    
    title: "COMMERCIAL & INDUSTRIAL STRIP OUTS MELBOURNE",
    titleHighlight: "MELBOURNE",
    tagline: "Strip out works are where a make good project starts to take shape. We remove redundant fitout, fixtures, partitions, flooring, racking, signage and tenancy alterations so the space is ready for repair, reinstatement or handover. Offices, warehouses, factories, retail stores, medical tenancies and hospitality spaces across Melbourne.",
    trustBadges: [
      { icon: "shield", title: "Licensed & Insured" },
      { icon: "clipboard", title: "Make Safe" },
      { icon: "dollar", title: "Fixed-Price Quotes" },
      { icon: "document", title: "Waste Removal Included" }
    ],
    heroImage: stripOutHero,
    heroImageMobile: stripOutHeroMobile,
    heroImageAlt: "Commercial and industrial strip out works in a Melbourne tenancy prepared for make good and handover",
    heroImageTitle: "Makegood Melbourne - Commercial and Industrial Strip Out Services",
    
    aboutTitlePrefix: "STRIP OUTS THAT SET UP",
    aboutTitleHighlight: "THE HANDOVER PROPERLY",
    aboutContentLeft: [
      "A commercial strip out is not just taking things out of a tenancy. The order matters. Partitions, joinery, workstations, floor coverings, services, signage, racking and redundant fixtures all need to come out without damaging the parts of the building that stay.",
      "We look at what needs to be removed, what needs to be protected, what services need to be made safe and what trades follow after the strip out is done. That is what separates a strip out that sets up the handover from one that creates more work than it solves."
    ],
    aboutContentRight: [
      "Our team works across offices, industrial sites, retail centres, medical suites and hospitality tenancies throughout Melbourne. Lift bookings, loading dock coordination, access windows, after-hours requirements and waste removal are planned before anyone sets foot on site.",
      "The strip out is done when the tenancy is genuinely ready for the next stage, not just when the last skip bin leaves. That means surfaces protected, waste gone, access closed out and the site is ready for patching, painting, flooring, repair, reinstatement or handover."
    ],
    
    serviceSlugs: [
      "strip-out-solutions/demolition",
      "strip-out-solutions/make-safe",
      "strip-out-solutions/pallet-racking-removal"
    ],
    carouselTitle: "OUR STRIP OUT SERVICES",
    carouselTitleHighlight: "SERVICES",
    carouselDescription: "Commercial and industrial strip out support for offices, warehouses, factories, retail, medical and hospitality spaces.",
    
    scopeRows: [
      {
        scope: "Internal fitout removal",
        worksIncluded: "Partitions, meeting rooms, workstations, joinery, counters, cupboards, shelving and fixtures",
        link: "/services/strip-out-solutions/demolition/",
        linkLabel: "View demolition works",
        image: commercialDemolitionHeroImage,
        imageAlt: "Empty commercial office space after demolition and strip out works in Melbourne",
        imageTitle: "Commercial Demolition Works Melbourne"
      },
      {
        scope: "Flooring removal",
        worksIncluded: "Carpet tiles, vinyl, timber-look flooring, trims, adhesives and selected floor preparation",
        link: "/services/make-good-solutions/flooring-reinstatement/",
        linkLabel: "View flooring reinstatement",
        image: flooringReinstatementHeroImage,
        imageAlt: "Commercial flooring reinstatement in progress showing carpet tile installation in a Melbourne office",
        imageTitle: "Flooring Reinstatement Melbourne"
      },
      {
        scope: "Patching and Plastering",
        worksIncluded: "Bulkheads, selected ceiling features, wall linings, signage, decals, wall graphics and post-strip-out surface repairs",
        link: "/services/make-good-solutions/patching-plastering/",
        linkLabel: "View patching and plastering",
        image: patchingPlasteringHeroImage,
        imageAlt: "Commercial office space with freshly plastered white walls and suspended ceiling ready for make good handover in Melbourne",
        imageTitle: "Patching and Plastering Melbourne"
      },
      {
        scope: "Warehouse and factory items",
        worksIncluded: "Pallet racking, shelving, anchor bolts, storage structures, tenant-built offices and selected equipment zones",
        link: "/services/strip-out-solutions/pallet-racking-removal/",
        linkLabel: "View pallet racking removal",
        image: palletRackingRemovalHeroImage,
        imageAlt: "Warehouse pallet racking removal works in a Melbourne industrial tenancy",
        imageTitle: "Pallet Racking Removal Melbourne"
      },
      {
        scope: "Make Safe",
        worksIncluded: "Electrical make safe, service isolation, plumbing, HVAC, fire services and data cabling coordination before removal works begin, including returning redundant electrical runs back to the main switchboard where required",
        link: "/services/strip-out-solutions/make-safe/",
        linkLabel: "View make safe works",
        image: makeSafeWorksHeroImage,
        imageAlt: "Electrical switchboard and meter panels with organised conduit and cabling for make safe works in Melbourne",
        imageTitle: "Make Safe Works Melbourne"
      },
      {
        scope: "Waste removal",
        worksIncluded: "Sorting, loading, disposal, recycling where suitable and post-strip-out site presentation",
        link: "/services/handover-solutions/end-of-lease-cleaning/",
        linkLabel: "View end of lease cleaning",
        image: commercialFloorSweepingImage,
        imageAlt: "Worker sweeping a concrete floor with an industrial broom during make good cleaning in Melbourne",
        imageTitle: "End of Lease Cleaning Melbourne"
      },
      {
        scope: "Handover preparation",
        worksIncluded: "Tenancy prepared for patching, painting, flooring, ceiling repairs or final inspection",
        link: "/services/make-good-solutions/",
        linkLabel: "View make good solutions",
        image: makeGoodHero,
        imageAlt: "Restored Melbourne warehouse space showing completed make good works ready for handover",
        imageTitle: "Make Good Solutions Melbourne"
      }
    ],
    propertyTypes: [
      { title: "Office", description: "Partitions, meeting rooms, workstations, floor finishes, signage and joinery. Planned around lift access, loading dock windows, building rules and the make good works that follow." },
      { title: "Warehouse", description: "Pallet racking, anchor bolt grinding, tenant-built offices, shelving, flooring preparation and service disconnection. Coordinated so the warehouse moves into repair, reinstatement or handover without the strip out creating extra works." },
      { title: "Factory", description: "Production areas, work zones, storage structures, services, flooring treatments and equipment-related alterations. We assess what can come out safely, what needs specialist trade coordination and what needs to be restored for handover." },
      { title: "Retail", description: "Tight access, after-hours works, centre rules, hoarding, signage removal, display fixture removal, flooring and back-of-house works. Planned around trading environments and centre management requirements." },
      { title: "Medical Tenancy", description: "Treatment rooms, plumbing points, cabinetry, specialist flooring, partitions and compliance-sensitive areas. Removed with the right sequencing so the site is ready for reinstatement or the next tenancy stage." },
      { title: "Hospitality", description: "Counters, kitchen equipment zones, seating, flooring, wall linings, exhaust coordination, plumbing points and electrical services. Planned around building access, waste movement and the reinstatement path." }
    ],
    processTitle: "OUR STRIP OUT PROCESS",
    processSubtitle: "The strip out sets up everything that follows. We plan the sequence before works start so repair, reinstatement and handover works can follow from the right position.",
    processSteps: [
      { step: "Site Walkthrough", description: "We inspect the tenancy, confirm what is being removed, retained or protected and identify access or building constraints." },
      { step: "Scope & Quotation", description: "We prepare a fixed-price quote based on the lease, site conditions, access requirements and handover pathway." },
      { step: "Make Safe", description: "Electrical make safe, service isolation, plumbing, HVAC, fire services and data cabling are coordinated before removal works begin where required." },
      { step: "Strip Out Works", description: "Fitout, partitions, fixtures, flooring, racking and nominated tenancy alterations are removed in the correct sequence." },
      { step: "Handover Preparation", description: "The site is prepared for patching, painting, flooring reinstatement, ceiling repairs or final inspection." }
    ],
    
    faqTitle: "Strip Out FAQs",
    faqSubtitle: "Common questions about commercial and industrial strip out works",
    faqs: [
      {
        question: "What is included in a commercial strip out?",
        answer: "A commercial strip out can include tenant-installed partitions, meeting rooms, workstations, joinery, flooring, ceiling alterations, signage, racking, shelving and redundant fixtures. It can also include make safe coordination, waste removal and preparation for patching, painting, flooring or handover."
      },
      {
        question: "Do you handle office, warehouse and factory strip outs?",
        answer: "Yes. We handle office, warehouse, factory, retail, medical and hospitality strip outs across Melbourne. The scope changes by property type, so we confirm the removal works, access requirements, services and handover pathway during the site walkthrough."
      },
      {
        question: "Is a strip out the same as demolition?",
        answer: "A strip out is selective internal removal. It focuses on tenant-installed fitout and alterations while protecting the base building. Demolition can form part of the strip out where partitions, ceilings, flooring or fixed structures need to come out."
      },
      {
        question: "Does a strip out include make safe works?",
        answer: "It can. Many strip outs need electrical make safe before removal works begin, including isolation, disconnection and returning redundant electrical runs back to the main switchboard where required. Plumbing, HVAC, fire service and data cabling requirements are also confirmed during scoping and coordinated with the relevant licensed trades."
      },
      {
        question: "Can strip out works be completed after hours?",
        answer: "Yes, where the building permits it. After-hours work is common in offices, retail centres, hospitality sites and medical premises. Access, security, noise limits, lift bookings, loading docks and waste movement are factored into the programme."
      },
      {
        question: "What affects the cost of a strip out in Melbourne?",
        answer: "Tenancy size, the amount of fitout being removed, flooring and adhesive removal, make safe requirements, waste volume, lift or loading access, after-hours restrictions and the repair works needed after the strip out can all affect the cost."
      },
      {
        question: "Do you remove pallet racking and warehouse shelving?",
        answer: "Yes. We remove pallet racking and warehouse shelving as part of warehouse and industrial strip out works. This can include dismantling, anchor removal, slab preparation and coordination of any required floor repairs."
      },
      {
        question: "What happens after the strip out is complete?",
        answer: "Depending on the lease and handover condition, the next stage can include patching, painting, flooring reinstatement, ceiling repairs, service certification, waste records and final inspection preparation."
      }
    ],
    
    ctaTitle: "NEED A COMMERCIAL OR INDUSTRIAL STRIP OUT?",
    ctaSubtitle: "We do Make Goods all day, every day.",
    ctaText: "Send through the property address, photos, lease timing and any handover notes. We will review the strip out scope, confirm what needs to be removed and provide a practical fixed-price quote."
  },
  {
    slug: "make-good-solutions",
    metaTitle: "Make Good Solutions Melbourne | End of Lease Restoration",
    metaDescription: "Make good services for commercial and industrial properties across Melbourne. Flooring, painting, ceilings and wall repairs. Fixed-price quotes, lease compliance delivered.",
    ogImage: "/og/make-good.jpg",
    
    title: "MAKE GOOD, BETTER.",
    titleHighlight: "BETTER.",
    tagline: "From flooring and painting to ceiling repairs and wall patching, we handle every aspect of your end-of-lease make good. Our team ensures your commercial or industrial space is restored to base building condition and ready for handover.",
    trustBadges: [
      { icon: "shield", title: "Licensed & Insured" },
      { icon: "clipboard", title: "Lease Compliance Experts" },
      { icon: "dollar", title: "Fixed-Price Quotes" },
      { icon: "document", title: "Full Project Documentation" }
    ],
    heroImage: makeGoodHero,
    heroImageMobile: makeGoodHeroMobile,
    heroImageAlt: "Clean, restored warehouse space showing completed make good works in Melbourne",
    heroImageTitle: "Makegood Melbourne - Professional Make Good and Restoration Services",
    
    aboutTitlePrefix: "WE DO MAKE GOODS",
    aboutTitleHighlight: "ALL DAY, EVERY DAY.",
    aboutContentLeft: [
      "End-of-lease make good works are what we do. Whether you're vacating an office, retail space, medical centre, or industrial warehouse, your lease requires the property to be returned to base building condition. We handle the entire restoration process—flooring, painting, ceiling repairs, wall patching—all completed to lease specifications.",
      "We work directly with real estate agents, property managers, strata managers, landlords, and tenants to ensure compliance at every stage. Whether you're preparing for lease expiry, managing emergency repairs, or addressing building defects, we provide professional solutions that meet all lease obligations and compliance requirements."
    ],
    aboutContentRight: [
      "Our network of licensed tradespeople handles projects of all sizes across commercial, industrial, retail, hospitality, and medical sectors. From small office fitouts to large-scale warehouse restorations, we deliver quality workmanship and competitive pricing.",
      "Our detailed approach to scoping your project means you know the complete cost upfront without surprise variations later. We understand the pressure of lease deadlines and work efficiently to ensure your property is handover-ready when you need it.",
      "Serving Melbourne's commercial and industrial property sectors with expertise in flooring, painting, ceiling repairs, wall restoration, and full building compliance. Contact us today for a free assessment and discover why property professionals throughout Melbourne choose Make Good Melbourne for their end-of-lease restoration needs."
    ],
    
    serviceSlugs: [
      "make-good-solutions/end-of-lease-make-good",
      "make-good-solutions/office-make-good",
      "make-good-solutions/flooring-reinstatement",
      "make-good-solutions/line-marking",
      "make-good-solutions/patching-plastering",
      "make-good-solutions/painting",
      "make-good-solutions/suspended-ceilings",
      "make-good-solutions/warehouse-flooring"
    ],
    carouselTitle: "OUR MAKE GOOD SERVICES",
    carouselTitleHighlight: "SERVICES",
    carouselDescription: "Complete restoration solutions for commercial and industrial properties across Melbourne.",
    
    faqTitle: "Make Good FAQs",
    faqSubtitle: "Common questions about make good services",
    faqs: [
      {
        question: "What is included in make good works?",
        answer: "Make good works include all services required to return your property to base building condition as specified in your lease. This typically covers flooring installation or removal, wall repairs and painting, ceiling repairs or replacement, removal of partitions and fitouts, electrical and plumbing disconnection, and restoration of any structural modifications. We assess your lease schedule and provide a comprehensive scope of works."
      },
      {
        question: "How long does a make good project take?",
        answer: "Project timelines depend on the size and scope of work required. A small office make good might take 1-2 weeks, while a large warehouse restoration can take 4-6 weeks. We provide a detailed timeline during the quoting process and work efficiently to meet your lease expiry deadlines."
      },
      {
        question: "Do you provide fixed-price quotes?",
        answer: "Yes. Our detailed approach to scoping your project means you receive a fixed-price quote with no surprise variations. We assess the property, review your lease requirements, and provide a comprehensive quote that covers all work required to meet base building condition."
      },
      {
        question: "Can you work with my property manager or landlord?",
        answer: "Absolutely. We work directly with property managers, landlords, real estate agents, and building owners throughout the make good process. We provide regular updates, coordinate inspections, and ensure all work meets the required standards for handover approval."
      },
      {
        question: "What areas do you service?",
        answer: "We service all of Melbourne and Victoria, including CBD, inner suburbs, outer suburbs, and regional areas. Our network of licensed tradespeople allows us to handle make good projects across the state efficiently."
      },
      {
        question: "Can you work with our existing trades or building contractors?",
        answer: "Absolutely. We're happy to coordinate with your preferred trades or building management contractors throughout the make good process. Whether it's fire services that must be handled by building management, specialised trades like elevator maintenance, or your own trusted painter, we can integrate their work into the project timeline. We handle the coordination and ensure all trades work together efficiently to meet your handover deadline."
      }
    ],
    
    ctaTitle: "YOUR MAKE GOOD SPECIALISTS",
    ctaSubtitle: "Make Good, BETTER.",
    ctaText: "Get a detailed quote for your end-of-lease make good works. We'll assess your lease requirements and provide a fixed-price proposal with a clear timeline for handover."
  },
  {
    slug: "remediation-solutions",
    metaTitle: "Remediation Solutions Melbourne | Make Good, BETTER.",
    metaDescription: "Building remediation services in Melbourne. Structural repairs, concrete cancer treatment, cladding compliance and waterproofing. Licensed contractors. Free site inspections.",
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
    heroImageMobile: buildingRemediationHeroMobile,
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
      "remediation-solutions/cladding-glazing",
      "remediation-solutions/polycarbonate-roofing-skylights",
      "remediation-solutions/structural",
      "remediation-solutions/waterproofing",
      "remediation-solutions/water-damage-mould-remediation",
      "remediation-solutions/fire-compliance-facade-cladding-remediation"
    ],
    carouselTitle: "Our Remediation Services",
    carouselTitleHighlight: "Remediation Services",
    carouselDescription: "Engineered solutions that restore safety, compliance, and longevity.",
    
    faqTitle: "Remediation FAQs",
    faqSubtitle: "Common questions about remediation services",
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
