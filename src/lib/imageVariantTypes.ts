// Shared by the build-time helper (imageVariants.ts) and React components.
export type ImageVariant = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

/** Keyed by the original image's src (ImageMetadata.src). */
export type ImageVariants = Record<string, ImageVariant>;
