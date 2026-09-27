import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages. Every route is emitted as /route/index.html,
// so URLs always end in a slash and match the canonical tags.
// CSS is inlined (~8 KB gzipped) so first paint does not wait on a render-blocking stylesheet request.
export default defineConfig({
  site: 'https://orbitpi.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [tailwind({ applyBaseStyles: false })],
});
