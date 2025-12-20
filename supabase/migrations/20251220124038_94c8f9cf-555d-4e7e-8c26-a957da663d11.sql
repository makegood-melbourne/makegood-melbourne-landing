-- Drop the existing admin SELECT policy and recreate it as PERMISSIVE (default)
-- This ensures only admins can read, and all others are denied by default when RLS is enabled

-- First, let's ensure RLS is enabled (it should already be)
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Force RLS for table owners as well (prevents bypassing)
ALTER TABLE public.contact_enquiries FORCE ROW LEVEL SECURITY;