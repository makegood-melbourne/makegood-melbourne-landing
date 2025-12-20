import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  ClipboardCheck, 
  FileText, 
  Calendar, 
  HardHat, 
  Camera, 
  KeyRound,
  CheckCircle,
  Shield,
  Target,
  MessageSquare,
  FileCheck
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    description: "We review your lease, inspect your premises, and discuss your specific requirements. No obligation, completely free.",
    details: [
      "Lease review",
      "Site inspection",
      "Obligation assessment",
      "Initial questions answered"
    ],
    outcome: "Clear understanding of your obligations"
  },
  {
    number: "02",
    icon: FileText,
    title: "Detailed Quote",
    description: "You receive a comprehensive, itemised quote with no hidden fees. You'll know exactly what's included and what it costs.",
    details: [
      "Itemised scope of works",
      "Fixed pricing",
      "Timeline estimate",
      "No surprises"
    ],
    outcome: "Full cost transparency"
  },
  {
    number: "03",
    icon: Calendar,
    title: "Scope Agreement",
    description: "We work with you and your landlord to finalise the scope. We can attend meetings and handle coordination on your behalf.",
    details: [
      "Landlord coordination",
      "Scope finalisation",
      "Timeline confirmation",
      "Contract signing"
    ],
    outcome: "Agreed scope with all parties"
  },
  {
    number: "04",
    icon: HardHat,
    title: "Scheduled Works",
    description: "Our licensed team completes all make good works. We coordinate all trades and manage the entire project.",
    details: [
      "All trades coordinated",
      "Regular progress updates",
      "Quality workmanship",
      "Minimal disruption"
    ],
    outcome: "Professional completion of all works"
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "We conduct a thorough internal inspection before landlord handover. Any defects are rectified immediately.",
    details: [
      "Internal QA inspection",
      "Defect rectification",
      "Photo documentation",
      "Compliance certificates"
    ],
    outcome: "Works verified to standard"
  },
  {
    number: "06",
    icon: KeyRound,
    title: "Handover & Sign-off",
    description: "We coordinate the final landlord inspection and ensure everything is approved. Your bond is protected.",
    details: [
      "Landlord walkthrough",
      "Final sign-off",
      "Documentation package",
      "Bond release support"
    ],
    outcome: "Successful lease completion"
  }
];

const differentiators = [
  {
    icon: Target,
    title: "Single Point of Contact",
    description: "One dedicated project manager handles everything. No chasing multiple contractors or coordinating trades yourself."
  },
  {
    icon: FileCheck,
    title: "Transparent Pricing",
    description: "Fixed quotes with itemised breakdowns. No hidden fees, no surprises. What we quote is what you pay."
  },
  {
    icon: Shield,
    title: "Bond Protection",
    description: "We don't consider the job done until your landlord signs off. Your bond is protected."
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Regular progress updates at every stage. You'll always know what's happening with your project."
  }
];

const beforeDeliverables = [
  "Detailed scope of works",
  "Fixed price quote",
  "Project timeline",
  "Condition photography"
];

const afterDeliverables = [
  "Completion photographs",
  "Compliance certificates",
  "Test reports (electrical, fire, mechanical)",
  "Waste disposal receipts",
  "Handover documentation",
  "Final inspection checklist"
];

const OurProcess = () => {
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Make Good Melbourne Process",
    "description": "Our step-by-step process for commercial make good works in Melbourne",
    "step": processSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Our Process | How We Deliver Make Good Works | Melbourne</title>
        <meta 
          name="description" 
          content="Discover our proven 6-step make good process. From free consultation to successful handover, we make commercial lease restoration simple and stress-free." 
        />
        <meta name="keywords" content="make good process, commercial restoration Melbourne, lease end process, make good steps" />
        <link rel="canonical" href="https://makegood.melbourne/our-process" />
        <script type="application/ld+json">
          {JSON.stringify(processSchema)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Make Good Process
          </h1>
          <p className="text-xl text-primary mb-4">
            From First Contact to Final Handover
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our proven 6-step process ensures your end-of-lease make good is completed 
            professionally, on time, and without stress.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Fixed Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Bond Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Note */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-tertiary/10 border-y border-tertiary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-tertiary">Note:</strong> This process applies to end-of-lease make good projects. 
            For simpler works (cleaning, minor repairs) or specialist services (structural remediation, cladding), 
            we offer a streamlined approach tailored to your specific needs.{" "}
            <Link to="/contact" className="text-primary hover:underline">Get in touch</Link> to discuss.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Your Make Good Journey
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            6 simple steps from consultation to handover
          </p>
          
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 md:left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-border" />
                )}
                
                <div className="flex gap-6 md:gap-10 pb-12">
                  {/* Step Number & Icon */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10">
                      <step.icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-primary/30">{step.number}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                    
                    <Card className="bg-card border-border">
                      <CardContent className="pt-6">
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-4 border-t border-border">
                          <span className="text-sm text-primary font-medium">Outcome: </span>
                          <span className="text-sm text-foreground">{step.outcome}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works - 4 Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Why Our Process Works
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            What makes working with us different
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} className="bg-card border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            What You'll Receive
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Complete documentation for a smooth handover
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Before Works</h3>
                <ul className="space-y-3">
                  {beforeDeliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">After Works</h3>
                <ul className="space-y-3">
                  {afterDeliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free consultation and quote for your make good. 
            We'll review your lease, inspect your premises, and provide a detailed quote—all at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/what-is-make-good">
                Learn About Make Good
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              No obligation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              Free site visit
            </span>
          </div>
          <p className="text-muted-foreground mt-6">
            Have more questions?{" "}
            <Link to="/faq" className="text-primary hover:underline">
              Check our FAQ
            </Link>{" "}
            for detailed answers.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurProcess;
