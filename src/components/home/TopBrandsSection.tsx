import { marketingHomeContent } from "@/data/marketing-home";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function TopBrandsSection() {
  const { title, brands } = marketingHomeContent.topBrands;

  return (
    <section className="top-brands section-padding">
      <div className="top-brands__inner mx-auto max-w-7xl">
        <AnimateOnScroll variant="fade-up">
          <h2 className="top-brands__title">{title}</h2>
        </AnimateOnScroll>
        <ul className="top-brands__list">
          {brands.map((brand, index) => (
            <li key={brand.name} className="top-brands__item">
              <AnimateOnScroll variant="scale-in" delay={index * 80}>
                <span className="top-brands__logo anim-float" aria-label={brand.name}>
                  {brand.initial}
                </span>
                <span className="top-brands__name">{brand.name}</span>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
