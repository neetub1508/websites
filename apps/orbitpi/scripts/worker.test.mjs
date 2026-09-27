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
  for (const url of ['https://orbitpi.com/', 'http://localhost:8787/']) assert.equal(await (await worker.fetch(new Request(url), { ASSETS: assets })).text(), 'asset');
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
