// Cloudflare Worker: canonical HTTPS redirects, POST /api/contact and static assets.
// Validates the demo form and forwards it as JSON to CONTACT_WEBHOOK_URL
// (set in Cloudflare → Settings → Variables and Secrets; e.g. a Slack, Zapier or CRM webhook).

interface Env {
  CONTACT_WEBHOOK_URL?: string;
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if ((url.hostname === 'orbitpi.com' || url.hostname === 'www.orbitpi.com') && (url.protocol !== 'https:' || url.hostname !== 'orbitpi.com')) {
      url.protocol = 'https:';
      url.hostname = 'orbitpi.com';
      return Response.redirect(url.toString(), 308);
    }
    const { pathname } = url;
    if (pathname !== '/api/contact') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
    return handleContact(request, env);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  const form = await request.formData();
  const field = (k: string) => String(form.get(k) ?? '').trim().slice(0, 2000);
  const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json');

  // Honeypot: bots fill hidden fields. Pretend success.
  if (field('website')) return respond(request, wantsJson, true);

  const data = {
    name: field('name'),
    email: field('email'),
    company: field('company'),
    phone: field('phone'),
    products: form.getAll('products').map(String),
    message: field('message'),
    submittedAt: new Date().toISOString(),
  };
  if (!data.name || !data.company || !EMAIL.test(data.email)) return respond(request, wantsJson, false, 400);

  if (!env.CONTACT_WEBHOOK_URL) return respond(request, wantsJson, false, 503);
  try {
    const res = await fetch(env.CONTACT_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!res.ok) return respond(request, wantsJson, false, 502);
  } catch {
    return respond(request, wantsJson, false, 502);
  }
  return respond(request, wantsJson, true);
}

function respond(request: Request, json: boolean, ok: boolean, status = 200): Response {
  if (json) return Response.json({ ok }, { status: ok ? 200 : status });
  return Response.redirect(new URL(ok ? '/contact/thanks/' : '/contact/', request.url).toString(), 303);
}
