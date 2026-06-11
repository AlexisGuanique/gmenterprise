import { homeContent } from "@/data/site";
import { ResultsCarousel } from "@/components/home/ResultsCarousel";

export function ConsultSection() {
  const { consult } = homeContent;

  return (
    <section className="consult-section section-light">
      <div className="section-padding consult-section__inner">
        <p className="consult-section__text">{consult.intro}</p>
        <ResultsCarousel slides={consult.carousel} />
      </div>
    </section>
  );
}
