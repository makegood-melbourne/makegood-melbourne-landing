import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        
        <main className="pt-24 pb-16">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 mb-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span>/</span>
              <a href="/locations" className="hover:text-foreground transition-colors">Service Areas</a>
              <span>/</span>
              <span className="text-foreground">{content.target_location}</span>
            </nav>
          </div>

          {/* Hero Section */}
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

          {/* Main Content */}
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Content Area */}
              <div className="lg:col-span-2">
                <article 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* CTA Card */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Get a Free Quote
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Contact us today for professional make good services in {content.target_location}.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="/#contact"
                        className="block"
                      >
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Mail className="h-4 w-4 mr-2" />
                          Request Quote
                        </Button>
                      </a>
                      <a 
                        href="tel:1300123456"
                        className="block"
                      >
                        <Button variant="outline" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          1300 123 456
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Service Areas Card */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      Other Service Areas
                    </h3>
                    <a 
                      href="/locations"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      View all areas →
                    </a>
                  </div>
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
