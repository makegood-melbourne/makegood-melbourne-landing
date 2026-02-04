import { Helmet } from "@/lib/helmet";
import { ArrowLeft, Clock, Calendar, Phone } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import BreadcrumbsAuto from "@/components/BreadcrumbsAuto";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";
import { getBlogImage, calculateReadingTime, parseMarkdown } from "@/lib/blogUtils";

interface BlogPostProps {
  slug?: string;
}

const BlogPost = ({ slug: propSlug }: BlogPostProps) => {
  const params = useParams<{ slug: string }>();
  const slug = propSlug || params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
      <BreadcrumbsAuto />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-foreground mb-4">Post Not Found</h1>
            <a href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const readingTime = calculateReadingTime(post.content);
  const postUrl = `https://makegood.melbourne/blog/${post.slug}`;
  const imageUrl = getBlogImage(post.image);

  return (
    <div className="min-h-screen flex flex-col">
      {/* OG/Twitter meta tags are handled by Astro's BaseLayout for static generation */}
      {/* Only structured data (JSON-LD) needs client-side rendering */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": imageUrl,
            "datePublished": new Date(post.date).toISOString(),
            "dateModified": new Date(post.date).toISOString(),
            "author": {
              "@type": "Organization",
              "name": "MakeGOOD Melbourne"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MakeGOOD Melbourne",
              "logo": {
                "@type": "ImageObject",
                "url": "https://makegood.melbourne/logo.png"
              }
            },
            "description": post.excerpt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": postUrl
            }
          })}
        </script>
      </Helmet>
      
      <Navigation />
      <BreadcrumbsAuto />
      
      <main className="flex-1 pt-20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title.length > 40 ? post.title.slice(0, 37) + '...' : post.title }
            ]} 
          />

          <header className="mb-6 mt-4">
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readingTime} min read
              </span>
            </div>
          </header>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img 
              src={imageUrl}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover"
              width={1200}
              height={675}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-3xl text-foreground mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: parseMarkdown(item.replace('- ', '')) }} />
                    ))}
                  </ul>
                );
              } else if (paragraph.trim()) {
                return <p key={index} className="text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseMarkdown(paragraph) }} />;
              }
              return null;
            })}
          </div>



          <div className="mt-8 pt-8 border-t border-border">
            <a href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Button>
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
