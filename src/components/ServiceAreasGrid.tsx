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
      name: "All Victoria",
      description: "Statewide commercial coverage",
      slug: null
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Melbourne & Victoria Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make Good Melbourne provides professional restoration services across Melbourne's key business districts and throughout Victoria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {areas.map((area, index) => (
            area.slug ? (
              <a 
                key={index}
                href={`/areas/${area.slug}`}
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
              </a>
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
            <a href="/service-areas">
              View All Service Areas
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasGrid;
