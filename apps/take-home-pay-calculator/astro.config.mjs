import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to the real domain before deploying (used for canonical URLs + sitemap).
export default defineConfig({
  site: 'https://takehomepaycalculator.example',
  integrations: [tailwind()],
});
