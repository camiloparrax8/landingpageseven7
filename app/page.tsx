import type { Metadata } from "next";
import {
  CtaBand,
  HomeHero,
  IntroLeadGrid,
  LogoStripSection,
  ServiceCardsGrid,
} from "@/components/organisms";
import {
  HOME_CTA,
  HOME_INTRO,
  HOME_SERVICE_CARDS,
  LOGO_STRIP,
} from "@/content/home";
import { CONTAINER, SECTION_Y } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Seven7 Company | Tecnología para avanzar con claridad",
  description:
    "Desarrollamos soluciones web, apps, software e inteligencia artificial para empresas que necesitan avanzar con orden, visión y ejecución.",
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <LogoStripSection title={LOGO_STRIP.title} logos={LOGO_STRIP.logos} />
      <section className={SECTION_Y}>
        <div className={CONTAINER}>
          <IntroLeadGrid
            eyebrow={HOME_INTRO.eyebrow}
            title={HOME_INTRO.title}
            copy={HOME_INTRO.copy}
          />
          <ServiceCardsGrid cards={HOME_SERVICE_CARDS} />
        </div>
      </section>
      <CtaBand
        title={HOME_CTA.title}
        copy={HOME_CTA.copy}
        highlights={HOME_CTA.highlights}
        primary={HOME_CTA.primary}
        secondary={HOME_CTA.secondary}
      />
    </main>
  );
}
