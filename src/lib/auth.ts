import { AUTH } from './constants';

// Cliente de auth para el navegador. Postea a la API y deja que ésta
// emita la sesión (cookie en .maxfind.app) y/o devuelva un token.
//
// CONTRATO ASUMIDO (ajustar si tu API difiere):
//   POST {apiBase}{registerPath}  body: { name, email, password, company? }
//   POST {apiBase}{loginPath}     body: { email, password }
//   Éxito  -> status 2xx. Si la respuesta trae { token }, se guarda.
//   Error  -> status >= 400, body { error?: string, message?: string }.
// Se usa credentials:'include' para que la API pueda setear cookie cross-subdominio.

export type AuthResult = { ok: true } | { ok: false; error: string };

type RegisterPayload = { name: string; email: string; password: string; company?: string };
type LoginPayload = { email: string; password: string };

async function postJson(path: string, body: unknown): Promise<AuthResult> {
  try {
    const res = await fetch(`${AUTH.apiBase}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      let message = 'No pudimos completar la operación. Intentá de nuevo.';
      try {
        const data = await res.json();
        message = data.error ?? data.message ?? message;
      } catch {
        // respuesta sin JSON; usamos el mensaje por defecto
      }
      return { ok: false, error: message };
    }

    // Si la API devuelve un token en el body, lo persistimos para el dashboard.
    try {
      const data = await res.json();
      if (data?.token) {
        localStorage.setItem('mfx_token', data.token);
      }
    } catch {
      // sin body JSON: la sesión va por cookie, está bien
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Error de red. Revisá tu conexión e intentá de nuevo.' };
  }
}

export const register = (payload: RegisterPayload) => postJson(AUTH.registerPath, payload);
export const login = (payload: LoginPayload) => postJson(AUTH.loginPath, payload);
export const recover = (payload: { email: string }) => postJson(AUTH.recoverPath, payload);
export const redirectAfterAuth = () => {
  window.location.href = AUTH.redirectAfterAuth;
};
