import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { getBlogImage, sortBlogPostsByDate, calculateReadingTime } from "@/lib/blogUtils";

const Blog = () => {
  const sortedPosts = sortBlogPostsByDate(blogPosts);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog - Expert Make Good & Property Restoration Insights | MakeGOOD Melbourne</title>
        <meta name="description" content="Expert insights on make good services, end of lease works, and property restoration in Melbourne. Learn from industry professionals about commercial property maintenance." />
        <meta property="og:title" content="Blog - Expert Make Good Insights | MakeGOOD Melbourne" />
        <meta property="og:description" content="Expert insights on make good services, end of lease works, and property restoration in Melbourne." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/blog" />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights on make good services, end of lease works, and property restoration in Melbourne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Card key={post.id} className="border-border hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={getBlogImage(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {calculateReadingTime(post.content)} min read
                    </span>
                  </div>
                  <h2 className="text-2xl text-card-foreground mb-3">{post.title}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
