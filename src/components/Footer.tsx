import { Link } from "react-router-dom";
import { Mail, Shield, MapPin } from "lucide-react";
import logo from "@/assets/makegood-melbourne-logo.png";

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
            <img src={logo} alt="MakeGOOD Melbourne - Professional End of Lease Services" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-lg text-accent font-semibold mb-2">Make Good, BETTER.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Professional make good, make safe and remediation services for commercial and industrial properties across Melbourne.
            </p>
            <a 
              href="mailto:info@makegoodmelbourne.com.au" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@makegoodmelbourne.com.au
            </a>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/what-is-make-good" className="text-muted-foreground hover:text-foreground transition-colors">
                  What is a Make Good?
                </Link>
              </li>
              <li>
                <Link to="/our-process" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Capabilities
                </Link>
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
            <Link 
              to="/service-areas"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View all service areas →
            </Link>
            
            <h4 className="font-semibold mt-6 mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get a Quote
                </Link>
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
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
