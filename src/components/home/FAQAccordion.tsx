"use client";

import { useState } from "react";
import { homeContent } from "@/data/site";

function FaqChevron({ open }: { open: boolean }) {
  return (
    <span className={`faq-section__icon ${open ? "faq-section__icon--open" : ""}`} aria-hidden>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 5.5L7 9.5L11 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    homeContent.faq.length - 1,
  );

  return (
    <section className="faq-section section-green">
      <div className="section-padding faq-section__inner">
        <h2 className="faq-section__title">{homeContent.faqTitle}</h2>
        <div className="faq-section__panel">
          {homeContent.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="faq-section__item">
                <button
                  type="button"
                  className="faq-section__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-section__question">{item.question}</span>
                  <FaqChevron open={isOpen} />
                </button>
                {isOpen && (
                  <div className="faq-section__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
