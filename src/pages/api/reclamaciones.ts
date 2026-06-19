import type { APIRoute } from 'astro';
import { sendEmail } from '@lib/resend';
import { renderEmail } from '@lib/email';
import { SITE } from '@lib/constants';

export const prerender = false;

// Genera un número de hoja simple basado en timestamp + 4 dígitos aleatorios.
// Suficientemente único para auditoría manual; si necesitamos serie correlativa
// estricta más adelante, lo conectamos a un contador en base de datos.
function generarNumeroHoja(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `${yyyy}${mm}${dd}-${hh}${mi}-${rand}`;
}

const ESC = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const POST: APIRoute = async ({ request, redirect }) => {
  const contactEmail = import.meta.env.CONTACT_EMAIL ?? 'hola@maxfind.app';
  const form = await request.formData();

  const get = (k: string) => String(form.get(k) ?? '').trim();

  const data = {
    nombres: get('nombres'),
    apellidos: get('apellidos'),
    tipoDoc: get('tipoDoc'),
    numDoc: get('numDoc'),
    email: get('email'),
    telefono: get('telefono'),
    domicilio: get('domicilio'),
    esMenor: get('esMenor'),
    tutor: get('tutor'),
    tipoBien: get('tipoBien'),
    monto: get('monto'),
    descripcionBien: get('descripcionBien'),
    tipoReclamo: get('tipoReclamo'),
    detalle: get('detalle'),
    pedido: get('pedido'),
    acepto: get('acepto'),
  };

  // Validación de obligatorios.
  const requeridos = [
    'nombres',
    'apellidos',
    'tipoDoc',
    'numDoc',
    'email',
    'domicilio',
    'tipoBien',
    'descripcionBien',
    'tipoReclamo',
    'detalle',
    'pedido',
  ];
  for (const k of requeridos) {
    if (!data[k as keyof typeof data]) {
      return redirect('/libro-reclamaciones?status=invalid', 303);
    }
  }
  if (!data.acepto) {
    return redirect('/libro-reclamaciones?status=invalid', 303);
  }

  const numeroHoja = generarNumeroHoja();
  const fechaIso = new Date().toISOString();

  // Email a la empresa.
  const htmlEmpresa = renderEmail({
    title: `Nuevo ${data.tipoReclamo} — Hoja Nº ${numeroHoja}`,
    intro: `Se registró un nuevo ${data.tipoReclamo} a través del libro de reclamaciones.`,
    fields: [
      { label: 'Nº de Hoja', value: numeroHoja },
      { label: 'Fecha', value: fechaIso },
      { label: 'Tipo', value: data.tipoReclamo },
      { label: 'Nombres', value: data.nombres },
      { label: 'Apellidos', value: data.apellidos },
      { label: 'Documento', value: `${data.tipoDoc} ${data.numDoc}` },
      { label: 'Email', value: data.email },
      { label: 'Teléfono', value: data.telefono || '—' },
      { label: 'Domicilio', value: data.domicilio },
      { label: 'Menor de edad', value: data.esMenor === 'si' ? `Sí (tutor: ${data.tutor})` : 'No' },
      { label: 'Tipo de bien', value: data.tipoBien },
      { label: 'Monto reclamado', value: data.monto || '—' },
      { label: 'Descripción del bien', value: data.descripcionBien, multiline: true },
      { label: 'Detalle', value: data.detalle, multiline: true },
      { label: 'Pedido', value: data.pedido, multiline: true },
    ],
    preheader: `Hoja Nº ${numeroHoja} · ${data.nombres} ${data.apellidos}`,
  });

  // Copia al consumidor con el número de hoja.
  const htmlConsumidor = renderEmail({
    title: `Recibimos tu ${data.tipoReclamo}`,
    intro: `Hola ${data.nombres}, registramos tu ${data.tipoReclamo} en el libro de reclamaciones de MAXFIND. Te respondemos en un plazo máximo de 30 días calendario.`,
    fields: [
      { label: 'Nº de Hoja', value: numeroHoja },
      { label: 'Fecha de registro', value: fechaIso },
      { label: 'Tipo', value: data.tipoReclamo },
      { label: 'Detalle registrado', value: data.detalle, multiline: true },
      { label: 'Tu pedido', value: data.pedido, multiline: true },
    ],
    extraHtml: `
      <p style="font-size: 13px; color: #475569; line-height: 1.6;">
        Conservá este correo como constancia. Si no recibís respuesta en 30 días calendario, podés
        elevar el caso a INDECOPI a través de
        <a href="https://www.indecopi.gob.pe/reclamo" style="color: #06B6D4;">indecopi.gob.pe/reclamo</a>.
      </p>`,
    preheader: `Tu Hoja Nº ${numeroHoja} fue registrada`,
  });

  const fromAddress = `MAXFIND Libro de Reclamaciones <noreply@${SITE.domain}>`;

  const [empresaResult, consumidorResult] = await Promise.all([
    sendEmail({
      to: contactEmail,
      from: fromAddress,
      subject: `[Libro Reclamaciones] ${data.tipoReclamo} Nº ${numeroHoja} — ${data.nombres} ${data.apellidos}`,
      html: htmlEmpresa,
      replyTo: data.email,
    }),
    sendEmail({
      to: data.email,
      from: fromAddress,
      subject: `Constancia de ${data.tipoReclamo} — Hoja Nº ${numeroHoja} — MAXFIND`,
      html: htmlConsumidor,
    }),
  ]);

  if (!empresaResult.ok) {
    console.error('[reclamaciones] envío a empresa falló:', empresaResult.error);
    return redirect('/libro-reclamaciones?status=error', 303);
  }
  if (!consumidorResult.ok) {
    console.error('[reclamaciones] copia al consumidor falló:', consumidorResult.error);
    // Aún así devolvemos OK porque el reclamo quedó registrado del lado de la empresa.
  }

  return redirect(`/libro-reclamaciones?status=ok&hoja=${encodeURIComponent(numeroHoja)}`, 303);
};
