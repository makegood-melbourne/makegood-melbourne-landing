import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Industry {
  id: string;
  title: string;
  description: string;
  slug: string;
}

const industries: Industry[] = [
  {
    id: "offices",
    title: "Offices",
    description: "Corporate and multi-tenant offices. Reinstatement works in live buildings.",
    slug: "offices"
  },
  {
    id: "warehouses-logistics",
    title: "Warehouses & Logistics",
    description: "High-clearance sites. Works coordinated around ongoing operations.",
    slug: "warehouses-logistics"
  },
  {
    id: "retail",
    title: "Retail",
    description: "Street-front and shopping centre tenancies. Delivered to landlord and centre standards.",
    slug: "retail"
  },
  {
    id: "medical-centres",
    title: "Medical Centres & Suites",
    description: "Clinical and allied health spaces. Services-heavy fit-outs handled.",
    slug: "medical-centres"
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    description: "Industrial tenancies with plant, services, and rectification scope.",
    slug: "industrial-manufacturing"
  },
  {
    id: "hospitality-venues",
    title: "Hospitality & Venues",
    description: "Restaurants, bars, and venues. Complex services and tight access managed.",
    slug: "hospitality-venues"
  }
];

const IndustriesGrid = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide text-foreground">
            Industries We Work In
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Make good and remedial works across commercial tenancies.
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
                {/* Image Placeholder */}
                <div className="aspect-[4/3] overflow-hidden relative bg-muted/30 flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">Industry Image</span>
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
