import { Helmet } from "@/lib/helmet";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionServicesCarousel from "@/components/SectionServicesCarousel";
import { Button } from "@/components/ui/button";
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
  
  // Services Carousel
  serviceSlugs: string[];
  carouselTitle?: string;
  carouselTitleHighlight?: string;  // Optional words to highlight in orange
  carouselDescription?: string;
  
  // Related Services Block (optional - appears between carousel and FAQ)
  relatedServicesBlock?: RelatedServicesBlock;
  
  // FAQ
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
      "email": "enquiries@makegood.melbourne"
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

      {/* Breadcrumbs */}
      <div className="bg-secondary pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/capabilities" },
              { label: data.title.replace(' Melbourne', '') }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-secondary pt-6 pb-10 md:pt-10 md:pb-12">
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
              
              {/* Tagline */}
              <p className="text-xl text-muted-foreground mb-8">
                {renderTextWithLinks(data.tagline)}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="/#contact">
                    Get a Free Assessment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="mailto:enquiries@makegood.melbourne">
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
          
          {/* Trust Badges - 4 vertical badges */}
          {data.trustBadges && data.trustBadges.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {data.trustBadges.map((badge, index) => {
                const IconComponent = 
                  badge.icon === "shield" ? Shield :
                  badge.icon === "compass" ? Compass :
                  badge.icon === "dollar" ? BadgeDollarSign :
                  badge.icon === "document" ? FileText : 
                  badge.icon === "clipboard" ? ClipboardCheck : Shield;
                
                return (
                  <div key={index} className="flex flex-col items-center text-center gap-2">
                    <IconComponent className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">{badge.title}</span>
                  </div>
                );
              })}
            </div>
          )}
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

      {/* Services Carousel */}
      <SectionServicesCarousel 
        serviceSlugs={data.serviceSlugs}
        title={data.carouselTitle || "Remediation Services"}
        titleHighlight={data.carouselTitleHighlight}
        description={data.carouselDescription}
      />

      {/* Related Services Block - Spotlight-style cards matching structural-remediation */}
      {data.relatedServicesBlock && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              {data.relatedServicesBlock.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our strip out services are part of a comprehensive end-of-lease solution. We coordinate all related works to deliver a seamless project.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedServicesBlock.cards.map((card, index) => (
                <a
                  key={index}
                  href={`/services/${card.slug}`}
                  className="block group"
                >
                  <div className="bg-secondary border border-border hover:border-primary/50 transition-colors overflow-hidden h-full rounded-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                        <span className="text-muted-foreground/50 text-sm">Service Image</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{card.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our remediation services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {data.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed">
                    {renderTextWithLinks(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{data.ctaTitle}</h2>
          {data.ctaSubtitle && (
            <p className="text-2xl md:text-3xl font-bold text-primary mb-6">{data.ctaSubtitle}</p>
          )}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {renderTextWithLinks(data.ctaText)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/#contact">
                Get a Free Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <a href="mailto:enquiries@makegood.melbourne">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionLandingTemplate;
