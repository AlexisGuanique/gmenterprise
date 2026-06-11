"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locales";
import { getVisibleNav } from "@/config/navigation";

type MobileBottomNavProps = { locale: Locale };

export function MobileBottomNav({ locale }: MobileBottomNavProps) {
  const pathname = usePathname();
  const nav = getVisibleNav(locale);

  return (
    <nav className="mobile-bottom-nav lg:hidden" aria-label="Mobile bottom navigation">
      <ul className="mobile-bottom-nav__list">
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`mobile-bottom-nav__link ${pathname === item.href ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
