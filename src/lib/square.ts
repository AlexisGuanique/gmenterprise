/**
 * Square Payment Link URLs — one env var per plan.
 * Example: NEXT_PUBLIC_SQUARE_LINK_STARTER=https://square.link/u/xxxxx
 */
const planEnvKeys: Record<string, string> = {
  starter: "NEXT_PUBLIC_SQUARE_LINK_STARTER",
  growth: "NEXT_PUBLIC_SQUARE_LINK_GROWTH",
  professional: "NEXT_PUBLIC_SQUARE_LINK_PROFESSIONAL",
  premium: "NEXT_PUBLIC_SQUARE_LINK_PREMIUM",
  "business-plus": "NEXT_PUBLIC_SQUARE_LINK_BUSINESS_PLUS",
  "business-meeting": "NEXT_PUBLIC_SQUARE_LINK_BUSINESS_MEETING",
  "content-strategy": "NEXT_PUBLIC_SQUARE_LINK_CONTENT_STRATEGY",
  influencer: "NEXT_PUBLIC_SQUARE_LINK_INFLUENCER",
  "video-ads": "NEXT_PUBLIC_SQUARE_LINK_VIDEO_ADS",
  "local-seo": "NEXT_PUBLIC_SQUARE_LINK_LOCAL_SEO",
  analytics: "NEXT_PUBLIC_SQUARE_LINK_ANALYTICS",
  "landing-pages": "NEXT_PUBLIC_SQUARE_LINK_LANDING_PAGES",
  "crm-setup": "NEXT_PUBLIC_SQUARE_LINK_CRM_SETUP",
  reputation: "NEXT_PUBLIC_SQUARE_LINK_REPUTATION",
};

export function getSquareCheckoutUrl(planId: string): string | null {
  const envKey = planEnvKeys[planId];
  if (!envKey) return null;

  const url = process.env[envKey]?.trim();
  return url || null;
}

export function isSquareCheckoutConfigured(planId: string): boolean {
  return getSquareCheckoutUrl(planId) !== null;
}
