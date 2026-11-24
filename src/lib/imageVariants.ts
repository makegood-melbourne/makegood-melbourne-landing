// Server only (build time). Runs imported images through Astro's image pipeline so that
// React components, which also run in the browser and can't call astro:assets, still get
// resized WebP files with a srcset.
//
// Usage in a page's frontmatter:
//   const imageVariants = await buildImageVariants(service, relatedServices);
//   <ServiceContent slug={slug} imageVariants={imageVariants} client:idle />
// and in React, render images with <ResponsiveImg> (src/components/ResponsiveImg.tsx).
//
// Any image a component renders that wasn't passed in here falls back to the original
// upload, which the image build check (scripts/check-images.mjs) will flag if it's too big.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { ImageVariant, ImageVariants } from './imageVariantTypes';

// Widths cover cards (about 400px wide on screen) up to large images on high density
// screens. Quality 60 keeps large photos under 200KB and card sizes under 100KB.
const WIDTHS = [400, 800, 1200];
const FALLBACK_WIDTH = 800;
export const IMAGE_QUALITY = 60;

const isImageMetadata = (value: unknown): value is ImageMetadata =>
  !!value &&
  typeof value === 'object' &&
  typeof (value as ImageMetadata).src === 'string' &&
  typeof (value as ImageMetadata).width === 'number' &&
  typeof (value as ImageMetadata).height === 'number' &&
  typeof (value as ImageMetadata).format === 'string';

/** Finds every imported image (ImageMetadata) anywhere inside the given values. */
export function collectImages(roots: unknown[]): ImageMetadata[] {
  const found = new Map<string, ImageMetadata>();
  const seen = new WeakSet<object>();
  const walk = (value: unknown) => {
    if (!value || typeof value !== 'object') return;
    if (seen.has(value as object)) return;
    seen.add(value as object);
    if (isImageMetadata(value)) {
      if (value.format !== 'svg' && value.format !== 'gif') found.set(value.src, value);
      return;
    }
    for (const child of Array.isArray(value) ? value : Object.values(value)) walk(child);
  };
  roots.forEach(walk);
  return [...found.values()];
}

export async function getImageVariant(image: ImageMetadata): Promise<ImageVariant> {
  let widths = WIDTHS.filter((w) => w <= image.width);
  if (widths.length === 0) widths = [image.width];
  const fallback = Math.min(FALLBACK_WIDTH, image.width);
  const result = await getImage({
    src: image,
    width: fallback,
    widths,
    format: 'webp',
    quality: IMAGE_QUALITY,
  });
  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    width: fallback,
    height: Math.round((image.height * fallback) / image.width),
  };
}

/** Builds a lookup of resized WebP versions for every image found in the given values. */
export async function buildImageVariants(...roots: unknown[]): Promise<ImageVariants> {
  const variants: ImageVariants = {};
  for (const image of collectImages(roots)) {
    variants[image.src] = await getImageVariant(image);
  }
  return variants;
}
