import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Phone, Mail, CheckCircle, Building2, Wrench, Package, Shield, Hammer, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

import officeStripOut from "@/assets/blog/office-strip-out.webp";
import leaseTransitions from "@/assets/blog/lease-transitions.webp";
import electricalMakeSafe from "@/assets/blog/electrical-make-safe.jpg";
import buildingRemediation from "@/assets/blog/building-defect-remediation.webp";
import wasteManagement from "@/assets/blog/waste-management-sustainability.jpg";
import epoxyFlooring from "@/assets/blog/epoxy-flooring.webp";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

// Icon mapping for different service types
const serviceIcons: { [key: string]: any } = {
  'office': Building2,
  'strip': Wrench,
  'lease': Package,
  'safe': Shield,
  'remediation': Hammer,
  'make good': Settings,
  'restoration': Wrench,
  'building': Building2,
  'commercial': Building2,
  'default': Settings
};

const getServiceIcon = (title: string) => {
  const titleLower = title.toLowerCase();
  for (const [key, icon] of Object.entries(serviceIcons)) {
    if (titleLower.includes(key)) return icon;
  }
  return serviceIcons.default;
};

const serviceImages: { [key: string]: string } = {
  'strip': officeStripOut,
  'office': officeStripOut,
  'lease': leaseTransitions,
  'make safe': electricalMakeSafe,
  'safe': electricalMakeSafe,
  'remediation': buildingRemediation,
  'remedial': buildingRemediation,
  'waste': wasteManagement,
  'floor': epoxyFlooring,
  'default': heroWarehouse
};

const getServiceImage = (title: string) => {
  const titleLower = title.toLowerCase();
  for (const [key, img] of Object.entries(serviceImages)) {
    if (titleLower.includes(key)) return img;
  }
  return serviceImages.default;
};

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: content, isLoading } = useQuery({
    queryKey: ["location-page", slug],
    queryFn: async () => {
      // Try exact slug match first
      let { data, error } = await supabase
        .from("published_content")
        .select("*")
        .eq("slug", slug)
        .eq("content_type", "location_page")
        .maybeSingle();

      // If not found, try with common SEO prefixes
      if (!data && !error) {
        const slugVariants = [
          `make-good-services-${slug}`,
          `makegood-${slug}`,
          `${slug}-make-good`,
        ];

        for (const variant of slugVariants) {
          const result = await supabase
            .from("published_content")
            .select("*")
            .eq("slug", variant)
            .eq("content_type", "location_page")
            .maybeSingle();

          if (result.data) {
            data = result.data;
            break;
          }
        }
      }

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!content) {
    return <Navigate to="/404" replace />;
  }

  // Get hero image if available
  const heroImage = content.generated_images?.[0]?.url;

  // Generate structured data for local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Make Good Melbourne - ${content.target_location}`,
    "description": content.meta_description,
    "areaServed": {
      "@type": "City",
      "name": content.target_location
    },
    "serviceType": "Commercial Make Good Services",
    "url": `${window.location.origin}/locations/${slug}`
  };

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.meta_description} />
        <link rel="canonical" href={`${window.location.origin}/locations/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20 pb-16">
          {/* Hero Section with Image */}
          {heroImage && (
            <div className="relative h-[400px] mb-12">
              <div className="absolute inset-0">
                <img 
                  src={heroImage} 
                  alt={content.target_location}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
              </div>
              <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
                <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                  <span>/</span>
                  <a href="/locations" className="hover:text-white transition-colors">Service Areas</a>
                  <span>/</span>
                  <span className="text-white">{content.target_location}</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-10 w-10 text-accent" />
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    {content.target_location}
                  </h1>
                </div>
                <p className="text-xl text-white/90 max-w-3xl">
                  {content.meta_description}
                </p>
              </div>
            </div>
          )}

          {/* No Hero Image Fallback */}
          {!heroImage && (
            <>
              <div className="container mx-auto px-4 mb-8">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                  <a href="/" className="hover:text-foreground transition-colors">Home</a>
                  <span>/</span>
                  <a href="/locations" className="hover:text-foreground transition-colors">Service Areas</a>
                  <span>/</span>
                  <span className="text-foreground">{content.target_location}</span>
                </nav>
              </div>
              <div className="container mx-auto px-4 mb-12">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-8 w-8 text-accent" />
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                      {content.target_location}
                    </h1>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    {content.meta_description}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Main Content */}
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Content Area */}
              <div className="lg:col-span-2">
                {/* Introduction Section */}
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    {content.target_location} Make Good Services
                  </h2>
                  {(() => {
                    const introText = content.content.split('###')[0];
                    const paragraphs = introText
                      .split('\n\n')
                      .filter(p => p.trim() && !p.startsWith('#'))
                      .map(p => p.trim());
                    
                    return paragraphs.map((para, idx) => (
                      <p key={idx} className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {para}
                      </p>
                    ));
                  })()}
                </div>

                {/* Service Cards Grid */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Our Services</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(() => {
                      const sections = content.content.split('###').slice(1);
                      
                      return sections.map((section, index) => {
                        const lines = section.trim().split('\n');
                        const title = lines[0]?.replace(/^#+\s*/, '').trim();
                        const descriptionCandidate = lines.find(line => line && !line.startsWith('-') && !line.startsWith('#'))?.trim();
                        const bullets = lines
                          .filter(line => line.trim().startsWith('-'))
                          .map(line => line.replace(/^-\s*/, '').trim());

                        const Icon = getServiceIcon(title || '');
                        const imageSrc = getServiceImage(title || '');

                        const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
                        const isDuplicate = descriptionCandidate && title
                          ? normalize(descriptionCandidate) === normalize(title)
                          : false;
                        const summary = !isDuplicate && descriptionCandidate
                          ? descriptionCandidate
                          : (bullets.length ? `Includes: ${bullets.slice(0,3).join(', ')}` : '');

                        return (
                          <a key={index} href="/#contact" className="group block" aria-label={`Request quote for ${title} in ${content.target_location}`}>
                            <Card className="p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 border-border hover:border-accent/30 bg-card">
                              <div className="flex flex-col h-full">
                                <div className="overflow-hidden">
                                  <img
                                    src={imageSrc}
                                    alt={`${title} in ${content.target_location}`}
                                    className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>

                                <div className="p-6">
                                  <div className="flex items-start gap-4 mb-3">
                                    <div className={`p-2.5 rounded-md bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300`}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                                      {title}
                                    </h3>
                                  </div>

                                  {summary && (
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                      {summary}
                                    </p>
                                  )}

                                  {bullets.length > 0 && (
                                    <ul className="space-y-2">
                                      {bullets.slice(0,3).map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                          <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                                          <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}

                                  <div className="mt-5">
                                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Get a quote</Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </a>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* CTA Card */}
                  <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Get a Free Quote
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Contact us today for professional make good services in {content.target_location}.
                    </p>
                    <div className="space-y-3">
                      <a href="/#contact" className="block">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Mail className="h-4 w-4 mr-2" />
                          Request Quote
                        </Button>
                      </a>
                      <a href="tel:1300123456" className="block">
                        <Button variant="outline" className="w-full border-accent/50 hover:bg-accent/10">
                          <Phone className="h-4 w-4 mr-2" />
                          1300 123 456
                        </Button>
                      </a>
                    </div>
                  </Card>

                  {/* Service Areas Card */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      Other Service Areas
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We service all Melbourne metro areas
                    </p>
                    <a 
                      href="/locations"
                      className="text-accent hover:text-accent/80 transition-colors font-medium inline-flex items-center gap-2"
                    >
                      View all areas →
                    </a>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
