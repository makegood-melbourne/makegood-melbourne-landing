import { useState } from "react";
import { Helmet } from "@/lib/helmet";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import CtaBlockReact from "@/components/CtaBlockReact";
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
    answer: "A make good is the process of returning a commercial space to its original or agreed condition at lease end. Most commercial leases have a make good clause. It's triggered when you vacate—whether at lease end, early termination or break clause."
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
    answer: "Yes—during business hours. We secure sites after fire, flood or impact damage. We eliminate hazards and make the property safe. We don't offer 24/7 emergency call-outs."
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
    question: "What is included in an end of lease make good?",
    answer: "An end of lease make good can include strip out, removal of tenant fixtures, patching, plastering, painting, flooring reinstatement, ceiling repairs, warehouse floor restoration, line marking, waste removal and other works needed to return the premises to the agreed handover condition."
  },
  {
    category: "services",
    question: "Do you work from the lease make good clause?",
    answer: "Yes. We can review the lease make good requirements, site condition and property manager notes to help define the practical scope. The final scope depends on the lease, the condition of the tenancy and the level of reinstatement requested for handover."
  },
  {
    category: "services",
    question: "Can you manage multiple trades?",
    answer: "Yes. Most make good projects involve several trades. We coordinate the order of works so strip out, repairs, painting, flooring, ceiling works and other trade items are handled as one project rather than as disconnected jobs."
  },
  {
    category: "services",
    question: "Can you coordinate with our own trades?",
    answer: "Yes. If you already have a preferred painter, electrician or other trade, we can coordinate with them and handle the remaining make good scope. The aim is to keep the programme practical, clear and ready for handover."
  },
  {
    category: "services",
    question: "What information helps with an end of lease make good quote?",
    answer: "Helpful information includes the site address, lease end date, floor area, access rules, photos, walkthrough videos, lease notes and any property manager comments. We can then advise whether a site inspection is needed before confirming the quote."
  },
  {
    category: "services",
    question: "Can you work outside business hours?",
    answer: "Yes, when required. Often necessary in occupied buildings or retail environments. We'll discuss scheduling during the quoting process."
  },
  {
    category: "services",
    question: "What is an office strip out?",
    answer: "An office strip out is the removal of tenant-installed office fitout so the tenancy can be repaired, reinstated or handed back. It can include partitions, meeting rooms, workstations, joinery, floor finishes, ceiling changes, signage and redundant fixtures."
  },
  {
    category: "services",
    question: "What is the difference between office strip out, office defit and make good?",
    answer: "Office strip out and office defit are often used for the removal stage. Make good is broader. It can include the strip out plus patching, painting, flooring reinstatement, ceiling repairs, service certification and final handover preparation."
  },
  {
    category: "services",
    question: "What does an office strip out include?",
    answer: "A typical office strip out includes removing plasterboard or glazed partitions, built-in joinery, cupboards, counters, shelving, selected loose items, signage, floor finishes, adhesives and nominated ceiling alterations. The final scope comes from the lease, landlord notes and site inspection."
  },
  {
    category: "services",
    question: "How long does an office strip out take?",
    answer: "Small office strip outs can take a few days. Larger tenancies, multi-level sites, heavy flooring removal, after-hours restrictions or tight lift access can push the programme to one or more weeks. We confirm timing after the walk through and access review."
  },
  {
    category: "services",
    question: "What affects the cost of an office strip out in Melbourne?",
    answer: "Cost is driven by floor area, the amount of fitout being removed, flooring and adhesive removal, services make safe requirements, lift and loading dock access, waste volume, after-hours work and the repairs needed for handover."
  },
  {
    category: "services",
    question: "Do you handle building access and after-hours works for office strip outs?",
    answer: "Yes. We can coordinate lift bookings, loading dock windows, induction rules, noise controls, security access and after-hours works where the building permits it. These items are planned before works start."
  },
  {
    category: "services",
    question: "What should tenants do before an office strip out starts?",
    answer: "Remove personal items, confidential documents, computers, business equipment, retained furniture and anything your team wants to keep. Send through the lease make good clause, landlord notes, floor plans and access requirements before the site visit if you have them."
  },
  {
    category: "services",
    question: "How do you prepare an office for handback inspection?",
    answer: "We check the tenancy against the agreed scope and prepare it for the next stage. That may include strip out, patching, painting, flooring, ceiling repairs, rubbish removal, photos, certificates and handover records where required."
  },
  // Category 5: Remediation (NEW)
  {
    category: "remediation",
    question: "What is building remediation and when is it needed?",
    answer: "Remediation is rectifying defects or damage—structural issues, water ingress, concrete spalling and cracking. It's needed when the problem affects the building's safety, integrity or compliance."
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
    answer: "Before and after photos, compliance certificates, electrical and fire safety test reports, waste disposal receipts and a final handover checklist. Everything you need for a well-documented handover."
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
    question: "What if my landlord questions the make good works?",
    answer: "Agree on a clear scope in writing before work starts. If questions come up, our documentation—photos, certificates and records—shows the work was completed to standard."
  },
  {
    category: "working",
    question: "What happens if the make good isn't completed on time?",
    answer: "Holdover rent. Often significantly higher than standard rent. Landlords may also claim damages. We schedule carefully and build in contingency to finish on time."
  },
  {
    category: "working",
    question: "Can I do my own make good instead of hiring professionals?",
    answer: "You can, but landlords usually need licensed trades for electrical, plumbing and fire safety work. You'll also need proper documentation and compliance certificates. Poor workmanship can add extra cost at handover."
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

// JSON-LD Schema for all FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Make Good & Office Strip Out FAQ Melbourne | Make Good, BETTER.</title>
        <meta name="description" content="Answers on make good, office strip out, defit works, costs, timing and handover requirements in Melbourne. Get clear end-of-lease guidance and free quotes." />
        <meta property="og:title" content="Make Good & Office Strip Out FAQ Melbourne | Make Good, BETTER." />
        <meta property="og:description" content="Answers on make good, office strip out, defit works, costs, timing and handover requirements in Melbourne. Get clear end-of-lease guidance and free quotes." />
        <link rel="canonical" href="https://makegood.melbourne/faq/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>


      {/* Breadcrumbs */}
      <div className="pt-24 px-4">
        <div className="container mx-auto">
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary font-medium">
            Everything you need to know about make good, office strip out, remediation and working with us.
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



      <CtaBlockReact />

      <Footer />
    </main>
  );
};

export default FAQPage;
