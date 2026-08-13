import { academyContent } from "@/data/academy";

export function AcademyAddonsSection() {
  const { addons } = academyContent;

  return (
    <section
      id="academy-addons"
      className="academy-addons section-padding scroll-mt-28"
    >
      <div className="academy-addons__inner mx-auto max-w-7xl">
        <h2 className="academy-addons__title">{addons.title}</h2>
        <div className="academy-addons__grid">
          {addons.items.map((addon) => (
            <article
              key={addon.name}
              className="academy-addon anim-card-shine anim-card-lift"
            >
              <div className="academy-addon__header">
                <h3 className="academy-addon__name">{addon.name}</h3>
                <p className="academy-addon__price">{addon.price}</p>
              </div>
              {addon.description ? (
                <p className="academy-addon__desc">{addon.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
