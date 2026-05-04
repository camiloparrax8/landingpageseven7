import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";
import { MiniPanel } from "@/components/molecules/MiniPanel";
import { CONTAINER, SECTION_Y } from "@/lib/layout";

type AiHighlightSectionProps = {
  eyebrow: string;
  title: string;
  lead: string;
  panelTitle: string;
  panelBody: React.ReactNode;
};

export function AiHighlightSection({
  eyebrow,
  title,
  lead,
  panelTitle,
  panelBody,
}: AiHighlightSectionProps) {
  return (
    <section
      className={`${SECTION_Y} bg-gradient-to-br from-footer to-[#152535] text-white`}
    >
      <div
        className={`${CONTAINER} grid grid-cols-1 items-start gap-10 max-[1100px]:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]`}
      >
        <div>
          <Eyebrow className="text-white/70">{eyebrow}</Eyebrow>
          <SectionTitle className="text-white">{title}</SectionTitle>
          <SectionCopy className="text-white/80 max-md:text-base">
            {lead}
          </SectionCopy>
        </div>
        <MiniPanel title={panelTitle}>{panelBody}</MiniPanel>
      </div>
    </section>
  );
}
