import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function HomeAboutSection() {
  const { title, paragraphs } = marketingHomeContent.about;

  return (
    <section className="home-about section-padding">
      <div className="home-about__inner mx-auto max-w-3xl text-center">
        <AnimateOnScroll variant="fade-up">
          <h2 className="home-about__title">{title}</h2>
        </AnimateOnScroll>
        {paragraphs.map((paragraph, index) => (
          <AnimateOnScroll key={index} variant="fade-up" delay={150 + index * 120}>
            <p className="home-about__text">{paragraph}</p>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
