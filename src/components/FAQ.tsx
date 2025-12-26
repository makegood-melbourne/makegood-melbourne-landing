import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "@/lib/helmet";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a make good and when is it required?",
      answer: "A 'make good' refers to the restoration of a commercial or industrial property to its original condition at the end of a lease. It's typically required when your lease includes a make good clause, which most commercial leases do. This includes removing fixtures, repairing damage, repainting, and restoring flooring to meet your contractual obligations."
    },
    {
      question: "How much does a make good cost in Melbourne?",
      answer: "Make good costs vary based on property size, condition, and scope of work. For offices, expect $50-$150 per square metre. Industrial spaces typically range from $30-$80 per square metre. Warehouses with minimal fitout may cost less. We provide free, detailed quotes after inspecting your premises to give you accurate pricing."
    },
    {
      question: "How long does a make good project take?",
      answer: "Timeline depends on the project scope. A small office strip-out might take 1-2 weeks, while a large warehouse restoration could require 4-8 weeks. We recommend starting the process 8-12 weeks before your lease expires to ensure timely completion and avoid penalties or holdover rent."
    },
    {
      question: "Who is responsible for make good obligations?",
      answer: "Under Victorian commercial lease law, the tenant is typically responsible for make good works. Your specific obligations are outlined in your lease agreement's make good clause. We recommend reviewing this clause early and getting professional advice to understand your exact requirements and avoid disputes."
    },
    {
      question: "Can I negotiate my make good obligations?",
      answer: "Yes, make good terms are negotiable both at lease signing and lease end. Options include capping costs, 'as is' handover provisions, or cash settlements in lieu of physical works. Many landlords prefer cash settlements if they plan to refit the space. We can help you understand what's reasonable to negotiate."
    },
    {
      question: "What happens if I don't complete my make good?",
      answer: "Failure to complete make good works can result in: the landlord completing works at your expense (often 30-50% more expensive), claims against your security deposit or bank guarantee, holdover rent charges, or legal action. It's always more cost-effective to complete works yourself with proper planning."
    },
    {
      question: "Do you handle emergency make safe situations?",
      answer: "Yes, we offer 24/7 emergency response for urgent make safe requirements. This includes situations like storm damage, fire damage, structural issues, or safety hazards that need immediate attention. Our team can mobilise quickly to secure your premises and prevent further damage or liability."
    },
    {
      question: "What areas of Melbourne do you service?",
      answer: "We service all of Melbourne and greater Victoria, including CBD, inner suburbs, and outer industrial areas like Dandenong, Port Melbourne, Clayton, Moorabbin, and beyond. Our team is experienced with properties across all commercial and industrial precincts throughout the metropolitan area."
    }
  ];

  // Generate FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about make good services in Melbourne
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
