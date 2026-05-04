"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { PrimaryNav } from "@/components/molecules/PrimaryNav";
import { cn } from "@/lib/cn";

function SiteHeaderBar({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 flex h-[88px] items-center border-b border-slate-200/80 bg-slate-50 max-md:h-[72px] max-[480px]:h-[66px]">
      <div
        className={cn(
          "mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-6 px-6 sm:px-10 md:px-12 lg:px-14",
        )}
      >
        <BrandLogo imageClassName="h-12 max-h-12 max-w-[min(200px,46vw)] object-left max-[820px]:h-10" />
        <PrimaryNav pathname={pathname} menuOpen={menuOpen} />
        <button
          type="button"
          className="hidden max-md:inline-grid size-[46px] place-items-center rounded-full border border-slate-300/90 bg-white text-[#0f172a] shadow-sm"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  return <SiteHeaderBar key={pathname} pathname={pathname} />;
}
