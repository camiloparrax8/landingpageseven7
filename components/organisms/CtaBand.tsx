import { ButtonLink } from "@/components/atoms/ButtonLink";
import { ServiceCardIcon } from "@/components/atoms/ServiceCardIcon";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import type { ServiceCardIconId } from "@/types/content";

export type CtaBandHighlight = {
  icon: ServiceCardIconId;
  label: string;
};

type CtaBandProps = {
  title: string;
  copy: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  /** Iconos breves bajo el copy para reforzar el mensaje y captar la mirada. */
  highlights?: readonly CtaBandHighlight[];
};

export function CtaBand({
  title,
  copy,
  primary,
  secondary,
  highlights,
}: CtaBandProps) {

  return (
    <section
      className={`${SECTION_Y} overflow-hidden bg-gradient-to-br from-[#2a4460] to-[#152535] text-white border-b border-slate-200/80`}
    >
      <div
        className={`${CONTAINER} grid grid-cols-1 items-center gap-8 max-[1100px]:grid-cols-1 lg:grid-cols-[1fr_auto]`}
      >
        <div className="min-w-0">
          <SectionTitle className="text-white">{title}</SectionTitle>
          <SectionCopy className="text-white max-md:text-base">
            {copy}
          </SectionCopy>
         
        </div>
        <div className="flex flex-wrap justify-end gap-3.5 max-[1100px]:justify-start max-[480px]:flex-col">
          <ButtonLink href={primary.href} variant="primary">
            {primary.label}
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="secondary">
            {secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
