import type { Locale } from "@/lib/locales";
import { localePath } from "@/lib/locales";
import { siteConfig } from "@/config/site.config";

export type NavItem = {
  label: string;
  href: string;
  hidden?: boolean;
};

export type FooterLink = {
  label: string;
  path: string;
};

/** Enlaces del header — estilo Kans Enterprises */
const headerNavDefinitions = [
  { label: "Home", path: "" },
  { label: "About Us", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact Us", path: "/contact" },
] as const;

/** Categorías de servicios en el footer */
export const footerServiceCategories: FooterLink[] = [
  { label: "SEO", path: "/pricing#addons" },
  { label: "Social Media", path: "/pricing#addons" },
  { label: "Paid Ads", path: "/pricing#addons" },
  { label: "Branding", path: "/pricing#addons" },
  { label: "Email Marketing", path: "/pricing#addons" },
];

/** Enlaces rápidos del footer */
export const footerQuickLinks: FooterLink[] = [
  { label: "Home", path: "" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

/** Enlaces legales del footer — requeridos para cumplimiento Square */
export const footerLegalLinks: FooterLink[] = [
  { label: "Terms of Service", path: "/term-of-services" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
  { label: "Cookie Policy", path: "/cookie-policy" },
];

export function getNav(locale: Locale): NavItem[] {
  return headerNavDefinitions.map((item) => ({
    label: item.label,
    href: localePath(locale, item.path),
    hidden: false,
  }));
}

export function getVisibleNav(locale: Locale): NavItem[] {
  return getNav(locale).filter((item) => !item.hidden);
}

export function getHeaderCta(locale: Locale) {
  return {
    label: siteConfig.headerCta.label,
    href: localePath(locale, siteConfig.headerCta.path),
  };
}

export function getFooterLegalLinks(locale: Locale) {
  return footerLegalLinks.map((link) => ({
    label: link.label,
    href: localePath(locale, link.path),
  }));
}

export function getFooterQuickLinks(locale: Locale) {
  return footerQuickLinks.map((link) => ({
    label: link.label,
    href: localePath(locale, link.path),
  }));
}

export function getFooterServiceCategories(locale: Locale) {
  return footerServiceCategories.map((link) => ({
    label: link.label,
    href: localePath(locale, link.path),
  }));
}
