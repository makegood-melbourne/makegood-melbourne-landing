import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          Commercial<br />
          Make Good &<br />
          Remedial Works
        </h1>
        <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-6" style={{ textTransform: 'none' }}>
          Make good, BETTER.
        </h2>
        <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
          Commercial spaces get worn. Leases end. We put things right.
        </p>
        <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
          End-of-lease strip-out, make-safe and remedial works across Melbourne. Transparent quotes. Licensed trades.
        </p>
        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
          A finish you can hand over.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
            >
              Get an Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="/services/">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
            >
              Our Services
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
