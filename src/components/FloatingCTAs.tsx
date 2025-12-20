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
        <Button 
          onClick={scrollToContact}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Get a Free Quote
        </Button>
      </div>

      {/* Desktop: Quote CTA sits above the chatbot button */}
      <div className="hidden md:block fixed bottom-24 right-6 z-40">
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          <span>Free Quote - 24/7 Make Safe</span>
        </Button>
      </div>
    </>
  );
};

export default FloatingCTAs;
