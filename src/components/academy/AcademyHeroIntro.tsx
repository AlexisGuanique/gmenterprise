import { academyContent } from "@/data/academy";

export function AcademyHeroIntro() {
  const { hero } = academyContent;

  return (
    <section className="academy-intro section-padding">
      <div className="academy-intro__inner mx-auto max-w-3xl text-center">
        <p className="academy-intro__subtitle">{hero.subtitle}</p>
        <p className="academy-intro__range">{hero.priceRange}</p>
        <p className="academy-intro__disclaimer">{hero.disclaimer}</p>
      </div>
    </section>
  );
}
