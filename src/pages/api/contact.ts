import type { APIRoute } from 'astro';
import { sendEmail, escapeHtml } from '@lib/resend';
import { SITE } from '@lib/constants';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const contactEmail = import.meta.env.CONTACT_EMAIL ?? 'hola@maxfind.app';
  const form = await request.formData();

  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const company = String(form.get('company') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return redirect('/contacto?status=invalid', 303);
  }

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `;

  const result = await sendEmail({
    to: contactEmail,
    from: `MAXFIND landing <noreply@${SITE.domain}>`,
    subject: `[Contacto] ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error('[contact] send failed:', result.error);
    return redirect('/contacto?status=error', 303);
  }

  return redirect('/contacto?status=ok', 303);
};
