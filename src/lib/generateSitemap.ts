import { blogPosts } from "@/data/blogPosts";

export function generateSitemap(): string {
  const baseUrl = "https://makegood.melbourne";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', lastmod: currentDate, priority: '1.0', changefreq: 'weekly' },
    { url: '/capabilities', lastmod: currentDate, priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
  ];

  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: post.date,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticPages, ...blogUrls];

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
