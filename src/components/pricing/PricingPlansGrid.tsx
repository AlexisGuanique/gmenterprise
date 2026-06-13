import type { Locale } from "@/lib/locales";
import { getPlanCheckoutUrl } from "@/lib/inquiry";
import { pricingContent } from "@/data/pricing";
import { PricingPlanCard } from "@/components/pricing/PricingPlanCard";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

type PricingPlansGridProps = {
  locale: Locale;
};

export function PricingPlansGrid({ locale }: PricingPlansGridProps) {
  const { shop, plans } = pricingContent;

  return (
    <section
      id="addons"
      className="pricing-plans shop-section section-padding bg-surface scroll-mt-28"
      aria-labelledby="shop-section-title"
    >
      <div className="pricing-plans__inner mx-auto max-w-7xl">
        <header className="shop-section__header">
          <h2 id="shop-section-title" className="shop-section__title">
            {shop.title}
          </h2>
          <p className="shop-section__subtitle">{shop.subtitle}</p>
        </header>
        <div className="pricing-plans__grid">
          {plans.map((plan, index) => (
            <AnimateOnScroll
              key={plan.id}
              delay={index * 100}
              variant="scale-in"
              className="h-full"
            >
              <PricingPlanCard
                plan={plan}
                ctaHref={getPlanCheckoutUrl(locale, plan)}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
