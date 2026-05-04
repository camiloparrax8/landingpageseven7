import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "mb-3.5 inline-block text-xs font-bold uppercase leading-none tracking-[0.18em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
