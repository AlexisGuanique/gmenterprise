export type ThemePresetId =
  | "default"
  | "epoint-ai"
  | "db-studio"
  | "ocean"
  | "marketing-pro"
  | "gmenterprise";

export type ThemePresetColors = {
  /** Solo fondos, bordes y decoración — no usar en texto */
  gold: string;
  /** Acento vivo pastel (bordes, iconos, highlights) */
  primaryBright: string;
  /** Superficies oscuras: header, footer, secciones verdes */
  primaryDark: string;
  white: string;
  /** Texto principal sobre fondos claros */
  black: string;
  grayLight: string;
  grayMuted: string;
  grayBorder: string;
  /** Énfasis legible sobre fondos claros */
  grayDark: string;
  heroOverlay: string;
  primaryRgb: string;
  accentRgb: string;
};

export type ThemePreset = {
  id: ThemePresetId;
  label: string;
  description: string;
  colors: ThemePresetColors;
};

export const themePresets = {
  default: {
    id: "default",
    label: "Mint & Sunny Gold",
    description: "Verde menta pastel vivo con dorado cálido",
    colors: {
      gold: "#F7C948",
      primaryBright: "#3ECF9A",
      primaryDark: "#1B7A5E",
      white: "#FEFFFA",
      black: "#1A5C47",
      grayLight: "#E9FBF3",
      grayMuted: "#4A9B7E",
      grayBorder: "#B8EDD8",
      grayDark: "#2A8A66",
      heroOverlay: "rgba(27, 122, 94, 0.55)",
      primaryRgb: "27, 122, 94",
      accentRgb: "247, 201, 72",
    },
  },

  "epoint-ai": {
    id: "epoint-ai",
    label: "Cyan & Amber",
    description: "Cyan pastel vivo con acentos ámbar",
    colors: {
      gold: "#FFD166",
      primaryBright: "#4ECDC4",
      primaryDark: "#1F7A74",
      white: "#F8FFFE",
      black: "#1A4A47",
      grayLight: "#E6FAF8",
      grayMuted: "#3D9E97",
      grayBorder: "#A8E8E2",
      grayDark: "#2A9D94",
      heroOverlay: "rgba(31, 122, 116, 0.55)",
      primaryRgb: "31, 122, 116",
      accentRgb: "255, 209, 102",
    },
  },

  "db-studio": {
    id: "db-studio",
    label: "Lavender & Peach",
    description: "Lavanda pastel viva con melocotón dorado",
    colors: {
      gold: "#FFB07A",
      primaryBright: "#B794F6",
      primaryDark: "#6B4BA8",
      white: "#FDFAFF",
      black: "#4A3268",
      grayLight: "#F3EDFF",
      grayMuted: "#8B6BB8",
      grayBorder: "#D9C8F5",
      grayDark: "#7C5CBF",
      heroOverlay: "rgba(107, 75, 168, 0.55)",
      primaryRgb: "107, 75, 168",
      accentRgb: "255, 176, 122",
    },
  },

  ocean: {
    id: "ocean",
    label: "Sky & Coral",
    description: "Azul cielo pastel con coral vibrante",
    colors: {
      gold: "#FF8FA3",
      primaryBright: "#5BB8F5",
      primaryDark: "#2E7AB5",
      white: "#F8FCFF",
      black: "#1A4A6E",
      grayLight: "#E8F4FE",
      grayMuted: "#4A8FBE",
      grayBorder: "#B8DCF8",
      grayDark: "#3A8FD4",
      heroOverlay: "rgba(46, 122, 181, 0.55)",
      primaryRgb: "46, 122, 181",
      accentRgb: "255, 143, 163",
    },
  },

  "marketing-pro": {
    id: "marketing-pro",
    label: "Marketing Pro",
    description: "Negro elegante con acentos naranja — estilo e-commerce Kans",
    colors: {
      gold: "#FFB800",
      primaryBright: "#FF6B35",
      primaryDark: "#111111",
      white: "#FFFFFF",
      black: "#1A1A1A",
      grayLight: "#F5F5F5",
      grayMuted: "#6B7280",
      grayBorder: "#E5E5E5",
      grayDark: "#374151",
      heroOverlay: "rgba(17, 17, 17, 0.55)",
      primaryRgb: "17, 17, 17",
      accentRgb: "255, 184, 0",
    },
  },

  gmenterprise: {
    id: "gmenterprise",
    label: "GM Enterprise",
    description: "Azul corporativo con acentos teal — paleta del logo GM Enterprise",
    colors: {
      gold: "#0078C1",
      primaryBright: "#14B8A6",
      primaryDark: "#0C2340",
      white: "#FAFBFC",
      black: "#0F172A",
      grayLight: "#F0F4F8",
      grayMuted: "#64748B",
      grayBorder: "#DCE3EC",
      grayDark: "#334155",
      heroOverlay: "rgba(12, 35, 64, 0.62)",
      primaryRgb: "12, 35, 64",
      accentRgb: "0, 120, 193",
    },
  },
} as const satisfies Record<ThemePresetId, ThemePreset>;

export function getThemePreset(id: ThemePresetId): ThemePreset {
  return themePresets[id];
}

export function getThemeCssVariables(id: ThemePresetId): Record<string, string> {
  const { colors } = getThemePreset(id);

  return {
    "--brz-gold": colors.gold,
    "--brz-green": colors.primaryDark,
    "--primary-bright": colors.primaryBright,
    "--brz-white": colors.white,
    "--brz-black": colors.black,
    "--brz-gray-light": colors.grayLight,
    "--brz-gray-muted": colors.grayMuted,
    "--brz-gray-border": colors.grayBorder,
    "--brz-gray-dark": colors.grayDark,
    "--brz-hero-overlay": colors.heroOverlay,
    "--background": colors.white,
    "--foreground": colors.black,
    "--muted": colors.grayMuted,
    "--text-highlight": colors.grayDark,
    "--accent": colors.gold,
    "--primary": colors.primaryDark,
    "--surface": colors.grayLight,
    "--surface-elevated": colors.white,
    "--border": colors.grayBorder,
    "--primary-rgb": colors.primaryRgb,
    "--accent-rgb": colors.accentRgb,
  };
}
