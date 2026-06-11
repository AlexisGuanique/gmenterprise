"use client";

import { useState } from "react";
import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function NewsletterSection() {
  const { title, subtitle, placeholder, buttonLabel } =
    marketingHomeContent.newsletter;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="newsletter section-padding newsletter--animated">
      <div className="newsletter__inner mx-auto max-w-2xl text-center">
        <AnimateOnScroll variant="fade-up">
          <h2 className="newsletter__title">{title}</h2>
          <p className="newsletter__subtitle">{subtitle}</p>
        </AnimateOnScroll>
        {submitted ? (
          <p className="newsletter__success">Thanks for subscribing!</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="newsletter__input"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter__btn anim-btn-pulse">
              {buttonLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
