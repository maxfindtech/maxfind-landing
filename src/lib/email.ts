import { SITE } from './constants';

// Helper para renderizar emails branded (notificaciones internas y futuros
// transaccionales). Las tablas anidadas y estilos inline son por compatibilidad
// con clientes de email (Gmail, Outlook, Apple Mail) que ignoran <style>.
//
// El template de bienvenida al usuario (con API keys + CTAs) vive en
// src/lib/email-templates/welcome.html. Esto cubre el resto.

type EmailField = { label: string; value: string; multiline?: boolean };

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderField({ label, value, multiline }: EmailField): string {
  const safe = escapeHtml(value);
  if (multiline) {
    return `
      <tr>
        <td style="padding: 14px 0 6px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">${escapeHtml(label)}</td>
      </tr>
      <tr>
        <td style="padding: 0 0 14px 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safe.replace(/\n/g, '<br/>')}</td>
      </tr>`;
  }
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td width="120" style="font-size: 13px; font-weight: 600; color: #64748B;">${escapeHtml(label)}</td>
            <td style="font-size: 14px; color: #1E1B4B;">${safe}</td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function renderEmail(opts: {
  /** Título principal de la card */
  title: string;
  /** Texto introductorio opcional bajo el título */
  intro?: string;
  /** Lista de campos label/value que se renderizan como filas */
  fields?: EmailField[];
  /** HTML adicional (escapeado por el caller) si necesitás algo custom debajo */
  extraHtml?: string;
  /** Preheader: texto oculto que aparece en la preview del cliente de email */
  preheader?: string;
}): string {
  const { title, intro, fields = [], extraHtml = '', preheader } = opts;
  const fieldsHtml = fields.map(renderField).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #FAFAF9; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FAFAF9; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  ${preheader ? `<div style="display:none;font-size:1px;color:#FAFAF9;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${escapeHtml(preheader)}</div>` : ''}
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAF9; padding: 40px 10px;">
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #FAFAF9;">

          <!-- HEADER -->
          <tr>
            <td align="left" valign="top" style="padding: 0 10px 20px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 700; color: #1E1B4B; letter-spacing: -0.03em;">
                    ${SITE.name}<span style="color: #06B6D4;">.</span>
                  </td>
                </tr>
                <tr>
                  <td height="4" style="font-size: 1px; line-height: 1px; padding-top: 15px;">
                    <div style="height: 2px; width: 100%; background-color: #06B6D4; font-size: 1px; line-height: 1px;"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CARD -->
          <tr>
            <td align="center" valign="top" style="padding: 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 32px 28px;">
                <tr>
                  <td align="left" style="font-size: 20px; font-weight: 700; color: #1E1B4B; letter-spacing: -0.02em; padding-bottom: ${intro ? '12px' : '20px'};">
                    ${escapeHtml(title)}
                  </td>
                </tr>
                ${intro ? `<tr><td align="left" style="font-size: 14px; line-height: 1.6; color: #475569; padding-bottom: 20px;">${escapeHtml(intro)}</td></tr>` : ''}
                <tr>
                  <td>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      ${fieldsHtml}
                    </table>
                  </td>
                </tr>
                ${extraHtml ? `<tr><td style="padding-top: 20px;">${extraHtml}</td></tr>` : ''}
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" valign="top" style="padding: 30px 10px 10px 10px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center;">
                <tr>
                  <td style="font-size: 12px; line-height: 1.6; color: #94A3B8;">
                    ${SITE.name} • Tacna, Perú<br/>
                    Notificación automática del sitio <a href="${SITE.url}" style="color: #64748B; text-decoration: underline;">${SITE.domain}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
