import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Building2, Wrench, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import capabilitiesHero from "@/assets/commercial-property-restoration-capabilities-melbourne.jpg";

const Capabilities = () => {
  const demolitionServices = [
    "Pallet racking removal",
    "Electrical make-safe",
    "Mechanical re-balancing",
    "Waste management and disposal",
    "Interior alterations",
    "Complete demolitions",
    "Transport and relocation services"
  ];

  const makeGoodServices = [
    "Carpentry and joinery",
    "Concrete flooring restoration",
    "Professional painting",
    "Line marking",
    "Back-to-base works",
    "Patching and plastering",
    "Wall repairs and touch-ups",
    "Ceiling tile cleaning and replacement"
  ];

  const tradeServices = [
    "Electrical installations and repairs",
    "Mechanical systems",
    "Fire protection systems",
    "Plumbing services",
    "Flooring and concreting",
    "LED fluorescent light replacement"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Capabilities - Professional Make Good Services | MakeGOOD Melbourne</title>
        <meta name="description" content="Comprehensive make good capabilities including demolition services, property restoration, and trade services. Pallet racking removal, electrical make-safe, carpentry, concrete flooring, painting, and more across Melbourne." />
        <meta property="og:title" content="Our Capabilities - MakeGOOD Melbourne" />
        <meta property="og:description" content="Professional demolition, make good, and trade services for commercial and industrial properties in Melbourne." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/capabilities" />
      </Helmet>

      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={capabilitiesHero} 
              alt="Professional commercial and industrial make good services including demolition, restoration, and trade work in Melbourne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-5xl text-foreground mb-3">Our Capabilities</h1>
            <p className="text-2xl text-accent font-semibold mb-4">Make Good, BETTER.</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We do make goods all day, every day. Whether your project is retail, commercial, or industrial, our network of reliable trades will work tirelessly to ensure your make good experience is seamless.
            </p>
          </div>
        </section>

        {/* Demolition Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Hammer className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Demolition Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our expert team excels in various facets of the demolition process, ensuring safe and efficient removal of structures, equipment, and materials. Whether it's interior alterations or complete demolitions, our team is equipped to handle projects of all sizes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {demolitionServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Make Good Services */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Make Good Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We specialise in restoring commercial, industrial, and warehouse properties to their original condition. Our skilled team excels in diverse areas, meticulously addressing every aspect of property restoration to ensure spaces are returned to a lease-able condition.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {makeGoodServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trade Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl text-foreground">Trade Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive approach revitalises every facet of your property, ensuring a flawless canvas for its next chapter. Our dedicated team seamlessly integrates multiple trade specialties, tailored to enhance your space during the pivotal make good process.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {tradeServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl text-foreground mb-6">Quality & Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With attention to detail and a commitment to quality, we transform spaces, ensuring they meet the standards of end of lease obligations. Our network of reliable trades works tirelessly to deliver comprehensive solutions that save you time, effort, and stress.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;