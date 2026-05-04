import { cn } from "@/lib/cn";

type HeroTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroTitle({ children, className }: HeroTitleProps) {
  return (
    <h1
      className={cn(
        "m-0 mb-5 max-w-[760px] text-[clamp(42px,6vw,74px)] font-normal leading-[0.95] tracking-[-0.05em] text-ink",
        className,
      )}
    >
      {children}
    </h1>
  );
}
