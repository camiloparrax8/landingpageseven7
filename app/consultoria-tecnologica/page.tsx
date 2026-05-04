import type { Metadata } from "next";
import { InfoCard } from "@/components/molecules/InfoCard";
import { InfoCardsSection, PageHero } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Consultoría tecnológica",
  description:
    "Ayudamos a empresas a tomar mejores decisiones tecnológicas con una visión clara, práctica y alineada a su operación.",
};

export default function ConsultoriaPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
          { label: "Consultoría tecnológica", current: true },
        ]}
        eyebrow="Consultoría tecnológica"
        title="Decisiones tecnológicas con más claridad."
        description="Te ayudamos a evaluar, ordenar e implementar la tecnología que realmente necesita tu empresa, con una visión práctica, estratégica y aterrizada."
      />
      <InfoCardsSection columns={2}>
        <InfoCard title="Qué hacemos">
          <p>
            Analizamos tu situación actual, entendemos tus procesos y te ayudamos
            a definir qué herramientas, plataformas o desarrollos tienen más
            sentido para tu negocio.
          </p>
        </InfoCard>
        <InfoCard title="Para quién aplica">
          <p>
            Para empresas que necesitan más claridad antes de invertir, cambiar
            herramientas, construir una solución nueva o iniciar un proceso de
            transformación digital.
          </p>
        </InfoCard>
      </InfoCardsSection>
    </main>
  );
}
