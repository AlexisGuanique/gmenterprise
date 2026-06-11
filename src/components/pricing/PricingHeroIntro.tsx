import { pricingContent } from "@/data/pricing";

export function PricingHeroIntro() {
  const { hero } = pricingContent;

  return (
    <section className="pricing-intro section-padding bg-white">
      <div className="pricing-intro__inner mx-auto max-w-3xl text-center">
        <p className="pricing-intro__subtitle">{hero.subtitle}</p>
        <p className="pricing-intro__range">{hero.priceRange}</p>
        <p className="pricing-intro__disclaimer">{hero.disclaimer}</p>
      </div>
    </section>
  );
}
