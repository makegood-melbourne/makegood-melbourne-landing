import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type BackendConfig = {
  url: string;
  publishableKey: string;
};

// Public (anon/publishable) config fallback.
// This prevents production builds (e.g. Netlify) from breaking if VITE env vars
// are not provided at build time.
const FALLBACK_BACKEND_CONFIG: BackendConfig = {
  url: "https://eijgvnbwbklartrzqhqt.supabase.co",
  publishableKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamd2bmJ3YmtsYXJ0cnpxaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5OTUxMTcsImV4cCI6MjA3ODU3MTExN30.I0HQj5pPxwjFTohztM-cg1IaVRcBhiKEu7JTtQJtuGc",
};

export function getBackendConfig(): BackendConfig {
  const url = import.meta.env.VITE_SUPABASE_URL || FALLBACK_BACKEND_CONFIG.url;
  const publishableKey =
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    FALLBACK_BACKEND_CONFIG.publishableKey;

  if (!url || !publishableKey) {
    throw new Error("Backend configuration is missing.");
  }

  return { url, publishableKey };
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
