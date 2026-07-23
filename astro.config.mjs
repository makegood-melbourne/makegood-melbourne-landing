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
  trailingSlash: 'always',
  site: 'https://makegood.melbourne',
  redirects: {
    // Redirects live in netlify.toml as real server-side 301s.
    // Do not add entries here, Astro static output renders them as client-side
    // meta-refresh redirects, which Googlebot treats as weak or duplicate signals.
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src/',
      },
    },
    server: {
      allowedHosts: ['all'],
    },
  },
});
