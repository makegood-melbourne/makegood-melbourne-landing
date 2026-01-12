import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Mail } from "lucide-react";

const ThankYouContent = () => {
  useEffect(() => {
    // Track conversion event
    if (typeof window !== "undefined") {
      // Fire custom event for analytics (Google Analytics, etc.)
      window.dispatchEvent(
        new CustomEvent("contact_form_conversion", {
          detail: {
            timestamp: new Date().toISOString(),
            page: window.location.href,
          },
        })
      );

      // Google Analytics 4 event (if gtag is available)
      if ("gtag" in window && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Contact",
          event_label: "Contact Form Submission",
          value: 1,
        });
      }

      // Console log for debugging/verification
      console.log("[Conversion] Contact form submission confirmed");
    }
  }, []);

  return (
    <>
      <Navigation />

      <main className="pt-16 min-h-screen bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your message has been received. We'll be in touch within 24 hours.
            </p>

            {/* What happens next cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <Card className="border-border bg-card/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-card-foreground mb-1">
                        Response Time
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        We respond to all enquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-card-foreground mb-1">
                        Check Your Inbox
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a confirmation email shortly with your enquiry details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="/">
                  Return to Homepage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/capabilities">View Our Capabilities</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ThankYouContent;
