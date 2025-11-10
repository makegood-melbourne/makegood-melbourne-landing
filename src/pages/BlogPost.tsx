import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import cleaningImage from "@/assets/blog/cleaning-services.webp";
import paintingImage from "@/assets/blog/painting-wall.webp";
import warehouseImage from "@/assets/blog/warehouse-makegood.webp";
import propertyImage from "@/assets/blog/property-transformation.webp";
import newYearImage from "@/assets/blog/new-year-makegood.webp";
import officeStripOutImage from "@/assets/blog/office-strip-out.webp";
import constructionMeetingImage from "@/assets/blog/construction-site-meeting.webp";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  const getImage = (imagePath: string) => {
    if (imagePath.includes('cleaning-services')) return cleaningImage;
    if (imagePath.includes('painting-wall')) return paintingImage;
    if (imagePath.includes('warehouse-makegood')) return warehouseImage;
    if (imagePath.includes('property-transformation')) return propertyImage;
    if (imagePath.includes('new-year-makegood')) return newYearImage;
    if (imagePath.includes('office-strip-out')) return officeStripOutImage;
    if (imagePath.includes('construction-site-meeting')) return constructionMeetingImage;
    return cleaningImage;
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">{post.title}</h1>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img 
              src={getImage(post.image)}
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
                      <li key={i} className="text-muted-foreground">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              } else {
                return <p key={index} className="text-muted-foreground mb-4 leading-relaxed">{paragraph}</p>;
              }
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
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
