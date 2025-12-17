import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/makegood-melbourne-logo.png";
import { getSortedLocations } from "@/data/locations";
import { services } from "@/data/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Service categories for navigation grouping
const serviceCategories = [
  {
    label: "Make Good Services",
    slugs: ['office-strip-out', 'warehouse-make-good', 'commercial-make-good']
  },
  {
    label: "Structural & Remediation",
    slugs: ['structural-remediation', 'cladding-glazing', 'concrete-floor-repair']
  },
  {
    label: "Specialist Trades",
    slugs: ['epoxy-flooring', 'line-marking', 'commercial-painting', 'ceiling-tile-replacement', 'patching-plastering', 'electrical-make-safe', 'led-lighting']
  },
  {
    label: "Cleaning",
    slugs: ['commercial-cleaning']
  },
  {
    label: "Relocation",
    slugs: ['end-of-lease-relocation', 'pallet-racking-removal']
  }
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getServicesByCategory = (slugs: string[]) => {
    return services
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
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="MakeGOOD Melbourne - Commercial Make Good Services" className="h-8 md:h-10 brightness-0 invert cursor-pointer" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border w-64">
                {serviceCategories.map((category, index) => (
                  <div key={category.label}>
                    {index > 0 && <DropdownMenuSeparator />}
                    <DropdownMenuLabel className="text-accent text-xs uppercase tracking-wider">
                      {category.label}
                    </DropdownMenuLabel>
                    {getServicesByCategory(category.slugs).map((service) => (
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
                ))}
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
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get a Quote
            </Button>
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
                {serviceCategories.map((category) => (
                  <div key={category.label}>
                    <span className="text-accent text-xs uppercase tracking-wider font-medium">
                      {category.label}
                    </span>
                    <div className="flex flex-col gap-2 mt-1">
                      {getServicesByCategory(category.slugs).map((service) => (
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
                ))}
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
              </div>
            </div>
            <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-accent transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-accent transition-colors py-2">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              Get a Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
