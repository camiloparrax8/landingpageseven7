import type { Metadata } from "next";
import { InfoCard } from "@/components/molecules/InfoCard";
import { InfoCardsSection, PageHero } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Transformación digital",
  description:
    "Acompañamos la evolución tecnológica de tu empresa con estrategia, estructura y ejecución enfocada en resultados.",
};

export default function TransformacionDigitalPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
          { label: "Transformación digital", current: true },
        ]}
        eyebrow="Transformación digital"
        title="Transformación digital con orden y sentido."
        description="Acompañamos empresas que necesitan evolucionar su operación, sus herramientas y su forma de trabajar con una visión clara y bien ejecutada."
      />
      <InfoCardsSection columns={2}>
        <InfoCard title="Más que tecnología, es evolución.">
          <p>
            Transformar digitalmente una empresa no es solo cambiar herramientas.
            Es revisar procesos, mejorar estructuras y construir una manera más
            clara y eficiente de operar.
          </p>
        </InfoCard>
        <InfoCard title="Qué puede mejorar">
          <ul>
            <li>Procesos más claros</li>
            <li>Menos reprocesos</li>
            <li>Mejor flujo de información</li>
            <li>Mayor control</li>
            <li>Más eficiencia</li>
            <li>Mejor capacidad de crecimiento</li>
          </ul>
        </InfoCard>
      </InfoCardsSection>
    </main>
  );
}
