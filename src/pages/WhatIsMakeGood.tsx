import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, Building2, Users, AlertTriangle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Images for visual enhancement
import heroImage from "@/assets/industries/commercial-make-good-open-floor-industrial-windows-melbourne.jpeg";
import officeImage from "@/assets/industries/commercial-office-make-good-polished-concrete-melbourne.jpeg";
import warehouseImage from "@/assets/services/empty-warehouse-after-makegood-melbourne.png";
import ctaImage from "@/assets/services/manufacturing-facility-before-makegood-melbourne.jpeg";

const WhatIsMakeGood = () => {
  // Schema markup for educational content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is a Make Good? Complete Guide for Melbourne Tenants",
    "description": "Learn everything about make good clauses in commercial leases. Understand your obligations, typical costs, and how to prepare for lease end in Melbourne.",
    "author": {
      "@type": "Organization",
      "name": "Make Good Melbourne"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Make Good Melbourne"
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>What is a Make Good? | Commercial Lease Guide | Melbourne</title>
        <meta 
          name="description" 
          content="Understand make good clauses in commercial leases. Learn what's required, typical costs, and how to prepare for your lease end in Melbourne." 
        />
        <meta name="keywords" content="make good clause, commercial lease, make good Melbourne, lease obligations, tenant responsibilities" />
        <link rel="canonical" href="https://makegood.melbourne/what-is-make-good" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Empty commercial office space ready for make good restoration in Melbourne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            What is a Make Good?
          </h1>
          <p className="text-xl text-primary mb-4">
            Your Complete Guide to Commercial Lease Obligations
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding your make good requirements is essential for every commercial tenant. 
            This guide explains everything you need to know about make good clauses, costs, and processes.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-primary pl-6 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Make Good Definition
            </h2>
            <p className="text-lg text-muted-foreground">
              A <strong className="text-foreground">make good</strong> (also known as "reinstatement" or "restoration") 
              refers to the process of returning a commercial property to its original condition when your lease ends. 
              This obligation is typically outlined in your commercial lease agreement under the "make good clause" 
              or "reinstatement provisions."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Office Card with background image */}
            <Card className="relative overflow-hidden border-l-4 border-primary min-h-[200px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src={officeImage} 
                  alt="Commercial office space after make good works with polished concrete floors Melbourne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/85" />
              </div>
              <CardContent className="pt-6 relative z-10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  For Offices
                </h3>
                <p className="text-muted-foreground">
                  Removing partitions, restoring walls and ceilings, replacing carpet tiles, 
                  and returning the space to base building condition.
                </p>
              </CardContent>
            </Card>
            
            {/* Warehouse Card with background image */}
            <Card className="relative overflow-hidden border-l-4 border-primary min-h-[200px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src={warehouseImage} 
                  alt="Empty warehouse after make good completion ready for handover Melbourne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/85" />
              </div>
              <CardContent className="pt-6 relative z-10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  For Warehouses
                </h3>
                <p className="text-muted-foreground">
                  Pallet racking removal, floor repairs and line marking restoration, 
                  office strip-outs, and industrial cleaning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            What Does a Make Good Typically Include?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Demolition & Removal</h3>
              <ul className="space-y-3">
                {[
                  "Removal of tenant-installed partitions and walls",
                  "Stripping out office fitouts and workstations",
                  "Removal of signage and branding",
                  "Pallet racking dismantling (warehouses)",
                  "Fixture and fitting removal"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Restoration Works</h3>
              <ul className="space-y-3">
                {[
                  "Patching holes and repairing walls",
                  "Repainting to uniform finish",
                  "Ceiling tile replacement",
                  "Floor restoration or replacement",
                  "Base building services restoration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Electrical & Services</h3>
              <ul className="space-y-3">
                {[
                  "Make safe and isolation of circuits",
                  "Removal of data and communications cabling",
                  "Testing and certification of systems",
                  "Mechanical services termination"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Final Works</h3>
              <ul className="space-y-3">
                {[
                  "Detailed cleaning to handover standard",
                  "Documentation and photography",
                  "Compliance certificates",
                  "Landlord inspection coordination"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Lease Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Understanding Your Make Good Clause
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Review Your Lease Early</h3>
                <p className="text-muted-foreground">
                  Your make good obligations are defined in your lease agreement. Review this document 
                  when you first sign—and again 6 months before lease end. Look for sections titled 
                  "Make Good," "Reinstatement," "Restoration," or "Yield Up."
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tenant vs Landlord Responsibilities</h3>
                <p className="text-muted-foreground">
                  In most commercial leases, the tenant is responsible for all make good costs. 
                  However, terms can often be negotiated—especially if the landlord plans to 
                  renovate or if certain fitout elements add value to the property.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Common Pitfalls to Avoid</h3>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• <strong className="text-foreground">Waiting too long</strong> – Start planning 3-6 months before lease end</li>
                  <li>• <strong className="text-foreground">Not documenting condition</strong> – Take photos at lease start and end</li>
                  <li>• <strong className="text-foreground">Assuming scope</strong> – Always confirm requirements with your landlord in writing</li>
                  <li>• <strong className="text-foreground">DIY approach</strong> – Professional contractors understand landlord expectations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Make Good Costs in Melbourne
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Standard Make Good</h3>
                <p className="text-3xl font-bold text-primary mb-2">$100 - $200</p>
                <p className="text-muted-foreground mb-4">per square metre</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• General cleaning</li>
                  <li>• Minor repairs and patching</li>
                  <li>• Touch-up painting</li>
                  <li>• Carpet cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Full Reinstatement</h3>
                <p className="text-3xl font-bold text-primary mb-2">$250 - $350+</p>
                <p className="text-muted-foreground mb-4">per square metre</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete strip-out</li>
                  <li>• Wall and ceiling restoration</li>
                  <li>• Floor replacement</li>
                  <li>• Services reinstatement</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground">
            Actual costs depend on your specific lease terms, the condition of the premises, 
            and the extent of modifications made during your tenancy. 
            <Link to="/contact" className="text-primary hover:underline ml-1">
              Contact us for a free, no-obligation quote.
            </Link>
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Recommended Make Good Timeline
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            For a detailed breakdown of each step, see{" "}
            <Link to="/our-process" className="text-primary hover:underline">
              our full process guide
            </Link>.
          </p>
          
          <div className="space-y-6">
            {[
              {
                time: "6 Months Before Lease End",
                title: "Start Planning",
                description: "Review your lease, understand your obligations, and conduct a preliminary site inspection. Get initial quotes from make good providers."
              },
              {
                time: "3-4 Months Before",
                title: "Finalise Scope",
                description: "Agree on the scope of works with your landlord. Appoint your make good contractor and schedule works around your move-out date."
              },
              {
                time: "4-8 Weeks Before",
                title: "Complete Works",
                description: "Execute all make good works according to the agreed scope. Allow time for any defect rectification."
              },
              {
                time: "1-2 Weeks Before",
                title: "Final Inspection",
                description: "Conduct internal inspection, address any remaining items, and prepare handover documentation."
              },
              {
                time: "Lease Expiry",
                title: "Handover",
                description: "Final landlord inspection, key handover, and bond release."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{step.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make Good vs Make Safe */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Make Good vs Make Safe: What's the Difference?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Make Good</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• End-of-lease restoration works</li>
                  <li>• Planned process with timeline</li>
                  <li>• Returns space to original condition</li>
                  <li>• Required by lease agreement</li>
                  <li>• Typically 2-8 weeks to complete</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-tertiary">Make Safe</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Emergency or urgent works</li>
                  <li>• Rapid response required</li>
                  <li>• Eliminates immediate hazards</li>
                  <li>• Required after damage/incidents</li>
                  <li>• Completed as quickly as possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaImage} 
            alt="Manufacturing facility requiring make good services in Melbourne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Help With Your Make Good?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide free, no-obligation quotes and can guide you through the entire process. 
            From lease review to final handover, we make your make good simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/our-process">
                See Our Process
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhatIsMakeGood;
