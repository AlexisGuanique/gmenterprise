import type { Locale } from "@/lib/locales";
import { buildInquiryContactUrl, getPlanDisplayPrice } from "@/lib/inquiry";
import { pricingContent } from "@/data/pricing";
import { PricingPlanCard } from "@/components/pricing/PricingPlanCard";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

type PricingPlansGridProps = {
  locale: Locale;
};

export function PricingPlansGrid({ locale }: PricingPlansGridProps) {
  return (
    <section className="pricing-plans section-padding bg-surface">
      <div className="pricing-plans__inner mx-auto max-w-7xl">
        <div className="pricing-plans__grid">
          {pricingContent.plans.map((plan, index) => {
            const ctaHref = buildInquiryContactUrl(locale, {
              plan: plan.name,
              planId: plan.id,
              price: getPlanDisplayPrice(plan),
            });

            return (
              <AnimateOnScroll
                key={plan.id}
                delay={index * 100}
                variant="scale-in"
                className="h-full"
              >
                <PricingPlanCard plan={plan} ctaHref={ctaHref} />
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
