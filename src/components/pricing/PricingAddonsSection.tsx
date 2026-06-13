import { pricingContent } from "@/data/pricing";

export function PricingAddonsSection() {
  const { addons } = pricingContent;

  return (
    <section id="extras" className="pricing-addons section-padding bg-white scroll-mt-28">
      <div className="pricing-addons__inner mx-auto max-w-7xl">
        <h2 className="pricing-addons__title">{addons.title}</h2>
        <div className="pricing-addons__grid">
          {addons.items.map((addon) => (
            <article
              key={addon.name}
              className="pricing-addon anim-card-shine anim-card-lift"
            >
              <div className="pricing-addon__header">
                <h3 className="pricing-addon__name">{addon.name}</h3>
                <p className="pricing-addon__price">{addon.price}</p>
              </div>
              {addon.description ? (
                <p className="pricing-addon__desc">{addon.description}</p>
              ) : null}
              {addon.features ? (
                <ul className="pricing-addon__features">
                  {addon.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
