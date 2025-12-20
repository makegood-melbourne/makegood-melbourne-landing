import { Link } from "react-router-dom";
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

// Import service images
import palletRackingImage from "@/assets/services/pallet-racking-dismantling-warehouse-floor-melbourne.jpeg";
import epoxyFlooringImage from "@/assets/services/polished-epoxy-floor-industrial-warehouse-melbourne.jpeg";
import ceilingTileImage from "@/assets/services/ceiling-tile-replacement-commercial-office-melbourne.jpeg";
import lineMarkingImage from "@/assets/services/car-park-line-marking-restoration-aerial-melbourne.jpeg";
import warehouseCleaningImage from "@/assets/services/high-pressure-warehouse-cleaning-melbourne.png";
import concreteCancerImage from "@/assets/services/concrete-cancer-exposed-rebar-column-spalling-melbourne.jpeg";
import claddingImage from "@/assets/services/cladding-remediation-facade-glazing-melbourne.jpeg";
import emptyWarehouseImage from "@/assets/services/empty-warehouse-after-makegood-melbourne.png";

// Map service slugs to images
const serviceImages: Record<string, string> = {
  "pallet-racking-removal": palletRackingImage,
  "epoxy-flooring": epoxyFlooringImage,
  "ceiling-tile-replacement": ceilingTileImage,
  "line-marking": lineMarkingImage,
  "commercial-cleaning": warehouseCleaningImage,
  "structural-remediation": concreteCancerImage,
  "cladding-glazing": claddingImage,
  "warehouse-make-good": emptyWarehouseImage,
  "office-strip-out": emptyWarehouseImage,
  "commercial-make-good": emptyWarehouseImage,
};

const ServicesCarousel = () => {
  const publishedServices = getPublishedServices();
  
  // Get featured services (those with images)
  const featuredServices = publishedServices
    .filter(service => serviceImages[service.slug])
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
                <Link to={`/services/${service.slug}`} className="block group">
                  <Card className="overflow-hidden border-border bg-card h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={serviceImages[service.slug]}
                        alt={service.name}
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
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/capabilities">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
