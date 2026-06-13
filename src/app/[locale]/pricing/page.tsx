import type { Metadata } from "next";
import { NewArrivalsSection } from "@/components/home/MarketingServicesSections";
import { PageHero } from "@/components/shared/PageHero";
import { PricingAddonsSection } from "@/components/pricing/PricingAddonsSection";
import { PricingFAQSection } from "@/components/pricing/PricingFAQSection";
import { PricingHeroIntro } from "@/components/pricing/PricingHeroIntro";
import { PricingPlansGrid } from "@/components/pricing/PricingPlansGrid";
import { PricingPoliciesSection } from "@/components/pricing/PricingPoliciesSection";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Pricing",
};

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  return (
    <>
      <PageHero locale={typedLocale} content={pageHeroes.pricing} />
      <PricingHeroIntro />
      <NewArrivalsSection locale={typedLocale} />
      <PricingPlansGrid locale={typedLocale} />
      <PricingAddonsSection />
      <PricingPoliciesSection locale={typedLocale} />
      <PricingFAQSection />
    </>
  );
}
