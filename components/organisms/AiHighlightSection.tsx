import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { CONTAINER, SECTION_Y } from "@/lib/layout";

export type AiCard = {
  key: string;
  title: string;
  description: string;
};

type AiHighlightSectionProps = {
  eyebrow: string;
  title: string;
  lead: string;
  ctaLabel: string;
  cardsTitle: string;
  cards: AiCard[];
};

const IA_CARD_ICONS: Record<string, React.ReactNode> = {
  atencion: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
  operacion: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
  ),
  documental: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  comercial: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
  datos: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  ),
  tiempos: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
};

const IA_CARD_ORDER = ["atencion", "operacion", "documental", "comercial"] as const;

export function AiHighlightSection({
  eyebrow,
  title,
  lead,
  ctaLabel,
  cardsTitle,
  cards,
}: AiHighlightSectionProps) {
  const cardsByKey = Object.fromEntries(cards.map((c) => [c.key, c]));

  return (
    <section
      className={`${SECTION_Y} bg-gradient-to-br from-footer to-[#152535] text-white`}
    >
      <div
        className={`${CONTAINER} grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-14`}
      >
        {/* Columna izquierda: contenido + CTA */}
        <div className="flex flex-col items-start">
          <Eyebrow className="text-white/70">{eyebrow}</Eyebrow>
          <SectionTitle className="text-white">{title}</SectionTitle>
          <SectionCopy className="text-white/80 max-md:text-base">
            {lead}
          </SectionCopy>
          <ButtonLink
            href="/contacto"
            variant="primary"
            className="mt-6 w-full sm:w-auto"
          >
            {ctaLabel}
          </ButtonLink>
        </div>

        {/* Columna derecha: tarjetas */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white/90 lg:mb-6">
            {cardsTitle}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {IA_CARD_ORDER.map((key) => {
              const card = cardsByKey[key];
              if (!card) return null;
              return (
                <article
                  key={key}
                  className="flex flex-col gap-2.5 rounded-2xl border border-white/[0.12] bg-white/[0.08] p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-[#1d232b]">
                    {IA_CARD_ICONS[key]}
                  </div>
                  <h4 className="text-[15px] font-semibold leading-snug text-white">
                    {card.title}
                  </h4>
                  <p className="m-0 text-sm leading-relaxed text-white/70">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
