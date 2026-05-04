import type { Metadata } from "next";
import { PageHero, ServiceCardsGrid } from "@/components/organisms";
import { SERVICES_PAGE_CARDS } from "@/content/services-page";
import { CONTAINER, SECTION_Y } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Soluciones tecnológicas para empresas que necesitan avanzar con claridad: consultoría, inteligencia artificial, desarrollo web, apps, software a la medida y transformación digital.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", current: true },
        ]}
        eyebrow="Servicios"
        title="Soluciones tecnológicas para necesidades reales."
        description="Ayudamos a empresas que necesitan construir, ordenar o evolucionar su operación con tecnología clara, funcional y bien implementada."
      />
      <section className={SECTION_Y}>
        <div className={CONTAINER}>
          <ServiceCardsGrid cards={SERVICES_PAGE_CARDS} />
        </div>
      </section>
    </main>
  );
}
