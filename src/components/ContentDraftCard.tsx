import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, FileText, Calendar, Target, TrendingUp, ExternalLink, Image, Plus, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactMarkdown from 'react-markdown';
import { useState, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContentDraftCardProps {
  draft: any;
  onApprove: () => void;
  onReject: () => void;
  onPublish: () => void;
}

export const ContentDraftCard = ({ draft, onApprove, onReject, onPublish }: ContentDraftCardProps) => {
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAddingImage, setIsAddingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const statusColor = {
    pending: 'bg-yellow-500',
    approved: 'bg-green-500',
    rejected: 'bg-red-500',
    published: 'bg-blue-500'
  }[draft.status] || 'bg-gray-500';

  const statusLabel = {
    pending: 'Pending Review',
    approved: 'Approved',
    rejected: 'Rejected',
    published: 'Published'
  }[draft.status] || draft.status;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
      
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast({
          title: "Error",
          description: "Invalid file type. Use JPEG, PNG, or WebP",
          variant: "destructive",
        });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "Image must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      setImageUrl(''); // Clear URL if file is selected
    }
  };

  const handleAddImage = async () => {
    if (!selectedFile && !imageUrl.trim()) {
      toast({
        title: "Error",
        description: "Please select a file or enter an image URL",
        variant: "destructive",
      });
      return;
    }

    setIsAddingImage(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      let finalImageUrl = imageUrl;

      // Upload file if selected
      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop();
        const filePath = `${user.id}/${draft.id}-${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('content-images')
          .upload(filePath, selectedFile, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) throw uploadError;

        // Track the uploaded file
        const { error: trackError } = await supabase
          .from('content_images')
          .insert({
            user_id: user.id,
            draft_id: draft.id,
            file_path: filePath,
            file_size: selectedFile.size,
            mime_type: selectedFile.type
          });

        if (trackError) throw trackError;

        const { data: { publicUrl } } = supabase.storage
          .from('content-images')
          .getPublicUrl(filePath);

        finalImageUrl = publicUrl;
      }

      const currentImages = draft.generated_images || [];
      const newImage = {
        url: finalImageUrl,
        alt: imageAlt || draft.title,
        type: 'manual'
      };

      const { error } = await supabase
        .from('content_drafts')
        .update({
          generated_images: [...currentImages, newImage]
        })
        .eq('id', draft.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Image added successfully",
      });
      
      setImageUrl('');
      setImageAlt('');
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      window.location.reload();
    } catch (error: any) {
      const errorMessage = error?.message?.includes('quota exceeded') 
        ? 'Storage quota exceeded (100MB limit)'
        : 'Failed to add image';
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsAddingImage(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-xl">{draft.title}</CardTitle>
              <Badge className={statusColor}>{statusLabel}</Badge>
            </div>
            <CardDescription>{draft.meta_description}</CardDescription>
            <div className="flex gap-2 flex-wrap mt-2">
              {draft.target_keywords?.map((keyword: string, i: number) => (
                <Badge key={i} variant="outline">{keyword}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>{draft.word_count} words</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-muted-foreground" />
            <span>{draft.content_type.replace('_', ' ')}</span>
          </div>
          {draft.target_location && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{draft.target_location}</span>
            </div>
          )}
          {draft.seo_score && (
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span>SEO Score: {draft.seo_score}/100</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Created {new Date(draft.created_at).toLocaleDateString()}</span>
          {draft.reviewed_at && (
            <span>• Reviewed {new Date(draft.reviewed_at).toLocaleDateString()}</span>
          )}
        </div>

        {draft.navigation_structure && (
          <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm font-semibold flex items-center gap-2">
              <Target className="h-4 w-4" />
              Content Type: {draft.navigation_structure.is_page_or_blog === 'page' ? 'Page' : 'Blog Post'}
            </p>
            {draft.navigation_structure.is_page_or_blog === 'page' && (
              <div className="text-sm space-y-1">
                {draft.navigation_structure.parent_menu && (
                  <p><span className="font-medium">Parent Menu:</span> {draft.navigation_structure.parent_menu}</p>
                )}
                {draft.navigation_structure.menu_label && (
                  <p><span className="font-medium">Menu Label:</span> {draft.navigation_structure.menu_label}</p>
                )}
                {draft.navigation_structure.position && (
                  <p><span className="font-medium">Position:</span> {draft.navigation_structure.position}</p>
                )}
                {draft.navigation_structure.changes_needed && (
                  <p className="text-amber-600 dark:text-amber-400">
                    <span className="font-medium">Navigation Changes:</span> {draft.navigation_structure.changes_needed}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {draft.generated_images && draft.generated_images.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium flex items-center gap-2">
              <Image className="h-4 w-4" />
              Images:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {draft.generated_images.map((img: any, i: number) => (
                <img 
                  key={i}
                  src={img.url} 
                  alt={img.alt}
                  className="rounded-lg border w-full h-32 object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {(draft.status === 'approved' || draft.status === 'pending') && (
          <div className="space-y-2 p-3 border rounded-lg">
            <p className="text-sm font-medium flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Image
            </p>
            <div className="space-y-2">
              <div>
                <Label htmlFor="image-file" className="text-xs">Upload Image (Max 5MB)</Label>
                <Input
                  ref={fileInputRef}
                  id="image-file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="h-8 text-sm"
                />
                {selectedFile && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <div>
                <Label htmlFor="image-url" className="text-xs">Image URL</Label>
                <Input
                  id="image-url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  disabled={!!selectedFile}
                  className="h-8 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="image-alt" className="text-xs">Alt Text (optional)</Label>
                <Input
                  id="image-alt"
                  placeholder="Descriptive text for accessibility"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <Button 
                onClick={handleAddImage} 
                disabled={isAddingImage}
                size="sm"
                className="w-full"
              >
                <Upload className="mr-2 h-3 w-3" />
                {isAddingImage ? 'Uploading...' : 'Add Image'}
              </Button>
            </div>
          </div>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              View Full Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>{draft.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="flex-1 mt-4 pr-4">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown>{draft.content}</ReactMarkdown>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>

      <CardFooter className="flex gap-2">
        {draft.status === 'pending' && (
          <>
            <Button onClick={onApprove} className="flex-1">
              <CheckCircle className="mr-2 h-4 w-4" />
              Approve
            </Button>
            <Button onClick={onReject} variant="destructive" className="flex-1">
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </Button>
          </>
        )}
        {draft.status === 'approved' && (
          <Button onClick={onPublish} className="flex-1">
            <ExternalLink className="mr-2 h-4 w-4" />
            Mark as Published
          </Button>
        )}
        {draft.status === 'published' && (
          <Badge variant="secondary" className="w-full justify-center py-2">
            {(() => {
              const raw = draft.published_at || draft.created_at;
              const d = raw ? new Date(raw) : null;
              const label = d && !isNaN(d.getTime()) ? d.toLocaleDateString() : 'Recently';
              return `Published on ${label}`;
            })()}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};