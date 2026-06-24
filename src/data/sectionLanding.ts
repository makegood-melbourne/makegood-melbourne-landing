// Section landing page data for the 4 main service categories:
// Strip Out, Make Good, Handover, Remediation

import buildingRemediationHero from "@/assets/services/building-remediation-melbourne-shotcrete.jpg";
import buildingRemediationHeroMobile from "@/assets/services/building-remediation-melbourne-shotcrete-mobile.jpg";
import stripOutHero from "@/assets/services/commercial-industrial-strip-out-melbourne.jpg";
import stripOutHeroMobile from "@/assets/services/commercial-industrial-strip-out-melbourne-mobile.jpg";
import makeGoodHero from "@/assets/services/melbourne-warehouse-make-good-hero.jpg";
import makeGoodHeroMobile from "@/assets/services/melbourne-warehouse-make-good-hero-mobile.jpg";
import commercialIndustrialHandoverHero from "@/assets/services/commercial-industrial-handover-ready-warehouse-melbourne.webp";
import commercialIndustrialHandoverHeroMobile from "@/assets/services/commercial-industrial-handover-ready-warehouse-melbourne-mobile.webp";
import commercialFloorSweepingImage from "@/assets/services/commercial-floor-sweeping-concrete-melbourne.jpeg";
import commercialDemolitionHeroImage from "@/assets/services/commercial-demolition-melbourne-hero.jpg";
import flooringReinstatementHeroImage from "@/assets/services/flooring-reinstatement-hero.webp";
import makeSafeWorksHeroImage from "@/assets/services/make-safe-works-melbourne-hero.jpg";
import palletRackingRemovalHeroImage from "@/assets/services/pallet-racking-removal-melbourne-warehouse.jpeg";
import patchingPlasteringHeroImage from "@/assets/services/patching-plastering-commercial-office-walls-ceiling-melbourne.jpeg";
import ceilingTileReplacementHeroImage from "@/assets/services/ceiling-tile-replacement-commercial-office-melbourne.jpeg";
import commercialPaintingHeroImage from "@/assets/services/commercial-warehouse-painting-make-good-melbourne.jpeg";
import concreteSlabRestorationHeroImage from "@/assets/services/concrete-slab-restoration-warehouse-floor-melbourne.jpeg";
import endOfLeaseMakeGoodHeroImage from "@/assets/services/end-of-lease-make-good-empty-commercial-tenancy-melbourne.webp";
import lineMarkingFreshImage from "@/assets/services/warehouse-fresh-yellow-line-marking-polished-concrete-melbourne.jpg";
import officeCeilingTilesImage from "@/assets/services/commercial-office-ceiling-tiles-led-panels-melbourne.jpeg";

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
  scopeTitle?: string;
  scopeTitleHighlight?: string;
  scopeSubtitle?: string;
  scopeRows?: SectionLandingScopeRow[];
  propertyTypesTitle?: string;
  propertyTypesTitleHighlight?: string;
  propertyTypesSubtitle?: string;
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
    
    scopeTitle: "STRIP OUT",
    scopeTitleHighlight: "SCOPE",
    scopeSubtitle: "What we can remove, coordinate and prepare during a commercial or industrial strip out.",
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
    propertyTypesTitle: "PROPERTY TYPES WE",
    propertyTypesTitleHighlight: "STRIP OUT",
    propertyTypesSubtitle: "Office, warehouse, factory, retail, medical and hospitality tenancies each need a different strip out sequence. We plan the work around the site, access and handover path.",
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
    metaTitle: "Make Good Solutions Melbourne | Make Good, BETTER.",
    metaDescription: "Commercial end-of-lease make good services in Melbourne for offices, warehouses, factories, retail, medical and hospitality tenancies. Strip out, repairs, painting, flooring, ceilings and handover preparation.",
    ogImage: "/og/make-good.jpg",
    
    title: "MAKE GOOD SOLUTIONS MELBOURNE",
    titleHighlight: "MELBOURNE",
    tagline: "End-of-lease make good works bring a tenancy back to the agreed handover condition. We coordinate strip out, repairs, reinstatement, painting, flooring, ceilings, warehouse floor works, waste removal and final presentation for commercial and industrial properties across Melbourne.",
    trustBadges: [
      { icon: "shield", title: "Licensed & Insured" },
      { icon: "clipboard", title: "Lease Handover Ready" },
      { icon: "dollar", title: "Fixed-Price Quotes" },
      { icon: "document", title: "Full Trade Coordination" }
    ],
    heroImage: makeGoodHero,
    heroImageMobile: makeGoodHeroMobile,
    heroImageAlt: "Clean restored warehouse space showing completed commercial make good works in Melbourne",
    heroImageTitle: "Makegood Melbourne - Make Good Solutions Melbourne",
    
    aboutTitlePrefix: "WE DO MAKE GOODS",
    aboutTitleHighlight: "ALL DAY, EVERY DAY.",
    aboutContentLeft: [
      "A commercial make good is rarely one trade. It can involve strip out, make safe, wall patching, plastering, painting, flooring reinstatement, ceiling repairs, slab restoration, line marking and final presentation, all completed in the right order so the tenancy is ready for inspection.",
      "The sequence matters. Redundant fitout needs to come out before walls can be repaired. Flooring works need the strip out and surface preparation handled first. Ceiling repairs, painting and final presentation need to happen after the heavy work is complete. We plan the make good as one coordinated scope rather than a collection of disconnected trade jobs."
    ],
    aboutContentRight: [
      "We complete make good works for offices, warehouses, factories, retail spaces, medical suites, hospitality premises, showrooms and mixed commercial sites throughout Melbourne. Each property type has its own access rules, handover expectations and practical constraints, so we scope the works around the lease, the site condition and the inspection pathway.",
      "We work with tenants, landlords, property managers, building managers and client-provided trades where required. If you already have a preferred painter, electrician or other trade, we can coordinate with their work while we handle the remaining make good scope.",
      "The result is a clear fixed-price scope, a practical programme and a tenancy prepared for handover without splitting the same make good intent across multiple service pages."
    ],
    
    serviceSlugs: [
      "make-good-solutions/flooring-reinstatement",
      "make-good-solutions/line-marking",
      "make-good-solutions/painting",
      "make-good-solutions/patching-plastering",
      "make-good-solutions/suspended-ceilings",
      "make-good-solutions/warehouse-flooring"
    ],
    carouselTitle: "OUR MAKE GOOD SERVICES",
    carouselTitleHighlight: "SERVICES",
    carouselDescription: "Commercial and industrial make good support for offices, warehouses, factories, retail, medical and hospitality spaces.",

    scopeTitle: "MAKE GOOD",
    scopeTitleHighlight: "SCOPE",
    scopeSubtitle: "What we can coordinate, repair and reinstate during a commercial or industrial end-of-lease make good.",
    scopeRows: [
      {
        scope: "Strip out and make safe",
        worksIncluded: "Removal of redundant fitout, partitions, fixtures, racking, signage and selected services made safe before reinstatement works proceed",
        link: "/services/strip-out-solutions/",
        linkLabel: "View strip out solutions",
        image: stripOutHero,
        imageAlt: "Commercial tenancy stripped out and prepared for make good handover works in Melbourne",
        imageTitle: "Strip Out Solutions Melbourne"
      },
      {
        scope: "Patching and plastering",
        worksIncluded: "Wall repairs, fixing holes, plasterboard patching, demolition lines, ceiling bulkheads and paint-ready surface preparation",
        link: "/services/make-good-solutions/patching-plastering/",
        linkLabel: "View patching and plastering",
        image: patchingPlasteringHeroImage,
        imageAlt: "Commercial office walls and ceiling patched ready for make good painting in Melbourne",
        imageTitle: "Patching and Plastering Melbourne"
      },
      {
        scope: "Painting",
        worksIncluded: "Commercial repainting, colour-matched touch-ups, doors, trims, feature walls and internal finishes prepared for handover",
        link: "/services/make-good-solutions/painting/",
        linkLabel: "View painting",
        image: commercialPaintingHeroImage,
        imageAlt: "Commercial warehouse interior painting completed as part of make good works in Melbourne",
        imageTitle: "Commercial Painting Melbourne"
      },
      {
        scope: "Flooring reinstatement",
        worksIncluded: "Carpet tiles, vinyl, adhesive removal, floor preparation, concrete repairs and selected flooring replacement for lease handover",
        link: "/services/make-good-solutions/flooring-reinstatement/",
        linkLabel: "View flooring reinstatement",
        image: flooringReinstatementHeroImage,
        imageAlt: "Commercial flooring reinstatement in progress for a Melbourne make good project",
        imageTitle: "Flooring Reinstatement Melbourne"
      },
      {
        scope: "Ceilings and services openings",
        worksIncluded: "Ceiling tile replacement, grid repairs, openings around removed services and selected ceiling reinstatement works",
        link: "/services/make-good-solutions/suspended-ceilings/",
        linkLabel: "View suspended ceilings",
        image: ceilingTileReplacementHeroImage,
        imageAlt: "Commercial suspended ceiling tile replacement during office make good works in Melbourne",
        imageTitle: "Suspended Ceilings Melbourne"
      },
      {
        scope: "Warehouse floors and line marking",
        worksIncluded: "Dynabolt removal, concrete patching, slab restoration, line marking removal or reinstatement and warehouse floor presentation",
        link: "/services/make-good-solutions/warehouse-flooring/",
        linkLabel: "View warehouse flooring",
        image: concreteSlabRestorationHeroImage,
        imageAlt: "Warehouse concrete slab restored as part of industrial make good works in Melbourne",
        imageTitle: "Warehouse Flooring Melbourne"
      },
      {
        scope: "Final handover preparation",
        worksIncluded: "Waste removal, touch-ups, final trade items and presentation works completed before inspection or return of the premises",
        link: "/services/handover-solutions/end-of-lease-cleaning/",
        linkLabel: "View end of lease cleaning",
        image: commercialFloorSweepingImage,
        imageAlt: "Commercial concrete floor swept and prepared for end of lease make good handover in Melbourne",
        imageTitle: "End of Lease Cleaning Melbourne"
      }
    ],
    propertyTypesTitle: "PROPERTY TYPES WE",
    propertyTypesTitleHighlight: "MAKE GOOD",
    propertyTypesSubtitle: "Office, warehouse, factory, retail, medical and hospitality tenancies each have different handover expectations. We plan the make good around the lease, site condition and inspection pathway.",
    propertyTypes: [
      { title: "Office", description: "Partitions, meeting rooms, workstations, flooring, ceiling grids, signage, wall damage and tenancy alterations assessed and brought back to the agreed handover condition." },
      { title: "Warehouse", description: "Racking removal, anchor grinding, slab repairs, line marking, warehouse floor presentation and selected service disconnection planned around access and inspection timing." },
      { title: "Factory", description: "Production areas, work zones, storage structures, flooring treatments and equipment-related tenancy changes assessed before repair, reinstatement and presentation works proceed." },
      { title: "Retail", description: "Display fixtures, signage, wall graphics, flooring, back-of-house areas and centre access requirements coordinated around trading environments and handover rules." },
      { title: "Medical Tenancy", description: "Treatment rooms, cabinetry, plumbing points, specialist flooring, partitions and compliance-sensitive areas prepared for reinstatement or the next tenancy stage." },
      { title: "Hospitality", description: "Counters, seating areas, flooring, wall linings, kitchen-adjacent zones, plumbing points and electrical services coordinated with the broader make good pathway." }
    ],
    processTitle: "OUR MAKE GOOD PROCESS",
    processSubtitle: "The make good works are planned around the handover condition, the lease timing and the order each trade needs to follow.",
    processSteps: [
      { step: "Site Walkthrough", description: "We inspect the tenancy, review the practical make good scope and identify access, building rules and handover constraints." },
      { step: "Scope & Quotation", description: "We prepare a fixed-price scope based on the site condition, lease notes, photos, property manager comments and required trade sequence." },
      { step: "Strip Out & Make Safe", description: "Redundant fitout, fixtures, partitions, racking or selected services are removed or made safe before repair and reinstatement works begin." },
      { step: "Make Good Works", description: "We complete patching, plastering, painting, flooring, ceiling repairs, warehouse floor works, line marking and related trade items." },
      { step: "Handover Preparation", description: "Final touch-ups, waste removal and presentation items are completed so the tenancy is ready for inspection." }
    ],
    
    faqTitle: "Make Good FAQs",
    faqSubtitle: "Common questions about commercial and industrial make good works",
    faqs: [
      {
        question: "What is included in commercial make good works?",
        answer: "Commercial make good works can include strip out, removal of tenant fixtures, patching, plastering, painting, flooring reinstatement, ceiling repairs, warehouse floor restoration, line marking, waste removal and other trade works needed to prepare the premises for handover. The final scope depends on the lease, the site condition and the agreed handover requirements."
      },
      {
        question: "Do you handle end-of-lease make good projects?",
        answer: "Yes. End-of-lease make good projects are a core part of what we do. We can review the site condition, lease timing, photos and property manager notes, then prepare a practical scope covering the work needed for handover."
      },
      {
        question: "Do you complete office make good works?",
        answer: "Yes. Office make good works can include partition removal, meeting room and workstation fitout removal, wall patching, repainting, flooring reinstatement, suspended ceiling repairs, signage removal, waste removal and final handover preparation."
      },
      {
        question: "Can you complete warehouse and factory make goods?",
        answer: "Yes. Warehouse and factory make goods often include racking removal, anchor bolt removal or grinding, concrete slab repairs, floor preparation, line marking removal or reinstatement, selected service coordination and final presentation works."
      },
      {
        question: "Can you coordinate multiple trades?",
        answer: "Yes. Most make good projects involve several trades. We coordinate the order of works so strip out, repairs, painting, flooring, ceiling works, warehouse floor repairs and final items are handled as one project rather than disconnected jobs."
      },
      {
        question: "Can you work with our existing trades or building contractors?",
        answer: "Yes. We can coordinate with your preferred trades or building management contractors. If you already have a painter, electrician or other trusted trade, we can integrate their work into the programme while we handle the remaining make good scope."
      },
      {
        question: "How early should we book make good works?",
        answer: "It is best to allow enough time before the lease handover date for inspection, quoting, approval, access coordination and the works themselves. Short timeframes can still be assessed, but earlier planning gives more control over cost and scheduling."
      },
      {
        question: "What information helps with a make good quote?",
        answer: "Helpful information includes the site address, lease end timing, floor area, access rules, photos, walkthrough videos, lease notes and any property manager comments. We can then advise whether a site inspection is needed before confirming the quote."
      }
    ],
    
    ctaTitle: "NEED A COMMERCIAL OR INDUSTRIAL MAKE GOOD?",
    ctaSubtitle: "We do Make Goods all day, every day.",
    ctaText: "Send through the property address, lease timing, photos and any handover notes. We will review the make good scope, confirm the practical order of works and provide a fixed-price quote."
  },
  {
    slug: "handover-solutions",
    metaTitle: "Handover Solutions Melbourne | End of Lease Handover Services",
    metaDescription: "Commercial handover solutions in Melbourne for end-of-lease cleaning, relocation, final inspection preparation and key handback. One coordinated team for lease exits. Free quotes.",
    ogImage: "/og/handover-solutions.jpg",

    title: "HANDOVER SOLUTIONS MELBOURNE",
    titleHighlight: "MELBOURNE",
    tagline: "The final stage of a lease exit needs more than a quick clean. We coordinate end-of-lease cleaning, relocation support, waste removal, final presentation and inspection preparation so commercial and industrial tenants can hand back the keys without loose ends.",
    trustBadges: [
      { icon: "shield", title: "Licensed & Insured" },
      { icon: "clipboard", title: "Lease Handover Ready" },
      { icon: "dollar", title: "Fixed-Price Quotes" },
      { icon: "compass", title: "Cleaning + Relocation Coordination" }
    ],
    heroImage: commercialIndustrialHandoverHero,
    heroImageMobile: commercialIndustrialHandoverHeroMobile,
    heroImageAlt: "Clean empty commercial warehouse ready for lease handover in Melbourne",
    heroImageTitle: "Makegood Melbourne - Commercial and Industrial Handover Solutions",

    aboutTitlePrefix: "THE FINAL STAGE OF",
    aboutTitleHighlight: "A COMPLETE HANDOVER",
    aboutContentLeft: [
      "A handover is where all the earlier work needs to come together. The strip out may be done, repairs complete and the new site ready, but the old premises still needs to be cleaned, cleared, presented and prepared for inspection.",
      "That final stage often has more moving parts than expected. Industrial floor cleaning, post-strip-out cleaning, waste removal, equipment movement, loading dock coordination, final touch-ups and timing around the landlord or property manager inspection all need to land in the right order."
    ],
    aboutContentRight: [
      "We handle handover works for offices, warehouses, factories, retail spaces and mixed commercial sites across Melbourne. The scope changes by property type, but the aim is the same. Get the tenancy ready for key handback without cleaning, relocation and inspection items scattered across three different contractors.",
      "Where the handover requires more than cleaning, we can coordinate end-of-lease cleaning with make good works, strip out support and waste removal as one managed scope."
    ],

    serviceSlugs: [
      "handover-solutions/end-of-lease-cleaning",
      "handover-solutions/end-of-lease-relocation"
    ],
    carouselTitle: "OUR HANDOVER SERVICES",
    carouselTitleHighlight: "SERVICES",
    carouselDescription: "Commercial and industrial handover support for cleaning, relocation, presentation and key handback across Melbourne.",
    useGrid: true,

    scopeTitle: "HANDOVER WORKS",
    scopeTitleHighlight: "WORKS",
    scopeSubtitle: "A practical handover scope brings cleaning, clearing, relocation and inspection preparation into one coordinated programme.",
    scopeRows: [
      {
        scope: "End-of-lease cleaning",
        worksIncluded: "Heavy-duty cleaning, warehouse floor scrubbing, pressure washing, amenities, offices, loading docks and final presentation.",
        link: "/services/handover-solutions/end-of-lease-cleaning/",
        linkLabel: "View end-of-lease cleaning"
      },
      {
        scope: "Industrial floor cleaning",
        worksIncluded: "Ride-on scrubbing, degreasing, tyre mark removal, concrete cleaning and warehouse floor presentation for inspection.",
        link: "/services/handover-solutions/end-of-lease-cleaning/",
        linkLabel: "View floor cleaning scope"
      },
      {
        scope: "Relocation and load-out",
        worksIncluded: "Equipment movement, racking transport, office relocation support, loading coordination and optional delivery to the new site.",
        link: "/services/handover-solutions/end-of-lease-relocation/",
        linkLabel: "View relocation support"
      },
      {
        scope: "Waste removal and site clearing",
        worksIncluded: "Skip coordination, large item removal, scrap handling, post-strip-out waste and final site clearing.",
        link: "/services/handover-solutions/end-of-lease-cleaning/",
        linkLabel: "View cleaning and clearing"
      },
      {
        scope: "Inspection preparation",
        worksIncluded: "Final presentation, touch-ups and handover readiness for landlord or property manager inspection.",
        link: "/services/handover-solutions/end-of-lease-cleaning/",
        linkLabel: "View inspection preparation"
      },
      {
        scope: "Make good coordination",
        worksIncluded: "Patching, painting, floor reinstatement, ceiling repairs and trade works where the handover requires more than cleaning.",
        link: "/services/make-good-solutions/",
        linkLabel: "View make good solutions"
      }
    ],

    propertyTypesTitle: "HANDOVER PROPERTY TYPES",
    propertyTypesTitleHighlight: "PROPERTY TYPES",
    propertyTypesSubtitle: "We prepare commercial and industrial sites across Melbourne for landlord inspection and key handback.",
    propertyTypes: [
      { title: "Office", description: "Final clean, workstation and furniture removal support, amenities, kitchens, windows, floor presentation and inspection preparation." },
      { title: "Warehouse", description: "Floor cleaning, loading dock cleaning, racking-related cleanup, waste removal, concrete presentation and final access coordination." },
      { title: "Factory", description: "Equipment-zone cleanup, floor degreasing, waste removal, industrial cleaning and coordination around machinery relocation or make good works." },
      { title: "Retail", description: "Back-of-house cleaning, display fixture removal support, floor presentation, signage-related cleanup and centre access requirements." },
      { title: "Medical Tenancy", description: "Treatment room cleaning, cabinetry and waste coordination, flooring presentation and handover preparation around sensitive tenancy conditions." },
      { title: "Mixed Commercial", description: "Cleaning, relocation, waste, repairs and final presentation coordinated across sites with office, warehouse and trade areas in one tenancy." }
    ],

    processTitle: "A CLEAR HANDOVER PROCESS",
    processSubtitle: "We sequence the final works so the site is clean, cleared and ready for inspection before the handover date.",
    processSteps: [
      { step: "Handover Review", description: "We review the lease timing, property condition, photos, access rules and what needs to be done before key handback." },
      { step: "Scope and Quote", description: "Fixed-price scope covering cleaning, relocation, waste, inspection preparation and any make good coordination required." },
      { step: "Clean, Clear and Coordinate", description: "End-of-lease cleaning, waste removal, equipment movement and final trade coordination completed in the right order." },
      { step: "Final Presentation", description: "Floors, amenities, offices, loading areas and remaining touch-points presented for landlord or property manager inspection." },
      { step: "Key Handover", description: "Site left ready for final inspection, with the handover pathway closed out." }
    ],

    faqTitle: "Handover Solutions FAQs",
    faqSubtitle: "Common questions about commercial and industrial lease handover support in Melbourne.",
    faqs: [
      {
        question: "What are Handover Solutions?",
        answer: "The final stage of a commercial or industrial lease exit. This can include end-of-lease cleaning, waste removal, relocation support, final presentation, inspection preparation and coordination with make good works where required."
      },
      {
        question: "Is this different from end-of-lease cleaning?",
        answer: "Yes. End-of-lease cleaning is one part of the handover. Handover Solutions covers the full picture, including relocation, waste, final presentation and coordination with any outstanding make good works."
      },
      {
        question: "Do you handle warehouse and factory handovers?",
        answer: "Yes. Floor cleaning, loading dock cleaning, racking-related cleanup, waste removal, equipment movement support and inspection preparation across Melbourne."
      },
      {
        question: "Can you coordinate relocation and cleaning together?",
        answer: "Yes. We can run relocation and end-of-lease cleaning as one programme so the old site is being prepared for handover while the move to the new location is underway."
      },
      {
        question: "Can you help if the property manager has flagged additional works?",
        answer: "Yes. If the landlord or property manager identifies additional cleaning, presentation or make good items, we can review the notes and prepare a practical scope to address them."
      },
      {
        question: "What information helps with a handover quote?",
        answer: "Site address, lease end date, property type, floor area, photos or videos, access rules, relocation date, any property manager comments and the expected handover condition."
      }
    ],

    ctaTitle: "NEED A COMMERCIAL OR INDUSTRIAL HANDOVER?",
    ctaSubtitle: "We do make goods all day, every day.",
    ctaText: "Send through the property address, lease timing, photos and any handover notes. We will review the cleaning, relocation and final presentation scope and provide a practical fixed-price quote."
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
