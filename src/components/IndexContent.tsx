import ServicesCarousel from "@/components/ServicesCarousel";
import ServiceOutcomes from "@/components/ServiceOutcomes";
import IndustriesGrid from "@/components/IndustriesGrid";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import Contact from "@/components/Contact";

const IndexContent = () => {
  return (
    <>
      <ServicesCarousel />
      <ServiceOutcomes />
      <IndustriesGrid />
      <ServiceAreasGrid />
      <Contact />
    </>
  );
};

export default IndexContent;
