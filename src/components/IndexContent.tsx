import IndustriesGrid from "@/components/IndustriesGrid";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";

type Tone = "dark" | "light";

const IndexContent = ({ industriesTone = "dark", areasTone = "light" }: { industriesTone?: Tone; areasTone?: Tone }) => {
  return (
    <>
      <IndustriesGrid tone={industriesTone} />
      <ServiceAreasGrid tone={areasTone} />
    </>
  );
};

export default IndexContent;
