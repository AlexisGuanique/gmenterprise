import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AcademyAddonsSection } from "@/components/academy/AcademyAddonsSection";
import { AcademyCoursesGrid } from "@/components/academy/AcademyCoursesGrid";
import { AcademyHeroIntro } from "@/components/academy/AcademyHeroIntro";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Academy",
};

export default async function AcademyPage({ params }: PageProps) {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  return (
    <div className="academy-page">
      <PageHero locale={typedLocale} content={pageHeroes.academy} />
      <AcademyHeroIntro />
      <AcademyCoursesGrid />
      <AcademyAddonsSection />
    </div>
  );
}
