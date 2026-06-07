// ============================================================================
// World of Gaming site config.
//
// AdSense: this site runs under the same Google AdSense ACCOUNT as the other
// tools (publisher id ca-pub-8016259834034338). A publisher id is the account
// id, so using it across one's own sites is correct — provided
// worldofgaming.com is added under AdSense → Sites (and passes review). Setting
// ADSENSE_CLIENT turns on the <head> loader script (Layout) and the real
// ads.txt line automatically.
//
// Note: the design intentionally shows NO visible ad units. The loader below is
// only what AdSense needs to verify and approve the site. Ad units (if ever
// wanted) can be added later without touching this file.
// ============================================================================
export const SITE_NAME = 'World of Gaming';
export const SITE_URL = 'https://worldofgaming.com';
export const CONTACT_EMAIL = 'hello@worldofgaming.com';

export const ADSENSE_CLIENT = 'ca-pub-8016259834034338';
export const ADSENSE_PUB = ADSENSE_CLIENT.replace(/^ca-/, ''); // 'pub-...' for ads.txt
export const ADSENSE_ENABLED = ADSENSE_CLIENT.length > 0;
