import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, DollarSign, Building2, Wrench, Warehouse, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLocationBySlug } from "@/data/locations";

// Locations that should redirect to homepage until properly designed
const redirectLocations = ["richmond"];

const Location = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Redirect certain locations to homepage
  if (slug && redirectLocations.includes(slug)) {
    return <Navigate to="/" replace />;
  }
  
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const services = [
    {
      title: "Office Strip Outs",
      description: `Complete office strip out services for ${location.name}'s commercial properties.`,
      icon: Building2,
      link: "/capabilities"
    },
    {
      title: "Make Good Services",
      description: `Professional make good solutions for ${location.name} tenancies.`,
      icon: Wrench,
      link: "/capabilities"
    },
    {
      title: "Warehouse Make Good",
      description: `Expert warehouse restoration for ${location.name}'s industrial facilities.`,
      icon: Warehouse,
      link: "/capabilities"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{location.title} | Make Good Melbourne</title>
        <meta name="description" content={location.description} />
        <meta property="og:title" content={`${location.title} | Make Good Melbourne`} />
        <meta property="og:description" content={location.description} />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Make Good Services in{" "}
              <span className="text-primary">{location.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {location.description}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Local {location.name} Team</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Rapid Response</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <DollarSign className="w-5 h-5" />
                <span className="font-medium">Best Value Rates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get {location.name} Quote</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0398909222">Call 03 9890 9222</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{location.name}'s Premier Make Good Service</h2>
            
            <div className="prose prose-invert max-w-none mb-12">
              <h3 className="text-2xl font-semibold mb-4">Your Local {location.name} Make Good Experts</h3>
              <p className="text-muted-foreground mb-6">
                {location.name} businesses trust Make Good Melbourne for professional property restoration services. 
                We understand the unique needs of this dynamic area and provide reliable, expert make good services 
                tailored to {location.name}'s commercial landscape.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Commercial Specialists</h4>
                  <p className="text-muted-foreground text-sm">
                    Expert services for {location.name}'s offices and commercial properties
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Industrial Excellence</h4>
                  <p className="text-muted-foreground text-sm">
                    Professional restoration for warehouses and industrial facilities
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Flexible Scheduling</h4>
                  <p className="text-muted-foreground text-sm">
                    After-hours and weekend services to suit {location.name} businesses
                  </p>
                </div>
              </div>
            </div>

            {/* Service Coverage */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Key Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {location.keyAreas.map((area, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {location.businessTypes.map((type, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Make Good Services Available in {location.name}
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Comprehensive property restoration solutions for all business types
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:border-primary transition-colors">
                    <CardHeader>
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" asChild className="p-0 h-auto">
                        <Link to={service.link} className="flex items-center gap-2">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/capabilities">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why {location.name} Businesses Choose Make Good Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fast Response</CardTitle>
                  <CardDescription>
                    {location.name}-based team ensures quick response to all service requests
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fully Certified</CardTitle>
                  <CardDescription>
                    Licensed, insured, and compliant for all {location.name} facilities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Value Pricing</CardTitle>
                  <CardDescription>
                    Competitive rates tailored to {location.name} business budgets
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Proven Excellence</CardTitle>
                  <CardDescription>
                    Trusted by businesses across {location.name} for quality results
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Testimonial */}
            {location.testimonial && (
              <Card className="mt-12 border-primary/20">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "{location.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-semibold">{location.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{location.testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Professional Make Good Services in {location.name}?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the growing list of {location.name} businesses that trust Make Good Melbourne. 
              Get your free, no-obligation quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link to="/#contact">Get Free {location.name} Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#contact">Contact {location.name} Team</Link>
              </Button>
            </div>

            <p className="text-muted-foreground">
              Call our {location.name} team directly:
            </p>
            <a href="tel:0398909222" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              03 9890 9222
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Location;
