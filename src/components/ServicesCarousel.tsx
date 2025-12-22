import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getPublishedServices } from "@/data/services";

// Priority order for carousel display
const priorityOrder = [
  "concrete-slab-restoration",
  "commercial-cleaning",
  "ceiling-tile-replacement",
];

const ServicesCarousel = () => {
  const publishedServices = getPublishedServices();
  
  // Get featured services (those with hero images), sorted by priority
  const featuredServices = publishedServices
    .filter(service => service.heroImage)
    .sort((a, b) => {
      const aIndex = priorityOrder.indexOf(a.slug);
      const bIndex = priorityOrder.indexOf(b.slug);
      // Priority items come first, others maintain original order
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    })
    .slice(0, 8);

  if (featuredServices.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From strip outs to specialist trades, we handle every aspect of your make good
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {featuredServices.map((service) => (
              <CarouselItem key={service.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <a href={`/services/${service.slug}`} className="block group">
                  <Card className="overflow-hidden border-border bg-card h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={service.heroImage}
                        alt={service.heroImageAlt || service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-foreground mb-1">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <a href="/capabilities">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
