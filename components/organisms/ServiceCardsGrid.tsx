import { ServiceCard } from "@/components/molecules/ServiceCard";
import type { ServiceCardContent } from "@/types/content";

type ServiceCardsGridProps = {
  cards: ServiceCardContent[];
};

export function ServiceCardsGrid({ cards }: ServiceCardsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3">
      {cards.map((card) => (
        <ServiceCard key={card.href} card={card} />
      ))}
    </div>
  );
}
