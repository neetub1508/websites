import type { APIRoute } from 'astro';
import { ADSENSE_PUB, ADSENSE_ENABLED } from '../lib/config';

// ads.txt is generated from this project's OWN AdSense publisher id (config.ts).
// Until that id is set, we emit only a placeholder comment — never another
// site's publisher line.
export const GET: APIRoute = () => {
  const body = ADSENSE_ENABLED
    ? `google.com, ${ADSENSE_PUB}, DIRECT, f08c47fec0942fa0\n`
    : `# ads.txt — set 1099 Estimator's own AdSense publisher id in src/lib/config.ts\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
