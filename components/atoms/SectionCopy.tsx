import { cn } from "@/lib/cn";

type SectionCopyProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionCopy({ children, className }: SectionCopyProps) {
  return (
    <p
      className={cn(
        "m-0 max-w-[760px] text-lg leading-[1.7] text-muted max-md:text-base max-[480px]:text-[15px]",
        className,
      )}
    >
      {children}
    </p>
  );
}
