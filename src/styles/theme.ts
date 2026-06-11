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
  body: "var(--font-lato), Lato, sans-serif",
  heading: "var(--font-poppins), Poppins, sans-serif",
  accent: "var(--font-sora), Sora, sans-serif",
} as const;

export const images = {
  logo: siteConfig.logo.src,
  heroBg:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
} as const;
