import commercialCleaningImage from "@/assets/services/commercial-cleaning-melbourne-supplies.jpeg";
import commercialFloorSweepingImage from "@/assets/services/commercial-floor-sweeping-concrete-melbourne.jpeg";
import epoxyFlooringWarehouseImage from "@/assets/services/polished-epoxy-floor-industrial-warehouse-melbourne.jpeg";
import epoxySpreadingApplicationImage from "@/assets/services/epoxy-floor-spreading-application-warehouse-melbourne.jpeg";
import warehouseFloorScrubberImage from "@/assets/services/warehouse-floor-scrubber-cleaning-v4.jpg";
import industrialFloorScrubberImage from "@/assets/services/industrial-ride-on-floor-scrubber-warehouse-melbourne.png";
import highPressureWarehouseCleaningImage from "@/assets/services/high-pressure-warehouse-cleaning-melbourne.png";
import warehouseRelocationImage from "@/assets/services/warehouse-relocation-forklift-loading-racking-melbourne.png";
import palletRackingHeroImage from "@/assets/services/pallet-racking-dismantling-warehouse-floor-melbourne.jpeg";
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
import concreteSlabRestorationHeroImage from "@/assets/hero-warehouse-industrial.jpg";
import concretePowerTrowelImage from "@/assets/services/concrete-power-trowel-slab-restoration-melbourne.jpeg";

export interface FeaturedSection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
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
    heroText: "Your warehouse floor takes a beating. Epoxy coating protects the concrete, hides the damage and gives you a surface that's easy to clean, safe to work on and built to last. Whether you're refreshing for a new tenant or upgrading your own facility—we deliver.",
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
    ctaBlock: {
      title: "Let Us Handle Your Epoxy Flooring",
      subtitle: "We do makegoods all day, every day.",
      text: "From small workshops to large distribution centres, we've coated floors across Melbourne's industrial properties. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["concrete-floor-repair", "warehouse-make-good", "line-marking"],
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
    relatedServices: ["warehouse-make-good", "commercial-make-good", "office-strip-out"],
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
    metaDescription: "Concrete slab restoration Melbourne. Industrial floor grinding, adhesive removal, carpet and tile strip out. Heavy-duty equipment for warehouse and commercial floors. Free quotes.",
    heroText: "Your lease requires the concrete floor restored to original condition. We handle the full scope—flooring removal, adhesive grinding, coating removal and slab preparation. One contractor, one handover-ready result.",
    heroImage: concreteSlabRestorationHeroImage,
    heroImageAlt: "Large industrial warehouse with polished concrete floor ready for slab restoration Melbourne",
    secondaryImage: epoxyFlooringWarehouseImage,
    secondaryImageAlt: "Industrial concrete floor after professional slab restoration and grinding Melbourne",
    trustBadges: [
      "Heavy-Duty Industrial Equipment",
      "Warehouse & Factory Specialists",
      "Complete Floor Restoration"
    ],
    featuredSections: [
      {
        title: "Concrete Grinding & Preparation",
        description: "Our advanced grinding equipment can fully ablate concrete surfaces—removing coatings, adhesives and contamination that traditional floor grinding devices are unable to remove. We use heavy-duty industrial grade floor grinding machines that restore even heavily damaged floors to like-new condition. Surface leveling, coating removal and slab finishing to meet the strictest lease requirements.",
        image: concretePowerTrowelImage,
        imageAlt: "Power trowel concrete finishing machine restoring industrial warehouse floor Melbourne"
      },
      {
        title: "Flooring Removal",
        description: "Complete removal of soft floor coverings including commercial carpet tiles, broadloom, underlay and gripper rods. We also strip sheet vinyl, luxury vinyl tiles (LVT), vinyl planks and linoleum. All waste disposed of compliantly, leaving you with a clean substrate ready for grinding or handover.",
        image: emptyWarehouseImage,
        imageAlt: "Empty warehouse floor after carpet and vinyl flooring removal Melbourne"
      },
      {
        title: "Tile & Adhesive Removal",
        description: "Ceramic, porcelain, quarry tiles and mosaics removed from floors and walls. We grind away tile adhesive beds, carpet glue, vinyl adhesive and failed epoxy coatings. Our equipment handles the stubborn residue that stops standard contractors—leaving clean concrete ready for inspection.",
        image: manufacturingFacilityImage,
        imageAlt: "Concrete floor after tile and adhesive removal ready for restoration Melbourne"
      }
    ],
    benefits: [
      "Industrial-grade floor grinding equipment",
      "Carpet, vinyl and tile removal",
      "Adhesive and coating grinding",
      "Surface leveling and preparation",
      "Epoxy and paint removal",
      "Warehouse and factory specialists",
      "Compliant waste disposal",
      "End of lease floor restoration"
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
        answer: "We remove all commercial floor coverings: carpet tiles and broadloom, sheet vinyl and LVT, ceramic and porcelain tiles, quarry tiles, linoleum, and failed epoxy coatings. We also grind away the adhesives left behind—carpet glue, vinyl adhesive, tile bed and epoxy residue."
      },
      {
        question: "What makes your grinding equipment different?",
        answer: "Our heavy-duty industrial grinders can fully ablate concrete surfaces—removing contamination that traditional equipment simply cannot. This means we can restore floors that other contractors would consider too damaged or too difficult."
      },
      {
        question: "How long does concrete slab restoration take?",
        answer: "Timing depends on the floor area and condition. A standard warehouse floor (500-1000sqm) with adhesive removal and grinding typically takes 2-4 days. We provide a timeline after our initial site inspection."
      },
      {
        question: "Do you handle waste disposal?",
        answer: "Yes. All removed flooring, adhesives and debris are disposed of compliantly. We coordinate skip bins and leave you with a clean site—nothing left behind."
      },
      {
        question: "Will this satisfy my lease make good requirements?",
        answer: "That's exactly what we prepare for. We restore concrete slabs to handover-ready condition that meets landlord and lease requirements. If your lease has specific floor standards, let us know and we'll ensure they're met."
      }
    ],
    process: [
      { step: "Site Assessment", description: "We inspect the floor condition, identify coverings and adhesives, and provide a detailed quote." },
      { step: "Flooring Removal", description: "We strip all floor coverings—carpet, vinyl, tiles—and remove fixtures as required." },
      { step: "Grinding & Preparation", description: "Our industrial grinders remove adhesives, coatings and contamination, restoring the slab surface." },
      { step: "Final Inspection", description: "We ensure the floor meets lease requirements and is ready for handover or new flooring." }
    ],
    ctaBlock: {
      title: "Restore Your Concrete Floor",
      subtitle: "We do makegoods all day, every day.",
      text: "From warehouse slabs to office floors, we've restored hundreds of concrete surfaces across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["warehouse-make-good", "epoxy-flooring", "commercial-make-good"],
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
    ctaBlock: {
      title: "Let Us Handle Your Waterproofing",
      subtitle: "We do makegoods all day, every day.",
      text: "From balcony remediation to full roof systems, we've waterproofed commercial and residential buildings across Melbourne. Get in touch today for a free, no-obligation quote."
    },
    relatedServices: ["structural-remediation", "cladding-glazing", "concrete-floor-repair"],
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
