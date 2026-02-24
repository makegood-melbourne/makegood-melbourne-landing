import { Helmet } from "@/lib/helmet";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import SimpleProcess from "@/components/SimpleProcess";
import SectionServicesCarousel from "@/components/SectionServicesCarousel";
import SectionServicesGrid from "@/components/SectionServicesGrid";
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
  
  // Services Carousel/Grid
  serviceSlugs: string[];
  carouselTitle?: string;
  carouselTitleHighlight?: string;  // Optional words to highlight in orange
  carouselDescription?: string;
  useGrid?: boolean;  // If true, displays services in static grid instead of carousel
  
  // Related Services Block (optional - appears between carousel and FAQ)
  relatedServicesBlock?: RelatedServicesBlock;
  
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
      <div className="bg-secondary pt-20">
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
      <SimpleProcess />

      {/* Services Carousel or Grid */}
      {data.useGrid ? (
        <SectionServicesGrid 
          serviceSlugs={data.serviceSlugs}
          title={data.carouselTitle || "Our Services"}
          titleHighlight={data.carouselTitleHighlight}
          description={data.carouselDescription}
        />
      ) : (
        <SectionServicesCarousel 
          serviceSlugs={data.serviceSlugs}
          title={data.carouselTitle || "Remediation Services"}
          titleHighlight={data.carouselTitleHighlight}
          description={data.carouselDescription}
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

      </div>
    </>
  );
};

export default SectionLandingTemplate;
