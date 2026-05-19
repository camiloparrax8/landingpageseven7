"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
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
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/[0.06] bg-white/80 text-sm text-ink/45 backdrop-blur-sm transition-colors",
        "hover:border-ink/[0.12] hover:bg-panel hover:text-ink/75",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      )}
    >
      <span aria-hidden className="block translate-y-px font-semibold leading-none">
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
    const delta = Math.max(180, Math.floor(el.clientWidth * 0.65)) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-y border-ink/[0.06] bg-white py-8 max-md:py-7"
    >
      <div className={`${CONTAINER} grid min-w-0 gap-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-muted">
            {title}
          </div>
          <div className="flex gap-1.5 opacity-80 hover:opacity-100">
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
              "flex flex-nowrap gap-4 overflow-x-auto overflow-y-hidden px-4 pb-1 pt-1 sm:gap-5 sm:px-6 md:gap-6 md:px-0",
              "scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex shrink-0 snap-center items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[min(160px,28vw)] object-contain object-center grayscale opacity-90 transition-[filter,opacity] hover:opacity-100 sm:h-11 sm:max-w-[180px] md:h-12 md:max-w-[200px]"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
