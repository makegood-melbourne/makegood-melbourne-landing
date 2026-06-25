import { Helmet } from "@/lib/helmet";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import SimpleProcess from "@/components/SimpleProcess";
import SectionServicesCarousel from "@/components/SectionServicesCarousel";
import SectionServicesGrid from "@/components/SectionServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Shield, Compass, BadgeDollarSign, FileText, ClipboardCheck, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedCard {
  slug: string;
  name: string;
  description: string;
}

interface RelatedServicesBlock {
  title: string;
  cards: RelatedCard[];
}

interface ScopeRow {
  scope: string;
  worksIncluded: string;
  link?: string;
  linkLabel?: string;
  image?: unknown;
  imageAlt?: string;
  imageTitle?: string;
}

interface PropertyType {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  description: string;
}

interface SectionLandingData {
  // Meta
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  
  // Hero
  title: string;
  titleHighlight?: string;  // Optional word to highlight in orange
  tagline: string;
  trustBadges: { icon: string; title: string }[];
  heroImage?: unknown;
  heroImageAlt?: string;
  heroImageTitle?: string;  // Tooltip text on hover

  // About - supports styled header "TITLE PREFIX" + "TITLE HIGHLIGHT" in orange
  aboutTitlePrefix: string;  // e.g. "MELBOURNE'S LEADING"
  aboutTitleHighlight: string;  // e.g. "REMEDIATION SPECIALISTS" - shown in orange
  aboutContentLeft: string[];  // Left column paragraphs
  aboutContentRight: string[]; // Right column paragraphs
  
  // Services Carousel/Grid
  serviceSlugs: string[];
  carouselTitle?: string;
  carouselTitleHighlight?: string;  // Optional words to highlight in orange
  carouselDescription?: string;
  useGrid?: boolean;  // If true, displays services in static grid instead of carousel
  
  // Related Services Block (optional - appears between carousel and FAQ)
  relatedServicesBlock?: RelatedServicesBlock;

  // Expanded content blocks (optional)
  scopeTitle?: string;
  scopeTitleHighlight?: string;
  scopeSubtitle?: string;
  scopeRows?: ScopeRow[];
  propertyTypesTitle?: string;
  propertyTypesTitleHighlight?: string;
  propertyTypesSubtitle?: string;
  propertyTypes?: PropertyType[];
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStep[];
  
  // FAQ
  faqTitle?: string;  // e.g. "Make Good FAQs"
  faqSubtitle?: string;  // e.g. "Common questions about make good services"
  faqs: FAQ[];
  
  // CTA
  ctaTitle: string;
  ctaSubtitle?: string;
  ctaText: string;
}

interface SectionLandingTemplateProps {
  data: SectionLandingData;
}

const SectionLandingTemplate = ({ data }: SectionLandingTemplateProps) => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "MakeGOOD Melbourne",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "email": "info@makegood.melbourne"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    }
  };

  // FAQ Schema for rich snippets
  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
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
          {JSON.stringify(structuredData)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Hero Section */}
      <div className="bg-secondary">
      <section className="bg-secondary pt-4 pb-10 md:pt-6 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Title with optional highlight */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                {data.titleHighlight ? (
                  <>
                    {data.title.split(data.titleHighlight)[0]}
                    <span className="text-primary whitespace-nowrap">{data.titleHighlight}</span>
                    {data.title.split(data.titleHighlight)[1]}
                  </>
                ) : (
                  data.title
                )}
              </h1>
              
              {/* Hero Image - Mobile only */}
              <div className="lg:hidden mb-6">
                {data.heroImage ? (
                  <picture>
                    {data.heroImageMobile && (
                      <source 
                        srcSet={resolveImageSrc(data.heroImageMobile)} 
                        media="(max-width: 1023px)" 
                      />
                    )}
                    <img 
                      src={resolveImageSrc(data.heroImage)} 
                      alt={data.heroImageAlt || `${data.title} - professional commercial services`}
                      title={data.heroImageTitle}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      width={800}
                      height={600}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </picture>
                ) : (
                  <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Section Image</span>
                  </div>
                )}
              </div>
              
              {/* Tagline */}
              <p className="text-xl text-muted-foreground mb-8">
                {renderTextWithLinks(data.tagline)}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="/#contact">
                    Get an Assessment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="mailto:info@makegood.melbourne">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Hero Image - Desktop only */}
            <div className="hidden lg:block">
              {data.heroImage ? (
                <img 
                  src={resolveImageSrc(data.heroImage)} 
                  alt={data.heroImageAlt || `${data.title} - professional commercial services`}
                  title={data.heroImageTitle}
                  className="aspect-[4/3] w-full object-cover rounded-lg"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              ) : (
                <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">Section Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - 2 Column Layout */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-xl max-w-none">
            {/* Styled Header - matching homepage */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              {data.aboutTitlePrefix} <span className="text-primary">{data.aboutTitleHighlight}</span>
            </h2>
            
            {/* Two Column Content */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-xl text-muted-foreground">
              <div>
                {data.aboutContentLeft.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed last:mb-0">
                    {renderTextWithLinks(paragraph)}
                  </p>
                ))}
              </div>
              <div>
                {data.aboutContentRight.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed last:mb-0">
                    {renderTextWithLinks(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {(!data.processSteps || data.processSteps.length === 0) && <SimpleProcess />}

      {/* Scope Areas */}
      {data.scopeRows && data.scopeRows.length > 0 && (
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{data.scopeTitle || 'STRIP OUT'} <span className="text-primary">{data.scopeTitleHighlight || 'SCOPE'}</span></h2>
              <p className="text-muted-foreground text-lg">{data.scopeSubtitle || 'What we can remove, coordinate and prepare during a commercial or industrial strip out.'}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.scopeRows.map((row) => {
                const cardContent = (
                  <div className="rounded-lg border border-border bg-card h-full overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    {row.image && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                        <img
                          src={resolveImageSrc(row.image)}
                          alt={row.imageAlt || `${row.scope} Melbourne strip out scope`}
                          title={row.imageTitle}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          width={600}
                          height={375}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="border-t-4 border-t-primary/70 p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{row.scope}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{row.worksIncluded}</p>
                      {row.link && (
                        <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                          {row.linkLabel || 'Learn more'}
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
      )}

      {/* Property Types */}
      {data.propertyTypes && data.propertyTypes.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{data.propertyTypesTitle || 'PROPERTY TYPES WE'} <span className="text-primary">{data.propertyTypesTitleHighlight || 'STRIP OUT'}</span></h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{data.propertyTypesSubtitle || 'Office, warehouse, factory, retail, medical and hospitality tenancies each need a different strip out sequence. We plan the work around the site, access and handover path.'}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.propertyTypes.map((property) => (
                <article key={property.title} className="rounded-lg border border-border border-t-4 border-t-primary/70 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{property.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Process */}
      {data.processSteps && data.processSteps.length > 0 && (
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl text-foreground mb-4">{data.processTitle || 'OUR PROCESS'}</h2>
              {data.processSubtitle && <p className="text-muted-foreground text-lg max-w-3xl">{data.processSubtitle}</p>}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {data.processSteps.map((step, index) => (
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
      )}

      {/* Services Carousel or Grid */}
      {data.useGrid ? (
        <SectionServicesGrid 
          serviceSlugs={data.serviceSlugs}
          title={data.carouselTitle || "Our Services"}
          titleHighlight={data.carouselTitleHighlight}
          description={data.carouselDescription}
          backgroundClassName={data.processSteps && data.processSteps.length > 0 ? "bg-background" : undefined}
        />
      ) : (
        <SectionServicesCarousel 
          serviceSlugs={data.serviceSlugs}
          title={data.carouselTitle || "Remediation Services"}
          titleHighlight={data.carouselTitleHighlight}
          description={data.carouselDescription}
          backgroundClassName={data.processSteps && data.processSteps.length > 0 ? "bg-background" : undefined}
        />
      )}

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              {data.faqTitle || "Frequently Asked Questions"}
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              {data.faqSubtitle || "Common questions about our services"}
            </p>

            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, index) => (
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
      )}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{data.ctaTitle}</h2>
          {data.ctaSubtitle && <p className="text-xl text-primary font-semibold mb-4">{data.ctaSubtitle}</p>}
          <p className="text-lg text-muted-foreground mb-8">{renderTextWithLinks(data.ctaText)}</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="/#contact">Get a Fixed-Price Quote</a>
          </Button>
        </div>
      </section>

      </div>
    </>
  );
};

export default SectionLandingTemplate;
