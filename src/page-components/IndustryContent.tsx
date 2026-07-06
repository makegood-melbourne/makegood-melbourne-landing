import { Helmet } from "@/lib/helmet";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import { ArrowRight, CheckCircle, AlertTriangle, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { resolveImageSrc } from "@/lib/resolveImageSrc";

const ImagePlaceholder = ({ description, className = "" }: { description: string; className?: string }) => (
  <div className={`bg-secondary/50 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center p-8 ${className}`}>
    <ImageIcon className="h-12 w-12 text-muted-foreground mb-3" />
    <p className="text-sm text-muted-foreground text-center max-w-xs">
      <span className="font-medium">Image needed:</span> {description}
    </p>
  </div>
);

interface IndustryContentProps {
  slug: string;
}

const IndustryContent = ({ slug }: IndustryContentProps) => {
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return null;
  }

  const relatedServices = industry.services
    .map(serviceSlug => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  // Service schema
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.title,
    "description": industry.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Make Good Melbourne",
      "url": "https://makegood.melbourne"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    }
  };

  // FAQ Schema for rich snippets
  const faqSchema = industry.faqs && industry.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(industrySchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Introduction */}
      {industry.introduction && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {industry.introduction}
            </p>
          </div>
        </section>
      )}

      
      {/* About Section - 2 Column Layout (for Warehouse page) */}
      {industry.aboutTitlePrefix && industry.aboutTitleHighlight && (
        <section className="py-12 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-xl max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                {industry.aboutTitlePrefix} <span className="text-primary">{industry.aboutTitleHighlight}</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-xl text-muted-foreground">
                <div>
                  {industry.aboutContentLeft?.map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed last:mb-0">
                      {renderTextWithLinks(paragraph)}
                    </p>
                  ))}
                </div>
                <div>
                  {industry.aboutContentRight?.map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed last:mb-0">
                      {renderTextWithLinks(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Sections */}
      {industry.featuredSections && industry.featuredSections.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {industry.featuredSections.map((section, index) => (
              <div 
                key={index} 
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                  {section.image ? (
                    <img 
                      src={resolveImageSrc(section.image)} 
                      alt={section.imageAlt || section.title}
                      className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <ImagePlaceholder 
                      description={section.imagePlaceholder || `Image for ${section.title}`}
                      className="aspect-[4/3]"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      
      {/* Scope Areas (replaces Challenges for Warehouse page) */}
      {industry.scopeRows && industry.scopeRows.length > 0 ? (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{industry.scopeTitle} <span className="text-primary">{industry.scopeTitleHighlight}</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.scopeRows.map((row) => {
                const cardContent = (
                  <div className="rounded-lg border border-border bg-card h-full overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <div className="border-t-4 border-t-primary/70 p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{row.scope}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{row.worksIncluded}</p>
                      {row.link && (
                        <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                          View {row.scope.toLowerCase()}
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </div>
                  </div>
                );

                return row.link ? (
                  <a key={row.scope} href={row.link} className="block group">
                    {cardContent}
                  </a>
                ) : (
                  <article key={row.scope}>{cardContent}</article>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              {industry.name} Make Good Challenges
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Unique requirements we handle for {industry.name.toLowerCase()} properties
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {industry.challenges?.map((challenge, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-tertiary shrink-0 mt-0.5" />
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}


      
      {/* Custom Process (replaces Benefits for Warehouse page) */}
      {industry.processSteps && industry.processSteps.length > 0 ? (
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{industry.processTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {industry.processSteps.map((step, index) => (
                <Card key={step.step} className="bg-card border-border h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
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
      ) : (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              What We Deliver
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Comprehensive make good for {industry.name.toLowerCase()} properties
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      
      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              SERVICES FOR {industry.name.toUpperCase()}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Specialist services commonly required for {industry.name.toLowerCase()} make goods
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                service && (
                  <a
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="group block"
                  >
                    <Card className="bg-card border-border h-full overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg">
                      {service.heroImage && (
                        <div className="aspect-[16/9] overflow-hidden bg-muted/20 relative">
                          <img 
                            src={resolveImageSrc(service.heroImage)} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        </div>
                      )}
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center text-primary text-sm mt-4 group-hover:underline">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>
      )}


      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {industry.faqTitle || `${industry.name} Make Good FAQs`}
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            {industry.faqSubtitle || `Common questions about ${industry.name.toLowerCase()} make goods`}
          </p>

          <Accordion type="single" collapsible className="w-full">
            {industry.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {renderTextWithLinks(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      {industry.ctaTitle && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{industry.ctaTitle}</h2>
            {industry.ctaSubtitle && <p className="text-xl text-primary font-semibold mb-4">{industry.ctaSubtitle}</p>}
            {industry.ctaText && <p className="text-lg text-muted-foreground mb-8">{renderTextWithLinks(industry.ctaText)}</p>}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/#contact">Get a Fixed-Price Quote</a>
            </Button>
          </div>
        </section>
      )}

    </>
  );
};

export default IndustryContent;
