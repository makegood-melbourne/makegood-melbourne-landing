import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('content_drafts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Make Good Melbourne</title>
        <meta name="description" content={post.meta_description} />
        {post.target_keywords && (
          <meta name="keywords" content={post.target_keywords.join(', ')} />
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-foreground">
                Make Good Melbourne
              </Link>
              <nav className="flex gap-6">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link to="/blog" className="text-foreground font-medium">
                  Blog
                </Link>
                <Link to="/content-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Content Dashboard
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <header className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={(post.published_at || post.created_at) as string}>
                    {(() => {
                      const raw = post.published_at || post.created_at;
                      const d = raw ? new Date(raw) : null;
                      return d && !isNaN(d.getTime())
                        ? d.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })
                        : 'Date unavailable';
                    })()}
                  </time>
                </div>
                {post.target_location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{post.target_location}</span>
                  </div>
                )}
                {post.word_count && (
                  <span>{post.word_count} words</span>
                )}
              </div>

              {post.target_keywords && post.target_keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.target_keywords.map((keyword: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}

              {post.meta_description && (
                <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4">
                  {post.meta_description}
                </p>
              )}
            </header>

            {post.generated_images && post.generated_images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {post.generated_images.map((img: any, i: number) => (
                  <img 
                    key={i}
                    src={img.url} 
                    alt={img.alt}
                    className="rounded-lg w-full h-auto"
                  />
                ))}
              </div>
            )}

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
