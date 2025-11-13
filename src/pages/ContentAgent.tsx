import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, FileText, TrendingUp, Target, CheckCircle, XCircle, PlayCircle } from "lucide-react";
import { ContentDraftCard } from "@/components/ContentDraftCard";
import { ContentGapCard } from "@/components/ContentGapCard";

const ContentAgent = () => {
  const queryClient = useQueryClient();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  // Fetch content drafts
  const { data: drafts, isLoading: draftsLoading } = useQuery({
    queryKey: ['content-drafts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_drafts')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  // Fetch content gaps
  const { data: gaps, isLoading: gapsLoading } = useQuery({
    queryKey: ['content-gaps'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_gaps')
        .select('*')
        .order('priority_score', { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  // Fetch SEO parameters count
  const { data: seoParamsCount } = useQuery({
    queryKey: ['seo-params-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('seo_parameters')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count;
    }
  });

  // Initialize SEO parameters
  const initializeSEO = async () => {
    setIsInitializing(true);
    try {
      const response = await supabase.functions.invoke('initialize-seo-parameters');
      if (response.error) throw response.error;
      
      const { data } = response;
      if (data.skipped) {
        toast.info("SEO parameters already initialized");
      } else {
        toast.success(`Initialized ${data.count} SEO parameters`);
      }
      queryClient.invalidateQueries({ queryKey: ['seo-params-count'] });
    } catch (error: any) {
      console.error('Failed to initialize SEO:', error);
      toast.error(error.message || 'Failed to initialize SEO parameters');
    } finally {
      setIsInitializing(false);
    }
  };

  // Analyze content gaps
  const analyzeGaps = async () => {
    setIsAnalyzing(true);
    try {
      // Fetch your website content (simplified - in production you'd scrape the site)
      const siteContent = `Make Good Melbourne specializes in professional make good services for commercial and industrial spaces across Melbourne and Victoria. Services include end of lease works, make safe solutions, building remediation, pallet racking removal, electrical make-safe works, concrete cancer remediation, and waterproofing repairs.`;
      
      // Get competitor data from database
      const { data: competitors } = await supabase
        .from('competitor_analysis')
        .select('*')
        .order('analysis_date', { ascending: false })
        .limit(5);

      const response = await supabase.functions.invoke('analyze-content-gaps', {
        body: { 
          siteContent,
          competitorData: competitors || []
        }
      });

      if (response.error) throw response.error;
      
      const { data } = response;
      toast.success(`Found ${data.count} content opportunities!`);
      queryClient.invalidateQueries({ queryKey: ['content-gaps'] });
    } catch (error: any) {
      console.error('Failed to analyze gaps:', error);
      toast.error(error.message || 'Failed to analyze content gaps');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Analyze competitors
  const analyzeCompetitors = async () => {
    toast.info("Analyzing competitors...");
    try {
      const competitorUrls = [
        'https://agerofitouts.com.au/stripout-and-make-good/',
        'https://affordabledefits.com.au/',
        'https://nmgs.com.au/',
        'https://www.metrodefits.com.au/'
      ];

      const response = await supabase.functions.invoke('analyze-competitors', {
        body: { competitorUrls }
      });

      if (response.error) throw response.error;
      
      const { data } = response;
      toast.success(`Analyzed ${data.count} competitors`);
      queryClient.invalidateQueries({ queryKey: ['competitor-analysis'] });
    } catch (error: any) {
      console.error('Failed to analyze competitors:', error);
      toast.error(error.message || 'Failed to analyze competitors');
    }
  };

  // Generate content for a gap
  const generateContent = useMutation({
    mutationFn: async (gapId: string) => {
      const response = await supabase.functions.invoke('generate-content', {
        body: { gapId }
      });
      if (response.error) throw response.error;
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Content generated! Review it in the Drafts tab.");
      queryClient.invalidateQueries({ queryKey: ['content-drafts'] });
      queryClient.invalidateQueries({ queryKey: ['content-gaps'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to generate content');
    }
  });

  // Update draft status
  const updateDraftStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('content_drafts')
        .update({ 
          status,
          reviewed_at: new Date().toISOString(),
          ...(status === 'published' && { published_at: new Date().toISOString() })
        })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      toast.success(
        variables.status === 'approved' ? 'Content approved!' :
        variables.status === 'rejected' ? 'Content rejected' :
        'Content published!'
      );
      queryClient.invalidateQueries({ queryKey: ['content-drafts'] });
    }
  });

  const pendingDrafts = drafts?.filter(d => d.status === 'pending') || [];
  const approvedDrafts = drafts?.filter(d => d.status === 'approved') || [];
  const identifiedGaps = gaps?.filter(g => g.status === 'identified') || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">AI Content Agent</h1>
            <p className="text-muted-foreground mt-2">
              Automated content generation for makegood.melbourne
            </p>
          </div>
          <div className="flex gap-2">
            {(seoParamsCount === 0 || !seoParamsCount) && (
              <Button 
                onClick={initializeSEO} 
                disabled={isInitializing}
                variant="outline"
              >
                {isInitializing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Initialize SEO
              </Button>
            )}
            <Button onClick={analyzeCompetitors} variant="outline">
              Analyze Competitors
            </Button>
            <Button onClick={analyzeGaps} disabled={isAnalyzing}>
              {isAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Find Opportunities
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingDrafts.length}</div>
              <p className="text-xs text-muted-foreground">
                Content drafts awaiting approval
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Opportunities</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{identifiedGaps.length}</div>
              <p className="text-xs text-muted-foreground">
                Content gaps identified
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ready to Publish</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{approvedDrafts.length}</div>
              <p className="text-xs text-muted-foreground">
                Approved content pieces
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="drafts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="drafts">
              Content Drafts {pendingDrafts.length > 0 && (
                <Badge variant="secondary" className="ml-2">{pendingDrafts.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="gaps">
              Opportunities {identifiedGaps.length > 0 && (
                <Badge variant="secondary" className="ml-2">{identifiedGaps.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drafts" className="space-y-4">
            {draftsLoading ? (
              <div className="flex justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : drafts && drafts.length > 0 ? (
              drafts.map((draft) => (
                <ContentDraftCard
                  key={draft.id}
                  draft={draft}
                  onApprove={() => updateDraftStatus.mutate({ id: draft.id, status: 'approved' })}
                  onReject={() => updateDraftStatus.mutate({ id: draft.id, status: 'rejected' })}
                  onPublish={() => updateDraftStatus.mutate({ id: draft.id, status: 'published' })}
                />
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-semibold mb-2">No content drafts yet</p>
                  <p className="text-muted-foreground mb-4">
                    Find opportunities and generate content to get started
                  </p>
                  <Button onClick={analyzeGaps} disabled={isAnalyzing}>
                    {isAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Find Opportunities
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="gaps" className="space-y-4">
            {gapsLoading ? (
              <div className="flex justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : gaps && gaps.length > 0 ? (
              gaps.map((gap) => (
                <ContentGapCard
                  key={gap.id}
                  gap={gap}
                  onGenerate={() => generateContent.mutate(gap.id)}
                  isGenerating={generateContent.isPending}
                />
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-semibold mb-2">No opportunities identified yet</p>
                  <p className="text-muted-foreground mb-4">
                    Run the content gap analysis to find opportunities
                  </p>
                  <Button onClick={analyzeGaps} disabled={isAnalyzing}>
                    {isAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Find Opportunities
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContentAgent;