import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      {
        source: "/consultoria-tecnologica.html",
        destination: "/consultoria-tecnologica",
        permanent: true,
      },
      { source: "/ia.html", destination: "/ia", permanent: true },
      {
        source: "/desarrollo-web.html",
        destination: "/desarrollo-web",
        permanent: true,
      },
      {
        source: "/aplicaciones-moviles.html",
        destination: "/aplicaciones-moviles",
        permanent: true,
      },
      {
        source: "/software-medida.html",
        destination: "/software-medida",
        permanent: true,
      },
      {
        source: "/transformacion-digital.html",
        destination: "/transformacion-digital",
        permanent: true,
      },
      { source: "/contacto.html", destination: "/contacto", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
