export const SITE = {
  name: 'MAXFIND',
  domain: 'maxfind.app',
  url: 'https://maxfind.app',
  defaultTitle: 'MAXFIND — Verificación de identidad por DNI en Perú',
  defaultDescription:
    'API de verificación de identidad para negocios en Perú. Consultá DNIs en milisegundos, validá identidad física, accedé a red de reputación. Sandbox gratuito.',
  defaultOgImage: '/og/og-image.jpg',
  locale: 'es_PE',
  contactEmail: 'hola@maxfind.app',
} as const;

export const URLS = {
  APP: 'https://app.maxfind.app',
  API: 'https://api.maxfind.app',
  DOCS: '/docs',
  STATUS: 'https://status.maxfind.app',
  // Registro y login viven en la landing (UI), consumen la API.
  SIGNUP: '/registro',
  LOGIN: '/login',
} as const;

// Contrato de auth contra la API. Ajustar paths/campos según tu API real.
export const AUTH = {
  // Base de la API; usa PUBLIC_API_URL si está seteada, sino el dominio por defecto.
  apiBase: import.meta.env.PUBLIC_API_URL ?? 'https://api.maxfind.app',
  registerPath: '/v1/auth/register',
  loginPath: '/v1/auth/login',
  recoverPath: '/v1/auth/recover',
  // A dónde mandamos al usuario tras autenticarse OK (dashboard).
  redirectAfterAuth: 'https://app.maxfind.app',
} as const;

export const SOCIAL = {
  x: 'https://x.com/maxfindtech',
  linkedin: 'https://linkedin.com/company/maxfindtech',
  github: 'https://github.com/maxfindtech',
} as const;

// Datos de la empresa para INDECOPI / Culqi / pie de página.
// ⚠️ Reemplazar cada valor por el real antes del launch comercial.
export const COMPANY = {
  legalName: 'MAXFIND S.A.C.',
  ruc: '20XXXXXXXXX', // TODO: reemplazar por RUC real
  address: 'Av. (pendiente), Lima, Perú', // TODO: dirección real
  city: 'Lima',
  country: 'Perú',
  phone: '+51 999 999 999', // TODO: teléfono real
  email: 'hola@maxfind.app',
} as const;

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV: {
  primary: NavLink[];
  footer: Record<string, NavLink[]>;
} = {
  primary: [
    { label: 'Producto', href: '/producto' },
    { label: 'Soluciones', href: '/soluciones' },
    { label: 'Precios', href: '/precios' },
    { label: 'Docs', href: URLS.DOCS, external: true },
    { label: 'Blog', href: '/blog' },
  ],
  footer: {
    Producto: [
      { label: 'Verificación DNI', href: '/producto/verificacion-dni' },
      { label: 'Validación de identidad', href: '/producto/validacion-identidad' },
      { label: 'Red de reputación', href: '/producto/red-reputacion' },
      { label: 'Sandbox', href: '/producto/sandbox' },
      { label: 'Precios', href: '/precios' },
    ],
    Soluciones: [
      { label: 'Clínicas', href: '/soluciones/clinicas' },
      { label: 'Edificios', href: '/soluciones/edificios' },
      { label: 'Fintech', href: '/soluciones/fintech' },
      { label: 'Comercio', href: '/soluciones/comercio' },
    ],
    Empresa: [
      { label: 'Sobre MAXFIND', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Pedir demo', href: '/demo' },
    ],
    Recursos: [
      { label: 'Documentación', href: URLS.DOCS, external: true },
      { label: 'Status', href: URLS.STATUS, external: true },
      { label: 'Changelog', href: '/changelog' },
    ],
    Legal: [
      { label: 'Términos', href: '/legal/terminos' },
      { label: 'Privacidad', href: '/legal/privacidad' },
    ],
  },
};
