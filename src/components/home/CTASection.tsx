import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/config/site.config";
import { homeContent } from "@/data/site";
import { Button } from "@/components/shared/Button";

type CTASectionProps = { locale: Locale };

export function CTASection({ locale }: CTASectionProps) {
  const { cta } = homeContent;

  return (
    <section className="section-gold">
      <div className="section-padding mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {cta.heading}
        </h2>
        <div className="mt-8">
          <Button
            href={siteConfig.scheduleHref(locale)}
            variant="primary"
            className="!border-white !bg-primary"
          >
            {cta.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
