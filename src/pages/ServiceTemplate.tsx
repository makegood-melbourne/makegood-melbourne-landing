import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getServiceBySlug, getPublishedServices } from "@/data/services";
import { getServiceRedirectSlug } from "@/lib/redirects";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, ArrowRight, Shield, Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Check for service redirects (e.g., old flooring pages -> concrete-slab-restoration)
  const redirectSlug = slug ? getServiceRedirectSlug(slug) : null;
  if (redirectSlug) {
    return <Navigate to={`/services/${redirectSlug}`} replace />;
  }
  
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Redirect if service not found OR not published
  if (!service || service.published !== true) {
    return <Navigate to="/capabilities" replace />;
  }

  const relatedServices = getPublishedServices().filter(s => 
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

  // FAQ Schema for rich snippets
  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Skip to main content
      </a>
      
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://makegood.melbourne/services/${service.slug}`} />
        <meta property="og:image" content={service.heroImage ? `https://makegood.melbourne${service.heroImage}` : "https://makegood.melbourne/og-image.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content={service.heroImage ? `https://makegood.melbourne${service.heroImage}` : "https://makegood.melbourne/og-image.jpg"} />
        <link rel="canonical" href={`https://makegood.melbourne/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Navigation />

      <main id="main-content" className="flex-1 pt-20">
        {/* Breadcrumbs */}
        <div className="bg-secondary">
          <div className="container mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "Services", href: "/capabilities" },
                { label: service.name }
              ]} 
            />
          </div>
        </div>

        {/* 1. Hero Section */}
        <section className="bg-secondary pt-16 pb-10 md:pt-24 md:pb-12">
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
                  {renderTextWithLinks(service.heroText)}
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
                    width={800}
                    height={600}
                    loading="eager"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Service Image</span>
                  </div>
                )}
              </div>
            </div>
            {/* Trust Badges - Full width at bottom of hero */}
            {service.trustBadges && service.trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-10">
                {service.trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 2. What's Included Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-10">What We Deliver</h2>
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

        {/* 3. About Section - Optional */}
        {!service.skipAboutSection && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image on left */}
                <div className="hidden lg:block">
                  {service.secondaryImage ? (
                    <img 
                      src={service.secondaryImage} 
                      alt={service.secondaryImageAlt || `${service.name} Melbourne - professional commercial services`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      style={{ objectPosition: service.slug === 'epoxy-flooring' ? '100% center' : 'center' }}
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Service Image</span>
                    </div>
                  )}
                </div>
                {/* Copy on right */}
                <div>
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">{service.name} Scope</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {renderTextWithLinks(service.description)}
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed mt-4">
                    {service.slug === 'cladding-glazing' 
                      ? `Our experienced team delivers professional ${service.name.toLowerCase()} services across Melbourne's commercial buildings. We understand the critical importance of bringing buildings up to compliance with Australian Standards and building code requirements, working efficiently to minimise disruption while achieving quality results.`
                      : `Our experienced team delivers professional ${service.name.toLowerCase()} services across Melbourne's commercial and industrial properties. We understand the importance of meeting lease obligations and landlord requirements, working efficiently to minimise disruption while achieving quality results.`
                    }
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Comparison Table - Optional */}
        {service.comparison && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl text-foreground mb-10">
                {service.comparison.title || "Why Choose Specialists?"}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 bg-secondary text-foreground font-semibold border-b border-border w-1/5"></th>
                      <th className="text-left p-4 bg-muted/50 text-muted-foreground font-semibold border-b border-border w-2/5">
                        {service.comparison.regularTitle}
                      </th>
                      <th className="text-left p-4 bg-tertiary/15 text-foreground font-semibold border-b border-border w-2/5">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-tertiary" />
                          {service.comparison.specialistTitle}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.comparison.items.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}>
                        <td className="p-4 text-foreground font-medium border-b border-border">{item.feature}</td>
                        <td className="p-4 text-muted-foreground border-b border-border bg-muted/30">
                          {item.regular}
                        </td>
                        <td className="p-4 text-foreground border-b border-border bg-tertiary/10">
                          {item.specialist}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* 4. Featured Section (single - legacy support) - Optional */}
        {service.featuredSection && !service.featuredSections && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                    {service.featuredSection.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {service.featuredSection.description}
                  </p>
                </div>
                <div>
                  {service.featuredSection.image ? (
                    <img 
                      src={service.featuredSection.image} 
                      alt={service.featuredSection.imageAlt || `${service.name} professional services Melbourne`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      style={{ objectPosition: '20% center' }}
                      width={800}
                      height={600}
                      loading="lazy"
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
        )}

        {/* 4. Featured Sections (multiple) with optional Process insertion */}
        {service.featuredSections && (() => {
          const processSection = service.process && service.process.length > 0 ? (
            <section key="process-section" className="py-16 bg-secondary">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-foreground mb-10">Our Process</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.process.map((step, index) => (
                    <Card key={index} className="bg-background border-border">
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
          ) : null;

          const insertAfterIndex = service.processAfterSection;
          const elements: React.ReactNode[] = [];

          service.featuredSections.forEach((section, index) => {
            elements.push(
              <section key={`featured-${index}`} className="py-16 bg-background">
                <div className="container mx-auto px-4">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                        {section.title}
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {renderTextWithLinks(section.description)}
                      </p>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      {section.image ? (
                        <img 
                          src={section.image} 
                          alt={section.imageAlt || `${service.name} professional services Melbourne`}
                          className="aspect-[4/3] w-full object-cover rounded-lg"
                          style={{ objectPosition: section.imagePosition === 'left' ? 'left center' : section.imagePosition === 'right' ? 'right center' : 'center' }}
                          width={800}
                          height={600}
                          loading="lazy"
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
            );

            // Insert process section after the specified index
            if (insertAfterIndex !== undefined && index === insertAfterIndex && processSection) {
              elements.push(processSection);
            }
          });

          // If no insertAfterIndex specified or process wasn't inserted, add it at the end
          if (insertAfterIndex === undefined && processSection) {
            elements.push(processSection);
          }

          return elements;
        })()}

        {/* 5. Process Section - Only show if no featuredSections (fallback for pages without featured sections) */}
        {!service.featuredSections && service.process && service.process.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl text-foreground mb-10">Our Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                  <Card key={index} className="bg-background border-border">
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
        )}


        {/* FAQ Section - Optional */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl text-foreground mb-10">Frequently Asked Questions</h2>
              <div className="max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                      <AccordionTrigger className="text-left text-lg text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* Before/After Slider - Only for End of Lease Relocation */}
        {service.slug === 'end-of-lease-relocation' && <BeforeAfterSlider />}

        {/* 6. CTA Block - Custom content or default */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            {service.ctaBlock ? (
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl text-foreground mb-2">
                  {service.ctaBlock.title}
                </h2>
                {service.ctaBlock.subtitle && (
                  <p className="text-xl text-tertiary font-medium italic mb-6">
                    {service.ctaBlock.subtitle}
                  </p>
                )}
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.ctaBlock.text}
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
            ) : (
              <div className="text-center">
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
            )}
          </div>
        </section>

        {/* 7. Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl text-foreground mb-10">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <Link 
                    key={relatedService.slug} 
                    to={`/services/${relatedService.slug}`}
                    className="group"
                  >
                    <Card className="bg-secondary border-border h-full hover:border-primary transition-colors">
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
      </main>

      <Footer />
    </div>
  );
};

export default ServiceTemplate;
