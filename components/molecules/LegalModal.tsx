"use client";

import { useEffect, useId, useRef } from "react";
import type { LegalDocument } from "@/content/legal-docs";
import { cn } from "@/lib/cn";

type LegalModalProps = {
  open: boolean;
  onClose: () => void;
  doc: LegalDocument;
};

function LegalBody({ doc }: { doc: LegalDocument }) {
  return (
    <div className="space-y-7 text-[15px] leading-[1.72] text-slate-600">
      {doc.sections.map((section) => (
        <section key={section.title} className="scroll-mt-4">
          <h3 className="m-0 text-[13px] font-bold uppercase tracking-[0.14em] text-[#203549]">
            {section.title}
          </h3>
          {section.paragraphs?.length ? (
            <div className="mt-2.5 grid gap-2.5 [&>p]:m-0">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ) : null}
          {section.bullets?.length ? (
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 marker:text-[#203549]/50">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.sublists?.length
            ? section.sublists.map((sub) => (
                <div
                  key={`${section.title}-${sub.heading}-${sub.items.join("|").slice(0, 48)}`}
                  className="mt-4"
                >
                  {sub.heading ? (
                    <p className="m-0 text-[13px] font-semibold text-[#1d2939]">
                      {sub.heading}
                    </p>
                  ) : null}
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[#203549]/50">
                    {sub.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            : null}
          {section.tailParagraphs?.length ? (
            <div className="mt-2.5 grid gap-2.5 [&>p]:m-0">
              {section.tailParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function LegalModal({ open, onClose, doc }: LegalModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0f1c2a]/52 backdrop-blur-[2px]"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-[1] flex max-h-[min(720px,calc(100dvh-2rem))] w-full max-w-[42rem] flex-col rounded-[22px]",
          "border border-slate-200/95 bg-white shadow-[0_24px_70px_rgba(15,28,42,0.18)] max-sm:rounded-b-[18px]",
        )}
      >
        <header className="sticky top-0 z-[2] flex shrink-0 items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-6 py-5 backdrop-blur-[6px] sm:px-7 sm:py-6">
          <div className="min-w-0 pr-2">
            <h2
              id={titleId}
              className="m-0 text-xl font-semibold tracking-[-0.03em] text-[#172636] max-sm:text-[1.15rem]"
            >
              {doc.modalTitle}
            </h2>
            <p className="mt-1.5 m-0 text-[13px] font-medium uppercase tracking-[0.1em] text-slate-500">
              {doc.subtitle}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className={cn(
              "inline-grid size-[42px] shrink-0 place-items-center rounded-full",
              "border border-slate-200/95 bg-white text-[#203549] text-lg leading-none transition-colors hover:bg-slate-50",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            )}
            aria-label="Cerrar"
          >
            <span aria-hidden>×</span>
          </button>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-7 sm:py-8">
          <LegalBody doc={doc} />
        </div>
      </div>
    </div>
  );
}
