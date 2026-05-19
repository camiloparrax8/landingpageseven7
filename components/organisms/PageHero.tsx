import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";
import { ScrollReveal } from "@/components/atoms/ScrollReveal";
import type { BreadcrumbItem } from "@/types/content";
import { CONTAINER } from "@/lib/layout";
import { getPageHeroBackground, type BannerId } from "@/lib/site-assets";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  narrow?: boolean;
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  banner?: BannerId;
};

export function PageHero({
  narrow,
  breadcrumbs,
  eyebrow,
  title,
  description,
  banner = "services",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-cover bg-center bg-no-repeat py-[88px] pb-[72px] max-md:py-[60px] max-md:pb-12 max-[480px]:py-12 max-[480px]:pb-9",
        narrow && "py-[74px] pb-[60px] max-md:py-[52px] max-md:pb-10 max-[480px]:py-10 max-[480px]:pb-7",
      )}
      style={{ backgroundImage: getPageHeroBackground(banner) }}
    >
      <div className={`${CONTAINER} grid grid-cols-1 items-end gap-9 max-[1100px]:grid-cols-1 lg:grid-cols-[minmax(0,760px)_1fr]`}>
        <div>
          <ScrollReveal variant="fade-in" duration={0.4}>
            <Breadcrumbs items={breadcrumbs} />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <SectionTitle as="h1">{title}</SectionTitle>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3}>
            <SectionCopy>{description}</SectionCopy>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
