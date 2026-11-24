import { createContext, useContext, type ImgHTMLAttributes, type ReactNode } from "react";
import type { ImageVariants } from "@/lib/imageVariantTypes";

// Resized WebP versions built at build time by buildImageVariants() (src/lib/imageVariants.ts)
// and passed down from the page. Works the same on the server and in the browser, so
// hydration matches.
const ImageVariantsContext = createContext<ImageVariants>({});

export const ImageVariantsProvider = ({
  value,
  children,
}: {
  value?: ImageVariants;
  children: ReactNode;
}) => {
  const parent = useContext(ImageVariantsContext);
  const merged = value ? { ...parent, ...value } : parent;
  return <ImageVariantsContext.Provider value={merged}>{children}</ImageVariantsContext.Provider>;
};

type ImageLike = { src: string; width?: number; height?: number } | string | undefined | null;

/** The resized WebP versions of an image, if the page supplied them (for <picture> sources). */
export const useImageVariant = (image: unknown) => {
  const variants = useContext(ImageVariantsContext);
  if (!image) return undefined;
  const src = typeof image === "string" ? image : (image as { src?: string }).src;
  return src ? variants[src] : undefined;
};

type ResponsiveImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  image: ImageLike;
  alt: string;
  /** How wide the image shows on screen, e.g. "(max-width: 768px) 100vw, 400px". */
  sizes?: string;
  /** Set true only for the main image at the top of the page. */
  priority?: boolean;
};

/**
 * Renders an imported image using its resized WebP versions when the page supplied them,
 * with width and height always set. Lazy by default; pass priority for the top image.
 */
export const ResponsiveImg = ({ image, alt, sizes, priority = false, width, height, ...rest }: ResponsiveImgProps) => {
  const variants = useContext(ImageVariantsContext);
  if (!image) return null;

  const original = typeof image === "string" ? { src: image } : image;
  const variant = variants[original.src];
  const naturalWidth = variant?.width ?? original.width;
  const naturalHeight = variant?.height ?? original.height;

  return (
    <img
      src={variant?.src ?? original.src}
      srcSet={variant?.srcSet}
      sizes={variant ? sizes : undefined}
      alt={alt}
      width={width ?? naturalWidth}
      height={height ?? naturalHeight}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? undefined : "async"}
      {...(priority ? ({ fetchpriority: "high" } as Record<string, string>) : {})}
      {...rest}
    />
  );
};

export default ResponsiveImg;
