"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { getVisibleNav, getHeaderCta } from "@/config/navigation";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { NavLink } from "@/components/layout/NavLink";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

type HeaderProps = { locale: Locale };

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getVisibleNav(locale);
  const headerCta = getHeaderCta(locale);
  const homeHref = `/${locale}`;
  const isHome = pathname === homeHref;

  return (
    <>
      <header className={`store-header ${isHome ? "store-header--home" : ""}`}>
        <div className="store-header__inner mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href={homeHref} className="store-header__logo">
            <BrandLogo priority />
          </Link>

          <nav className="store-header__nav hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
                variant="store"
              />
            ))}
          </nav>

          <div className="store-header__actions hidden items-center gap-3 lg:flex">
            <Link href={headerCta.href} className="store-header__cta">
              {headerCta.label}
            </Link>
          </div>

          <button
            type="button"
            className="store-header__toggle lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="store-header__mobile lg:hidden">
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                  variant="store"
                  onClick={() => setOpen(false)}
                />
              ))}
              <Link
                href={headerCta.href}
                className="store-header__cta mt-3 text-center"
                onClick={() => setOpen(false)}
              >
                {headerCta.label}
              </Link>
            </nav>
          </div>
        )}
      </header>
      <MobileBottomNav locale={locale} />
    </>
  );
}
