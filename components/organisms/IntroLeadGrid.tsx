import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionCopy } from "@/components/atoms/SectionCopy";

type IntroLeadGridProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function IntroLeadGrid({ eyebrow, title, copy }: IntroLeadGridProps) {
  return (
    <div className="mb-10 grid grid-cols-1 items-end gap-10 max-[1100px]:grid-cols-1 max-[1100px]:gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
      </div>
      <SectionCopy>{copy}</SectionCopy>
    </div>
  );
}
