import Link from "next/link";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { FooterLegalBar } from "@/components/molecules/FooterLegalBar";
import { SITE_ASSETS } from "@/lib/site-assets";
import {
  FOOTER_CONTACT,
  FOOTER_LINKS,
  FOOTER_TAGLINE,
} from "@/content/footer";
import { CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  return (
    <footer className="bg-footer pb-[26px] pt-[58px] text-white/75">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-10 max-[1100px]:grid-cols-2 max-[1100px]:gap-9 lg:grid-cols-[1.15fr_0.8fr_0.85fr] lg:gap-10">
          <div>
            <BrandLogo
              imageSrc={SITE_ASSETS.logoWhite}
              className="inline-flex shrink-0"
              imageClassName="h-[52px] w-auto max-h-[52px] max-w-[min(260px,70vw)] object-contain object-left max-[820px]:h-[46px] max-[820px]:max-h-[46px]"
            />
            <p className="mt-[18px] max-w-[320px] text-[15px] leading-[1.7] text-white/68">
              {FOOTER_TAGLINE}
            </p>
          </div>
          <div className="max-[1100px]:col-span-1 max-md:col-auto lg:col-auto">
            <h3 className="m-0 mb-4 text-sm uppercase tracking-[0.12em] text-white/56">
              Enlaces
            </h3>
            <div className="grid gap-3">
              {FOOTER_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[15px] leading-[1.5] text-white/84 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-[1100px]:col-span-full max-md:col-auto lg:col-auto">
            <h3 className="m-0 mb-4 text-sm uppercase tracking-[0.12em] text-white/56">
              Contacto
            </h3>
            <div className="grid gap-3">
              <span className="text-[15px] leading-[1.5] text-white/84">
                {FOOTER_CONTACT.location}
              </span>
              <a
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="text-[15px] leading-[1.5] text-white/84 hover:text-white"
              >
                {FOOTER_CONTACT.email}
              </a>
              <a
                href={FOOTER_CONTACT.phoneHref}
                className="text-[15px] leading-[1.5] text-white/84 hover:text-white"
              >
                {FOOTER_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "mt-[42px] flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-[22px] text-[13px] text-white/54",
            "max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-1.5",
          )}
        >
          <span>© 2025 Seven7 Company. Todos los derechos reservados.</span>
          <FooterLegalBar />
        </div>
      </div>
    </footer>
  );
}
