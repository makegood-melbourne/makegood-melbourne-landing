import { Helmet } from "@/lib/helmet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";
import { getBlogImage, sortBlogPostsByDate, calculateReadingTime } from "@/lib/blogUtils";

const Blog = () => {
  const sortedPosts = sortBlogPostsByDate(blogPosts);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Make Good Blog | Property Restoration Insights Melbourne</title>
        <meta name="description" content="Industry insights on commercial make good services, end of lease obligations, warehouse restoration and building remediation. Practical guides from Melbourne's property restoration experts." />
        <meta property="og:title" content="Make Good Blog | Expert Property Restoration Insights" />
        <meta property="og:description" content="Industry insights on commercial make good services, end of lease obligations and property restoration in Melbourne." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makegood.melbourne/blog" />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">Make Good Melbourne Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on make good services, end of lease works, and property restoration in Melbourne
            </p>
          </div>

          {/* Intro Section for SEO */}
          <div className="max-w-4xl mx-auto mb-16 prose prose-lg">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Welcome to the Make Good Melbourne blog, your comprehensive resource for professional insights into commercial and industrial property restoration. Our team of industry experts shares practical knowledge, compliance guidance, and best practices for end of lease make good projects across Melbourne and Victoria.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're a property manager, real estate agent, strata manager or tenant preparing for lease expiry, our articles cover everything from asbestos management and concrete cancer remediation to electrical make-safe procedures and waste management compliance. We understand that make good obligations can be complex and costly, which is why we provide detailed guides to help you navigate the process with confidence.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our blog covers specialised topics including building defect remediation, facade cladding safety, fire damage restoration, waterproofing solutions and sustainable practices in commercial property maintenance. Each article is written by experienced professionals who work on make good projects daily, ensuring you receive accurate, up-to-date information that reflects current industry standards and Victorian regulations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Explore our latest articles below to discover expert advice on maximising property value, smooth lease transitions, strategic planning for make good works and cost-effective solutions for commercial, retail and industrial spaces throughout Melbourne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Card key={post.id} className="border-border hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={getBlogImage(post.image)}
                    alt={post.imageAlt || post.title}
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
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
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
