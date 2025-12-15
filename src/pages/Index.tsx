import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>MakeGOOD Melbourne - Professional Make Good & End of Lease Services</title>
        <meta name="description" content="Expert make good services in Melbourne. Professional end of lease works, property restoration, and commercial property maintenance. Get your bond back guaranteed." />
        <meta property="og:title" content="MakeGOOD Melbourne - Professional Make Good Services" />
        <meta property="og:description" content="Expert make good services in Melbourne. Professional end of lease works and property restoration." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/" />
      </Helmet>
      
      <Navigation />
      <Hero />
      
      {/* SEO Content Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Melbourne's Leading Make Good Specialists
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground">
              <div>
                <p className="mb-4 leading-relaxed">
                  Make Good Melbourne is your trusted partner for commercial and industrial end of lease restoration services across Melbourne and Victoria. We specialise in comprehensive make good works, make safe solutions and building remediation services for offices, warehouses, retail spaces and industrial facilities.
                </p>
                <p className="mb-4 leading-relaxed">
                  Our experienced team understands the complexities of lease obligations and works closely with real estate agents, property managers, strata managers, landlords and tenants to deliver seamless property handovers. Whether you're preparing for lease expiry, managing emergency repairs or addressing building defects, we provide professional solutions that meet all compliance requirements.
                </p>
              </div>
              <div>
                <p className="mb-4 leading-relaxed">
                  From pallet racking removal and electrical make-safe works to concrete cancer remediation, waterproofing repairs and complete property restoration, our network of licensed tradespeople handles projects of all sizes. We deliver quality workmanship, competitive pricing, detailed documentation and guaranteed results that protect your bond and ensure smooth lease transitions.
                </p>
                <p className="leading-relaxed">
                  Serving Melbourne's commercial property sector with expertise in demolition services, carpentry, painting, flooring, ceiling repairs, waste management and full building compliance. Contact us today for a free consultation and discover why property professionals throughout Melbourne trust Make Good Melbourne for their end of lease restoration needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
