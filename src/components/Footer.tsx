import logo from "@/assets/makegood-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Make Good Melbourne" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional make good, make safe, and remediation services for commercial and industrial properties across Melbourne.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              We service all Melbourne metro areas including CBD, inner suburbs, and surrounding commercial/industrial zones.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} Make Good Melbourne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
