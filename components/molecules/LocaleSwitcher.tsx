"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { locales, type Locale } from "@/i18n/config";

function FlagES({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="24" height="16" rx="2" fill="#C60B1E" />
      <rect y="4" width="24" height="8" fill="#FFC400" />
    </svg>
  );
}

function FlagEN({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="24" height="16" rx="2" fill="#012169" />
      <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="2" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1" />
      <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="4" />
      <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}

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
      className="flex items-center gap-1 rounded-full border border-slate-200/90 bg-white p-1 shadow-sm"
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
              "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all",
              isActive
                ? "bg-slate-100 text-[#0f172a]"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
            )}
            aria-pressed={isActive}
          >
            {locale === "es" ? (
              <FlagES className="h-3 w-4 shrink-0 rounded-[2px]" />
            ) : (
              <FlagEN className="h-3 w-4 shrink-0 rounded-[2px]" />
            )}
            <span>{t(locale)}</span>
          </button>
        );
      })}
    </div>
  );
}
