import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  CtaBand,
  HomeHero,
  IntroLeadGrid,
  LogoStripSection,
  ServiceCardsGrid,
} from "@/components/organisms";
import { LOGO_STRIP } from "@/content/home";
import { SERVICE_CARD_ROWS } from "@/lib/service-card-rows";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import type { ServiceCardContent } from "@/types/content";
import type { ServiceCardIconId } from "@/types/content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tIntro = await getTranslations("home.intro");
  const tLogo = await getTranslations("home.logoStrip");
  const tCards = await getTranslations("home.services");
  const tCta = await getTranslations("home.cta");

  const cards: ServiceCardContent[] = SERVICE_CARD_ROWS.map(
    ({ href, icon, key }) => ({
      icon,
      href,
      title: tCards(`${key}.title`),
      description: tCards(`${key}.description`),
      linkLabel: tCards(`${key}.linkLabel`),
    }),
  );

  const highlightIcons: ServiceCardIconId[] = ["web", "custom-software", "ai"];
  const highlightKeys = ["web", "apps", "ai"] as const;
  const highlights = highlightKeys.map((k, i) => ({
    icon: highlightIcons[i],
    label: tCta(`highlights.${k}`),
  }));

  return (
    <main>
      <HomeHero />
      <LogoStripSection title={tLogo("title")} logos={LOGO_STRIP.logos} />
      <section className={SECTION_Y}>
        <div className={CONTAINER}>
          <IntroLeadGrid
            eyebrow={tIntro("eyebrow")}
            title={tIntro("title")}
            copy={tIntro("copy")}
          />
          <ServiceCardsGrid cards={cards} />
        </div>
      </section>
      <CtaBand
        title={tCta("title")}
        copy={tCta("copy")}
        highlights={highlights}
        primary={{
          href: "mailto:info@seven7company.com",
          label: tCta("primaryLabel"),
        }}
        secondary={{
          href: "https://wa.me/573008600667",
          label: tCta("secondaryLabel"),
        }}
      />
    </main>
  );
}
