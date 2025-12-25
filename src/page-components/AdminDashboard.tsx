import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { LogIn, LogOut, FileText, Lightbulb, PenTool, Eye, Trash2, RefreshCw } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type ContentDraft = Database['public']['Tables']['content_drafts']['Row'];
type ContentGap = Database['public']['Tables']['content_gaps']['Row'];

const AdminDashboard = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [drafts, setDrafts] = useState<ContentDraft[]>([]);
  const [gaps, setGaps] = useState<ContentGap[]>([]);
  const [generating, setGenerating] = useState(false);
  const [selectedDraft, setSelectedDraft] = useState<ContentDraft | null>(null);
  const [selectedGap, setSelectedGap] = useState<ContentGap | null>(null);
  const [activeTab, setActiveTab] = useState("drafts");
  
  // New content form
  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState("blog_post");
  const [newKeywords, setNewKeywords] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const selectGapForGeneration = (gap: ContentGap) => {
    setSelectedGap(gap);
    setNewTitle(gap.title);
    setNewType(gap.gap_type === "missing_service" ? "service_page" : gap.gap_type === "missing_location" ? "location_page" : "blog_post");
    setNewKeywords(gap.suggested_keywords?.join(", ") || "");
    setNewLocation(gap.target_location || "");
    setActiveTab("generate");
    toast.success(`Selected: ${gap.title}`);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) {
        fetchData();
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchData();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchData = async () => {
    const [draftsRes, gapsRes] = await Promise.all([
      supabase.from('content_drafts').select('*').order('created_at', { ascending: false }),
      supabase.from('content_gaps').select('*').order('priority_score', { ascending: false })
    ]);
    
    if (draftsRes.data) setDrafts(draftsRes.data);
    if (gapsRes.data) setGaps(gapsRes.data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged in successfully");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    toast.success("Logged out");
  };

  const generateContent = async () => {
    if (!newTitle) {
      toast.error("Please enter a title");
      return;
    }
    
    setGenerating(true);
    try {
      const response = await supabase.functions.invoke('generate-content', {
        body: {
          title: newTitle,
          content_type: newType,
          keywords: newKeywords.split(',').map(k => k.trim()).filter(Boolean),
          location: newLocation || null
        }
      });
      
      if (response.error) throw response.error;
      
      toast.success("Content generated successfully");
      setNewTitle("");
      setNewKeywords("");
      setNewLocation("");
      fetchData();
    } catch (error: any) {
      toast.error(error.message || "Failed to generate content");
    } finally {
      setGenerating(false);
    }
  };

  const updateDraftStatus = async (id: string, status: string) => {
    const updates: any = { status };
    if (status === 'published') {
      updates.published_at = new Date().toISOString();
    }
    
    const { error } = await supabase
      .from('content_drafts')
      .update(updates)
      .eq('id', id);
      
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Status updated to ${status}`);
      fetchData();
    }
  };

  const deleteDraft = async (id: string) => {
    if (!confirm("Are you sure you want to delete this draft?")) return;
    
    const { error } = await supabase
      .from('content_drafts')
      .delete()
      .eq('id', id);
      
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Draft deleted");
      setSelectedDraft(null);
      fetchData();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'reviewed': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <RefreshCw className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogIn className="w-5 h-5" />
              Admin Login
            </CardTitle>
            <CardDescription>Sign in to access the content agent</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">Content Agent</h1>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </header>
      
      <main className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="drafts" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Drafts ({drafts.length})
            </TabsTrigger>
            <TabsTrigger value="gaps" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Content Gaps ({gaps.length})
            </TabsTrigger>
            <TabsTrigger value="generate" className="flex items-center gap-2">
              <PenTool className="w-4 h-4" />
              Generate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drafts" className="space-y-4">
            {selectedDraft ? (
              <Card>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle>{selectedDraft.title}</CardTitle>
                    <CardDescription>
                      {selectedDraft.content_type} • {selectedDraft.word_count} words
                      {selectedDraft.target_location && ` • ${selectedDraft.target_location}`}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setSelectedDraft(null)}>
                      Back
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => deleteDraft(selectedDraft.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(selectedDraft.status)}>
                      {selectedDraft.status}
                    </Badge>
                    {selectedDraft.seo_score && (
                      <Badge variant="outline">SEO: {selectedDraft.seo_score}/100</Badge>
                    )}
                  </div>
                  
                  {selectedDraft.meta_description && (
                    <div>
                      <h4 className="font-semibold mb-1">Meta Description</h4>
                      <p className="text-muted-foreground text-sm">{selectedDraft.meta_description}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold mb-2">Content</h4>
                    <div className="prose prose-sm max-w-none bg-muted p-4 rounded-lg max-h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm">{selectedDraft.content}</pre>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t">
                    {selectedDraft.status === 'pending' && (
                      <Button onClick={() => updateDraftStatus(selectedDraft.id, 'reviewed')}>
                        Mark Reviewed
                      </Button>
                    )}
                    {selectedDraft.status === 'reviewed' && (
                      <Button onClick={() => updateDraftStatus(selectedDraft.id, 'published')}>
                        Publish
                      </Button>
                    )}
                    {selectedDraft.status === 'published' && (
                      <Button variant="outline" onClick={() => updateDraftStatus(selectedDraft.id, 'pending')}>
                        Unpublish
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {drafts.length === 0 ? (
                  <Card>
                    <CardContent className="py-8 text-center text-muted-foreground">
                      No content drafts yet. Generate some content to get started.
                    </CardContent>
                  </Card>
                ) : (
                  drafts.map((draft) => (
                    <Card key={draft.id} className="cursor-pointer hover:bg-accent/50 transition-colors" onClick={() => setSelectedDraft(draft)}>
                      <CardContent className="py-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{draft.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {draft.content_type} • {draft.word_count} words • {new Date(draft.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(draft.status)}>
                            {draft.status}
                          </Badge>
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="gaps" className="space-y-4">
            {gaps.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  No content gaps identified yet.
                </CardContent>
              </Card>
            ) : (
              gaps.map((gap) => (
                <Card 
                  key={gap.id} 
                  className={`cursor-pointer transition-all hover:ring-2 hover:ring-primary ${selectedGap?.id === gap.id ? 'ring-2 ring-primary bg-accent/50' : ''}`}
                  onClick={() => selectGapForGeneration(gap)}
                >
                  <CardContent className="py-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{gap.title}</h3>
                        <p className="text-sm text-muted-foreground">{gap.description}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{gap.gap_type}</Badge>
                          {gap.priority_score && (
                            <Badge variant="outline">Priority: {gap.priority_score}</Badge>
                          )}
                          {gap.target_location && (
                            <Badge variant="outline">{gap.target_location}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedGap?.id === gap.id && <Badge className="bg-primary">Selected</Badge>}
                        <Badge className={gap.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}>
                          {gap.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle>Generate New Content</CardTitle>
                <CardDescription>
                  {selectedGap ? `Generating from: ${selectedGap.title}` : 'Use AI to generate SEO-optimized content'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title / Topic</label>
                  <Input
                    placeholder="e.g., Warehouse Make Good Services in Clayton"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Content Type</label>
                  <select
                    className="w-full border border-input rounded-md px-3 py-2 bg-background"
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                  >
                    <option value="blog_post">Blog Post</option>
                    <option value="location_page">Location Page</option>
                    <option value="service_page">Service Page</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Target Keywords (comma separated)</label>
                  <Input
                    placeholder="e.g., warehouse make good, end of lease, Clayton"
                    value={newKeywords}
                    onChange={(e) => setNewKeywords(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Target Location (optional)</label>
                  <Input
                    placeholder="e.g., Clayton, Melbourne"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                  />
                </div>
                
                <Button onClick={generateContent} disabled={generating} className="w-full">
                  {generating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <PenTool className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
