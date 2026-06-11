import type { Locale } from "@/lib/locales";
import { getEnabledHomeSections } from "@/config/home-sections";
import { FeaturesBar } from "@/components/home/FeaturesBar";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import {
  NewArrivalsSection,
  TrendingServicesSection,
} from "@/components/home/MarketingServicesSections";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PromoBannersGrid } from "@/components/home/PromoBannersGrid";
import { PromoMarquee } from "@/components/home/PromoMarquee";
import { ServiceCategoriesSection } from "@/components/home/ServiceCategoriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TopBrandsSection } from "@/components/home/TopBrandsSection";

type HomeSectionsProps = {
  locale: Locale;
};

export function HomeSections({ locale }: HomeSectionsProps) {
  const sections = getEnabledHomeSections();

  return (
    <>
      {sections.map((id) => {
        switch (id) {
          case "heroCarousel":
            return <HeroCarousel key={id} locale={locale} />;
          case "promoMarquee":
            return <PromoMarquee key={id} />;
          case "promoBanners":
            return <PromoBannersGrid key={id} locale={locale} />;
          case "topBrands":
            return <TopBrandsSection key={id} />;
          case "trendingServices":
            return <TrendingServicesSection key={id} locale={locale} />;
          case "homeAbout":
            return <HomeAboutSection key={id} />;
          case "newArrivals":
            return <NewArrivalsSection key={id} locale={locale} />;
          case "featuresBar":
            return <FeaturesBar key={id} />;
          case "testimonials":
            return <TestimonialsSection key={id} />;
          case "serviceCategories":
            return <ServiceCategoriesSection key={id} locale={locale} />;
          case "newsletter":
            return <NewsletterSection key={id} />;
          default:
            return null;
        }
      })}
    </>
  );
}
