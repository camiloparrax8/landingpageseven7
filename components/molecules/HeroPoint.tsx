import { ServiceCardIcon } from "@/components/atoms/ServiceCardIcon";
import type { ServiceCardIconId } from "@/types/content";

type HeroPointProps = {
  icon: ServiceCardIconId;
  title: string;
  text: string;
};

export function HeroPoint({ icon, title, text }: HeroPointProps) {
  return (
    <div className="flex gap-3 rounded-[14px] border border-ink/[0.08] bg-white/65 px-4 py-3.5">
      <div
        className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-panel text-ink"
        aria-hidden
      >
        <ServiceCardIcon id={icon} className="!size-[20px]" />
      </div>
      <div className="min-w-0 flex-1">
        <strong className="mb-1 block text-sm text-ink">{title}</strong>
        <span className="text-sm leading-[1.5] text-muted">{text}</span>
      </div>
    </div>
  );
}
