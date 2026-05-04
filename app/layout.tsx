import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/organisms";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Seven7 Company | Tecnología para avanzar con claridad",
    template: "%s | Seven7 Company",
  },
  description:
    "Desarrollamos soluciones web, apps, software e inteligencia artificial para empresas que necesitan avanzar con orden, visión y ejecución.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body
        className="min-h-screen bg-surface font-sans text-body antialiased"
        suppressHydrationWarning
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
