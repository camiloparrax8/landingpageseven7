/**
 * Rutas públicas de medios (`public/assets`, vía `npm run sync-assets`).
 */
export const SITE_ASSETS = {
  logo: "/assets/seven7-logo.png",
  /** Logo claro sobre fondos oscuros (footer). Archivo en `public/assets/`. */
  logoWhite:
    "/assets/" + encodeURIComponent("Logo Seven Blanco.png"),
  /** Banner hero (Seven 2026 · Caminos). */
  banner: "/assets/seven7-banner.png",
} as const;

/** Fondos con imagen (hero inicio y cabeceras internas). */
export const HERO_BACKGROUND_LAYERS = `linear-gradient(90deg, rgba(245,247,250,0.84) 0%, rgba(245,247,250,0.68) 34%, rgba(245,247,250,0.30) 60%, rgba(245,247,250,0.18) 100%), linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.04) 44%, rgba(17,32,52,0.05) 100%), url('${SITE_ASSETS.banner}')`;

export const PAGE_HERO_BACKGROUND_LAYERS = `linear-gradient(90deg, rgba(245,247,250,0.92) 0%, rgba(245,247,250,0.78) 40%, rgba(245,247,250,0.55) 68%, rgba(245,247,250,0.42) 100%), url('${SITE_ASSETS.banner}')`;

/** Contacto: banner con lavado gris muy opaco (casi sólido, apenas se asoma la imagen). */
export const CONTACT_SECTION_BACKGROUND_LAYERS = `linear-gradient(180deg, rgba(248,250,252,0.97) 0%, rgba(226,232,240,0.96) 42%, rgba(203,213,225,0.95) 100%), url('${SITE_ASSETS.banner}')`;
