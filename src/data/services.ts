import commercialCleaningImage from "@/assets/services/commercial-cleaning-melbourne-supplies.jpeg";
import commercialFloorSweepingImage from "@/assets/services/commercial-floor-sweeping-concrete-melbourne.jpeg";
import epoxyFlooringWarehouseImage from "@/assets/services/polished-epoxy-floor-industrial-warehouse-melbourne.jpeg";
import epoxySpreadingApplicationImage from "@/assets/services/epoxy-floor-spreading-application-warehouse-melbourne.jpeg";
import warehouseFloorScrubberImage from "@/assets/services/warehouse-floor-scrubber-cleaning-v4.jpg";
import industrialFloorScrubberImage from "@/assets/services/industrial-warehouse-floor-scrubber-cleaning-melbourne.jpeg";
import highPressureWarehouseCleaningImage from "@/assets/services/high-pressure-warehouse-cleaning-melbourne.png";
import warehouseRelocationImage from "@/assets/services/warehouse-relocation-forklift-loading-racking-melbourne.png";
import palletRackingHeroImage from "@/assets/services/pallet-racking-dismantling-warehouse-floor-melbourne.jpeg";
import palletRackingLogisticsImage from "@/assets/services/pallet-racking-logistics-transport-melbourne.jpeg";
import warehouseDynaboltHoleRepairsImage from "@/assets/services/warehouse-dynabolt-hole-repairs-pallet-racking-melbourne.jpeg";
import warehouseFloorRepairsHeroImage from "@/assets/services/warehouse-floor-repairs-concrete-leveling-melbourne.jpeg";
import warehouseFloorRepairsScopeImage from "@/assets/services/warehouse-floor-repairs-scope-polished-concrete-melbourne.jpeg";
import flatbedTruckTransportImage from "@/assets/services/flatbed-truck-transporting-pallet-racking-melbourne-skyline.png";
import concreteCancerImage from "@/assets/services/concrete-cancer-exposed-rebar-column-spalling-melbourne.jpeg";
import warehouseFloorSlabDamageImage from "@/assets/services/warehouse-floor-slab-deterioration-structural-damage-melbourne.png";
import waterproofingMembraneImage from "@/assets/services/waterproofing-membrane-application-commercial-melbourne.jpeg";
import rooftopWaterproofingImage from "@/assets/services/rooftop-waterproofing-membrane-application-melbourne.jpeg";
import retentionWallConstructionImage from "@/assets/services/retention-wall-formwork-reinforcement-construction-melbourne.jpeg";
import claddingRemediationImage from "@/assets/services/cladding-remediation-facade-glazing-melbourne.jpeg";
import glazingFacadeInstallationImage from "@/assets/services/glazing-facade-installation-commercial-building-melbourne.jpg";
import ceilingTileReplacementHeroImage from "@/assets/services/ceiling-tile-replacement-commercial-office-melbourne.jpeg";
import suspendedCeilingGridImage from "@/assets/services/suspended-ceiling-grid-led-panels-commercial-office-melbourne.jpeg";
import lineMarkingWornFloorImage from "@/assets/services/warehouse-floor-worn-line-markings-restoration-melbourne.jpeg";
import lineMarkingRestoredImage from "@/assets/services/warehouse-floor-worn-line-markings-restoration-melbourne.png";
import carParkLineMarkingImage from "@/assets/services/car-park-line-marking-restoration-aerial-melbourne.jpeg";
import emptyWarehouseImage from "@/assets/services/empty-warehouse-after-makegood-melbourne.png";
import manufacturingFacilityImage from "@/assets/services/manufacturing-facility-before-makegood-melbourne.jpeg";
import concreteSlabRestorationHeroImage from "@/assets/services/concrete-slab-restoration-warehouse-floor-melbourne.jpeg";
import concreteFloorGrinderImage from "@/assets/services/industrial-concrete-floor-grinding-warehouse-melbourne.jpeg";
import concreteFloorJointImage from "@/assets/services/concrete-floor-joint-metal-expansion-strip-melbourne.jpeg";
import skylightRoofPanelsImage from "@/assets/services/industrial-skylight-roof-panels-steel-structure-melbourne.jpeg";
import skylightSteelStructureImage from "@/assets/services/industrial-warehouse-skylight-steel-trusses-melbourne.jpeg";
import polyurethaneFoamInjectionImage from "@/assets/services/polyurethane-foam-injection-slab-stabilisation-melbourne.jpeg";
import tileFlooringRemovalImage from "@/assets/services/tile-flooring-removal-demolition-hammer-melbourne.jpeg";
import floorGrindingMachineImage from "@/assets/services/floor-grinding-machine-concrete-levelling-melbourne.jpeg";
import grindSealFloorCoatingImage from "@/assets/services/grind-seal-floor-coating-application-warehouse-melbourne.jpeg";
import floorGrindingPowerTrowelImage from "@/assets/services/floor-grinding-power-trowel-concrete-melbourne.png";
import warehouseRoofSkylightsImage from "@/assets/services/warehouse-roof-skylights-steel-structure-melbourne.jpeg";
import commercialPaintingHeroImage from "@/assets/services/commercial-warehouse-painting-make-good-melbourne.jpeg";
import commercialPaintingScopeImage from "@/assets/services/commercial-painting-scope-surface-preparation-melbourne.jpeg";
import structuralRemediationHeroImage from "@/assets/services/structural-remediation-concrete-cancer-repair-melbourne.jpg";
import shotcreteApplicationImage from "@/assets/services/shotcrete-application-structural-repair-melbourne.jpg";
import palletRackingRemovalHeroImage from "@/assets/services/pallet-racking-removal-melbourne-warehouse.jpeg";
import wasteManagementBinImage from "@/assets/services/waste-management-bin.jpg";

export interface FeaturedSection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageTitle?: string; // Title text for tooltip on hover
  imagePosition?: 'left' | 'center' | 'right';
  imageLeft?: boolean; // Force image on left side of layout
}

export interface CtaBlock {
  title: string;
  titleHighlight?: string; // Part of title to highlight in orange
  subtitle?: string;
  text: string;
}

export interface ComparisonItem {
  feature: string;
  specialist: string;
  regular: string;
}

export interface Comparison {
  title?: string;
  specialistTitle: string;
  regularTitle: string;
  items: ComparisonItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CapabilityCard {
  icon: 'brick' | 'structure' | 'waterproof';
  title: string;
  items: string[];
}

export interface TrustBadge {
  icon: 'shield' | 'compass' | 'dollar' | 'document';
  title: string;
}

export interface SpotlightCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface RelatedServiceCard {
  slug: string;
  name: string;
  description: string;
}

export interface LinkedSpotlightCard {
  slug: string;
  name: string;
  description: string;
}

export interface LinkedSpotlightBlock {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  cards: LinkedSpotlightCard[];
}

export interface Service {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  heroText: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageTitle?: string; // Title text for tooltip on hover
  ogImage?: string; // Public URL for Open Graph image (e.g., "/og/service-name.jpg")
  secondaryImage?: string;
  secondaryImageAlt?: string;
  scopeTitle?: string; // Custom title for the scope section (defaults to "{name} Scope")
  trustBadges?: (string | TrustBadge)[];
  featuredSection?: FeaturedSection;
  featuredSections?: FeaturedSection[];
  postComparisonSections?: FeaturedSection[]; // Sections that appear after comparison table, before FAQ
  processAfterSection?: number; // Index of featured section after which to show process (0-based)
  processAfterScope?: boolean; // Show process right after scope section, before featured sections
  comparisonAfterSection?: number; // Index of featured section after which to show comparison table (0-based)
  skipAboutSection?: boolean; // Skip the auto-generated about section
  capabilityCards?: CapabilityCard[]; // Three-card layout for structural capabilities
  capabilitiesTitle?: string; // Title for capabilities section
  capabilitiesSubtitle?: string; // Subtitle for capabilities section
  spotlightCards?: SpotlightCard[]; // Three-card layout with images for key services
  linkedSpotlightBlock?: LinkedSpotlightBlock; // Spotlight-style cards that link to other services
  relatedServicesBlock?: {
    title: string;
    cards: RelatedServiceCard[];
  };
  processAfterSpotlight?: boolean; // Show process after spotlight section instead of default location
  benefits: string[];
  comparison?: Comparison;
  faqs?: FAQ[];
  faqTitle?: string; // Custom title for FAQ section (defaults to "Frequently Asked Questions")
  process?: {
    step: string;
    description: string;
  }[];
  ctaBlock?: CtaBlock;
  relatedServices: string[];
  category: 'demolition' | 'make-good' | 'trade' | 'cleaning' | 'structural';
  published?: boolean;
}

export const services: Service[] = [
  {
    name: "Pallet Racking Removal",
    slug: "pallet-racking-removal",
    title: "Pallet Racking Removal Melbourne",
    metaTitle: "Pallet Racking Removal Melbourne | Slab Restoration",
    description: "Whether you are reconfiguring your warehouse, relocating, or preparing for handover, the removal of pallet racking must be done correctly. We don't just dismantle; we restore the concrete slab to a safe, clean condition. This means every anchor is core-drilled and removed, the void is filled with high-strength epoxy resin, and the repair is ground flush to restore your warehouse floor.",
    metaDescription: "Pallet racking removal Melbourne. Core drill and fill dynabolt removal. Concrete slab restoration. All racking types including mezzanines. Licensed operators. Free quotes.",
    heroText: "Whether you are reconfiguring your warehouse, relocating, or preparing for handover, the removal of pallet racking must be done correctly. We don't just dismantle; we restore the concrete slab to a safe, clean condition. This means every anchor is core-drilled and removed, the void is filled with high-strength epoxy resin, and the repair is ground flush to restore your warehouse floor.",
    ogImage: "/og/pallet-racking-removal.jpg",
    heroImage: palletRackingRemovalHeroImage,
    heroImageAlt: "Partially dismantled orange and blue pallet racking in a large, empty Melbourne warehouse during a strip out",
    heroImageTitle: "Makegood Melbourne - Pallet Racking Removal Service",
    secondaryImage: palletRackingLogisticsImage,
    secondaryImageAlt: "Forklift loading dismantled pallet racking components onto a truck in a Melbourne warehouse",
    trustBadges: [
      "Licensed & Insured",
      "Fixed-Price Quotes",
      "Slab Restoration Included",
      "Full Documentation"
    ],
    skipAboutSection: true,
    capabilityCards: [
      {
        icon: "brick",
        title: "SYSTEM DISMANTLING",
        items: [
          "All types of racking systems",
          "Mezzanine floor removal",
          "Removal of bollards and guard rails",
          "Safe, methodical process"
        ]
      },
      {
        icon: "structure",
        title: "CONCRETE SLAB RESTORATION",
        items: [
          "Core-drilling of all anchors",
          "High-strength epoxy filling",
          "Surface grinding for a flush finish",
          "Crack and chip repairs"
        ]
      },
      {
        icon: "waterproof",
        title: "LOGISTICS & RECOVERY",
        items: [
          "Stacking, banding and transport",
          "Full site clean-up and waste disposal",
          "Purchase offers for used racking",
          "Detailed project documentation"
        ]
      }
    ],
    capabilitiesTitle: "PALLET RACKING REMOVAL CAPABILITIES",
    capabilitiesSubtitle: "Our service covers the complete lifecycle of a pallet racking removal project.",
    featuredSections: [
      {
        title: "MORE THAN JUST DISMANTLING",
        description: "The removal of industrial racking involves significant logistical and safety challenges. An unprofessional approach can lead to more than just a poor-quality floor repair; it can result in safety incidents, damage to the building's structure or loading docks, and failure to meet the strict deadlines of a lease agreement.\n\nWe manage all site logistics and work to your project's deadlines. Our end-to-end service includes the complete removal of the racking from your site—be it for disposal, resale, or relocation. We then restore the concrete slab to its original condition for handover.",
        image: palletRackingLogisticsImage,
        imageAlt: "Forklift loading dismantled pallet racking components onto a truck in a Melbourne warehouse",
        imageTitle: "Pallet Racking Logistics and Transport"
      }
    ],
    linkedSpotlightBlock: {
      title: "A COMPLETE STRIP OUT",
      titleHighlight: "SERVICE",
      subtitle: "Our pallet racking removal is part of a comprehensive strip out solution. We coordinate all related works to deliver a seamless end-of-lease project.",
      cards: [
        {
          slug: "back-to-base-works",
          name: "Back to Base Works",
          description: "We manage the full 'back to base' process, including the disconnection and make-safe of all essential building services."
        },
        {
          slug: "demolition-works",
          name: "Demolition Works",
          description: "Our licensed teams perform precise internal demolition, safely removing non-structural partitions, ceilings, flooring and fixtures."
        },
        {
          slug: "waste-management",
          name: "Waste Management",
          description: "We provide end-to-end waste management, including the certified handling and disposal of all general and hazardous materials.",
          image: wasteManagementBinImage,
          imageAlt: "Green waste management bin for waste disposal"
        }
      ]
    },
    benefits: [
      "All types of racking systems",
      "Mezzanine floor removal",
      "Removal of bollards and guard rails",
      "Core-drilling of all anchors",
      "High-strength epoxy filling",
      "Surface grinding for a flush finish",
      "Stacking, banding and transport",
      "Full site clean-up and waste disposal"
    ],
    faqs: [
      {
        question: "Can you buy our used pallet racking?",
        answer: "Yes, in many cases. If your racking is a standard size and in good, reusable condition, we can offer a competitive purchase price. This can be used as a credit to significantly reduce or even eliminate the cost of the removal works."
      },
      {
        question: "What types of racking do you remove?",
        answer: "We are equipped to dismantle and remove all common types of industrial and warehouse racking, including selective, double-deep, drive-in, push-back, pallet-flow, cantilever, and mezzanine floor systems."
      },
      {
        question: "Do you also repair the concrete floor after removal?",
        answer: "Yes. Our service includes the complete removal of all anchors. We then fill the holes with high-strength epoxy resin and grind the repairs flush to leave a clean, safe and compliant floor."
      },
      {
        question: "How long does it take to remove pallet racking?",
        answer: "The timeline depends on the quantity and type of racking. A small warehouse can often be cleared in a single day, while a large-scale distribution centre may take a week or more. We provide a clear and reliable timeline for every project."
      }
    ],
    faqTitle: "PALLET RACKING REMOVAL FAQs",
    ctaBlock: {
      title: "CLEAR YOUR WAREHOUSE",
      titleHighlight: "WITH CONFIDENCE",
      subtitle: "We do Make Goods all day, every day.",
      text: "Whether you're moving, upgrading, or handing back the keys, our professional racking removal service ensures the process is safe, efficient, and compliant. Contact us today for a site assessment and a no-obligation quote, including a potential valuation for your used racking."
    },
    relatedServices: ["back-to-base-works", "demolition-works", "waste-management"],
    category: "demolition",
    published: true
  },
  {
    name: "Epoxy Flooring",
    slug: "epoxy-flooring",
    title: "Epoxy Flooring Melbourne",
    metaTitle: "Epoxy Flooring Melbourne | Industrial Specialists",
    description: "Tired concrete floors dragging down your warehouse? Epoxy transforms worn, stained slabs into durable, professional surfaces that impress clients and stand up to forklifts, chemicals and heavy traffic. New installs or restoration—we handle it.",
    metaDescription: "Industrial epoxy flooring Melbourne. Warehouse floor coatings, concrete repair and resurfacing. Chemical-resistant, anti-slip finishes. Licensed applicators. Free quotes.",
    heroText: "Your warehouse floor takes a beating. Epoxy coating protects the concrete, hides the damage and gives you a surface that's easy to clean, safe to work on and built to last. For floors with cracks, bolt holes or joint damage, we handle [floor repairs](/services/warehouse-floor-restoration) before coating. Whether you're refreshing for a new tenant or upgrading your own facility—we deliver.",
    ogImage: "/og/epoxy-flooring.jpg",
    heroImage: epoxySpreadingApplicationImage,
    heroImageAlt: "Worker spreading epoxy floor coating in industrial warehouse Melbourne",
    benefits: [
      "Chemical and oil resistant finishes",
      "Anti-slip coatings for safety compliance",
      "Cracks and damage repaired first",
      "Fast-cure options to minimise downtime",
      "Range of colours including safety zones",
      "20+ year lifespan with proper care"
    ],
    secondaryImage: epoxyFlooringWarehouseImage,
    secondaryImageAlt: "Polished epoxy floor coating in large industrial warehouse with reflective finish Melbourne",
    faqs: [
      {
        question: "How long does epoxy flooring take to install?",
        answer: "Timing depends on floor size and condition. A standard warehouse (500-1000m²) typically takes 3-5 days including surface preparation, repairs, primer, epoxy coats and curing time. We use fast-cure systems where possible to minimise downtime and can stage work to maintain partial access during installation."
      },
      {
        question: "How long does epoxy flooring last?",
        answer: "Industrial epoxy flooring typically lasts 15-20+ years with proper care. Lifespan depends on traffic levels, chemical exposure and maintenance. High-traffic forklift areas may need touch-ups after 10-15 years. We use commercial-grade systems designed for warehouse and factory environments."
      },
      {
        question: "Can you apply epoxy over damaged concrete?",
        answer: "Yes, but the damage must be repaired first. Cracks, dynabolt holes, spalling and joint failures need proper treatment before coating—otherwise they'll telegraph through the epoxy and cause premature failure. We handle all floor repairs as part of our epoxy flooring service."
      },
      {
        question: "What's the difference between epoxy and polyurethane floor coatings?",
        answer: "Epoxy provides excellent adhesion, chemical resistance and durability—ideal for warehouses and factories. Polyurethane offers better UV stability and flexibility, making it suitable for outdoor areas or floors with movement. We often use epoxy as a base coat with polyurethane topcoat for maximum performance."
      },
      {
        question: "Is epoxy flooring slip-resistant?",
        answer: "Standard epoxy has a smooth, glossy finish. For safety compliance, we add anti-slip aggregates to create textured finishes rated to Australian standards. We can also incorporate coloured safety zones, walkways and forklift lanes into your floor design."
      },
      {
        question: "How much does epoxy flooring cost in Melbourne?",
        answer: "Costs vary based on floor condition, size and system specification. Basic single-coat systems start lower, while high-build chemical-resistant systems with anti-slip finishes cost more. We provide free, itemised quotes after inspecting your floor so you know exactly what to expect."
      },
      {
        question: "Can the warehouse stay operational during epoxy installation?",
        answer: "In many cases, yes. We can section off areas and work progressively to maintain access to operational zones. Fast-cure systems allow foot traffic within 12-24 hours and forklift traffic within 48-72 hours. We'll plan the work to minimise disruption to your operations."
      },
      {
        question: "What preparation is needed before epoxy flooring?",
        answer: "Proper preparation is critical for adhesion. We diamond grind the surface to create a profile, repair any cracks or damage, fill dynabolt holes, and ensure the concrete is clean and dry. Poor preparation is the main cause of epoxy failure—we don't cut corners."
      }
    ],
    ctaBlock: {
      title: "Let Us Handle Your Epoxy Flooring",
      subtitle: "We do makegoods all day, every day.",
      text: "From small workshops to large distribution centres, we've coated floors across Melbourne's industrial properties. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["warehouse-floor-restoration", "line-marking"],
    category: "trade",
    published: true
  },
  {
    name: "Make Good Painting",
    slug: "make-good-painting",
    title: "Make Good Painting Melbourne",
    metaTitle: "Make Good Painting Melbourne | End of Lease Painting Services",
    description: "Professional make good painting for offices, warehouses and industrial spaces across Melbourne. Colour-matched finishes, proper surface preparation and quality application—delivered on time for your handover deadline.",
    metaDescription: "Make good painting Melbourne. End of lease painting for commercial and industrial properties. Colour-matched, owner-approved finishes. Bond protection guaranteed. Free quotes.",
    heroText: "We deliver professional painting for [offices](/industries/commercial), [warehouses](/industries/industrial) and commercial spaces—colour-matched to original specifications, properly prepared and expertly applied. From [wall repairs](/services/patching-plastering) through to final coat, our comprehensive make good services handle all of your end of lease obligations.",
    ogImage: "/og/make-good-painting.jpg",
    heroImage: commercialPaintingHeroImage,
    heroImageAlt: "Large commercial warehouse interior with freshly painted white walls and steel structure during end of lease make good works in Melbourne",
    secondaryImage: commercialPaintingScopeImage,
    secondaryImageAlt: "Commercial interior with plastered walls and ceiling surface preparation ready for professional painting in Melbourne",
    scopeTitle: "End of Lease Painting Scope",
    trustBadges: ["Licensed & Insured", "Competitive Pricing", "Fixed-Price Quotes"],
    benefits: [
      "Accurate colour matching to original specifications",
      "Full surface preparation—patching, sanding, priming",
      "Internal walls, ceilings and trim",
      "External painting solutions",
      "After-hours and weekend work available"
    ],
    featuredSections: [
      {
        title: "Internal Painting — Walls, Ceilings and Trim",
        description: "We prepare surfaces properly, match colours accurately and apply professional finishes across your entire tenancy. [Offices](/industries/commercial), [warehouses](/industries/industrial), showrooms, retail—whatever the space, we deliver results.\n\nThe outcome is a clean, consistent finish suited to [commercial](/industries/commercial) and [industrial](/industries/industrial) environments. Across [offices](/industries/commercial), [warehouses](/industries/industrial), showrooms and retail spaces, attention to detail and uniform presentation ensure the space is ready for inspection, handover or reoccupation.",
        image: "/src/assets/services/industrial-warehouse-interior-wall-painting-boom-lift-melbourne.jpeg",
        imageAlt: "Industrial warehouse interior wall painting using boom lift access equipment for high-reach surfaces in Melbourne",
        imageLeft: true
      },
      {
        title: "External Painting — Building Facades and External Surfaces",
        description: "We prepare external surfaces properly, match colours accurately and apply durable finishes suited to building facades and exposed external areas. Works are completed across [commercial](/industries/commercial) and [industrial](/industries/industrial) properties, with consideration given to access, weather conditions and surrounding site activity.\n\nThe outcome is a consistent, professional external presentation that aligns with lease requirements and overall building standards. Attention to detail and uniform finishes ensure the property is ready for inspection, handover or ongoing use.",
        image: "/src/assets/services/commercial-building-facade-painting-cherry-picker-melbourne.jpeg",
        imageAlt: "Commercial building facade painting using cherry picker access equipment for exterior panel surfaces in Melbourne",
        imageLeft: false
      }
    ],
    processAfterScope: true, // Show process right after scope section
    comparisonAfterSection: 0, // Insert comparison after Internal Painting section
    comparison: {
      title: "Make Good Painting vs General Commercial Painting",
      specialistTitle: "Make Good Painting Specialist",
      regularTitle: "General Commercial Painter",
      items: [
        { feature: "Lease compliance focus", specialist: "Primary objective—we understand make good obligations", regular: "Secondary concern—focused on aesthetics only" },
        { feature: "Colour matching", specialist: "Precise matching to original specifications for owner approval", regular: "Close enough—may not match exactly" },
        { feature: "Surface preparation", specialist: "Repair all holes, patches and damage before painting", regular: "May paint over issues without proper prep" },
        { feature: "Owner relationships", specialist: "Experience negotiating with owners and property managers", regular: "Limited commercial lease experience" },
        { feature: "Scope understanding", specialist: "Know what's required vs optional in make good clauses", regular: "May over-scope or miss requirements" },
        { feature: "Coordination", specialist: "Integrate with other make good trades seamlessly", regular: "Work in isolation" }
      ]
    },
    faqs: [
      {
        question: "Is internal painting always required in a make good?",
        answer: "Almost always, yes. Standard commercial leases require tenants to return all painted surfaces within their tenancy to original condition. This includes walls, ceilings and any painted trim. Even if the paint looks 'acceptable' to you, owners typically require a full repaint to ensure consistency for the next tenant. We recommend getting written confirmation of requirements before handover."
      },
      {
        question: "What about external painting—is that my responsibility?",
        answer: "Rarely. External facades, building exteriors and common areas are typically the owner's responsibility to maintain. However, there are exceptions—standalone tenancies, spaces with direct external access, or situations where tenants have modified external surfaces may require restoration. Check your lease and any variation agreements carefully, or we can help you interpret what's required."
      },
      {
        question: "How do you match the original paint colours?",
        answer: "We use spectrophotometer colour matching technology to analyse existing surfaces and create precise colour formulas. For older spaces, we may need to sample from an inconspicuous area where the original colour is preserved. We can also work from original specifications if they're available from the owner or property manager."
      },
      {
        question: "Do I need to paint if I only made minor modifications?",
        answer: "Usually, yes—if your modifications left any marks, holes or patches on painted surfaces. Owners expect a consistent finish, not a patchwork of touch-ups. Even well-matched touch-ups often show differently under certain lighting conditions. A full repaint is usually the only way to guarantee acceptance."
      },
      {
        question: "Can you work outside business hours?",
        answer: "Yes. We regularly complete painting work after hours and on weekends—particularly important when adjacent tenancies are occupied and paint odours or access would cause disruption. We use low-odour, fast-drying paints where possible to minimise impact."
      },
      {
        question: "How long does commercial painting take?",
        answer: "Timing depends on the size of the space, surface condition and access requirements. A typical office tenancy (200-500m²) takes 2-4 days including preparation. Larger warehouses or spaces with high ceilings may take longer. We provide detailed timelines and coordinate with other make good trades to minimise your overall project duration."
      },
      {
        question: "What surfaces do you paint?",
        answer: "All internal painted surfaces within your tenancy—walls (plasterboard, masonry, timber), ceilings (plasterboard, fibrous plaster), columns, beams, door frames, skirting boards and any other painted trim. For warehouses, this includes painted concrete block walls and steel structural elements if they were painted at lease commencement."
      },
      {
        question: "Do you handle patching and repairs before painting?",
        answer: "Yes. Painting over holes, cracks or damaged surfaces is a waste of time and money—the defects show through. We fill all holes from removed fixtures, repair any plaster damage, sand patches smooth and apply appropriate primers before the finish coats. This is included in our make good painting service. For more extensive wall damage, see our [patching and plastering](/services/patching-plastering) service."
      },
      {
        question: "How much does end of lease painting cost in Melbourne?",
        answer: "Costs vary based on floor area, ceiling height, surface condition and preparation requirements. Office spaces typically cost less per square metre than warehouses due to accessibility. We provide free, detailed quotes after inspecting your space—itemised so you know exactly what you're paying for."
      },
      {
        question: "What is a make good clause?",
        answer: "A make good clause is a standard provision in commercial leases requiring tenants to restore the premises to its original condition at lease end. This typically includes removing fitouts, repairing damage, restoring floors, and repainting all surfaces within the tenancy. The clause protects the owner's investment and ensures the space is ready for the next tenant."
      },
      {
        question: "Who pays for end of lease painting?",
        answer: "The tenant pays for end of lease painting as part of their make good obligations under the lease. This is a contractual requirement, not optional maintenance. Some tenants try to negotiate reduced scope with owners, but painting is rarely excluded from make good requirements. We can help you understand exactly what's required before you commit."
      },
      {
        question: "Can I do my own end of lease painting?",
        answer: "Technically yes, but owner rejection is common with DIY work. Commercial leases typically require 'professional' restoration, and owners know the difference. Poor preparation, colour mismatches, roller marks and drips are obvious to experienced property managers. Failed inspections cost more to rectify than doing it right the first time."
      }
    ],
    process: [
      { step: "Scope Review", description: "We review your lease obligations and inspect the space to confirm exactly what painting is required for make good compliance." },
      { step: "Colour Matching", description: "We match original paint colours using spectrophotometer technology and sample testing to ensure accurate restoration." },
      { step: "Surface Preparation", description: "All holes are filled, patches repaired, surfaces sanded and cleaned. Primers applied where needed for proper adhesion." },
      { step: "Professional Application", description: "Quality paints applied by experienced commercial painters—spray, roller or brush depending on surface and finish requirements." }
    ],
    ctaBlock: {
      title: "Let Us Handle Your Painting",
      subtitle: "We do makegoods all day, every day.",
      text: "Our painters have delivered inspection-ready finishes across Melbourne's commercial and industrial properties for years. We understand what owners expect and deliver work that gets accepted first time. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["epoxy-flooring", "line-marking", "ceiling-tile-replacement"],
    category: "make-good",
    published: true
  },
  {
    name: "Ceiling Tile Replacement",
    slug: "ceiling-tile-replacement",
    title: "Ceiling Tile Replacement Melbourne",
    metaTitle: "Ceiling Tile Replacement Melbourne | Lease Compliance",
    description: "From standard suspended grids to timber acoustic panels, we replace and restore commercial ceilings to meet your lease obligations. Post-demolition repairs where partitions were removed, discontinued tile matching when originals are no longer made and full grid restoration when tenants have stripped them out for extra height. LED repositioning, aircon adjustments and fire services coordination when required.",
    metaDescription: "Ceiling tile replacement Melbourne. Acoustic panels, suspended grids, LED rebalancing and grid reinstallation. End of lease compliance for commercial offices. Free quotes.",
    heroText: "Whether your space has standard white tiles or premium timber acoustic panels, we deliver complete ceiling restoration. One contractor for every ceiling type—tiles matched, LEDs repositioned and aircon rebalanced for landlord sign-off.",
    ogImage: "/og/ceiling-tile-replacement.jpg",
    heroImage: ceilingTileReplacementHeroImage,
    heroImageAlt: "Commercial office ceiling tile replacement showing timber acoustic panels and white suspended grid with LED lighting in Melbourne",
    secondaryImage: suspendedCeilingGridImage,
    secondaryImageAlt: "Suspended ceiling grid with white acoustic tiles and rectangular LED panel lights in commercial office Melbourne",
    benefits: [
      "Meet your make-good ceiling requirements",
      "Standard tiles and acoustic panels",
      "LED panel and aircon rebalancing to suit",
      "Ceiling grid repairs and reinstallation",
      "Post-partition removal repairs",
      "Discontinued tile matching and alternatives",
      "Full grid restoration after tenant removal",
      "Fire services coordination when required"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Ceiling Restoration",
      subtitle: "We do makegoods all day, every day.",
      text: "From single rooms to multi-floor offices, we've restored ceilings across Melbourne's commercial properties. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["make-good-painting", "handover-cleaning"],
    category: "make-good",
    published: true
  },
  {
    name: "Line Marking",
    slug: "line-marking",
    title: "Line Marking Melbourne",
    metaTitle: "Line Marking Melbourne | Warehouse & Car Park",
    description: "Lease ending and your warehouse or car park lines don't match the original layout? We restore eroded markings, remove tenant-specific delineations and return floors to the condition your landlord expects. Full line marking restoration for make-good compliance.",
    metaDescription: "Line marking restoration Melbourne. Warehouse and car park line reinstatement for end of lease compliance. Remove tenant markings, restore originals. Free quotes.",
    heroText: "Years of forklift traffic have worn your lines away. Or maybe you added bays and zones to suit your operation—now they need to go. We restore original markings, remove tenant delineations and hand back floors that meet your make-good obligations.",
    ogImage: "/og/line-marking.jpg",
    heroImage: lineMarkingWornFloorImage,
    heroImageAlt: "Worn and faded yellow line markings on warehouse concrete floor requiring restoration in Melbourne",
    secondaryImage: lineMarkingRestoredImage,
    secondaryImageAlt: "Restored yellow warehouse floor line markings with pedestrian walkways and safety zones in Melbourne",
    benefits: [
      "Restore worn and faded line markings",
      "Remove tenant-specific delineations",
      "Reinstate original warehouse layouts",
      "Car park line restoration",
      "Heavy-duty paints and thermoplastics",
      "Fast-dry formulas for quick handover"
    ],
    featuredSection: {
      title: "Car Park Line Marking Restoration",
      description: "Years of traffic have taken their toll. We bring car park markings back to compliance standard, restoring faded bays, worn directional arrows and eroded safety zones.",
      image: carParkLineMarkingImage,
      imageAlt: "Aerial view of commercial car park with restored white bay markings and yellow directional lines in Melbourne"
    },
    ctaBlock: {
      title: "Let Us Handle Your Line Marking",
      subtitle: "We do makegoods all day, every day.",
      text: "We've restored line markings in warehouses and car parks across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["epoxy-flooring", "warehouse-floor-restoration"],
    category: "trade",
    published: true
  },
  {
    name: "Handover Cleaning",
    slug: "handover-cleaning",
    title: "Handover Cleaning Melbourne",
    metaTitle: "Handover Cleaning Melbourne | Lease End Specialists",
    description: "Lease ending? We handle the heavy-duty cleaning regular cleaners won't touch. Industrial floor scrubbing, high-pressure washing and chemical treatment—everything your landlord expects at handover. We work at scale: 500sqm warehouse floors, multi-level office strip-outs, loading docks caked in years of grime. This isn't maintenance cleaning—it's handover-ready restoration.",
    metaDescription: "Handover cleaning Melbourne. Lease end floor scrubbing, high-pressure washing, oil and tyre mark removal. Pass your final inspection. Free quotes.",
    heroText: "Heavy-duty cleaning for lease end and make good handovers. We tackle the jobs regular cleaners can't—warehouse floors, post-strip-out sites and final inspections that need to pass first time.",
    ogImage: "/og/commercial.jpg",
    heroImage: commercialFloorSweepingImage,
    heroImageAlt: "Worker sweeping concrete floor with industrial broom during make good cleaning Melbourne",
    secondaryImage: highPressureWarehouseCleaningImage,
    secondaryImageAlt: "High-pressure warehouse cleaning Melbourne - industrial cleaner pressure washing warehouse floor for lease end",
    trustBadges: [
      "Industrial-Grade Equipment",
      "After-Hours Capability",
      "Complete Waste Removal Solutions"
    ],
    featuredSection: {
      title: "Industrial Floor Cleaning",
      description: "Years of grime, oil stains and tyre marks don't stand a chance. Our ride-on scrubbers and high-pressure systems restore warehouse floors to handover condition—ready for your landlord's final inspection. We handle the full scope: concrete polishing, chemical degreasing, line marking restoration and final detailing.",
      image: industrialFloorScrubberImage,
      imageAlt: "Industrial ride-on floor scrubber machine cleaning polished concrete warehouse floor Melbourne"
    },
    benefits: [
      "Industrial floor scrubbing equipment",
      "Ride-on scrubbers for large warehouse floors",
      "High-pressure cleaning for concrete and loading docks",
      "Chemical treatment for oil stains and tyre marks",
      "Waste removal and skip bin coordination",
      "Post-strip-out and post-construction clean-ups",
      "Final inspection preparation",
      "Window and facade cleaning",
      "Graffiti removal"
    ],
    comparison: {
      title: "Why Choose Make Good Melbourne?",
      specialistTitle: "Make Good Melbourne",
      regularTitle: "Commercial Cleaners",
      items: [
        { feature: "Equipment", specialist: "Ride-on scrubbers, industrial pressure washers, commercial window cleaning, industrial steam cleaners, flood dryers", regular: "Standard cleaning equipment and steam cleaners" },
        { feature: "Scale", specialist: "500sqm+ warehouse floors, multi-level buildings", regular: "Office and retail spaces" },
        { feature: "Stain removal", specialist: "Oil, tyre marks, chemical degreasing, industrial stains", regular: "General surface cleaning and spot treatment" },
        { feature: "Waste handling", specialist: "Skip bins, hazardous waste (asbestos), scrap metal recycling, large item disposal, furniture purchase options", regular: "Standard waste removal and bagged disposal" },
        { feature: "Timing", specialist: "Flexible scheduling including after-hours and weekends", regular: "Typically after-hours to avoid business disruption" },
        { feature: "Focus", specialist: "Intensive restoration for lease handover", regular: "Ongoing maintenance and regular upkeep" }
      ]
    },
    faqs: [
      {
        question: "What's the difference between make good cleaning and regular commercial cleaning?",
        answer: "Make good cleaning is intensive restoration for lease handover—not ongoing maintenance. We use industrial-grade equipment like ride-on floor scrubbers, high-pressure washers, industrial steam cleaners and commercial window cleaning systems to tackle jobs regular cleaners can't: years of built-up grime, oil stains, tyre marks and post-strip-out restoration across 500sqm+ warehouse floors and multi-level buildings."
      },
      {
        question: "What equipment do you use?",
        answer: "We bring industrial-grade equipment that commercial cleaners don't have access to: ride-on floor scrubbers for large warehouse floors, industrial pressure washers for concrete and loading docks, commercial window cleaning systems, industrial steam cleaners for heavy-duty stain removal, and flood dryers for water damage situations. This equipment allows us to handle jobs at scale—500sqm+ warehouse floors, multi-level office strip-outs and loading docks caked in years of grime."
      },
      {
        question: "What types of waste can you handle?",
        answer: "We handle the full range: skip bin coordination, hazardous waste including asbestos removal (licensed), scrap metal recycling, and large item disposal. In some cases, we can also purchase office furniture—it's not common, but it's an option that can offset costs if you have quality items you no longer need."
      },
      {
        question: "How long does a make good clean take?",
        answer: "It depends on the size and condition of the property. A standard warehouse floor (500-1000sqm) typically takes 1-2 days. Multi-level buildings or heavily soiled sites may take longer. We'll provide a timeline after our initial site inspection."
      },
      {
        question: "Can you work after hours or on weekends?",
        answer: "Absolutely. We offer flexible scheduling including after-hours and weekends. Many of our clients need cleaning completed outside business hours to minimise disruption or meet tight lease deadlines."
      },
      {
        question: "Will this pass my landlord's final inspection?",
        answer: "That's exactly what we prepare for. Unlike maintenance cleaning, our focus is intensive restoration for lease handover. We understand landlord expectations and clean to handover standard—not just 'tidy'. If there are specific requirements in your lease, let us know and we'll address them."
      }
    ],
    ctaBlock: {
      title: "Let Us Handle Your Cleaning",
      subtitle: "We do makegoods all day, every day.",
      text: "From warehouse floors to office strip outs, we've prepared hundreds of Melbourne properties for final inspection. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["warehouse-floor-restoration", "end-of-lease-relocation"],
    category: "cleaning",
    published: true
  },
  {
    name: "End of Lease Relocation",
    slug: "end-of-lease-relocation",
    title: "End of Lease Relocation Melbourne",
    metaTitle: "End of Lease Relocation Melbourne | Equipment Transport",
    description: "Vacating your warehouse or factory? We handle the make-good AND transport your equipment to your new site. One contractor, one point of contact—no coordination headaches. Office relocations also available.",
    metaDescription: "End of lease relocation Melbourne. Industrial make-good plus racking, machinery and equipment transport to your new site. Office relocations also available. Free quotes.",
    heroText: "Vacating your warehouse, factory or office? We offer tailored logistical solutions from vacate to move-in. One comprehensive service that handles your make-good obligations and delivers your essential equipment to your new location—anywhere in Australia.",
    ogImage: "/og/end-of-lease-relocation.jpg",
    heroImage: warehouseRelocationImage,
    heroImageAlt: "Forklift loading dismantled pallet racking onto truck for end of lease warehouse relocation Melbourne",
    secondaryImage: flatbedTruckTransportImage,
    secondaryImageAlt: "Flatbed truck transporting pallet racking and industrial machinery with Melbourne city skyline in background",
    benefits: [
      "Complete make-good at vacating site",
      "Equipment transport to new location",
      "Single contractor for entire process",
      "Warehouses, factories and offices",
      "Optional install at new site",
      "Minimise downtime during transition",
      "No coordination between separate trades",
      "Smooth handover to landlord"
    ],
    process: [
      { step: "Site Assessment", description: "We inspect your current site to scope make-good works and plan the equipment transport." },
      { step: "Coordinated Timeline", description: "Plan aligned with your lease end date and new site availability." },
      { step: "Make Good + Load Out", description: "We restore your old site while carefully loading your equipment for transport." },
      { step: "Deliver and Handover", description: "Equipment delivered to new site, old premises handed back inspection-ready. Installation available if needed." }
    ],
    ctaBlock: {
      title: "Let Us Handle Your Relocation",
      subtitle: "We do makegoods all day, every day.",
      text: "We've managed end-to-end relocations across Melbourne and beyond—make good and transport in one seamless service. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["pallet-racking-removal", "handover-cleaning", "warehouse-floor-restoration"],
    category: "make-good",
    published: true
  },
  {
    name: "Structural Remediation",
    slug: "structural-remediation",
    title: "Structural Remediation Melbourne",
    metaTitle: "Structural Remediation Melbourne | Concrete & Steel",
    description: "The structural integrity of your building is non-negotiable. At Makegood Melbourne, we address the root causes of structural decay to restore strength, safety and long-term stability to your asset.\n\nOur specialists work with qualified engineers to deliver certified solutions for a comprehensive range of structural defects. From diagnosing concrete cancer and rectifying slab settlement to advanced concrete injection and carbon fibre strengthening, we have the expertise to manage complex projects that general builders can't. We handle the entire process, from initial assessment and engineering specifications through to project completion and final certification.",
    metaDescription: "Structural remediation Melbourne. Concrete cancer treatment, floor slab repairs, waterproofing and membrane systems. Engineered solutions for commercial properties.",
    heroText: "From concrete cancer and spalling to slab settlement and corrosion, structural defects compromise the safety and longevity of your asset. We deliver engineered solutions that address these issues at their source, restoring foundational strength and ensuring your building is safe, compliant and secure.",
    ogImage: "/og/structural-remediation.jpg",
    heroImage: structuralRemediationHeroImage,
    heroImageAlt: "Close-up of exposed and rusted rebar in a damaged concrete wall, showing a severe case of concrete cancer requiring structural remediation",
    heroImageTitle: "Makegood Melbourne - Structural Concrete Cancer Repair",
    secondaryImage: retentionWallConstructionImage,
    secondaryImageAlt: "Large-scale retention wall formwork with steel reinforcement and crane demonstrating structural construction capabilities Melbourne",
    trustBadges: [
      "Licensed & Insured",
      "Engineered Solutions",
      "Fixed-Price Quotes",
      "Full Documentation"
    ],
    skipAboutSection: true,
    capabilityCards: [
      {
        icon: "brick",
        title: "Concrete & Masonry Repair",
        items: [
          "Concrete Cancer & Spalling Repair",
          "Crack Injection & Sealing",
          "Brickwork & Lintel Replacement",
          "Facade & Render Remediation"
        ]
      },
      {
        icon: "structure",
        title: "Strengthening & Stabilisation",
        items: [
          "Carbon Fibre Strengthening (FRP)",
          "Slab Jacking & Void Filling",
          "Foundation Underpinning",
          "Post-Tensioned Slab Repairs"
        ]
      },
      {
        icon: "waterproof",
        title: "Waterproofing & Corrosion",
        items: [
          "Structural Waterproofing Systems",
          "Corrosion Inhibitor Application",
          "Cathodic Protection Systems",
          "Steel Framework Retrofitting"
        ]
      }
    ],
    capabilitiesTitle: "Structural Capabilities",
    capabilitiesSubtitle: "Our expertise covers all critical areas of structural remediation.",
    featuredSections: [
      {
        title: "RESTORING STRENGTH AND STABILITY",
        description: "The structural integrity of your building is non-negotiable. At Makegood Melbourne, we address the root causes of structural decay to restore strength, safety and long-term stability to your asset.\n\nOur specialists work with qualified engineers to deliver certified solutions for a comprehensive range of structural defects. From diagnosing concrete cancer and rectifying slab settlement to advanced concrete injection and carbon fibre strengthening, we have the expertise to manage complex projects that general builders can't. We handle the entire process, from initial assessment and engineering specifications through to project completion and final certification.",
        image: shotcreteApplicationImage,
        imageAlt: "A skilled worker applying shotcrete to a concrete wall, a key process in large-scale structural repair and remediation",
        imageTitle: "Makegood Melbourne - Shotcrete and Concrete Repair Specialists"
      }
    ],
    spotlightCards: [
      {
        image: concreteCancerImage,
        imageAlt: "Concrete cancer with exposed corroded rebar and spalling concrete requiring remediation Melbourne",
        title: "Concrete Cancer Rectification",
        description: "We don't just patch concrete cancer; we cure it. Our process involves removing all compromised material, treating the corroded steel reinforcement with anti-corrosion agents, and reinstating the surface with specialised, high-strength repair mortars for a permanent, engineered solution."
      },
      {
        image: polyurethaneFoamInjectionImage,
        imageAlt: "Polyurethane foam injection for crack repair and slab stabilisation Melbourne",
        title: "Crack Injection & Slab Stabilisation",
        description: "Structural cracks and voids compromise safety and stability. We utilise advanced epoxy and polyurethane injection systems to structurally rebond cracked concrete, fill voids and re-level sunken slabs—a non-invasive approach that restores integrity and avoids costly replacement."
      },
      {
        image: waterproofingMembraneImage,
        imageAlt: "Structural waterproofing membrane application for commercial building protection Melbourne",
        title: "Waterproofing & Membrane Systems",
        description: "Water ingress is a primary cause of structural failure. We install high-performance waterproofing and membrane systems for critical areas like podiums, rooftops and retaining walls, protecting the structure from moisture damage and securing its long-term durability."
      }
    ],
    benefits: [
      "Concrete Cancer & Spalling Repair",
      "Crack Injection & Sealing",
      "Brickwork & Lintel Replacement",
      "Facade & Render Remediation",
      "Carbon Fibre Strengthening (FRP)",
      "Slab Jacking & Void Filling",
      "Foundation Underpinning",
      "Post-Tensioned Slab Repairs",
      "Structural Waterproofing Systems",
      "Corrosion Inhibitor Application",
      "Cathodic Protection Systems",
      "Steel Framework Retrofitting"
    ],
    process: [
      { step: "Assessment & Diagnosis", description: "Every project begins with a comprehensive site assessment to diagnose the underlying cause and extent of the structural issue. We work with engineers to perform diagnostic testing and develop a precise scope of works." },
      { step: "Engineered Proposal", description: "We provide a detailed, fixed-price proposal outlining the recommended repair methodology, all associated costs and a clear project timeline. We believe in full transparency, ensuring you can make an informed decision." },
      { step: "Remediation & Project Management", description: "Our experienced team executes the engineered solution with meticulous attention to detail. We manage the entire project, coordinating all trades and ensuring work is staged to minimise disruption while adhering to the highest safety standards." },
      { step: "Certification & Handover", description: "Upon completion, we provide a full handover package including all structural certifications, material warranties and maintenance documentation. This ensures you have a complete record of the work and full compliance sign-off." }
    ],
    processAfterSpotlight: true, // Show process after spotlight section
    ctaBlock: {
      title: "Let Us Handle Your Structural Remediation",
      subtitle: "We do makegoods all day, every day.",
      text: "From concrete cancer to retention walls, we've delivered structural solutions across Melbourne's commercial properties. Get in touch today for a free, no-obligation quote."
    },
    faqs: [
      {
        question: "How do I know if a crack in my concrete is a serious structural issue?",
        answer: "While minor surface cracks can be cosmetic, signs of a serious structural issue include cracks that are wider than a credit card, are continuing to grow, are leaking water, or have one side that is offset from the other. If you notice any of these, we strongly recommend a professional assessment to diagnose the cause and prevent further damage."
      },
      {
        question: "What is the difference between concrete cancer and regular concrete damage?",
        answer: "Concrete cancer, or spalling, specifically refers to the process where the internal steel reinforcement begins to rust. This rust expands, cracking and pushing away the surrounding concrete. Unlike simple surface damage, it is a progressive failure that will only get worse until the corroded steel is treated and the concrete is properly repaired with an engineered solution."
      },
      {
        question: "Is it possible to repair foundations without a complete rebuild?",
        answer: "Yes, absolutely. Modern techniques like foundation underpinning, slab jacking and the use of advanced grouts allow us to stabilise and re-level foundations without requiring a complete demolition and rebuild. These non-invasive methods are highly effective, save significant time and money, and are a core part of our structural remediation services."
      },
      {
        question: "What is carbon fibre strengthening (FRP) and when is it used?",
        answer: "Carbon Fibre Strengthening, or Fibre Reinforced Polymer (FRP), is a cutting-edge technique used to increase the load-bearing capacity of structural elements. We apply ultra-strong, lightweight carbon fibre fabric to beams, columns or slabs to add significant strength. It's an ideal solution for buildings undergoing a change of use, for correcting design flaws, or for reinforcing structures damaged by corrosion or stress."
      },
      {
        question: "How do you ensure the structural repairs are certified and compliant?",
        answer: "We ensure compliance at every step. We work directly with independent structural engineers who design and specify the repair methodology. During the project, we follow these specifications precisely. Upon completion, the engineer conducts a final inspection and provides a structural certification (e.g. a Form 16 in some states), giving you documented proof that the work meets all Australian Standards and is fit for purpose."
      }
    ],
    faqTitle: "STRUCTURAL REMEDIATION FAQs",
    relatedServices: ["warehouse-floor-restoration", "waterproofing", "cladding-glazing"],
    category: "structural",
    published: true
  },
  {
    name: "Cladding & Glazing",
    slug: "cladding-glazing",
    title: "Cladding & Glazing Remediation Melbourne",
    metaTitle: "Cladding & Glazing Remediation Melbourne | Compliance",
    description: "Professional cladding and glazing remediation services across Melbourne. From ACP replacement to fire-rated compliance, we deliver end-to-end facade solutions.",
    metaDescription: "Cladding and glazing remediation Melbourne. ACP replacement, fire rating compliance, glazing upgrades. Licensed contractors, Australian Standards compliant. Free quotes.",
    heroText: "Bring your building up to compliance with our specialist cladding and glazing remediation services. We deliver end-to-end solutions that meet NCC requirements and relevant Australian Standards.",
    ogImage: "/og/cladding-glazing.jpg",
    heroImage: claddingRemediationImage,
    heroImageAlt: "Commercial building cladding remediation work in progress with facade panels being replaced Melbourne",
    benefits: [
      "ACP cladding replacement",
      "NCC and fire rating compliance",
      "Glazing upgrades and remediation",
      "End-to-end D&C delivery",
      "Structural engineer coordination",
      "VBA and council liaison"
    ],
    process: [
      { step: "Cladding Compliance and Performance", description: "With ACP cladding now banned, demand for compliant cladding is surging. Our proven expertise delivers end-to-end D&C remediation, ensuring NCC compliance and building performance." },
      { step: "Glazing Compliance and Performance", description: "Many buildings contain non-compliant, underperforming glazing. Our deep experience delivers remediation projects that ensure compliance and enhance thermal and acoustic performance." },
      { step: "Fire Rating Compliance", description: "Comprehensive assessment, removal and replacement of non-compliant cladding systems with fire-rated materials tested to AS 1530 and AS 5113, meeting NCC requirements for external wall fire spread." },
      { step: "Completion and Sign-off", description: "Final inspection and certification documentation for the VBA, councils and building managers." }
    ],
    secondaryImage: glazingFacadeInstallationImage,
    secondaryImageAlt: "Professional glazing facade installation on commercial high-rise building with workers in safety harnesses Melbourne",
    ctaBlock: {
      title: "Let Us Handle Your Cladding Remediation",
      subtitle: "We do makegoods all day, every day.",
      text: "We've delivered cladding and glazing compliance projects across Melbourne's commercial buildings. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["structural-remediation", "waterproofing", "polycarbonate-roofing-skylights"],
    category: "structural",
    published: true
  },
  {
    name: "Waterproofing",
    slug: "waterproofing",
    title: "Waterproofing Melbourne",
    metaTitle: "Waterproofing Melbourne | Commercial & Industrial Specialists",
    description: "Failed waterproofing causes costly damage to buildings—from balcony leaks penetrating into units below to roof failures flooding commercial spaces. We deliver professional waterproofing solutions for balconies, roofs, wet areas and podiums using quality membrane systems built to last.",
    metaDescription: "Commercial waterproofing Melbourne. Balcony membranes, roof waterproofing, wet area sealing and podium deck systems. Licensed applicators, warranty included. Free quotes.",
    heroText: "Water finds every weakness. Failed balcony membranes leak into apartments below. Deteriorated roof coatings let moisture into ceiling cavities. We apply proven membrane systems that protect your building for decades—not just pass the next inspection.",
    ogImage: "/og/waterproofing.jpg",
    heroImage: rooftopWaterproofingImage,
    heroImageAlt: "Worker applying waterproofing membrane to commercial rooftop in Melbourne",
    secondaryImage: waterproofingMembraneImage,
    secondaryImageAlt: "Close-up of waterproofing membrane application on commercial building surface in Melbourne",
    benefits: [
      "Balcony and terrace membrane systems",
      "Flat roof and podium waterproofing",
      "Wet area sealing for bathrooms and kitchens",
      "Concrete crack injection and sealing",
      "Box gutter and parapet waterproofing",
      "Long-term manufacturer warranties"
    ],
    process: [
      {
        step: "Inspection & Assessment",
        description: "We identify the source of water ingress and assess substrate condition to determine the right waterproofing system."
      },
      {
        step: "Surface Preparation",
        description: "Substrates are cleaned, repaired and primed to ensure proper membrane adhesion and long-term performance."
      },
      {
        step: "Membrane Application",
        description: "Quality membrane systems are applied by licensed applicators following manufacturer specifications."
      },
      {
        step: "Protection & Finishing",
        description: "Membranes are protected with appropriate coverings and finished to integrate with surrounding surfaces."
      }
    ],
    faqs: [
      {
        question: "How long does commercial waterproofing last?",
        answer: "Quality membrane systems typically last 15-25 years when properly applied and maintained. We use premium membranes from manufacturers like Tremco, Sika and Wolfin that come with long-term warranties. Lifespan depends on membrane type, UV exposure, foot traffic and maintenance."
      },
      {
        question: "What causes balcony waterproofing to fail?",
        answer: "Common causes include poor surface preparation, incorrect membrane selection, inadequate drainage falls, thermal movement cracking the membrane, and wear from foot traffic. Age and UV degradation also contribute. We identify the failure mode before recommending solutions."
      },
      {
        question: "Can you waterproof over existing membranes?",
        answer: "Sometimes. If the existing membrane is well-adhered and the substrate is sound, we can apply compatible systems over the top. However, if there's delamination, moisture trapped beneath, or incompatible materials, we'll need to strip back to substrate first."
      },
      {
        question: "How do you find the source of a water leak?",
        answer: "We conduct thorough inspections including flood testing, moisture mapping with meters, and visual assessment of membrane condition. Water can travel along building elements before appearing, so we trace the path back to the actual entry point rather than just treating symptoms."
      },
      {
        question: "What's the difference between liquid and sheet membranes?",
        answer: "Liquid membranes are spray or roller-applied and cure to form a seamless coating—ideal for complex shapes and details. Sheet membranes (torch-on or self-adhesive) provide consistent thickness and are suited to large flat areas. We select based on application, substrate and performance requirements."
      },
      {
        question: "Do I need council approval for waterproofing work?",
        answer: "Generally no—waterproofing is maintenance work that doesn't require a building permit. However, if we're replacing tiles, modifying drainage or making structural changes as part of the remediation, permits may be required. We advise on compliance requirements during quoting."
      }
    ],
    ctaBlock: {
      title: "Let Us Handle Your Waterproofing",
      subtitle: "We do makegoods all day, every day.",
      text: "From balcony remediation to full roof systems, we've waterproofed commercial and residential buildings across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["structural-remediation", "cladding-glazing", "polycarbonate-roofing-skylights"],
    category: "structural",
    published: true
  },
  {
    name: "Polycarbonate Roofing & Skylights",
    slug: "polycarbonate-roofing-skylights",
    title: "Polycarbonate Roofing & Skylights Melbourne",
    metaTitle: "Polycarbonate Roofing & Skylights Melbourne | Industrial Roof Panel Specialists",
    description: "We supply and install clear polycarbonate roofing sheets designed for industrial and warehouse environments. Our installations improve natural light, resist harsh weather and are completed in accordance with Australian Standards and safety requirements. From new installations to repairs and upgrades, we deliver practical roofing solutions suited to Melbourne's demanding conditions.",
    metaDescription: "Polycarbonate roofing and skylight installation Melbourne for warehouses and industrial facilities. Australian Standards compliant, weather resistant installations, repairs and upgrades.",
    heroText: "We supply and install clear polycarbonate roofing sheets designed for industrial and warehouse environments. Our installations improve natural light, resist harsh weather and are completed in accordance with Australian Standards and safety requirements.",
    ogImage: "/og/polycarbonate-roofing-skylights.jpg",
    heroImage: skylightRoofPanelsImage,
    heroImageAlt: "Clear polycarbonate roofing sheet installation industrial warehouse Melbourne",
    secondaryImage: skylightSteelStructureImage,
    secondaryImageAlt: "Polycarbonate skylight panels steel roof structure warehouse Melbourne",
    trustBadges: [
      "Certified Workmanship",
      "Roofing Repairs & Replacement",
      "Compliant Asbestos Disposal"
    ],
    benefits: [
      "Storm damaged and leaking roofs",
      "Clear polycarbonate sheet installation",
      "Yellowed and discoloured panel renewal",
      "UV Protection",
      "Compliant asbestos disposal",
      "Complete roof sheet replacement",
      "Energy efficiency",
      "Certification and warranty"
    ],
    skipAboutSection: true,
    comparison: {
      title: "When Skylights Need Replacing",
      specialistTitle: "New Polycarbonate Panels",
      regularTitle: "Aged/Damaged Panels",
      items: [
        {
          feature: "Light Transmission",
          specialist: "Up to 90% natural light diffusion",
          regular: "Yellowed, reduced light (often <40%)"
        },
        {
          feature: "UV Protection",
          specialist: "Blocks up to 99% of UV radiation",
          regular: "UV degraded, no longer blocking harmful rays"
        },
        {
          feature: "Impact Resistance",
          specialist: "High impact resistance, hail and debris protection",
          regular: "Brittle, prone to cracking and storm damage"
        },
        {
          feature: "Thermal Performance",
          specialist: "Superior thermal insulation, reduced energy costs",
          regular: "Poor insulation, heat loss in winter"
        },
        {
          feature: "Lifespan",
          specialist: "Manufacturer warranties, 20+ year lifespan",
          regular: "Exceeded typical 15-20 year lifespan"
        },
        {
          feature: "Safety & Compliance",
          specialist: "Fully compliant with AS/NZS requirements",
          regular: "May not meet current Australian Standards"
        }
      ]
    },
    featuredSections: [
      {
        title: "Skylight & Roof Panel Replacement Scope",
        description: "From removal of damaged, yellowed or leaking panels through to installation of new polycarbonate sheets that allow natural light to flow through. We handle proper flashing, sealing and all guttering requirements. For properties with asbestos-containing panels, we manage licensed removal and compliant disposal as part of the project. Every installation includes workmanship warranties and documentation for your records.\n\nOur experienced team delivers professional skylight & roof panel replacement services across Melbourne's commercial and industrial properties. We understand the importance of meeting lease obligations and landlord requirements, working efficiently to minimise disruption while achieving quality results.",
        image: skylightSteelStructureImage,
        imageAlt: "Industrial skylight steel structure warehouse roof panel replacement Melbourne"
      }
    ],
    postComparisonSections: [
      {
        title: "Roof Repairs for Leaks & Storm Damage",
        description: "Melbourne's harsh weather can cause sudden damage to polycarbonate and fibreglass roof panels—cracking, lifting, or complete failure during storms. When leaks appear or panels are damaged, fast response is critical to prevent further water ingress and damage to stock, equipment, or flooring below.\n\nWe provide responsive repair services for storm-damaged and leaking roofs across Melbourne's industrial and commercial properties. From temporary make-safe works through to full panel replacement, we assess the damage, provide clear recommendations, and complete repairs efficiently to get your facility back to normal.",
        image: warehouseRoofSkylightsImage,
        imageAlt: "Storm damaged warehouse roof repair polycarbonate skylight panels Melbourne",
        imageLeft: true
      }
    ],
    processAfterSection: 0,
    process: [
      {
        step: "Skylight Assessment",
        description: "We inspect all skylights and roof panels, documenting condition, damage, discolouration and leaks against your lease requirements or upgrade objectives."
      },
      {
        step: "Scope & Quote",
        description: "Detailed scope with panel specifications, quantities and pricing. For make good projects, we handle landlord and property manager approvals."
      },
      {
        step: "Professional Installation",
        description: "Height-safety certified crews remove old panels and install new fibreglass sheets with proper flashing and sealing."
      },
      {
        step: "Completion & Documentation",
        description: "Final inspection, workmanship warranty, and VBA Certificate of Compliance for your records and lease handover."
      }
    ],
    faqs: [
      {
        question: "Is skylight replacement required for my end of lease make good?",
        answer: "It depends on your lease terms and the condition of skylights when you took possession. If skylights have deteriorated beyond fair wear and tear—showing cracks, yellowing, leaks or damage—or your lease specifies original condition return, replacement is typically required. We review your lease requirements, assess skylight condition, and advise whether replacement is necessary to satisfy your make good obligations."
      },
      {
        question: "How do I know if my skylights need replacing?",
        answer: "Common signs include yellowing or discolouration reducing light transmission, visible cracks or crazing in the panels, water leaks during rain, brittleness when touched, and panels exceeding their typical 15-20 year lifespan. For make good purposes, we compare current condition against lease requirements and landlord expectations."
      },
      {
        question: "What type of skylight panels do you install?",
        answer: "We install quality Australian-made fibreglass panels matched to your existing roof profile. This includes products like Ampelite and similar manufacturers, selected based on your specific requirements, budget and any landlord specifications. We'll recommend the appropriate product for your situation during our assessment."
      },
      {
        question: "Can you include skylight replacement in my broader make good scope?",
        answer: "Absolutely—this is exactly how we typically handle skylight work. We include skylights in your overall make good quote alongside flooring, cleaning, repairs and any other requirements. One quote, one project manager, one handover."
      },
      {
        question: "How long does skylight replacement take?",
        answer: "Most warehouse skylight replacements are completed in 1-3 days depending on scope and access requirements. Larger projects may take longer. We schedule work to align with your make good timeline or vacancy period."
      },
      {
        question: "Do you handle landlord approvals for skylight work?",
        answer: "Yes. For make good projects, we prepare detailed scopes and specifications for landlord and property manager review. We're experienced in what property managers expect and can liaise directly with them on your behalf to get approvals and confirm acceptance on completion."
      },
      {
        question: "What about asbestos roof panels?",
        answer: "If asbestos-containing materials are identified during inspection, licensed asbestos removalists safely remove and dispose of materials before new panels are installed. We manage the entire process and ensure full compliance with EPA and WorkSafe regulations."
      },
      {
        question: "I'm a property owner—can you help me upgrade skylights in my vacant building?",
        answer: "Yes. Many property owners take advantage of vacancy periods to replace aged skylights before re-leasing. New skylights improve natural light, create a better first impression for prospective tenants, and reduce ongoing maintenance issues. We provide the same complete service for owners as we do for tenants completing make good works."
      }
    ],
    ctaBlock: {
      title: "Skylights Part of Your Make Good?",
      subtitle: "We do makegoods all day, every day.",
      text: "Whether you're completing end of lease obligations or upgrading your vacant property, we deliver complete skylight replacement as part of our make good service. One quote, one project manager, complete documentation for handover. Get in touch for a free assessment."
    },
    relatedServices: ["waterproofing", "structural-remediation", "warehouse-floor-restoration"],
    category: "structural",
    published: true
  },
  {
    name: "Warehouse Floor Restoration",
    slug: "warehouse-floor-restoration",
    title: "Warehouse Floor Restoration Melbourne",
    metaTitle: "Warehouse Floor Restoration Melbourne | Industrial Floor Specialists",
    description: "Complete warehouse floor restoration services across Melbourne. We remove flooring, strip coatings, grind adhesives, repair damage and restore concrete slabs to handover-ready condition. From carpet strip-out to dynabolt filling, crack repairs to epoxy finishes—we deliver the full scope in one comprehensive service.",
    metaDescription: "Warehouse floor restoration Melbourne. Flooring removal, concrete grinding, dynabolt repairs, crack injection and surface finishing. End of lease specialists. Free quotes.",
    heroText: "Your lease requires the floor restored to original condition. We handle everything—flooring removal, coating grinding, dynabolt repairs and surface finishing. One contractor, one scope, handover-ready results.",
    ogImage: "/og/warehouse-floor-restoration.jpg",
    heroImage: concreteSlabRestorationHeroImage,
    heroImageAlt: "Large industrial warehouse with restored concrete slab floor showing completed floor restoration Melbourne",
    secondaryImage: warehouseFloorRepairsScopeImage,
    secondaryImageAlt: "Empty warehouse with polished concrete floor after complete floor restoration Melbourne",
    trustBadges: [
      "Diamond-Tipped Grinding Technology",
      "Industrial Floor Repair Systems",
      "Warehouse & Factory Specialists"
    ],
    featuredSections: [
      {
        title: "Flooring & Adhesive Removal",
        description: "Complete removal of all floor coverings and their adhesives. We strip carpets and carpet tiles, vinyl and linoleum floorboards, ceramic and porcelain tiles and epoxy sealed concrete floors. Our industrial grinders then ablate adhesive beds, carpet glue, tile mortar, [waterproofing membranes](/services/waterproofing) and failed [epoxy coatings](/services/epoxy-flooring)—leaving concrete floor slabs ready for restoration.",
        image: tileFlooringRemovalImage,
        imageAlt: "Demolition hammer removing floor tiles during warehouse flooring strip out Melbourne"
      },
      {
        title: "Floor Grinding & Levelling",
        description: "Uneven floors, high spots and surface deterioration affect forklift operation and safety. Our industrial floor grinding equipment levels surfaces, removes coatings and prepares floors for [epoxy systems](/services/epoxy-flooring) or grind-and-seal finishes. We restore flatness tolerances required for efficient warehouse operations.",
        image: floorGrindingPowerTrowelImage,
        imageAlt: "Industrial concrete power trowel with protective cage and orange power cord on warehouse floor Melbourne"
      },
      {
        title: "Dynabolt Hole Repairs",
        description: "When pallet racking, machinery or equipment is removed, you're left with hundreds of anchor holes in your floor. We core drill out damaged concrete around dynabolt holes, fill with high-strength epoxy resin, and grind flush to restore a smooth, level surface. Essential for [lease end make goods](/what-is-make-good) and floor re-coating.",
        image: warehouseDynaboltHoleRepairsImage,
        imageAlt: "Industrial warehouse pallet racking with blue uprights and orange beams anchored to concrete floor Melbourne"
      },
      {
        title: "Surface Finishing",
        description: "Once the slab is restored and repaired, we provide the finish your lease requires. Grind and seal delivers a protected surface in matte, semi-gloss or high-gloss finish. [Epoxy coatings](/services/epoxy-flooring) provide chemical resistance and durability for continued operations. [Line marking](/services/line-marking) restores safety zones and traffic lanes. We match the specification in your lease.",
        image: grindSealFloorCoatingImage,
        imageAlt: "Worker applying protective floor sealant coating to ground concrete warehouse floor Melbourne"
      }
    ],
    benefits: [
      "Complete Flooring Strip-Out",
      "Carpet, Vinyl, Tile & Adhesive Removal",
      "Industrial Concrete Grinding",
      "Epoxy & Coating Removal",
      "Dynabolt Hole Repairs",
      "Crack Injection & Joint Repairs",
      "Slab Stabilisation & Levelling",
      "Grind & Seal Finishes",
      "End of Lease Specialists"
    ],
    comparison: {
      title: "Why Choose Make Good Melbourne?",
      specialistTitle: "Make Good Melbourne",
      regularTitle: "Multiple Contractors",
      items: [
        { feature: "Scope", specialist: "Full service: removal, grinding, repairs and finishing", regular: "Separate trades for each stage" },
        { feature: "Equipment", specialist: "Heavy-duty industrial grinders that fully ablate surfaces", regular: "Standard equipment with limited capability" },
        { feature: "Repairs", specialist: "Structural epoxy injection, core drilling, polyurethane systems", regular: "Basic mortar patching that fails" },
        { feature: "Coordination", specialist: "Single point of contact, one schedule, one handover", regular: "Multiple contractors, scheduling conflicts" },
        { feature: "Outcome", specialist: "Guaranteed handover-ready results", regular: "Variable finish quality, blame-shifting" }
      ]
    },
    process: [
      { step: "Floor Assessment", description: "We inspect your floor to identify existing coverings, adhesives, surface damage, repairs required and your finish requirements—whether for lease handover or continued operations." },
      { step: "Strip-Out", description: "We remove all floor coverings including carpet, vinyl, tiles, and epoxy. Industrial grinders then ablate adhesives, membranes and failed coatings back to bare concrete." },
      { step: "Grinding & Repairs", description: "Heavy-duty grinding levels surfaces and removes contamination. Dynabolt holes are cored and filled, cracks injected with epoxy or polyurethane, and joints repaired or re-sealed." },
      { step: "Finishing & Handover", description: "Completed repairs are ground flush and documented. Your floor is finished to specification—raw concrete, grind and seal, or prepared for epoxy coating. Ready for inspection or continued use." }
    ],
    faqs: [
      {
        question: "What types of flooring can you remove?",
        answer: "We remove all commercial floor coverings including carpet tiles, broadloom carpet, sheet vinyl, luxury vinyl tiles (LVT), vinyl planks, linoleum, ceramic tiles, porcelain tiles, and quarry tiles. We also remove underlay, gripper rods, and all associated fixtures."
      },
      {
        question: "Can you remove carpet glue and tile adhesive from concrete?",
        answer: "Yes. Our industrial grinders fully ablate adhesive beds, carpet glue, tile mortar and other residues that standard equipment leaves behind. We also remove waterproofing membranes and failed coatings, leaving bare concrete ready for restoration."
      },
      {
        question: "What makes your grinding equipment different?",
        answer: "We use heavy-duty industrial floor grinders that can fully ablate concrete surfaces—removing coatings, adhesives, and contamination that standard grinding equipment cannot touch. Our machines are remote-operated for precision and safety, and include integrated dust extraction for cleaner worksites."
      },
      {
        question: "Can you grind floors with oil stains or chemical contamination?",
        answer: "Yes. Our grinding process removes oil stains, chemical contamination and other surface issues that penetrate the concrete. For severe contamination, we grind deeper to reach clean concrete. This is often required in factories and workshops before floor coatings or handover."
      },
      {
        question: "How do you repair dynabolt holes?",
        answer: "Dynabolt holes are left when racking, machinery or equipment anchored to your floor is removed. We core drill around each hole to remove damaged concrete, fill with high-strength epoxy resin, and grind flush to the surrounding surface. The result is a smooth, level floor ready for handover or re-coating."
      },
      {
        question: "How do you repair cracks in warehouse floors?",
        answer: "We use different methods depending on crack type. For structural cracks, we inject low-viscosity epoxy that flows into the crack and bonds the concrete together, restoring load-bearing capacity. For movement cracks, we rout out the crack and fill with flexible polyurethane sealant that accommodates ongoing movement without failing."
      },
      {
        question: "What is grind and seal, and when is it recommended?",
        answer: "Grind and seal is a two-phase process: first, we grind the concrete to remove old coatings, stains and surface imperfections. Then we apply a protective sealant in matte, semi-gloss or high-gloss finish. The sealed surface resists spills, stains, tyre marks and abrasion—ideal when you need a finished floor rather than raw concrete for handover."
      },
      {
        question: "Will this satisfy my lease make good requirements?",
        answer: "Absolutely. We specialise in end of lease floor restoration and understand exactly what landlords and property managers require. We ensure your floor meets handover standards and can provide documentation and condition reports if needed."
      },
      {
        question: "Do you handle waste disposal?",
        answer: "Yes, all waste removal and disposal is included in our service. We compliantly dispose of all flooring materials, adhesives, debris and contaminated concrete. You won't need to arrange skip bins or separate waste contractors."
      },
      {
        question: "Can you work while the warehouse is operational?",
        answer: "In many cases, yes. We can section off areas and work progressively to maintain access to operational zones. Our dust-controlled equipment minimises disruption. We'll discuss scheduling and access requirements during our site assessment."
      },
      {
        question: "How long does warehouse floor restoration take?",
        answer: "Timing depends on floor size, condition and scope. A standard warehouse (500-1000m²) requiring flooring removal, grinding and basic repairs typically takes 5-7 days. Floors requiring extensive repairs or finishing coats take longer. We provide accurate timelines after inspection."
      },
      {
        question: "What is the cost of warehouse floor restoration in Melbourne?",
        answer: "Cost depends on floor area, existing coverings, extent of damage and finish required. We provide fixed-price quotes after inspection—no hidden costs. Contact us for a free site assessment and detailed quote."
      },
      {
        question: "Do you restore showroom floors as well as warehouse floors?",
        answer: "Yes. We restore floors in showrooms, factories, distribution centres and other commercial premises. Showroom floors often require a higher standard of finish—we can grind and seal to a polished or semi-gloss finish suitable for customer-facing spaces."
      },
      {
        question: "Do you provide before and after documentation?",
        answer: "Yes, we provide photographic documentation of the floor condition before and after our work. This is useful for lease handovers and serves as evidence that make good requirements have been met."
      }
    ],
    ctaBlock: {
      title: "Let Us Restore Your Warehouse Floor",
      subtitle: "We do makegoods all day, every day.",
      text: "From flooring strip-out to finished surface, we've restored warehouse floors across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["epoxy-flooring", "line-marking", "pallet-racking-removal"],
    category: "structural",
    published: true
  },
  // Strip Out Category - Placeholder services for carousel
  {
    name: "Back to Base Works",
    slug: "back-to-base-works",
    title: "Back to Base Works Melbourne",
    metaTitle: "Back to Base Works Melbourne | Service Disconnection",
    description: "We expertly manage the disconnection and make-safe of all essential services, including electrical, fire, HVAC, and plumbing, ensuring the property is compliant and ready for the next tenant.",
    metaDescription: "Professional back to base works in Melbourne. Electrical, fire, HVAC and plumbing disconnection. Licensed contractors. End of lease compliance. Free quotes.",
    heroText: "Complete service disconnection and make-safe works for commercial properties. Our licensed team manages the systematic disconnection of electrical, fire, HVAC and plumbing systems, ensuring compliance with all building codes and landlord requirements.",
    ogImage: "/og/back-to-base-works.jpg",
    benefits: [
      "Electrical disconnection and make-safe certification",
      "Fire services isolation and testing",
      "HVAC system decommissioning",
      "Plumbing capping and certification",
      "Full compliance documentation",
      "Coordinated multi-trade management"
    ],
    relatedServices: ["demolition-works", "waste-management", "pallet-racking-removal"],
    category: "demolition",
    published: true
  },
  {
    name: "Demolition Works",
    slug: "demolition-works",
    title: "Demolition Works Melbourne",
    metaTitle: "Commercial Demolition Works Melbourne | Licensed",
    description: "Our licensed team performs precise internal demolition, safely removing non-structural partitions, ceilings, flooring, fixtures, and fittings with minimal disruption.",
    metaDescription: "Commercial demolition works Melbourne. Office strip out and internal demolition. Partition removal. Ceiling demolition. Licensed operators. Free quotes.",
    heroText: "Selective internal demolition for commercial and industrial properties. We carefully remove partitions, suspended ceilings, flooring, fixtures and fittings without damaging the base building structure or surrounding tenancies.",
    ogImage: "/og/demolition-works.jpg",
    benefits: [
      "Selective internal demolition",
      "Partition and ceiling removal",
      "Flooring and carpet strip-out",
      "Fixture and fitting removal",
      "Dust-controlled equipment",
      "After-hours work available"
    ],
    relatedServices: ["back-to-base-works", "waste-management", "pallet-racking-removal"],
    category: "demolition",
    published: true
  },
  {
    name: "Waste Management & Disposal",
    slug: "waste-management",
    title: "Waste Management & Disposal Melbourne",
    metaTitle: "Commercial Waste Disposal Melbourne | Certified",
    description: "We provide end-to-end waste management, including the certified handling and disposal of all materials, from general construction waste to hazardous substances like asbestos.",
    metaDescription: "Commercial waste management Melbourne. Construction waste disposal. Asbestos removal certification. Recycling solutions. Sustainability reporting. Free quotes.",
    heroText: "Comprehensive waste management solutions for commercial strip outs and construction projects. We handle everything from general waste to hazardous materials, maximising recycling and providing full disposal documentation.",
    ogImage: "/og/waste-management.jpg",
    benefits: [
      "Licensed hazardous waste removal",
      "Asbestos identification and disposal",
      "Recycling and diversion from landfill",
      "Full waste tracking documentation",
      "Sustainability reporting available",
      "Skip bin coordination and removal"
    ],
    relatedServices: ["back-to-base-works", "demolition-works", "pallet-racking-removal"],
    category: "demolition",
    published: true
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: 'demolition' | 'make-good' | 'trade' | 'cleaning' | 'structural'): Service[] {
  return services.filter(service => service.category === category && service.published === true);
}

export function getPublishedServices(): Service[] {
  return services.filter(service => service.published === true);
}

,
  {
    name: "Waste Management",
    slug: "waste-management",
    title: "Intelligent Waste Management & Resource Recovery",
    metaTitle: "Waste Management Melbourne | Steel & Furniture Recovery",
    description: "We don't just dispose of waste; we recover value. Specialising in steel recycling and office furniture purchasing, we offer a smarter, more sustainable solution for your commercial strip-out needs in Melbourne.",
    metaDescription: "Expert waste management in Melbourne. We specialise in steel recycling, purchase used office furniture, and provide certified, sustainable disposal for commercial and construction strip-outs.",
    heroText: "We don't just dispose of waste; we recover value. Specialising in steel recycling and office furniture purchasing, we offer a smarter, more sustainable solution for your commercial strip-out needs in Melbourne.",
    ogImage: "/og/waste-management.jpg",
    heroImage: wasteManagementBinImage,
    heroImageAlt: "Green waste management bin for commercial strip outs in Melbourne",
    heroImageTitle: "Makegood Melbourne - Waste Management Service",
    capabilitiesTitle: "A Complete Waste & Resource Recovery Service",
    capabilityCards: [
      {
        icon: "brick",
        title: "Commercial & Construction Waste",
        items: ["Comprehensive disposal for all non-hazardous materials from your site, including rubble, timber, plasterboard, and general refuse. We ensure every item is sorted for maximum recycling."]
      },
      {
        icon: "structure",
        title: "Steel & Metals Recycling",
        items: ["As steel recycling specialists, we turn your scrap metal into a valuable resource. We recover all ferrous and non-ferrous metals, ensuring they are processed responsibly and contribute to a circular economy."]
      },
      {
        icon: "brick",
        title: "Office Furniture & E-Waste",
        items: ["Don't pay to dispose of quality assets. We purchase office furniture in good condition and provide certified disposal for all e-waste, ensuring data security and environmental compliance."]
      }
    ],
    featuredSection: {
      title: "A Smarter Approach to Waste: From Disposal to Recovery",
      description: "At Make-Good Melbourne, we see waste as a resource waiting to be realised. Our waste management service is built on a foundation of resource recovery, transforming the traditional disposal model into a value-generating process for your business. We go beyond simply clearing your site; we meticulously sort, process, and recycle materials to minimise landfill and maximise sustainability. Our specialisation in steel recycling allows us to handle large volumes of scrap metal, offering competitive rebates and ensuring it re-enters the supply chain. This commitment to a circular economy not only benefits the environment but also improves your project's bottom line. Furthermore, we are unique in our approach to office furniture. Where others see waste, we see potential. We will assess your used office furniture and, if it's in good condition, we may purchase it from you. For items that can't be resold, we provide a free and responsible disposal service. This approach reduces your disposal costs and gives your assets a second life. Our team is fully certified and adheres to the strictest industry standards and local Melbourne regulations. We provide transparent documentation and ensure full compliance for every project, giving you complete peace of mind."
    },
    faqs: [
      {
        question: "What types of waste do you handle?",
        answer: "We manage a wide range of commercial and construction waste, including general refuse, timber, plasterboard, and concrete. We have a specialised focus on recovering and recycling all types of scrap metal, particularly steel. We also handle office furniture and e-waste."
      },
      {
        question: "Are you certified for waste management?",
        answer: "Yes, our team is fully certified and trained in all aspects of waste management, including the handling of specific materials like e-waste. We operate in full compliance with all Victorian and Melbourne-specific environmental regulations."
      },
      {
        question: "What is your process for office furniture removal?",
        answer: "During our initial site assessment, we evaluate the condition of your office furniture. We may offer to purchase items that are in good, reusable condition. For all other furniture, we provide a free and environmentally responsible disposal service, aiming to recycle materials wherever possible."
      },
      {
        question: "How do you ensure compliance with local regulations?",
        answer: "We maintain up-to-date knowledge of all local council and state-level regulations. Our process includes comprehensive documentation, from waste transfer notes to recycling certificates, ensuring your project is fully compliant and auditable."
      },
      {
        question: "What happens to the materials you collect?",
        answer: "Our primary goal is to divert as much material from landfill as possible. Metals are sent to our partner recycling facilities, timber and concrete are processed for reuse in construction, and office furniture is either resold or broken down for material recycling. We provide detailed reports on the percentage of waste recycled from your project."
      }
    ],
    ctaBlock: {
      title: "Ready for a Smarter Waste Solution?",
      subtitle: "Contact us today for a free, no-obligation assessment and discover how our resource recovery approach can benefit your project's budget and environmental footprint.",
      text: ""
    },
    relatedServices: ["pallet-racking-removal", "demolition-works", "back-to-base-works"],
    category: "make-good",
    published: true,
    benefits: []
  }
]
