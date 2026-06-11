import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ScheduleBookingWidget } from "@/components/schedule/ScheduleBookingWidget";
import { pageHeroes, siteConfig } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Schedule a Call",
};

export default async function ScheduleCallPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero locale={locale as Locale} content={pageHeroes.schedule} />

      <section className="schedule-page section-padding bg-white">
        <div className="schedule-page__inner mx-auto max-w-5xl">
          <ScheduleBookingWidget />
          <p className="schedule-page__contact mt-8 text-center text-[rgba(115,119,127,0.7)]">
            You can also reach us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-text-highlight hover:underline">
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
