import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

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
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Content Area */}
              <div className="lg:col-span-2">
                <Card className="p-8 mb-8 bg-card">
                  <article className="prose prose-lg max-w-none dark:prose-invert
                    prose-headings:font-bold
                    prose-h1:text-4xl prose-h1:mb-6 prose-h1:text-foreground
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-accent/20 prose-h2:text-foreground
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground
                    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-foreground
                    prose-p:text-base prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:my-6 prose-ul:space-y-3 prose-li:text-muted-foreground prose-li:leading-relaxed
                    prose-ol:my-6 prose-ol:space-y-3
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
                    prose-code:text-accent prose-code:bg-accent/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                    [&>*:first-child]:mt-0
                    [&>*:last-child]:mb-0">
                    <ReactMarkdown
                      components={{
                        h2: ({ children }) => (
                          <h2 className="flex items-center gap-3">
                            <span className="flex-1">{children}</span>
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="flex items-center gap-2">
                            <span className="w-1 h-6 bg-accent rounded-full"></span>
                            {children}
                          </h3>
                        ),
                        ul: ({ children }) => (
                          <ul className="space-y-3 my-6">
                            {children}
                          </ul>
                        ),
                        li: ({ children }) => (
                          <li className="flex items-start gap-3">
                            <span className="text-accent mt-1.5">•</span>
                            <span className="flex-1">{children}</span>
                          </li>
                        ),
                        p: ({ children }) => (
                          <p className="mb-6 last:mb-0">{children}</p>
                        ),
                      }}
                    >
                      {content.content}
                    </ReactMarkdown>
                  </article>
                </Card>
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
