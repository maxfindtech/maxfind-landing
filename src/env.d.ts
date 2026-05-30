/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_APP_URL: string;
  readonly PUBLIC_DOCS_URL: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
