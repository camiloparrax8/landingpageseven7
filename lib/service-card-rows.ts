import type { ServiceCardIconId } from "@/types/content";

/** Orden y rutas de las tarjetas de servicios (home y `/services`). */
export const SERVICE_CARD_ROWS: readonly {
  href: string;
  icon: ServiceCardIconId;
  key:
    | "consulting"
    | "ai"
    | "web"
    | "mobile"
    | "customSoftware"
    | "digital";
}[] = [
  { href: "/consultoria-tecnologica", icon: "consulting", key: "consulting" },
  { href: "/ia", icon: "ai", key: "ai" },
  { href: "/desarrollo-web", icon: "web", key: "web" },
  { href: "/aplicaciones-moviles", icon: "mobile", key: "mobile" },
  { href: "/software-medida", icon: "custom-software", key: "customSoftware" },
  { href: "/transformacion-digital", icon: "digital", key: "digital" },
];
