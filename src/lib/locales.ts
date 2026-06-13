export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = ""): string {
  const base = `/${locale}`;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Anchor to the purchasable plans catalog on the pricing page. */
export function pricingAddonsPath(locale: Locale): string {
  return localePath(locale, "/pricing#addons");
}
