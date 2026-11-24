// Server only (build time). Helpers for working out which images a page's React
// components will render, so buildImageVariants() can prepare them.
import { services } from '@/data/services';

/**
 * Hero images of every service whose slug appears as a string anywhere in the given
 * values (related services, service card grids, linked spotlight cards, industry
 * service lists). Only the hero image is included, not the whole service.
 */
export function referencedServiceHeroImages(...roots: unknown[]): unknown[] {
  const strings = new Set<string>();
  const seen = new WeakSet<object>();
  const walk = (value: unknown) => {
    if (typeof value === 'string') {
      strings.add(value);
      return;
    }
    if (!value || typeof value !== 'object' || seen.has(value as object)) return;
    seen.add(value as object);
    for (const child of Array.isArray(value) ? value : Object.values(value)) walk(child);
  };
  roots.forEach(walk);
  return services
    .filter((service) => strings.has(service.slug))
    .map((service) => service.heroImage);
}
