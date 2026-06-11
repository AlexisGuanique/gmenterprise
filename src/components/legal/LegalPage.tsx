import type { LegalSection } from "@/data/legal";
import type { Locale } from "@/lib/locales";
import type { HeroContent } from "@/data/site";
import { PageHero } from "@/components/shared/PageHero";

type LegalPageProps = {
  locale: Locale;
  hero: HeroContent;
  title: string;
  sections: LegalSection[];
};

export function LegalPage({ locale, hero, title, sections }: LegalPageProps) {
  return (
    <>
      <PageHero locale={locale} content={hero} />
      <article className="section-padding mx-auto max-w-3xl bg-white">
        <h2 className="sr-only">{title}</h2>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-lg font-semibold text-primary">
                {section.title}
              </h3>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 30)}
                  className="mt-3 text-sm leading-relaxed text-muted"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
