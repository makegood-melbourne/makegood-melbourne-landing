import { blogPosts } from "@/data/blogPosts";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

export function generateSitemap(): string {
  const baseUrl = "https://makegood.melbourne";
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages with proper priority hierarchy
  const staticPages = [
    { url: '/', lastmod: currentDate, priority: '1.0', changefreq: 'weekly' },
    { url: '/capabilities', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
    { url: '/what-is-make-good', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
    { url: '/our-process', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
    { url: '/service-areas', lastmod: currentDate, priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
    { url: '/faq', lastmod: currentDate, priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', lastmod: currentDate, priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy-policy', lastmod: currentDate, priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-of-service', lastmod: currentDate, priority: '0.3', changefreq: 'yearly' },
  ];

  // Service pages - high priority for SEO
  const serviceUrls = services.map(service => ({
    url: `/services/${service.slug}`,
    lastmod: currentDate,
    priority: '0.9',
    changefreq: 'monthly'
  }));

  // Industry pages
  const industryUrls = industries.map(industry => ({
    url: `/industries/${industry.slug}`,
    lastmod: currentDate,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  // Location pages
  const locationUrls = locations.map(location => ({
    url: `/areas/${location.slug}`,
    lastmod: currentDate,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  // Blog posts - use actual post dates
  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: post.date,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticPages, ...serviceUrls, ...industryUrls, ...locationUrls, ...blogUrls];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  allUrls.forEach(({ url, lastmod, priority, changefreq }) => {
    sitemap += `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}
