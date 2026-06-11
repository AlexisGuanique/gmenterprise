import { siteImages } from "@/config/images";
import { siteConfig } from "@/config/site.config";
import { themeColors } from "@/config/theme.config";

function hexToRgb(hex: string): string {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export const colors = {
  gold: themeColors.gold,
  goldRgb: hexToRgb(themeColors.gold),
  green: themeColors.primaryDark,
  greenRgb: hexToRgb(themeColors.primaryDark),
  primaryBright: themeColors.primaryBright,
  white: themeColors.white,
  black: themeColors.black,
  grayLight: themeColors.grayLight,
  grayMuted: themeColors.grayMuted,
  grayBorder: themeColors.grayBorder,
  grayDark: themeColors.grayDark,
  textMuted: "rgba(115, 119, 127, 0.7)",
  heroOverlay: themeColors.heroOverlay,
} as const;

export const fonts = {
  body: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
  heading: 'var(--font-heading), "Instrument Serif", Georgia, serif',
  accent: 'var(--font-body), "Plus Jakarta Sans", sans-serif',
} as const;

export const images = {
  logo: siteConfig.logo.src,
  heroBg: siteImages.hero.bg,
} as const;
