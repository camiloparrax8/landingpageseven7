import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ScrollReveal } from "@/components/atoms/ScrollReveal";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import { cn } from "@/lib/cn";
import { Children } from "react";

type InfoCardsSectionProps = {
  columns?: 2 | 3 | 4;
  sectionHeading?: string;
  children: React.ReactNode;
};

export function InfoCardsSection({
  columns = 3,
  sectionHeading,
  children,
}: InfoCardsSectionProps) {
  const childArray = Children.toArray(children);

  return (
    <section className={SECTION_Y}>
      <div
        className={cn(
          CONTAINER,
          "grid gap-6",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 &&
            "grid-cols-1 max-[1100px]:grid-cols-2 lg:grid-cols-3",
          columns === 4 &&
            "grid-cols-1 max-[1100px]:grid-cols-2 xl:grid-cols-4",
        )}
      >
        {sectionHeading ? (
          <ScrollReveal variant="fade-up" className="col-span-full max-w-[40rem]">
            <SectionTitle as="h2">
              {sectionHeading}
            </SectionTitle>
          </ScrollReveal>
        ) : null}
        {childArray.map((child, index) => (
          <ScrollReveal key={index} variant="fade-up" delay={index * 0.08}>
            {child}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
