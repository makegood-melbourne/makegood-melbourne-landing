import { ClipboardCheck, Wrench, KeyRound, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Proposal",
    subtitle: "Scope & Quote",
    description: "We review your lease, inspect your premises and provide a detailed, fixed-price proposal with no hidden surprises."
  },
  {
    number: "02",
    icon: Wrench,
    title: "Make Good",
    subtitle: "Complete the Works",
    description: "Our licensed team coordinates all trades and completes your make good on schedule, keeping you informed at every step."
  },
  {
    number: "03",
    icon: KeyRound,
    title: "Handover",
    subtitle: "Secure Sign-Off",
    description: "We conduct quality inspections, coordinate landlord walkthroughs and ensure your bond is protected with full documentation."
  }
];

const SimpleProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from first contact to successful handover
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line - hidden on mobile, visible between cards on desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                {/* Step number badge */}
                <div className="absolute -top-4 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="/our-process">
              See Our Full Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;
