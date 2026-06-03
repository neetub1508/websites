// ============================================================================
// Easy1099Tax site config.
//
// AdSense: this project uses its OWN, SEPARATE Google AdSense account — it must
// NEVER reuse another site's publisher ID (e.g. easypaycalc's). Until we create
// the easy1099tax AdSense account, leave ADSENSE_CLIENT empty: the <head> loader
// script and ads.txt stay off, so nothing incorrect ships.
//
// After signing up, set ADSENSE_CLIENT to this site's id, e.g.:
//   export const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';
// and set ADSENSE_PUB (the "pub-..." form, no "ca-" prefix) for ads.txt.
// ============================================================================
export const ADSENSE_CLIENT = ''; // e.g. 'ca-pub-XXXXXXXXXXXXXXXX' (easy1099tax's own)
export const ADSENSE_PUB = ADSENSE_CLIENT.replace(/^ca-/, ''); // 'pub-...' for ads.txt
export const ADSENSE_ENABLED = ADSENSE_CLIENT.length > 0;
