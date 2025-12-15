-- Create contact_enquiries table to store form submissions as backup
CREATE TABLE public.contact_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for form submissions
CREATE POLICY "Anyone can submit contact enquiries"
ON public.contact_enquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users can view enquiries
CREATE POLICY "Authenticated users can view enquiries"
ON public.contact_enquiries
FOR SELECT
TO authenticated
USING (true);