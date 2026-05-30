import type { APIRoute } from 'astro';
import { sendEmail } from '@lib/resend';
import { renderEmail } from '@lib/email';
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

  const fields = [
    { label: 'Nombre', value: name },
    { label: 'Email', value: email },
    ...(company ? [{ label: 'Empresa', value: company }] : []),
    { label: 'Mensaje', value: message, multiline: true },
  ];

  const html = renderEmail({
    title: 'Nuevo mensaje de contacto',
    intro: `Te escribió ${name} desde el formulario de contacto.`,
    fields,
    preheader: `Nuevo contacto de ${name} (${email})`,
  });

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
