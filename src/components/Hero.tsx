import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/melbourne-warehouse-make-good-services.jpg";
import HeroStats from "./HeroStats";
import { resolveImageSrc } from "@/lib/resolveImageSrc";

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
          src={resolveImageSrc(heroImage)} 
          alt="Melbourne warehouse and commercial space requiring end of lease make good restoration services"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
          <h1 className="text-5xl md:text-7xl text-foreground mb-4 leading-none flex flex-col items-start">
            <span className="font-light uppercase w-full" style={{ fontFamily: "'PP Neue Montreal', sans-serif", letterSpacing: '0.12em' }}>
              MAKEGOOD.
            </span>
            <span className="font-bold uppercase w-full" style={{ fontFamily: "'PP Neue Montreal', sans-serif", letterSpacing: '0.02em' }}>
              MELBOURNE
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-6" style={{ textTransform: 'none' }}>
            Make good, BETTER.
          </h2>
          <p className="text-xl md:text-2xl text-foreground mb-4 leading-relaxed">
            Professional Make Good Services for Commercial & Industrial Spaces
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            Expert end of lease works, make safe solutions and remediation services across Melbourne. We restore your space to its original condition, meeting all lease obligations.
          </p>
          
          {/* Trust badges and stats */}
          <HeroStats />
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
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
