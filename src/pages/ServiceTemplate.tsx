import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getServiceBySlug, services } from "@/data/services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";

const ServiceTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/capabilities" replace />;
  }

  const relatedServices = services.filter(s => 
    service.relatedServices.includes(s.slug) && s.slug !== service.slug
  ).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "MakeGOOD Melbourne",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "email": "enquiries@makegood.melbourne"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://makegood.melbourne/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  {service.title.includes('Melbourne') ? (
                    <>
                      {service.title.replace(' Melbourne', '')} <span className="text-primary">Melbourne</span>
                    </>
                  ) : (
                    service.title
                  )}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.heroText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link to="/#contact">
                      Get a Free Quote
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                    <a href="mailto:enquiries@makegood.melbourne">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
              {/* Hero Image */}
              <div className="hidden lg:block">
                {service.heroImage ? (
                  <img 
                    src={service.heroImage} 
                    alt={service.heroImageAlt || `${service.name} Melbourne - professional commercial services`}
                    className="aspect-[4/3] w-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Service Image</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-10">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section (single - legacy support) */}
        {service.featuredSection && !service.featuredSections && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  {service.featuredSection.image ? (
                    <img 
                      src={service.featuredSection.image} 
                      alt={service.featuredSection.imageAlt || `${service.name} professional services Melbourne`}
                      className="aspect-[4/3] w-full object-cover object-center rounded-lg"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Service Image</span>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                    {service.featuredSection.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {service.featuredSection.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Sections (multiple) */}
        {service.featuredSections && service.featuredSections.map((section, index) => (
          <section key={index} className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {section.image ? (
                    <img 
                      src={section.image} 
                      alt={section.imageAlt || `${service.name} professional services Melbourne`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Service Image</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-10">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <Card key={index} className="bg-secondary border-border">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.step}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Slider - Only for End of Lease Relocation */}
        {service.slug === 'end-of-lease-relocation' && <BeforeAfterSlider />}

        {/* Description Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-foreground mb-6">About This Service</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mt-4">
                  {service.slug === 'cladding-glazing' 
                    ? `Our experienced team delivers professional ${service.name.toLowerCase()} services across Melbourne's commercial buildings. We understand the critical importance of bringing buildings up to compliance with Australian Standards and building code requirements, working efficiently to minimise disruption while achieving quality results.`
                    : `Our experienced team delivers professional ${service.name.toLowerCase()} services across Melbourne's commercial and industrial properties. We understand the importance of meeting lease obligations and landlord requirements, working efficiently to minimise disruption while achieving quality results.`
                  }
                </p>
              </div>
              {/* Secondary Image */}
              <div className="hidden lg:block">
                {service.secondaryImage ? (
                  <img 
                    src={service.secondaryImage} 
                    alt={service.secondaryImageAlt || `${service.name} Melbourne - professional commercial services`}
                    className="aspect-[4/3] w-full object-cover object-center rounded-lg"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Service Image</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl text-foreground mb-10">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <Link 
                    key={relatedService.slug} 
                    to={`/services/${relatedService.slug}`}
                    className="group"
                  >
                    <Card className="bg-background border-border h-full hover:border-primary transition-colors">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedService.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {relatedService.heroText}
                        </p>
                        <span className="text-accent flex items-center gap-2 font-medium">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on your {service.name.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link to="/#contact">
                  Get a Free Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="mailto:enquiries@makegood.melbourne">
                  <Mail className="mr-2 h-5 w-5" />
                  enquiries@makegood.melbourne
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

export default ServiceTemplate;
