import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/makegood-melbourne-logo.png";
import { locations } from "@/data/locations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <a href="/capabilities" className="text-foreground hover:text-accent transition-colors">
              Capabilities
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {locations.map((location) => (
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
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-accent transition-colors py-2">
              Services
            </button>
            <a href="/capabilities" className="text-left text-foreground hover:text-accent transition-colors py-2">
              Capabilities
            </a>
            <div className="py-2">
              <span className="text-foreground font-medium">Service Areas</span>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {locations.map((location) => (
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
