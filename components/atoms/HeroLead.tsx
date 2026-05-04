import { cn } from "@/lib/cn";

type HeroLeadProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroLead({ children, className }: HeroLeadProps) {
  return (
    <p
      className={cn(
        "mb-[30px] max-w-[700px] text-[clamp(18px,2vw,22px)] leading-[1.65] text-ink-soft",
        className,
      )}
    >
      {children}
    </p>
  );
}
