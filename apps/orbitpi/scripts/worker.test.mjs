import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { transpileModule, ModuleKind, ScriptTarget } from 'typescript';

const source = await readFile(new URL('../worker/index.ts', import.meta.url), 'utf8');
const { outputText } = transpileModule(source, { compilerOptions: { module: ModuleKind.ESNext, target: ScriptTarget.ES2022 } });
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const assets = { fetch: async () => new Response('asset') };
function submission(extra = {}, json = true) {
  const form = new FormData();
  for (const [key, value] of Object.entries({ name: 'Test', email: 'test@example.com', company: 'Test company', ...extra })) form.set(key, value);
  return new Request('https://orbitpi.com/api/contact', { method: 'POST', body: form, headers: json ? { Accept: 'application/json' } : {} });
}

test('HTTP and www requests permanently redirect and retain path, query and POST method', async () => {
  for (const url of ['http://orbitpi.com/products/?utm_source=test', 'https://www.orbitpi.com/products/?utm_source=test']) {
    const response = await worker.fetch(new Request(url, { method: 'POST', body: 'x' }), { ASSETS: assets });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get('Location'), 'https://orbitpi.com/products/?utm_source=test');
  }
});
test('Canonical production and local preview requests still serve assets', async () => {
  for (const url of ['https://orbitpi.com/', 'http://localhost:8787/', 'https://orbitpi.com/about/?utm_source=x', 'https://orbitpi.com/_astro/about.BS6RIQxn.css', 'https://orbitpi.com/sitemap.xml']) {
    assert.equal(await (await worker.fetch(new Request(url), { ASSETS: assets })).text(), 'asset', url);
  }
});
test('Non-canonical page paths take one permanent hop to the canonical URL', async () => {
  const cases = {
    'https://orbitpi.com/about': 'https://orbitpi.com/about/',
    'https://orbitpi.com/about?utm_source=x': 'https://orbitpi.com/about/?utm_source=x',
    'https://orbitpi.com/index.html': 'https://orbitpi.com/',
    'https://orbitpi.com/pricing/index.html': 'https://orbitpi.com/pricing/',
    'https://orbitpi.com/ABOUT/': 'https://orbitpi.com/about/',
    'http://www.orbitpi.com/Products': 'https://orbitpi.com/products/',
    'https://orbitpi.com/products/lead-management-ai-voice-agent/': 'https://orbitpi.com/products/lead-management-software/',
    'https://orbitpi.com/products/lead-management-ai-voice-agent': 'https://orbitpi.com/products/lead-management-software/',
    'https://orbitpi.com/404.html': 'https://orbitpi.com/404',
    'https://orbitpi.com/404/': 'https://orbitpi.com/404',
    'https://orbitpi.com/404/index.html': 'https://orbitpi.com/404',
  };
  for (const [from, to] of Object.entries(cases)) {
    const response = await worker.fetch(new Request(from), { ASSETS: assets });
    assert.equal(response.status, 308, from);
    assert.equal(response.headers.get('Location'), to, from);
  }
});
test('Error-page aliases terminate at a noindex 404 without an asset redirect loop', async () => {
  const htmlAssets = { fetch: async (request) => {
    const url = new URL(request.url);
    if (url.pathname === '/404/' || url.pathname === '/404.html') return Response.redirect(new URL('/404', url), 307);
    return new Response('<h1>Page not found</h1>', { headers: { 'Content-Type': 'text/html' } });
  } };
  for (const path of ['/404', '/404/', '/404.html', '/404/index.html']) {
    let response = await worker.fetch(new Request('https://orbitpi.com' + path), { ASSETS: htmlAssets });
    if (response.headers.has('Location')) response = await worker.fetch(new Request(response.headers.get('Location')), { ASSETS: htmlAssets });
    assert.equal(response.status, 404, path);
    assert.equal(response.headers.get('X-Robots-Tag'), 'noindex');
    assert.equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8');
    assert.equal(await response.text(), '<h1>Page not found</h1>');
  }
});
test('HTML charset is explicit while assets, caching and missing-page statuses are preserved', async () => {
  for (const status of [200, 404]) {
    const response = await worker.fetch(new Request('https://orbitpi.com/test/'), { ASSETS: { fetch: async () => new Response('· ₹', { status, headers: { 'Content-Type': 'text/html', 'Cache-Control': 'public, max-age=0', 'X-Content-Type-Options': 'nosniff' } }) } });
    assert.equal(response.status, status);
    assert.equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8');
    assert.equal(response.headers.get('Cache-Control'), 'public, max-age=0');
    assert.equal(response.headers.get('X-Content-Type-Options'), 'nosniff');
    assert.equal(await response.text(), '· ₹');
  }
  for (const type of ['text/css', 'image/webp', 'application/xml']) {
    const original = new Response('asset', { headers: { 'Content-Type': type } });
    const response = await worker.fetch(new Request('https://orbitpi.com/test.css'), { ASSETS: { fetch: async () => original } });
    assert.equal(response, original);
  }
});
test('Every retired Leads image redirects once to its matching responsive variant', async () => {
  for (const suffix of ['', '-640', '-card', '-card-640', '-card-400']) {
    const response = await worker.fetch(new Request(`http://www.orbitpi.com/images/products/lead-management-ai-voice-agent${suffix}.webp?v=1`), { ASSETS: assets });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get('Location'), `https://orbitpi.com/images/products/lead-management-software${suffix}.webp?v=1`);
  }
});
test('Contact endpoint only accepts POST', async () => {
  const response = await worker.fetch(new Request('https://orbitpi.com/api/contact'), { ASSETS: assets });
  assert.equal(response.status, 405);assert.equal(response.headers.get('Allow'), 'POST');
});
test('Missing delivery configuration cannot report success', async () => {
  const response = await worker.fetch(submission(), { ASSETS: assets });
  assert.equal(response.status, 503);assert.deepEqual(await response.json(), { ok: false });
});
test('Invalid contact requests are rejected before delivery', async () => {
  const response = await worker.fetch(submission({ email: 'invalid' }), { ASSETS: assets });
  assert.equal(response.status, 400);
});
test('Unsupported or malformed form bodies return a controlled validation failure', async () => {
  for (const contentType of ['application/json', 'multipart/form-data; boundary=missing']) {
    const request = new Request('https://orbitpi.com/api/contact', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': contentType }, body: '{}' });
    const response = await worker.fetch(request, { ASSETS: assets });
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false });
  }
});
test('Honeypot does not deliver a message', async () => {
  assert.equal((await worker.fetch(submission({ website: 'spam' }), { ASSETS: assets })).status, 200);
});
test('Webhook failure, exception and success are handled without sending real messages', async (t) => {
  const env = { ASSETS: assets, CONTACT_WEBHOOK_URL: 'https://example.invalid/webhook' };
  const mock = t.mock.method(globalThis, 'fetch', async () => new Response('', { status: 502 }));
  assert.equal((await worker.fetch(submission(), env)).status, 502);
  mock.mock.mockImplementation(async () => { throw new Error('Unavailable'); });
  assert.equal((await worker.fetch(submission(), env)).status, 502);
  mock.mock.mockImplementation(async () => new Response('', { status: 200 }));
  const ok = await worker.fetch(submission(), env);
  assert.equal(ok.status, 200);assert.deepEqual(await ok.json(), { ok: true });
  const redirect = await worker.fetch(submission({}, false), env);
  assert.equal(redirect.status, 303);assert.equal(redirect.headers.get('Location'), 'https://orbitpi.com/contact/thanks/');
});
test('Production routing runs the worker before static assets', async () => {
  const config = await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8');
  assert.match(config, /"run_worker_first"\s*:\s*true/);
});
