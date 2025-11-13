import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Loader2, Target, TrendingUp, MapPin, FileText, Zap } from "lucide-react";

interface ContentGapCardProps {
  gap: any;
  onGenerate: () => void;
  isGenerating: boolean;
}

export const ContentGapCard = ({ gap, onGenerate, isGenerating }: ContentGapCardProps) => {
  const priorityColor = gap.priority_score >= 80 ? 'bg-red-500' :
                        gap.priority_score >= 60 ? 'bg-orange-500' :
                        gap.priority_score >= 40 ? 'bg-yellow-500' : 'bg-green-500';

  const impactColor = gap.impact_score >= 80 ? 'bg-purple-500' :
                      gap.impact_score >= 60 ? 'bg-blue-500' :
                      gap.impact_score >= 40 ? 'bg-cyan-500' : 'bg-gray-500';

  const gapTypeLabel = {
    missing_service: 'Missing Service',
    missing_location: 'Location Page',
    thin_content: 'Thin Content',
    keyword_opportunity: 'Keyword Gap',
    competitor_advantage: 'Competitor Lead'
  }[gap.gap_type] || gap.gap_type;

  const contentTypeLabel = {
    standalone_page: 'Standalone Page',
    landing_page: 'Landing Page',
    blog_post: 'Blog Post',
    pillar_content: 'Pillar Content',
    service_page: 'Service Page',
    location_page: 'Location Page'
  }[gap.content_classification] || gap.content_classification || 'Unknown';

  const statusColor = {
    identified: 'bg-blue-500',
    in_progress: 'bg-yellow-500',
    completed: 'bg-green-500',
    dismissed: 'bg-gray-500'
  }[gap.status] || 'bg-gray-500';

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-xl">{gap.title}</CardTitle>
              <Badge className={priorityColor}>
                Priority: {gap.priority_score}/100
              </Badge>
              {gap.impact_score && (
                <Badge className={impactColor}>
                  Impact: {gap.impact_score}/100
                </Badge>
              )}
              <Badge className={statusColor}>{gap.status}</Badge>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge variant="outline" className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {contentTypeLabel}
              </Badge>
              <Badge variant="outline">{gapTypeLabel}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-base">{gap.description}</CardDescription>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {gap.target_location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Target: {gap.target_location}</span>
            </div>
          )}
          {gap.estimated_traffic && (
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span>Est. Traffic: {gap.estimated_traffic}/month</span>
            </div>
          )}
        </div>

        {gap.suggested_keywords && gap.suggested_keywords.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Target Keywords:</p>
            <div className="flex gap-2 flex-wrap">
              {gap.suggested_keywords.map((keyword: string, i: number) => (
                <Badge key={i} variant="secondary">{keyword}</Badge>
              ))}
            </div>
          </div>
        )}

        {gap.competitor_urls && gap.competitor_urls.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Competitor Examples:</p>
            <div className="flex flex-col gap-1">
              {gap.competitor_urls.map((url: string, i: number) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline truncate"
                >
                  {url}
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter>
        {gap.status === 'identified' && (
          <Button 
            onClick={onGenerate} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Content...
              </>
            ) : (
              <>
                <PlayCircle className="mr-2 h-4 w-4" />
                Generate Content
              </>
            )}
          </Button>
        )}
        {gap.status === 'in_progress' && (
          <Badge variant="secondary" className="w-full justify-center py-2">
            Content draft being generated...
          </Badge>
        )}
        {gap.status === 'completed' && (
          <Badge variant="secondary" className="w-full justify-center py-2">
            Content completed
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};