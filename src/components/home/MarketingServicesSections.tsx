"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import type { Locale } from "@/lib/locales";
import { pricingAddonsPath } from "@/lib/locales";
import type { MarketingService } from "@/data/marketing-home";
import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

type ServiceCardProps = {
  service: MarketingService;
  locale: Locale;
};

function ServiceCard({ service, locale }: ServiceCardProps) {
  const href = pricingAddonsPath(locale);

  return (
    <article className="service-card anim-card-shine">
      <Link href={href} className="service-card__media">
        <Image
          src={service.image}
          alt={service.alt}
          width={320}
          height={320}
          className="service-card__image"
        />
      </Link>
      <div className="service-card__body">
        <h3 className="service-card__name">
          <Link href={href}>{service.name}</Link>
        </h3>
        <p className="service-card__price">{service.price}</p>
        <Link href={href} className="service-card__cta service-card__cta--buy">
          View Details
        </Link>
      </div>
    </article>
  );
}

type ServicesCarouselProps = {
  title: string;
  services: MarketingService[];
  locale: Locale;
};

function ServicesCarousel({ title, services, locale }: ServicesCarouselProps) {
  const visible = 5;
  const maxIndex = Math.max(0, services.length - visible);
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setIndex((i) => Math.min(maxIndex, i + 1)),
    [maxIndex],
  );

  return (
    <section className="services-section section-padding">
      <div className="services-section__inner mx-auto max-w-7xl">
        <AnimateOnScroll variant="fade-up">
          <h2 className="services-section__title">{title}</h2>
        </AnimateOnScroll>
        <div className="services-carousel services-carousel--responsive">
          <button
            type="button"
            className="services-carousel__arrow services-carousel__arrow--prev"
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
          >
            ‹
          </button>
          <div className="services-carousel__viewport">
            <div
              className="services-carousel__track"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="services-carousel__slide">
                  <ServiceCard service={service} locale={locale} />
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="services-carousel__arrow services-carousel__arrow--next"
            aria-label="Next"
            onClick={next}
            disabled={index >= maxIndex}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

type TrendingServicesSectionProps = { locale: Locale };

export function TrendingServicesSection({ locale }: TrendingServicesSectionProps) {
  const { title, services } = marketingHomeContent.trending;
  return <ServicesCarousel title={title} services={services} locale={locale} />;
}

type NewArrivalsSectionProps = { locale: Locale };

export function NewArrivalsSection({ locale }: NewArrivalsSectionProps) {
  const { title, subtitle, services } = marketingHomeContent.newArrivals;

  return (
    <section className="new-arrivals section-padding section-light">
      <div className="new-arrivals__inner mx-auto max-w-7xl">
        <AnimateOnScroll variant="fade-up">
          <div className="new-arrivals__header">
            <h2 className="new-arrivals__title">{title}</h2>
            <p className="new-arrivals__subtitle">{subtitle}</p>
          </div>
        </AnimateOnScroll>
        <div className="new-arrivals__grid">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 60} variant="fade-up">
              <ServiceCard service={service} locale={locale} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
