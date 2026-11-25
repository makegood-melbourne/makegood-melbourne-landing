import ResponsiveImg, { ImageVariantsProvider } from "@/components/ResponsiveImg";
import type { ImageVariants } from "@/lib/imageVariantTypes";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { getBlogImageMeta, sortBlogPostsByDate, calculateReadingTime, formatPostDate } from "@/lib/blogUtils";

export const POSTS_PER_PAGE = 12;

export const getBlogPageCount = () => Math.ceil(blogPosts.length / POSTS_PER_PAGE);

export const getBlogPagePosts = (page: number) =>
  sortBlogPostsByDate(blogPosts).slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

/** The card images shown on one blog list page, for buildImageVariants(). */
export const getBlogPageImages = (page: number) => getBlogPagePosts(page).map((post) => getBlogImageMeta(post.image));

export const blogPageHref = (page: number) => (page <= 1 ? "/blog/" : `/blog/page/${page}/`);

// Server rendered pagination: /blog/ is page 1, /blog/page/2/ onwards hold the rest.
// Every page links to every other page with plain links, so crawlers reach all posts.
const Blog = ({ imageVariants, ...props }: { page?: number; imageVariants?: ImageVariants }) => (
  <ImageVariantsProvider value={imageVariants}>
    <BlogInner {...props} />
  </ImageVariantsProvider>
);

const BlogInner = ({ page = 1 }: { page?: number }) => {
  const totalPages = getBlogPageCount();
  const pagePosts = getBlogPagePosts(page);
  
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 pt-4 pb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">MakeGOOD Melbourne Blog{page > 1 ? `, page ${page}` : ""}</h1>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              What we've learned doing make goods, strip outs and end of lease works in Melbourne
            </p>
          </div>

          {/* Intro Section for SEO (page 1 only) */}
          {page === 1 && (
          <div className="max-w-4xl mx-auto mb-16 prose prose-lg">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This is where we write down what we learn on site: what leases ask for, what make goods cost and what trips tenants up at handover.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For property managers, agents, strata managers and tenants preparing for lease expiry. The articles cover everything from asbestos management and concrete cancer remediation to electrical make-safe procedures and waste management compliance. Make goods can be complicated and expensive, so the guides are detailed.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our blog covers specialised topics including building defect remediation, facade cladding safety, fire damage restoration, waterproofing solutions and sustainable practices in commercial property maintenance. Each one is written by people who do make goods every day, and checked against current Victorian rules.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The latest posts are below.
            </p>
          </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagePosts.map((post, index) => (
              <Card key={post.id} className="border-border hover:shadow-lg transition-shadow overflow-hidden group">
                <a href={`/blog/${post.slug}/`} className="block aspect-video overflow-hidden">
                  <ResponsiveImg
                    image={getBlogImageMeta(post.image)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority={index === 0}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span>{formatPostDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {calculateReadingTime(post.content)} min read
                    </span>
                  </div>
                  <h2 className="text-2xl text-card-foreground mb-1">{post.title}</h2>
                  {post.subtitle && (
                    <p className="text-base text-accent font-medium">{post.subtitle}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <nav aria-label="Blog pages" className="flex flex-wrap items-center justify-center gap-3 mt-12">
              {page > 1 && (
                <a href={blogPageHref(page - 1)} rel="prev" className="px-5 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors rounded-md font-medium">
                  Newer posts
                </a>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                n === page ? (
                  <span key={n} aria-current="page" className="px-4 py-3 rounded-md bg-accent text-background font-medium">{n}</span>
                ) : (
                  <a key={n} href={blogPageHref(n)} className="px-4 py-3 rounded-md border border-border text-foreground hover:border-accent hover:text-accent transition-colors font-medium">{n}</a>
                )
              ))}
              {page < totalPages && (
                <a href={blogPageHref(page + 1)} rel="next" className="px-5 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors rounded-md font-medium">
                  Older posts
                </a>
              )}
            </nav>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
