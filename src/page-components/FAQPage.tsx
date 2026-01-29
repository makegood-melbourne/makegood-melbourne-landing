import { useState, useMemo } from "react";
import { Helmet } from "@/lib/helmet";
import { ArrowRight, Search } from "lucide-react";
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
  id: string;
  question: string;
  answer: React.ReactNode;
  category: FAQCategory;
  allViewOrder: number;
}

// Helper component for internal links
const FaqLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
    onClick={(e) => {
      // Handle anchor links with smooth scroll
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Open the accordion if it's closed
          const trigger = targetElement.querySelector('[data-state]');
          if (trigger && trigger.getAttribute('data-state') === 'closed') {
            (trigger as HTMLButtonElement).click();
          }
        }
      }
    }}
  >
    {children}
  </a>
);

const faqs: FAQ[] = [
  // Category 1: Understanding Make Good
  {
    id: "what-is-make-good",
    category: "understanding",
    allViewOrder: 1,
    question: "What is a make good and when is it required?",
    answer: (
      <>
        A make good is the process of returning a commercial space to its original or agreed condition at lease end. Most commercial leases include a <FaqLink href="#make-good-clause">make good clause</FaqLink> that defines what's required. It's triggered when you vacate—whether at lease end, early termination or break clause.
      </>
    )
  },
  {
    id: "make-good-clause",
    category: "understanding",
    allViewOrder: 2,
    question: "What is a make good clause in a commercial lease?",
    answer: "A make good clause sets out what you're required to do when your lease ends. Usually that means removing your fitout, repairing damage and returning the space to its original condition. Every lease is different—read yours carefully and understand your obligations before signing."
  },
  {
    id: "who-responsible",
    category: "understanding",
    allViewOrder: 3,
    question: "Who is responsible for make good requirements?",
    answer: "The tenant is responsible. In almost all commercial leases, you're responsible for both the work and the cost. Check your lease to understand exactly what's required and plan accordingly."
  },
  {
    id: "dont-complete",
    category: "understanding",
    allViewOrder: 4,
    question: "What happens if I don't complete my make good?",
    answer: "The landlord can complete the work and bill you—usually at a premium. You may lose part or all of your bond. In some cases, they'll pursue legal action for additional costs. It's better to deal with it yourself and control the outcome."
  },
  {
    id: "make-good-vs-make-safe",
    category: "understanding",
    allViewOrder: 19,
    question: "What is the difference between make good and make safe?",
    answer: (
      <>
        <FaqLink href="/what-is-make-good">Make good</FaqLink> is planned work at the end of a lease—restoring the space as required by your agreement. Make safe is urgent work after an incident—fire, flood or impact damage. Make safe is about eliminating hazards and securing the site quickly to prevent further damage.
      </>
    )
  },
  {
    id: "what-includes",
    category: "understanding",
    allViewOrder: 16,
    question: "What does a make good typically include?",
    answer: (
      <>
        Removing tenant-installed partitions, signage and fixtures. Patching and <FaqLink href="/services/make-good-painting">painting</FaqLink> walls. Reinstating <FaqLink href="/services/ceiling-tile-replacement">ceilings</FaqLink> and floors. Disconnecting and certifying electrical, data and mechanical services. For warehouses, it often includes racking removal and concrete floor repairs.
      </>
    )
  },

  // Category 2: Costs & Pricing
  {
    id: "cost-melbourne",
    category: "costs",
    allViewOrder: 5,
    question: "How much does a make good cost in Melbourne?",
    answer: "It depends on size and scope. Office make goods typically run $100–$200 per square metre. Industrial spaces are often less due to simpler finishes. We quote after a site inspection—fixed price, no surprises."
  },
  {
    id: "who-pays",
    category: "costs",
    allViewOrder: 6,
    question: "Who pays for the make good—tenant or landlord?",
    answer: "The tenant pays. In almost all commercial leases, you cover the cost of returning the space to its original condition. This is typically outlined in your make good clause."
  },
  {
    id: "reduce-costs",
    category: "costs",
    allViewOrder: 7,
    question: "How can I reduce my make good costs?",
    answer: "Plan early. Get a clear scope agreed with your landlord before work starts. Negotiate what actually needs reinstating—some items may be acceptable to leave. And get it done right the first time—rework is expensive."
  },
  {
    id: "negotiate-costs",
    category: "costs",
    allViewOrder: 26,
    question: "Can I negotiate my make good costs with the landlord?",
    answer: "Yes, negotiation is common. Some landlords will accept a cash settlement instead of physical works—especially if they're planning to refurbish anyway. Others may agree to a reduced scope. We can help you work through the options and present them professionally."
  },
  {
    id: "price-match",
    category: "costs",
    allViewOrder: 27,
    question: "Do you price match or have a price promise?",
    answer: "No, we don't compete on price. We provide fair, fixed-price quotes based on quality work, licensed trades and proper project management. Our focus is on getting the job done right, not being the cheapest option."
  },
  {
    id: "quote-vs-estimate",
    category: "costs",
    allViewOrder: 28,
    question: "What's the difference between a quote and an estimate?",
    answer: "An estimate is a rough guess that can change as the project progresses. A quote is a fixed price for a defined scope of work. We provide fixed-price quotes—once we agree on the scope, the price is locked."
  },

  // Category 3: Process & Timeline
  {
    id: "when-start-planning",
    category: "process",
    allViewOrder: 8,
    question: "When should I start planning my make good?",
    answer: "At least 3–6 months before your lease ends. That gives you time for inspections, scope agreement, quotes and scheduling without rushing. Starting early also gives you leverage in negotiations with your landlord."
  },
  {
    id: "how-long",
    category: "process",
    allViewOrder: 9,
    question: "How long does a make good take?",
    answer: "Small office strip-out: 1–2 weeks. Large warehouse restoration: 4–8 weeks. It depends on size, complexity and coordination with the landlord. We'll give you a realistic timeline during the quoting process."
  },
  {
    id: "our-process",
    category: "process",
    allViewOrder: 11,
    question: "What is your make good process?",
    answer: (
      <>
        1. <FaqLink href="/contact">Free consultation</FaqLink>—we review your lease and inspect the site. 2. Detailed quote—fixed price, no surprises. 3. Scope agreement—we finalise requirements with you and the landlord. 4. Execution—we complete the work to the agreed standard. 5. Documentation and handover—full records, final inspection coordinated. Learn more about <FaqLink href="/our-process">our process</FaqLink>.
      </>
    )
  },
  {
    id: "response-time",
    category: "process",
    allViewOrder: 13,
    question: "How quickly will you respond to my enquiry?",
    answer: "Within 24 hours on business days. For urgent make safe situations, we often respond the same day. We understand that timing matters when you're working to a lease deadline."
  },
  {
    id: "on-site-inspection",
    category: "process",
    allViewOrder: 29,
    question: "Do I need to be on site for the quote inspection?",
    answer: "Helpful, but not essential. We can coordinate access with your building manager or agent. Having someone who knows the site available helps us understand your specific requirements and any access considerations."
  },

  // Category 4: Services
  {
    id: "free-quotes",
    category: "working",
    allViewOrder: 10,
    question: "Do you provide free quotes?",
    answer: (
      <>
        Yes. Free site inspection, lease review and detailed fixed-price quote with no obligation. <FaqLink href="/contact">Get a quote</FaqLink> to start the conversation.
      </>
    )
  },
  {
    id: "quote-info",
    category: "working",
    allViewOrder: 12,
    question: "What information do you need for a quote?",
    answer: "Your lease agreement (especially the make good clause), property address, approximate floor area and any landlord requirements. If you don't have everything, we'll work with what you have and clarify the rest during the site inspection."
  },
  {
    id: "areas-service",
    category: "services",
    allViewOrder: 14,
    question: "What areas of Melbourne do you service?",
    answer: (
      <>
        Melbourne and surrounding areas—CBD, inner suburbs, outer growth corridors and industrial precincts. We cover the greater Melbourne metropolitan area. <FaqLink href="/service-areas">View all service areas</FaqLink> for specific suburbs.
      </>
    )
  },
  {
    id: "property-types",
    category: "services",
    allViewOrder: 15,
    question: "What types of properties do you service?",
    answer: (
      <>
        <FaqLink href="/industries/commercial">Commercial</FaqLink> and <FaqLink href="/industries/industrial">industrial</FaqLink> properties across Melbourne. Offices, retail, warehouses, factories and mixed-use buildings. From small office suites to large distribution centres.
      </>
    )
  },
  {
    id: "outside-hours",
    category: "services",
    allViewOrder: 17,
    question: "Can you work outside business hours?",
    answer: "Yes, when required. After-hours work is often necessary in occupied buildings or retail environments where daytime disruption isn't acceptable. We'll discuss scheduling options during the quoting process."
  },
  {
    id: "make-safe-urgent",
    category: "services",
    allViewOrder: 18,
    question: "Do you handle make safe or urgent works?",
    answer: "Yes—during business hours. We secure sites after fire, flood or impact damage. We eliminate hazards and make the property safe to prevent further damage. We don't offer 24/7 emergency call-outs."
  },

  // Category 5: Remediation
  {
    id: "what-is-remediation",
    category: "remediation",
    allViewOrder: 20,
    question: "What is building remediation and when is it needed?",
    answer: (
      <>
        <FaqLink href="/industries/remediation">Remediation</FaqLink> is rectifying defects or damage—<FaqLink href="/services/structural-remediation">structural issues</FaqLink>, water ingress, concrete spalling and cracking. It's needed when the problem affects the building's safety, integrity or compliance with regulations.
      </>
    )
  },
  {
    id: "water-leaks",
    category: "remediation",
    allViewOrder: 21,
    question: "My building has water leaks—can you fix them?",
    answer: (
      <>
        Yes. We find the source, repair the damage and restore affected areas. Our <FaqLink href="/services/waterproofing">waterproofing</FaqLink> services address the root cause to prevent recurrence. Water damage left untreated leads to bigger structural problems.
      </>
    )
  },
  {
    id: "cladding",
    category: "remediation",
    allViewOrder: 22,
    question: "Does my building need cladding rectification?",
    answer: (
      <>
        If your building has combustible <FaqLink href="/services/cladding-glazing">cladding</FaqLink>, it may not meet current fire safety standards. We can assess the situation and advise on removal and replacement with compliant materials to meet regulatory requirements.
      </>
    )
  },

  // Category 6: Working With Us
  {
    id: "licensed-insured",
    category: "working",
    allViewOrder: 23,
    question: "Are you licensed and insured?",
    answer: "Yes. Fully licensed, with public liability and workers' compensation coverage. Certificates of currency are available on request for your records or landlord requirements."
  },
  {
    id: "documentation",
    category: "working",
    allViewOrder: 24,
    question: "What documentation do you provide?",
    answer: "Before and after photos, compliance certificates, electrical and fire safety test reports, waste disposal receipts and a final handover checklist. Everything you need for a clean handover and to demonstrate the work was completed to standard."
  },
  {
    id: "contact-info",
    category: "working",
    allViewOrder: 25,
    question: "Do you have a contact number or physical address?",
    answer: "We don't have a public phone number or office. Contact us via email at info@makegood.melbourne and we respond during business hours. This keeps our overheads low and our prices competitive."
  },
  {
    id: "landlord-disputes",
    category: "working",
    allViewOrder: 30,
    question: "What if my landlord disputes the make good works?",
    answer: "Agree on a clear scope in writing before work starts—that's the best way to prevent disputes. If one arises, our documentation—photos, certificates and records—demonstrates the work was completed to the agreed standard."
  },
  {
    id: "not-completed-time",
    category: "working",
    allViewOrder: 31,
    question: "What happens if the make good isn't completed on time?",
    answer: "Holdover rent—often significantly higher than standard rent. Landlords may also claim damages for the delay. We schedule carefully and build in contingency to finish on time and avoid these penalties."
  },
  {
    id: "diy-make-good",
    category: "working",
    allViewOrder: 32,
    question: "Can I do my own make good instead of hiring professionals?",
    answer: "You can try, but it's not recommended. Landlords usually require licensed trades for electrical, plumbing and fire safety work. You'll need proper documentation and compliance certificates. A poor job leads to disputes, rework and extra costs."
  },
  {
    id: "bond-guarantee",
    category: "working",
    allViewOrder: 33,
    question: "Do you guarantee that my bond will be returned?",
    answer: "No—that's the landlord's decision and depends on many factors. Our job is to complete the work to the required standard and provide documentation that supports a successful handover."
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

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort FAQs based on category and search
  const filteredFaqs = useMemo(() => {
    let result = faqs;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter(faq => faq.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(faq => {
        const questionMatch = faq.question.toLowerCase().includes(query);
        // For answer, we need to handle both string and ReactNode
        const answerText = typeof faq.answer === 'string' 
          ? faq.answer 
          : faq.question; // Fallback to question for search if answer is JSX
        const answerMatch = answerText.toLowerCase().includes(query);
        return questionMatch || answerMatch;
      });
    }

    // Sort by allViewOrder when showing "All" category and no search
    if (activeCategory === "all" && !searchQuery.trim()) {
      result = [...result].sort((a, b) => a.allViewOrder - b.allViewOrder);
    }

    return result;
  }, [activeCategory, searchQuery]);

  // Handle category change - clear search
  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Make Good FAQ Melbourne | Make Good, BETTER.</title>
        <meta name="description" content="Your complete guide to make good costs, processes and requirements in Melbourne. Get clear answers to your end-of-lease questions. Free quotes available." />
        <meta property="og:title" content="Make Good FAQ Melbourne | Make Good, BETTER." />
        <meta property="og:description" content="Your complete guide to make good costs, processes and requirements in Melbourne. Get clear answers to your end-of-lease questions. Free quotes available." />
        <link rel="canonical" href="https://makegood.melbourne/faq/" />
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

      {/* Search Input */}
      <section className="pb-4 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
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
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem 
                  key={faq.id}
                  id={faq.id}
                  value={faq.id}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No FAQs match your search. Try a different term or browse by category.
              </p>
            </div>
          )}
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
