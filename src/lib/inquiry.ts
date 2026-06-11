import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";

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
