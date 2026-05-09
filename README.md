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

## Despliegue

Compatible con [Vercel](https://vercel.com/) u otro hosting Node para Next.js. Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
