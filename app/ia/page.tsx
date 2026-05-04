import type { Metadata } from "next";
import { AiHighlightSection, PageHero } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Inteligencia artificial",
  description:
    "Aplicamos inteligencia artificial a procesos reales para automatizar, asistir, analizar y mejorar decisiones de negocio.",
};

export default function IaPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
          { label: "Inteligencia artificial", current: true },
        ]}
        eyebrow="Inteligencia artificial"
        title="Inteligencia artificial aplicada al negocio."
        description="Diseñamos soluciones de IA que se conectan con procesos reales para automatizar, asistir, analizar y ayudar a tomar mejores decisiones."
      />
      <AiHighlightSection
        eyebrow="Soluciones"
        title="IA útil, no decorativa."
        lead="No hablamos de inteligencia artificial como tendencia. La trabajamos como una herramienta que debe resolver, simplificar y aportar valor real."
        panelTitle="Dónde puede generar valor"
        panelBody={
          <p>
            Atención, operación, automatización documental, asistencia comercial,
            clasificación de datos y optimización de tiempos.
          </p>
        }
      />
    </main>
  );
}
