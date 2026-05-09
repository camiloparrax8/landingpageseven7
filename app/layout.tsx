import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Seven7 Company | Tecnología para avanzar con claridad",
    template: "%s | Seven7 Company",
  },
  description:
    "Desarrollamos soluciones web, apps, software e inteligencia artificial para empresas que necesitan avanzar con orden, visión y ejecución.",
  icons: {
    icon: [{ url: "/assets/favicon.jpeg", type: "image/jpeg" }],
    apple: "/assets/favicon.jpeg",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
