/**
 * Security utilities for the contact form API.
 * Provides reCAPTCHA verification, HTML escaping, and payload validation.
 */

const VALID_NEED_KEYS = [
  "consulting",
  "ai",
  "web",
  "mobile",
  "customSoftware",
  "digital",
] as const;

type NeedKey = (typeof VALID_NEED_KEYS)[number];

export interface ContactPayload {
  nombre: string;
  empresa?: string;
  correo: string;
  telefono?: string;
  necesidad?: string;
  mensaje: string;
  recaptchaToken: string;
  website?: string;
  formStartedAt?: number;
}

export interface ValidationResult {
  valid: boolean;
  reason?: string;
}

const MAX_LENGTHS = {
  nombre: 120,
  empresa: 120,
  correo: 254,
  telefono: 40,
  mensaje: 4000,
} as const;

const MIN_FORM_TIME_MS = 3000;
const MAX_URLS_IN_MESSAGE = 3;

/**
 * Escapes HTML special characters to prevent XSS in email templates.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Counts the number of URLs in a string (http, https, www).
 */
function countUrls(text: string): number {
  const urlPattern = /https?:\/\/|www\./gi;
  const matches = text.match(urlPattern);
  return matches ? matches.length : 0;
}

/**
 * Validates the contact form payload for required fields, lengths, honeypot, timing, and spam heuristics.
 * Returns a generic rejection to avoid giving bots information.
 */
export function validateContactPayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { valid: false, reason: "invalid_body" };
  }

  const payload = body as Record<string, unknown>;

  const nombre = typeof payload.nombre === "string" ? payload.nombre.trim() : "";
  const correo = typeof payload.correo === "string" ? payload.correo.trim() : "";
  const mensaje = typeof payload.mensaje === "string" ? payload.mensaje.trim() : "";
  const recaptchaToken = typeof payload.recaptchaToken === "string" ? payload.recaptchaToken.trim() : "";
  const empresa = typeof payload.empresa === "string" ? payload.empresa.trim() : "";
  const telefono = typeof payload.telefono === "string" ? payload.telefono.trim() : "";
  const necesidad = typeof payload.necesidad === "string" ? payload.necesidad.trim() : "";
  const website = typeof payload.website === "string" ? payload.website : "";
  const formStartedAt = typeof payload.formStartedAt === "number" ? payload.formStartedAt : null;

  if (!nombre || !correo || !mensaje) {
    return { valid: false, reason: "missing_required" };
  }

  if (!recaptchaToken) {
    return { valid: false, reason: "missing_captcha" };
  }

  if (website) {
    return { valid: false, reason: "honeypot_filled" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return { valid: false, reason: "invalid_email" };
  }

  if (nombre.length > MAX_LENGTHS.nombre) {
    return { valid: false, reason: "nombre_too_long" };
  }
  if (empresa.length > MAX_LENGTHS.empresa) {
    return { valid: false, reason: "empresa_too_long" };
  }
  if (correo.length > MAX_LENGTHS.correo) {
    return { valid: false, reason: "correo_too_long" };
  }
  if (telefono.length > MAX_LENGTHS.telefono) {
    return { valid: false, reason: "telefono_too_long" };
  }
  if (mensaje.length > MAX_LENGTHS.mensaje) {
    return { valid: false, reason: "mensaje_too_long" };
  }

  if (formStartedAt !== null) {
    const elapsed = Date.now() - formStartedAt;
    if (elapsed < MIN_FORM_TIME_MS) {
      return { valid: false, reason: "submitted_too_fast" };
    }
  }

  if (countUrls(mensaje) > MAX_URLS_IN_MESSAGE) {
    return { valid: false, reason: "too_many_urls" };
  }

  if (necesidad && !VALID_NEED_KEYS.includes(necesidad as NeedKey)) {
    return { valid: false, reason: "invalid_necesidad" };
  }

  return { valid: true };
}

/**
 * Verifies the reCAPTCHA v2 token with Google's siteverify API.
 * In development with RECAPTCHA_BYPASS=true, skips verification (never use in production).
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (process.env.RECAPTCHA_BYPASS === "true" && process.env.NODE_ENV !== "production") {
    console.warn("[contact-security] reCAPTCHA bypass enabled (dev only)");
    return true;
  }

  if (!secretKey) {
    console.error("[contact-security] RECAPTCHA_SECRET_KEY not configured");
    return false;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    if (!response.ok) {
      console.error("[contact-security] reCAPTCHA API error:", response.status);
      return false;
    }

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("[contact-security] reCAPTCHA verification failed:", error);
    return false;
  }
}

/**
 * Extracts and sanitizes validated payload fields for use in email templates.
 */
export function sanitizePayload(body: ContactPayload) {
  return {
    nombre: escapeHtml(body.nombre.trim()),
    empresa: body.empresa ? escapeHtml(body.empresa.trim()) : "",
    correo: escapeHtml(body.correo.trim()),
    telefono: body.telefono ? escapeHtml(body.telefono.trim()) : "",
    necesidad: body.necesidad?.trim() || "",
    mensaje: escapeHtml(body.mensaje.trim()),
  };
}
