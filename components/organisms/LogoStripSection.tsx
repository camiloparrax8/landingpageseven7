"use client";

import { useCallback, useRef } from "react";
import { CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/cn";

export type LogoStripItem = {
  src: string;
  alt: string;
};

type LogoStripSectionProps = {
  title: string;
  logos: readonly LogoStripItem[];
};

function CarouselNavButton({
  direction,
  label,
  onClick,
}: {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/[0.1] bg-white text-lg text-ink shadow-sm transition-colors hover:border-ink/[0.18] hover:bg-panel",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      )}
    >
      <span aria-hidden className="block translate-y-px font-bold leading-none">
        {direction === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
}

export function LogoStripSection({ title, logos }: LogoStripSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.max(200, Math.floor(el.clientWidth * 0.72)) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <section className="border-y border-ink/[0.06] bg-white py-8 max-md:py-7">
      <div className={`${CONTAINER} grid gap-5`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-muted">
            {title}
          </div>
          <div className="flex gap-2">
            <CarouselNavButton
              direction="prev"
              label="Logos anteriores"
              onClick={() => scrollByPage(-1)}
            />
            <CarouselNavButton
              direction="next"
              label="Logos siguientes"
              onClick={() => scrollByPage(1)}
            />
          </div>
        </div>

        <div className="relative -mx-4 min-w-0 sm:-mx-6 md:mx-0">
          <div
            ref={scrollerRef}
            role="region"
            aria-label={title}
            tabIndex={0}
            className={cn(
              "flex gap-10 overflow-x-auto px-4 pb-1 pt-1 sm:gap-12 sm:px-6 md:gap-14 md:px-0",
              "scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="flex shrink-0 snap-center items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[min(160px,28vw)] object-contain object-center grayscale opacity-90 transition-[filter,opacity] hover:opacity-100 sm:h-11 sm:max-w-[180px] md:h-12 md:max-w-[200px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
