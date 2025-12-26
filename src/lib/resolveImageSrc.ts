export type ImageLike = string | { src: string } | null | undefined;

/**
 * Astro can emit image imports as an object (ImageMetadata) with a `.src` field.
 * React <img> needs a string URL, otherwise you get requests to /[object%20Object].
 */
export const resolveImageSrc = (image: unknown): string => {
  if (!image) return "";
  if (typeof image === "string") return image;

  if (typeof image === "object" && image !== null && "src" in image) {
    const src = (image as { src?: unknown }).src;
    if (typeof src === "string") return src;
  }

  return "";
};
