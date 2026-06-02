import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://easy1099tax.com',
  integrations: [tailwind()],
});
