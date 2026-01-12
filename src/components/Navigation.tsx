import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/makegood-melbourne-logo.png";
import { getSortedLocations } from "@/data/locations";
import { getPublishedServices } from "@/data/services";
import { getAllIndustries } from "@/data/industries";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Service categories for navigation grouping (alphabetically sorted)
const serviceCategories = [
  {
    label: "Floor Restoration",
    slugs: ['warehouse-floor-restoration', 'epoxy-flooring', 'line-marking', 'pallet-racking-removal']
  },
  {
    label: "Specialist Trades",
    slugs: ['handover-cleaning', 'make-good-painting', 'ceiling-tile-replacement', 'patching-plastering', 'electrical-make-safe', 'led-lighting', 'end-of-lease-relocation']
  },
  {
    label: "Structural & Remediation",
    slugs: ['structural-remediation', 'polycarbonate-roofing-skylights', 'cladding-glazing', 'concrete-floor-repair', 'waterproofing']
  }
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getServicesByCategory = (slugs: string[]) => {
    const publishedServices = getPublishedServices();
    return publishedServices
      .filter(s => slugs.includes(s.slug))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={resolveImageSrc(logo)} alt="MakeGOOD Melbourne - Commercial Make Good Services" className="h-8 md:h-10 brightness-0 invert cursor-pointer" />
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border w-64">
                {serviceCategories.reduce((acc: React.ReactNode[], category, index) => {
                  const categoryServices = getServicesByCategory(category.slugs);
                  if (categoryServices.length === 0) return acc;
                  
                  acc.push(
                    <div key={category.label}>
                      {acc.length > 0 && <DropdownMenuSeparator />}
                      <DropdownMenuLabel className="text-primary text-xs uppercase tracking-wider">
                        {category.label}
                      </DropdownMenuLabel>
                      {categoryServices.map((service) => (
                        <DropdownMenuItem key={service.slug} asChild>
                          <a 
                            href={`/services/${service.slug}`}
                            className="cursor-pointer"
                          >
                            {service.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  );
                  return acc;
                }, [])}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a 
                    href="/capabilities"
                    className="cursor-pointer font-medium text-accent"
                  >
                    View All Capabilities
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {getSortedLocations().map((location) => (
                  <DropdownMenuItem key={location.slug} asChild>
                    <a 
                      href={`/areas/${location.slug}`}
                      className="cursor-pointer"
                    >
                      {location.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a 
                    href="/service-areas"
                    className="cursor-pointer font-medium text-accent"
                  >
                    View All Service Areas
                  </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Industries
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {getAllIndustries().map((industry) => (
                  <DropdownMenuItem key={industry.slug} asChild>
                    <a 
                      href={`/industries/${industry.slug}`}
                      className="cursor-pointer"
                    >
                      {industry.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Learn
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                <DropdownMenuItem asChild>
                  <a href="/#about" className="cursor-pointer">
                    About Us
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/our-process" className="cursor-pointer">
                    Our Process
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/what-is-make-good" className="cursor-pointer">
                    What is a Make Good?
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="/faq" className="cursor-pointer">
                    FAQ
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/blog" className="cursor-pointer">
                    Blog
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <a href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get a Quote
              </Button>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <div className="py-2">
              <span className="text-foreground font-medium">Services</span>
              <div className="pl-4 mt-2 flex flex-col gap-4">
                {serviceCategories.map((category) => {
                  const categoryServices = getServicesByCategory(category.slugs);
                  if (categoryServices.length === 0) return null;
                  return (
                    <div key={category.label}>
                      <span className="text-primary text-xs uppercase tracking-wider font-medium">
                        {category.label}
                      </span>
                      <div className="flex flex-col gap-2 mt-1">
                        {categoryServices.map((service) => (
                          <a 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <a 
                  href="/capabilities"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Capabilities
                </a>
              </div>
            </div>
            <div className="py-2">
              <span className="text-foreground font-medium">Service Areas</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {getSortedLocations().map((location) => (
                  <a 
                    key={location.slug}
                    href={`/areas/${location.slug}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {location.name}
                  </a>
                ))}
                <a 
                  href="/service-areas"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Service Areas
                </a>
              </div>
            </div>
            <div className="py-2">
              <span className="text-foreground font-medium">Industries</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {getAllIndustries().map((industry) => (
                  <a 
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="py-2">
              <span className="text-foreground font-medium">Learn</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <a 
                  href="/#about" 
                  className="text-left text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="/our-process" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </a>
                <a 
                  href="/what-is-make-good" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What is a Make Good?
                </a>
                <a 
                  href="/faq" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="/blog" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </div>
            </div>
            <a 
              href="/contact" 
              className="text-left text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                Get a Quote
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
