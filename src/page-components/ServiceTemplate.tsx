import { Helmet } from "@/lib/helmet";
import { useParams } from "react-router-dom";
import { getServiceBySlug, getPublishedServices } from "@/data/services";
import { renderTextWithLinks } from "@/lib/textWithLinks";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
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

interface ServiceTemplateProps {
  slug?: string;
}

const ServiceTemplate = ({ slug: propSlug }: ServiceTemplateProps) => {
  const params = useParams<{ slug: string }>();
  const slug = propSlug || params.slug;
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Redirect if service not found OR not published
  if (!service || service.published !== true) {
    window.location.href = '/capabilities';
    return null;
  }

  // Get related services from navigation categories (services in same category)
  const serviceCategories = [
    { label: "Floor Restoration", slugs: ['warehouse-floor-restoration', 'epoxy-flooring', 'line-marking', 'pallet-racking-removal'] },
    { label: "Specialist Trades", slugs: ['handover-cleaning', 'make-good-painting', 'ceiling-tile-replacement', 'patching-plastering', 'electrical-make-safe', 'led-lighting', 'end-of-lease-relocation'] },
    { label: "Structural & Remediation", slugs: ['structural-remediation', 'polycarbonate-roofing-skylights', 'cladding-glazing', 'concrete-floor-repair', 'waterproofing'] }
  ];
  
  const currentCategory = serviceCategories.find(cat => cat.slugs.includes(service.slug));
  const relatedSlugs = currentCategory?.slugs.filter(s => s !== service.slug) || [];
  const relatedServices = getPublishedServices()
    .filter(s => relatedSlugs.includes(s.slug))
    .slice(0, 3);

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
      
      {/* OG/Twitter meta tags are handled by Astro's BaseLayout for static generation */}
      {/* Only structured data (JSON-LD) needs client-side rendering */}
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
        <section className="bg-secondary pt-6 pb-10 md:pt-10 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  {service.title.includes('Melbourne') ? (
                    <>
                      {service.title.replace(' Melbourne', '')} <span className="text-primary">Melbourne</span>
                    </>
                  ) : (
                    service.title
                  )}
                </h1>
                
                {/* Hero Image - Mobile only, between title and description */}
                <div className="lg:hidden mb-6">
                  {service.heroImage ? (
                    <img 
                      src={resolveImageSrc(service.heroImage)} 
                      alt={service.heroImageAlt || `${service.name} Melbourne - professional commercial services`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      width={800}
                      height={600}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Service Image</span>
                    </div>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-xl text-muted-foreground mb-8">
                  {renderTextWithLinks(service.heroText)}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
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
              
              {/* Hero Image - Desktop only */}
              <div className="hidden lg:block">
                {service.heroImage ? (
                  <img 
                    src={resolveImageSrc(service.heroImage)} 
                    alt={service.heroImageAlt || `${service.name} Melbourne - professional commercial services`}
                    className="aspect-[4/3] w-full object-cover rounded-lg"
                    width={800}
                    height={600}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
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
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-tertiary/10 rounded-full">
                    <Shield className="h-4 w-4 text-tertiary" />
                    <span className="text-sm font-medium text-tertiary">{badge}</span>
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

        {/* Featured Section Right After What We Deliver - Only when skipAboutSection is true */}
        {service.skipAboutSection && service.featuredSections && service.featuredSections.map((section, index) => {
          const paragraphs = section.description.split('\n\n');
          return (
            <section key={`early-featured-${index}`} className="py-16 bg-secondary">
              <div className="container mx-auto px-4">
                {/* Title - single element, positioned via CSS grid order */}
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 lg:col-span-2 lg:mb-0">
                  {section.title}
                </h2>
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  {/* Image - alternates: Right, Left, Right... */}
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
                  {/* Copy */}
                  <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                    {paragraphs.map((para, pIndex) => (
                      <p key={pIndex} className="text-xl text-muted-foreground leading-relaxed mt-4 first:mt-0">
                        {renderTextWithLinks(para)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* 3. About Section - Optional */}
        {!service.skipAboutSection && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              {/* Title - single element */}
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">{service.scopeTitle || `${service.name} Scope`}</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
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
                {/* Copy */}
                <div>
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

        {/* Process Section - After Scope (when processAfterScope is true) */}
        {service.processAfterScope && service.process && service.process.length > 0 && (
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
        )}

        {/* Comparison Table - Optional (only render here if not inserted between featured sections) */}
        {service.comparison && service.comparisonAfterSection === undefined && (
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
              {/* Title - single element */}
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                {service.featuredSection.title}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="lg:order-2">
                  {service.featuredSection.image ? (
                    <img 
                      src={resolveImageSrc(service.featuredSection.image)} 
                      alt={service.featuredSection.imageAlt || `${service.name} professional services Melbourne`}
                      className="aspect-[4/3] w-full object-cover rounded-lg"
                      style={{ objectPosition: '20% center' }}
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
                {/* Copy */}
                <div className="lg:order-1">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {service.featuredSection.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Featured Sections (multiple) with optional Process and Comparison insertion - Skip if already rendered early */}
        {service.featuredSections && !service.skipAboutSection && (() => {
          // Only create processSection if it's not already rendered after scope
          const processSection = service.process && service.process.length > 0 && !service.processAfterScope ? (
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

          const comparisonSection = service.comparison && service.comparisonAfterSection !== undefined ? (
            <section key="comparison-section" className="py-16 bg-background">
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
              <section key={`featured-${index}`} className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                  {/* Title - single element */}
                  <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  
                  <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                    {/* Image - alternates: Right, Left, Right... */}
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
                    {/* Copy */}
                    <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                      {paragraphs.map((para, pIndex) => (
                        <p key={pIndex} className="text-xl text-muted-foreground leading-relaxed mt-4 first:mt-0">
                          {renderTextWithLinks(para)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );

            // Insert comparison section after the specified index
            if (comparisonInsertAfterIndex !== undefined && index === comparisonInsertAfterIndex && comparisonSection) {
              elements.push(comparisonSection);
            }

            // Insert process section after the specified index
            if (processInsertAfterIndex !== undefined && index === processInsertAfterIndex && processSection) {
              elements.push(processSection);
            }
          });

          // If no processInsertAfterIndex specified or process wasn't inserted, add it at the end
          if (processInsertAfterIndex === undefined && processSection) {
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

        {/* Post-Comparison Sections - Appear after comparison table, before FAQ */}
        {service.postComparisonSections && service.postComparisonSections.map((section, index) => {
          const paragraphs = section.description.split('\n\n');
          const shouldReverseLayout = section.imageLeft || index % 2 === 1;
          return (
            <section key={`post-comparison-${index}`} className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={shouldReverseLayout ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                      {section.title}
                    </h2>
                    {paragraphs.map((para, pIndex) => (
                      <p key={pIndex} className="text-xl text-muted-foreground leading-relaxed mt-4 first:mt-0">
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
                    <a href="/#contact">
                      Get a Free Quote
                    </a>
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
                    <a href="/#contact">
                      Get a Free Quote
                    </a>
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
                        <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </a>
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
