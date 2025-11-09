import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's discuss your project
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Get in touch for a consultation and detailed quote on your make good, make safe, or remediation requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="font-medium mb-1">Phone</div>
              <a href="tel:+61-xxx-xxx-xxx" className="text-muted-foreground hover:text-primary transition-colors">
                +61 xxx xxx xxx
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="font-medium mb-1">Email</div>
              <a href="mailto:info@makegood.melbourne" className="text-muted-foreground hover:text-primary transition-colors">
                info@makegood.melbourne
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="font-medium mb-1">Location</div>
              <div className="text-muted-foreground">
                Melbourne, Victoria
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
