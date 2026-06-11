"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";
import { buildInquiryContactUrl } from "@/lib/inquiry";
import { marketingHomeContent } from "@/data/marketing-home";

type HeroCarouselProps = { locale: Locale };

export function HeroCarousel({ locale }: HeroCarouselProps) {
  const { slides } = marketingHomeContent.hero;
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (index: number) => setActive((index + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(active + 1), 5500);
    return () => clearInterval(timer);
  }, [active, goTo]);

  return (
    <section className="hero-carousel" aria-label="Hero">
      <div className="hero-carousel__track">
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className={`hero-carousel__slide ${index === active ? "is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="hero-carousel__image"
              sizes="100vw"
            />
            <div className="hero-carousel__overlay" />
            <div className="hero-carousel__content">
              <p
                className={`hero-carousel__eyebrow ${index === active ? "hero-carousel__anim-in" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                {slide.eyebrow}
              </p>
              <h1
                className={`hero-carousel__title ${index === active ? "hero-carousel__anim-in" : ""}`}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.title}
              </h1>
              <p
                className={`hero-carousel__subtitle ${index === active ? "hero-carousel__anim-in" : ""}`}
                style={{ animationDelay: "0.35s" }}
              >
                {slide.subtitle}
              </p>
              <Link
                href={
                  slide.cta === "Get Started"
                    ? buildInquiryContactUrl(locale, {
                        service: slide.title,
                      })
                    : localePath(locale, slide.href)
                }
                className={`hero-carousel__cta anim-btn-pulse ${index === active ? "hero-carousel__anim-in" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                {slide.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="hero-carousel__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-carousel__dot ${index === active ? "is-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-carousel__arrow hero-carousel__arrow--prev"
        aria-label="Previous slide"
        onClick={() => goTo(active - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-carousel__arrow hero-carousel__arrow--next"
        aria-label="Next slide"
        onClick={() => goTo(active + 1)}
      >
        ›
      </button>
    </section>
  );
}
