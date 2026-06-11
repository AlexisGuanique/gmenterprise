import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { buildInquiryContactUrl } from "@/lib/inquiry";
import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

type PromoBannersGridProps = { locale: Locale };

export function PromoBannersGrid({ locale }: PromoBannersGridProps) {
  const banners = marketingHomeContent.promoBanners;
  const [large1, small1, small2, large2] = banners;

  return (
    <section className="promo-banners section-padding">
      <div className="promo-banners__inner mx-auto max-w-7xl">
        <div className="promo-banners__grid">
          {[large1, small1, small2, large2].map((banner, index) => (
            <AnimateOnScroll
              key={banner.id}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 120}
            >
              <Link
                href={buildInquiryContactUrl(locale, {
                  service: banner.subtitle,
                  price: "See pricing page",
                })}
                className={`promo-banner promo-banner--animated promo-banner--${banner.variant ?? "small"}`}
              >
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  className="promo-banner__image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="promo-banner__overlay" />
                <div className="promo-banner__content">
                  <h3 className="promo-banner__title">{banner.title}</h3>
                  <p className="promo-banner__subtitle">{banner.subtitle}</p>
                  <span className="promo-banner__cta">{banner.cta}</span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
