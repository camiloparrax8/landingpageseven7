import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AiHighlightSection, PageHero } from "@/components/organisms";

type Props = { params: Promise<{ locale: string }> };

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

  return (
    <main>
      <PageHero
        narrow
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
        panelTitle={tHi("panelTitle")}
        panelBody={<p>{tHi("panelBody")}</p>}
      />
    </main>
  );
}
