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
  { href: "/desarrollo-web", labelKey: "webApps" },
  { href: "/contacto", labelKey: "contact" },
] as const;

export function PrimaryNav({ pathname, menuOpen }: PrimaryNavProps) {
  const t = useTranslations("common.header");

  return (
    <div
      className={cn(
        "flex items-center gap-8 max-md:flex-col max-md:items-stretch max-md:gap-3 md:gap-10",
        menuOpen
          ? "max-md:absolute max-md:left-0 max-md:right-0 max-md:top-full max-md:z-[49] max-md:flex max-md:border-b max-md:border-slate-200/90 max-md:bg-slate-50 max-md:px-6 max-md:pb-5 max-md:pt-3 max-md:shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
          : "max-md:hidden",
        "md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none",
      )}
    >
      <nav
        className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-0 max-md:self-stretch md:gap-10"
        aria-label="Principal"
      >
        {NAV_ITEMS.map(({ href, labelKey }) => {
          const isActive = isNavActive(pathname, href as MainNavHref);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative text-[18px] font-semibold text-[#0f172a] transition-opacity max-md:block max-md:w-full max-md:border-b max-md:border-slate-200/80 max-md:py-3.5 max-md:text-base",
                isActive ? "opacity-100" : "opacity-90 hover:opacity-100",
                "max-md:last:border-b-0",
                "md:pb-1",
                isActive &&
                  "md:after:absolute md:after:bottom-0 md:after:left-0 md:after:right-0 md:after:h-[3px] md:after:bg-[#F4C21F] md:after:rounded-t-sm",
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
        className="!min-h-[44px] px-7 py-2.5 text-[15px] shadow-[0_8px_24px_rgba(244,194,31,0.28)] max-md:mt-2 max-md:!min-h-[48px] max-md:w-full max-md:justify-center"
      >
        {t("cta")}
      </ButtonLink>
    </div>
  );
}
