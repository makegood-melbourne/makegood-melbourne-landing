import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/makegood-melbourne-logo.png";
import { getSortedLocations } from "@/data/locations";
import { getPublishedServices } from "@/data/services";
import { getAllIndustries } from "@/data/industries";
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
    label: "Cleaning",
    slugs: ['commercial-cleaning']
  },
  {
    label: "Flooring Removal",
    slugs: ['carpet-removal', 'vinyl-removal', 'tile-removal', 'adhesive-removal']
  },
  {
    label: "Make Good Services",
    slugs: ['office-strip-out', 'warehouse-make-good', 'commercial-make-good']
  },
  {
    label: "Relocation",
    slugs: ['end-of-lease-relocation', 'pallet-racking-removal']
  },
  {
    label: "Specialist Trades",
    slugs: ['epoxy-flooring', 'line-marking', 'commercial-painting', 'ceiling-tile-replacement', 'patching-plastering', 'electrical-make-safe', 'led-lighting']
  },
  {
    label: "Structural & Remediation",
    slugs: ['structural-remediation', 'cladding-glazing', 'concrete-floor-repair', 'waterproofing']
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
          <div className="flex items-end gap-3">
            <a href="/">
              <img src={logo} alt="MakeGOOD Melbourne - Commercial Make Good Services" className="h-8 md:h-10 brightness-0 invert cursor-pointer" />
            </a>
            <span className="hidden lg:block text-sm text-primary font-medium pb-0.5">Make good, BETTER.</span>
          </div>
          
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
                          <Link 
                            to={`/services/${service.slug}`}
                            className="cursor-pointer"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  );
                  return acc;
                }, [])}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    to="/capabilities"
                    className="cursor-pointer font-medium text-accent"
                  >
                    View All Capabilities
                  </Link>
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
                    <Link 
                      to={`/areas/${location.slug}`}
                      className="cursor-pointer"
                    >
                      {location.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    to="/service-areas"
                    className="cursor-pointer font-medium text-accent"
                  >
                    View All Service Areas
                  </Link>
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
                    <Link 
                      to={`/industries/${industry.slug}`}
                      className="cursor-pointer"
                    >
                      {industry.name}
                    </Link>
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
                  <button onClick={() => scrollToSection('about')} className="cursor-pointer w-full text-left">
                    About Us
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/our-process" className="cursor-pointer">
                    Our Process
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/what-is-make-good" className="cursor-pointer">
                    What is a Make Good?
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="cursor-pointer">
                    FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="cursor-pointer">
                    Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get a Quote
              </Button>
            </Link>
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
                          <Link 
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <Link 
                  to="/capabilities"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Capabilities
                </Link>
              </div>
            </div>
            <div className="py-2">
              <span className="text-foreground font-medium">Service Areas</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {getSortedLocations().map((location) => (
                  <Link 
                    key={location.slug}
                    to={`/areas/${location.slug}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {location.name}
                  </Link>
                ))}
                <Link 
                  to="/service-areas"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Service Areas
                </Link>
              </div>
            </div>
            <div className="py-2">
              <span className="text-foreground font-medium">Industries</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {getAllIndustries().map((industry) => (
                  <Link 
                    key={industry.slug}
                    to={`/industries/${industry.slug}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-2">
              <span className="text-foreground font-medium">Learn</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left text-muted-foreground hover:text-accent transition-colors"
                >
                  About Us
                </button>
                <Link 
                  to="/our-process" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </Link>
                <Link 
                  to="/what-is-make-good" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What is a Make Good?
                </Link>
                <Link 
                  to="/faq" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="text-left text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
