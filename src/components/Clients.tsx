import { Building, Users, User } from "lucide-react";

const clientTypes = [
  {
    icon: Building,
    title: "Real Estate Agents",
    description: "Long-term partnerships delivering consistent quality for end of lease make good works.",
    highlight: "Primary Partner"
  },
  {
    icon: Users,
    title: "Strata Managers",
    description: "Growing relationships providing comprehensive building maintenance and remediation.",
    highlight: "Expanding Sector"
  },
  {
    icon: User,
    title: "Tenants",
    description: "Direct project support ensuring lease obligations are met with minimal hassle.",
    highlight: "Project Based"
  }
];

export const Clients = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Melbourne's property professionals
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Building lasting relationships through quality workmanship and reliable service
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clientTypes.map((client) => (
            <div key={client.title} className="relative group">
              <div className="h-full p-8 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="mb-4 inline-flex">
                  <client.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div className="inline-block mb-4 px-3 py-1 text-xs font-medium border border-primary/30 text-primary">
                  {client.highlight}
                </div>
                <h3 className="text-2xl font-bold mb-4">{client.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
