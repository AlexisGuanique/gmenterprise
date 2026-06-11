import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacySections } from "@/data/legal";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <LegalPage
      locale={locale as Locale}
      hero={pageHeroes.privacy}
      title="Privacy Policy"
      sections={privacySections}
    />
  );
}
