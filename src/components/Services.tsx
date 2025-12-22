import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "End of Lease Make Good",
      description: "Comprehensive make good services for commercial and industrial spaces. We return your property to its original condition, ensuring full compliance with lease obligations and avoiding costly disputes.",
      link: null
    },
    {
      icon: Shield,
      title: "Make Safe Works",
      description: "Urgent make safe solutions to protect your property and occupants. We respond quickly to address safety hazards, secure sites and implement temporary or permanent protective measures.",
      link: null
    },
    {
      icon: Wrench,
      title: "Remediation & Rectification",
      description: "Expert remediation services addressing waterproofing failures, concrete cancer, and slab issues. Our qualified team delivers lasting solutions to structural and building envelope problems.",
      link: "/services/structural-remediation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional solutions for all your commercial and industrial property needs in Melbourne
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardContent = (
              <Card className={`border-border hover:shadow-lg transition-shadow h-full ${service.link ? "hover:border-primary" : ""}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className={`text-xl text-card-foreground ${service.link ? "group-hover:text-primary transition-colors" : ""}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );

            return service.link ? (
              <a key={index} href={service.link} className="block group">
                {cardContent}
              </a>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
