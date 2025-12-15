import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { getBlogImage, calculateReadingTime, parseMarkdown } from "@/lib/blogUtils";
import { getRedirectSlug } from "@/lib/redirects";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Check if this is an old URL that needs redirecting
  const redirectSlug = slug ? getRedirectSlug(slug) : null;
  if (redirectSlug) {
    return <Navigate to={`/blog/${redirectSlug}`} replace />;
  }
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
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
      <Helmet>
        <title>{post.title.length > 50 ? post.title.slice(0, 47) + '...' : post.title} | MakeGOOD</title>
        <meta name="description" content={`${post.excerpt.slice(0, 155)}...`} />
        <meta property="og:title" content={`${post.title} | MakeGOOD Melbourne`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | MakeGOOD Melbourne`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href={postUrl} />
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
      
      <main className="flex-1 pt-20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </nav>

          <header className="mb-6">
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
              alt={post.title}
              className="w-full h-full object-cover"
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

          <Card className="mt-12 bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Need Expert Make Good Services?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you're preparing for end-of-lease obligations or need specialist remediation services, 
                  our experienced team is ready to help. Contact us today for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link to="/#contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <a href="tel:+61383769663">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us Today
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 pt-8 border-t border-border">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
