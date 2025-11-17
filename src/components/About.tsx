import { CheckCircle2 } from "lucide-react";
import officeWorkspace from "@/assets/office-workspace.jpg";

const About = () => {
  const features = [
    "Licensed and insured professionals",
    "Comprehensive lease compliance expertise",
    "Quick response times for urgent works",
    "Detailed documentation and reporting",
    "Competitive pricing with no hidden costs",
    "Melbourne-based with extensive local knowledge"
  ];

  const whoWeServe = [
    {
      title: "Real Estate Agents",
      description: "We assist both landlords and tenants in meeting lease obligations, ensuring smooth transitions and satisfied parties. Your reputation depends on seamless property handovers—we deliver that."
    },
    {
      title: "Property Owners",
      description: "Getting your property ready for the next tenant? We refurbish, restore, and rectify any damage from the previous tenancy, enhancing marketability and reducing vacancy time."
    },
    {
      title: "Commercial Tenants",
      description: "Meeting your make good obligations doesn't have to be stressful. We handle everything from minor repairs to complete restoration, ensuring you meet lease terms and protect your bond."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Who We Are
          </h2>
          <p className="text-xl text-accent font-semibold mb-6">
            We do make goods all day, every day.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Navigating today's complex property market requires expertise and reliability. That's why we established MakeGOOD Melbourne—to redefine the standard of make good services across commercial, industrial, and warehouse properties.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our network of licensed tradespeople delivers seamless, comprehensive solutions that meet lease obligations, protect bonds, and ensure properties are ready for their next chapter.
          </p>
        </div>

        {/* Office Workspace Image */}
        <div className="mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img 
              src={officeWorkspace}
              alt="Professional commercial office space make good and restoration services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* How We Serve You */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            How We Serve You
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whoWeServe.map((client, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold text-card-foreground mb-3">{client.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Choose MakeGOOD Melbourne
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With extensive experience across commercial and industrial properties, we understand the critical importance of meeting lease obligations and maintaining property standards.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality, attention to detail, and comprehensive service approach ensures your property meets end-of-lease standards every time.
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
            <h4 className="text-2xl font-bold text-card-foreground mb-6">Our Expertise</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-card-foreground mb-2">Property Types</h5>
                <p className="text-muted-foreground">Offices, retail, warehouses, and industrial facilities</p>
              </div>
              <div>
                <h5 className="font-semibold text-card-foreground mb-2">Structural Solutions</h5>
                <p className="text-muted-foreground">Concrete repairs, waterproofing, slab restoration</p>
              </div>
              <div>
                <h5 className="font-semibold text-card-foreground mb-2">Emergency Response</h5>
                <p className="text-muted-foreground">Make safe works, hazard mitigation, site security</p>
              </div>
              <div>
                <h5 className="font-semibold text-card-foreground mb-2">Full Compliance</h5>
                <p className="text-muted-foreground">Lease obligations, handover documentation, condition reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
