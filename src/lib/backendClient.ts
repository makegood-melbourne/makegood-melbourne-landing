import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type BackendConfig = {
  url: string;
  publishableKey: string;
};

// Backend: MakeGOOD's own Supabase project (krgbykvrigbbkvyprqnb).
// This is set in code on purpose and NOT read from VITE_SUPABASE_URL, because the
// Netlify build settings still pointed at the old Lovable Cloud project
// (eijgvnbwbklartrzqhqt), which can no longer be managed. The key below is the
// public anon key, which is safe to ship in the browser.
const BACKEND_CONFIG: BackendConfig = {
  url: "https://krgbykvrigbbkvyprqnb.supabase.co",
  publishableKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZ2J5a3ZyaWdiYmt2eXBycW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMzk1NjYsImV4cCI6MjA4NDgxNTU2Nn0.8aCUrnJnMUVJ-BES78V13uZu671oQo6rNvu3ZrRV8vs",
};

export function getBackendConfig(): BackendConfig {
  return BACKEND_CONFIG;
}

let clientSingleton: SupabaseClient | null = null;

export function getBackendClient(): SupabaseClient {
  if (clientSingleton) return clientSingleton;

  const { url, publishableKey } = getBackendConfig();

  clientSingleton = createClient(url, publishableKey, {
    auth: {
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
      persistSession: true,
      autoRefreshToken: true,
    },
  });

  return clientSingleton;
}
