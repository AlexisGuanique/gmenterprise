import { homeContent } from "@/data/site";
import { ResultsCarousel } from "@/components/home/ResultsCarousel";

export function CustomerSuccessSection() {
  const { customerSuccess, consult } = homeContent;

  return (
    <section className="customer-success-section section-light">
      <div className="section-padding customer-success-section__inner">
        <h2 className="customer-success-section__title">{customerSuccess.title}</h2>
        <p className="customer-success-section__body">{customerSuccess.body}</p>
        <ResultsCarousel
          slides={consult.carousel}
          visibleCount={1}
          variant="single"
        />
      </div>
    </section>
  );
}
