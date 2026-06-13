import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";
import { getSquareCheckoutUrl } from "@/lib/square";
import type { PricingPlan } from "@/data/pricing";

export type InquiryParams = {
  plan?: string;
  planId?: string;
  price?: string;
  service?: string;
};

export function buildInquiryContactUrl(
  locale: Locale,
  params: InquiryParams,
): string {
  const search = new URLSearchParams();

  if (params.plan) search.set("plan", params.plan);
  if (params.planId) search.set("planId", params.planId);
  if (params.price) search.set("price", params.price);
  if (params.service) search.set("service", params.service);

  const query = search.toString();
  const path = query ? `/contact?${query}` : "/contact";

  return localePath(locale, path);
}

export function getPlanDisplayPrice(plan: {
  setupPrice?: string;
  monthlyPrice?: string;
}): string {
  if (plan.setupPrice && plan.monthlyPrice) {
    return `${plan.setupPrice} setup + ${plan.monthlyPrice}`;
  }
  if (plan.monthlyPrice) return plan.monthlyPrice;
  if (plan.setupPrice) return plan.setupPrice;
  return "";
}

export function getPlanCheckoutUrl(locale: Locale, plan: PricingPlan): string {
  const squareUrl = getSquareCheckoutUrl(plan.id);
  if (squareUrl) return squareUrl;

  return buildInquiryContactUrl(locale, {
    plan: plan.name,
    planId: plan.id,
    price: getPlanDisplayPrice(plan),
  });
}
