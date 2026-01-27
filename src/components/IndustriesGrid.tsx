import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Industry {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  alt: string;
}

const industries: Industry[] = [
  {
    id: "offices",
    title: "Offices",
    description: "Partitions down. Walls patched. Back to base building.",
    slug: "offices",
    image: "/images/industries/commercial-office-make-good-melbourne.jpg",
    alt: "Professional commercial office space after make good restoration in Melbourne"
  },
  {
    id: "warehouses-logistics",
    title: "Warehouses & Logistics",
    description: "Racking out. Floors restored. Ready for the next tenant.",
    slug: "warehouses-logistics",
    image: "/images/industries/warehouse-logistics-make-good-melbourne.jpg",
    alt: "Industrial warehouse and logistics facility make good services in Melbourne"
  },
  {
    id: "retail",
    title: "Retail",
    description: "Shopfront stripped. Surfaces finished. Handed back to centre standards.",
    slug: "retail",
    image: "/images/industries/retail-shopfront-make-good-melbourne.jpg",
    alt: "Retail shopfront and commercial space make good services in Melbourne"
  },
  {
    id: "medical-centres",
    title: "Medical Centres & Suites",
    description: "Fitout removed. Services capped. Compliant and cleared.",
    slug: "medical-centres",
    image: "/images/industries/medical-centre-make-good-melbourne.jpg",
    alt: "Medical centre and healthcare suite make good services in Melbourne"
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    description: "Plant out. Damage repaired. Drains cleared and compliant.",
    slug: "industrial-manufacturing",
    image: "/images/industries/industrial-manufacturing-make-good-melbourne.jpg",
    alt: "Industrial manufacturing facility make good and restoration services in Melbourne"
  },
  {
    id: "hospitality-venues",
    title: "Hospitality & Venues",
    description: "Kitchen stripped. Services made safe. Floor ready to hand over.",
    slug: "hospitality-venues",
    image: "/images/industries/hospitality-venue-kitchen-make-good-melbourne.jpg",
    alt: "Commercial hospitality venue and kitchen make good services in Melbourne"
  }
];

const IndustriesGrid = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide text-foreground">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From corporate offices to industrial facilities, we deliver professional make good solutions across diverse commercial sectors throughout Melbourne.
          </p>
        </div>

        {/* Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <a 
              key={industry.id} 
              href={`/industries/${industry.slug}`} 
              className="block group"
            >
              <Card className="overflow-hidden border-border bg-card h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                {/* Industry Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-muted/30">
                  <img 
                    src={industry.image} 
                    alt={industry.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    width="800"
                    height="600"
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
