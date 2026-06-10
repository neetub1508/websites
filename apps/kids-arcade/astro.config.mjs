import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kids-arcade.com',
  integrations: [tailwind()],
});
