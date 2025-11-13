import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, MapPin, Building2, Building } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/makegood-logo.png";
import { getPopularAreas } from "@/data/serviceAreas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const popularAreas = getPopularAreas();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const iconMap = {
    "building-2": Building2,
    "building": Building,
    "map-pin": MapPin
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="Make Good Melbourne" className="h-8 md:h-10 brightness-0 invert cursor-pointer" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <a href="/capabilities" className="text-foreground hover:text-accent transition-colors">
              Capabilities
            </a>
            
            {/* Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors focus:outline-none">
                Areas
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-3 border-b border-border">
                  <p className="font-semibold text-foreground mb-1">Service Areas</p>
                  <p className="text-sm text-muted-foreground">Where we provide make good services</p>
                </div>
                
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Popular Areas
                  </div>
                  {popularAreas.map((area) => {
                    const Icon = iconMap[area.icon as keyof typeof iconMap] || MapPin;
                    return (
                      <DropdownMenuItem key={area.slug} asChild>
                        <a 
                          href={`/locations/${area.slug}`}
                          className="flex items-start gap-3 p-3 cursor-pointer"
                        >
                          <div className="p-2 rounded bg-accent/10 text-accent mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{area.name}</div>
                            <div className="text-sm text-muted-foreground">{area.description}</div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <a 
                    href="/locations" 
                    className="flex items-center justify-between p-3 cursor-pointer font-medium"
                  >
                    View All Areas
                    <span className="text-accent">→</span>
                  </a>
                </DropdownMenuItem>
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
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-accent transition-colors py-2">
              Services
            </button>
            <a href="/capabilities" className="text-left text-foreground hover:text-accent transition-colors py-2">
              Capabilities
            </a>
            <a href="/locations" className="text-left text-foreground hover:text-accent transition-colors py-2">
              Service Areas
            </a>
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
