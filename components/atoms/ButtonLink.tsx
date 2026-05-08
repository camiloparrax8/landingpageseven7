import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

function isNonNextHref(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

const base =
  "inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-full border border-transparent px-6 text-[15px] font-bold transition-all duration-200";

const variants = {
  primary:
    "bg-accent text-[#1d232b] shadow-[0_10px_30px_rgba(244,194,31,0.24)] hover:-translate-y-px hover:bg-accent-deep",
  secondary:
    "border-ink/[0.14] bg-white/70 text-ink backdrop-blur-[10px] hover:-translate-y-px hover:bg-white",
} as const;

/** Misma apariencia que `ButtonLink` variante primary (p. ej. `<button type="submit">`). */
export const BUTTON_PRIMARY_CLASS = cn(base, variants.primary);

export function ButtonLink({
  href,
  variant,
  children,
  className,
  external,
  onClick,
}: ButtonLinkProps) {
  const cls = cn(base, variants[variant], className);

  if (external || isNonNextHref(href)) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
