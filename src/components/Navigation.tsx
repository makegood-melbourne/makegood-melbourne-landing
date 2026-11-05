import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/makegood-melbourne-logo.png";
import { getFeaturedLocations } from "@/data/locations";
import { getAllIndustries } from "@/data/industries";
import { serviceCategories, getServicesByCategory } from "@/data/serviceCategories";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Priority service links are duplicated at the top of the Services menu so new high-intent pages are easy to find in preview and production.
const priorityServiceSlugs = [
  'remediation-solutions/water-damage-mould-remediation',
  'remediation-solutions/fire-compliance-facade-cladding-remediation',
];

const priorityServiceDisplayNames: Record<string, string> = {
  'remediation-solutions/water-damage-mould-remediation': 'Water Damage & Mould Remediation',
  'remediation-solutions/fire-compliance-facade-cladding-remediation': 'Fire Compliance & Facade Cladding Remediation',
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const priorityServices = getServicesByCategory(priorityServiceSlugs);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={resolveImageSrc(logo)} alt="MakeGOOD Melbourne - Commercial Make Good Services" className="h-8 md:h-10 brightness-0 invert cursor-pointer" />
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {/* Services: a real link plus a mega panel. The panel is always in the DOM (hidden with CSS)
                so every service link is present in the server-rendered HTML for crawlers,
                and it opens on hover or keyboard focus with no JavaScript. */}
            <div className="relative group">
              <a
                href="/services/"
                className="flex items-center gap-1 text-foreground hover:text-accent transition-colors py-2"
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </a>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/3 top-full pt-2 z-50">
                <div className="bg-card border border-border rounded-md shadow-xl p-6 grid grid-cols-5 gap-6 w-[1000px] max-w-[calc(100vw-2rem)]">
                  {serviceCategories.map((category) => {
                    const categoryServices = getServicesByCategory(category.slugs);
                    if (categoryServices.length === 0) return null;
                    return (
                      <div key={category.label}>
                        <a
                          href={category.href}
                          className="block text-primary text-xs uppercase tracking-wider font-semibold mb-3 hover:underline"
                        >
                          {category.label}
                        </a>
                        <ul className="space-y-2">
                          {categoryServices.map((service) => (
                            <li key={service.slug}>
                              <a
                                href={`/services/${service.slug}/`}
                                className="text-sm text-foreground hover:text-accent transition-colors"
                              >
                                {category.displayNames?.[service.slug] || service.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Industries
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {getAllIndustries().map((industry) => (
                  <DropdownMenuItem key={industry.slug} asChild>
                    <a 
                      href={`/industries/${industry.slug}/`}
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
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {getFeaturedLocations().map((location) => (
                  <DropdownMenuItem key={location.slug} asChild>
                    <a 
                      href={`/areas/${location.slug}/`}
                      className="cursor-pointer"
                    >
                      {location.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a 
                    href="/service-areas/"
                    className="cursor-pointer font-medium text-accent"
                  >
                    View All Service Areas
                  </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            {/* About Us as standalone nav item */}
            <a href="/about/" className="text-foreground hover:text-accent transition-colors">
              About Us
            </a>
            {/* Resources dropdown - educational content only */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card border-border">
                {/* Ordered by user intent/funnel: Awareness → Consideration → Decision → Support */}
                <DropdownMenuItem asChild>
                  <a href="/learn/make-good-guide/" className="cursor-pointer">
                    Make Good Guide
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/learn/remediation-guide/" className="cursor-pointer">
                    Remediation Guide
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/learn/our-process/" className="cursor-pointer">
                    Our Process
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="/faq/" className="cursor-pointer">
                    FAQ
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/blog/" className="cursor-pointer">
                    Blog
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/contact/" data-track="nav_quote_desktop">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Request a Quote
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">

            {/* Services */}
            <div className="border-b border-border/50">
              <button
                className="w-full flex items-center justify-between py-3 text-foreground font-medium hover:text-accent transition-colors"
                onClick={() => toggleSection('services')}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections['services'] ? 'rotate-180' : ''}`} />
              </button>
              {openSections['services'] && (
                <div className="pl-4 pb-3 flex flex-col gap-4">
                  {priorityServices.length > 0 && (
                    <div>
                      <span className="text-primary text-xs uppercase tracking-wider font-medium">
                        Most requested
                      </span>
                      <div className="flex flex-col gap-2 mt-1">
                        {priorityServices.map((service) => (
                          <a
                            key={`priority-${service.slug}`}
                            href={`/services/${service.slug}/`}
                            className="text-foreground font-medium hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {priorityServiceDisplayNames[service.slug] || service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {serviceCategories.map((category) => {
                    const categoryServices = getServicesByCategory(category.slugs);
                    if (categoryServices.length === 0) return null;
                    return (
                      <div key={category.label}>
                        {category.href ? (
                          <a
                            href={category.href}
                            className="text-primary text-xs uppercase tracking-wider font-medium hover:text-primary/80"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.label}
                          </a>
                        ) : (
                          <span className="text-primary text-xs uppercase tracking-wider font-medium">
                            {category.label}
                          </span>
                        )}
                        <div className="flex flex-col gap-2 mt-1">
                          {categoryServices.map((service) => (
                            <a
                              key={service.slug}
                              href={`/services/${service.slug}/`}
                              className="text-muted-foreground hover:text-accent transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {category.displayNames?.[service.slug] || service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Service Areas */}
            <div className="border-b border-border/50">
              <button
                className="w-full flex items-center justify-between py-3 text-foreground font-medium hover:text-accent transition-colors"
                onClick={() => toggleSection('areas')}
              >
                Service Areas
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections['areas'] ? 'rotate-180' : ''}`} />
              </button>
              {openSections['areas'] && (
                <div className="pl-4 pb-3 flex flex-col gap-2">
                  {getFeaturedLocations().map((location) => (
                    <a
                      key={location.slug}
                      href={`/areas/${location.slug}/`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {location.name}
                    </a>
                  ))}
                  <a
                    href="/service-areas/"
                    className="text-accent font-medium hover:text-accent/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Service Areas
                  </a>
                </div>
              )}
            </div>

            {/* Industries */}
            <div className="border-b border-border/50">
              <button
                className="w-full flex items-center justify-between py-3 text-foreground font-medium hover:text-accent transition-colors"
                onClick={() => toggleSection('industries')}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections['industries'] ? 'rotate-180' : ''}`} />
              </button>
              {openSections['industries'] && (
                <div className="pl-4 pb-3 flex flex-col gap-2">
                  {getAllIndustries().map((industry) => (
                    <a
                      key={industry.slug}
                      href={`/industries/${industry.slug}/`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {industry.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* About Us */}
            <div className="border-b border-border/50">
              <a
                href="/about/"
                className="block py-3 text-foreground font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
            </div>

            {/* Resources */}
            <div className="border-b border-border/50">
              <button
                className="w-full flex items-center justify-between py-3 text-foreground font-medium hover:text-accent transition-colors"
                onClick={() => toggleSection('learn')}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections['learn'] ? 'rotate-180' : ''}`} />
              </button>
              {openSections['learn'] && (
                <div className="pl-4 pb-3 flex flex-col gap-2">
                  <a href="/learn/make-good-guide/" className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Make Good Guide</a>
                  <a href="/learn/remediation-guide/" className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Remediation Guide</a>
                  <a href="/learn/our-process/" className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Our Process</a>
                  <a href="/faq/" className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                  <a href="/blog/" className="text-muted-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <a href="/contact/" data-track="nav_quote_mobile" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  Request a Quote
                </Button>
              </a>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
