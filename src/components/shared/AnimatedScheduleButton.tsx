import Link from "next/link";
import type { ReactNode } from "react";

type AnimatedScheduleButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedScheduleButton({
  href,
  children,
  className = "",
}: AnimatedScheduleButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-schedule-animated group ${className}`}
    >
      <span className="btn-schedule-animated__shine" aria-hidden />
      <span className="btn-schedule-animated__ring" aria-hidden />
      <span className="btn-schedule-animated__label">
        {children}
        <svg
          className="btn-schedule-animated__arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
