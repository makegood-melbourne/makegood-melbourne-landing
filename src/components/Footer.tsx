import { Link } from "react-router-dom";
import logo from "@/assets/makegood-melbourne-logo.png";
import { locations } from "@/data/locations";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="MakeGOOD Melbourne - Professional End of Lease Services" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-lg text-accent font-semibold mb-2">Make Good, BETTER.</p>
            <p className="text-muted-foreground leading-relaxed">
              Professional make good, make safe, and remediation services for commercial and industrial properties across Melbourne.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </button>
              </li>
              <li>
                <a href="/capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link 
                    to={`/areas/${location.slug}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {location.name} Make Good
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
              Servicing all Melbourne metro areas.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Make Good Melbourne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
