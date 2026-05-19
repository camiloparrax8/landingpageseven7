import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InfoCard } from "@/components/molecules/InfoCard";
import { InfoCardsSection, PageHero } from "@/components/organisms";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mobileApps.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AplicacionesMovilesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("common.breadcrumbs");
  const tHero = await getTranslations("mobileApps.hero");
  const tCards = await getTranslations("mobileApps.cards");

  return (
    <main>
      <PageHero
        narrow
        banner="apps"
        breadcrumbs={[
          { label: tNav("home"), href: "/" },
          { label: tNav("services"), href: "/services" },
          { label: tHero("eyebrow"), current: true },
        ]}
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
      />
      <InfoCardsSection columns={3}>
        <InfoCard title={tCards("service.title")}>
          <p>{tCards("service.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("ops.title")}>
          <p>{tCards("ops.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("commerce.title")}>
          <p>{tCards("commerce.copy")}</p>
        </InfoCard>
      </InfoCardsSection>
    </main>
  );
}
