import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getPublishedServices } from "@/data/services";
import { resolveImageSrc } from "@/lib/resolveImageSrc";

interface SectionServicesGridProps {
  serviceSlugs: string[];
  title?: string;
  titleHighlight?: string;  // Optional words to highlight in orange
  description?: string;
}

const SectionServicesGrid = ({ 
  serviceSlugs, 
  title = "Our Services",
  titleHighlight,
  description 
}: SectionServicesGridProps) => {
  const publishedServices = getPublishedServices();
  
  // Get services matching the provided slugs, maintaining the order
  const sectionServices = serviceSlugs
    .map(slug => publishedServices.find(s => s.slug === slug))
    .filter((service): service is NonNullable<typeof service> => service !== undefined);

  if (sectionServices.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {(title || description) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">
                {titleHighlight && title.includes(titleHighlight) ? (
                  <>
                    {title.split(titleHighlight)[0]}
                    <span className="text-primary">{titleHighlight}</span>
                    {title.split(titleHighlight)[1]}
                  </>
                ) : (
                  title
                )}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Static Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionServices.map((service) => (
            <a key={service.slug} href={`/services/${service.slug}`} className="block group">
              <Card className="overflow-hidden border-border bg-card h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  {service.heroImage ? (
                    <img
                      src={resolveImageSrc(service.heroImage)}
                      alt={service.heroImageAlt || service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={450}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">Service Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-foreground mb-1 uppercase">
                      {service.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {service.description}
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
  );
};

export default SectionServicesGrid;
