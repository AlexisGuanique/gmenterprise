"use client";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  variant?: "hero" | "light" | "store";
  onClick?: () => void;
};

export function NavLink({
  href,
  label,
  isActive,
  variant = "light",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link nav-link--${variant} ${isActive ? "nav-link--active" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="nav-link__text">{label}</span>
      <span className="nav-link__line" aria-hidden />
    </Link>
  );
}
