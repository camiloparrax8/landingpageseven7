import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactSplitSection, PageHero } from "@/components/organisms";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("common.breadcrumbs");
  const tHero = await getTranslations("contact.hero");

  return (
    <main>
      <PageHero
        narrow
        banner="contact"
        breadcrumbs={[
          { label: tNav("home"), href: "/" },
          { label: tHero("eyebrow"), current: true },
        ]}
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
      />
      <ContactSplitSection />
    </main>
  );
}
