import commercialCleaningImage from "@/assets/services/commercial-cleaning-melbourne-supplies.jpeg";
import commercialFloorSweepingImage from "@/assets/services/commercial-floor-sweeping-concrete-melbourne.jpeg";
import epoxyFlooringWarehouseImage from "@/assets/services/polished-epoxy-floor-industrial-warehouse-melbourne.jpeg";
import epoxySpreadingApplicationImage from "@/assets/services/epoxy-floor-spreading-application-warehouse-melbourne.jpeg";
import warehouseFloorScrubberImage from "@/assets/services/warehouse-floor-scrubber-cleaning-v4.jpg";
import industrialFloorScrubberImage from "@/assets/services/industrial-ride-on-floor-scrubber-warehouse-melbourne.png";
import highPressureWarehouseCleaningImage from "@/assets/services/high-pressure-warehouse-cleaning-melbourne.png";
import warehouseRelocationImage from "@/assets/services/warehouse-relocation-forklift-loading-racking-melbourne.png";
import palletRackingHeroImage from "@/assets/services/pallet-racking-dismantling-warehouse-floor-melbourne.jpeg";
import warehouseDynaboltHoleRepairsImage from "@/assets/services/warehouse-dynabolt-hole-repairs-pallet-racking-melbourne.jpeg";
import warehouseFloorRepairsHeroImage from "@/assets/services/warehouse-floor-worn-surface-line-markings-hero-melbourne.png";
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
import concreteSlabRestorationHeroImage from "@/assets/services/concrete-slab-grinding-polished-warehouse-floor-melbourne.png";
import concreteFloorGrinderImage from "@/assets/services/industrial-concrete-floor-grinding-warehouse-melbourne.jpeg";
import concreteFloorJointImage from "@/assets/services/concrete-floor-joint-metal-expansion-strip-melbourne.jpeg";
import polyurethaneFoamInjectionImage from "@/assets/services/polyurethane-foam-injection-slab-stabilisation-melbourne.jpeg";
import tileFlooringRemovalImage from "@/assets/services/tile-flooring-removal-demolition-hammer-melbourne.jpeg";
import floorGrindingMachineImage from "@/assets/services/floor-grinding-machine-concrete-levelling-melbourne.jpeg";
import grindSealFloorCoatingImage from "@/assets/services/grind-seal-floor-coating-application-warehouse-melbourne.jpeg";

export interface FeaturedSection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'center' | 'right';
}

export interface CtaBlock {
  title: string;
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
  secondaryImage?: string;
  secondaryImageAlt?: string;
  trustBadges?: string[];
  featuredSection?: FeaturedSection;
  featuredSections?: FeaturedSection[];
  processAfterSection?: number; // Index of featured section after which to show process (0-based)
  benefits: string[];
  comparison?: Comparison;
  faqs?: FAQ[];
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
    name: "Office Strip Out",
    slug: "office-strip-out",
    title: "Office Strip Out Melbourne",
    metaTitle: "Office Strip Out Melbourne | Commercial Experts",
    description: "Complete office strip out services for Melbourne commercial properties. We remove partitions, furniture, flooring and all fitout elements efficiently.",
    metaDescription: "Professional office strip out Melbourne. Remove partitions, ceilings, flooring and fitouts. Fast turnaround, full waste disposal. Free quotes from licensed contractors.",
    heroText: "Transform your commercial space back to base building condition with our comprehensive office strip out services.",
    benefits: [
      "Complete fitout removal",
      "Partition and ceiling demolition",
      "Floor covering removal",
      "Electrical and data de-commissioning",
      "Full waste management included",
      "Minimal disruption to building"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Strip Out",
      subtitle: "We do makegoods all day, every day.",
      text: "Our crews have stripped out hundreds of Melbourne offices—from single tenancies to multi-floor fitouts. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["commercial-make-good", "carpet-removal", "ceiling-tile-replacement"],
    category: "demolition"
  },
  {
    name: "Warehouse Make Good",
    slug: "warehouse-make-good",
    title: "Warehouse Make Good Melbourne",
    metaTitle: "Warehouse Make Good Melbourne | Industrial Experts",
    description: "Industrial warehouse make good services across Melbourne. From floor repairs to racking removal, we restore warehouses to lease-compliant condition.",
    metaDescription: "Warehouse make good Melbourne specialists. Floor restoration, racking removal, line marking and industrial repairs. End of lease compliance guaranteed. Free quotes.",
    heroText: "Restore your industrial warehouse to original condition and meet all end of lease obligations with our specialist services.",
    benefits: [
      "Complete racking removal",
      "Concrete floor restoration",
      "Line marking reinstatement",
      "Roller door and dock repairs",
      "Electrical make-safe works",
      "Industrial cleaning included"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Warehouse Make Good",
      subtitle: "We do makegoods all day, every day.",
      text: "From small units to large distribution centres, we've restored warehouses across Melbourne to handover-ready condition. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["pallet-racking-removal", "epoxy-flooring", "line-marking"],
    category: "make-good"
  },
  {
    name: "Pallet Racking Removal",
    slug: "pallet-racking-removal",
    title: "Pallet Racking Removal Melbourne",
    metaTitle: "Pallet Racking Removal Melbourne | Fast Service",
    description: "Racking bolted to your floor and walls? That's your landlord's problem now—unless you sort it before handover. We dismantle, remove and dispose of all racking systems, protection bollards and wall brackets, then core drill and fill those anchor holes so you get your bond back.",
    metaDescription: "Pallet racking removal Melbourne. Core drill and fill dynabolt removal. Floor and wall anchors extracted. Bollards removed. Licensed operators. Free quotes.",
    heroText: "Professional pallet racking dismantling and floor restoration across Melbourne. We remove your racking systems—including wall ties, protection bollards, guard rails and safety gates—then core drill out every dynabolt, fill with epoxy resin and grind flush to remediate your warehouse floor to original condition for handover.",
    heroImage: palletRackingHeroImage,
    heroImageAlt: "Warehouse with pallet racking being dismantled and stacked on floor ready for removal Melbourne",
    secondaryImage: warehouseRelocationImage,
    secondaryImageAlt: "Forklift loading dismantled pallet racking onto flatbed truck for removal from Melbourne warehouse",
    benefits: [
      "All types of pallet racking systems including cantilever wall units",
      "Dynabolt removal from floor slabs and walls",
      "Removal of safety barriers, bollards and swing gates",
      "Floor anchor remediation—core drilled, filled with epoxy resin and ground flush",
      "Transport solutions available",
      "Buy back, recycling and disposal solutions available",
      "Complete warehouse slab remediation solutions available"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Racking Removal",
      subtitle: "We do makegoods all day, every day.",
      text: "Our experienced crew has dismantled hundreds of racking systems across Melbourne, restoring warehouse floors for handover. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["warehouse-make-good", "concrete-floor-repair", "epoxy-flooring"],
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
    heroText: "Your warehouse floor takes a beating. Epoxy coating protects the concrete, hides the damage and gives you a surface that's easy to clean, safe to work on and built to last. For floors with cracks, bolt holes or joint damage, we handle [floor repairs](/services/warehouse-floor-repairs) before coating. Whether you're refreshing for a new tenant or upgrading your own facility—we deliver.",
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
    relatedServices: ["warehouse-floor-repairs", "concrete-floor-repair", "warehouse-make-good", "line-marking"],
    category: "trade",
    published: true
  },
  {
    name: "Commercial Painting",
    slug: "commercial-painting",
    title: "Commercial Painting Melbourne",
    metaTitle: "Commercial Painting Melbourne | Quality Finish",
    description: "Scuffed walls, patched holes and mismatched touch-ups won't pass a landlord inspection. We deliver professional commercial painting that meets lease requirements—colour-matched, properly prepared and finished to a standard that gets your bond back.",
    metaDescription: "Commercial painting Melbourne. Office, warehouse and retail painting. Make good painting, touch-ups and full repaints. Licensed painters, quality guaranteed. Free quotes.",
    heroText: "Your lease says 'return to original condition'—that means matching the exact colours and finish quality. We handle colour matching, surface prep and professional application so the space looks right and your landlord signs off without drama.",
    benefits: [
      "Accurate colour matching",
      "Full surface preparation",
      "Low-odour options for occupied spaces",
      "After-hours and weekend work",
      "All surfaces—walls, ceilings, trim",
      "Quality finish that passes inspection"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Commercial Painting",
      subtitle: "We do makegoods all day, every day.",
      text: "Our painters have delivered inspection-ready finishes across Melbourne's commercial properties for years. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["patching-plastering", "commercial-make-good", "ceiling-tile-replacement"],
    category: "make-good"
  },
  {
    name: "Electrical Make Safe",
    slug: "electrical-make-safe",
    title: "Electrical Make Safe Melbourne",
    metaTitle: "Electrical Make Safe Melbourne | Licensed Sparkies",
    description: "Removed a partition but left live wires exposed? Added data points that now need decommissioning? Electrical make safe isn't optional—it's a compliance requirement. Our licensed electricians disconnect, cap and certify so you hand back a safe, compliant space.",
    metaDescription: "Electrical make safe Melbourne. Licensed electricians for safe disconnection, capping and removal. Commercial and industrial. Compliance certificates provided. Free quotes.",
    heroText: "Exposed wiring and abandoned circuits are a liability—and a failed inspection waiting to happen. Our licensed electricians safely disconnect, remove and certify all electrical modifications so your make good is compliant and your handover is smooth.",
    benefits: [
      "Licensed A-grade electricians",
      "Compliance certificates provided",
      "All circuit types covered",
      "Data and communications removal",
      "Switchboard modifications",
      "After-hours work available"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Electrical Make Safe",
      subtitle: "We do makegoods all day, every day.",
      text: "Our licensed electricians have made safe hundreds of commercial spaces across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["office-strip-out", "warehouse-make-good", "led-lighting"],
    category: "demolition"
  },
  {
    name: "Concrete Floor Repair",
    slug: "concrete-floor-repair",
    title: "Concrete Floor Repair Melbourne",
    metaTitle: "Concrete Floor Repair Melbourne | Industrial Experts",
    description: "Cracks spreading across your warehouse floor? Joints breaking down? Forklift traffic and heavy loads punish concrete—but you don't need to replace the whole slab. We repair cracks, rebuild joints and restore surfaces so your floor performs like it should.",
    metaDescription: "Concrete floor repair Melbourne. Industrial crack repair, spalling fix, joint restoration and resurfacing. Warehouse and factory specialists. Free quotes available.",
    heroText: "That crack isn't going away on its own. Every forklift pass makes it worse, every pallet drop chips more concrete. We stop the damage, repair what's broken and give you a floor that's safe, functional and ready for years more service.",
    benefits: [
      "Structural crack injection",
      "Joint arris and spalling repair",
      "Pitting and surface restoration",
      "Forklift damage remediation",
      "Fast-cure for minimal downtime",
      "Colour-matched to existing slab"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Floor Repairs",
      subtitle: "We do makegoods all day, every day.",
      text: "We've repaired warehouse floors across Melbourne—from minor cracks to major slab restoration. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["epoxy-flooring", "warehouse-make-good", "line-marking"],
    category: "trade"
  },
  {
    name: "Ceiling Tile Replacement",
    slug: "ceiling-tile-replacement",
    title: "Ceiling Tile Replacement Melbourne",
    metaTitle: "Ceiling Tile Replacement Melbourne | Lease Compliance",
    description: "From standard suspended grids to timber acoustic panels, we replace and restore commercial ceilings to meet your lease obligations. Post-demolition repairs where partitions were removed, discontinued tile matching when originals are no longer made and full grid restoration when tenants have stripped them out for extra height. LED repositioning, aircon adjustments and fire services coordination when required.",
    metaDescription: "Ceiling tile replacement Melbourne. Acoustic panels, suspended grids, LED rebalancing and grid reinstallation. End of lease compliance for commercial offices. Free quotes.",
    heroText: "Whether your space has standard white tiles or premium timber acoustic panels, we deliver complete ceiling restoration. One contractor for every ceiling type—tiles matched, LEDs repositioned and aircon rebalanced for landlord sign-off.",
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
    relatedServices: ["commercial-painting", "office-strip-out", "commercial-make-good"],
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
    relatedServices: ["epoxy-flooring", "warehouse-make-good", "concrete-floor-repair"],
    category: "trade",
    published: true
  },
  {
    name: "Commercial Make Good",
    slug: "commercial-make-good",
    title: "Commercial Make Good Melbourne",
    metaTitle: "Commercial Make Good Melbourne | End of Lease",
    description: "Complete commercial make good services for Melbourne offices, retail and commercial properties. Full restoration to meet lease obligations.",
    metaDescription: "Commercial make good Melbourne. Office, retail and commercial property restoration. End of lease compliance, landlord liaison and full project management. Free quotes.",
    heroText: "Complete make good solutions for commercial properties, ensuring full lease compliance and smooth handover.",
    benefits: [
      "Full lease compliance",
      "Single point of contact",
      "All trades coordinated",
      "Landlord liaison included",
      "Bond return assistance",
      "Transparent pricing"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Make Good",
      subtitle: "We do makegoods all day, every day.",
      text: "We've managed make good projects across Melbourne—from small retail spaces to large corporate offices. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["office-strip-out", "commercial-painting", "ceiling-tile-replacement"],
    category: "make-good"
  },
  {
    name: "Patching and Plastering",
    slug: "patching-plastering",
    title: "Patching and Plastering Melbourne",
    metaTitle: "Patching and Plastering Melbourne | Commercial",
    description: "Every hole from removed signage, every crack from partition removal, every dent from years of use—they all need to disappear before handover. We patch, plaster and finish walls to a paint-ready standard that won't get flagged at inspection.",
    metaDescription: "Commercial patching and plastering Melbourne. Wall repairs, hole filling, plaster restoration and smooth finishes. Make good specialists. Quality guaranteed. Free quotes.",
    heroText: "Landlords notice every imperfection. Cable holes, anchor points, cracks and dents all need professional repair before painting. We deliver seamless patches and smooth finishes that disappear under paint—not repairs that show through.",
    benefits: [
      "Plasterboard and solid plaster repairs",
      "Seamless, invisible patches",
      "Texture matching where required",
      "Cornice and architrave repairs",
      "Large area skim coating",
      "Paint-ready finish guaranteed"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Wall Repairs",
      subtitle: "We do makegoods all day, every day.",
      text: "Our plasterers have delivered paint-ready finishes across Melbourne's commercial properties for years. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["commercial-painting", "commercial-make-good", "ceiling-tile-replacement"],
    category: "make-good"
  },
  {
    name: "LED Lighting Upgrade",
    slug: "led-lighting",
    title: "LED Lighting Upgrade Melbourne",
    metaTitle: "LED Lighting Upgrade Melbourne | Commercial",
    description: "Still running old fluoros? You're paying twice—once for the electricity, again for the constant tube replacements. LED upgrades cut energy costs, reduce maintenance and deliver better light quality. We handle the swap, the wiring and the disposal.",
    metaDescription: "LED lighting upgrade Melbourne. Replace fluorescent with LED. Commercial offices, warehouses and retail. Energy savings, better light. Licensed electricians. Free quotes.",
    heroText: "Fluorescent tubes flickering, ballasts failing, energy bills climbing? LED retrofits pay for themselves in reduced power consumption and eliminated maintenance. Better light, lower costs, zero hassle—we handle the complete changeover.",
    benefits: [
      "50-70% energy reduction",
      "Dramatically better light quality",
      "No more ballast failures",
      "10+ year lifespan",
      "Old fittings disposed responsibly",
      "Licensed electricians throughout"
    ],
    ctaBlock: {
      title: "Let Us Handle Your LED Upgrade",
      subtitle: "We do makegoods all day, every day.",
      text: "We've upgraded lighting in offices, warehouses and retail spaces across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["electrical-make-safe", "commercial-make-good", "office-strip-out"],
    category: "trade"
  },
  {
    name: "Make Good Cleaning",
    slug: "commercial-cleaning",
    title: "Make Good Cleaning Melbourne",
    metaTitle: "Make Good Cleaning Melbourne | Lease End Specialists",
    description: "Lease ending? We handle the heavy-duty cleaning regular cleaners won't touch. Industrial floor scrubbing, high-pressure washing and chemical treatment—everything your landlord expects at handover. We work at scale: 500sqm warehouse floors, multi-level office strip-outs, loading docks caked in years of grime. This isn't maintenance cleaning—it's handover-ready restoration.",
    metaDescription: "Make good cleaning Melbourne. Lease end floor scrubbing, high-pressure washing, oil and tyre mark removal. Pass your final inspection. Free quotes.",
    heroText: "Heavy-duty cleaning for lease end and make good handovers. We tackle the jobs regular cleaners can't—warehouse floors, post-strip-out sites and final inspections that need to pass first time.",
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
    relatedServices: ["commercial-make-good", "warehouse-make-good", "office-strip-out"],
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
    relatedServices: ["warehouse-make-good", "pallet-racking-removal", "commercial-make-good"],
    category: "make-good",
    published: true
  },
  {
    name: "Structural Remediation",
    slug: "structural-remediation",
    title: "Structural Remediation Melbourne",
    metaTitle: "Structural Remediation Melbourne | Concrete & Steel",
    description: "From minor concrete repairs to large-scale retention structure projects, we deliver structural remediation solutions across Melbourne's commercial and industrial properties. Our team has the expertise and resources to tackle complex structural challenges—whether it's a deteriorating warehouse floor slab, failing balcony waterproofing or a retention wall requiring reinforcement. We work closely with structural engineers, councils and building managers to develop compliant, cost-effective solutions that restore structural integrity and extend asset life.",
    metaDescription: "Structural remediation Melbourne. Concrete cancer treatment, floor slab repairs, waterproofing and membrane systems. Engineered solutions for commercial properties.",
    heroText: "Comprehensive structural remediation services to restore integrity and extend the service life of your commercial or industrial property. Expert assessment and engineered solutions.",
    heroImage: warehouseFloorSlabDamageImage,
    heroImageAlt: "Deteriorating warehouse floor slab with structural cracks and spalling at control joints requiring remediation Melbourne",
    secondaryImage: retentionWallConstructionImage,
    secondaryImageAlt: "Large-scale retention wall formwork with steel reinforcement and crane demonstrating structural construction capabilities Melbourne",
    featuredSections: [
      {
        title: "Warehouse Floor Repairs",
        description: "Industrial floors suffer from bolt holes, cracks, failed joints and settlement issues. Our dedicated [warehouse floor repairs](/services/warehouse-floor-repairs) service covers bolt hole filling, crack injection, joint restoration and slab stabilization—whether for lease end dilapidations or operational maintenance.",
        image: warehouseFloorSlabDamageImage,
        imageAlt: "Damaged warehouse floor slab with cracks and deterioration requiring structural floor repairs Melbourne"
      },
      {
        title: "Waterproofing & Membrane Systems",
        description: "Water ingress is one of the leading causes of structural deterioration in commercial buildings. We provide professional waterproofing and membrane solutions for car parks, balconies, rooftops and podium decks. From hotel and office balconies to warehouse roofing leaks, our waterproofing systems protect your structure from moisture damage and extend asset life.",
        image: waterproofingMembraneImage,
        imageAlt: "Professional waterproofing membrane application on commercial building surface Melbourne"
      },
      {
        title: "Concrete Cancer Rectification",
        description: "Concrete cancer occurs when steel reinforcement inside concrete rusts and expands—cracking and displacing the surrounding structure. Left untreated, it compromises structural integrity and accelerates deterioration. Our rectification process involves removing damaged concrete, treating corroded steel with rust inhibitors and protective coatings, then restoring the surface with engineered repair mortars designed for long-term durability.",
        image: concreteCancerImage,
        imageAlt: "Severe concrete cancer on structural column showing exposed corroded steel reinforcement and spalling concrete requiring remediation Melbourne"
      }
    ],
    benefits: [
      "Warehouse floor slab remediation",
      "Waterproofing and membrane systems",
      "Retention structure remediation",
      "Steel framework retrofitting",
      "Concrete cancer rectification",
      "Car park and balcony waterproofing",
      "Structural engineer and council liaison",
      "Engineered repair solutions"
    ],
    process: [
      { step: "Structural Assessment", description: "Comprehensive assessment of compromised structures to identify deterioration, corrosion and safety concerns." },
      { step: "Engineering Solutions", description: "We coordinate with structural engineers to develop compliant solutions tailored to your specific requirements." },
      { step: "Remediation Works", description: "Expert treatment and precision correction of steel and concrete elements to restore structural integrity." },
      { step: "Compliance Sign-off", description: "Final inspection and documentation for structural engineers, councils and building managers as required." }
    ],
    ctaBlock: {
      title: "Let Us Handle Your Structural Remediation",
      subtitle: "We do makegoods all day, every day.",
      text: "From concrete cancer to retention walls, we've delivered structural solutions across Melbourne's commercial properties. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["warehouse-floor-repairs", "warehouse-make-good", "commercial-make-good"],
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
    relatedServices: ["structural-remediation", "commercial-make-good", "office-strip-out"],
    category: "structural",
    published: true
  },
  {
    name: "Concrete Slab Restoration",
    slug: "concrete-slab-restoration",
    title: "Concrete Slab Restoration Melbourne",
    metaTitle: "Concrete Slab Restoration Melbourne | Industrial Floor Specialists",
    description: "End of lease and your concrete floor needs to be restored? We remove carpet, vinyl, tiles, adhesives and coatings—then grind and prepare the slab to handover-ready condition. Our advanced grinding equipment can fully ablate concrete surfaces, removing contamination that traditional floor grinding devices are unable to remove.",
    metaDescription: "Professional concrete slab restoration and floor grinding services in Melbourne. We remove carpet, tiles, vinyl, adhesives and coatings—then grind and prepare your warehouse or commercial floor to handover-ready condition.",
    heroText: "Your lease requires the concrete floor restored to original condition. We handle the full scope—flooring removal, adhesive grinding, coating removal and slab preparation. Whether your lease requires [epoxy restoration](/services/epoxy-flooring) or the slab needs sealing—we can provide you with solutions that meet your obligations.",
    heroImage: concreteSlabRestorationHeroImage,
    heroImageAlt: "Industrial warehouse concrete slab with freshly ground and sealed floor showing light reflection and grinding swirl patterns Melbourne",
    secondaryImage: lineMarkingWornFloorImage,
    secondaryImageAlt: "Worn industrial warehouse floor with faded line markings requiring concrete slab restoration Melbourne",
    trustBadges: [
      "Diamond-Tipped Grinding Technology",
      "Heavy-Duty Industrial Equipment",
      "Warehouse & Factory Specialists"
    ],
    featuredSections: [
      {
        title: "Flooring & Tile Removal",
        description: "Complete removal of all floor coverings—commercial carpet tiles, broadloom, sheet vinyl, LVT, vinyl planks and linoleum. We also strip ceramic, porcelain and quarry tiles from floors and walls, then grind away adhesive beds, carpet glue and [failed epoxy coatings](/services/epoxy-flooring). We remove waterproofing membranes, wall glue and surface coatings that standard contractors leave behind.",
        image: tileFlooringRemovalImage,
        imageAlt: "Demolition hammer removing floor tiles during commercial flooring strip out Melbourne"
      },
      {
        title: "Concrete Grinding & Preparation",
        description: "Our heavy-duty floor grinders use diamond-encrusted cup wheels on spinning discs to pulverise and ablate concrete surfaces. Different grit ratios produce different finishes—from aggressive coating removal to smooth, polished results. For floors with cracks, dynabolt holes or joint damage, see our [warehouse floor repairs](/services/warehouse-floor-repairs) service.",
        image: concreteFloorGrinderImage,
        imageAlt: "Worker operating industrial concrete floor grinder with vacuum dust extraction in Melbourne warehouse",
        imagePosition: "right"
      },
      {
        title: "Grind & Seal Finishes",
        description: "For floors requiring a finished surface rather than raw concrete, we offer grind and seal services. After grinding removes old coatings and levels the surface, we apply protective sealants in matte, semi-gloss or high-gloss finishes. The sealed surface resists spills, stains, tyre marks and wear—creating a low-maintenance floor that enhances natural light and dust resistance.",
        image: grindSealFloorCoatingImage,
        imageAlt: "Worker applying protective floor sealant coating to ground concrete warehouse floor with spiked roller shoes Melbourne"
      }
    ],
    benefits: [
      "Concrete Slab Restoration",
      "Carpet, Tile & Vinyl Strip-Out",
      "Adhesive & Coating Grinding",
      "Waterproofing Membrane Removal",
      "Heavy Industrial Slab Grind Capability",
      "Epoxy & Line Marking Removal",
      "Warehouse End of Lease Specialists",
      "Compliant Waste Disposal",
      "Surface Leveling & Preparation"
    ],
    comparison: {
      title: "Why Choose Make Good Melbourne?",
      specialistTitle: "Make Good Melbourne",
      regularTitle: "Standard Contractors",
      items: [
        { feature: "Equipment", specialist: "Heavy-duty industrial grinders that fully ablate surfaces", regular: "Standard grinding equipment with limited capability" },
        { feature: "Scale", specialist: "Warehouse floors 500sqm+, multi-level buildings", regular: "Smaller commercial spaces" },
        { feature: "Scope", specialist: "Full service: removal, grinding, preparation, disposal", regular: "Single trade only" },
        { feature: "Specialty", specialist: "End of lease compliance and make good", regular: "General floor preparation" },
        { feature: "Focus", specialist: "Guaranteed handover-ready results", regular: "Variable finish quality" }
      ]
    },
    faqs: [
      {
        question: "What types of flooring can you remove?",
        answer: "We remove all commercial floor coverings including carpet tiles, broadloom carpet, sheet vinyl, luxury vinyl tiles (LVT), vinyl planks, linoleum, ceramic tiles, porcelain tiles, and quarry tiles. We also remove underlay, gripper rods, and all associated fixtures."
      },
      {
        question: "What makes your grinding equipment different?",
        answer: "We use heavy-duty industrial floor grinders that can fully ablate concrete surfaces—removing coatings, adhesives, and contamination that standard grinding equipment cannot touch. Our machines are remote-operated for precision and safety, and include integrated dust extraction for cleaner worksites."
      },
      {
        question: "Do you handle waste disposal?",
        answer: "Yes, all waste removal and disposal is included in our service. We compliantly dispose of all flooring materials, adhesives, and debris. You won't need to arrange skip bins or separate waste contractors."
      },
      {
        question: "Will this satisfy my lease make good requirements?",
        answer: "Absolutely. We specialise in end of lease floor restoration and understand exactly what landlords and property managers require. We ensure your concrete slab meets handover standards and can provide documentation and condition reports if needed."
      },
      {
        question: "Can you remove carpet glue and tile adhesive from concrete?",
        answer: "Yes, adhesive removal is one of our core services. We grind away carpet glue, tile adhesive beds, vinyl adhesive, and failed epoxy coatings. Our industrial grinders remove even the most stubborn residue that stops standard contractors, leaving clean concrete ready for inspection or new flooring."
      },
      {
        question: "What condition will the concrete be in after grinding?",
        answer: "After grinding, your concrete slab will have a clean, uniform surface free of coatings, adhesives, and contamination. The finish can range from a smooth, polished look to a textured profile depending on your requirements. The floor will be ready for handover, new flooring installation, or epoxy coating."
      },
      {
        question: "Do you work on occupied or operational warehouses?",
        answer: "Yes, we regularly work in operational facilities. Our dust-controlled grinding equipment minimises disruption, and we can work in stages or after hours to accommodate your business operations. We'll discuss scheduling and access requirements during our site assessment."
      },
      {
        question: "Can you grind floors with oil stains or chemical contamination?",
        answer: "Yes, our heavy-duty grinders can ablate contaminated concrete surfaces, removing oil stains, chemical spills, and other contamination that has penetrated the slab. For severe contamination, we may recommend additional treatment or sealing after grinding."
      },
      {
        question: "Do you provide before and after documentation?",
        answer: "Yes, we can provide photographic documentation of the floor condition before and after our work. This is useful for lease handovers and can serve as evidence that make good requirements have been met."
      },
      {
        question: "What is grind and seal, and when is it recommended?",
        answer: "Grind and seal is a two-phase process: first, we grind the concrete to remove old coatings, stains and surface imperfections using diamond-encrusted cup wheels. Then we apply a protective sealant in matte, semi-gloss or high-gloss finish. The sealed surface resists spills, stains, tyre marks and abrasion—ideal when you need a finished floor rather than raw concrete for handover or continued use."
      }
    ],
    ctaBlock: {
      title: "Restore Your Concrete Floor",
      subtitle: "We do makegoods all day, every day.",
      text: "From warehouse slabs to office floors, we've restored hundreds of concrete surfaces across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["warehouse-floor-repairs", "warehouse-make-good", "epoxy-flooring", "commercial-make-good"],
    category: "demolition",
    published: true
  },
  {
    name: "Carpet Removal",
    slug: "carpet-removal",
    title: "Commercial Carpet Removal Melbourne",
    metaTitle: "Commercial Carpet Removal Melbourne | Fast Strip Out",
    description: "Professional carpet removal for commercial spaces. We strip carpet tiles, broadloom and underlay, dispose of waste compliantly and prepare floors for next tenant or new coverings.",
    metaDescription: "Commercial carpet removal Melbourne. Office and retail carpet strip out, underlay removal, floor preparation. Fast turnaround, full disposal included. Free quotes.",
    heroText: "Complete carpet removal for offices, retail and commercial spaces—including underlay, gripper rods and adhesive residue.",
    benefits: [
      "Carpet tiles and broadloom removal",
      "Underlay and gripper rod strip out",
      "Adhesive residue removal",
      "Floor preparation for new coverings",
      "Compliant waste disposal",
      "Fast turnaround available"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Carpet Removal",
      subtitle: "We do makegoods all day, every day.",
      text: "We've stripped carpet from hundreds of commercial spaces across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["concrete-slab-restoration", "vinyl-removal", "adhesive-removal"],
    category: "demolition",
    published: false
  },
  {
    name: "Vinyl Removal",
    slug: "vinyl-removal",
    title: "Commercial Vinyl Flooring Removal Melbourne",
    metaTitle: "Commercial Vinyl Removal Melbourne | Floor Strip Out",
    description: "Specialist vinyl flooring removal for commercial and healthcare facilities. We remove sheet vinyl, LVT and vinyl tiles, including stubborn adhesives, leaving floors ready for restoration.",
    metaDescription: "Commercial vinyl flooring removal Melbourne. Sheet vinyl, LVT and vinyl tile strip out. Adhesive grinding included. Medical, retail and office specialists. Free quotes.",
    heroText: "Expert removal of sheet vinyl, luxury vinyl tiles and vinyl planks—including the adhesive that makes them so difficult to remove.",
    benefits: [
      "Sheet vinyl and welded seam removal",
      "LVT and vinyl plank strip out",
      "Vinyl tile removal",
      "Adhesive grinding and preparation",
      "Subfloor assessment and repair",
      "Healthcare and cleanroom experience"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Vinyl Removal",
      subtitle: "We do makegoods all day, every day.",
      text: "From medical centres to retail stores, we've removed vinyl flooring across Melbourne's commercial properties. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["concrete-slab-restoration", "carpet-removal", "adhesive-removal"],
    category: "demolition",
    published: false
  },
  {
    name: "Tile Removal",
    slug: "tile-removal",
    title: "Commercial Tile Removal Melbourne",
    metaTitle: "Commercial Tile Removal Melbourne | Floor & Wall",
    description: "Professional tile removal for commercial kitchens, bathrooms and retail spaces. We remove ceramic, porcelain and quarry tiles from floors and walls, including adhesive bed preparation.",
    metaDescription: "Commercial tile removal Melbourne. Floor and wall tile strip out for kitchens, bathrooms and retail. Adhesive bed removal included. Licensed contractors. Free quotes.",
    heroText: "Complete tile removal from floors and walls—ceramic, porcelain, quarry tiles and mosaics, with adhesive bed grinding for a clean substrate.",
    benefits: [
      "Floor and wall tile removal",
      "Ceramic, porcelain and quarry tiles",
      "Adhesive bed grinding",
      "Substrate preparation",
      "Dust minimisation systems",
      "Commercial kitchen specialists"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Tile Removal",
      subtitle: "We do makegoods all day, every day.",
      text: "From restaurant kitchens to retail fitouts, we've removed tiles across Melbourne's commercial properties. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["concrete-slab-restoration", "vinyl-removal", "adhesive-removal"],
    category: "demolition",
    published: false
  },
  {
    name: "Adhesive Removal",
    slug: "adhesive-removal",
    title: "Floor Adhesive Removal Melbourne",
    metaTitle: "Floor Adhesive Removal Melbourne | Grinding & Preparation",
    description: "Stubborn floor adhesive stopping your make good? We grind, scarify and remove carpet glue, vinyl adhesive, tile bed and epoxy residue to leave clean concrete ready for handover or new flooring.",
    metaDescription: "Floor adhesive removal Melbourne. Carpet glue, vinyl adhesive, tile bed grinding. Industrial floor preparation for make good and new coverings. Free quotes.",
    heroText: "The floor covering is gone but the adhesive remains. We grind, scarify and prepare concrete substrates to remove every trace of old adhesives.",
    benefits: [
      "Carpet adhesive grinding",
      "Vinyl glue removal",
      "Tile adhesive bed scarifying",
      "Epoxy coating removal",
      "Concrete surface preparation",
      "Dust extraction systems"
    ],
    ctaBlock: {
      title: "Let Us Handle Your Adhesive Removal",
      subtitle: "We do makegoods all day, every day.",
      text: "We've prepared hundreds of commercial floors across Melbourne, removing stubborn adhesives for smooth handovers. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["concrete-slab-restoration", "carpet-removal", "vinyl-removal", "tile-removal"],
    category: "demolition",
    published: false
  },
  {
    name: "Waterproofing",
    slug: "waterproofing",
    title: "Waterproofing Melbourne",
    metaTitle: "Waterproofing Melbourne | Commercial & Industrial Specialists",
    description: "Failed waterproofing causes costly damage to buildings—from balcony leaks penetrating into units below to roof failures flooding commercial spaces. We deliver professional waterproofing solutions for balconies, roofs, wet areas and podiums using quality membrane systems built to last.",
    metaDescription: "Commercial waterproofing Melbourne. Balcony membranes, roof waterproofing, wet area sealing and podium deck systems. Licensed applicators, warranty included. Free quotes.",
    heroText: "Water finds every weakness. Failed balcony membranes leak into apartments below. Deteriorated roof coatings let moisture into ceiling cavities. We apply proven membrane systems that protect your building for decades—not just pass the next inspection.",
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
    relatedServices: ["structural-remediation", "cladding-glazing", "concrete-floor-repair"],
    category: "structural",
    published: true
  },
  {
    name: "Warehouse Floor Repairs",
    slug: "warehouse-floor-repairs",
    title: "Warehouse Floor Repairs Melbourne",
    metaTitle: "Warehouse Floor Repairs Melbourne | Dynabolt Holes & Crack Repairs",
    description: "Specialist warehouse floor repair services across Melbourne. We fix dynabolt holes, cracks, damaged joints, settlement voids and surface deterioration—restoring your industrial floor to full working condition. Whether you're addressing dilapidations for lease end or maintaining a working facility, our team delivers lasting repairs that meet structural and safety requirements.",
    metaDescription: "Warehouse floor repairs Melbourne. Professional dynabolt hole filling, concrete crack injection, joint restoration and slab levelling. Lease end dilapidations experts. Free quotes.",
    heroText: "Industrial floors take a beating—forklift traffic, heavy loads, racking anchors and years of wear. We repair damaged warehouse floors across Melbourne: dynabolt holes, cracks, failed joints, settlement voids and surface deterioration. Lasting repairs that restore structural integrity.",
    heroImage: warehouseFloorRepairsHeroImage,
    heroImageAlt: "Worn warehouse floor with deteriorated line markings requiring repair Melbourne",
    secondaryImage: warehouseFloorRepairsScopeImage,
    secondaryImageAlt: "Empty warehouse with polished concrete floor and safety bollards after floor repairs Melbourne",
    trustBadges: [
      "Industrial Floor Specialists",
      "Epoxy & Polyurethane Systems",
      "Structural Repair Solutions"
    ],
    featuredSections: [
      {
        title: "Dynabolt Hole Repairs",
        description: "When pallet racking, machinery or equipment is removed, you're left with hundreds of anchor holes in your floor. We core drill out damaged concrete around dynabolt holes, fill with high-strength epoxy resin, and grind flush to restore a smooth, level surface. Essential for [lease end make goods](/services/warehouse-make-good) and floor re-coating.",
        image: warehouseDynaboltHoleRepairsImage,
        imageAlt: "Warehouse pallet racking with dynabolt holes in concrete floor requiring epoxy filling Melbourne"
      },
      {
        title: "Crack Repairs",
        description: "Floor cracks compromise structural integrity and create trip hazards. We use epoxy injection to fill and bond cracked concrete from within, restoring load-bearing capacity. For wider cracks, we rout and seal with flexible polyurethane that accommodates movement. Surface cracks are ground out and filled flush for a seamless finish.",
        image: warehouseFloorSlabDamageImage,
        imageAlt: "Cracked warehouse floor slab requiring epoxy injection repair Melbourne"
      },
      {
        title: "Joint Repairs",
        description: "Control joints, construction joints and movement joints take the brunt of forklift traffic. Failed joints cause edge spalling, trip hazards and accelerated deterioration. We repair damaged joint edges with epoxy mortar, re-cut joints to proper depth, and install appropriate sealants—rigid for construction joints, flexible for movement joints.",
        image: concreteFloorJointImage,
        imageAlt: "Concrete floor expansion joint with metal strip sealant in warehouse Melbourne"
      },
      {
        title: "Slab Stabilisation",
        description: "Settlement, voids and rocking slabs indicate problems beneath the surface. We inject polyurethane foam or cementitious grout to fill voids, stabilise settlement and re-level sunken sections. This non-invasive approach avoids costly slab replacement and restores load-bearing capacity across the affected area.",
        image: polyurethaneFoamInjectionImage,
        imageAlt: "Polyurethane foam injection for concrete slab stabilisation Melbourne"
      },
      {
        title: "Floor Grinding & Levelling",
        description: "Uneven floors, high spots and surface deterioration affect forklift operation and safety. Our [industrial floor grinding](/services/concrete-slab-restoration) equipment levels surfaces, removes coatings and prepares floors for [epoxy systems](/services/epoxy-flooring) or grind-and-seal finishes. We restore flatness tolerances required for efficient warehouse operations.",
        image: floorGrindingMachineImage,
        imageAlt: "Industrial floor grinding machine on polished concrete warehouse floor Melbourne"
      }
    ],
    processAfterSection: 2, // Show process after "Joint Repairs"
    benefits: [
      "Dynabolt Hole Filling & Floor Restoration",
      "Crack Injection & Structural Bonding",
      "Joint Edge Repair & Re-sealing",
      "Slab Stabilisation & Void Filling",
      "Floor Levelling & Surface Grinding",
      "Epoxy & Polyurethane Repair Systems",
      "Lease End Dilapidations",
      "Minimal Downtime Solutions"
    ],
    comparison: {
      title: "Professional vs Patch Repairs",
      specialistTitle: "Make Good Melbourne",
      regularTitle: "General Contractors",
      items: [
        { feature: "Dynabolt holes", specialist: "Core drill, epoxy fill, grind flush to original surface", regular: "Basic mortar patching that shrinks and cracks" },
        { feature: "Crack repairs", specialist: "Epoxy injection restores structural bond, flexible sealants for movement joints", regular: "Surface filling that doesn't address subsurface damage" },
        { feature: "Joint repairs", specialist: "Edge rebuild, proper re-cutting, appropriate sealant selection", regular: "Generic caulking that fails under traffic" },
        { feature: "Slab issues", specialist: "Polyurethane injection to stabilise voids and settlement", regular: "Overlay patches that don't address root cause" },
        { feature: "Equipment", specialist: "Industrial grinders, injection systems, diamond tooling", regular: "Hand tools and standard concrete products" },
        { feature: "Outcome", specialist: "Lasting repairs that meet lease and operational requirements", regular: "Temporary fixes requiring repeat work" }
      ]
    },
    faqs: [
      {
        question: "What causes dynabolt holes and how are they repaired?",
        answer: "Dynabolt holes are left when racking, machinery or equipment anchored to your floor is removed. Dynabolts and chemical anchors leave holes 12-20mm in diameter. We core drill around each hole to remove damaged concrete, fill with high-strength epoxy resin, and grind flush to the surrounding surface. The result is a smooth, level floor ready for handover or re-coating."
      },
      {
        question: "How do you repair cracks in warehouse floors?",
        answer: "We use different methods depending on crack type. For structural cracks, we inject low-viscosity epoxy that flows into the crack and bonds the concrete together, restoring load-bearing capacity. For movement cracks (at joints or where slabs meet walls), we rout out the crack and fill with flexible polyurethane sealant that accommodates ongoing movement without failing."
      },
      {
        question: "What's the difference between construction joints, control joints and movement joints?",
        answer: "Construction joints are where concrete pours meet—they're not designed to move. Control joints are saw-cut grooves that encourage cracks to form in a controlled location. Movement joints accommodate expansion, contraction and structural movement. Each requires different repair approaches: rigid epoxy for construction joints, semi-rigid fillers for control joints, and flexible sealants for movement joints."
      },
      {
        question: "How does slab stabilisation work?",
        answer: "When floor slabs settle, rock or have voids beneath them, we inject expanding polyurethane foam or cementitious grout through small drilled holes. The material fills voids, compacts loose soil and lifts settled sections back to level. This is far less disruptive than breaking out and replacing concrete, and the floor can return to service within hours."
      },
      {
        question: "Can you repair floors while the warehouse is operational?",
        answer: "In many cases, yes. We can section off repair areas and work progressively to maintain access to operational zones. Epoxy and polyurethane systems cure quickly—often allowing foot traffic within hours and forklift traffic within 24 hours. We'll plan the work to minimise disruption to your operations."
      },
      {
        question: "Are these repairs suitable for lease end make good?",
        answer: "Absolutely. Floor dilapidations are a common lease obligation. Our repairs restore floors to the condition required by your lease—whether that's filling all dynabolt holes, repairing cracks, or addressing joint damage. We provide documentation and photos for your landlord or property manager."
      },
      {
        question: "How long do warehouse floor repairs take?",
        answer: "Timing depends on scope. A standard warehouse with 200-500 dynabolt holes typically takes 2-3 days. Crack injection and joint repairs can often be completed in 1-2 days. We provide accurate timelines after inspection and can stage work to maintain partial warehouse access during repairs."
      },
      {
        question: "What is the cost of warehouse floor repairs in Melbourne?",
        answer: "Costs vary based on damage type and extent. Dynabolt hole filling is typically priced per hole, while crack and joint repairs depend on linear metres. We provide free, itemised quotes after inspecting your floor so you know exactly what to expect before work begins."
      }
    ],
    process: [
      { step: "Floor Assessment", description: "We inspect your floor to identify all damage: dynabolt holes, cracks, joint failures, settlement areas and surface deterioration." },
      { step: "Repair Specification", description: "Based on damage type and your requirements (lease end vs operational), we specify appropriate repair methods and materials." },
      { step: "Repair Execution", description: "Our team completes repairs using industrial equipment and professional-grade epoxy, polyurethane and cementitious systems." },
      { step: "Handover Ready", description: "Completed repairs are ground flush and documented. Your floor is ready for inspection, coating or continued operations." }
    ],
    ctaBlock: {
      title: "Let Us Repair Your Warehouse Floor",
      subtitle: "We do makegoods all day, every day.",
      text: "From dynabolt hole filling to slab stabilisation, we've repaired warehouse floors across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["concrete-slab-restoration", "epoxy-flooring", "pallet-racking-removal", "warehouse-make-good"],
    category: "structural",
    published: true
  },
  {
    name: "Skylight & Roof Panel Replacement",
    slug: "skylight-roof-panel-replacement",
    title: "Industrial Skylight & Roof Panel Replacement Melbourne",
    metaTitle: "Industrial Skylight Replacement Melbourne | Ampelite Fibreglass Roofing Specialists",
    description: "Professional industrial skylight and roof panel replacement for Melbourne warehouses, factories and commercial buildings. We install Australian-made Ampelite fibreglass roofing sheets with up to 25 years warranty—eliminating leaks, improving natural light and reducing energy costs.",
    metaDescription: "Industrial skylight replacement Melbourne. Ampelite fibreglass roofing specialists. Warehouse skylights, leak repairs, roof sheet replacement. Up to 25yr warranty. Free quotes.",
    heroText: "Transform your warehouse with natural light and eliminate roof leaks. We install premium Ampelite fibreglass skylights designed for Melbourne's harshest industrial conditions.",
    heroImage: undefined,
    heroImageAlt: "Industrial warehouse skylight replacement Melbourne - Ampelite fibreglass roofing installation",
    secondaryImage: undefined,
    secondaryImageAlt: "Commercial fibreglass skylight sheets installation Melbourne industrial building",
    trustBadges: [
      "Ampelite Certified",
      "25 Year Warranty",
      "Height Safety Compliant",
      "Australian Made Materials"
    ],
    benefits: [
      "Ampelite fibreglass skylight installation",
      "Industrial roof sheet replacement",
      "Warehouse skylight repairs",
      "UV-protected panels (99.9% UV blocking)",
      "Leak detection and waterproofing",
      "Metal roof sheet replacement",
      "Energy-efficient natural lighting",
      "Reduced air-conditioning costs",
      "Height safety certified crews",
      "End of lease compliance"
    ],
    comparison: {
      title: "Ampelite Fibreglass vs Old Skylight Sheets",
      specialistTitle: "New Ampelite Panels",
      regularTitle: "Aged/Damaged Panels",
      items: [
        {
          feature: "Light Transmission",
          specialist: "Up to 90% natural light diffusion",
          regular: "Yellowed, reduced light (often <40%)"
        },
        {
          feature: "UV Protection",
          specialist: "Solasafe blocks 99.9% harmful UV",
          regular: "Degraded UV protection, sun damage"
        },
        {
          feature: "Heat Management",
          specialist: "Low heat transmission, cooler workspace",
          regular: "High heat transfer, increased cooling costs"
        },
        {
          feature: "Weather Resistance",
          specialist: "25 year manufacturer warranty",
          regular: "Cracked, brittle, prone to leaks"
        },
        {
          feature: "Durability",
          specialist: "Australian-made, industrial-grade",
          regular: "Deteriorated, safety hazard"
        }
      ]
    },
    featuredSections: [
      {
        title: "Ampelite Fibreglass Roofing Specialists",
        description: "We exclusively install Ampelite fibreglass roofing products—Australia's leading manufacturer with over 50 years in the industry. Ampelite panels are lightweight yet incredibly durable, designed specifically for commercial and industrial buildings. With up to 70 profile options including Trimdek, Klip-Lok, Custom Orb and Spandek, we match your existing roof seamlessly. Premium Solasafe panels block 99.9% of harmful UV rays while maintaining excellent light transmission, creating safer and brighter workspaces.",
        image: undefined,
        imageAlt: "Ampelite fibreglass roofing sheets installation industrial warehouse Melbourne"
      },
      {
        title: "Reduce Energy Costs & Improve Productivity",
        description: "Old, yellowed skylights don't just look bad—they cost you money. Damaged panels reduce natural light, forcing reliance on artificial lighting and increasing electricity bills. Studies show natural light directly improves employee morale, concentration and productivity. Ampelite fibreglass panels provide diffused light with low heat transmission, reducing both lighting and air-conditioning costs. The Australian Bureau of Statistics reports workplace absenteeism costs around $2,700 per employee annually—quality skylights help create healthier, more productive environments.",
        image: undefined,
        imageAlt: "Natural light warehouse skylight energy savings Melbourne"
      },
      {
        title: "Industrial Roof Leak Repairs",
        description: "Leaking skylights cause damage to stock, plant and equipment, and may affect your insurance claims. Cracked, aged or incorrectly sealed skylight sheets are the most common cause of industrial roof leaks. We inspect your entire roof to identify leak sources, replace damaged panels with quality fibreglass sheets, and ensure proper flashing and sealing. Our repairs address the root cause—not just the symptoms—providing long-lasting protection for your assets.",
        image: undefined,
        imageAlt: "Industrial roof leak repair skylight replacement Melbourne warehouse"
      },
      {
        title: "End of Lease Skylight Compliance",
        description: "Commercial and industrial leases often require skylights and roof panels to be returned in original condition. Cracked, discoloured or leaking panels typically fail landlord inspections, risking bond deductions. We assess your skylights against lease requirements, provide detailed scopes for property manager approval, and complete replacements with quality Australian-made materials. Full documentation including VBA Certificate of Compliance issued on completion.",
        image: undefined,
        imageAlt: "End of lease skylight inspection commercial property Melbourne"
      }
    ],
    processAfterSection: 1,
    process: [
      {
        step: "Free Roof Inspection",
        description: "We assess all skylights and roof panels, documenting damage, discolouration, leaks and identifying the right Ampelite product for your facility."
      },
      {
        step: "Quote & Specification",
        description: "Detailed scope with panel specifications, profile matching, quantities and pricing. We handle landlord approvals for make good projects."
      },
      {
        step: "Professional Installation",
        description: "Height-safety certified crews remove old panels and install new Ampelite fibreglass sheets with proper flashing and sealing."
      },
      {
        step: "Handover & Warranty",
        description: "Final inspection, leak testing, 10 year workmanship warranty, and VBA Certificate of Compliance for your records."
      }
    ],
    faqs: [
      {
        question: "What is Ampelite and why do you use it?",
        answer: "Ampelite is one of Australia's leading manufacturers of fibreglass roofing sheets, with over 50 years in the industry. Their products are 100% Australian-made, compliant with Australian Standards, and come with up to 25 years manufacturer warranty. We use Ampelite exclusively because of their proven durability, energy efficiency, and the wide range of profiles available to match any existing industrial roof."
      },
      {
        question: "How do I know if my skylights need replacing?",
        answer: "Common signs include yellowing or discolouration (reducing light transmission below 50%), visible cracks or crazing, water leaks during rain, brittleness when touched, and panels exceeding their 15-20 year lifespan. Damaged skylights also become safety hazards. We provide free inspections to assess condition and recommend the appropriate solution."
      },
      {
        question: "What's the difference between fibreglass and polycarbonate skylights?",
        answer: "Fibreglass (like Ampelite) offers superior durability, better UV resistance, lower heat transmission, and longer warranties compared to polycarbonate. While polycarbonate is cheaper initially, fibreglass panels maintain light transmission longer, resist yellowing, and typically last 20-25 years versus 10-15 for polycarbonate in industrial applications."
      },
      {
        question: "How much can new skylights reduce energy costs?",
        answer: "Quality skylights reduce both lighting and cooling costs. By maximising diffused natural light, you reduce artificial lighting requirements during daylight hours. Ampelite's heat-reflective properties also reduce transmitted temperatures, improving air-conditioning efficiency. Depending on your facility, savings of 15-30% on lighting costs are typical."
      },
      {
        question: "Is skylight replacement required for end of lease?",
        answer: "It depends on your lease terms and the condition when you took possession. If skylights have deteriorated beyond fair wear and tear, or your lease specifies original condition return, replacement is typically required. We review lease requirements, provide documentation for landlord approval, and issue VBA Certificates of Compliance on completion."
      },
      {
        question: "How long does industrial skylight replacement take?",
        answer: "Most warehouse skylight replacements are completed in 1-3 days depending on scope and access requirements. Larger projects may take longer. We schedule work to minimise operational disruption and can work outside business hours for 24-hour facilities. We coordinate with your operations team throughout."
      },
      {
        question: "Do you replace metal roof sheets as well as skylights?",
        answer: "Yes, we handle complete industrial roof replacements including metal roof sheeting (Colorbond, Zincalume), as well as targeted repairs for rust, corrosion, storm damage and leaks. We can replace individual damaged sheets or undertake full roof re-sheeting projects."
      },
      {
        question: "What about asbestos roof panels?",
        answer: "If asbestos-containing materials are identified during inspection, we engage licensed asbestos removalists to safely remove and dispose of materials before installing new panels. We coordinate the entire process and ensure full compliance with EPA and WorkSafe regulations."
      }
    ],
    ctaBlock: {
      title: "Leaking Skylights or Need More Natural Light?",
      subtitle: "We do industrial roofing all day, every day.",
      text: "From single skylight replacements to full warehouse roof resheeting, we've restored skylights and roofs across Melbourne's industrial properties. Quality Ampelite materials, height-safety compliant crews, and workmanship warranties you can trust. Get in touch today for a free inspection and quote."
    },
    relatedServices: ["warehouse-make-good", "waterproofing", "cladding-glazing", "commercial-make-good"],
    category: "structural",
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
