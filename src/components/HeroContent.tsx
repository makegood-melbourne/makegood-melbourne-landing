import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 z-10 pt-16">
      <div className="max-w-3xl bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
        <h1 className="text-4xl md:text-6xl text-foreground mb-4 leading-tight font-bold" style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}>
          Commercial & Industrial Make Good Solutions
        </h1>
        <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-6" style={{ textTransform: 'none' }}>
          Make good, BETTER.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
          End of lease restoration, remediation and make-safe works for offices, warehouses and industrial sites across Melbourne.
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
            onClick={scrollToServices}
            className="text-lg px-8 py-6"
          >
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
