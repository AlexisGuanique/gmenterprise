import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { buildInquiryContactUrl } from "@/lib/inquiry";
import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

type ServiceCategoriesSectionProps = { locale: Locale };

export function ServiceCategoriesSection({ locale }: ServiceCategoriesSectionProps) {
  const { title, items } = marketingHomeContent.categories;

  return (
    <section className="service-categories section-padding">
      <div className="service-categories__inner mx-auto max-w-7xl">
        <AnimateOnScroll variant="fade-up">
          <h2 className="service-categories__title">{title}</h2>
        </AnimateOnScroll>
        <ul className="service-categories__grid">
          {items.map((category, index) => (
            <li key={category.id}>
              <AnimateOnScroll variant="scale-in" delay={index * 90}>
                <Link
                  href={buildInquiryContactUrl(locale, { service: category.label })}
                  className="service-category-card service-category-card--animated"
                >
                  <div className="service-category-card__media">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="service-category-card__image"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <span className="service-category-card__label">{category.label}</span>
                </Link>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
