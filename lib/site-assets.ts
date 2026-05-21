/**
 * Rutas públicas de medios (`public/assets`, vía `npm run sync-assets`).
 */
export const SITE_ASSETS = {
  logo: "/assets/" + encodeURIComponent("Logo Curvas Seven_letral.svg"),
  logoWhite: "/assets/" + encodeURIComponent("Logo Seven Blanco.png"),
} as const;

export const BANNERS = {
  home: "/assets/banner/banner-home.png",
  services: "/assets/banner/banner-services.png",
  ia: "/assets/banner/banner-ia.png",
  web: "/assets/banner/banner-web.png",
  apps: "/assets/banner/banner-apps.png",
  software: "/assets/banner/banner-software.png",
  consulting: "/assets/banner/banner-home.png",
  digital: "/assets/banner/banner-software.png",
  contact: "/assets/banner/banner-home.png",
} as const;

export type BannerId = keyof typeof BANNERS;

export function getHeroBackground(bannerId: BannerId = "home") {
  const banner = BANNERS[bannerId];
  return `linear-gradient(90deg, rgba(245,247,250,0.84) 0%, rgba(245,247,250,0.68) 34%, rgba(245,247,250,0.30) 60%, rgba(245,247,250,0.18) 100%), linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.04) 44%, rgba(17,32,52,0.05) 100%), url('${banner}')`;
}

export function getPageHeroBackground(bannerId: BannerId = "services") {
  const banner = BANNERS[bannerId];
  return `linear-gradient(90deg, rgba(245,247,250,0.92) 0%, rgba(245,247,250,0.78) 40%, rgba(245,247,250,0.55) 68%, rgba(245,247,250,0.42) 100%), url('${banner}')`;
}

export function getContactBackground(bannerId: BannerId = "contact") {
  const banner = BANNERS[bannerId];
  return `linear-gradient(180deg, rgba(248,250,252,0.97) 0%, rgba(226,232,240,0.96) 42%, rgba(203,213,225,0.95) 100%), url('${banner}')`;
}

/** @deprecated Usar getHeroBackground() */
export const HERO_BACKGROUND_LAYERS = getHeroBackground("home");

/** @deprecated Usar getPageHeroBackground() */
export const PAGE_HERO_BACKGROUND_LAYERS = getPageHeroBackground("services");

/** @deprecated Usar getContactBackground() */
export const CONTACT_SECTION_BACKGROUND_LAYERS = getContactBackground("contact");
