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
    <header className="relative sticky top-0 z-50 flex h-[88px] items-center border-b border-slate-200/80 bg-slate-50 max-md:h-[72px] max-[480px]:h-[66px]">
      {menuOpen ? (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-[40] bg-[#0f172a]/25 backdrop-blur-[1px] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div
        className={cn(
          "relative z-[50] mx-auto flex h-full w-full max-w-[1640px] items-center justify-between gap-4 px-6 sm:px-10 md:px-6 lg:px-4",
        )}
      >
        <BrandLogo imageClassName="h-16 max-h-16 max-w-[min(200px,46vw)] object-left max-[820px]:h-10" />

        <div className="flex items-center gap-2 md:gap-3">
          <PrimaryNav pathname={pathname} menuOpen={menuOpen} />
          <LocaleSwitcher />
          <button
            type="button"
            className="relative z-[51] hidden size-[46px] shrink-0 place-items-center rounded-full border border-slate-300/90 bg-white text-[#0f172a] shadow-sm transition-colors hover:bg-slate-50 max-md:inline-grid max-[480px]:size-[42px]"
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
