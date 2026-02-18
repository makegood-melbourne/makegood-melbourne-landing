import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { getBackendClient } from "@/lib/backendClient";

const RECAPTCHA_SITE_KEY = "6LfptwEoAAAAACzcHJsltAkUS5FjHL1jNgPgJ2uX";

const loadBackendClient = async () => getBackendClient();

// Load reCAPTCHA v3 script once
function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src*="recaptcha"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Honeypot field - bots will fill this, humans won't see it
  const [website, setWebsite] = useState('');
  // Track when the form was rendered to detect instant submissions
  const formLoadTime = useRef(Date.now());

  // Load reCAPTCHA script on mount
  useEffect(() => {
    loadRecaptchaScript().catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Layer 1: Honeypot check - reject if hidden field is filled
    if (website) {
      window.location.href = "/thank-you";
      return;
    }

    // Layer 2: Time-based check - reject if submitted in under 3 seconds
    const timeElapsed = Date.now() - formLoadTime.current;
    if (timeElapsed < 3000) {
      window.location.href = "/thank-you";
      return;
    }

    setIsSubmitting(true);

    try {
      // Layer 4: Get reCAPTCHA v3 token
      let recaptchaToken = "";
      try {
        const grecaptcha = (window as any).grecaptcha;
        if (grecaptcha) {
          recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact_form" });
        }
      } catch (recaptchaError) {
        console.warn("reCAPTCHA failed, proceeding without token:", recaptchaError);
      }

      const sourcePage = window.location.href;
      const supabase = await loadBackendClient();
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { 
          ...formData, 
          sourcePage,
          _hp: website,
          _ts: formLoadTime.current,
          _rc: recaptchaToken,
        },
      });

      if (error) {
        const errorMessage = error.message || "Failed to send message";
        throw new Error(errorMessage);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      window.location.href = "/thank-you";
    } catch (error: any) {
      console.error("Error submitting form:", error);
      const message = error?.message || "Sorry, there was an issue sending your message.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Contact us for a free, no-obligation quote.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                {/* Honeypot field - hidden from humans, visible to bots */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, width: 0, overflow: 'hidden', tabIndex: -1 }}>
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-background border-input resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a> and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a> apply.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
