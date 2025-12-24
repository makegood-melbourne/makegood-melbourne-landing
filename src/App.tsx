import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./page-components/Index";
import Capabilities from "./page-components/Capabilities";
import Blog from "./page-components/Blog";
import BlogPost from "./page-components/BlogPost";
import LocationTemplate from "./page-components/LocationTemplate";
import ServiceTemplate from "./page-components/ServiceTemplate";
import IndustryTemplate from "./page-components/IndustryTemplate";
import GuestPostsDownload from "./page-components/GuestPostsDownload";
import NotFound from "./page-components/NotFound";
import Contact from "./page-components/Contact";
import ServiceAreas from "./page-components/ServiceAreas";
import PrivacyPolicy from "./page-components/PrivacyPolicy";
import TermsOfService from "./page-components/TermsOfService";
import FAQPage from "./page-components/FAQPage";
import WhatIsMakeGood from "./page-components/WhatIsMakeGood";
import OurProcess from "./page-components/OurProcess";
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
          
          {/* Legacy redirects */}
          <Route path="/tenants" element={<Navigate to="/" replace />} />
          <Route path="/blogs" element={<Navigate to="/blog" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/learn" element={<Navigate to="/blog" replace />} />
          <Route path="/cart" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<Navigate to="/capabilities" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
