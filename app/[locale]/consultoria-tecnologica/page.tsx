import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InfoCard } from "@/components/molecules/InfoCard";
import { InfoCardsSection, PageHero } from "@/components/organisms";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultoria.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ConsultoriaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("common.breadcrumbs");
  const tHero = await getTranslations("consultoria.hero");
  const tCards = await getTranslations("consultoria.cards");

  return (
    <main>
      <PageHero
        narrow
        banner="consulting"
        breadcrumbs={[
          { label: tNav("home"), href: "/" },
          { label: tNav("services"), href: "/services" },
          { label: tHero("eyebrow"), current: true },
        ]}
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
      />
      <InfoCardsSection columns={2}>
        <InfoCard title={tCards("whatWeDo.title")}>
          <p>{tCards("whatWeDo.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("whoFor.title")}>
          <p>{tCards("whoFor.copy")}</p>
        </InfoCard>
      </InfoCardsSection>
    </main>
  );
}
