import { X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemSolution = () => {
  const problems = [
    "Unclear make good obligations causing disputes",
    "Unexpected costs at lease end",
    "Tight deadlines with no reliable contractor",
    "Poor workmanship leading to rejected handovers",
    "Multiple trades to coordinate and manage",
    "Risk of losing your security deposit",
  ];

  const solutions = [
    "Clear scope documentation before work begins",
    "Fixed-price quotes with no hidden surprises",
    "Reliable scheduling with guaranteed completion",
    "Quality workmanship that passes inspection",
    "Single point of contact for all trades",
    "Full bond protection with compliance documentation",
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            End of Lease Stress? <span className="text-primary">We've Got You Covered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't let make good obligations catch you off guard. See how we transform common lease-end challenges into smooth handovers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Problems Column */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-destructive mb-6 flex items-center gap-2">
              <X className="h-6 w-6" />
              The Problem
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <Check className="h-6 w-6" />
              Our Solution
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
