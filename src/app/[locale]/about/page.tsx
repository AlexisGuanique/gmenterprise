import type { Metadata } from "next";
import { AboutPageHero } from "@/components/about/AboutPageHero";
import { AboutExperienceSection } from "@/components/about/AboutExperienceSection";
import { AboutFullServiceSection } from "@/components/about/AboutFullServiceSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "About",
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <AboutPageHero />
      <AboutStorySection />
      <AboutExperienceSection />
      <AboutFullServiceSection locale={locale as Locale} />
    </>
  );
}
