import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Shield, Mail, ArrowRight, CheckCircle2, Building2, Wrench, Warehouse, Factory, HardHat, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getLocationBySlug } from "@/data/locations";

const LocationTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const services = [
    {
      icon: Building2,
      title: "Office Strip Outs",
      bullets: [
        "Complete fitout removal",
        "Partitioning & ceilings",
        "Floor covering removal",
        "Electrical disconnection",
        "Waste disposal included"
      ]
    },
    {
      icon: Wrench,
      title: "Make Good Works",
      bullets: [
        "Full lease compliance",
        "Painting & patching",
        "Flooring restoration",
        "Ceiling repairs",
        "Final clean included"
      ]
    },
    {
      icon: Warehouse,
      title: "Warehouse Restoration",
      bullets: [
        "Racking removal",
        "Floor repairs & sealing",
        "Roller door servicing",
        "Line marking removal",
        "Industrial cleaning"
      ]
    },
    {
      icon: Factory,
      title: "Industrial Make Safe",
      bullets: [
        "Hazard mitigation",
        "Site security",
        "Electrical isolation",
        "Emergency repairs",
        "Compliance documentation"
      ]
    },
    {
      icon: HardHat,
      title: "Building Remediation",
      bullets: [
        "Concrete cancer repair",
        "Waterproofing solutions",
        "Façade restoration",
        "Structural repairs",
        "Defect rectification"
      ]
    },
    {
      icon: Truck,
      title: "Waste & Demolition",
      bullets: [
        "Licensed demolition",
        "Asbestos removal",
        "Skip bin services",
        "Recycling programs",
        "EPA compliance"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{location.title} | Make Good Melbourne</title>
        <meta name="description" content={location.description} />
        <meta property="og:title" content={`${location.title} | Make Good Melbourne`} />
        <meta property="og:description" content={location.description} />
        <link rel="canonical" href={`https://makegood.melbourne/areas/${slug}`} />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-background pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                <span className="font-light block">Make Good Services in</span>
                <span className="font-bold text-primary">{location.name}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                {location.description}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Local Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Fast Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Fully Insured</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-6"
                >
                  <a href="mailto:ali@makegood.melbourne" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] bg-secondary border border-border rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-12">
              We do make goods all day, every day.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Key Areas */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Areas We Service
                </h2>
                <ul className="space-y-3">
                  {location.keyAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Types */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Property Types
                </h2>
                <ul className="space-y-3">
                  {location.businessTypes.map((type, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services in {location.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive make good solutions for commercial & industrial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/capabilities" className="group">
                View All Capabilities
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Image Placeholder</span>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why {location.name} Trusts Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Local expertise, professional service, and guaranteed results. We understand {location.name}'s commercial property landscape.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Licensed & Insured</h4>
                      <p className="text-muted-foreground text-sm">Full public liability and WorkCover compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Rapid Response</h4>
                      <p className="text-muted-foreground text-sm">Same-day quotes and flexible scheduling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Complete Documentation</h4>
                      <p className="text-muted-foreground text-sm">Detailed reports for lease compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Fixed Pricing</h4>
                      <p className="text-muted-foreground text-sm">No hidden costs or surprise charges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get your free quote for {location.name} make good services today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="text-lg px-10 py-6"
              >
                <a href="mailto:ali@makegood.melbourne" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground">
              Or email us at{" "}
              <a href="mailto:ali@makegood.melbourne" className="text-primary hover:underline">
                ali@makegood.melbourne
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LocationTemplate;