import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Licensed and insured professionals",
    "Comprehensive lease compliance expertise",
    "Quick response times for urgent works",
    "Detailed documentation and reporting",
    "Competitive pricing with no hidden costs",
    "Melbourne-based with extensive local knowledge"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose Make Good Melbourne
            </h2>
            <p className="text-xl text-accent font-semibold mb-6">
              Make Good, BETTER.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With extensive experience in commercial and industrial property services, we understand the critical importance of meeting lease obligations and maintaining property standards.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team delivers professional, reliable service whether you need end of lease make good works, emergency make safe solutions, or complex remediation projects.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Our Expertise Includes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Commercial Spaces</h4>
                <p className="text-muted-foreground">Offices, retail premises, warehouses, and industrial facilities</p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Structural Issues</h4>
                <p className="text-muted-foreground">Concrete cancer, slab repairs, waterproofing failures</p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Safety Works</h4>
                <p className="text-muted-foreground">Emergency make safe, hazard mitigation, site security</p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Compliance</h4>
                <p className="text-muted-foreground">Full lease compliance, handover documentation, condition reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
