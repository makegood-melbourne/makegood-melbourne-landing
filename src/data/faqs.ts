/**
 * Homepage FAQ data - single source of truth
 * Used for both rendering and schema generation
 */

export interface FAQ {
  question: string;
  answer: string;
}

// Curated subset of 6 most relevant FAQs for homepage
export const homepageFaqs: FAQ[] = [
  {
    question: "What is a make good and when is it required?",
    answer: "A make good is the process of returning a commercial space to its original or agreed condition at lease end. Most commercial leases have a make good clause. It's triggered when you vacate—whether at lease end, early termination, or break clause."
  },
  {
    question: "How much does a make good cost in Melbourne?",
    answer: "It depends on size and scope. Office make goods typically run $100–$200 per square metre. Industrial spaces are often less. We quote after a site inspection—fixed price, no surprises."
  },
  {
    question: "How long does a make good take?",
    answer: "Small office strip-out: 1–2 weeks. Large warehouse restoration: 4–8 weeks. It depends on size, complexity and coordination with the landlord."
  },
  {
    question: "What areas of Melbourne do you service?",
    answer: "Melbourne and surrounding areas. CBD, inner suburbs, outer growth corridors, industrial precincts."
  },
  {
    question: "What is building remediation and when is it needed?",
    answer: "Remediation is rectifying defects or damage—structural issues, water ingress, concrete spalling, cracking. It's needed when the problem affects the building's safety, integrity, or compliance."
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes. Free site inspection, lease review and detailed fixed-price quote. No obligation."
  }
];
