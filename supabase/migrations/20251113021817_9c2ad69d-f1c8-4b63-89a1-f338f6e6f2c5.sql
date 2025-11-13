-- Create competitor_analysis table
CREATE TABLE IF NOT EXISTS public.competitor_analysis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  competitor_name TEXT NOT NULL,
  competitor_url TEXT NOT NULL,
  ranking_position INTEGER,
  page_count INTEGER,
  key_services TEXT[],
  target_locations TEXT[],
  content_summary TEXT,
  strengths JSONB,
  weaknesses JSONB,
  analysis_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  next_scan_date TIMESTAMP WITH TIME ZONE
);

-- Create content_gaps table
CREATE TABLE IF NOT EXISTS public.content_gaps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  gap_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  suggested_keywords TEXT[],
  priority_score INTEGER,
  impact_score INTEGER,
  estimated_traffic INTEGER,
  target_location TEXT,
  content_classification TEXT,
  competitor_urls TEXT[],
  status TEXT NOT NULL DEFAULT 'identified',
  content_draft_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content_drafts table
CREATE TABLE IF NOT EXISTS public.content_drafts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  gap_id UUID,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT NOT NULL,
  meta_description TEXT,
  content_type TEXT NOT NULL,
  target_keywords TEXT[],
  target_location TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  seo_score INTEGER,
  word_count INTEGER,
  navigation_structure JSONB,
  generated_images JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create seo_parameters table
CREATE TABLE IF NOT EXISTS public.seo_parameters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parameter_type TEXT NOT NULL,
  category TEXT,
  recommendation TEXT NOT NULL,
  value JSONB,
  priority TEXT,
  source TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.competitor_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_gaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_parameters ENABLE ROW LEVEL SECURITY;

-- RLS Policies for authenticated users
CREATE POLICY "Authenticated users can view competitor analysis"
  ON public.competitor_analysis FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage competitor analysis"
  ON public.competitor_analysis FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view content gaps"
  ON public.content_gaps FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage content gaps"
  ON public.content_gaps FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view published drafts"
  ON public.content_drafts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Authenticated users can manage drafts"
  ON public.content_drafts FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view SEO parameters"
  ON public.seo_parameters FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage SEO parameters"
  ON public.seo_parameters FOR ALL
  TO authenticated
  USING (true);