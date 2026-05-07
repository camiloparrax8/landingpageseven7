import { Eyebrow } from "@/components/atoms/Eyebrow";
import { ButtonLink, BUTTON_PRIMARY_CLASS } from "@/components/atoms/ButtonLink";
import { FormField, FIELD_CONTROL_CLASS } from "@/components/molecules/FormField";
import { FOOTER_CONTACT } from "@/content/footer";
import { CONTAINER, SECTION_Y } from "@/lib/layout";
import { cn } from "@/lib/cn";

const NEED_OPTIONS = [
  "Consultoría tecnológica",
  "Inteligencia artificial",
  "Desarrollo web",
  "Aplicaciones móviles",
  "Software a la medida",
  "Transformación digital",
] as const;

const control = cn(
  FIELD_CONTROL_CLASS,
  "outline-none transition-[border-color,box-shadow] focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/35",
);

const textareaControl = cn(control, "min-h-[132px] resize-y align-top");

const linkChannel =
  "text-[17px] font-semibold tracking-[-0.02em] text-ink underline-offset-[6px] transition-colors hover:text-ink/80 hover:underline";

export function ContactSplitSection() {
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
          <Eyebrow className="mb-2.5">Escribir</Eyebrow>
          <h2 className="m-0 mb-2.5 text-2xl font-normal leading-[1.15] tracking-[-0.02em] text-ink">
            Un mensaje breve basta
          </h2>
          <p className="m-0 max-w-[28rem] text-base leading-[1.65] text-muted">
            Etapa del proyecto, prioridad y contexto. Respondemos con claridad
            sobre alcance y siguientes pasos.
          </p>
          <form className="mt-8 grid grid-cols-1 gap-5" action="#">
            <FormField id="nombre" label="Nombre">
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                placeholder="Nombre"
                className={control}
              />
            </FormField>
            <FormField id="empresa" label="Empresa">
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                placeholder="Empresa (opcional)"
                className={control}
              />
            </FormField>
            <FormField id="correo" label="Correo">
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="email"
                placeholder="correo@empresa.com"
                className={control}
              />
            </FormField>
            <FormField id="telefono" label="Teléfono">
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                placeholder="+57 300 860 0667"
                className={control}
              />
            </FormField>
            <FormField id="necesidad" label="¿Qué necesitas?">
              <select
                id="necesidad"
                name="necesidad"
                defaultValue=""
                className={control}
              >
                <option value="">Seleccionar</option>
                {NEED_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField id="mensaje" label="Mensaje">
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Contexto breve del proyecto o la necesidad."
                className={textareaControl}
              />
            </FormField>
            <div className="pt-1">
              <button type="submit" className={cn(BUTTON_PRIMARY_CLASS, "min-w-[180px]")}>
                Enviar
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
          <Eyebrow className="mb-2.5">Sin formulario</Eyebrow>
          <p className="m-0 text-base font-normal leading-[1.55] text-ink">
            Mismo equipo por correo, teléfono o WhatsApp.
          </p>

          <dl className="mt-8 grid gap-7">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Ubicación
              </dt>
              <dd className="m-0 mt-2 text-[15px] leading-[1.6] text-muted">
                {FOOTER_CONTACT.location}
                <span className="mt-1 block text-[14px] leading-relaxed text-muted/90">
                  Proyectos remotos y presenciales según alcance.
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Correo
              </dt>
              <dd className="m-0 mt-2">
                <a href={mailto} className={linkChannel}>
                  {FOOTER_CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Teléfono
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
              Abrir correo
            </ButtonLink>
            <ButtonLink
              href={FOOTER_CONTACT.whatsappHref}
              variant="primary"
              external
            >
              WhatsApp
            </ButtonLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
