import type { APIRoute } from 'astro';
import { sendEmail, escapeHtml } from '@lib/resend';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const contactEmail = import.meta.env.CONTACT_EMAIL ?? 'hola@maxfind.app';
  const form = await request.formData();

  const name = String(form.get('name') ?? '').trim();
  const role = String(form.get('role') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const company = String(form.get('company') ?? '').trim();
  const volume = String(form.get('volume') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (!name || !email || !company) {
    return redirect('/demo?status=invalid', 303);
  }

  const html = `
    <h2>Nueva solicitud de demo</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    ${role ? `<p><strong>Cargo:</strong> ${escapeHtml(role)}</p>` : ''}
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    ${volume ? `<p><strong>Volumen estimado:</strong> ${escapeHtml(volume)}</p>` : ''}
    ${message ? `<p><strong>Caso de uso:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>` : ''}
  `;

  const result = await sendEmail({
    to: contactEmail,
    from: `MAXFIND landing <noreply@${new URL(request.url).hostname}>`,
    subject: `[Demo] ${company} — ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error('[demo] send failed:', result.error);
    return redirect('/demo?status=error', 303);
  }

  return redirect('/demo?status=ok', 303);
};
