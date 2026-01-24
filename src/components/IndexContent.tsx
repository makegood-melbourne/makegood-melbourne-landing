import { Helmet } from "@/lib/helmet";
import ServicesCarousel from "@/components/ServicesCarousel";

import ProblemSolution from "@/components/ProblemSolution";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const IndexContent = () => {
  return (
    <>
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
      
      <ServicesCarousel />

      <ProblemSolution />
      <ServiceAreasGrid />
      <FAQ />
      <Contact />
    </>
  );
};

export default IndexContent;
