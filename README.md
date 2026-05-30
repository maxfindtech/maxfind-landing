# MAXFIND Landing

Landing pública de [MAXFIND](https://maxfind.app) — API de verificación de identidad por DNI en Perú.

## Stack

- **Framework:** [Astro 4](https://astro.build) (output `hybrid`)
- **Styling:** Tailwind CSS con paleta de marca
- **Forms:** [Resend](https://resend.com) vía server endpoints
- **Deploy:** Vercel (`@astrojs/vercel`)
- **Analytics:** Vercel Web Analytics + Plausible (opcional)

## Desarrollo

```bash
npm install
npm run dev      # localhost:4321
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Type-check (astro check) + build de producción |
| `npm run preview` | Preview del build local |
| `npm run astro` | CLI de Astro |

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

- `PUBLIC_API_URL` — URL pública de la API
- `PUBLIC_APP_URL` — URL del dashboard
- `PUBLIC_DOCS_URL` — URL de la documentación
- `RESEND_API_KEY` — server-side, para forms de contacto/demo
- `CONTACT_EMAIL` — destinatario de los forms
- `PUBLIC_PLAUSIBLE_DOMAIN` — opcional, para analytics

## Estructura

```
src/
├── components/   # Componentes reutilizables (Navbar, Footer, Logo, ComingSoon)
├── sections/     # Secciones grandes de la home
├── layouts/      # Layout.astro base
├── pages/        # Routing file-based de Astro
│   └── api/      # Server endpoints (contact, demo)
├── lib/          # Constants, SEO helpers, Resend client
└── styles/       # global.css con tokens y componentes Tailwind
```

Ver [`CLAUDE.md`](./CLAUDE.md) para la guía completa del proyecto.

## Deploy

Push a `main` deploya automáticamente a Vercel. Preview deploys en cada PR.
