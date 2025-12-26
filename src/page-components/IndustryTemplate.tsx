import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertTriangle, ImageIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryBySlug, Industry } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";

const ImagePlaceholder = ({ description, className = "" }: { description: string; className?: string }) => (
  <div className={`bg-secondary/50 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center p-8 ${className}`}>
    <ImageIcon className="h-12 w-12 text-muted-foreground mb-3" />
    <p className="text-sm text-muted-foreground text-center max-w-xs">
      <span className="font-medium">Image needed:</span> {description}
    </p>
  </div>
);

interface IndustryTemplateProps {
  slug?: string;
}

const IndustryTemplate = ({ slug: propSlug }: IndustryTemplateProps) => {
  const params = useParams<{ slug: string }>();
  const slug = propSlug || params.slug;
  const industry = getIndustryBySlug(slug || "");

  if (!industry) {
    if (typeof window !== 'undefined') {
      window.location.href = '/404';
    }
    return null;
  }

  const relatedServices = industry.services
    .map(serviceSlug => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  // Service schema (breadcrumbs handled by Breadcrumbs component)
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
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <meta property="og:title" content={industry.metaTitle} />
        <meta property="og:description" content={industry.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://makegood.melbourne/industries/${industry.slug}`} />
        <meta property="og:image" content="https://makegood.melbourne/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={industry.metaTitle} />
        <meta name="twitter:description" content={industry.metaDescription} />
        <meta name="twitter:image" content="https://makegood.melbourne/og-image.jpg" />
        <link rel="canonical" href={`https://makegood.melbourne/industries/${industry.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(industrySchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[
            { label: "Industries", href: "/capabilities" },
            { label: industry.name }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {industry.name} Specialists
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {industry.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {industry.heroText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/our-process">
                    Our Process
                  </a>
                </Button>
              </div>
            </div>
            <div>
              {industry.heroImage ? (
                <img 
                  src={industry.heroImage} 
                  alt={industry.title}
                  className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                  width={800}
                  height={600}
                />
              ) : industry.heroImagePlaceholder ? (
                <ImagePlaceholder 
                  description={industry.heroImagePlaceholder} 
                  className="aspect-[4/3]"
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {industry.introduction}
          </p>
        </div>
      </section>

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
                      src={section.image} 
                      alt={section.imageAlt || section.title}
                      className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                      width={800}
                      height={600}
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

      {/* Challenges We Solve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {industry.name} Make Good Challenges
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Unique requirements we handle for {industry.name.toLowerCase()} properties
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
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

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            What We Deliver
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Comprehensive make good for {industry.name.toLowerCase()} properties
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Services for {industry.name}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Specialist services commonly required for {industry.name.toLowerCase()} make goods
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                service && (
                  <a
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group block"
                  >
                    <Card className="bg-card border-border h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center text-primary text-sm mt-4 group-hover:underline">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {industry.name} Make Good FAQs
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Common questions about {industry.name.toLowerCase()} make goods
          </p>

          <Accordion type="single" collapsible className="w-full">
            {industry.faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a {industry.name} Make Good?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free consultation and quote. We'll assess your requirements and provide a comprehensive proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IndustryTemplate;
