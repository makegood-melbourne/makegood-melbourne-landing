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
  CheckCircle
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
    duration: "Day 1",
    description: "We start with a comprehensive discussion about your needs and timeline.",
    details: [
      "Review your lease and make good clause",
      "Discuss your specific requirements",
      "Understand your move-out timeline",
      "Answer any initial questions"
    ],
    outcome: "Clear understanding of your obligations"
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Site Inspection",
    duration: "Within 48 hours",
    description: "Our team visits your premises to assess the scope of works required.",
    details: [
      "Detailed walkthrough of your space",
      "Document current condition with photos",
      "Identify all required restoration works",
      "Note any potential challenges"
    ],
    outcome: "Comprehensive site assessment"
  },
  {
    number: "03",
    icon: FileText,
    title: "Detailed Quote",
    duration: "2-3 business days",
    description: "You receive a transparent, itemised quote with no hidden costs.",
    details: [
      "Line-by-line breakdown of all works",
      "Clear pricing with no surprises",
      "Realistic timeline estimates",
      "Options for different scope levels"
    ],
    outcome: "Full cost transparency"
  },
  {
    number: "04",
    icon: Calendar,
    title: "Scope Agreement",
    duration: "1-2 weeks before works",
    description: "We work with you and your landlord to finalise the exact scope.",
    details: [
      "Coordinate with landlord requirements",
      "Attend meetings on your behalf if needed",
      "Finalise scope documentation",
      "Confirm schedule and access arrangements"
    ],
    outcome: "Agreed scope with all parties"
  },
  {
    number: "05",
    icon: HardHat,
    title: "Works Execution",
    duration: "1-8 weeks depending on scope",
    description: "Our licensed team completes all works to specification.",
    details: [
      "Professional trades coordination",
      "Regular progress updates",
      "Strict safety compliance",
      "Quality workmanship throughout"
    ],
    outcome: "Professional completion of all works"
  },
  {
    number: "06",
    icon: Camera,
    title: "Documentation",
    duration: "Upon completion",
    description: "Comprehensive documentation package for your records.",
    details: [
      "Before and after photography",
      "Compliance certificates",
      "Test reports and sign-offs",
      "Waste disposal receipts"
    ],
    outcome: "Complete audit trail"
  },
  {
    number: "07",
    icon: KeyRound,
    title: "Handover",
    duration: "Lease expiry",
    description: "Smooth handover to your landlord with full support.",
    details: [
      "Coordinate final landlord inspection",
      "Address any defects promptly",
      "Facilitate key handover",
      "Support bond release process"
    ],
    outcome: "Successful lease completion"
  }
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
          content="Discover our proven 7-step make good process. From free consultation to successful handover, we make commercial lease restoration simple and stress-free." 
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
            Our Process
          </h1>
          <p className="text-xl text-primary mb-4">
            Simple, Transparent, Professional
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From your first call to final handover, we manage every step of your make good. 
            Our proven 7-step process ensures a smooth, stress-free experience.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
                      <span className="text-sm px-3 py-1 rounded-full bg-tertiary/20 text-tertiary font-medium">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h2>
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

      {/* Why Our Process Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Why Our Process Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">No Surprises</h3>
                <p className="text-muted-foreground">
                  Transparent pricing and clear communication at every step. 
                  You always know what to expect.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Single Point of Contact</h3>
                <p className="text-muted-foreground">
                  One dedicated project manager coordinates all trades, 
                  so you only deal with one person.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">On-Time Delivery</h3>
                <p className="text-muted-foreground">
                  We build buffer time into our schedules and have backup 
                  resources for unexpected issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Typical Project Timeline
          </h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px] bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-muted-foreground">6 months before</span>
                <span className="text-sm text-muted-foreground">Lease expiry</span>
              </div>
              
              <div className="relative h-4 bg-secondary rounded-full mb-6">
                <div className="absolute left-0 w-1/6 h-full bg-tertiary/50 rounded-l-full" />
                <div className="absolute left-[16.6%] w-1/6 h-full bg-tertiary/60" />
                <div className="absolute left-[33.3%] w-1/6 h-full bg-primary/40" />
                <div className="absolute left-[50%] w-1/4 h-full bg-primary/70" />
                <div className="absolute right-0 w-[8.3%] h-full bg-primary rounded-r-full" />
              </div>
              
              <div className="grid grid-cols-5 gap-2 text-center text-sm">
                <div>
                  <div className="font-medium text-foreground">Planning</div>
                  <div className="text-muted-foreground text-xs">Consultation & Quote</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Agreement</div>
                  <div className="text-muted-foreground text-xs">Scope & Schedule</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Preparation</div>
                  <div className="text-muted-foreground text-xs">Coordination</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Execution</div>
                  <div className="text-muted-foreground text-xs">Make Good Works</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Handover</div>
                  <div className="text-muted-foreground text-xs">Inspection & Keys</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-6">
            We recommend starting the process 3-6 months before your lease ends for the smoothest experience.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Make Good?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch for a free consultation. We will review your lease, 
            inspect your premises, and provide a detailed quote—all at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurProcess;
