// Site-wide config. AdSense stays OFF (empty client) until the site is approved —
// shipping empty/fake ad boxes during review is an AdSense rejection risk (spec §AdSense).
// After approval, set ADSENSE_CLIENT to the "ca-pub-XXXXXXXX" id to switch ads on.
export const ADSENSE_CLIENT = '';
export const ADSENSE_ENABLED = ADSENSE_CLIENT.length > 0;
