import { Helmet } from "@/lib/helmet";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import SimpleProcess from "@/components/SimpleProcess";
import About from "@/components/About";
import ProblemSolution from "@/components/ProblemSolution";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Make Good Melbourne | End of Lease Restoration Experts</title>
        <meta name="description" content="Melbourne's trusted make good specialists. Expert end of lease restoration for offices, warehouses and industrial properties. Free quotes." />
        <meta property="og:title" content="Make Good Melbourne | Commercial Property Restoration Specialists" />
        <meta property="og:description" content="Melbourne's trusted make good specialists. Expert end of lease restoration for commercial and industrial properties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://makegood.melbourne/" />
        <link rel="canonical" href="https://makegood.melbourne/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Make Good Melbourne",
            "description": "Professional make good and end of lease restoration services for commercial and industrial properties in Melbourne, Victoria.",
            "url": "https://makegood.melbourne",
            "email": "enquiries@makegood.melbourne",
            "areaServed": {
              "@type": "State",
              "name": "Victoria"
            },
            "serviceType": ["Make Good Services", "End of Lease Restoration", "Office Strip Outs", "Warehouse Restoration", "Building Remediation"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            }
          })}
        </script>
      </Helmet>
      
      <Navigation />
      <Hero />
      
      {/* SEO Content Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-xl max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Melbourne's Leading <span className="text-primary">Make Good Specialists</span>
            </h2>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8 not-prose">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tertiary mb-1">500+</div>
                <div className="text-sm md:text-base text-white">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tertiary mb-1">12+</div>
                <div className="text-sm md:text-base text-white">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tertiary mb-1">100%</div>
                <div className="text-sm md:text-base text-white">Licensed Trades</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-xl text-muted-foreground">
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
      
      <div className="-mt-6">
        <ServicesCarousel />
      </div>
      <SimpleProcess />
      <ProblemSolution />
      <About />
      <ServiceAreasGrid />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTAs />
    </main>
  );
};

export default Index;
