import { Helmet } from "@/lib/helmet";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { calculateReadingTime, parseMarkdown } from "@/lib/blogUtils";

interface BlogContentProps {
  slug: string;
}

const BlogContent = ({ slug }: BlogContentProps) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
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
    );
  }

  const postUrl = `https://makegood.melbourne/blog/${post.slug}`;

  // Structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
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
  };

  return (
    <main className="flex-1">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <article className="container mx-auto px-4 pb-12 max-w-4xl">
        {/* Content - hero image is handled by Astro */}
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

        <Card className="mt-12 bg-accent/10 border-accent/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Need Expert Make Good Services?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're preparing for end-of-lease obligations or need specialist remediation services, 
                our experienced team is ready to help. Contact us today for a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a href="/#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get a Free Quote
                  </Button>
                </a>
                <a href="mailto:enquiries@makegood.melbourne">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

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
  );
};

export default BlogContent;
