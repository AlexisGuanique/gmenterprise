import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isValidLocale, type Locale } from "@/lib/locales";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <>
      <Header locale={typedLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={typedLocale} />
      <CookieBanner locale={typedLocale} />
    </>
  );
}
