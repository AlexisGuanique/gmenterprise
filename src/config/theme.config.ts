import {
  getThemeCssVariables,
  getThemePreset,
  type ThemePresetId,
} from "@/config/theme-presets";

/**
 * Cambia este valor al clonar el template para un cliente.
 * Opciones: "default" | "epoint-ai" | "db-studio" | "ocean"
 */
export const activeThemePreset: ThemePresetId = "marketing-pro";

const preset = getThemePreset(activeThemePreset);

export const themeColors = preset.colors;

export const themeFonts = {
  body: "Lato",
  heading: "Poppins",
  accent: "Sora",
} as const;

export function getActiveThemeVariables() {
  return getThemeCssVariables(activeThemePreset);
}
