import { useState } from "react";
import { Helmet } from "@/lib/helmet";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQCategory = "all" | "understanding" | "costs" | "process" | "services" | "remediation" | "working";

interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

const faqs: FAQ[] = [
  // Category 1: Understanding Make Good
  {
    category: "understanding",
    question: "What is a make good clause in a commercial lease?",
    answer: "A make good clause sets out what you're required to do when your lease ends. Usually that means removing your fitout, repairing damage and returning the space to its original condition. Every lease is different—read yours carefully."
  },
  {
    category: "understanding",
    question: "What is the difference between make good and make safe?",
    answer: "Make good is planned work at the end of a lease—restoring the space as required by your agreement. Make safe is urgent work after an incident—fire, flood, impact damage. It's about eliminating hazards and securing the site quickly."
  },
  {
    category: "understanding",
    question: "What does a make good typically include?",
    answer: "Removing tenant-installed partitions, signage and fixtures. Patching and painting walls. Reinstating ceilings and floors. Disconnecting and certifying electrical, data and mechanical services. For warehouses, it often includes racking removal and concrete floor repairs."
  },
  {
    category: "understanding",
    question: "What is a make good and when is it required?",
    answer: "A make good is the process of returning a commercial space to its original or agreed condition at lease end. Most commercial leases have a make good clause. It's triggered when you vacate—whether at lease end, early termination, or break clause."
  },
  {
    category: "understanding",
    question: "Who is responsible for make good requirements?",
    answer: "The tenant. In almost all commercial leases, you're responsible for the work and the cost. Check your lease to understand exactly what's required."
  },
  {
    category: "understanding",
    question: "What happens if I don't complete my make good?",
    answer: "The landlord can complete the work and bill you—usually at a premium. You may lose part or all of your bond. In some cases, they'll pursue legal action. Better to deal with it yourself."
  },

  // Category 2: Costs & Pricing
  {
    category: "costs",
    question: "How much does a make good cost in Melbourne?",
    answer: "It depends on size and scope. Office make goods typically run $100–$200 per square metre. Industrial spaces are often less. We quote after a site inspection—fixed price, no surprises."
  },
  {
    category: "costs",
    question: "Who pays for the make good—tenant or landlord?",
    answer: "The tenant. In almost all commercial leases, you cover the cost."
  },
  {
    category: "costs",
    question: "Can I negotiate my make good costs with the landlord?",
    answer: "Yes. Some landlords will accept a cash settlement instead of physical works—especially if they're planning to refurbish anyway. Others may agree to a reduced scope. We can help you work through the options."
  },
  {
    category: "costs",
    question: "How can I reduce my make good costs?",
    answer: "Plan early. Get a clear scope agreed with your landlord before work starts. Negotiate what actually needs reinstating. And get it done right the first time—rework is expensive."
  },
  {
    category: "costs",
    question: "Do you price match or have a price promise?",
    answer: "No. We don't compete on price. We provide fair, fixed-price quotes based on quality work, licensed trades and proper project management."
  },
  {
    category: "costs",
    question: "What's the difference between a quote and an estimate?",
    answer: "An estimate is a rough guess that can change. A quote is a fixed price for a defined scope. We provide fixed-price quotes. Once we agree on the scope, the price is locked."
  },

  // Category 3: Process & Timeline
  {
    category: "process",
    question: "How long does a make good take?",
    answer: "Small office strip-out: 1–2 weeks. Large warehouse restoration: 4–8 weeks. It depends on size, complexity and coordination with the landlord."
  },
  {
    category: "process",
    question: "When should I start planning my make good?",
    answer: "At least 3–6 months before your lease ends. That gives you time for inspections, scope agreement, quotes and scheduling without rushing."
  },
  {
    category: "process",
    question: "What is your make good process?",
    answer: "1. Free consultation—we review your lease and inspect the site. 2. Detailed quote—fixed price, no surprises. 3. Scope agreement—we finalise requirements with you and the landlord. 4. Execution—we complete the work to the agreed standard. 5. Documentation and handover—full records, final inspection coordinated."
  },
  {
    category: "process",
    question: "How quickly will you respond to my enquiry?",
    answer: "Within 24 hours on business days. For urgent make safe situations, often the same day."
  },
  {
    category: "process",
    question: "Do I need to be on site for the quote inspection?",
    answer: "Helpful, but not essential. We can coordinate access with your building manager. Having someone who knows the site available helps us understand your requirements."
  },

  // Category 4: Services
  {
    category: "services",
    question: "Do you handle make safe or urgent works?",
    answer: "Yes—during business hours. We secure sites after fire, flood, or impact damage. We eliminate hazards and make the property safe. We don't offer 24/7 emergency call-outs."
  },
  {
    category: "services",
    question: "What types of properties do you service?",
    answer: "Commercial and industrial properties across Melbourne. Offices, retail, warehouses, factories, mixed-use buildings. Small office suites to large distribution centres."
  },
  {
    category: "services",
    question: "What areas of Melbourne do you service?",
    answer: "Melbourne and surrounding areas. CBD, inner suburbs, outer growth corridors, industrial precincts."
  },
  {
    category: "services",
    question: "Can you work outside business hours?",
    answer: "Yes, when required. Often necessary in occupied buildings or retail environments. We'll discuss scheduling during the quoting process."
  },
  // Category 5: Remediation (NEW)
  {
    category: "remediation",
    question: "What is building remediation and when is it needed?",
    answer: "Remediation is rectifying defects or damage—structural issues, water ingress, concrete spalling, cracking. It's needed when the problem affects the building's safety, integrity, or compliance."
  },
  {
    category: "remediation",
    question: "Does my building need cladding rectification?",
    answer: "If your building has combustible cladding, it may not meet current fire safety standards. We can assess the situation and advise on removal and replacement with compliant materials."
  },
  {
    category: "remediation",
    question: "My building has water leaks—can you fix them?",
    answer: "Yes. We find the source, repair the damage and restore affected areas. Water damage left untreated leads to bigger problems."
  },

  // Category 6: Working With Us (merged with Common Concerns)
  {
    category: "working",
    question: "Are you licensed and insured?",
    answer: "Yes. Fully licensed, with public liability and workers' compensation coverage. Certificates of currency available on request."
  },
  {
    category: "working",
    question: "What documentation do you provide?",
    answer: "Before and after photos, compliance certificates, electrical and fire safety test reports, waste disposal receipts and a final handover checklist. Everything you need for a clean handover."
  },
  {
    category: "working",
    question: "Do you provide free quotes?",
    answer: "Yes. Free site inspection, lease review and detailed fixed-price quote. No obligation."
  },
  {
    category: "working",
    question: "What information do you need for a quote?",
    answer: "Your lease agreement (especially the make good clause), property address, approximate floor area and any landlord requirements. If you don't have everything, we'll work with what you have and clarify the rest on site."
  },
  {
    category: "working",
    question: "Do you have a contact number or physical address?",
    answer: "We don't have a public phone number or office. Contact us via email at info@makegood.melbourne. We respond during business hours."
  },
  {
    category: "working",
    question: "What if my landlord disputes the make good works?",
    answer: "Agree on a clear scope in writing before work starts. That's the best way to avoid disputes. If one arises, our documentation—photos, certificates, records—shows the work was completed to standard."
  },
  {
    category: "working",
    question: "What happens if the make good isn't completed on time?",
    answer: "Holdover rent. Often significantly higher than standard rent. Landlords may also claim damages. We schedule carefully and build in contingency to finish on time."
  },
  {
    category: "working",
    question: "Can I do my own make good instead of hiring professionals?",
    answer: "You can try, but it's not recommended. Landlords usually require licensed trades for electrical, plumbing and fire safety work. You'll need proper documentation and compliance certificates. A poor job leads to disputes and extra costs."
  },
  {
    category: "working",
    question: "Do you guarantee that my bond will be returned?",
    answer: "No. That's the landlord's decision. Our job is to complete the work to the required standard and provide documentation that supports a successful handover."
  },
];

const categories: { id: FAQCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "understanding", label: "Understanding Make Good" },
  { id: "costs", label: "Costs & Pricing" },
  { id: "process", label: "Process & Timeline" },
  { id: "services", label: "Services" },
  { id: "remediation", label: "Remediation" },
  { id: "working", label: "Working With Us" },
];

// JSON-LD Schema for all 30 FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a make good clause in a commercial lease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A make good clause sets out what you're required to do when your lease ends. Usually that means removing your fitout, repairing damage and returning the space to its original condition. Every lease is different—read yours carefully."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between make good and make safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Make good is planned work at the end of a lease—restoring the space as required by your agreement. Make safe is urgent work after an incident—fire, flood, impact damage. It's about eliminating hazards and securing the site quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What does a make good typically include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Removing tenant-installed partitions, signage and fixtures. Patching and painting walls. Reinstating ceilings and floors. Disconnecting and certifying electrical, data and mechanical services. For warehouses, it often includes racking removal and concrete floor repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What is a make good and when is it required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A make good is the process of returning a commercial space to its original or agreed condition at lease end. Most commercial leases have a make good clause. It's triggered when you vacate—whether at lease end, early termination or break clause."
      }
    },
    {
      "@type": "Question",
      "name": "Who is responsible for make good requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tenant. In almost all commercial leases, you're responsible for the work and the cost. Check your lease to understand exactly what's required."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I don't complete my make good?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The landlord can complete the work and bill you—usually at a premium. You may lose part or all of your bond. In some cases, they'll pursue legal action. Better to deal with it yourself."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a make good cost in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on size and scope. Office make goods typically run $100–$200 per square metre. Industrial spaces are often less. We quote after a site inspection—fixed price, no surprises."
      }
    },
    {
      "@type": "Question",
      "name": "Who pays for the make good—tenant or landlord?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tenant. In almost all commercial leases, you cover the cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can I negotiate my make good costs with the landlord?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Some landlords will accept a cash settlement instead of physical works—especially if they're planning to refurbish anyway. Others may agree to a reduced scope. We can help you work through the options."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my make good costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan early. Get a clear scope agreed with your landlord before work starts. Negotiate what actually needs reinstating. And get it done right the first time—rework is expensive."
      }
    },
    {
      "@type": "Question",
      "name": "Do you price match or have a price promise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We don't compete on price. We provide fair, fixed-price quotes based on quality work, licensed trades and proper project management."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a quote and an estimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An estimate is a rough guess that can change. A quote is a fixed price for a defined scope. We provide fixed-price quotes. Once we agree on the scope, the price is locked."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a make good take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small office strip-out: 1–2 weeks. Large warehouse restoration: 4–8 weeks. It depends on size, complexity and coordination with the landlord."
      }
    },
    {
      "@type": "Question",
      "name": "When should I start planning my make good?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At least 3–6 months before your lease ends. That gives you time for inspections, scope agreement, quotes and scheduling without rushing."
      }
    },
    {
      "@type": "Question",
      "name": "What is your make good process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1. Free consultation—we review your lease and inspect the site. 2. Detailed quote—fixed price, no surprises. 3. Scope agreement—we finalise requirements with you and the landlord. 4. Execution—we complete the work to the agreed standard. 5. Documentation and handover—full records, final inspection coordinated."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will you respond to my enquiry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Within 24 hours on business days. For urgent make safe situations, often the same day."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be on site for the quote inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Helpful, but not essential. We can coordinate access with your building manager. Having someone who knows the site available helps us understand your requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle make safe or urgent works?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—during business hours. We secure sites after fire, flood or impact damage. We eliminate hazards and make the property safe. We don't offer 24/7 emergency call-outs."
      }
    },
    {
      "@type": "Question",
      "name": "What types of properties do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial and industrial properties across Melbourne. Offices, retail, warehouses, factories and mixed-use buildings. Small office suites to large distribution centres."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of Melbourne do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Melbourne and surrounding areas. CBD, inner suburbs, outer growth corridors and industrial precincts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work outside business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when required. Often necessary in occupied buildings or retail environments. We'll discuss scheduling during the quoting process."
      }
    },
    {
      "@type": "Question",
      "name": "What is building remediation and when is it needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Remediation is rectifying defects or damage—structural issues, water ingress, concrete spalling and cracking. It's needed when the problem affects the building's safety, integrity or compliance."
      }
    },
    {
      "@type": "Question",
      "name": "Does my building need cladding rectification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your building has combustible cladding, it may not meet current fire safety standards. We can assess the situation and advise on removal and replacement with compliant materials."
      }
    },
    {
      "@type": "Question",
      "name": "My building has water leaks—can you fix them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We find the source, repair the damage and restore affected areas. Water damage left untreated leads to bigger problems."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fully licensed, with public liability and workers' compensation coverage. Certificates of currency available on request."
      }
    },
    {
      "@type": "Question",
      "name": "What documentation do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before and after photos, compliance certificates, electrical and fire safety test reports, waste disposal receipts and a final handover checklist. Everything you need for a clean handover."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Free site inspection, lease review and detailed fixed-price quote. No obligation."
      }
    },
    {
      "@type": "Question",
      "name": "What information do you need for a quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your lease agreement (especially the make good clause ), property address, approximate floor area and any landlord requirements. If you don't have everything, we'll work with what you have and clarify the rest on site."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have a contact number or physical address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We don't have a public phone number or office. Contact us via email at info@makegood.melbourne. We respond during business hours."
      }
    },
    {
      "@type": "Question",
      "name": "What if my landlord disputes the make good works?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agree on a clear scope in writing before work starts. That's the best way to avoid disputes. If one arises, our documentation—photos, certificates and records—shows the work was completed to standard."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if the make good isn't completed on time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Holdover rent. Often significantly higher than standard rent. Landlords may also claim damages. We schedule carefully and build in contingency to finish on time."
      }
    },
    {
      "@type": "Question",
      "name": "Can I do my own make good instead of hiring professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can try, but it's not recommended. Landlords usually require licensed trades for electrical, plumbing and fire safety work. You'll need proper documentation and compliance certificates. A poor job leads to disputes and extra costs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee that my bond will be returned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. That's the landlord's decision. Our job is to complete the work to the required standard and provide documentation that supports a successful handover."
      }
    }
  ]
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Make Good FAQ Melbourne | Make Good, BETTER.</title>
        <meta name="description" content="Your complete guide to make good costs, processes and requirements in Melbourne. Get clear answers to your end-of-lease questions. Free quotes available." />
        <meta property="og:title" content="Make Good FAQ Melbourne | Make Good, BETTER." />
        <meta property="og:description" content="Your complete guide to make good costs, processes and requirements in Melbourne. Get clear answers to your end-of-lease questions. Free quotes available." />
        <link rel="canonical" href="https://makegood.melbourne/faq/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-24 px-4">
        <div className="container mx-auto">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary font-medium">
            Everything you need to know about make good, remediation and working with us.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-tertiary text-tertiary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-tertiary/50 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border border-l-4 border-l-primary rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for a free consultation and get answers tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <a href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/service-areas">
                  View Service Areas
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQPage;
