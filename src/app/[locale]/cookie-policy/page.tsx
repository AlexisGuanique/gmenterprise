import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { cookieSections } from "@/data/legal";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default async function CookiePolicyPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <LegalPage
      locale={locale as Locale}
      hero={pageHeroes.cookies}
      title="Cookie Policy"
      sections={cookieSections}
    />
  );
}
