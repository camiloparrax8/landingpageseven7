import Link from "next/link";
import { SITE_ASSETS } from "@/lib/site-assets";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  href?: string;
  "aria-label"?: string;
  className?: string;
  /** Sustituye la imagen (p. ej. `SITE_ASSETS.logoWhite` en footer). */
  imageSrc?: string;
  /** Clases extra para la etiqueta `img`. */
  imageClassName?: string;
  /** Marca tipográfica (header); por defecto imagen (footer, etc.). */
  variant?: "image" | "wordmark";
};

export function BrandLogo({
  href = "/",
  "aria-label": ariaLabel = "Seven7 Company inicio",
  className,
  imageSrc,
  imageClassName,
  variant = "image",
}: BrandLogoProps) {
  if (variant === "wordmark") {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex shrink-0 flex-col leading-none text-[#0f172a]",
          className,
        )}
        aria-label={ariaLabel}
      >
        <span className="text-[clamp(22px,3.2vw,28px)] font-bold tracking-[-0.03em]">
          seven
        </span>
        <span className="mt-[3px] text-[10px] font-light tracking-[0.32em] text-[#0f172a]/80">
          siete
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={ariaLabel}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc ?? SITE_ASSETS.logo}
        alt="Seven7 Company"
        className={cn(
          "w-auto object-contain",
          imageClassName ??
            "h-[54px] max-w-[min(220px,100%)] max-[820px]:h-11",
        )}
      />
    </Link>
  );
}
