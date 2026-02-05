import { Mail, Shield, MapPin } from "lucide-react";
import logo from "@/assets/makegood-melbourne-logo.png";
import { resolveImageSrc } from "@/lib/resolveImageSrc";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        {/* Trust Signals Banner */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-accent" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-accent" />
            <span>Melbourne-Wide Service</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-accent" />
            <span>Commercial & Industrial Specialists</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/">
              <img src={resolveImageSrc(logo)} alt="MakeGOOD Melbourne - Professional End of Lease Services" className="h-10 mb-4 brightness-0 invert hover:opacity-80 transition-opacity cursor-pointer" />
            </a>
            <p className="text-lg text-accent font-semibold mb-2">Make Good, BETTER.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Professional make good, make safe and remediation services for commercial and industrial properties across Melbourne.
            </p>
            <a 
              href="mailto:info@makegood.melbourne" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@makegood.melbourne
            </a>
          </div>
          
          <div>
            {/* Learn section - synced with header navigation */}
            <h4 className="font-semibold mb-4 text-foreground">Learn</h4>
            <ul className="space-y-2">
              {/* Ordered by user intent/funnel: Awareness → Consideration → Decision → Support */}
              <li>
                <a href="/learn/make-good-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Make Good Guide
                </a>
              </li>
              <li>
                <a href="/learn/remediation-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Remediation Guide
                </a>
              </li>
              <li>
                <a href="/learn/our-process" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
            
            {/* Company section - About Us moved here */}
            <h4 className="font-semibold mt-6 mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Service Areas</h4>
            <div className="flex items-start gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Servicing all Melbourne metropolitan areas including CBD, inner suburbs, and greater Melbourne.
              </p>
            </div>
            <a 
              href="/service-areas"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View all service areas →
            </a>
            
            <h4 className="font-semibold mt-6 mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Make Good Melbourne. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="/privacy-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
