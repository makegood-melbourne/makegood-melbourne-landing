import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { serviceAreas } from "@/data/serviceAreas";
import { MapPin, Building2, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Locations = () => {
  const iconMap = {
    "building-2": Building2,
    "building": Building,
    "map-pin": MapPin
  };

  return (
    <>
      <Helmet>
        <title>Service Areas | Make Good Melbourne - Commercial Services Across Melbourne</title>
        <meta 
          name="description" 
          content="Professional make good services across Melbourne. Servicing CBD, inner suburbs and surrounding commercial areas including South Melbourne, Richmond, Docklands and more." 
        />
        <meta name="keywords" content="make good melbourne, commercial services melbourne, service areas, melbourne suburbs" />
        <link rel="canonical" href={`${window.location.origin}/locations`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Service Areas Across Melbourne
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional make good, make safe, and remediation services available throughout Melbourne's commercial and industrial areas.
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {serviceAreas.map((area) => {
                const Icon = iconMap[area.icon as keyof typeof iconMap] || MapPin;
                
                return (
                  <a 
                    key={area.slug}
                    href={`/locations/${area.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                              {area.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Don't See Your Area Listed?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We service all Melbourne metro areas. Contact us to discuss your specific location and project requirements.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Locations;
