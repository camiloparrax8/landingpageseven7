import { Link } from "@/i18n/navigation";
import { ServiceCardIcon } from "@/components/atoms/ServiceCardIcon";
import type { ServiceCardContent } from "@/types/content";

type ServiceCardProps = {
  card: ServiceCardContent;
};

export function ServiceCard({ card }: ServiceCardProps) {
  const { title, description, href, linkLabel } = card;
  return (
    <Link
      href={href}
      aria-label={linkLabel}
      className="flex min-h-[280px] flex-col rounded-[18px] border border-ink/[0.08] bg-white p-7 shadow-[0_10px_28px_rgba(29,53,80,0.05)] transition-[border-color,box-shadow] hover:border-ink/[0.14] hover:shadow-[0_12px_32px_rgba(29,53,80,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent max-[480px]:px-[18px] max-[480px]:py-[22px]"
    >
      <article className="flex flex-col">
        <div
          className={
            "mb-[22px] grid h-[54px] w-[54px] place-items-center rounded-2xl bg-panel text-ink" +
            ("icon" in card && card.icon ? "" : " text-sm font-bold tracking-[-0.01em]")
          }
        >
          {"icon" in card && card.icon ? (
            <ServiceCardIcon id={card.icon} />
          ) : (
            "index" in card && card.index
          )}
        </div>
        <h3 className="m-0 mb-3 text-[22px] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
          {title}
        </h3>
        <p className="m-0 text-base leading-[1.7] text-muted">{description}</p>
      </article>
    </Link>
  );
}
