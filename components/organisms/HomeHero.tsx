import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { HeroLead } from "@/components/atoms/HeroLead";
import { HeroTitle } from "@/components/atoms/HeroTitle";
import { HeroPoint } from "@/components/molecules/HeroPoint";
import { HOME_HERO_POINTS } from "@/content/home";
import { CONTAINER } from "@/lib/layout";
import { HERO_BACKGROUND_LAYERS } from "@/lib/site-assets";

export function HomeHero() {
  return (
    <section
      className=" px-4 sm:px-12 relative flex min-h-[calc(80svh-88px)] max-md:min-h-[calc(100svh-72px)] max-[480px]:min-h-[calc(100svh-66px)] items-stretch overflow-hidden lg:px-24"
      id="inicio"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: HERO_BACKGROUND_LAYERS }}
        aria-hidden="true"
      />
      <div
        className={`${CONTAINER} relative z-[1] grid w-full grid-cols-1 items-end gap-8 py-[86px] pb-[74px] max-[1100px]:grid-cols-1 max-md:gap-8 max-md:py-14 max-md:pb-12 max-[480px]:gap-7 max-[480px]:py-11 max-[480px]:pb-10 lg:grid-cols-[minmax(0,720px)_minmax(320px,1fr)] lg:gap-12`}
      >
        <div>
          <Eyebrow>Seven7 Company</Eyebrow>
          <HeroTitle>Tecnología para avanzar con claridad.</HeroTitle>
          <HeroLead>
            Desarrollamos soluciones web, apps, software e inteligencia
            artificial para empresas que necesitan avanzar con orden, visión y
            ejecución.
          </HeroLead>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href="/services" variant="primary">
              Ver servicios
            </ButtonLink>
            <ButtonLink href="/contacto" variant="secondary">
              Agendar llamada
            </ButtonLink>
          </div>
        </div>
        <aside className="w-full max-w-full justify-self-start rounded-[24px] border border-ink/[0.1] bg-white/58 p-[30px] shadow-default backdrop-blur-2xl max-[1100px]:max-w-[540px] max-md:p-[22px] max-[480px]:p-[18px] lg:max-w-[410px] lg:justify-self-end">
          <h3 className="m-0 mb-[18px] text-base font-normal leading-[1.3] text-ink">
            Soluciones concretas para empresas que necesitan construir, ordenar o
            evolucionar.
          </h3>
          <div className="grid gap-3.5">
            {HOME_HERO_POINTS.map((p) => (
              <HeroPoint
                key={p.title}
                icon={p.icon}
                title={p.title}
                text={p.text}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
