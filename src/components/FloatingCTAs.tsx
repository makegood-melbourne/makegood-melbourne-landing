import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

const FloatingCTAs = () => {
  return (
    <>
      {/* Mobile: fixed bottom bar with a quote button and an email option (no phone number) */}
      <div className="floating-cta fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-2">
        <a href="/contact/" data-track="floating_quote_mobile" className="flex-1">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <MessageSquare className="h-4 w-4 mr-2" />
            Request a Quote
          </Button>
        </a>
        <a
          href="mailto:info@makegood.melbourne"
          data-track="floating_email_mobile"
          aria-label="Email MakeGOOD Melbourne"
        >
          <Button variant="outline" size="icon" aria-label="Email MakeGOOD Melbourne">
            <Mail className="h-4 w-4" />
          </Button>
        </a>
      </div>

      {/* Desktop: quote button in the bottom left */}
      <div className="floating-cta hidden md:block fixed bottom-6 left-6 z-40">
        <a href="/contact/" data-track="floating_quote_desktop">
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
