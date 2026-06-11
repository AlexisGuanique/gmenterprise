import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { refundSections } from "@/data/legal";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default async function RefundPolicyPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <LegalPage
      locale={locale as Locale}
      hero={pageHeroes.refund}
      title="Refund Policy"
      sections={refundSections}
    />
  );
}
