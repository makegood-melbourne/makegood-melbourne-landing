import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LocationTemplate from "./pages/LocationTemplate";
import NotFound from "./pages/NotFound";
import LegacyBlogRedirect from "./pages/LegacyBlogRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/areas/:slug" element={<LocationTemplate />} />
          
          {/* Legacy redirects for old site structure */}
          <Route path="/tenants" element={<Navigate to="/" replace />} />
          <Route path="/blogs" element={<Navigate to="/blog" replace />} />
          <Route path="/blogs/:slug" element={<LegacyBlogRedirect />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/learn" element={<Navigate to="/blog" replace />} />
          <Route path="/cart" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<Navigate to="/capabilities" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
