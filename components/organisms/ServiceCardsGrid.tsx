import { ServiceCard } from "@/components/molecules/ServiceCard";
import { ScrollRevealList, ScrollRevealItem } from "@/components/atoms/ScrollReveal";
import type { ServiceCardContent } from "@/types/content";

type ServiceCardsGridProps = {
  cards: ServiceCardContent[];
};

export function ServiceCardsGrid({ cards }: ServiceCardsGridProps) {
  return (
    <ScrollRevealList
      className="grid grid-cols-1 gap-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3"
      staggerDelay={0.08}
    >
      {cards.map((card) => (
        <ScrollRevealItem key={card.href}>
          <ServiceCard card={card} />
        </ScrollRevealItem>
      ))}
    </ScrollRevealList>
  );
}
