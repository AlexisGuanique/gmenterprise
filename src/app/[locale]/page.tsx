import type { Metadata } from "next";
import { HomeSections } from "@/components/home/HomeSections";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return <HomeSections locale={locale as Locale} />;
}
