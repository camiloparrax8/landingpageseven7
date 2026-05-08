import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InfoCard } from "@/components/molecules/InfoCard";
import { CtaBand, InfoCardsSection, PageHero } from "@/components/organisms";
import type { ServiceCardIconId } from "@/types/content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "webDevelopment.meta",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function DesarrolloWebPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("common.breadcrumbs");
  const tHero = await getTranslations("webDevelopment.hero");
  const tWeb = await getTranslations("webDevelopment");
  const tCards = await getTranslations("webDevelopment.cards");
  const tCta = await getTranslations("webDevelopment.cta");

  const highlightDefs: {
    icon: ServiceCardIconId;
    key: "web" | "consulting" | "digital";
  }[] = [
    { icon: "web", key: "web" },
    { icon: "consulting", key: "consulting" },
    { icon: "digital", key: "digital" },
  ];

  const highlights = highlightDefs.map(({ icon, key }) => ({
    icon,
    label: tCta(`highlights.${key}`),
  }));

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
      <InfoCardsSection columns={3} sectionHeading={tWeb("sectionHeading")}>
        <InfoCard title={tCards("corporate.title")} icon="web">
          <p>{tCards("corporate.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("landing.title")} icon="digital">
          <p>{tCards("landing.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("platform.title")} icon="web">
          <p>{tCards("platform.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("customSoftware.title")} icon="custom-software">
          <p>{tCards("customSoftware.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("digital.title")} icon="digital">
          <p>{tCards("digital.copy")}</p>
        </InfoCard>
        <InfoCard title={tCards("consulting.title")} icon="consulting">
          <p>{tCards("consulting.copy")}</p>
        </InfoCard>
      </InfoCardsSection>

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
