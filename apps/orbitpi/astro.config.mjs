import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages. Every route is emitted as /route/index.html,
// so URLs always end in a slash and match the canonical tags.
export default defineConfig({
  site: 'https://orbitpi.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  integrations: [tailwind({ applyBaseStyles: false })],
});
