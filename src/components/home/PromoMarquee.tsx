import { marketingHomeContent } from "@/data/marketing-home";

export function PromoMarquee() {
  const { text } = marketingHomeContent.marquee;
  const repeated = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="promo-marquee__item">
      {text}
    </span>
  ));

  return (
    <div className="promo-marquee" aria-hidden="true">
      <div className="promo-marquee__track">{repeated}</div>
    </div>
  );
}
