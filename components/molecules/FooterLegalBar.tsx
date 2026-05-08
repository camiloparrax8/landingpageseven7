"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LegalModal } from "@/components/molecules/LegalModal";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@/content/legal-docs";

type OpenKind = "privacy" | "terms" | null;

export function FooterLegalBar() {
  const [open, setOpen] = useState<OpenKind>(null);
  const t = useTranslations("common.footer");

  const linkClass =
    "cursor-pointer border-0 bg-transparent p-0 text-left text-[13px] text-white/56 underline-offset-[5px] transition-colors hover:text-white/92 hover:underline";

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <button
          type="button"
          className={linkClass}
          onClick={() => setOpen("privacy")}
        >
          {t("privacy")}
        </button>
        <span aria-hidden className="text-white/38">
          ·
        </span>
        <button
          type="button"
          className={linkClass}
          onClick={() => setOpen("terms")}
        >
          {t("terms")}
        </button>
      </div>

      <LegalModal
        open={open === "privacy"}
        onClose={() => setOpen(null)}
        doc={PRIVACY_POLICY}
      />
      <LegalModal
        open={open === "terms"}
        onClose={() => setOpen(null)}
        doc={TERMS_OF_USE}
      />
    </>
  );
}
