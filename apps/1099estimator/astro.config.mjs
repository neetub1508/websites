import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://1099estimator.com',
  integrations: [tailwind()],
});
