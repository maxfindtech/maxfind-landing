import type { APIRoute } from 'astro';
import { sendEmail } from '@lib/resend';
import { renderEmail } from '@lib/email';
import { SITE } from '@lib/constants';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const contactEmail = import.meta.env.CONTACT_EMAIL ?? 'hola@maxfind.app';
  const form = await request.formData();

  const referer = request.headers.get('referer') ?? '';
  const isEn = /\/en(\/|$)/.test(new URL(referer || request.url).pathname);
  const basePath = isEn ? '/en/demo' : '/demo';

  const name = String(form.get('name') ?? '').trim();
  const role = String(form.get('role') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const company = String(form.get('company') ?? '').trim();
  const volume = String(form.get('volume') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (!name || !email || !company) {
    return redirect(`${basePath}?status=invalid`, 303);
  }

  const fields = [
    { label: 'Nombre', value: name },
    ...(role ? [{ label: 'Cargo', value: role }] : []),
    { label: 'Email', value: email },
    { label: 'Empresa', value: company },
    ...(volume ? [{ label: 'Volumen', value: volume }] : []),
    ...(message ? [{ label: 'Caso de uso', value: message, multiline: true }] : []),
  ];

  const html = renderEmail({
    title: 'Nueva solicitud de demo',
    intro: `${name} de ${company} pidió una demo.`,
    fields,
    preheader: `Demo solicitada por ${company} (${name})`,
  });

  const result = await sendEmail({
    to: contactEmail,
    from: `MAXFIND landing <noreply@${SITE.domain}>`,
    subject: `[Demo] ${company} — ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error('[demo] send failed:', result.error);
    return redirect(`${basePath}?status=error`, 303);
  }

  return redirect(`${basePath}?status=ok`, 303);
};
