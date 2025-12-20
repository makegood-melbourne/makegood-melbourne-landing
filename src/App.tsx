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
import ServiceTemplate from "./pages/ServiceTemplate";
import IndustryTemplate from "./pages/IndustryTemplate";
import GuestPostsDownload from "./pages/GuestPostsDownload";
import NotFound from "./pages/NotFound";
import LegacyBlogRedirect from "./pages/LegacyBlogRedirect";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQPage from "./pages/FAQPage";
import WhatIsMakeGood from "./pages/WhatIsMakeGood";
import OurProcess from "./pages/OurProcess";
import { Chatbot } from "./components/Chatbot";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/what-is-make-good" element={<WhatIsMakeGood />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/areas/:slug" element={<LocationTemplate />} />
          <Route path="/services/:slug" element={<ServiceTemplate />} />
          <Route path="/industries/:slug" element={<IndustryTemplate />} />
          <Route path="/downloads/guest-posts" element={<GuestPostsDownload />} />
          
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
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
