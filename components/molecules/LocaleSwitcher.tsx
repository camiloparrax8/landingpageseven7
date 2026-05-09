"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { locales, type Locale } from "@/i18n/config";

export function LocaleSwitcher() {
  const t = useTranslations("common.localeSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-slate-200/90 bg-white p-0.5 shadow-sm max-[480px]:gap-px"
      role="group"
      aria-label={t("label")}
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleSwitch(locale)}
            className={cn(
              "min-h-8 min-w-[2.25rem] rounded-full px-2.5 text-xs font-semibold uppercase tracking-wide transition-all max-[480px]:min-h-7 max-[480px]:min-w-[2rem] max-[480px]:px-2 max-[480px]:text-[11px]",
              isActive
                ? "bg-slate-100 text-[#0f172a]"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
            )}
            aria-pressed={isActive}
          >
            {t(locale)}
          </button>
        );
      })}
    </div>
  );
}
