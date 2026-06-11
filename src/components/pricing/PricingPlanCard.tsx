import type { PricingPlan } from "@/data/pricing";
import { Button } from "@/components/shared/Button";

type PricingPlanCardProps = {
  plan: PricingPlan;
  ctaHref: string;
};

export function PricingPlanCard({ plan, ctaHref }: PricingPlanCardProps) {
  return (
    <article
      className={`pricing-card anim-card-shine anim-card-lift ${plan.highlighted ? "pricing-card--highlighted" : ""}`}
    >
      {plan.badge ? (
        <span className="pricing-card__badge">{plan.badge}</span>
      ) : null}

      <h3 className="pricing-card__name">{plan.name}</h3>

      <div className="pricing-card__prices">
        {plan.setupPrice ? (
          <p className="pricing-card__price">{plan.setupPrice}</p>
        ) : null}
        {plan.monthlyPrice ? (
          <p className="pricing-card__price pricing-card__price--monthly">
            {plan.monthlyPrice}
          </p>
        ) : null}
        <p className="pricing-card__price-label">{plan.priceLabel}</p>
        <p className="pricing-card__billing">{plan.billingNote}</p>
      </div>

      <ul className="pricing-card__features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <Button
        href={plan.cta.href ?? ctaHref}
        variant={plan.highlighted ? "gold" : "primary"}
        className="pricing-card__cta w-full"
      >
        {plan.cta.label}
      </Button>

      {plan.subscriptionNotice ? (
        <p className="pricing-card__notice">{plan.subscriptionNotice}</p>
      ) : null}
    </article>
  );
}
