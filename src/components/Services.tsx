import { Building2, Shield, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Make Good",
    description: "End of lease restoration returning commercial and industrial spaces to their original condition per lease obligations."
  },
  {
    icon: Shield,
    title: "Make Safe",
    description: "Immediate safety works ensuring properties meet compliance standards and protect occupants and assets."
  },
  {
    icon: Wrench,
    title: "Remediation & Rectification",
    description: "Expert solutions for waterproofing issues, concrete cancer, and structural slab repairs."
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expert restoration services
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Comprehensive make good solutions for commercial and industrial properties across Melbourne
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
