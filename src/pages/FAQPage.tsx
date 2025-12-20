import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQCategory = "all" | "understanding" | "costs" | "process" | "services" | "concerns";

interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

const faqs: FAQ[] = [
  // Understanding Make Good
  {
    category: "understanding",
    question: "What is a make good clause in a commercial lease?",
    answer: `A make good clause is a provision in your commercial lease that outlines your obligations when the lease ends. It typically requires you to return the premises to its original condition or a condition specified in the lease agreement.

Make good obligations can include removing partitions and signage, patching and repainting walls to a uniform finish, reinstating base building ceilings and floors, terminating electrical and data services, and completing a detailed final clean. The specific requirements vary depending on your lease terms and what modifications were made during your tenancy.

Understanding your make good clause early—ideally before signing the lease—can save you significant time and money when it comes time to vacate.`
  },
  {
    category: "understanding",
    question: "What is the difference between make good and make safe?",
    answer: `While both terms relate to property restoration, they serve different purposes:

• Make Good refers to the end-of-lease restoration works required to return a commercial property to its original or agreed condition. This is typically a planned process that occurs when your lease expires.

• Make Safe refers to urgent works required to eliminate immediate hazards or safety risks. This might include securing a site after damage, removing dangerous materials, or addressing structural issues that pose a risk to occupants or the public.

At Make Good Melbourne, we provide both services to help you manage your property needs.`
  },
  {
    category: "understanding",
    question: "What does a make good typically include?",
    answer: `A standard make good typically includes:

Demolition and Removal:
• Removal of tenant-installed partitions, walls, and fixtures
• Stripping out office fitouts and workstations
• Removal of signage and branding
• Pallet racking removal (for warehouses)

Restoration Works:
• Patching holes and repairing walls
• Repainting to a uniform finish
• Reinstating ceilings and floors
• Restoring base building services

Services:
• Make safe and termination of electrical circuits
• Removal of data cabling
• Testing and certification of mechanical and fire systems

Final Works:
• Detailed cleaning to handover standard
• Documentation and photography for landlord sign-off

The exact scope depends on your lease terms and what modifications were made during your tenancy.`
  },
  // Costs & Pricing
  {
    category: "costs",
    question: "How much does a make good cost in Melbourne?",
    answer: `Make good costs in Melbourne vary significantly depending on the size of your space, the scope of work required, and your lease obligations. As a general guide:

• Standard Make Good (minor works): $100 - $200 per square metre
  Includes general cleaning, painting, carpet cleaning, and minor repairs.

• Full Reinstatement: $250 - $350+ per square metre
  Includes removing partitions, restoring walls, replacing flooring, and reinstating base building services.

Factors that affect cost:
• Size and condition of the premises
• Extent of modifications made during your tenancy
• Quality of materials and finishes required
• Complexity of services (electrical, data, mechanical)
• Timeline and urgency

We provide free, no-obligation quotes with transparent pricing. Contact us for an accurate estimate based on your specific situation.`
  },
  {
    category: "costs",
    question: "Who pays for the make good—tenant or landlord?",
    answer: `In most commercial leases, the tenant is responsible for make good costs. This obligation is typically outlined in your lease agreement under the make good clause or reinstatement provisions.

However, there are some exceptions and negotiation opportunities:

• Tenant pays (most common): Standard lease terms require the tenant to complete make good works at their own expense. The tenant can choose their own contractors (subject to landlord approval).

• Cash settlement: Some landlords prefer to receive a cash payment instead of having the tenant complete the works. This can be convenient but may cost more than doing the work yourself.

• Negotiated terms: Some tenants negotiate reduced make good obligations when signing the lease. Landlords may agree to retain certain fitout elements if they add value.

Our recommendation: Review your lease carefully and get a professional quote before negotiating with your landlord.`
  },
  {
    category: "costs",
    question: "Can I negotiate my make good costs with the landlord?",
    answer: `Yes, make good terms are often negotiable, both at the start of your lease and at the end. Here are some strategies:

Before signing a lease:
• Negotiate a cap on make good costs
• Request specific exclusions (e.g., landlord retains certain fitout elements)
• Agree on an "as-is" handover if the landlord plans to renovate anyway

At lease end:
• Propose a cash settlement if it benefits both parties
• Negotiate which works are truly necessary

Tips for Successful Negotiation:
• Get a professional quote to understand the true cost
• Document the condition of the premises with photos
• Communicate early—don't wait until the last minute
• Be reasonable and professional in your approach

We can help you prepare for these negotiations by providing detailed quotes and scope documents.`
  },
  {
    category: "costs",
    question: "How can I reduce my make good costs?",
    answer: `There are several strategies to minimise your make good expenses:

• Plan ahead: Start planning 3-6 months before your lease ends. Rushed timelines lead to premium rates and limited contractor availability.

• Understand your lease: Review your make good clause carefully. You may not need to do as much as you think—some landlords only require basic cleaning and repairs.

• Get multiple quotes: Compare quotes from different providers to ensure competitive pricing. Look for providers who specialise in make good works.

• Negotiate with your landlord: If the landlord plans to renovate or re-fit the space, they may agree to reduced make good requirements.

• Salvage and reuse: Some fixtures and fittings can be salvaged, reducing disposal costs.

• Use experienced professionals: Hiring specialists who understand make good requirements ensures the job is done right the first time, avoiding costly rework.

Contact us for a free quote and we'll help you identify opportunities to reduce costs.`
  },
  // Process & Timeline
  {
    category: "process",
    question: "How long does a make good take?",
    answer: `The timeline for a make good depends on the size of your space and the scope of work required:

• Small office (under 200 sqm): 1-2 weeks for standard make good works
• Medium office (200-500 sqm): 2-4 weeks depending on complexity
• Large commercial space (500+ sqm): 4-8 weeks for comprehensive reinstatement
• Warehouse/Industrial: 2-6 weeks depending on scope (e.g., pallet racking removal, floor repairs)

Factors that affect timeline:
• Scope of demolition and removal works
• Complexity of services (electrical, mechanical, fire)
• Availability of materials and trades
• Landlord inspection and approval requirements
• Time needed for defect rectification

Our recommendation: Start planning at least 3 months before your lease ends. This allows time for quoting, scheduling, completing works, and addressing any defects before handover.`
  },
  {
    category: "process",
    question: "When should I start planning my make good?",
    answer: `We recommend starting your make good planning 3-6 months before your lease expires. Here's a suggested timeline:

6 months before:
• Review your lease and understand your obligations
• Conduct a preliminary site inspection
• Get initial quotes from make good providers

3 months before:
• Finalise scope of works with your landlord
• Appoint your make good contractor
• Schedule works and coordinate with your move-out

1 month before:
• Complete all make good works
• Conduct internal inspection and address defects
• Prepare documentation and photos

Lease expiry:
• Final landlord inspection
• Handover and bond release

Why start early? Trades book out quickly, especially at peak times. Early planning allows time for negotiation with landlords. Rushed timelines lead to higher costs and mistakes.`
  },
  {
    category: "process",
    question: "What is your make good process?",
    answer: `Our make good process is designed to be simple and stress-free:

Step 1: Free Consultation
We review your lease, inspect your premises, and discuss your requirements. This is completely free and no-obligation.

Step 2: Detailed Quote
We provide a comprehensive quote outlining all works, timelines, and costs. No hidden fees or surprises.

Step 3: Scope Agreement
We work with you and your landlord to agree on the final scope of works. We can attend landlord meetings on your behalf.

Step 4: Scheduling
We coordinate all trades and schedule works to minimise disruption to your business.

Step 5: Execution
Our licensed team completes all works to specification. We manage everything from demolition to final clean.

Step 6: Documentation
We provide comprehensive photos and reports documenting the completed works.

Step 7: Handover
We coordinate the final landlord inspection and address any defects. We ensure you get your bond back.`
  },
  // Services & Capabilities
  {
    category: "services",
    question: "Do you handle make safe and emergency works?",
    answer: `Yes, we provide make safe services across Melbourne.

Make safe works are urgent interventions required to eliminate immediate hazards, such as:
• Securing a site after fire, flood, or storm damage
• Removing dangerous materials or debris
• Addressing structural issues that pose safety risks
• Emergency electrical isolation
• Hazard mitigation and site security

Our make safe services include:
• Rapid response times
• Fully licensed and insured team
• Coordination with authorities and insurers

If you have an emergency situation, contact us through our enquiry form and we'll respond as quickly as possible.`
  },
  {
    category: "services",
    question: "What types of properties do you service?",
    answer: `We provide make good services for all types of commercial and industrial properties across Melbourne:

Commercial:
• Offices and corporate headquarters
• Retail shops and showrooms
• Medical and dental practices
• Childcare centres
• Educational facilities

Industrial:
• Warehouses and distribution centres
• Manufacturing facilities
• Logistics and storage facilities
• Industrial workshops

Specialist:
• Data centres
• Laboratories
• Clean rooms
• Food processing facilities

No matter the size or complexity of your space, we have the expertise and resources to deliver a professional make good.`
  },
  {
    category: "services",
    question: "What areas of Melbourne do you service?",
    answer: `We provide make good services across all Melbourne metropolitan areas, including:

• Inner Melbourne: CBD, Richmond, Port Melbourne, South Melbourne
• Western Suburbs: Altona, Truganina, Laverton
• Eastern Suburbs: Clayton, Mulgrave, Ringwood
• South-Eastern Suburbs: Dandenong, Moorabbin, Kilsyth
• Northern Suburbs and surrounding areas

We service commercial and industrial properties throughout Victoria. If you're unsure whether we cover your area, please contact us.`
  },
  {
    category: "services",
    question: "Are you licensed and insured?",
    answer: `Yes, Make Good Melbourne is fully licensed and insured for all commercial make good works.

Our credentials include:
• Appropriate building and trade licenses
• Comprehensive public liability insurance
• Workers compensation coverage
• OH&S compliance and safe work practices

All our team members are trained professionals who undergo regular safety training. We maintain strict compliance with all relevant regulations and industry standards.

We're happy to provide copies of our licenses and insurance certificates upon request.`
  },
  // Common Concerns
  {
    category: "concerns",
    question: "What if my landlord disputes the make good works?",
    answer: `Disputes can occur, but they're usually avoidable with proper planning and documentation. Here's how we help:

Prevention:
• We review your lease to understand exact requirements
• We document the original condition (if available) and current state
• We agree on scope with the landlord before starting works
• We provide detailed documentation of completed works

If a dispute arises:
• We attend landlord inspections on your behalf
• We address legitimate defects promptly
• We provide evidence and documentation to support your position
• We help negotiate fair resolutions

Common dispute areas and how we handle them:
• "The paint doesn't match" - We use professional painters and quality materials
• "Works aren't complete" - We provide comprehensive checklists and sign-offs
• "Damage wasn't repaired" - We document everything with photos before and after

Our goal is to ensure a smooth handover with no disputes.`
  },
  {
    category: "concerns",
    question: "What happens if the make good isn't completed on time?",
    answer: `Failing to complete your make good on time can have serious consequences:

Potential issues:
• Holdover rent (often at a premium rate)
• Landlord completing works at your expense
• Bond retention or disputes
• Legal action in serious cases

How we prevent delays:
• We start planning early (3+ months before lease end)
• We schedule all trades in advance
• We build buffer time into our timelines
• We have backup resources for unexpected issues
• We communicate proactively about progress

If you're running short on time: Contact us immediately. We can often fast-track works or negotiate extensions with your landlord. The earlier you reach out, the more options we have.`
  },
  {
    category: "concerns",
    question: "Can I do my own make good instead of hiring professionals?",
    answer: `While you can technically do your own make good, there are several reasons why hiring professionals is usually the better choice:

Challenges with DIY make good:
• Coordinating multiple trades (electricians, painters, cleaners, etc.)
• Understanding lease requirements and landlord expectations
• Ensuring compliance with building codes and safety standards
• Managing timelines while running your business
• Risk of defects leading to disputes and additional costs

Benefits of professional make good:
• Single point of contact for all works
• Experienced team who understands landlord requirements
• Proper documentation for handover
• Guaranteed workmanship
• Time savings for you and your team

Our recommendation: Unless your make good is very simple (basic cleaning only), professional help usually saves time, reduces stress, and often costs less than coordinating it yourself.`
  },
  {
    category: "concerns",
    question: "What documentation do you provide?",
    answer: `Comprehensive documentation is essential for a smooth handover and bond release. We provide:

Before works:
• Detailed scope of works document
• Photographic record of existing condition
• Timeline and schedule

During works:
• Progress updates and photos
• Compliance certificates (electrical, fire, etc.)
• Waste disposal receipts

After works:
• Comprehensive completion photos
• Final inspection checklist
• Compliance certificates and test reports
• Handover documentation for landlord

Why documentation matters:
• Protects you in case of disputes
• Provides evidence for bond release
• Creates a clear record for all parties
• Demonstrates professional standards

Our documentation package gives you and your landlord confidence that all works have been completed to the required standard.`
  },
];

const categories: { id: FAQCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "understanding", label: "Understanding Make Good" },
  { id: "costs", label: "Costs & Pricing" },
  { id: "process", label: "Process & Timeline" },
  { id: "services", label: "Services" },
  { id: "concerns", label: "Common Concerns" },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n/g, ' ').replace(/•/g, '-')
      }
    }))
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Make Good FAQ | Common Questions About Commercial Make Good | Melbourne</title>
        <meta name="description" content="Get answers to common questions about make good services in Melbourne. Learn about costs, timelines, processes, and how to protect your bond. Free quotes available." />
        <meta property="og:title" content="Make Good FAQ | Make Good Melbourne" />
        <meta property="og:description" content="Everything you need to know about commercial make good services in Melbourne." />
        <link rel="canonical" href="https://makegood.melbourne/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary font-medium">
            Everything you need to know about make good services
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
                <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed whitespace-pre-line border-t border-border pt-4">
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
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/service-areas">
                  View Service Areas
                </Link>
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
