import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  trailingSlash: 'never',
  site: 'https://makegood.melbourne',
  redirects: {
    // Page-level redirects for old site structure
    '/tenants': '/what-is-make-good',
    '/blogs': '/blog',
    '/about': '/',
    '/learn': '/blog',
    '/cart': '/',
    '/services': '/capabilities',
    
    // Old /blogs/ URLs -> new /blog/ URLs with slug changes
    '/blogs/year-end-planning-commercial-property': '/blog/year-end-property-planning',
    '/blogs/waste-management-sustainability-commercial-demolition': '/blog/waste-management-sustainability-make-good-works',
    '/blogs/strategic-planning-commercial-makegood': '/blog/strategic-make-good-planning',
    '/blogs/office-strip-out-demolition-best-practices': '/blog/office-strip-out',
    '/blogs/building-defect-remediation-compliance-process': '/blog/building-defect-remediation-commercial-property',
    '/blogs/parapet-failure-emergency-repair-structural-safety': '/blog/parapet-failure-emergency-building-repairs',
    '/blogs/property-transformation-makegood-renovation': '/blog/new-year-property-transformations',
    '/blogs/commercial-makegood-complete-guide': '/blog/what-are-make-goods',
    '/blogs/polycarbonate-roofing-replacement-commercial': '/blog/warehouse-polycarbonate-roofing-replacement',
    '/blogs/makegood-services-comprehensive-overview': '/blog/ultimate-guide-to-make-good-services',
    '/blogs/painting-commercial-property-makegood-standards': '/blog/the-importance-of-painting',
    '/blogs/warehouse-makegood-industrial-lease-obligations': '/blog/port-melbourne-warehouse-end-of-lease-make-good',
    '/blogs/balcony-waterproofing-membrane-replacement': '/blog/balcony-waterproofing-preventing-fixing-leaks',
    '/blogs/car-park-line-marking-compliance-standards': '/blog/car-park-repairs-line-marking-make-good',
    '/blogs/carpet-tile-replacement-commercial-office': '/blog/carpet-tile-replacement-installation-floor-preparation',
    '/blogs/epoxy-flooring-industrial-applications': '/blog/restoring-concrete-floors',
    '/blogs/commercial-cleaning-services-post-makegood': '/blog/end-of-lease-cleaning-services',
    '/blogs/electrical-make-safe-emergency-response': '/blog/electrical-make-safe-decommissioning-demolition',
    '/blogs/the-ultimate-guide-to-pallet-racking-solutions': '/blog/guide-to-pallet-racking-solutions',
    '/blogs/property-condition-report': '/blog/understanding-property-condition-reports',
    
    // Catch-all for any other /blogs/ URLs -> same slug under /blog/
    '/blogs/[slug]': '/blog/[slug]',
    
    // Service page redirects for consolidated/renamed pages
    '/services/carpet-removal': '/services/concrete-slab-restoration',
    '/services/vinyl-removal': '/services/concrete-slab-restoration',
    '/services/tile-removal': '/services/concrete-slab-restoration',
    '/services/adhesive-removal': '/services/concrete-slab-restoration',
    '/services/commercial-cleaning': '/services/make-good-cleaning',
    '/services/commercial-painting': '/services/make-good-painting',
    
    // Blog post redirects for renamed/legacy URLs
    '/blog/year-end-planning-commercial-property': '/blog/year-end-property-planning',
    
    // Old /service-areas/ URLs -> new /areas/ URLs
    '/service-areas/melbourne-cbd': '/areas/melbourne-cbd',
    '/service-areas/port-melbourne': '/areas/port-melbourne',
    '/service-areas/dandenong': '/areas/dandenong',
    '/service-areas/clayton': '/areas/clayton',
    '/service-areas/moorabbin': '/areas/moorabbin',
    '/service-areas/richmond': '/areas/richmond',
    '/service-areas/ringwood': '/areas/ringwood',
    '/service-areas/altona': '/areas/altona',
    '/service-areas/kilsyth': '/areas/kilsyth',
    '/service-areas/mulgrave': '/areas/mulgrave',
    '/service-areas/south-melbourne': '/areas/south-melbourne',
    '/service-areas/truganina': '/areas/truganina',
    '/service-areas/[slug]': '/areas/[slug]',
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
