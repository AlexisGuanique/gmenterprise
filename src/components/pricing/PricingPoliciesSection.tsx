import Link from "next/link";
import { pricingContent } from "@/data/pricing";
import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";

type PricingPoliciesSectionProps = {
  locale: Locale;
};

export function PricingPoliciesSection({ locale }: PricingPoliciesSectionProps) {
  const { policies } = pricingContent;

  return (
    <section className="pricing-policies section-padding section-green">
      <div className="pricing-policies__inner mx-auto max-w-4xl">
        <div className="pricing-policies__block">
          <h2 className="pricing-policies__title">{policies.cancellation.title}</h2>
          <ul className="pricing-policies__list">
            {policies.cancellation.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pricing-policies__block">
          <h2 className="pricing-policies__title">{policies.billing.title}</h2>
          <ul className="pricing-policies__list">
            {policies.billing.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="pricing-policies__disclaimer">{policies.disclaimer}</p>

        <p className="pricing-policies__link">
          <Link
            href={localePath(locale, "/refund-policy")}
            className="text-primary-bright hover:underline"
          >
            View full Refund & Cancellation Policy
          </Link>
        </p>
      </div>
    </section>
  );
}
