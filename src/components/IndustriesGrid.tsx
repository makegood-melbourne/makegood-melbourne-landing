import ResponsiveImg from "@/components/ResponsiveImg";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import commercialOfficeMakeGoodMelbourneImg from '@/assets/industries/commercial-office-make-good-melbourne.jpg';
import hospitalityVenueKitchenMakeGoodMelbourneImg from '@/assets/industries/hospitality-venue-kitchen-make-good-melbourne.jpg';
import industrialManufacturingMakeGoodMelbourneImg from '@/assets/industries/industrial-manufacturing-make-good-melbourne.jpg';
import medicalCentreMakeGoodMelbourneImg from '@/assets/industries/medical-centre-make-good-melbourne.jpg';
import retailShopfrontMakeGoodMelbourneImg from '@/assets/industries/retail-shopfront-make-good-melbourne.jpg';
import warehouseLogisticsMakeGoodMelbourneImg from '@/assets/industries/warehouse-logistics-make-good-melbourne.jpg';

interface Industry {
  id: string;
  title: string;
  description: string;
  href: string;
  image: { src: string; width: number; height: number };
  alt: string;
}

export const industryCards: Industry[] = [
  {
    id: "offices",
    title: "Offices",
    description: "Partitions down. Walls patched. Back to base building.",
    href: "/industries/commercial/",
    image: commercialOfficeMakeGoodMelbourneImg,
    alt: "Professional commercial office space after make good restoration in Melbourne"
  },
  {
    id: "warehouses-logistics",
    title: "Warehouses & Fulfilment",
    description: "Racking in for the fit out. Racking out at lease end. Floors fixed both times.",
    href: "/industries/warehouses-logistics/",
    image: warehouseLogisticsMakeGoodMelbourneImg,
    alt: "Warehouse and fulfilment centre make good services in Melbourne"
  },
  {
    id: "retail",
    title: "Retail",
    description: "Shopfront stripped. Surfaces finished. Handed back to centre standards.",
    href: "/industries/retail/",
    image: retailShopfrontMakeGoodMelbourneImg,
    alt: "Retail shopfront and commercial space make good services in Melbourne"
  },
  {
    id: "medical-centres",
    title: "Medical Centres & Suites",
    description: "Fitout removed. Services capped. Compliant and cleared.",
    href: "/industries/medical-centres/",
    image: medicalCentreMakeGoodMelbourneImg,
    alt: "Medical centre and healthcare suite make good services in Melbourne"
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    description: "Plant out. Damage repaired. Drains cleared and compliant.",
    href: "/industries/industrial/",
    image: industrialManufacturingMakeGoodMelbourneImg,
    alt: "Industrial manufacturing facility make good and restoration services in Melbourne"
  },
  {
    id: "hospitality-venues",
    title: "Hospitality & Venues",
    description: "Kitchen stripped. Services made safe. Floor ready to hand over.",
    href: "/industries/hospitality-venues/",
    image: hospitalityVenueKitchenMakeGoodMelbourneImg,
    alt: "Commercial hospitality venue and kitchen make good services in Melbourne"
  }
];

type Tone = "dark" | "light";
const IndustriesGrid = ({ tone = "dark" }: { tone?: Tone }) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${tone === "light" ? "bg-secondary" : "bg-background"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide text-foreground">
            Make Good for Every <span className="text-primary">Commercial Property Type</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every lease is different. Here's what each kind of property usually needs.
          </p>
        </div>

        {/* Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryCards.map((industry) => (
            <a 
              key={industry.id} 
              href={industry.href} 
              className="block group"
            >
              <Card className="overflow-hidden border-border bg-card h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                {/* Industry Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-muted/30">
                  <ResponsiveImg
                    image={industry.image}
                    sizes="(max-width: 768px) 100vw, 400px"
                    alt={industry.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 uppercase">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
