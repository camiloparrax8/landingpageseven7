import type { Metadata } from "next";
import { InfoCard } from "@/components/molecules/InfoCard";
import { InfoCardsSection, PageHero } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Aplicaciones móviles",
  description:
    "Diseñamos y desarrollamos apps intuitivas y escalables para empresas que necesitan una experiencia móvil sólida.",
};

export default function AplicacionesMovilesPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
          { label: "Aplicaciones móviles", current: true },
        ]}
        eyebrow="Aplicaciones móviles"
        title="Aplicaciones móviles pensadas para usarse de verdad."
        description="Diseñamos y desarrollamos apps claras, intuitivas y funcionales para empresas que necesitan ofrecer una experiencia móvil útil y escalable."
      />
      <InfoCardsSection columns={3}>
        <InfoCard title="Apps de servicio">
          <p>
            Para atención, gestión de usuarios, acceso a información o
            interacción con clientes.
          </p>
        </InfoCard>
        <InfoCard title="Apps operativas">
          <p>
            Para procesos internos, seguimiento, control y eficiencia en
            operación.
          </p>
        </InfoCard>
        <InfoCard title="Apps comerciales">
          <p>
            Para ventas, reservas, beneficios, marketplaces o experiencias
            digitales de marca.
          </p>
        </InfoCard>
      </InfoCardsSection>
    </main>
  );
}
