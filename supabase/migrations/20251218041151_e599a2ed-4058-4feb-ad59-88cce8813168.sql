-- Add source_page column to track which page enquiries come from
ALTER TABLE public.contact_enquiries 
ADD COLUMN source_page TEXT;