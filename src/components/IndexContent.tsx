import IndustriesGrid from "@/components/IndustriesGrid";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import { ImageVariantsProvider } from "@/components/ResponsiveImg";
import type { ImageVariants } from "@/lib/imageVariantTypes";

type Tone = "dark" | "light";

const IndexContent = ({
  industriesTone = "dark",
  areasTone = "light",
  imageVariants,
}: {
  industriesTone?: Tone;
  areasTone?: Tone;
  imageVariants?: ImageVariants;
}) => {
  return (
    <ImageVariantsProvider value={imageVariants}>
      <IndustriesGrid tone={industriesTone} />
      <ServiceAreasGrid tone={areasTone} />
    </ImageVariantsProvider>
  );
};

export default IndexContent;
