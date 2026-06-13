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
