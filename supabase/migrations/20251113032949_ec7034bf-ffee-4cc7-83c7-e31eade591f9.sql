-- Create table to track file ownership and enforce quotas
CREATE TABLE content_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  draft_id UUID REFERENCES content_drafts(id) ON DELETE CASCADE,
  file_path TEXT NOT NULL UNIQUE,
  file_size BIGINT NOT NULL,
  mime_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE content_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own images"
ON content_images FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own images"
ON content_images FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own images"
ON content_images FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Drop permissive storage policies
DROP POLICY IF EXISTS "Authenticated users can upload content images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update content images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete content images" ON storage.objects;

-- Create owner-only storage policies
CREATE POLICY "Users can upload to own path"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'content-images' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "Users can delete own files"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'content-images' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Create function to check user's storage quota
CREATE OR REPLACE FUNCTION check_storage_quota()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
  user_total BIGINT;
  quota BIGINT := 100 * 1024 * 1024; -- 100MB per user
BEGIN
  SELECT COALESCE(SUM(file_size), 0)
  INTO user_total
  FROM content_images
  WHERE user_id = NEW.user_id;
  
  IF user_total + NEW.file_size > quota THEN
    RAISE EXCEPTION 'Storage quota exceeded (100MB limit)';
  END IF;
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER enforce_storage_quota
BEFORE INSERT ON content_images
FOR EACH ROW
EXECUTE FUNCTION check_storage_quota();