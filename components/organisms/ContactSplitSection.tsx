"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { ButtonLink, BUTTON_PRIMARY_CLASS } from "@/components/atoms/ButtonLink";
import { FormField, FIELD_CONTROL_CLASS } from "@/components/molecules/FormField";
import { FOOTER_CONTACT } from "@/content/footer";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import { CONTACT_SECTION_BACKGROUND_LAYERS } from "@/lib/site-assets";
import { cn } from "@/lib/cn";

const NEED_KEYS = [
  "consulting",
  "ai",
  "web",
  "mobile",
  "customSoftware",
  "digital",
] as const;

const control = cn(
  FIELD_CONTROL_CLASS,
  "outline-none transition-[border-color,box-shadow] focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/35",
);

const textareaControl = cn(control, "min-h-[132px] resize-y align-top");

const selectControl = cn(
  control,
  "cursor-pointer appearance-none pr-11",
);

/** Mismo cuerpo que ubicación (Bogotá), en negrita; enlaces con subrayado al hover. */
const linkChannel =
  "text-[15px] font-bold leading-[1.6] text-muted underline-offset-[5px] transition-colors hover:text-ink-soft hover:underline";

const asideIconBox =
  "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-panel text-ink ring-1 ring-ink/[0.06]";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormStatus =
  | { type: "idle" }
  | { type: "error"; message: string }
  | { type: "info"; message: string };

export function ContactSplitSection() {
  const t = useTranslations("contact.form");
  const tAside = useTranslations("contact.aside");
  const mailto = `mailto:${FOOTER_CONTACT.email}`;
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const empresa = String(fd.get("empresa") ?? "").trim();
    const correo = String(fd.get("correo") ?? "").trim();
    const telefono = String(fd.get("telefono") ?? "").trim();
    const necesidad = String(fd.get("necesidad") ?? "").trim();
    const mensaje = String(fd.get("mensaje") ?? "").trim();

    if (!nombre || !correo || !mensaje) {
      setFormStatus({ type: "error", message: t("validationRequired") });
      return;
    }
    if (!emailPattern.test(correo)) {
      setFormStatus({ type: "error", message: t("validationEmailInvalid") });
      return;
    }

    const needKnown =
      necesidad !== "" &&
      (NEED_KEYS as readonly string[]).includes(necesidad);
    const needLine = needKnown
      ? t(`needOptions.${necesidad as (typeof NEED_KEYS)[number]}`)
      : "—";

    const body = [
      `${t("nameLabel")}: ${nombre}`,
      `${t("companyLabel")}: ${empresa || "—"}`,
      `${t("emailLabel")}: ${correo}`,
      `${t("phoneLabel")}: ${telefono || "—"}`,
      `${t("needLabel")}: ${needLine}`,
      "",
      `${t("messageLabel")}:`,
      mensaje,
    ].join("\n");

    const href = `mailto:${FOOTER_CONTACT.email}?subject=${encodeURIComponent(t("mailSubject"))}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    setFormStatus({
      type: "info",
      message: t("submitOpenedMailto", { email: FOOTER_CONTACT.email }),
    });
  };

  return (
    <section
      id="contacto"
      className={cn(
        SECTION_Y,
        "relative overflow-hidden border-t border-ink/[0.09] bg-slate-200/75",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: CONTACT_SECTION_BACKGROUND_LAYERS }}
        aria-hidden
      />
      <div
        className={cn(
          CONTAINER,
          "relative z-[1] grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:items-stretch lg:gap-10 xl:gap-12",
        )}
      >
        <div
          className={cn(
            "flex h-full min-h-0 min-w-0 flex-col rounded-[20px] border border-ink/[0.08] bg-white/90 p-7 shadow-[0_10px_28px_rgba(29,53,80,0.05)] backdrop-blur-sm",
            "max-[480px]:px-[18px] max-[480px]:py-[22px] md:p-8",
          )}
        >
          <h2 className="sr-only">{t("sectionTitle")}</h2>
          <p className="m-0 max-w-[36rem] text-base leading-[1.65] text-muted">
            {t("lead")}
          </p>

          <div
            className="mt-3 min-h-[1.25rem] text-sm font-medium leading-snug"
            aria-live="polite"
            role="status"
          >
            {formStatus.type === "error" ? (
              <span className="text-[#b45309]">{formStatus.message}</span>
            ) : formStatus.type === "info" ? (
              <span className="text-ink-soft">{formStatus.message}</span>
            ) : null}
          </div>

          <form
            className="mt-6 flex min-h-0 flex-1 flex-col"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField id="nombre" label={t("nameLabel")}>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                placeholder={t("namePlaceholder")}
                className={control}
              />
            </FormField>
            <FormField id="empresa" label={t("companyLabel")}>
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                placeholder={t("companyPlaceholder")}
                className={control}
              />
            </FormField>
            <FormField id="correo" label={t("emailLabel")}>
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="email"
                required
                placeholder={t("emailPlaceholder")}
                className={control}
              />
            </FormField>
            <FormField id="telefono" label={t("phoneLabel")}>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                placeholder={t("phonePlaceholder")}
                className={control}
              />
            </FormField>
            <FormField id="necesidad" label={t("needLabel")} fullWidth>
              <div className="relative">
                <select
                  id="necesidad"
                  name="necesidad"
                  defaultValue=""
                  className={selectControl}
                >
                  <option value="">{t("needPlaceholder")}</option>
                  {NEED_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {t(`needOptions.${key}`)}
                    </option>
                  ))}
                </select>
                <span
                  className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted"
                  aria-hidden
                >
                  <svg
                    className="size-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </FormField>
            <FormField id="mensaje" label={t("messageLabel")} fullWidth>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                placeholder={t("messagePlaceholder")}
                className={textareaControl}
              />
            </FormField>
            </div>

            <div className="mt-auto border-t border-ink/[0.08] pt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
                <button
                  type="submit"
                  className={cn(
                    BUTTON_PRIMARY_CLASS,
                    "w-full min-w-0 sm:w-auto sm:min-w-[180px]",
                  )}
                >
                  {t("submitLabel")}
                </button>
              </div>
            </div>
          </form>
        </div>

        <aside
          className={cn(
            "flex h-full min-h-0 flex-col rounded-[20px] border border-ink/[0.08] bg-white/85 p-7 shadow-[0_10px_28px_rgba(29,53,80,0.05)] backdrop-blur-xl",
            "max-md:p-6 max-[480px]:p-[18px] md:p-8",
          )}
        >
          <Eyebrow className="mb-2.5">{tAside("eyebrow")}</Eyebrow>
          <p className="m-0 max-w-[28rem] text-base font-normal leading-[1.65] text-muted">
            {tAside("title")}
          </p>

          <dl className="mt-8 grid gap-3.5">
            <div className="flex gap-3.5">
              <span className={asideIconBox} aria-hidden>
                <IconMapPin className="size-[18px]" />
              </span>
              <div className="min-w-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  {tAside("locationLabel")}
                </dt>
                <dd className="m-0 mt-1.5 text-[15px] font-normal leading-[1.6] text-muted">
                  {tAside("locationLine")}
                </dd>
              </div>
            </div>
            <div className="flex gap-3.5">
              <span className={asideIconBox} aria-hidden>
                <IconMail className="size-[18px]" />
              </span>
              <div className="min-w-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  {tAside("emailLabel")}
                </dt>
                <dd className="m-0 mt-1.5">
                  <a href={mailto} className={linkChannel}>
                    {FOOTER_CONTACT.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3.5">
              <span className={asideIconBox} aria-hidden>
                <IconPhone className="size-[18px]" />
              </span>
              <div className="min-w-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  {tAside("phoneLabel")}
                </dt>
                <dd className="m-0 mt-1.5">
                  <a href={FOOTER_CONTACT.phoneHref} className={linkChannel}>
                    {FOOTER_CONTACT.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-auto border-t border-ink/[0.08] pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={mailto}
                variant="secondary"
                external
                className="w-full justify-center sm:w-auto sm:flex-1 sm:justify-center"
              >
                {tAside("openEmail")}
              </ButtonLink>
              <ButtonLink
                href={FOOTER_CONTACT.whatsappHref}
                variant="primary"
                external
                className="w-full justify-center sm:w-auto sm:flex-1 sm:justify-center"
              >
                {tAside("whatsapp")}
              </ButtonLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
