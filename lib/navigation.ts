import { locales } from "@/i18n/config";

export type MainNavHref =
  | "/"
  | "/services"
  | "/ia"
  | "/desarrollo-web"
  | "/transformacion-digital";

function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as "es" | "en")) {
    return "/" + segments.slice(1).join("/") || "/";
  }
  return pathname;
}

export function isNavActive(pathname: string, href: MainNavHref): boolean {
  const cleanPath = stripLocale(pathname);

  if (href === "/") {
    return cleanPath === "/" || cleanPath === "";
  }
  if (href === "/desarrollo-web") {
    return (
      cleanPath === "/desarrollo-web" || cleanPath === "/aplicaciones-moviles"
    );
  }
  if (href === "/services") {
    return (
      cleanPath === "/services" ||
      cleanPath === "/consultoria-tecnologica" ||
      cleanPath === "/software-medida"
    );
  }
  if (href === "/transformacion-digital") {
    return cleanPath === "/transformacion-digital";
  }
  return cleanPath === href || cleanPath.startsWith(`${href}/`);
}
