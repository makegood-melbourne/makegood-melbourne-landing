-- Drop existing permissive policies on competitor_analysis
DROP POLICY IF EXISTS "Authenticated users can manage competitor analysis" ON public.competitor_analysis;
DROP POLICY IF EXISTS "Authenticated users can view competitor analysis" ON public.competitor_analysis;

-- Create admin-only policies for competitor_analysis
CREATE POLICY "Admins can view competitor analysis"
ON public.competitor_analysis
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage competitor analysis"
ON public.competitor_analysis
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop existing permissive policies on content_drafts
DROP POLICY IF EXISTS "Authenticated users can view all drafts" ON public.content_drafts;
DROP POLICY IF EXISTS "Authenticated users can insert drafts" ON public.content_drafts;
DROP POLICY IF EXISTS "Authenticated users can update drafts" ON public.content_drafts;
DROP POLICY IF EXISTS "Authenticated users can delete drafts" ON public.content_drafts;

-- Create admin-only policies for content_drafts
CREATE POLICY "Admins can view drafts"
ON public.content_drafts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage drafts"
ON public.content_drafts
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop existing permissive policies on content_gaps
DROP POLICY IF EXISTS "Authenticated users can manage content gaps" ON public.content_gaps;
DROP POLICY IF EXISTS "Authenticated users can view content gaps" ON public.content_gaps;

-- Create admin-only policies for content_gaps
CREATE POLICY "Admins can view content gaps"
ON public.content_gaps
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage content gaps"
ON public.content_gaps
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop existing permissive policies on seo_parameters
DROP POLICY IF EXISTS "Authenticated users can manage SEO parameters" ON public.seo_parameters;
DROP POLICY IF EXISTS "Authenticated users can view SEO parameters" ON public.seo_parameters;

-- Create admin-only policies for seo_parameters
CREATE POLICY "Admins can view SEO parameters"
ON public.seo_parameters
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage SEO parameters"
ON public.seo_parameters
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));