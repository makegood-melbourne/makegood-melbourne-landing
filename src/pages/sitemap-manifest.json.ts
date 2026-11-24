// Build time manifest for scripts/build-sitemap.mjs. Lists every page that must be
// in the sitemap (published blog posts, services, category pages and areas) plus
// blog lastmod dates. The script deletes this file from dist after reading it.
import type { APIRoute } from 'astro';
import { blogPosts } from '@/data/blogPosts';
import { getPublishedServices } from '@/data/services';
import { locations } from '@/data/locations';
import { toIsoDate } from '@/lib/blogUtils';
import { blogTopicAndService } from '@/data/internalLinks';

const categoryPages = [
  'make-good-solutions', 'strip-out-solutions', 'remediation-solutions',
  'roofing-solutions', 'handover-solutions', 'racking-solutions',
];

export const GET: APIRoute = () => {
  const blogLastmod: Record<string, string> = {};
  for (const post of blogPosts) {
    blogLastmod[`/blog/${post.slug}/`] = toIsoDate(post.updated || post.date);
  }

  const required = [
    ...Object.keys(blogLastmod),
    ...getPublishedServices().map((service) => `/services/${service.slug}/`),
    ...categoryPages.map((slug) => `/services/${slug}/`),
    ...locations.map((location) => `/areas/${location.slug}/`),
  ];

  // Posts without a topic, service page and industry would miss out on related links.
  const unmappedPosts = blogPosts
    .filter((post) => !blogTopicAndService[post.slug] || !(blogTopicAndService[post.slug].industries?.length > 0))
    .map((post) => post.slug);

  return new Response(JSON.stringify({ required, blogLastmod, unmappedPosts }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
