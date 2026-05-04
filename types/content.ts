/** Iconos para tarjetas de servicio en home (ver `ServiceCardIcon`). */
export type ServiceCardIconId =
  | "consulting"
  | "ai"
  | "web"
  | "mobile"
  | "custom-software"
  | "digital";

export type ServiceCardContent = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
} & (
  | { index: string; icon?: undefined }
  | { icon: ServiceCardIconId; index?: undefined }
);

export type BreadcrumbItem =
  | { label: string; href: string }
  | { label: string; current: true };
