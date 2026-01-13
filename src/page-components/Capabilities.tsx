import { Helmet } from "@/lib/helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Wrench, Shield, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import capabilitiesHero from "@/assets/commercial-property-restoration-capabilities-melbourne.jpg";
import { getPublishedServices } from "@/data/services";

const Capabilities = () => {
  const allServices = getPublishedServices();
  
  // Group services by the new 3-category navigation structure
  const floorRestorationSlugs = ['warehouse-floor-restoration', 'epoxy-flooring', 'line-marking', 'pallet-racking-removal'];
  const specialistTradesSlugs = ['handover-cleaning', 'make-good-painting', 'ceiling-tile-replacement', 'patching-plastering', 'electrical-make-safe', 'led-lighting', 'end-of-lease-relocation'];
  const structuralRemediationSlugs = ['structural-remediation', 'polycarbonate-roofing-skylights', 'cladding-glazing', 'concrete-floor-repair', 'waterproofing'];

  const floorRestorationServices = allServices.filter(s => floorRestorationSlugs.includes(s.slug));
  const specialistTradesServices = allServices.filter(s => specialistTradesSlugs.includes(s.slug));
  const structuralRemediationServices = allServices.filter(s => structuralRemediationSlugs.includes(s.slug));

  const floorRestorationItems = [
    "Warehouse floor grinding and levelling",
    "Concrete slab restoration",
    "Epoxy floor coatings and finishes",
    "Line marking restoration and removal",
    "Pallet racking removal and floor remediation",
    "Dynabolt hole repairs and filling",
    "Surface preparation for new coverings",
    "Grind-and-seal finishes"
  ];

  const specialistTradesItems = [
    "Handover and end of lease cleaning",
    "Make good painting services",
    "Ceiling tile replacement and repairs",
    "Patching and plastering",
    "Electrical make safe and isolation",
    "LED lighting upgrades",
    "End of lease relocation services",
    "Post-construction clean-ups"
  ];

  const structuralRemediationItems = [
    { title: "Structural Remediation", description: "Comprehensive assessment and engineered solutions for concrete deterioration, retention structures and steel framework issues." },
    { title: "Polycarbonate Roofing & Skylights", description: "Supply and installation of clear polycarbonate roofing sheets, skylight replacement and storm damage repairs." },
    { title: "Cladding & Glazing Remediation", description: "NCC-compliant cladding replacement, fire rating upgrades and glazing remediation services." },
    { title: "Concrete Floor Repair", description: "Crack injection, slab stabilisation, joint repairs and structural concrete restoration." },
    { title: "Waterproofing", description: "Balcony, rooftop and podium membrane systems with long-term manufacturer warranties." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Capabilities | Make Good Melbourne</title>
        <meta name="description" content="Full-service make good capabilities: floor restoration, specialist trades, structural remediation and more. Licensed Melbourne contractors." />
        <meta property="og:title" content="Make Good Capabilities | MakeGOOD Melbourne" />
        <meta property="og:description" content="Professional floor restoration, specialist trades and structural remediation services for commercial and industrial properties in Melbourne." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/capabilities" />
      </Helmet>

      <Navigation />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Capabilities" }]} />
        </div>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={capabilitiesHero} 
              alt="Professional commercial and industrial make good services including floor restoration, specialist trades and structural remediation in Melbourne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-5xl text-foreground mb-3">Our Capabilities</h1>
            <p className="text-2xl text-primary font-semibold mb-4">Make Good, BETTER.</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We do make goods all day, every day. Whether your project is retail, commercial or industrial, our network of reliable trades will work tirelessly to ensure your make good experience is seamless.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Get a Free Quote
              </a>
            </Button>
          </div>
        </section>

        {/* Floor Restoration */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Floor Restoration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Complete warehouse and industrial floor restoration services. From flooring strip-out to finished slab, we deliver floors ready for handover. Whether you're removing old coverings, repairing damage from racking anchors or preparing for a new tenant—we handle it all.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {floorRestorationItems.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                {floorRestorationServices.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Learn more about our floor restoration services:</p>
                    <div className="flex flex-wrap gap-2">
                      {floorRestorationServices.map((service) => (
                        <a
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                        >
                          {service.name}
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Specialist Trades */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Specialist Trades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive approach revitalises every facet of your property, ensuring a flawless canvas for its next chapter. Our dedicated team seamlessly integrates multiple trade specialties, tailored to enhance your space during the pivotal make good process.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {specialistTradesItems.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                {specialistTradesServices.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Learn more about our specialist trade services:</p>
                    <div className="flex flex-wrap gap-2">
                      {specialistTradesServices.map((service) => (
                        <a
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                        >
                          {service.name}
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Structural & Remediation */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-border border-2 border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-foreground">Structural & Remediation</CardTitle>
                    <p className="text-accent font-medium mt-1">Restore Structural Integrity</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Expert structural remediation services for commercial and industrial properties. We address concrete deterioration, cladding compliance, waterproofing failures and roofing issues to restore structural integrity and ensure long-term safety compliance.
                </p>
                <div className="space-y-6 mb-6">
                  {structuralRemediationItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {structuralRemediationServices.length > 0 && (
                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Learn more about our structural services:</p>
                      <div className="flex flex-wrap gap-2">
                        {structuralRemediationServices.map((service) => (
                          <a
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                          >
                            {service.name}
                            <ArrowRight className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href="/#contact">
                        Get a Structural Assessment
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl text-foreground mb-6">Quality & Commitment</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              With attention to detail and a commitment to quality, we transform spaces, ensuring they meet the standards of end of lease obligations. Our network of reliable trades works tirelessly to deliver comprehensive solutions that save you time, effort and stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/#contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Your Free Quote
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
