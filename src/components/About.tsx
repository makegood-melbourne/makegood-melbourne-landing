import { 
  Building2, 
  Key, 
  FileCheck, 
  Shield, 
  CheckSquare, 
  Clock, 
  FileText, 
  DollarSign, 
  MapPin 
} from "lucide-react";
import officeWorkspace from "@/assets/modern-commercial-office-space-melbourne.jpg";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Full insurance coverage and all necessary licenses. Your project is in qualified, credentialed hands."
    },
    {
      icon: CheckSquare,
      title: "Lease Compliance Experts",
      description: "We understand complex lease requirements and deliver full compliance every time."
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Urgent works handled within 24-48 hours. We move fast when deadlines matter."
    },
    {
      icon: FileText,
      title: "Detailed Documentation",
      description: "Complete reports and documentation for bond protection and dispute resolution."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Competitive quotes with no hidden costs. Know exactly what you're paying upfront."
    },
    {
      icon: MapPin,
      title: "Melbourne Based",
      description: "Deep knowledge of local regulations, councils, and market expectations."
    }
  ];

  const whoWeServe = [
    {
      icon: Building2,
      title: "Real Estate Agents",
      description: "Ensure flawless property handovers that protect your reputation. We handle all make good obligations and compliance—so your clients stay satisfied and disputes are avoided."
    },
    {
      icon: Key,
      title: "Property Owners",
      description: "Maximize your property's value and minimize vacancy time. We transform damaged spaces into lease-ready conditions, reducing downtime and increasing rental potential."
    },
    {
      icon: FileCheck,
      title: "Commercial Tenants",
      description: "Protect your bond and meet lease obligations stress-free. Transparent pricing and detailed documentation—so you can move on with confidence."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Who We Are
          </h2>
          <p className="text-xl text-accent font-semibold mb-6">
            We do make goods all day, every day.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Navigating today's complex property market requires expertise and reliability. That's why we established MakeGOOD Melbourne—to redefine the standard of make good services across commercial, industrial and warehouse properties.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our network of licensed tradespeople delivers seamless, comprehensive solutions that meet lease obligations, protect bonds and ensure properties are ready for their next chapter.
          </p>
        </div>

        {/* Office Workspace Image */}
        <div className="mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img 
              src={officeWorkspace}
              alt="Modern commercial office space ready for end of lease make good services in Melbourne"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* How We Serve You */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            How We Serve You
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whoWeServe.map((client, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group"
              >
                <div className="mb-5">
                  <client.icon className="h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-semibold text-card-foreground mb-3">{client.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - 6 Card Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose MakeGOOD Melbourne
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With extensive experience across commercial and industrial properties, we deliver on every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <feature.icon className="h-10 w-10 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
