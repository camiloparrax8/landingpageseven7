"use client";

import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { ButtonLink, BUTTON_PRIMARY_CLASS } from "@/components/atoms/ButtonLink";
import { FormField, FIELD_CONTROL_CLASS } from "@/components/molecules/FormField";
import { FOOTER_CONTACT } from "@/content/footer";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
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

const linkChannel =
  "text-[17px] font-semibold tracking-[-0.02em] text-ink underline-offset-[6px] transition-colors hover:text-ink/80 hover:underline";

export function ContactSplitSection() {
  const t = useTranslations("contact.form");
  const tAside = useTranslations("contact.aside");
  const mailto = `mailto:${FOOTER_CONTACT.email}`;

  return (
    <section
      id="contacto"
      className={`${SECTION_Y} border-t border-ink/[0.06] bg-white`}
    >
      <div
        className={`${CONTAINER} grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-16`}
      >
        <div
          className={cn(
            "rounded-[18px] border border-ink/[0.08] bg-white p-7 shadow-[0_10px_28px_rgba(29,53,80,0.05)]",
            "max-[480px]:px-[18px] max-[480px]:py-[22px]",
          )}
        >
          <Eyebrow className="mb-2.5">{t("eyebrow")}</Eyebrow>
          <h2 className="m-0 mb-2.5 text-2xl font-normal leading-[1.15] tracking-[-0.02em] text-ink">
            {t("title")}
          </h2>
          <p className="m-0 max-w-[28rem] text-base leading-[1.65] text-muted">
            {t("description")}
          </p>
          <form className="mt-8 grid grid-cols-1 gap-5" action="#">
            <FormField id="nombre" label={t("nameLabel")}>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
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
            <FormField id="necesidad" label={t("needLabel")}>
              <select
                id="necesidad"
                name="necesidad"
                defaultValue=""
                className={control}
              >
                <option value="">{t("needPlaceholder")}</option>
                {NEED_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t(`needOptions.${key}`)}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField id="mensaje" label={t("messageLabel")}>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder={t("messagePlaceholder")}
                className={textareaControl}
              />
            </FormField>
            <div className="pt-1">
              <button
                type="submit"
                className={cn(BUTTON_PRIMARY_CLASS, "min-w-[180px]")}
              >
                {t("submitLabel")}
              </button>
            </div>
          </form>
        </div>

        <aside
          className={cn(
            "flex flex-col rounded-[24px] border border-ink/[0.1] bg-white/58 p-8 backdrop-blur-2xl",
            "shadow-[0_10px_40px_rgba(29,53,80,0.04)] max-md:p-6 max-[480px]:p-[18px]",
            "lg:max-w-[min(400px,100%)] lg:justify-self-end",
          )}
        >
          <Eyebrow className="mb-2.5">{tAside("eyebrow")}</Eyebrow>
          <p className="m-0 text-base font-normal leading-[1.55] text-ink">
            {tAside("title")}
          </p>

          <dl className="mt-8 grid gap-7">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {tAside("locationLabel")}
              </dt>
              <dd className="m-0 mt-2 text-[15px] leading-[1.6] text-muted">
                {tAside("locationLine")}
                <span className="mt-1 block text-[14px] leading-relaxed text-muted/90">
                  {tAside("locationNote")}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {tAside("emailLabel")}
              </dt>
              <dd className="m-0 mt-2">
                <a href={mailto} className={linkChannel}>
                  {FOOTER_CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {tAside("phoneLabel")}
              </dt>
              <dd className="m-0 mt-2">
                <a href={FOOTER_CONTACT.phoneHref} className={linkChannel}>
                  {FOOTER_CONTACT.phone}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={mailto} variant="secondary" external>
              {tAside("openEmail")}
            </ButtonLink>
            <ButtonLink
              href={FOOTER_CONTACT.whatsappHref}
              variant="primary"
              external
            >
              {tAside("whatsapp")}
            </ButtonLink>
          </div>
        </aside>
      </div>
    </section>
  );
}

