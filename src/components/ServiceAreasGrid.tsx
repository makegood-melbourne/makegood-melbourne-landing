import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreasGrid = () => {
  const areas = [
    {
      name: "Melbourne CBD",
      description: "Office buildings, corporate headquarters",
      slug: "melbourne-cbd"
    },
    {
      name: "Port Melbourne",
      description: "Warehouses, Fishermans Bend precinct",
      slug: "port-melbourne"
    },
    {
      name: "Dandenong",
      description: "Industrial facilities, manufacturing",
      slug: "dandenong"
    },
    {
      name: "Clayton",
      description: "Research facilities, commercial offices",
      slug: "clayton"
    },
    {
      name: "Richmond",
      description: "Creative studios, tech offices",
      slug: "richmond"
    },
    {
      name: "Moorabbin",
      description: "Aviation precinct, logistics",
      slug: "moorabbin"
    },
    {
      name: "Ringwood",
      description: "Retail centres, business parks",
      slug: "ringwood"
    },
    {
      name: "All Victoria",
      description: "Statewide commercial coverage",
      slug: null
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Melbourne & Victoria Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make Good Melbourne provides professional restoration services across Melbourne's key business districts and throughout Victoria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
          {areas.map((area, index) => (
            area.slug ? (
              <Link 
                key={index}
                to={`/service-areas/${area.slug}`}
                className="group bg-background border border-border rounded-lg p-5 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div 
                key={index}
                className="bg-primary/5 border border-primary/20 rounded-lg p-5"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="default"
            size="lg"
            className="group"
          >
            <Link to="/service-areas">
              View All Service Areas
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasGrid;
