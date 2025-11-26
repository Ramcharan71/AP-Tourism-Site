import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aptourism.gov.in',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      config: {
        autoprefixer: {
          flexbox: 'no-2009'
        }
      }
    }),
    sitemap()
  ],
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['@fontsource/inter', 'swiper']
    }
  }
});