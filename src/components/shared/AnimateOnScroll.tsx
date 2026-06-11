"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "slide-left"
  | "slide-right";

type AnimateOnScrollProps = {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
};

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`aos aos--${variant} ${visible ? "aos--visible" : ""} ${className}`}
      style={{ ["--aos-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
