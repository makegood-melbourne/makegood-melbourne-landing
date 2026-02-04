import { Helmet } from "@/lib/helmet";
import Navigation from "@/components/Navigation";
import BreadcrumbsAuto from "@/components/BreadcrumbsAuto";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getBackendClient } from "@/lib/backendClient";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const loadBackendClient = async () => getBackendClient();

const contactFaqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer: "Within 24 hours on business days. For urgent make safe situations, often the same day."
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes. Free site inspection, lease review and detailed fixed-price quote. No obligation."
  },
  {
    question: "What areas do you service?",
    answer: "Melbourne and surrounding areas. CBD, inner suburbs, outer growth corridors, industrial precincts."
  },
  {
    question: "What information do you need for a quote?",
    answer: "To provide an accurate quote, we'll need your property address, approximate size, type of tenancy (office, warehouse, retail, industrial), your lease end date and a brief description of the make good requirements or any specific concerns."
  },
  {
    question: "Can you work outside business hours?",
    answer: "Yes, we understand that some make good works need to be completed outside regular hours to minimise disruption. We can arrange after-hours and weekend work where required—just let us know your constraints."
  },
  {
    question: "What's the difference between a quote and an estimate?",
    answer: "Our quotes are fixed-price—the amount we quote is the amount you pay (unless the scope changes). An estimate is approximate and can change. We always provide detailed fixed-price quotes after site inspection so there are no surprises."
  },
  {
    question: "Do I need to be on site for the quote inspection?",
    answer: "It helps to have someone available during inspection who knows the property and can answer questions about the lease requirements. However, if you can provide access and we have clear instructions, we can assess independently and follow up with questions."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const sourcePage = '/contact';
      const messageWithService = formData.serviceType 
        ? `[Service: ${formData.serviceType}]${formData.company ? ` [Company: ${formData.company}]` : ''}\n\n${formData.message}`
        : formData.message;

      const supabase = await loadBackendClient();
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: messageWithService,
          sourcePage 
        }
      });

      if (error) throw error;

      // Redirect to thank you page with conversion tracking
      window.location.href = "/thank-you";
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Sorry, there was an issue sending your message. Please try again or email us directly.");
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Contact Make Good Melbourne | Request Your Quote</title>
        <meta 
          name="description" 
          content="Get in touch with Make Good Melbourne for a free consultation. Contact us for end of lease make good services, make safe works and remediation across Melbourne." 
        />
        <link rel="canonical" href="https://makegood.melbourne/contact/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <Navigation />
      <BreadcrumbsAuto />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 pt-4">
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Make Good Melbourne
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your make good project? Tell us about your requirements and we'll be in touch within 24 hours to arrange a site inspection and detailed quote.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Send us a message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Full Name *"
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
                        placeholder="Email Address *"
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
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background border-input"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name (optional)"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-background border-input"
                      />
                    </div>
                    <div>
                      <Select 
                        value={formData.serviceType} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                      >
                        <SelectTrigger className="bg-background border-input">
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="end-of-lease">End of Lease Make Good</SelectItem>
                          <SelectItem value="make-safe">Make Safe Works</SelectItem>
                          <SelectItem value="remediation">Remediation & Rectification</SelectItem>
                          <SelectItem value="strip-out">Office/Warehouse Strip Out</SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project... *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background border-input resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">Melbourne, Victoria</p>
                        <p className="text-muted-foreground">Servicing all metro areas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 7:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground">Sunday: By appointment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground mb-1">Email Response</h3>
                        <p className="text-muted-foreground">All enquiries answered within 24 hours</p>
                        <p className="text-muted-foreground">Available 7 days a week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">Urgent Make Safe?</h3>
                        <p className="text-muted-foreground mb-2">
                          We handle urgent works during business hours—water damage, fire damage, structural concerns.
                        </p>
                        <p className="text-accent font-medium">Contact us during business hours for a rapid response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-8">
                <a 
                  href="/faq" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  More Questions? See Our FAQ
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* CTA Block - Contact Variant */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-foreground mb-6">
              Whether you have questions about your lease requirements, need make safe works or want to discuss your next project, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Fill Out The Form Above
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m18 15-6-6-6 6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
