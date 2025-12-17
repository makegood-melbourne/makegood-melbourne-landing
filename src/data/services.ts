import commercialCleaningImage from "@/assets/services/commercial-cleaning-melbourne-supplies.jpeg";
import commercialFloorSweepingImage from "@/assets/services/commercial-floor-sweeping-concrete-melbourne.jpeg";
import epoxyFlooringWarehouseImage from "@/assets/services/polished-epoxy-floor-industrial-warehouse-melbourne.jpeg";
import epoxyRollerApplicationImage from "@/assets/services/epoxy-floor-roller-application-melbourne.jpeg";
import warehouseFloorScrubberImage from "@/assets/services/warehouse-floor-scrubber-cleaning-v4.jpg";
import industrialFloorScrubberImage from "@/assets/services/industrial-ride-on-floor-scrubber-warehouse-melbourne.png";
import highPressureWarehouseCleaningImage from "@/assets/services/high-pressure-warehouse-cleaning-melbourne.png";
import warehouseRelocationImage from "@/assets/services/warehouse-relocation-forklift-loading-racking-melbourne.png";
import palletRackingHeroImage from "@/assets/services/pallet-racking-dismantling-warehouse-floor-melbourne.jpeg";
import flatbedTruckTransportImage from "@/assets/services/flatbed-truck-transporting-pallet-racking-melbourne-skyline.png";
import concreteCancerImage from "@/assets/services/concrete-cancer-exposed-rebar-column-spalling-melbourne.jpeg";
import warehouseFloorSlabDamageImage from "@/assets/services/warehouse-floor-slab-deterioration-structural-damage-melbourne.png";
import waterproofingMembraneImage from "@/assets/services/waterproofing-membrane-application-commercial-melbourne.jpeg";
import retentionWallConstructionImage from "@/assets/services/retention-wall-formwork-reinforcement-construction-melbourne.jpeg";
import claddingRemediationImage from "@/assets/services/cladding-remediation-facade-glazing-melbourne.jpeg";
import glazingFacadeInstallationImage from "@/assets/services/glazing-facade-installation-commercial-building-melbourne.jpg";
import ceilingTilesLedPanelsImage from "@/assets/services/commercial-office-ceiling-tiles-led-panels-melbourne.jpeg";
import ceilingTileReplacementHeroImage from "@/assets/services/ceiling-tile-replacement-commercial-office-melbourne.jpeg";
import lineMarkingWornFloorImage from "@/assets/services/warehouse-floor-worn-line-markings-restoration-melbourne.jpeg";
import lineMarkingRestoredImage from "@/assets/services/warehouse-floor-worn-line-markings-restoration-melbourne.png";
import carParkLineMarkingImage from "@/assets/services/car-park-line-marking-restoration-aerial-melbourne.jpeg";

export interface FeaturedSection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
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
  featuredSection?: FeaturedSection;
  featuredSections?: FeaturedSection[];
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  relatedServices: string[];
  category: 'demolition' | 'make-good' | 'trade' | 'cleaning' | 'structural';
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
    process: [
      { step: "Site Assessment", description: "We inspect your office to understand scope and identify any hazardous materials." },
      { step: "Detailed Quote", description: "Transparent pricing covering all strip out works, waste disposal and make good." },
      { step: "Safe Execution", description: "Our team completes the strip out efficiently, minimising disruption to other tenants." },
      { step: "Clean Handover", description: "Space returned to base building condition, ready for the next tenant." }
    ],
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
    process: [
      { step: "Lease Review", description: "We review your lease obligations to ensure all requirements are addressed." },
      { step: "Scope Development", description: "Detailed scope covering all make good works required for compliance." },
      { step: "Works Execution", description: "Our industrial team completes restoration to original condition." },
      { step: "Landlord Sign-off", description: "We liaise with landlords to achieve smooth handover and bond return." }
    ],
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
    heroText: "Professional pallet racking dismantling and floor restoration across Melbourne. We remove your racking systems—including wall ties, protection bollards, guard rails and safety gates—then core drill out every dynabolt, fill with epoxy resin and grind flush for seamless handover.",
    heroImage: palletRackingHeroImage,
    heroImageAlt: "Warehouse with pallet racking being dismantled and stacked on floor ready for removal Melbourne",
    secondaryImage: warehouseRelocationImage,
    secondaryImageAlt: "Forklift loading dismantled pallet racking onto flatbed truck for removal from Melbourne warehouse",
    benefits: [
      "Selective, drive-in and cantilever racking",
      "Floor and wall anchor removal",
      "Protection bollard removal included",
      "Core drilled, filled with epoxy or grout",
      "Surface ground flush to slab",
      "Racking recycled or disposed responsibly"
    ],
    process: [
      { step: "Racking Audit", description: "We assess racking type, bay count and anchor configuration—floor bolts, wall ties and protection bollards." },
      { step: "Safety Plan", description: "Detailed method statement developed—especially important for high-bay or loaded systems." },
      { step: "Dismantling", description: "Experienced crew dismantles systematically. Bollards and wall brackets removed alongside racking." },
      { step: "Floor Restoration", description: "Dynabolts core drilled out, holes filled with epoxy resin or structural grout, then ground flush." }
    ],
    relatedServices: ["warehouse-make-good", "concrete-floor-repair", "epoxy-flooring"],
    category: "demolition"
  },
  {
    name: "Epoxy Flooring",
    slug: "epoxy-flooring",
    title: "Epoxy Flooring Melbourne",
    metaTitle: "Epoxy Flooring Melbourne | Industrial Specialists",
    description: "Tired concrete floors dragging down your warehouse? Epoxy transforms worn, stained slabs into durable, professional surfaces that impress clients and stand up to forklifts, chemicals and heavy traffic. New installs or restoration—we handle it.",
    metaDescription: "Industrial epoxy flooring Melbourne. Warehouse floor coatings, concrete repair and resurfacing. Chemical-resistant, anti-slip finishes. Licensed applicators. Free quotes.",
    heroText: "Your warehouse floor takes a beating. Epoxy coating protects the concrete, hides the damage and gives you a surface that's easy to clean, safe to work on and built to last. Whether you're refreshing for a new tenant or upgrading your own facility—we deliver.",
    heroImage: epoxyFlooringWarehouseImage,
    heroImageAlt: "Polished epoxy floor coating in large industrial warehouse with reflective finish Melbourne",
    benefits: [
      "Chemical and oil resistant finishes",
      "Anti-slip coatings for safety compliance",
      "Cracks and damage repaired first",
      "Fast-cure options to minimise downtime",
      "Range of colours including safety zones",
      "20+ year lifespan with proper care"
    ],
    process: [
      { step: "Floor Assessment", description: "We inspect your slab for cracks, moisture and contaminants that could affect adhesion." },
      { step: "Diamond Grinding", description: "Surface profiled to create mechanical bond—essential for long-lasting results." },
      { step: "Crack Repair", description: "Structural cracks filled with flexible epoxy; surface defects patched and levelled." },
      { step: "Coating System", description: "Primer, base coat and topcoat applied. Anti-slip aggregate added if required. Cured and ready." }
    ],
    secondaryImage: epoxyRollerApplicationImage,
    secondaryImageAlt: "Professional epoxy floor coating application with roller and spiked shoes Melbourne",
    relatedServices: ["concrete-floor-repair", "warehouse-make-good", "line-marking"],
    category: "trade"
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
    process: [
      { step: "Colour Matching", description: "We match existing colours precisely—no guessing, no 'close enough' that fails inspection." },
      { step: "Surface Prep", description: "Holes filled, cracks repaired, surfaces sanded and primed. Preparation is everything." },
      { step: "Professional Application", description: "Skilled painters deliver even coverage, clean edges and consistent finish throughout." },
      { step: "Final Inspection", description: "We check every surface before handover. You see quality, your landlord sees compliance." }
    ],
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
    process: [
      { step: "Electrical Audit", description: "We identify all circuits, outlets, data points and installations requiring removal or modification." },
      { step: "Safe Isolation", description: "Circuits isolated at the board before any work begins. Safety is non-negotiable." },
      { step: "Removal and Capping", description: "Installations removed, cables terminated safely, plates blanked off to code." },
      { step: "Certification", description: "Certificate of Electrical Safety issued. Documentation for your landlord and records." }
    ],
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
    process: [
      { step: "Damage Mapping", description: "We survey the entire floor, documenting crack patterns, joint condition and surface defects." },
      { step: "Root Cause", description: "Understanding why damage occurred—overloading, poor joints, subgrade issues—guides the right repair." },
      { step: "Precision Repair", description: "Epoxy injection for cracks, polymer-modified mortars for spalling, joint reconstruction where needed." },
      { step: "Surface Finish", description: "Repairs ground flush and blended. Ready for coating, line marking or direct use." }
    ],
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
    secondaryImage: ceilingTilesLedPanelsImage,
    secondaryImageAlt: "Modern commercial office space with suspended ceiling grid, rectangular LED panel lights and grey carpet flooring in Melbourne",
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
    process: [
      { step: "Lease Review", description: "We confirm your make-good clause and identify the ceiling types throughout your tenancy." },
      { step: "Site Assessment", description: "Count tiles and panels needed, note partition removal areas and assess LED and aircon positioning." },
      { step: "Sourcing & Installation", description: "Matching tiles and panels sourced, installed, LED panels repositioned and aircon vents adjusted." },
      { step: "Landlord Handover", description: "Ceiling completed to original condition, ready for inspection and sign-off." }
    ],
    relatedServices: ["commercial-painting", "office-strip-out", "commercial-make-good"],
    category: "make-good"
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
    process: [
      { step: "Lease Review", description: "We check your make-good clause and compare current lines against original plans or base condition." },
      { step: "Surface Prep", description: "Existing tenant markings removed or overcoated, floors cleaned for proper adhesion." },
      { step: "Line Restoration", description: "Original markings reinstated with professional equipment—straight lines, sharp edges, consistent coverage." },
      { step: "Landlord Handover", description: "Lines cured and protected, ready for inspection and sign-off." }
    ],
    featuredSection: {
      title: "Car Park Line Marking Restoration",
      description: "Years of traffic have taken their toll. We bring car park markings back to compliance standard, restoring faded bays, worn directional arrows and eroded safety zones.",
      image: carParkLineMarkingImage,
      imageAlt: "Aerial view of commercial car park with restored white bay markings and yellow directional lines in Melbourne"
    },
    relatedServices: ["epoxy-flooring", "warehouse-make-good", "concrete-floor-repair"],
    category: "trade"
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
    process: [
      { step: "Lease Assessment", description: "We review your make good clause to understand all obligations." },
      { step: "Scope and Quote", description: "Detailed scope developed with transparent, competitive pricing." },
      { step: "Works Coordination", description: "All trades managed to complete works efficiently and on time." },
      { step: "Landlord Handover", description: "We coordinate final inspection and handover with your landlord." }
    ],
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
    process: [
      { step: "Wall Assessment", description: "Every hole, crack and damaged area documented and repair approach determined." },
      { step: "Backing and Prep", description: "Proper backing installed for larger holes; surfaces prepared for optimal adhesion." },
      { step: "Repair and Finish", description: "Compound applied in layers, each sanded smooth. No shortcuts, no visible patches." },
      { step: "Ready for Paint", description: "Surfaces sanded to final finish, dust removed, ready for primer and paint." }
    ],
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
    process: [
      { step: "Lighting Assessment", description: "We audit existing fittings, measure light levels and recommend appropriate LED replacements." },
      { step: "Product Selection", description: "Quality LEDs matched to your space—colour temperature, output and fitting style considered." },
      { step: "Installation", description: "Licensed electricians swap fittings efficiently, minimising disruption to your operations." },
      { step: "Commissioning", description: "All new lighting tested, light levels verified, old fittings removed for recycling." }
    ],
    relatedServices: ["electrical-make-safe", "commercial-make-good", "office-strip-out"],
    category: "trade"
  },
  {
    name: "Commercial Cleaning",
    slug: "commercial-cleaning",
    title: "Commercial Cleaning Melbourne",
    metaTitle: "Industrial Floor Cleaning Melbourne | Warehouses",
    description: "From factory floors to office fitouts, we handle the cleaning jobs that regular cleaners won't touch. Industrial machinery, specialised chemicals and a team that knows what landlords expect at handover.",
    metaDescription: "Industrial floor cleaning Melbourne. Ride-on scrubbers, high-pressure washing, chemical treatment for warehouses. Transform tired floors fast. Free quotes.",
    heroText: "Heavy-duty cleaning for commercial and industrial properties. We tackle the jobs regular cleaners can't—warehouse floors, post-construction sites and end-of-lease handovers that need to pass inspection.",
    heroImage: commercialFloorSweepingImage,
    heroImageAlt: "Worker sweeping concrete floor with industrial broom during commercial cleaning Melbourne",
    secondaryImage: highPressureWarehouseCleaningImage,
    secondaryImageAlt: "High-pressure warehouse cleaning Melbourne - industrial cleaner pressure washing warehouse floor",
    featuredSection: {
      title: "Industrial Floor Cleaning",
      description: "Years of grime, oil stains and tyre marks don't stand a chance. Our ride-on scrubbers and high-pressure systems restore warehouse floors to like-new condition—whether you're preparing for a new tenant, impressing clients or just tired of looking at that mess.",
      image: industrialFloorScrubberImage,
      imageAlt: "Industrial ride-on floor scrubber machine cleaning polished concrete warehouse floor Melbourne"
    },
    benefits: [
      "Ride-on floor scrubbers for large areas",
      "High-pressure cleaning for floors, walls and exteriors",
      "Chemical treatment for stubborn stains and oil",
      "Handover cleaning after make good works",
      "Post-construction site clean-ups",
      "Window and facade cleaning",
      "Graffiti removal",
      "Carpet steam cleaning"
    ],
    process: [
      { step: "Walk the Site", description: "We assess the floor condition, stain types and access requirements." },
      { step: "Right Equipment", description: "We match the machinery to your space—ride-on scrubbers, pressure washers or chemical systems." },
      { step: "Get It Done", description: "Fast, thorough cleaning with minimal disruption to your operations." },
      { step: "Ready to Use", description: "Floors dry and ready—whether for handover, new tenants or just a fresh start." }
    ],
    relatedServices: ["commercial-make-good", "warehouse-make-good", "office-strip-out"],
    category: "cleaning"
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
    relatedServices: ["warehouse-make-good", "pallet-racking-removal", "commercial-make-good"],
    category: "make-good"
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
    relatedServices: ["warehouse-make-good", "commercial-make-good", "office-strip-out"],
    category: "structural"
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
    relatedServices: ["structural-remediation", "commercial-make-good", "office-strip-out"],
    category: "structural"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: 'demolition' | 'make-good' | 'trade' | 'cleaning' | 'structural'): Service[] {
  return services.filter(service => service.category === category);
}
