// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://juansadigital.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    })
  ]
});