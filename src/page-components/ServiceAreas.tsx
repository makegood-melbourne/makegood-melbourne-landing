import { Helmet } from "@/lib/helmet";
import Navigation from "@/components/Navigation";
import BreadcrumbsAuto from "@/components/BreadcrumbsAuto";
import Footer from "@/components/Footer";
import CtaBlockReact from "@/components/CtaBlockReact";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { getSortedLocations } from "@/data/locations";

const ServiceAreas = () => {
  const locations = getSortedLocations();

  return (
    <>
      <Helmet>
        <title>Service Areas | Make Good Melbourne - All Melbourne Suburbs</title>
        <meta 
          name="description" 
          content="Make Good Melbourne services all Melbourne metro areas. View our service coverage across suburbs including Altona, Clayton, Dandenong, Port Melbourne, and more." 
        />
        <link rel="canonical" href="https://makegood.melbourne/service-areas/" />
      </Helmet>
      
      <Navigation />
      <BreadcrumbsAuto />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Melbourne Service Areas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide professional make good services across all Melbourne metropolitan areas. From inner-city offices to outer suburban warehouses, our team delivers expert commercial property restoration wherever you need us.
            </p>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {locations.map((location) => (
                <a key={location.slug} href={`/areas/${location.slug}`}>
                  <Card className="border-border hover:border-accent/50 transition-all duration-300 h-full group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                            {location.name}
                          </h2>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                            {location.uniqueIntro.split('.').slice(0, 2).join('.')}.
                          </p>
                          <div className="flex items-center text-accent text-sm font-medium">
                            View services
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Full Melbourne Metro Coverage
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Our team services all Melbourne metropolitan areas. If your suburb isn't listed above, don't worry—we likely cover it. Contact us to confirm availability in your area.
              </p>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403149.7363696944!2d144.59374775000002!3d-37.97124695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1702000000000!5m2!1sen!2sau"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Make Good Melbourne Service Coverage Map"
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Services Available in All Areas
              </h2>
              <p className="text-muted-foreground mb-8">
                Regardless of location, we offer our full range of commercial make good services:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground">End of Lease Make Good</h3>
                  <p className="text-sm text-muted-foreground">Complete restoration to lease conditions</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground">Make Safe Works</h3>
                  <p className="text-sm text-muted-foreground">Emergency and preventive safety works</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground">Office Strip Outs</h3>
                  <p className="text-sm text-muted-foreground">Complete fitout removal and disposal</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground">Warehouse Restoration</h3>
                  <p className="text-sm text-muted-foreground">Industrial floor and structural repairs</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground">Commercial Painting</h3>
                  <p className="text-sm text-muted-foreground">Professional interior and exterior finishes</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-card-foreground">Structural Remediation</h3>
                  <p className="text-sm text-muted-foreground">Concrete cancer and structural repairs</p>
                </div>
              </div>
              <a href="/capabilities">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  View All Our Capabilities
                </Button>
              </a>
            </div>
          </div>
        </section>


      </main>

      <CtaBlockReact />

      <Footer />
    </>
  );
};

export default ServiceAreas;
