import { ServiceCardIcon } from "@/components/atoms/ServiceCardIcon";
import type { ServiceCardIconId } from "@/types/content";

type InfoCardProps = {
  title: string;
  /** Si se define, muestra el mismo pictograma que las tarjetas de servicio. */
  icon?: ServiceCardIconId;
  children: React.ReactNode;
};

export function InfoCard({ title, icon, children }: InfoCardProps) {
  return (
    <article className="flex flex-col rounded-[18px] border border-ink/[0.08] bg-white p-7 shadow-[0_10px_28px_rgba(29,53,80,0.05)] max-[480px]:px-[18px] max-[480px]:py-[22px]">
      {icon ? (
        <div
          className="mb-[22px] grid h-[54px] w-[54px] shrink-0 place-items-center rounded-2xl bg-panel text-ink"
          aria-hidden
        >
          <ServiceCardIcon id={icon} />
        </div>
      ) : null}
      <h3 className="m-0 mb-3 text-2xl font-normal leading-[1.12] tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <div className="[&>p]:m-0 [&>p]:text-base [&>p]:leading-[1.7] [&>p]:text-muted [&>ul]:m-0 [&>ul]:pl-[18px] [&>li]:text-base [&>li]:leading-[1.7] [&>li]:text-muted">
        {children}
      </div>
    </article>
  );
}
