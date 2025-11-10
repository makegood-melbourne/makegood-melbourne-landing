import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional commercial construction and make good services in Melbourne"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
          <h1 className="text-4xl md:text-6xl text-foreground mb-4 leading-tight">
            Professional Make Good Services for Commercial & Industrial Spaces
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">
            Make Good, BETTER.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Expert end of lease works, make safe solutions, and remediation services across Melbourne. We restore your space to its original condition, meeting all lease obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
