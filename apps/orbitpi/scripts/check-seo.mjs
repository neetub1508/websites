// Check the generated static site without adding a browser or parser dependency.
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const origin = 'https://orbitpi.com';
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"');
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map((m) => [m[1].toLowerCase(), decode(m[3])]));
const tags = (source, name) => [...source.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((m) => attrs(m[0]));
const routeFile = (pathname) => path.join(dist, pathname.endsWith('/') ? `${pathname}index.html` : pathname);
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((e) => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
  return files.flat();
}
const files = (await walk(dist)).filter((f) => f.endsWith('.html'));
const pages = new Map();
for (const file of files) {
  const relative = path.relative(dist, file).split(path.sep).join('/');
  const route = relative === 'index.html' ? '/' : `/${relative.replace(/index\.html$/, '')}`;
  pages.set(route, await readFile(file, 'utf8'));
}
const titles = new Set();
const descriptions = new Set();
const indexable = [];
let imageCount = 0;
for (const [route, source] of pages) {
  const meta = tags(source, 'meta');
  const getMeta = (key) => meta.find((m) => m.name === key || m.property === key)?.content;
  const noindex = getMeta('robots')?.includes('noindex');
  const title = source.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = getMeta('description');
  check(Boolean(title), `${route}: missing title`);
  check(Boolean(description), `${route}: missing description`);
  check((source.match(/<h1\b/g) || []).length === 1, `${route}: expected one H1`);
  check(tags(source, 'html')[0]?.lang === 'en', `${route}: incorrect document language`);
  const indiaSpecific = route === '/india/' || source.includes('Applies to India');
  check(getMeta('og:locale') === (indiaSpecific ? 'en_IN' : 'en_GB'), `${route}: incorrect regional social locale`);
  const canonicals = tags(source, 'link').filter((l) => l.rel === 'canonical');
  if (noindex) {
    // Noindex pages (404, thank-you) have no indexable URL, so no canonical or og:url.
    check(canonicals.length === 0 && !getMeta('og:url'), `${route}: noindex page must not declare a canonical`);
  } else {
    check(canonicals.length === 1 && canonicals[0].href === origin + route, `${route}: incorrect canonical`);
    check(getMeta('og:url') === origin + route, `${route}: incorrect OG URL`);
  }
  const ogImage = getMeta('og:image') ?? '';
  check(ogImage.startsWith(origin + '/'), `${route}: social image must be an absolute site URL`);
  if (ogImage.startsWith(origin + '/')) {
    try { await access(routeFile(new URL(ogImage).pathname)); }
    catch { errors.push(`${route}: missing social image ${ogImage}`); }
  }
  check(getMeta('og:image:width') === '1200' && getMeta('og:image:height') === '630', `${route}: social image must be 1200x630`);
  check(Boolean(getMeta('twitter:image:alt')), `${route}: missing social image alt`);
  if (!noindex) {
    indexable.push(origin + route);
    check(!titles.has(title), `${route}: duplicate title`);titles.add(title);
    check(!descriptions.has(description), `${route}: duplicate description`);descriptions.add(description);
  }
  const nodes = [];
  for (const m of source.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    try { nodes.push(...(JSON.parse(m[1])['@graph'] || [])); }
    catch { errors.push(`${route}: invalid JSON-LD`); }
  }
  if (!noindex) check(nodes.some((n) => n['@type'] === 'Organization'), `${route}: missing organization schema`);
  for (const node of nodes.filter((n) => n['@type'] === 'Organization')) {
    check(!node.contactPoint?.availableLanguage, `${route}: support languages require approval`);
  }
  for (const node of nodes.filter((n) => n['@type'] === 'FAQPage')) {
    const visible = decode(source.replace(/<script\b[^>]*>.*?<\/script>/gs, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    for (const q of node.mainEntity) {
      check(visible.includes(q.name), `${route}: FAQ question absent from visible page`);
      check(visible.includes(q.acceptedAnswer.text), `${route}: FAQ answer absent from visible page`);
    }
  }
  for (const node of nodes.filter((n) => n['@type'] === 'SoftwareApplication' && route.startsWith('/products/'))) {
    check(!node.featureList, `${route}: feature claims need approval before structured-data publication`);
    check(Boolean(node.image), `${route}: software schema missing image`);
    check(node.mainEntityOfPage?.['@id'] === origin + route + '#webpage', `${route}: software not linked to page entity`);
  }
  if (route.startsWith('/guides/') && route !== '/guides/') {
    const art = nodes.find((n) => n['@type'] === 'Article');
    check(Boolean(art?.headline && art?.datePublished && art?.dateModified && art?.image && art?.author), `${route}: incomplete Article schema`);
    check(art?.mainEntityOfPage?.['@id'] === origin + route + '#webpage', `${route}: article not linked to page entity`);
    check(getMeta('article:modified_time') === art?.dateModified, `${route}: article modified date mismatch`);
  }
  for (const img of tags(source, 'img')) {
    imageCount++;
    check(Boolean(img.alt?.trim()), `${route}: missing image alt`);
    check(Number(img.width) > 0 && Number(img.height) > 0, `${route}: missing image dimensions`);
    if (img.src?.startsWith('/images/') && !img.src.startsWith('/images/brand/')) {
      check(Boolean(img.srcset && img.sizes), `${route}: content artwork needs responsive sources and sizes`);
    }
    check(!img.src?.includes('lead-management-ai-voice-agent'), `${route}: retired Leads asset name`);
    const urls = [img.src, ...(img.srcset || '').split(',').map((s) => s.trim().split(/\s+/)[0])].filter(Boolean);
    for (const url of urls) if (url.startsWith('/')) {
      try { await access(routeFile(new URL(url, origin).pathname)); }
      catch { errors.push(`${route}: missing image ${url}`); }
    }
  }
  const header = source.slice(source.indexOf('<header'), source.indexOf('</header>'));
  const footer = source.slice(source.indexOf('<footer'));
  const footerProducts = footer.match(/<nav aria-label="Products"[^>]*>[\s\S]*?<\/nav>/)?.[0] ?? '';
  check(header.length > 0 && !header.includes('/products/accounting-software/'), `${route}: Ledger must stay out of the header`);
  check(footerProducts.length > 0 && !footerProducts.includes('/products/accounting-software/'), `${route}: Ledger must stay out of the footer product list`);
  for (const link of tags(source, 'a')) {
    if (!link.href || /^(mailto:|tel:)/.test(link.href)) continue;
    const url = new URL(link.href, origin + route);
    if (url.origin !== origin) continue;
    const target = pages.get(url.pathname);
    if (target === undefined) {
      try { await access(routeFile(url.pathname)); }
      catch { errors.push(`${route}: broken internal link ${link.href}`); }
    } else if (url.hash) {
      const ids = [...target.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
      check(ids.includes(decodeURIComponent(url.hash.slice(1))), `${route}: missing anchor ${link.href}`);
    }
  }
}
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
for (const entry of sitemap.matchAll(/<url><loc>([^<]+)<\/loc>(.*?)<\/url>/g)) {
  const route = new URL(entry[1]).pathname;
  if (route.startsWith('/guides/') && route !== '/guides/') {
    const modified = tags(pages.get(route) ?? '', 'meta').find((m) => m.property === 'article:modified_time')?.content;
    check(entry[2] === `<lastmod>${modified}</lastmod>`, `${route}: sitemap lastmod must match the article date`);
  } else check(!entry[2].includes('<lastmod>'), `${route}: no verified page-specific modification date`);
}
check(new Set(locations).size === locations.length, 'Sitemap has duplicate URLs');
for (const url of indexable) check(locations.includes(url), `Indexable page missing from sitemap: ${url}`);
for (const url of locations) check(indexable.includes(url), `Sitemap includes a missing or noindex page: ${url}`);
const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
check(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'robots.txt missing sitemap');
const llms = await readFile(path.join(dist, 'llms.txt'), 'utf8');
check(llms.startsWith('# OrbitPi\n'), 'llms.txt must be a plain-text site summary');
for (const url of [
  `${origin}/products/ai-document-ocr/`,
  `${origin}/products/warehouse-inventory-management/`,
  `${origin}/products/lead-management-software/`,
  `${origin}/products/asset-management-software/`,
]) check(llms.includes(url), `llms.txt missing ${url}`);
for (const banned of ['Hindi', 'Tally', 'Ledger', 'double-entry', 'coming soon', 'WhatsApp']) {
  check(!llms.includes(banned), `llms.txt includes unapproved wording: ${banned}`);
}
check(!locations.includes(`${origin}/llms.txt`), 'llms.txt is not an HTML page and must stay out of the sitemap');
for (const route of ['/404.html', '/contact/thanks/', '/products/accounting-software/']) check(pages.get(route)?.includes('noindex'), `${route}: missing noindex`);
const ledger = pages.get('/products/accounting-software/');
check(ledger?.includes('Coming soon') && !ledger.includes('"@type":"SoftwareApplication"'), 'Unreleased Ledger must not be marked as released software');
check(pages.get('/products/lead-management-software/')?.includes('AI voice agent, coming soon'), 'Voice AI availability label missing');
assert.equal(errors.length, 0, errors.join('\n'));
console.log(`SEO checks passed: ${pages.size} HTML pages, ${indexable.length} indexable URLs and ${imageCount} image placements. Metadata, sitemap, internal links, assets and structured data verified.`);
