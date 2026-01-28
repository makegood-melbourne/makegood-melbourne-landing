/**
 * Homepage FAQ data - single source of truth
 * Used for both rendering and schema generation
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQ[] = [
  {
    question: "What is building remediation and when is it needed?",
    answer: "Remediation fixes structural and compliance issues—concrete cancer, failed waterproofing, non-compliant cladding, facade defects. It's needed when a building has water ingress, visible deterioration, or doesn't meet current building codes. We work with structural engineers to diagnose the problem and fix it at the source."
  },
  {
    question: "Does my building need cladding rectification?",
    answer: "If your building has ACP (aluminium composite panel) cladding, it may no longer be compliant. ACP is now banned, and many buildings require rectification to meet NCC fire safety requirements. We handle the full process—assessment, removal, replacement with fire-rated materials, and VBA sign-off."
  },
  {
    question: "My building has water leaks—can you fix them?",
    answer: "Yes. We find the source, not just the symptom. Balcony membranes, roof coatings, box gutters, wet areas—we diagnose the failure and apply membrane systems that last. No patch jobs."
  },
  {
    question: "What is a make good and when is it required?",
    answer: "Restoring a commercial space to its original condition at lease end. Most commercial leases have a make good clause requiring you to remove fitout, repair damage, and return the space as it was."
  },
  {
    question: "How much does a make good cost in Melbourne?",
    answer: "It depends on size, condition, and scope. Offices typically run $50–$150 per sqm. Industrial spaces $30–$80 per sqm. We quote after inspection—no ballpark figures."
  },
  {
    question: "How long does a make good project take?",
    answer: "Small office strip-out: 1–2 weeks. Large warehouse restoration: 4–8 weeks. Start the conversation 8–12 weeks before lease end to avoid holdover rent."
  },
  {
    question: "Who is responsible for make good obligations?",
    answer: "The tenant, almost always. Your lease spells out exactly what's required. Read it early. If it's unclear, we can help you work through it."
  },
  {
    question: "Can I negotiate my make good obligations?",
    answer: "Yes—at lease signing or lease end. Options include cost caps, 'as is' handover, or cash settlements. Landlords often prefer cash if they're planning to refit anyway."
  },
  {
    question: "What happens if I don't complete my make good?",
    answer: "The landlord does it and bills you—usually 30–50% more. You may also lose your bond, face holdover rent, or end up in a legal dispute. Cheaper to get it done properly upfront."
  },
  {
    question: "What areas of Melbourne do you service?",
    answer: "All of Melbourne and greater Victoria. CBD, inner suburbs, industrial precincts—Dandenong, Port Melbourne, Clayton, Moorabbin, and beyond."
  }
];
