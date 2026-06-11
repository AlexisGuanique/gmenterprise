import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero locale={locale as Locale} content={pageHeroes.blog} />
      <BlogGrid locale={locale as Locale} />
    </>
  );
}
