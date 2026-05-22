# Seven7 — landing (Next.js)

Sitio marketing con rutas por idioma (`/es`, `/en`).

## Stack

| Paquete     | Versión   |
|------------|-----------|
| Next.js    | 16.2.4    |
| React      | 19.2.4    |
| TypeScript | 5.x       |
| Tailwind   | 4.2.4     |
| next-intl  | ^4.11.0   |

## Tipografía

La fuente se carga con [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts): **[Inter](https://fonts.google.com/specimen/Inter)** (Google Fonts), configurada en `app/[locale]/layout.tsx` y referenciada en `app/globals.css` como `--font-sans`.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000); la raíz redirige al locale por defecto.

El script `dev` usa `next dev --webpack` (evita fallos de Turbopack en algunos entornos). El build usa el bundler por defecto de `next build`.

Antes de `dev` / `build` se ejecuta `sync-assets` (script en `package.json`).

## Build y producción

```bash
npm run build
npm start
```

## Variables de entorno

Copia `.env.example` a `.env` y configura las siguientes variables:

### SMTP (formulario de contacto)

| Variable | Descripción |
|----------|-------------|
| `SMTP_HOST` | Servidor SMTP (ej. `mail.tudominio.com`) |
| `SMTP_PORT` | Puerto SMTP (normalmente `465` para SSL) |
| `SMTP_USER` | Usuario / correo de envío |
| `SMTP_PASSWORD` | Contraseña del buzón SMTP |
| `CONTACT_EMAIL` | Correo que recibe las consultas |

### reCAPTCHA v2

Protege el formulario de spam. Crea las claves en [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin) (tipo v2 checkbox).

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Clave pública (widget en el navegador) |
| `RECAPTCHA_SECRET_KEY` | Clave secreta (verificación en servidor) |

En desarrollo sin claves, puedes usar `RECAPTCHA_BYPASS=true` para omitir la verificación (nunca en producción).

## Despliegue

Compatible con [Vercel](https://vercel.com/) u otro hosting Node para Next.js. Configura las variables de entorno en el panel del proveedor.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
