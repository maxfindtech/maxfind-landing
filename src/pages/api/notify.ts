import type { APIRoute } from 'astro';
import { sendEmail } from '@lib/resend';
import { renderEmail } from '@lib/email';
import { SITE } from '@lib/constants';

export const prerender = false;

const VALID_TOPICS = ['blog', 'changelog'] as const;
type Topic = (typeof VALID_TOPICS)[number];

export const POST: APIRoute = async ({ request, redirect }) => {
  const contactEmail = import.meta.env.CONTACT_EMAIL ?? 'hola@maxfind.app';
  const form = await request.formData();

  const email = String(form.get('email') ?? '').trim();
  const topic = String(form.get('topic') ?? '').trim() as Topic;

  const referer = request.headers.get('referer') ?? '';
  const isEn = /\/en(\/|$)/.test(new URL(referer || request.url).pathname);
  const basePath = (isEn ? '/en/' : '/') + topic;

  if (!email || !VALID_TOPICS.includes(topic)) {
    return redirect(`${basePath}?status=invalid`, 303);
  }

  const html = renderEmail({
    title: `Nueva suscripción al ${topic}`,
    intro: `Alguien quiere que le avisemos cuando publiquemos en ${topic}.`,
    fields: [
      { label: 'Email', value: email },
      { label: 'Tema', value: topic },
    ],
    preheader: `Suscripción de ${email} a ${topic}`,
  });

  const result = await sendEmail({
    to: contactEmail,
    from: `MAXFIND landing <noreply@${SITE.domain}>`,
    subject: `[Suscripción ${topic}] ${email}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error('[notify] send failed:', result.error);
    return redirect(`${basePath}?status=error`, 303);
  }
  return redirect(`${basePath}?status=ok`, 303);
};
