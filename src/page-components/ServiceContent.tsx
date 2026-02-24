import { Helmet } from "@/lib/helmet";
import { getServiceBySlug, getPublishedServices } from "@/data/services";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
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
import TabbedScopePanel from "@/components/TabbedScopePanel";

interface ServiceContentProps {
  slug: string;
}

const ServiceContent = ({ slug }: ServiceContentProps) => {
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service || service.published !== true) {
    return null;
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
      "email": "info@makegood.melbourne"
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

  // ─── Global background alternation ───
  // The hero section before this component uses bg-secondary (#2e2e2e, close to dark).
  // We alternate between bg-muted (#404040, LIGHT) and bg-background (#222, DARK)
  // starting with bg-muted so the first section contrasts with the hero.
  // The CTA after this component uses bg-secondary, so the last section being
  // bg-background will also contrast with it.
  let sectionIndex = 0;
  const nextBg = () => sectionIndex++ % 2 === 0 ? 'bg-muted' : 'bg-background';

  // Pre-calculate backgrounds for all sections that will render,
  // so we can reference them in JSX.
  // Section order (conditional — only rendered sections consume an index):
  // 1. Capabilities / What We Deliver (always)
  // 2. Early featured sections (only if skipAboutSection)
  // 3. Process after skip (only if skipAboutSection && process && !processAfterScope && !processAfterSpotlight)
  // 4. Spotlight cards (only if spotlightCards)
  // 5. Process after spotlight (only if processAfterSpotlight)
  // 6. About/Scope section (only if !skipAboutSection)
  // 7. Process after scope (only if processAfterScope)
  // 8. Comparison table (only if comparison && comparisonAfterSection === undefined)
  // 9. Featured sections with interleaved process/comparison (only if featuredSections && !skipAboutSection)
  // 10. Process fallback (only if no featuredSections)
  // 11. Post-comparison sections
  // 12. Linked spotlight block OR Related services
  // 13. FAQ

  // We'll compute backgrounds eagerly for each section that will render.
  const bgCapabilities = nextBg();

  // Early featured sections (skipAboutSection path)
  const bgEarlyFeatured: string[] = [];
  if (service.skipAboutSection && service.featuredSections) {
    service.featuredSections.forEach(() => bgEarlyFeatured.push(nextBg()));
  }

  // Process after skip
  let bgProcessAfterSkip: string | null = null;
  if (service.skipAboutSection && service.process && service.process.length > 0 && !service.processAfterScope && !service.processAfterSpotlight) {
    bgProcessAfterSkip = nextBg();
  }

  // Spotlight cards
  let bgSpotlight: string | null = null;
  if (service.spotlightCards && service.spotlightCards.length > 0) {
    bgSpotlight = nextBg();
  }

  // Process after spotlight
  let bgProcessAfterSpotlight: string | null = null;
  if (service.processAfterSpotlight && service.process && service.process.length > 0) {
    bgProcessAfterSpotlight = nextBg();
  }

  // About/Scope section
  let bgAbout: string | null = null;
  if (!service.skipAboutSection) {
    bgAbout = nextBg();
  }

  // Process after scope
  let bgProcessAfterScope: string | null = null;
  if (service.processAfterScope && service.process && service.process.length > 0) {
    bgProcessAfterScope = nextBg();
  }

  // Comparison table (standalone — not inserted between featured sections)
  let bgComparison: string | null = null;
  if (service.comparison && service.comparisonAfterSection === undefined) {
    bgComparison = nextBg();
  }

  // Tabbed scope panel (replaces featured sections when present)
  let bgTabbedScope: string | null = null;
  if (service.tabbedScope) {
    bgTabbedScope = nextBg();
  }

  // Featured sections with interleaved process/comparison (non-skipAboutSection path)
  const bgFeatured: string[] = [];
  let bgProcessInFeatured: string | null = null;
  let bgComparisonInFeatured: string | null = null;
  if (service.featuredSections && !service.skipAboutSection && !service.tabbedScope) {
    const processInsertAfterIndex = service.processAfterSection;
    const comparisonInsertAfterIndex = service.comparisonAfterSection;
    const hasProcess = service.process && service.process.length > 0 && !service.processAfterScope && !service.processAfterSpotlight;
    const hasComparison = service.comparison && service.comparisonAfterSection !== undefined;

    service.featuredSections.forEach((_section, index) => {
      bgFeatured.push(nextBg());

      if (hasComparison && comparisonInsertAfterIndex !== undefined && index === comparisonInsertAfterIndex) {
        bgComparisonInFeatured = nextBg();
      }
      if (hasProcess && processInsertAfterIndex !== undefined && index === processInsertAfterIndex) {
        bgProcessInFeatured = nextBg();
      }
    });

    // Process at end of featured sections (if no specific insertion point)
    if (hasProcess && processInsertAfterIndex === undefined) {
      bgProcessInFeatured = nextBg();
    }
  }

  // Process fallback (no featured sections)
  let bgProcessFallback: string | null = null;
  if (!service.featuredSections && service.process && service.process.length > 0) {
    bgProcessFallback = nextBg();
  }

  // Post-comparison sections
  const bgPostComparison: string[] = [];
  if (service.postComparisonSections) {
    service.postComparisonSections.forEach(() => bgPostComparison.push(nextBg()));
  }

  // Linked spotlight block OR related services
  let bgRelated: string | null = null;
  if (service.linkedSpotlightBlock || (!service.relatedServicesBlock && !service.linkedSpotlightBlock && relatedServices.length > 0)) {
    bgRelated = nextBg();
  }

  // FAQ
  let bgFaq: string | null = null;
  if (service.faqs && service.faqs.length > 0) {
    bgFaq = nextBg();
  }

  return (
    <>
      {/* JSON-LD structured data */}
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

      {/* Capabilities / What's Included (varies by service) */}
      {service.capabilityCards && service.capabilityCards.length > 0 ? (
        <section className={`py-16 ${bgCapabilities}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-2">
              {service.capabilitiesTitle || "Capabilities"}
            </h2>
            {service.capabilitiesSubtitle && (
              <p className="text-muted-foreground mb-10 max-w-3xl">
                {service.capabilitiesSubtitle}
              </p>
            )}

            <div className="grid lg:grid-cols-3 gap-6">
              {service.capabilityCards.map((card, index) => (
                <Card key={index} className="bg-secondary border-border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {card.title}
                    </h3>
                    <ul className="space-y-2">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className={`py-16 ${bgCapabilities}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-10">
              What We Deliver
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Featured Section Right After What We Deliver - Only when skipAboutSection is true */}
      {service.skipAboutSection && service.featuredSections && service.featuredSections.map((section, index) => {
        const paragraphs = section.description.split('\n\n');
        return (
          <section key={`early-featured-${index}`} className={`py-16 ${bgEarlyFeatured[index]}`}>
            <div className="container mx-auto px-4">
              <h2 
                className="text-3xl md:text-4xl text-foreground mb-6 lg:col-span-2 lg:mb-0"
                dangerouslySetInnerHTML={{ __html: section.title }}
              />
              
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                  {section.image ? (
                    <img 
                      src={resolveImageSrc(section.image)} 
                      alt={section.imageAlt || `${service.name} professional services Melbourne`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      style={{ objectPosition: section.imagePosition === 'left' ? 'left center' : section.imagePosition === 'right' ? 'right center' : 'center' }}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Service Image</span>
                    </div>
                  )}
                </div>
                <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                  {paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-xl text-foreground leading-relaxed mt-4 first:mt-0">
                      {renderTextWithLinks(para)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}



      {/* Process Section - For services that skip the About section */}
      {service.skipAboutSection && service.process && service.process.length > 0 && !service.processAfterScope && !service.processAfterSpotlight && (
        <section className={`py-16 ${bgProcessAfterSkip}`}>
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
      )}

      {/* Key Service Spotlight Section - Only for services with spotlightCards */}
      {service.spotlightCards && service.spotlightCards.length > 0 && (
        <section className={`py-16 ${bgSpotlight}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              DELIVERING PROVEN <span className="text-primary">SOLUTIONS</span>
            </h2>
            <p className="text-lg text-foreground mb-10">
              From concrete degradation to slab settlement, our team is equipped to manage complex structural challenges. We deliver proven, engineered solutions for a range of critical building failures.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {service.spotlightCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-secondary border-border hover:border-primary/50 transition-colors overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={resolveImageSrc(card.image)}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover"
                      width={600}
                      height={450}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section - After Spotlight Cards (when processAfterSpotlight is true) */}
      {service.processAfterSpotlight && service.process && service.process.length > 0 && (
        <section className={`py-16 ${bgProcessAfterSpotlight}`}>
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

      {/* About Section - Optional */}
      {!service.skipAboutSection && (
        <section className={`py-16 ${bgAbout}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">{service.scopeTitle || `${service.name} Scope`}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {service.secondaryImage ? (
                  <img 
                    src={resolveImageSrc(service.secondaryImage)} 
                    alt={service.secondaryImageAlt || `${service.name} Melbourne - professional commercial services`}
                    className="aspect-[4/3] w-full object-cover rounded-lg"
                    style={{ objectPosition: service.slug === 'epoxy-flooring' ? '100% center' : 'center' }}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                ) : service.heroImage ? (
                  <img 
                    src={resolveImageSrc(service.heroImage)} 
                    alt={service.heroImageAlt || `${service.name} Melbourne - professional commercial services`}
                    className="aspect-[4/3] w-full object-cover rounded-lg"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Service Image</span>
                  </div>
                )}
              </div>
              <div>
                {(service.scopeBody || service.description).split('\n\n').map((para, i) => (
                  <p key={i} className={`text-xl text-foreground leading-relaxed${i > 0 ? ' mt-4' : ''}`}>
                    {renderTextWithLinks(para)}
                  </p>
                ))}
                {!service.scopeBody && (
                  <p className="text-xl text-foreground leading-relaxed mt-4">
                    {service.slug === 'cladding-glazing' 
                      ? `Our experienced team delivers professional ${service.name.toLowerCase()} services across Melbourne's commercial buildings. We understand the critical importance of bringing buildings up to compliance with Australian Standards and building code requirements, working efficiently to minimise disruption while achieving quality results.`
                      : `Our experienced team delivers professional ${service.name.toLowerCase()} services across Melbourne's commercial and industrial properties. We understand the importance of meeting lease obligations and landlord requirements, working efficiently to minimise disruption while achieving quality results.`
                    }
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section - After Scope (when processAfterScope is true) */}
      {service.processAfterScope && service.process && service.process.length > 0 && (
        <section className={`py-16 ${bgProcessAfterScope}`}>
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
      )}

      {/* Comparison Table - Optional (only render here if not inserted between featured sections) */}
      {service.comparison && service.comparisonAfterSection === undefined && (
        <section className={`py-16 ${bgComparison}`}>
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

      {/* Tabbed Scope Panel (replaces featured sections when present) */}
      {service.tabbedScope && bgTabbedScope && (
        <TabbedScopePanel
          heading={service.tabbedScope.heading}
          tabs={service.tabbedScope.tabs}
          bgClass={bgTabbedScope}
        />
      )}

      {/* Featured Sections (multiple) with optional Process and Comparison insertion */}
      {service.featuredSections && !service.tabbedScope && !service.skipAboutSection && (() => {
        const processSection = service.process && service.process.length > 0 && !service.processAfterScope && !service.processAfterSpotlight ? (
          <section key="process-section" className={`py-16 ${bgProcessInFeatured}`}>
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
        ) : null;

        const comparisonSection = service.comparison && service.comparisonAfterSection !== undefined ? (
          <section key="comparison-section" className={`py-16 ${bgComparisonInFeatured}`}>
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
        ) : null;

        const processInsertAfterIndex = service.processAfterSection;
        const comparisonInsertAfterIndex = service.comparisonAfterSection;
        const elements: React.ReactNode[] = [];

        service.featuredSections.forEach((section, index) => {
          const paragraphs = section.description.split('\n\n');
          elements.push(
            <section key={`featured-${index}`} className={`py-16 ${bgFeatured[index]}`}>
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                  {section.title}
                </h2>
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                    {section.image ? (
                      <img 
                        src={resolveImageSrc(section.image)} 
                        alt={section.imageAlt || `${service.name} professional services Melbourne`}
                        className="aspect-[4/3] w-full object-cover rounded-lg"
                        style={{ objectPosition: section.imagePosition === 'left' ? 'left center' : section.imagePosition === 'right' ? 'right center' : 'center' }}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                        <span className="text-muted-foreground/50 text-sm">Service Image</span>
                      </div>
                    )}
                  </div>
                  <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                    {paragraphs.map((para, pIndex) => (
                      <p key={pIndex} className="text-xl text-foreground leading-relaxed mt-4 first:mt-0">
                        {renderTextWithLinks(para)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
          if (comparisonInsertAfterIndex !== undefined && index === comparisonInsertAfterIndex && comparisonSection) {
            elements.push(comparisonSection);
          }

          if (processInsertAfterIndex !== undefined && index === processInsertAfterIndex && processSection) {
            elements.push(processSection);
          }
        });

        if (processInsertAfterIndex === undefined && processSection) {
          elements.push(processSection);
        }

        return elements;
      })()}

      {/* Process Section - Only show if no featuredSections (fallback) */}
      {!service.featuredSections && service.process && service.process.length > 0 && (
        <section className={`py-16 ${bgProcessFallback}`}>
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

      {/* Post-Comparison Sections */}
      {service.postComparisonSections && service.postComparisonSections.map((section, index) => {
        const paragraphs = section.description.split('\n\n');
        const shouldReverseLayout = section.imageLeft || index % 2 === 1;
        return (
          <section key={`post-comparison-${index}`} className={`py-16 ${bgPostComparison[index]}`}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={shouldReverseLayout ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  {paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-xl text-foreground leading-relaxed mt-4 first:mt-0">
                      {renderTextWithLinks(para)}
                    </p>
                  ))}
                </div>
                <div className={shouldReverseLayout ? 'lg:order-1' : ''}>
                  {section.image ? (
                    <img
                      src={resolveImageSrc(section.image)}
                      alt={section.imageAlt || `${service.name} professional services Melbourne`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      style={{ objectPosition: section.imagePosition === 'left' ? 'left center' : section.imagePosition === 'right' ? 'right center' : 'center' }}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
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
      })}

      {/* Linked Spotlight Block - Related Services (must sit directly above FAQ) */}
      {service.linkedSpotlightBlock && (
        <section className={`py-16 ${bgRelated}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              {service.linkedSpotlightBlock.title}{" "}
              {service.linkedSpotlightBlock.titleHighlight && (
                <span className="text-primary">{service.linkedSpotlightBlock.titleHighlight}</span>
              )}
            </h2>
            {service.linkedSpotlightBlock.subtitle && (
              <p className="text-lg text-foreground mb-10">
                {service.linkedSpotlightBlock.subtitle}
              </p>
            )}
            <div className="grid md:grid-cols-3 gap-6">
              {service.linkedSpotlightBlock.cards.map((card, index) => {
                const linkedService = getServiceBySlug(card.slug);
                const imageSrc = linkedService?.heroImage
                  ? resolveImageSrc(linkedService.heroImage)
                  : undefined;

                return (
                  <a key={index} href={`/services/${card.slug}`} className="block group">
                    <Card className="bg-secondary border-border hover:border-primary/50 transition-colors overflow-hidden h-full">
                      <div className="aspect-[4/3] overflow-hidden">
                        {imageSrc ? (
                          <img
                            src={imageSrc}
                            alt={linkedService?.heroImageAlt || `${card.name} Melbourne`}
                            className="w-full h-full object-cover"
                            width={600}
                            height={450}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                            <span className="text-muted-foreground/50 text-sm">Service Image</span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{card.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Services - Only show if no custom relatedServicesBlock or linkedSpotlightBlock */}
      {!service.relatedServicesBlock && !service.linkedSpotlightBlock && relatedServices.length > 0 && (
        <section className={`py-16 ${bgRelated}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-foreground mb-10">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <a 
                  key={relatedService.slug} 
                  href={`/services/${relatedService.slug}`}
                  className="block group"
                >
                  <Card className="overflow-hidden border-border bg-card h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      {relatedService.heroImage ? (
                        <img
                          src={resolveImageSrc(relatedService.heroImage)}
                          alt={relatedService.heroImageAlt || relatedService.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          width={400}
                          height={300}
                        />
                      ) : (
                        <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                          <span className="text-muted-foreground/50 text-sm">Service Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {relatedService.name}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedService.description}
                      </p>
                      <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

       {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgFaq}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              {service.faqTitle || "Frequently Asked Questions"}
            </h2>
            {service.faqSubtitle && (
              <p className="text-center text-muted-foreground mb-10">
                {service.faqSubtitle}
              </p>
            )}

            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Before/After Slider - Only for End of Lease Relocation */}
      {service.slug === 'end-of-lease-relocation' && <BeforeAfterSlider />}

    </>
  );
};

export default ServiceContent;
