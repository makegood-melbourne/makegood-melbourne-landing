import { useParams, Navigate } from "react-router-dom";
import { blogRedirects } from "@/lib/redirects";

/**
 * Handles redirects from old /blogs/:slug URLs to new /blog/:slug URLs
 * Also handles slug changes (e.g., old slug names to new ones)
 */
const LegacyBlogRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }
  
  // Check if this slug needs to be redirected to a different slug
  const newSlug = blogRedirects[slug] || slug;
  
  // Redirect from /blogs/:slug to /blog/:newSlug
  return <Navigate to={`/blog/${newSlug}`} replace />;
};

export default LegacyBlogRedirect;