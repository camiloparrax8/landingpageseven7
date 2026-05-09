import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";
import type { BreadcrumbItem } from "@/types/content";
import { CONTAINER } from "@/lib/layout";
import { PAGE_HERO_BACKGROUND_LAYERS } from "@/lib/site-assets";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  narrow?: boolean;
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({
  narrow,
  breadcrumbs,
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-cover bg-center bg-no-repeat py-[88px] pb-[72px] max-md:py-[60px] max-md:pb-12 max-[480px]:py-12 max-[480px]:pb-9",
        narrow && "py-[74px] pb-[60px] max-md:py-[52px] max-md:pb-10 max-[480px]:py-10 max-[480px]:pb-7",
      )}
      style={{ backgroundImage: PAGE_HERO_BACKGROUND_LAYERS }}
    >
      <div className={`${CONTAINER} grid grid-cols-1 items-end gap-9 max-[1100px]:grid-cols-1 lg:grid-cols-[minmax(0,760px)_1fr]`}>
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle as="h1">{title}</SectionTitle>
          <SectionCopy>{description}</SectionCopy>
        </div>
      </div>
    </section>
  );
}
