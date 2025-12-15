import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Building2, Wrench, Sparkles, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import capabilitiesHero from "@/assets/commercial-property-restoration-capabilities-melbourne.jpg";
import { getServicesByCategory } from "@/data/services";

const Capabilities = () => {
  const demolitionServices = getServicesByCategory('demolition');
  const makeGoodServices = getServicesByCategory('make-good');
  const tradeServices = getServicesByCategory('trade');

  const allDemolitionItems = [
    "Pallet racking removal",
    "Electrical make-safe",
    "Mechanical re-balancing",
    "Waste management and disposal",
    "Interior alterations",
    "Complete demolitions",
    "Transport and relocation services"
  ];

  const allMakeGoodItems = [
    "Carpentry and joinery",
    "Concrete flooring restoration",
    "Professional painting",
    "Line marking",
    "Back-to-base works",
    "Patching and plastering",
    "Wall repairs and touch-ups",
    "Ceiling tile cleaning and replacement"
  ];

  const allTradeItems = [
    "Electrical installations and repairs",
    "Mechanical systems",
    "Fire protection systems",
    "Plumbing services",
    "Flooring and concreting",
    "Security system removal"
  ];

  const cleaningItems = [
    "Post-construction cleaning",
    "End of lease deep cleaning",
    "High-pressure washing",
    "Window and facade cleaning",
    "Industrial floor scrubbing",
    "Graffiti removal"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Capabilities | Make Good Melbourne</title>
        <meta name="description" content="Full-service make good capabilities: pallet racking removal, electrical make-safe, carpentry, concrete flooring, painting, ceiling repairs and more. Licensed Melbourne contractors." />
        <meta property="og:title" content="Make Good Capabilities | MakeGOOD Melbourne" />
        <meta property="og:description" content="Professional demolition, make good and trade services for commercial and industrial properties in Melbourne." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/capabilities" />
      </Helmet>

      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={capabilitiesHero} 
              alt="Professional commercial and industrial make good services including demolition, restoration, and trade work in Melbourne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-5xl text-foreground mb-3">Our Capabilities</h1>
            <p className="text-2xl text-primary font-semibold mb-4">Make Good, BETTER.</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We do make goods all day, every day. Whether your project is retail, commercial, or industrial, our network of reliable trades will work tirelessly to ensure your make good experience is seamless.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </section>

        {/* Demolition Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Hammer className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Demolition Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our expert team excels in various facets of the demolition process, ensuring safe and efficient removal of structures, equipment, and materials. Whether it's interior alterations or complete demolitions, our team is equipped to handle projects of all sizes.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {allDemolitionItems.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                {demolitionServices.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Learn more about our demolition services:</p>
                    <div className="flex flex-wrap gap-2">
                      {demolitionServices.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                        >
                          {service.name}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Make Good Services */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Make Good Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We specialise in restoring commercial, industrial, and warehouse properties to their original condition. Our skilled team excels in diverse areas, meticulously addressing every aspect of property restoration to ensure spaces are returned to a lease-able condition.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {allMakeGoodItems.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                {makeGoodServices.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Learn more about our make good services:</p>
                    <div className="flex flex-wrap gap-2">
                      {makeGoodServices.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                        >
                          {service.name}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trade Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Trade Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive approach revitalises every facet of your property, ensuring a flawless canvas for its next chapter. Our dedicated team seamlessly integrates multiple trade specialties, tailored to enhance your space during the pivotal make good process.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {allTradeItems.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                {tradeServices.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Learn more about our trade services:</p>
                    <div className="flex flex-wrap gap-2">
                      {tradeServices.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                        >
                          {service.name}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cleaning Services */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <Card className="border-border border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-foreground">Commercial Cleaning & Handover Services</CardTitle>
                    <p className="text-primary font-medium mt-1">Complete Your Make Good</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Don't hand back a dusty space. Our professional cleaning services ensure your property is spotless and ready for final inspection. From post-construction cleans to end of lease deep cleaning, we handle it all so you can focus on what matters.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {cleaningItems.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 rounded-lg p-6 mt-6">
                  <p className="text-foreground font-medium mb-3">Bundle cleaning with your make good for a complete solution</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    We coordinate cleaning as part of your project, saving you the hassle of managing multiple contractors.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="/#contact">
                      Get a Cleaning Quote
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl text-foreground mb-6">Quality & Commitment</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              With attention to detail and a commitment to quality, we transform spaces, ensuring they meet the standards of end of lease obligations. Our network of reliable trades works tirelessly to deliver comprehensive solutions that save you time, effort, and stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/#contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="tel:0383aborede">
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;