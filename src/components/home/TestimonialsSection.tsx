"use client";

import { useCallback, useState } from "react";
import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function TestimonialsSection() {
  const { title, items } = marketingHomeContent.testimonials;
  const [active, setActive] = useState(0);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + items.length) % items.length),
    [items.length],
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % items.length),
    [items.length],
  );

  const current = items[active];

  return (
    <section className="testimonials section-padding section-light">
      <div className="testimonials__inner mx-auto max-w-4xl">
        <AnimateOnScroll variant="fade-up">
          <h2 className="testimonials__title">{title}</h2>
        </AnimateOnScroll>
        <blockquote className="testimonials__quote testimonials__quote--animated">
          <p>&ldquo;{current.quote}&rdquo;</p>
          <footer>
            <cite className="testimonials__name">{current.name}</cite>
            <span className="testimonials__role">{current.role}</span>
          </footer>
        </blockquote>
        <div className="testimonials__nav">
          <button type="button" aria-label="Previous testimonial" onClick={prev}>
            ‹
          </button>
          <div className="testimonials__dots">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === active ? "is-active" : ""}
                aria-label={`Testimonial ${index + 1}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Next testimonial" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
