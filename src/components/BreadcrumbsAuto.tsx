import { Home } from "lucide-react";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Function to convert slug to title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Parse the URL and generate breadcrumb items
function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  if (segments.length === 0) return breadcrumbs;
  
  const firstSegment = segments[0];
  
  // Handle different page types
  if (firstSegment === 'services') {
    breadcrumbs.push({ label: 'Services', href: '/services' });
    
    if (segments.length > 1) {
      const serviceSlug = segments[1];
      const serviceTitle = slugToTitle(serviceSlug);
      
      // Check if it's a parent service
      const parentServices = ['make-good-solutions', 'remediation-solutions', 'strip-out-solutions'];
      if (parentServices.includes(serviceSlug)) {
        breadcrumbs.push({ label: serviceTitle });
      } else {
        // It's a child service
        breadcrumbs.push({ label: serviceTitle });
      }
    }
  } else if (firstSegment === 'industries') {
    breadcrumbs.push({ label: 'Industries', href: '/industries' });
    
    if (segments.length > 1) {
      const industryTitle = slugToTitle(segments[1]);
      breadcrumbs.push({ label: industryTitle });
    }
  } else if (firstSegment === 'areas') {
    breadcrumbs.push({ label: 'Service Areas', href: '/service-areas' });
    
    if (segments.length > 1) {
      const areaTitle = slugToTitle(segments[1]);
      breadcrumbs.push({ label: areaTitle });
    }
  } else if (firstSegment === 'learn') {
    breadcrumbs.push({ label: 'Learn', href: '/learn' });
    
    if (segments.length > 1) {
      const guideTitle = slugToTitle(segments[1]);
      breadcrumbs.push({ label: guideTitle });
    }
  } else if (firstSegment === 'blog') {
    breadcrumbs.push({ label: 'Blog', href: '/blog' });
    
    if (segments.length > 1) {
      const postTitle = slugToTitle(segments[1]);
      breadcrumbs.push({ label: postTitle });
    }
  } else {
    // Check if it's a learn page (our-process, what-is-make-good, capabilities, faq, service-areas)
    const learnPages = ['our-process', 'what-is-make-good', 'capabilities', 'faq', 'service-areas'];
    
    if (learnPages.includes(firstSegment)) {
      breadcrumbs.push({ label: 'Learn', href: '/learn' });
      const pageTitle = slugToTitle(firstSegment);
      breadcrumbs.push({ label: pageTitle });
    } else {
      // Core pages and legal pages (about, contact, privacy-policy, terms-of-service)
      const pageTitle = slugToTitle(firstSegment);
      breadcrumbs.push({ label: pageTitle });
    }
  }
  
  return breadcrumbs;
}

const BreadcrumbsAuto = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Get current path from window.location
    const path = window.location.pathname;
    setCurrentPath(path);
    
    // Don't show breadcrumbs on homepage
    if (path === '/') {
      return;
    }
    
    const items = generateBreadcrumbs(path);
    setBreadcrumbs(items);
  }, []);

  // Don't render anything on homepage or if no breadcrumbs
  if (currentPath === '/' || breadcrumbs.length === 0) {
    return null;
  }

  // Generate JSON-LD structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://makegood.melbourne/"
      },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href && { "item": `https://makegood.melbourne${item.href}` })
      }))
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <a 
              href="/" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </a>
          </li>
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-muted-foreground/50">/</span>
              {item.href && index < breadcrumbs.length - 1 ? (
                <a 
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbsAuto;
