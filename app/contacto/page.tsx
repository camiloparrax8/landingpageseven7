import type { Metadata } from "next";
import { ContactSplitSection, PageHero } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Conversemos sobre tu proyecto y construyamos una solución clara, funcional y bien pensada para tu empresa.",
};

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        narrow
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Contacto", current: true },
        ]}
        eyebrow="Contacto"
        title="Hablemos de tu proyecto."
        description="Elige el formulario o un canal directo. Te respondemos con claridad sobre alcance y siguientes pasos."
      />
      <ContactSplitSection />
    </main>
  );
}
