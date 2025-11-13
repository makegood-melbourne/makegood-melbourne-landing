-- Drop the overly permissive public policy
DROP POLICY IF EXISTS "Anyone can view published drafts" ON content_drafts;

-- Create a public view that only exposes content, not SEO strategy
CREATE OR REPLACE VIEW public.published_content AS
SELECT 
  id,
  title,
  slug,
  content,
  meta_description,
  content_type,
  target_location,
  word_count,
  generated_images,
  published_at,
  created_at
FROM content_drafts
WHERE status = 'published';

-- Enable RLS on the view
ALTER VIEW public.published_content SET (security_invoker = true);

-- Grant select permission on the view to anon and authenticated users
GRANT SELECT ON public.published_content TO anon, authenticated;

-- Update the authenticated users policy to be more specific
DROP POLICY IF EXISTS "Authenticated users can manage drafts" ON content_drafts;

CREATE POLICY "Authenticated users can view all drafts"
ON content_drafts
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can insert drafts"
ON content_drafts
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update drafts"
ON content_drafts
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete drafts"
ON content_drafts
FOR DELETE
TO authenticated
USING (true);