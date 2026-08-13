"use client";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  variant?: "hero" | "light" | "store";
  accent?: "academy";
  onClick?: () => void;
};

export function NavLink({
  href,
  label,
  isActive,
  variant = "light",
  accent,
  onClick,
}: NavLinkProps) {
  const accentClass = accent === "academy" ? " nav-link--academy" : "";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link nav-link--${variant}${accentClass} ${isActive ? "nav-link--active" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="nav-link__text">{label}</span>
      <span className="nav-link__line" aria-hidden />
    </Link>
  );
}
