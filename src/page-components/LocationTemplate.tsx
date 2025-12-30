import { Helmet } from "@/lib/helmet";
import { useParams } from "react-router-dom";
import { MapPin, Clock, Shield, Mail, ArrowRight, CheckCircle2, Building2, Wrench, Warehouse, Factory, HardHat, Truck, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocationBySlug } from "@/data/locations";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import defaultHeroImage from "@/assets/locations/commercial-make-good-restoration-melbourne.jpeg";
import workerImage from "@/assets/locations/melbourne-make-good-contractor-with-tools.jpeg";
import southMelbourneImage from "@/assets/locations/south-melbourne-market-commercial-precinct.jpeg";
import melbourneCbdImage from "@/assets/locations/melbourne-cbd-skyline-yarra-river-commercial-district.jpeg";

// Location-specific hero images with optimized alt text
const locationHeroImages: Record<string, { src: string; alt: string }> = {
  "south-melbourne": {
    src: southMelbourneImage,
    alt: "South Melbourne Market commercial precinct - make good services for retail and commercial spaces in South Melbourne"
  },
  "melbourne-cbd": {
    src: melbourneCbdImage,
    alt: "Melbourne CBD skyline and Yarra River at dusk - commercial office make good services in Melbourne central business district"
  }
};

const getHeroImage = (slug: string) => {
  return locationHeroImages[slug] || {
    src: defaultHeroImage,
    alt: "Commercial property make good restoration services Melbourne"
  };
};

interface LocationTemplateProps {
  slug?: string;
}

const LocationTemplate = ({ slug: propSlug }: LocationTemplateProps) => {
  const params = useParams<{ slug: string }>();
  const slug = propSlug || params.slug;
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    if (typeof window !== 'undefined') {
      window.location.href = '/service-areas';
    }
    return null;
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
      {/* OG/Twitter meta tags are handled by Astro's BaseLayout for static generation */}
      {/* Only structured data (JSON-LD) needs client-side rendering */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Make Good Services ${location.name}`,
            "description": location.metaDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Make Good Melbourne",
              "url": "https://makegood.melbourne"
            },
            "areaServed": {
              "@type": "City",
              "name": location.name,
              "containedIn": "Victoria, Australia"
            },
            "serviceType": "Make Good Services"
          })}
        </script>
        {location.faqs && location.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": location.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Service Areas", href: "/service-areas" },
              { label: location.name }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-6 md:pt-10 pb-16 flex items-center bg-background">
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
                  <a href="mailto:enquiries@makegood.melbourne" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={resolveImageSrc(getHeroImage(slug || "").src)} 
                  alt={getHeroImage(slug || "").alt}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content & Service Coverage Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Unique Local Content */}
            <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Commercial & Industrial Property in <span className="text-primary">{location.name}</span>
            </h2>
              <div className="text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  {location.uniqueIntro}
                </p>
                <p className="leading-relaxed">
                  {location.localContext}
                </p>
              </div>
            </div>

            {/* Tagline */}
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-10">
              We do make goods all day, every day.
            </h3>

            {/* Areas & Property Types Grid */}
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {/* Key Areas */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-5">
                  Areas We Service
                </h4>
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
                <h4 className="text-xl font-bold text-foreground mb-5">
                  Property Types
                </h4>
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              <a href="/capabilities" className="group">
                View All Capabilities
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Worker Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={resolveImageSrc(workerImage)} 
                    alt={`Licensed make good contractor with tools ready for commercial property restoration in ${location.name} Melbourne`}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why {location.name} Trusts Us
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Local expertise, professional service and guaranteed results. We understand {location.name}'s commercial property landscape.
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

      {/* Extended SEO Content Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              End of Lease Make Good Specialists in {location.name}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                When your commercial or industrial lease ends in {location.name}, meeting your make good obligations can feel overwhelming. That's where Make Good Melbourne comes in. We specialise in returning {location.name} commercial properties to their original condition, handling everything from office strip outs and warehouse restoration to industrial facility remediation.
              </p>
              <p className="leading-relaxed">
                Our experienced team works with real estate agents, property managers, strata managers and tenants throughout {location.name} and the surrounding areas. We understand the specific requirements of {location.name}'s commercial property market—from older building stock that needs careful asbestos management to modern facilities requiring precision restoration to landlord specifications.
              </p>
              <p className="leading-relaxed">
                Whether you're vacating a small office on {location.keyAreas[0]} or a large warehouse facility, we provide comprehensive make good services including demolition, electrical make-safe, carpentry, painting, flooring restoration, ceiling repairs and complete waste management. Every project includes detailed documentation for your records and lease compliance.
              </p>
              <p className="leading-relaxed">
                As {location.name}'s trusted make good contractor, we guarantee our workmanship and offer fixed-price quotes with no hidden surprises. Contact us today for a free inspection and quote for your {location.name} make good project—we'll help you meet your lease obligations on time and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Only shown for locations with FAQs */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Frequently Asked Questions About {location.name} Make Goods
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {location.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

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
                <a href="mailto:enquiries@makegood.melbourne" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground">
              Or email us at{" "}
              <a href="mailto:enquiries@makegood.melbourne" className="text-primary hover:underline">
                enquiries@makegood.melbourne
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
