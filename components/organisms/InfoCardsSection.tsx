import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import { cn } from "@/lib/cn";

type InfoCardsSectionProps = {
  columns?: 2 | 3 | 4;
  /** Título de sección (h2) que abarca todo el ancho de la rejilla. */
  sectionHeading?: string;
  children: React.ReactNode;
};

export function InfoCardsSection({
  columns = 3,
  sectionHeading,
  children,
}: InfoCardsSectionProps) {
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
          <SectionTitle as="h2" className="col-span-full max-w-[40rem]">
            {sectionHeading}
          </SectionTitle>
        ) : null}
        {children}
      </div>
    </section>
  );
}
