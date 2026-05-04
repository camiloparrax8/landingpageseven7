import { cn } from "@/lib/cn";

type SectionTitleProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({
  as: Tag = "h2",
  children,
  className,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "m-0 mb-4 text-[clamp(32px,4vw,44px)] font-normal leading-[1.04] tracking-[-0.03em] text-ink max-[480px]:text-[clamp(26px,7vw,38px)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
