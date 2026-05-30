# CLAUDE.md — MAXFIND LANDING

> Documento maestro para Claude Code en el repositorio `maxfindtech/landing`.
> Esta es la landing pública de MAXFIND, accesible en `maxfind.app`.
> Léelo completo antes de empezar cualquier tarea.

---

## 1. CONTEXTO DEL PROYECTO

### Qué es este repo

Este es el repositorio de la **landing pública** de MAXFIND. NO es el dashboard ni la API ni las docs. Es el sitio comercial donde llegan los prospects, leen sobre el producto, y deciden si se registran o piden una demo.

**URL final:** `maxfind.app`

### Su único propósito

**Convertir visitantes en signups o leads.**

Cada decisión de diseño, copy, performance y UX debe responder a la pregunta: **¿esto ayuda a convertir más?**

- Tiempo de carga rápido → más conversiones
- Copy claro → más conversiones
- CTAs visibles → más conversiones
- Trust signals (logos, testimonios) → más conversiones

Lo que NO sirve para convertir, se descarta.

### Qué NO es esta landing

- ❌ No es la documentación (eso es `docs.maxfind.app`)
- ❌ No es el dashboard del cliente (eso es `app.maxfind.app`)
- ❌ No es un blog (puede tener uno pero no es el propósito)
- ❌ No es una página corporativa "about us" pesada

### Quiénes la van a visitar

**Audiencia primaria (high intent):**
- CTOs y tech leads buscando "API DNI Perú" en Google
- Devs que llegan por recomendación o desde X/LinkedIn

**Audiencia secundaria (mid intent):**
- Gerentes de clínicas/edificios buscando "validar identidad clientes"
- Founders de fintechs evaluando proveedores

**Audiencia terciaria (low intent):**
- Curiosos, estudiantes, competidores investigando

Diseñamos para los dos primeros perfiles.

---

## 2. CANAL DE ADQUISICIÓN Y FUNNEL

### Cómo llegarán los visitantes

**Inbound digital es el canal principal:**

1. **SEO orgánico** (Google) — 40% del tráfico esperado
2. **Contenido en X/LinkedIn** — 30%
3. **Referrals/word-of-mouth** — 15%
4. **Direct (escriben maxfind.app)** — 10%
5. **Publicidad pagada (Google Ads)** — 5%

### Funnel de conversión

```
Visitante landing
  ↓
Lee hero + features
  ↓
[Acción 1] Empieza signup gratis → Sandbox automático
  ↓
[Acción 2] Lee documentación → docs.maxfind.app
  ↓
[Acción 3] Pide demo (B2B enterprise)
```

### CTAs prioritarios

**CTA primario:** "Empezar gratis"
**CTA secundario:** "Ver documentación"
**CTA terciario:** "Pedir demo" (para enterprise)

---

## 3. STACK TÉCNICO

### Framework

**Astro v4+**
https://astro.build/

Razones:
- Performance brutal (HTML estático por default)
- Lighthouse scores 100/100 fácilmente
- SEO excelente
- Tailwind nativo
- Componentes en JSX/TSX cuando los necesitás
- Open source, gratis

**Alternativa considerada:** Next.js. Lo descartamos porque para una landing estática, Astro es más rápido y simple. Si el dashboard usa Next.js (ver `maxfindtech/dashboard`), no hay problema en usar tecnologías diferentes para distintos productos.

### Dependencias core

```json
{
  "dependencies": {
    "astro": "^4.5.0",
    "@astrojs/tailwind": "^5.1.0",
    "@astrojs/sitemap": "^3.1.0",
    "@astrojs/check": "^0.5.0",
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.10"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0"
  }
}
```

### Deploy

**Vercel** (plan free es suficiente).

- Auto-deploy en cada push a `main`
- Dominio custom: `maxfind.app` y `www.maxfind.app` (redirige al apex)
- Preview deploys en PRs
- Edge functions para forms de contacto

### Analytics

**Plausible Analytics** (privacy-friendly).
URL: plausible.io

Razones:
- No requiere cookie banner (no usa cookies)
- US$ 9/mes
- Dashboard simple
- Compatible con LGPD/Ley 29733

Alternativa gratuita: **Vercel Analytics** (incluido con Vercel free tier).

### Forms

**Resend** (mismo provider que usamos para emails transaccionales en el API).

- Endpoints `/api/contact` y `/api/demo` como server-side functions
- Procesamos y enviamos email a `hola@maxfind.app`
- Sin necesidad de DB para forms (van directo a email)

---

## 4. ESTRUCTURA DE PÁGINAS

### Mapa del sitio

```
maxfind.app
│
├── /                              # HOME (la página crítica)
│
├── /producto                      # Detalles del producto
│   ├── /verificacion-dni          # Feature: verificación DNI
│   ├── /validacion-identidad      # Feature: validación física
│   ├── /red-reputacion            # Feature: reputación cruzada
│   └── /sandbox                   # Feature: sandbox profesional
│
├── /soluciones                    # Por industria (LANDING SECUNDARIAS)
│   ├── /clinicas                  # "Verifica identidad de pacientes"
│   ├── /edificios                 # "Identifica visitantes en tu edificio"
│   ├── /fintech                   # "KYC simplificado para fintechs"
│   └── /comercio                  # "Evita fraudes en tu negocio"
│
├── /precios                       # Pricing detallado (CRÍTICA)
│
├── /blog                          # Blog SEO (futuro)
│   └── /[slug]                    # Posts individuales
│
├── /sobre                         # Sobre MAXFIND
│
├── /contacto                      # Formulario de contacto
│
├── /demo                          # Solicitar demo (enterprise)
│
└── /legal
    ├── /terminos                  # Términos de servicio
    └── /privacidad                # Política de privacidad
```

### Página HOME (`/`) — Arquitectura crítica

Esta es la página más importante del producto. Estructura propuesta de secciones:

```
[1. NAVBAR]
├── Logo MAXFIND.
├── Producto, Soluciones, Precios, Docs (link externo), Blog
└── Botones: "Iniciar sesión" + "Empezar gratis"

[2. HERO]
├── Headline: "Encuentra la identidad real detrás de cada DNI"
├── Subhead: "API de verificación de identidad para negocios serios en Perú"
├── CTAs: "Empezar gratis" (primario) + "Ver documentación" (secundario)
├── Trust line: "Sin tarjeta · Sandbox ilimitado · Trial 30 días"
└── Hero illustration (la del Gemini)

[3. SOCIAL PROOF]
└── Logos de empresas usándolo (cuando los tengamos)
    Mientras tanto: "Construido por developers, para developers"

[4. PROBLEM]
└── "Hoy validar identidad en Perú es..."
    - Tedioso (chequeo manual)
    - Lento (esperar respuestas)
    - Inseguro (sin garantías)
    - Caro (convenios RENIEC complicados)

[5. SOLUTION]
└── "MAXFIND lo resuelve en 3 pasos"
    1. Obtené tu API key gratis
    2. Hacé tu primera consulta en sandbox
    3. Cuando estés listo, pasá a producción

[6. FEATURES]
└── Grid 2x2 con los 4 features principales:
    - Verificación DNI rápida
    - Validación física (DNI real)
    - Red de reputación
    - Sandbox profesional

[7. CODE EXAMPLE]
└── Snippet de código con cURL/JS/Python mostrando una consulta
    "Es así de simple"

[8. PRICING TEASER]
└── 3 cards principales (Micro, Starter, Pro) + link a /precios

[9. INDUSTRIES]
└── "Para cada negocio que necesita verificar"
    Grid con: Clínicas, Edificios, Fintechs, Comercio

[10. TRUST/SECURITY]
└── "Datos protegidos según Ley 29733"
    - Banco de datos inscrito en MINJUS
    - Cumplimiento LGPD
    - SOC2 (futuro)

[11. CTA FINAL]
└── "¿Listo para empezar?"
    Botones: "Crear cuenta" + "Hablar con ventas"

[12. FOOTER]
├── Logo + tagline
├── Producto: links
├── Soluciones: links
├── Empresa: Sobre, Blog, Contacto, Demo
├── Recursos: Docs, Status, Changelog
├── Legal: Términos, Privacidad
└── Redes sociales + copyright
```

---

## 5. ESTÁNDARES DE CALIDAD VISUAL

### Paleta de marca (de brand-guidelines.md)

Idéntica al resto del ecosistema. NO desviarse.

```css
:root {
  /* Primarios */
  --color-primary: #1E1B4B;
  --color-accent: #06B6D4;

  /* Semánticos */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Neutros */
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-tertiary: #94A3B8;
  --color-border: #E2E8F0;
  --color-background: #FAFAF9;
  --color-background-secondary: #F1F5F9;
}

[data-theme='dark'] {
  --color-text-primary: #FAFAF9;
  --color-text-secondary: #CBD5E1;
  --color-text-tertiary: #94A3B8;
  --color-border: #334155;
  --color-background: #0F172A;
  --color-background-secondary: #1E293B;
}
```

### Tipografía

**Fuentes:** Geist (títulos), Inter (body), Geist Mono (código).

**Setup con Astro:**

```typescript
// En Layout.astro
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Inter:wght@400;500&family=Geist+Mono:wght@400&display=swap" rel="stylesheet">
```

**Escala tipográfica para landing:**

| Elemento | Mobile | Desktop | Peso | Family |
|---|---|---|---|---|
| Hero H1 | 36px | 64px | 500 | Geist |
| Section H2 | 28px | 48px | 500 | Geist |
| Card H3 | 20px | 24px | 500 | Geist |
| Body large | 16px | 18px | 400 | Inter |
| Body | 14px | 16px | 400 | Inter |
| Small | 12px | 14px | 400 | Inter |

**Reglas:**
- Letter-spacing -0.04em en Hero
- Letter-spacing -0.02em en H2/H3
- Line-height 1.1 en Hero, 1.2 en H2, 1.6 en body
- Sentence case siempre
- NUNCA pesos 600+ (no se ven bien con Geist)

---

## 6. ASSETS DE MARCA A USAR

### Assets que vamos a integrar (generados externamente)

Estos son los assets que generaste con Gemini que vamos a integrar en la landing:

| Asset | Ubicación esperada | Uso |
|---|---|---|
| **OG Image (1200x630)** | `public/og/og-image.png` | Meta tag para shares en redes |
| **Hero illustration (1200x800)** | `public/images/hero.png` | Sección Hero, lado derecho |
| **Banner LinkedIn (1584x396)** | Solo para LinkedIn, no en sitio | - |
| **Twitter cover (1500x500)** | Solo para Twitter, no en sitio | - |
| **Patrón background** | `public/images/pattern-bg.png` | Background sutil en algunas secciones |
| **Set de iconos features (6)** | `public/icons/features/` | Sección de features (6 cards) |
| **Empty state** | NO aplica a landing | (es para dashboard) |
| **Slide deck** | NO aplica a landing | (es para presentaciones) |
| **One-pager** | `public/downloads/maxfind-one-pager.pdf` | Botón "Descargar one-pager" |

### Assets del brand kit (vectoriales, ya existentes)

Estos los copiamos del repo `maxfindtech/api/public/brand/`:

```
public/brand/
├── logo-wordmark-light.svg
├── logo-wordmark-dark.svg
├── logo-wordmark-mono.svg
├── logo-header.svg
├── icon-app.svg
└── favicon.svg
```

### Implementación de assets en componentes

**Hero section:**

```astro
---
// src/sections/Hero.astro
---
<section class="hero">
  <div class="hero-content">
    <h1>Encuentra la identidad real detrás de cada DNI</h1>
    <p>API de verificación de identidad para negocios serios en Perú</p>
    <div class="cta-group">
      <a href="/signup" class="btn-primary">Empezar gratis</a>
      <a href="https://docs.maxfind.app" class="btn-secondary">Ver documentación</a>
    </div>
    <p class="trust-line">Sin tarjeta · Sandbox ilimitado · Trial 30 días</p>
  </div>
  <div class="hero-illustration">
    <img
      src="/images/hero.png"
      alt="Visualización abstracta de verificación de identidad"
      width="1200"
      height="800"
      loading="eager"
      fetchpriority="high"
    />
  </div>
</section>
```

**Meta tags para OG image:**

```astro
---
// src/layouts/Layout.astro
const { title, description, ogImage = "/og/og-image.png" } = Astro.props;
---
<head>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={Astro.url.href} />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</head>
```

**Sección de Features con iconos custom:**

```astro
---
// src/sections/Features.astro
const features = [
  {
    icon: "/icons/features/dni-rapida.svg",
    title: "Verificación rápida",
    description: "Consultá cualquier DNI en menos de un segundo"
  },
  {
    icon: "/icons/features/validation.svg",
    title: "Validación física",
    description: "Compará el DNI físico con el padrón oficial"
  },
  {
    icon: "/icons/features/network.svg",
    title: "Red de reputación",
    description: "Compartí alertas con otros negocios de tu industria"
  },
  {
    icon: "/icons/features/sandbox.svg",
    title: "Sandbox profesional",
    description: "Desarrollá sin tocar datos reales"
  }
];
---
<section class="features">
  <h2>Todo lo que necesitás para verificar identidad</h2>
  <div class="features-grid">
    {features.map(feature => (
      <article class="feature-card">
        <img src={feature.icon} alt="" width="48" height="48" />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </article>
    ))}
  </div>
</section>
```

---

## 7. ESTRUCTURA DEL PROYECTO

```
maxfind-landing/
├── CLAUDE.md                          # Este archivo
├── README.md
├── package.json
├── astro.config.mjs                   # Config Astro
├── tailwind.config.mjs                # Config Tailwind
├── tsconfig.json
├── .gitignore
├── .env.example
│
├── public/
│   ├── brand/                         # Logos vectoriales del kit
│   │   ├── logo-wordmark-light.svg
│   │   ├── logo-wordmark-dark.svg
│   │   ├── favicon.svg
│   │   └── apple-touch-icon.png
│   │
│   ├── og/
│   │   └── og-image.png               # OG image generada por Gemini
│   │
│   ├── images/
│   │   ├── hero.png                   # Hero illustration de Gemini
│   │   ├── pattern-bg.png             # Patrón sutil de Gemini
│   │   └── code-example.png           # Screenshot de code editor (opcional)
│   │
│   ├── icons/
│   │   └── features/                  # 6 iconos custom de Gemini
│   │       ├── dni-rapida.svg
│   │       ├── validation.svg
│   │       ├── network.svg
│   │       ├── sandbox.svg
│   │       ├── webhooks.svg
│   │       └── sla.svg
│   │
│   └── downloads/
│       └── maxfind-one-pager.pdf      # One-pager PDF para descarga
│
├── src/
│   ├── layouts/
│   │   ├── Layout.astro               # Layout base con head, fonts, meta
│   │   └── BlogLayout.astro           # Layout para posts del blog
│   │
│   ├── components/                    # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── CodeBlock.astro            # Code samples con highlighting
│   │   ├── PricingCard.astro
│   │   ├── Testimonial.astro          # Para testimonials (futuro)
│   │   ├── FAQ.astro
│   │   └── BadgePill.astro            # Pills tipo "Nuevo", "Beta"
│   │
│   ├── sections/                      # Secciones grandes de la landing
│   │   ├── Hero.astro
│   │   ├── SocialProof.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── Features.astro
│   │   ├── CodeExample.astro
│   │   ├── PricingTeaser.astro
│   │   ├── Industries.astro
│   │   ├── TrustSecurity.astro
│   │   └── CTAFinal.astro
│   │
│   ├── pages/
│   │   ├── index.astro                # Home
│   │   │
│   │   ├── producto/
│   │   │   ├── index.astro            # Producto overview
│   │   │   ├── verificacion-dni.astro
│   │   │   ├── validacion-identidad.astro
│   │   │   ├── red-reputacion.astro
│   │   │   └── sandbox.astro
│   │   │
│   │   ├── soluciones/
│   │   │   ├── index.astro
│   │   │   ├── clinicas.astro
│   │   │   ├── edificios.astro
│   │   │   ├── fintech.astro
│   │   │   └── comercio.astro
│   │   │
│   │   ├── precios.astro
│   │   ├── sobre.astro
│   │   ├── contacto.astro
│   │   ├── demo.astro
│   │   │
│   │   ├── blog/
│   │   │   ├── index.astro            # Index del blog
│   │   │   └── [slug].astro           # Posts dinámicos
│   │   │
│   │   ├── legal/
│   │   │   ├── terminos.astro
│   │   │   └── privacidad.astro
│   │   │
│   │   └── api/                       # Server endpoints
│   │       ├── contact.ts             # POST forms de contacto
│   │       └── demo.ts                # POST requests de demo
│   │
│   ├── content/                       # Content collections (Astro)
│   │   ├── config.ts                  # Schemas de collections
│   │   └── blog/                      # Posts del blog en MDX
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── constants.ts               # APP_URL, links, etc.
│   │   ├── resend.ts                  # Setup de Resend
│   │   └── seo.ts                     # Helpers SEO
│   │
│   ├── styles/
│   │   └── global.css                 # CSS global + variables
│   │
│   └── env.d.ts                       # Types de variables de entorno
│
└── scripts/
    └── generate-sitemap.ts            # Script de sitemap (opcional)
```

---

## 8. COPY DE LA HOME (NO INVENTAR, USAR ESTO)

### Hero

**Headline:**
> Encuentra la identidad real detrás de cada DNI

**Subheadline:**
> API de verificación de identidad para negocios serios en Perú. Datos reales en milisegundos, sandbox profesional gratuito.

**CTA primario:** Empezar gratis →
**CTA secundario:** Ver documentación

**Trust line:**
> Sin tarjeta requerida · Sandbox ilimitado · Trial de 30 días con 500 consultas reales

### Problem

**Título:** Hoy validar identidad en Perú es complicado

**4 puntos de dolor:**

1. **Tedioso** — Chequear DNIs manualmente cliente por cliente
2. **Lento** — Esperar respuestas de servicios públicos que demoran
3. **Inseguro** — Sin forma de detectar DNIs adulterados o falsos
4. **Caro** — Convenios RENIEC requieren personas jurídicas, certificados y meses de trámite

### Solution

**Título:** MAXFIND lo resuelve en 3 pasos

1. **Creá tu cuenta gratis** — Acceso inmediato al sandbox profesional sin tarjeta
2. **Hacé tu primera consulta** — En menos de 5 minutos siguiendo la documentación
3. **Cuando estés listo, pasá a producción** — Trial de 30 días para validar con datos reales

### Features (4 cards)

**Verificación rápida**
> Consultá cualquier DNI peruano en menos de un segundo. Datos directos del padrón oficial RENIEC.

**Validación física**
> ¿El DNI que te muestra el cliente es real? Comparamos el documento físico contra el padrón oficial en tiempo real.

**Red de reputación**
> Compartí alertas con otros negocios de tu industria. Si un cliente fue problemático en otra clínica, vos te enterás antes.

**Sandbox profesional**
> Desarrollá y testeá sin tocar datos reales. DNIs mock predecibles para automatizar tus tests.

### Code Example

```bash
# Hacer tu primera consulta es simple
curl -H "Authorization: Bearer mfx_live_xxxxxxxxxxxx" \
  https://api.maxfind.app/v1/dni/12345678

# Respuesta inmediata
{
  "success": true,
  "data": {
    "dni": "12345678",
    "nombres": "JUAN CARLOS",
    "apellido_paterno": "PEREZ",
    "apellido_materno": "GARCIA"
  }
}
```

### Industries (4 cards)

**Clínicas y consultorios**
> Validá la identidad de tus pacientes en admisión. Detectá DNIs falsos antes de atender.

**Edificios y condominios**
> Identificá visitantes, controlá accesos. Conocé quién entra a tu propiedad.

**Fintechs**
> KYC simplificado para tu producto financiero. Onboarding rápido sin sacrificar seguridad.

**Comercio formal**
> Verificá compradores en operaciones de valor. Reducí fraude en tus ventas.

### Trust/Security

**Título:** Construido para cumplir con la Ley peruana

**3 puntos:**
- ✓ Banco de datos `maxfind_users` inscrito en MINJUS
- ✓ Cumplimiento con Ley 29733 de Protección de Datos
- ✓ Auditoría completa de cada consulta y acceso
- ✓ Datos cifrados en tránsito y en reposo

### CTA Final

**Título:** ¿Listo para empezar?

**Subtítulo:** Más de [N] negocios ya verifican identidades con MAXFIND.
(Reemplazar [N] con número real cuando lo tengamos. Hasta entonces, omitir esta línea.)

**Botones:**
- Crear cuenta gratis →
- Hablar con ventas

---

## 9. SEO Y METADATA

### Página por página

Cada página tiene su `<title>` y `<meta description>` optimizados:

**Home (`/`):**
```html
<title>MAXFIND — Verificación de identidad por DNI en Perú</title>
<meta name="description" content="API de verificación de identidad para negocios en Perú. Consultá DNIs en milisegundos, validá identidad física, accedé a red de reputación. Sandbox gratuito.">
```

**Precios:**
```html
<title>Precios — MAXFIND</title>
<meta name="description" content="Planes desde S/ 19/mes. Sandbox profesional gratis para siempre. Trial de producción de 30 días. Sin compromiso de permanencia.">
```

**Verificación DNI:**
```html
<title>Verificación de DNI rápida y confiable — MAXFIND</title>
<meta name="description" content="Consultá cualquier DNI peruano contra el padrón oficial RENIEC en menos de un segundo. API REST simple, documentación clara, sandbox profesional.">
```

### Keywords objetivo (research SEO Perú)

**High volume:**
- "API DNI Perú"
- "Consulta DNI online"
- "Verificación de identidad Perú"
- "API RENIEC"

**Medium volume:**
- "Validar DNI Perú"
- "Padrón RENIEC API"
- "DNI digital Perú"
- "Verificar identidad cliente"

**Long tail (sweet spot SEO):**
- "Cómo verificar DNI peruano API"
- "Alternativa convenio RENIEC"
- "KYC para fintech Perú"
- "Validar identidad pacientes clínica"
- "Verificación DNI tiempo real Perú"

### Schema.org structured data

Implementar en todas las páginas relevantes:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MAXFIND",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "19.00",
    "priceCurrency": "PEN"
  }
}
```

---

## 10. PERFORMANCE Y CORE WEB VITALS

### Objetivos no negociables

| Métrica | Objetivo | Crítico |
|---|---|---|
| Lighthouse Performance | 100 | >95 |
| Lighthouse SEO | 100 | >95 |
| Lighthouse Accessibility | 100 | >95 |
| LCP (Largest Contentful Paint) | <1.5s | <2.5s |
| FID (First Input Delay) | <100ms | <100ms |
| CLS (Cumulative Layout Shift) | <0.1 | <0.1 |
| Bundle JS inicial | <50KB | <100KB |

### Estrategia de performance

**1. HTML estático por default**
Astro genera HTML estático para todas las páginas. Cero JavaScript en el primer load.

**2. Imágenes optimizadas**
- Hero illustration en WebP/AVIF con fallback PNG
- Lazy loading en imágenes below-the-fold
- Width y height explícitos (evita CLS)
- Usar `<Image>` de Astro para optimización automática

**3. Fonts optimizadas**
- Preconnect a fonts.googleapis.com
- `display=swap` en font-face
- Solo cargar pesos 400 y 500 de Geist e Inter

**4. CSS optimizado**
- Tailwind con purge agresivo
- Critical CSS inline en `<head>`
- Resto de CSS lazy-loaded

**5. JavaScript mínimo**
- Sin frameworks pesados (sin React en homepage)
- Componentes interactivos solo donde son necesarios (forms)
- Usar Astro Islands cuando sea necesario

### Estructura crítica del Layout

```astro
---
// src/layouts/Layout.astro
const { title, description, ogImage = "/og/og-image.png" } = Astro.props;
---
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />

  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Fonts -->
  <link
    href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Inter:wght@400;500&family=Geist+Mono:wght@400&display=swap"
    rel="stylesheet"
  />

  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={Astro.url.href} />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Canonical -->
  <link rel="canonical" href={Astro.url.href} />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />
</head>
<body>
  <slot />
</body>
</html>
```

---

## 11. ROADMAP DE EJECUCIÓN

### Sprint 1 — Setup (3-4 días)

1. `npm create astro@latest` con TypeScript estricto
2. Instalar y configurar Tailwind con paleta de marca
3. Configurar fonts (Geist, Inter, Geist Mono)
4. Crear `Layout.astro` base con meta tags
5. Componente `Navbar.astro` funcional
6. Componente `Footer.astro` funcional
7. Setup de deploy en Vercel con dominio custom (`maxfind.app`)
8. Copiar assets de marca a `public/brand/`

### Sprint 2 — Home page (1 semana)

9. Componente `Hero.astro` con hero illustration de Gemini
10. Componente `Problem.astro`
11. Componente `Solution.astro`
12. Componente `Features.astro` con iconos custom de Gemini
13. Componente `CodeExample.astro`
14. Componente `Industries.astro`
15. Componente `TrustSecurity.astro`
16. Componente `CTAFinal.astro`
17. Integración completa en `index.astro`

### Sprint 3 — Pricing y producto (1 semana)

18. Página `/precios` con cards detalladas + FAQ
19. Página `/producto/verificacion-dni`
20. Página `/producto/validacion-identidad`
21. Página `/producto/red-reputacion`
22. Página `/producto/sandbox`

### Sprint 4 — Soluciones por industria (1 semana)

23. Página `/soluciones/clinicas`
24. Página `/soluciones/edificios`
25. Página `/soluciones/fintech`
26. Página `/soluciones/comercio`

### Sprint 5 — Forms y conversión (3-4 días)

27. Página `/contacto` con form
28. Página `/demo` con form de calificación
29. Endpoint `/api/contact.ts` (server-side)
30. Endpoint `/api/demo.ts` (server-side)
31. Integración con Resend para enviar emails

### Sprint 6 — Sobre, legal y blog (1 semana)

32. Página `/sobre`
33. Página `/legal/terminos`
34. Página `/legal/privacidad`
35. Setup de content collection para `/blog`
36. Primer post del blog (opcional)

### Sprint 7 — Optimización y SEO (3-4 días)

37. Lighthouse audit y fixes
38. Schema.org structured data
39. Sitemap automático
40. robots.txt
41. Setup de Plausible Analytics o Vercel Analytics

### Sprint 8 — Polish (3-4 días)

42. Animaciones sutiles (scroll-triggered)
43. Loading states en forms
44. Error states
45. Dark mode (opcional, solo si hay tiempo)
46. Final QA

---

## 12. VARIABLES DE ENTORNO

```env
# Aplicación
PUBLIC_API_URL=https://api.maxfind.app
PUBLIC_APP_URL=https://app.maxfind.app
PUBLIC_DOCS_URL=https://docs.maxfind.app

# Resend (server-side, no PUBLIC)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
CONTACT_EMAIL=hola@maxfind.app

# Analytics (opcional)
PUBLIC_PLAUSIBLE_DOMAIN=maxfind.app
```

---

## 13. COMANDOS ÚTILES

```bash
# Setup inicial
npm install
npm run dev          # Dev server en localhost:4321

# Producción
npm run build
npm run preview      # Preview del build local

# Linting y type check
npm run lint
npm run astro check  # Type check de Astro

# Deploy
git push origin main # Auto-deploy en Vercel
```

---

## 14. INTEGRACIÓN CON OTROS REPOS

### Links a otros productos del ecosistema

```typescript
// src/lib/constants.ts
export const URLS = {
  APP: 'https://app.maxfind.app',          // Dashboard
  API: 'https://api.maxfind.app',          // API
  DOCS: 'https://docs.maxfind.app',        // Docs
  SIGNUP: 'https://app.maxfind.app/signup',
  LOGIN: 'https://app.maxfind.app/login',
} as const;
```

### Flow de signup

CTA "Empezar gratis" → `https://app.maxfind.app/signup`

El signup completo (form, validación, creación de tokens) vive en el dashboard, NO en landing.

### Status page

Link en footer apunta a `https://status.maxfind.app` (futuro, con Statuspage o BetterStack).

---

## 15. CONSIDERACIONES DE COPY Y TONO

### Voz de marca (de brand-guidelines.md)

**Profesional pero humano.** Tutea al lector. Sin floritura corporativa.

### Reglas de copy

✅ **SÍ:**
- Frases cortas y directas
- Beneficios concretos, no features abstractos
- Datos reales cuando los tengamos ("Más de X clientes")
- Sentence case en todos los headings

❌ **NO:**
- "Solución integral", "líder del mercado", "innovador"
- "Le ofrecemos a usted nuestra plataforma..."
- Title Case en headings
- Emojis decorativos (sí podés usar 1-2 puntuales en pricing)

### Ejemplos de buena vs mala copy

**Mal:**
> Nuestra innovadora plataforma de verificación de identidad permite a las empresas peruanas optimizar sus procesos de KYC.

**Bien:**
> Verificá identidades en milisegundos. Sin papeleo, sin demoras, sin sorpresas.

**Mal:**
> Le ofrecemos a usted una completa gama de planes adaptados a sus necesidades.

**Bien:**
> Elegí el plan que te convenga. Empezá gratis con sandbox.

---

## 16. RESPONSIVE DESIGN

### Breakpoints

```javascript
// tailwind.config.mjs
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
}
```

### Mobile-first siempre

Diseñar primero para mobile (375px), después escalar.

### Touch targets

Botones y links: mínimo 44x44px en mobile.

---

## 17. CHECKLIST PARA CADA PÁGINA NUEVA

Antes de hacer commit, verificar:

- [ ] Tiene `<title>` y `<meta description>` únicos
- [ ] Tiene OG image apropiada
- [ ] Funciona en mobile (375px)
- [ ] Lighthouse Performance >95
- [ ] CTAs visibles above-the-fold
- [ ] No tiene typos
- [ ] No tiene jerga corporativa
- [ ] Imágenes con `alt` text
- [ ] Imágenes con `width`/`height` explícitos
- [ ] Links externos con `rel="noopener"`

---

## 18. REFERENCIAS Y RECURSOS

### Inspiración de landings

- Stripe: https://stripe.com — la cumbre del SaaS landing
- Linear: https://linear.app — minimalismo premium
- Plaid: https://plaid.com — API-first como nosotros
- Resend: https://resend.com — modern dev tool branding
- Vercel: https://vercel.com — performance obsession

### Documentación

- Astro: https://docs.astro.build
- Tailwind: https://tailwindcss.com/docs
- Web.dev (Core Web Vitals): https://web.dev/vitals/

### SEO

- Google Search Console (cuando despleguemos)
- Ahrefs / SEMrush para keyword research

---

**Producto:** MAXFIND Landing
**Repo:** maxfindtech/landing
**URL final:** maxfind.app
**Stack:** Astro + Tailwind + Resend
**Deploy:** Vercel
**Última actualización:** 2026-05-27
**Versión del documento:** 1.0
**Owner técnico:** [Tu nombre acá]
