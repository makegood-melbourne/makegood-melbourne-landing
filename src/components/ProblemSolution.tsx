import { X, Check } from "lucide-react";

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

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Make Good Projects Go Wrong — And How We Prevent It
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make good disputes, delays and cost blowouts usually come from poor scope definition and trade coordination. Our process is designed to eliminate those risks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default ProblemSolution;
