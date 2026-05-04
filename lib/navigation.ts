export const MAIN_NAV = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/ia", label: "Soluciones IA" },
  { href: "/desarrollo-web", label: "Web y Apps" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type MainNavHref = (typeof MAIN_NAV)[number]["href"];

export function isNavActive(pathname: string, href: MainNavHref): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  if (href === "/desarrollo-web") {
    return (
      pathname === "/desarrollo-web" || pathname === "/aplicaciones-moviles"
    );
  }
  if (href === "/services") {
    return (
      pathname === "/services" ||
      pathname === "/consultoria-tecnologica" ||
      pathname === "/software-medida" ||
      pathname === "/transformacion-digital"
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
