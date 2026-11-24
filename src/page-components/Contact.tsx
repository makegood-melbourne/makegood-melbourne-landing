import { Helmet } from "@/lib/helmet";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect } from "@/components/ui/native-select";
import { MapPin, Clock, ListChecks } from "lucide-react";
import { useState, useRef, useEffect, type ReactNode } from "react";
import { toast } from "sonner";
import {
  LEASE_END_UNSURE,
  PROPERTY_TYPES,
  leaseEndOptions,
  loadRecaptchaScript,
  submitEnquiry,
} from "@/lib/enquiry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactFaqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer: "Within one business day. For urgent make safe situations, often the same day."
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
    answer: "The suburb or address, the type of property, its rough size, your lease end date and the make good clause if you have it. The form above asks for all of it, and you can email the clause or photos to enquiries@makegood.melbourne."
  },
  {
    question: "Can you work outside business hours?",
    answer: "Yes. Some make good works need to happen outside normal hours to keep disruption down. We can arrange after hours and weekend work, so tell us your constraints."
  },
  {
    question: "What's the difference between a quote and an estimate?",
    answer: "Our quotes are fixed-price. The amount we quote is the amount you pay (unless the scope changes). An estimate is approximate and can change. We always provide detailed fixed-price quotes after site inspection so there are no surprises."
  },
  {
    question: "Do I need to be on site for the quote inspection?",
    answer: "It helps to have someone available during inspection who knows the property and can answer questions about the lease requirements. However, if you can provide access and we have clear instructions, we can assess independently and follow up with questions."
  }
];

const SERVICES = [
  "End of lease make good",
  "Strip out",
  "Remediation or rectification",
  "Make safe works",
  "Roofing",
  "Racking installation, relocation or removal",
  "Something else",
];

const NEXT_STEPS = [
  { title: "We read the clause", text: "We check what your lease actually asks you to hand back, so you only pay for what's required." },
  { title: "We walk the site", text: "A free site visit to measure up the scope with you or your agent." },
  { title: "You get one fixed price", text: "One price for every trade, grouped by type of works, with a programme that finishes before your lease end." },
];

const Field = ({ id, label, optional, children }: { id: string; label: string; optional?: boolean; children: ReactNode }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-foreground">
      {label}
      {optional ? <span className="font-normal text-muted-foreground"> (optional)</span> : null}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    suburb: "",
    propertyType: "",
    size: "",
    leaseEnd: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Honeypot field - bots will fill this, humans won't see it
  const [website, setWebsite] = useState("");
  // Track when the form was rendered to detect instant submissions
  const formLoadTime = useRef(Date.now());
  // Lease end months are built in the browser so they're always current
  const [leaseEnds, setLeaseEnds] = useState<string[]>([LEASE_END_UNSURE]);

  useEffect(() => {
    loadRecaptchaScript().catch(console.error);
    setLeaseEnds(leaseEndOptions());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        details: {
          suburb: formData.suburb,
          propertyType: formData.propertyType,
          size: formData.size,
          leaseEnd: formData.leaseEnd,
          service: formData.service,
          company: formData.company,
        },
        note: formData.message,
        sourcePage: "/contact/",
        honeypot: website,
        shownAt: formLoadTime.current,
      });
      window.location.href = "/thank-you/";
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Sorry, there was an issue sending your message. Please try again or email us at enquiries@makegood.melbourne.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        <title>Contact MakeGOOD Melbourne | Request a Quote</title>
        <meta 
          name="description" 
          content="Request a quote from MakeGOOD Melbourne. Send the site address, your lease end date and the make good clause, and we'll book a free site visit." 
        />
        <link rel="canonical" href="https://makegood.melbourne/contact/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Request a quote for your make good, strip out or remediation job: tell us where the site is, what it is and when your lease ends. We reply within one business day to book a site visit and a fixed price quote.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card id="contact-form" className="border-border scroll-mt-24">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Tell us about the site</CardTitle>
                  <p className="text-muted-foreground">A few details now means our first reply can be useful, not just a request for more information.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Your details</legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field id="contact-name" label="Full name">
                          <Input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
                        </Field>
                        <Field id="contact-email" label="Email">
                          <Input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
                        </Field>
                        <Field id="contact-phone" label="Phone" optional>
                          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} />
                        </Field>
                        <Field id="contact-company" label="Company" optional>
                          <Input id="contact-company" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} />
                        </Field>
                      </div>
                    </fieldset>

                    <fieldset className="space-y-4">
                      <legend className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">The site</legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field id="contact-suburb" label="Site suburb">
                          <Input id="contact-suburb" name="suburb" placeholder="e.g. Dandenong South" value={formData.suburb} onChange={handleChange} required />
                        </Field>
                        <Field id="contact-property" label="Property type">
                          <NativeSelect id="contact-property" name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                            <option value="" disabled>Choose one</option>
                            {PROPERTY_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                          </NativeSelect>
                        </Field>
                        <Field id="contact-size" label="Rough size in m²" optional>
                          <Input id="contact-size" name="size" inputMode="numeric" placeholder="e.g. 2,500" value={formData.size} onChange={handleChange} maxLength={20} />
                        </Field>
                        <Field id="contact-lease-end" label="Lease end">
                          <NativeSelect id="contact-lease-end" name="leaseEnd" value={formData.leaseEnd} onChange={handleChange} required>
                            <option value="" disabled>Choose a month</option>
                            {leaseEnds.map((month) => <option key={month} value={month}>{month}</option>)}
                          </NativeSelect>
                        </Field>
                      </div>
                      <Field id="contact-service" label="Service" optional>
                        <NativeSelect id="contact-service" name="service" value={formData.service} onChange={handleChange}>
                          <option value="">Not sure yet</option>
                          {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
                        </NativeSelect>
                      </Field>
                    </fieldset>

                    {/* Honeypot field - hidden from humans, visible to bots */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, width: 0, overflow: 'hidden' }}>
                      <label htmlFor="contact-website">Website</label>
                      <input
                        type="text"
                        id="contact-website"
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <Field id="contact-message" label="Anything else we should know?" optional>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="What the make good clause asks for, access times, anything you're unsure about."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        maxLength={1500}
                        className="resize-none"
                      />
                    </Field>

                    <p className="text-sm text-muted-foreground rounded-md bg-secondary px-4 py-3">
                      Have the make good clause or photos? After you send this, email them to{" "}
                      <a href="mailto:enquiries@makegood.melbourne" className="text-primary underline">enquiries@makegood.melbourne</a>{" "}
                      with the site suburb in the subject.
                    </p>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Request a Quote"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a> and{" "}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a> apply.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* What happens next and contact info */}
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <ListChecks className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg text-card-foreground mb-3">What happens next</h2>
                        <ol className="space-y-4">
                          {NEXT_STEPS.map((step, index) => (
                            <li key={step.title} className="flex gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{index + 1}</span>
                              <div>
                                <p className="font-medium text-card-foreground">{step.title}</p>
                                <p className="text-sm text-muted-foreground">{step.text}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
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
                        <h2 className="font-semibold text-lg text-card-foreground mb-1">Reply time</h2>
                        <p className="text-muted-foreground">We reply within one business day</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg text-card-foreground mb-1">Location</h2>
                        <p className="text-muted-foreground">Melbourne, Victoria</p>
                        <p className="text-muted-foreground">Servicing all metro areas</p>
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
                  href="/faq/" 
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
