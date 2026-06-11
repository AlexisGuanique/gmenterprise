/**
 * Secciones disponibles para la página Home — estilo Kans Enterprises / marketing.
 */
export type HomeSectionId =
  | "heroCarousel"
  | "promoMarquee"
  | "promoBanners"
  | "topBrands"
  | "trendingServices"
  | "homeAbout"
  | "newArrivals"
  | "featuresBar"
  | "testimonials"
  | "serviceCategories"
  | "newsletter";

export type HomeSectionConfig = {
  id: HomeSectionId;
  enabled: boolean;
};

export const homeSectionsConfig: HomeSectionConfig[] = [
  { id: "heroCarousel", enabled: true },
  { id: "promoMarquee", enabled: true },
  { id: "promoBanners", enabled: true },
  { id: "topBrands", enabled: true },
  { id: "trendingServices", enabled: true },
  { id: "homeAbout", enabled: true },
  { id: "newArrivals", enabled: true },
  { id: "featuresBar", enabled: true },
  { id: "testimonials", enabled: true },
  { id: "serviceCategories", enabled: true },
  { id: "newsletter", enabled: true },
];

export function getEnabledHomeSections(): HomeSectionId[] {
  return homeSectionsConfig.filter((s) => s.enabled).map((s) => s.id);
}
