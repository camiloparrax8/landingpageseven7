import type { Metadata } from "next";
import { InfoCard } from "@/components/molecules/InfoCard";
import { CtaBand, InfoCardsSection, PageHero } from "@/components/organisms";
import { DESARROLLO_WEB_CTA } from "@/content/desarrollo-web";

export const metadata: Metadata = {
  title: "Desarrollo web",
  description:
    "Creamos sitios web, landings y plataformas claras, funcionales y bien construidas para marcas y empresas.",
};

export default function DesarrolloWebPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
          { label: "Desarrollo web", current: true },
        ]}
        eyebrow="Desarrollo web"
        title="Sitios web claros, funcionales y bien construidos."
        description="Diseñamos y desarrollamos sitios web, landings y plataformas con foco en estructura, experiencia, rendimiento y conversión."
      />
      <InfoCardsSection columns={3} sectionHeading="Qué construimos">
        <InfoCard title="Sitios corporativos" icon="web">
          <p>
            Páginas pensadas para presentar tu marca, tus servicios y tu
            propuesta con claridad.
          </p>
        </InfoCard>
        <InfoCard title="Landing pages" icon="digital">
          <p>
            Páginas diseñadas para campañas, conversiones y captación de
            oportunidades.
          </p>
        </InfoCard>
        <InfoCard title="Plataformas web" icon="web">
          <p>
            Soluciones más robustas para usuarios, procesos, contenidos o
            servicios digitales.
          </p>
        </InfoCard>
        <InfoCard title="Software a la medida" icon="custom-software">
          <p>
            Soluciones específicas para procesos, operaciones o modelos de negocio que no encajan en herramientas estándar.
          </p>
        </InfoCard>
        <InfoCard title="Transformación digital" icon="digital">
          <p>
            Acompañamos la evolución tecnológica de tu empresa con estrategia, estructura y ejecución enfocada en resultados.
          </p>
        </InfoCard>
        <InfoCard title="Consultoría tecnológica" icon="consulting">
          <p>
            Te ayudamos a entender qué necesitas, qué conviene implementar y cómo tomar mejores decisiones tecnológicas para tu empresa.
          </p>
        </InfoCard>
      </InfoCardsSection>

      <CtaBand
        title={DESARROLLO_WEB_CTA.title}
        copy={DESARROLLO_WEB_CTA.copy}
        highlights={DESARROLLO_WEB_CTA.highlights}
        primary={DESARROLLO_WEB_CTA.primary}
        secondary={DESARROLLO_WEB_CTA.secondary}
      />
    </main>
  );
}
