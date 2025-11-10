import logo from "@/assets/makegood-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Make Good Melbourne" className="h-10 mb-4 brightness-0 invert" />
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
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </button>
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
            <p className="text-muted-foreground leading-relaxed">
              We service all Melbourne metro areas including CBD, inner suburbs, and surrounding commercial/industrial areas.
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
