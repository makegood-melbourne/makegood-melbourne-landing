import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContentAgent from "./pages/ContentAgent";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";
import LocationPage from "./pages/LocationPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/content-agent" 
            element={
              <ProtectedRoute>
                <ContentAgent />
              </ProtectedRoute>
            } 
          />
          <Route path="/blog-db" element={<BlogPage />} />
          <Route path="/blog-db/:slug" element={<BlogPostPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
