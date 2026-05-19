import { ButtonLink } from "@/components/atoms/ButtonLink";
import { ServiceCardIcon } from "@/components/atoms/ServiceCardIcon";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";
import { ScrollReveal } from "@/components/atoms/ScrollReveal";
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
          <ScrollReveal variant="fade-up">
            <SectionTitle className="text-white">{title}</SectionTitle>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.1}>
            <SectionCopy className="text-white max-md:text-base">
              {copy}
            </SectionCopy>
          </ScrollReveal>
          {highlights && highlights.length > 0 ? (
            <ScrollReveal variant="fade-up" delay={0.2}>
              <ul className="mt-7 flex list-none flex-wrap gap-2.5 p-0 sm:gap-3">
                {highlights.map(({ icon, label }) => (
                  <li
                    key={`${icon}-${label}`}
                    className="flex items-center gap-2 rounded-2xl   px-3 py-2 backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2.5"
                  >
                    <span
                      className="grid size-8 place-items-center rounded-xl bg-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-black/10 sm:size-9"
                      aria-hidden
                    >
                      <ServiceCardIcon
                        id={icon}
                        className="!size-[18px] sm:!size-[20px]"
                      />
                    </span>
                    <span className="text-[13px] font-semibold leading-tight text-white/95 sm:text-sm">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ) : null}
        </div>
        <ScrollReveal variant="fade-left" delay={0.2}>
          <div className="flex flex-wrap justify-end gap-3.5 max-[1100px]:justify-start max-[480px]:flex-col">
            <ButtonLink href={primary.href} variant="primary">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
