import type { Metadata } from "next";
import { InfoCard } from "@/components/molecules/InfoCard";
import { InfoCardsSection, PageHero } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Software a la medida",
  description:
    "Construimos soluciones específicas para procesos y operaciones que requieren una lógica propia y una mejor adaptación.",
};

export default function SoftwareMedidaPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
          { label: "Software a la medida", current: true },
        ]}
        eyebrow="Software a la medida"
        title="Software diseñado para la realidad de tu operación."
        description="Construimos soluciones a la medida para procesos, equipos y modelos de negocio que necesitan algo más específico que una herramienta estándar."
      />
      <InfoCardsSection columns={2}>
        <InfoCard title="Qué significa a la medida">
          <p>
            Significa construir una herramienta pensada desde tu operación, tus
            procesos y tus objetivos, en lugar de adaptar tu empresa a una
            herramienta genérica.
          </p>
        </InfoCard>
        <InfoCard title="Cuándo conviene">
          <p>
            Cuando el proceso es muy particular, cuando las herramientas
            existentes no responden bien o cuando la operación necesita una
            lógica propia para funcionar mejor.
          </p>
        </InfoCard>
      </InfoCardsSection>
    </main>
  );
}
