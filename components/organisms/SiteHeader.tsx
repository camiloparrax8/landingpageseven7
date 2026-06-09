"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { LocaleSwitcher } from "@/components/molecules/LocaleSwitcher";
import { PrimaryNav } from "@/components/molecules/PrimaryNav";
import { cn } from "@/lib/cn";

function SiteHeaderBar({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-slate-200/80 bg-slate-50 [--header-h:88px] max-md:[--header-h:72px] max-[480px]:[--header-h:66px]">
      {menuOpen ? (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-[40] bg-[#0f172a]/25 backdrop-blur-[1px] lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div
        className={cn(
          "relative z-[50] mx-auto flex h-[var(--header-h)] min-w-0 w-full max-w-[1200px] items-center justify-between gap-3 px-6",
          "lg:px-4",
        )}
      >
        <BrandLogo imageClassName="h-10 w-auto max-h-10 max-w-[min(160px,38vw)] shrink-0 object-contain object-left lg:h-16 lg:max-h-16 lg:max-w-[200px]" />

        <div className="z-[51] flex shrink-0 items-center justify-end gap-2 max-[480px]:gap-1.5 md:gap-3">
          <PrimaryNav pathname={pathname} menuOpen={menuOpen} />
          <LocaleSwitcher />
          <button
            type="button"
            className={cn(
              "hidden size-[46px] shrink-0 place-items-center rounded-full border border-slate-300/90 bg-white text-[#0f172a]",
              "shadow-sm transition-colors hover:bg-slate-50 max-lg:inline-grid max-[480px]:size-[42px]",
            )}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span className="block text-xl font-light leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-[5px]" aria-hidden>
                <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                <span className="block h-[2px] w-[18px] rounded-full bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  return <SiteHeaderBar key={pathname} pathname={pathname} />;
}
