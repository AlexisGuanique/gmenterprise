import { aboutContent } from "@/data/site";
import { AboutFeatureIcon } from "@/components/about/AboutFeatureIcon";

export function AboutExperienceSection() {
  const { experience, features } = aboutContent;

  return (
    <section className="about-experience bg-white">
      <div className="section-padding about-experience__inner">
        <div className="about-experience__intro">
          <h2 className="about-experience__title">{experience.title}</h2>
          <p className="about-experience__description">{experience.description}</p>
        </div>
        <div className="about-experience__grid">
          {features.map((feature) => (
            <article key={feature.title} className="about-experience__card">
              <div className="about-experience__icon" aria-hidden>
                <AboutFeatureIcon icon={feature.icon} />
              </div>
              <h3 className="about-experience__card-title">{feature.title}</h3>
              <p className="about-experience__card-text">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
