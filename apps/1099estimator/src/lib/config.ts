// ============================================================================
// 1099 Estimator site config.
//
// AdSense: runs under the same Google AdSense ACCOUNT as easypaycalc
// (publisher id ca-pub-8016259834034338). A publisher id is the account id, so
// using it across one's own sites is correct — provided 1099estimator.com is
// added under AdSense → Sites (and passes review). Setting ADSENSE_CLIENT turns
// on the <head> loader script (Layout) and the real ads.txt line automatically.
// ============================================================================
export const ADSENSE_CLIENT = 'ca-pub-8016259834034338';
export const ADSENSE_PUB = ADSENSE_CLIENT.replace(/^ca-/, ''); // 'pub-...' for ads.txt
export const ADSENSE_ENABLED = ADSENSE_CLIENT.length > 0;
