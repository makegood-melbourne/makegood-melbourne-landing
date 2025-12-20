import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const FloatingCTAs = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile: Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 flex gap-3">
        <Button 
          asChild
          className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          <a href="tel:+61396706390" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button 
          onClick={scrollToContact}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Free Quote
        </Button>
      </div>

      {/* Desktop: Floating pills */}
      <div className="hidden md:block fixed bottom-6 left-6 z-50">
        <Button 
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <a href="tel:+61396706390" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </Button>
      </div>

      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          <span>Free Quote - 24/7 Make Safe</span>
        </Button>
      </div>
    </>
  );
};

export default FloatingCTAs;
