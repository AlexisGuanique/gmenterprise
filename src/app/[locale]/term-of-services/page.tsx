import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsSections } from "@/data/legal";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Term of Services",
};

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <LegalPage
      locale={locale as Locale}
      hero={pageHeroes.terms}
      title="Terms of Service"
      sections={termsSections}
    />
  );
}
