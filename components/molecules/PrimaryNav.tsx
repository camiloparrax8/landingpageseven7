"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { isNavActive, type MainNavHref } from "@/lib/navigation";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { cn } from "@/lib/cn";

type PrimaryNavProps = {
  pathname: string;
  menuOpen: boolean;
};

const NAV_ITEMS = [
  { href: "/", labelKey: "home" },
  { href: "/services", labelKey: "services" },
  { href: "/ia", labelKey: "ia" },
  { href: "/desarrollo-web", labelKey: "web" },
  { href: "/aplicaciones-moviles", labelKey: "mobile", ariaLabelKey: "mobileAria" },
  {
    href: "/transformacion-digital",
    labelKey: "digitalTransformation",
    ariaLabelKey: "digitalTransformationAria",
  },
] as const;

export function PrimaryNav({ pathname, menuOpen }: PrimaryNavProps) {
  const t = useTranslations("common.header");

  return (
    <div
      id="mobile-nav-panel"
      className={cn(
        menuOpen
          ? "max-lg:fixed max-lg:inset-x-0 max-lg:top-[var(--header-h)] max-lg:z-[49] max-lg:flex max-lg:flex-col max-lg:items-stretch max-lg:gap-3 max-lg:border-b max-lg:border-slate-200/90 max-lg:bg-slate-50 max-lg:px-6 max-lg:pb-5 max-lg:pt-3 max-lg:shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
          : "max-lg:hidden",
        "lg:flex lg:flex-row lg:items-center lg:gap-4 lg:shrink-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-5",
      )}
    >
      <nav
        className="flex items-center gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-0 max-lg:self-stretch lg:gap-4 xl:gap-6"
        aria-label="Principal"
      >
        {NAV_ITEMS.map((item) => {
          const { href, labelKey } = item;
          const isActive = isNavActive(pathname, href as MainNavHref);
          const ariaLabel =
            "ariaLabelKey" in item
              ? t(`nav.${item.ariaLabelKey}`)
              : undefined;
          return (
            <Link
              key={href}
              href={href}
              aria-label={ariaLabel}
              className={cn(
                "relative text-[15px] font-semibold text-[#0f172a] transition-opacity max-lg:block max-lg:w-full max-lg:border-b max-lg:border-slate-200/80 max-lg:py-3.5 max-lg:text-base lg:text-[14px] xl:text-[15px]",
                isActive ? "opacity-100" : "opacity-90 hover:opacity-100",
                "max-lg:last:border-b-0",
                "lg:pb-1",
                isActive &&
                  "lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-[3px] lg:after:bg-[#F4C21F] lg:after:rounded-t-sm",
              )}
            >
              {t(`nav.${labelKey}`)}
            </Link>
          );
        })}
      </nav>
      <ButtonLink
        href="/contacto"
        variant="primary"
        className="!min-h-[40px] px-5 py-2 text-[14px] shadow-[0_8px_24px_rgba(244,194,31,0.28)] max-lg:mt-2 max-lg:!min-h-[48px] max-lg:px-7 max-lg:py-2.5 max-lg:text-[15px] max-lg:w-full max-lg:justify-center"
      >
        {t("cta")}
      </ButtonLink>
    </div>
  );
}
