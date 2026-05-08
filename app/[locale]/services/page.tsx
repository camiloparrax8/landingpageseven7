import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, ServiceCardsGrid } from "@/components/organisms";
import { SERVICE_CARD_ROWS } from "@/lib/service-card-rows";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import type { ServiceCardContent } from "@/types/content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("common.breadcrumbs");
  const tHero = await getTranslations("services.hero");
  const tCards = await getTranslations("services.cards");

  const cards: ServiceCardContent[] = SERVICE_CARD_ROWS.map(
    ({ href, icon, key }) => ({
      icon,
      href,
      title: tCards(`${key}.title`),
      description: tCards(`${key}.description`),
      linkLabel: tCards(`${key}.linkLabel`),
    }),
  );

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: tNav("home"), href: "/" },
          { label: tNav("services"), current: true },
        ]}
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
      />
      <section className={SECTION_Y}>
        <div className={CONTAINER}>
          <ServiceCardsGrid cards={cards} />
        </div>
      </section>
    </main>
  );
}
