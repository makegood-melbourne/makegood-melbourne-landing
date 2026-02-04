import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

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
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3">
        <a href="/contact" className="block">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Request a Quote
          </Button>
        </a>
      </div>

      {/* Desktop: Quote CTA in bottom-left */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        <a href="/contact">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            <span>Request a Quote</span>
          </Button>
        </a>
      </div>
    </>
  );
};

export default FloatingCTAs;
