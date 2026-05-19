import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AiHighlightSection, PageHero } from "@/components/organisms";
import type { AiCard } from "@/components/organisms/AiHighlightSection";

type Props = { params: Promise<{ locale: string }> };

const CARD_KEYS = ["atencion", "operacion", "documental", "comercial", "datos", "tiempos"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ia.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function IaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("common.breadcrumbs");
  const tHero = await getTranslations("ia.hero");
  const tHi = await getTranslations("ia.highlight");

  const cards: AiCard[] = CARD_KEYS.map((key) => ({
    key,
    title: tHi(`cards.${key}.title`),
    description: tHi(`cards.${key}.description`),
  }));

  return (
    <main>
      <PageHero
        narrow
        banner="ia"
        breadcrumbs={[
          { label: tNav("home"), href: "/" },
          { label: tNav("services"), href: "/services" },
          { label: tHero("eyebrow"), current: true },
        ]}
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
      />
      <AiHighlightSection
        eyebrow={tHi("eyebrow")}
        title={tHi("title")}
        lead={tHi("lead")}
        ctaLabel={tHi("ctaLabel")}
        cardsTitle={tHi("cardsTitle")}
        cards={cards}
      />
    </main>
  );
}
