// This file is kept for Vite dev server compatibility
// Astro handles the actual rendering in production via .astro pages
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

// For development, we'll render a simple placeholder
// In production, Astro handles all routing and rendering
const App = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-foreground mb-4">Development Mode</h1>
      <p className="text-muted-foreground">
        Run <code className="bg-muted px-2 py-1 rounded">npm run astro dev</code> for Astro development
      </p>
    </div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
