"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";

export type CarouselSlide = {
  src: string;
  alt: string;
};

const IMAGE_WIDTH = 750;
const IMAGE_HEIGHT = 650;

type ResultsCarouselProps = {
  slides: CarouselSlide[];
  visibleCount?: number;
  variant?: "multi" | "single";
};

export function ResultsCarousel({
  slides,
  visibleCount = 4,
  variant = "multi",
}: ResultsCarouselProps) {
  const slideCount = slides.length;
  const loopSlides = useMemo(() => [...slides, ...slides], [slides]);
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const activeDot = ((index % slideCount) + slideCount) % slideCount;
  const isSingle = variant === "single";

  const handleTransitionEnd = useCallback(() => {
    setIndex((current) => {
      if (current >= slideCount) {
        setTransition(false);
        return current - slideCount;
      }
      if (current < 0) {
        setTransition(false);
        return current + slideCount;
      }
      return current;
    });
  }, [slideCount]);

  useEffect(() => {
    if (transition) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransition(true));
    });
    return () => cancelAnimationFrame(id);
  }, [transition]);

  const next = useCallback(() => {
    setTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    if (index === 0) {
      setTransition(false);
      setIndex(slideCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
          setIndex(slideCount - 1);
        });
      });
      return;
    }
    setTransition(true);
    setIndex(index - 1);
  }, [index, slideCount]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (dotIndex: number) => {
    setTransition(true);
    setIndex(dotIndex);
  };

  const carouselClass = isSingle
    ? "results-carousel results-carousel--single"
    : "results-carousel";

  const carouselStyle = isSingle
    ? undefined
    : ({
        "--carousel-visible": visibleCount,
        "--carousel-total": loopSlides.length,
        "--carousel-index": index,
      } as CSSProperties);

  const renderImage = (slide: CarouselSlide, priority: boolean) => (
    <Image
      src={slide.src}
      alt={slide.alt}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      sizes={
        isSingle
          ? "(max-width: 768px) 82vw, 448px"
          : "(max-width: 768px) 45vw, (max-width: 1280px) 28vw, 360px"
      }
      className={
        isSingle
          ? "results-carousel__image results-carousel__image--single"
          : "results-carousel__image"
      }
      priority={priority}
    />
  );

  return (
    <div className={carouselClass} style={carouselStyle}>
      <div
        className={
          isSingle
            ? "results-carousel__viewport results-carousel__viewport--fade"
            : "results-carousel__viewport"
        }
      >
        {isSingle ? (
          loopSlides.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              className={`results-carousel__fade-slide ${i === index ? "is-active" : ""} ${transition ? "" : "results-carousel__fade-slide--instant"}`}
              onTransitionEnd={(e) => {
                if (e.propertyName === "opacity" && i === index) {
                  handleTransitionEnd();
                }
              }}
            >
              {renderImage(slide, i === 0)}
            </div>
          ))
        ) : (
          <div
            className={`results-carousel__track ${transition ? "" : "results-carousel__track--instant"}`}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopSlides.map((slide, i) => (
              <div key={`${slide.src}-${i}`} className="results-carousel__slide">
                {renderImage(slide, i < visibleCount)}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        className="results-carousel__arrow results-carousel__arrow--prev"
        aria-label="Previous slide"
        onClick={prev}
      >
        ‹
      </button>
      <button
        type="button"
        className="results-carousel__arrow results-carousel__arrow--next"
        aria-label="Next slide"
        onClick={next}
      >
        ›
      </button>

      <div className="results-carousel__dots" role="tablist" aria-label="Carousel slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === activeDot}
            aria-label={`Slide ${i + 1}`}
            className={`results-carousel__dot ${i === activeDot ? "results-carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
