"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { homeContent } from "@/data/site";
import { WhoWeWorkWithIllustration } from "@/components/home/WhoWeWorkWithIllustration";

export function WhoWeWorkWithPartnersBand() {
  const { whoWeWorkWith } = homeContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`partners-band section-green ${visible ? "partners-band--visible" : ""}`}
      aria-labelledby="partners-band-title"
    >
      <div className="section-padding partners-band__inner">
        <h2 id="partners-band-title" className="partners-band__title">
          {whoWeWorkWith.title}
        </h2>
        <ul className="partners-band__segments">
          {whoWeWorkWith.segments.map((segment, index) => (
            <li
              key={segment.label}
              className="partners-band__segment"
              style={{ "--segment-delay": `${0.15 + index * 0.15}s` } as CSSProperties}
            >
              <div className="partners-band__segment-card">
                <WhoWeWorkWithIllustration
                  variant={segment.illustration}
                  className="partners-band__illustration"
                />
                <span className="partners-band__segment-label">{segment.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
