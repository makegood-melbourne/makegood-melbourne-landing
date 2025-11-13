import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('content_drafts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
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
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Expert insights on make good services, end of lease works, and property restoration in Melbourne
            </p>
          </div>

          {posts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No blog posts published yet.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <CardTitle className="text-2xl hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {post.meta_description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.target_keywords?.slice(0, 3).map((keyword: string, i: number) => (
                          <Badge key={i} variant="secondary">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {(() => {
                              const raw = post.published_at || post.created_at;
                              const d = raw ? new Date(raw) : null;
                              return d && !isNaN(d.getTime())
                                ? d.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })
                                : 'Date unavailable';
                            })()}
                          </span>
                        </div>
                        {post.target_location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{post.target_location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 ml-auto text-primary">
                          <span>Read more</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
