import type { ServiceCardContent } from "@/types/content";

export const HOME_HERO_POINTS = [
  {
    icon: "web",
    title: "Web y plataformas",
    text: "Experiencias claras, funcionales y listas para crecer.",
  },
  {
    icon: "custom-software",
    title: "Apps y software",
    text: "Desarrollo útil, escalable y adaptado a procesos reales.",
  },
  {
    icon: "ai",
    title: "IA aplicada",
    text: "Automatización, asistentes y eficiencia con foco en negocio.",
  },
] as const;

export const HOME_SERVICE_CARDS: ServiceCardContent[] = [
  {
    icon: "consulting",
    title: "Consultoría tecnológica",
    description:
      "Te ayudamos a evaluar, ordenar e implementar la tecnología que realmente necesita tu empresa, con una visión práctica y aterrizada.",
    href: "/consultoria-tecnologica",
    linkLabel: "Conocer más",
  },
  {
    icon: "ai",
    title: "Inteligencia artificial",
    description:
      "Aplicamos IA para automatizar procesos, mejorar decisiones, crear asistentes y generar más eficiencia en tu operación.",
    href: "/ia",
    linkLabel: "Conocer más",
  },
  {
    icon: "web",
    title: "Desarrollo web",
    description:
      "Creamos sitios web, landings y plataformas con una estructura clara, diseño sólido y foco en rendimiento y conversión.",
    href: "/desarrollo-web",
    linkLabel: "Conocer más",
  },
  {
    icon: "mobile",
    title: "Aplicaciones móviles",
    description:
      "Diseñamos y desarrollamos apps intuitivas y funcionales para iOS y Android, pensadas para crecer con tu negocio.",
    href: "/aplicaciones-moviles",
    linkLabel: "Conocer más",
  },
  {
    icon: "custom-software",
    title: "Software a la medida",
    description:
      "Construimos soluciones específicas para procesos, operaciones y modelos de negocio que no encajan en herramientas estándar.",
    href: "/software-medida",
    linkLabel: "Conocer más",
  },
  {
    icon: "digital",
    title: "Transformación digital",
    description:
      "Acompañamos la evolución tecnológica de tu empresa con estrategia, estructura y ejecución enfocada en resultados.",
    href: "/transformacion-digital",
    linkLabel: "Conocer más",
  },
];

/** Logos en `public/assets/clients/` (Seven 2026 · Logos clientes). */
export const LOGO_STRIP = {
  title: "Empresas que han confiado en nosotros",
  logos: [
    { src: "/assets/clients/1.png", alt: "Logo de marca aliada 1" },
    { src: "/assets/clients/2.png", alt: "Logo de marca aliada 2" },
    { src: "/assets/clients/3.png", alt: "Logo de marca aliada 3" },
    { src: "/assets/clients/4.png", alt: "Logo de marca aliada 4" },
    { src: "/assets/clients/5.png", alt: "Logo de marca aliada 5" },
    { src: "/assets/clients/6.png", alt: "Logo de marca aliada 6" },
    { src: "/assets/clients/7.png", alt: "Logo de marca aliada 7" },
    { src: "/assets/clients/8.png", alt: "Logo de marca aliada 8" },
    { src: "/assets/clients/9.png", alt: "Logo de marca aliada 9" },
    { src: "/assets/clients/10.png", alt: "Logo de marca aliada 10" },
    { src: "/assets/clients/11.jpg", alt: "Logo de marca aliada 11" },
    { src: "/assets/clients/12.png", alt: "Logo de marca aliada 12" },
    { src: "/assets/clients/13.svg", alt: "Logo de marca aliada 13" },
    { src: "/assets/clients/14.png", alt: "Logo de marca aliada 14" },
    { src: "/assets/clients/15.png", alt: "Logo de marca aliada 15" },
    { src: "/assets/clients/16.png", alt: "Logo de marca aliada 16" },
    { src: "/assets/clients/17.png", alt: "Logo de marca aliada 17" },
  ],
} as const;

export const HOME_INTRO = {
  eyebrow: "Lo que hacemos",
  title: "Soluciones tecnológicas para necesidades reales.",
  copy: "Acompañamos empresas que necesitan mejorar, construir o evolucionar su operación con herramientas claras, funcionales y bien implementadas.",
} as const;

export const HOME_CTA = {
  title: "Conversemos sobre tu próximo proyecto.",
  copy: "Si estás buscando una solución clara, funcional y bien pensada, podemos ayudarte a construirla.",
  highlights: [
    { icon: "web" as const, label: "Web y plataformas" },
    { icon: "custom-software" as const, label: "Apps y software" },
    { icon: "ai" as const, label: "IA aplicada" },
  ],
  primary: { href: "mailto:info@seven7company.com", label: "Agendar una llamada" },
  secondary: {
    href: "https://wa.me/573008600667",
    label: "Escribir por WhatsApp",
  },
} as const;
