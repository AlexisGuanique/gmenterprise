import Image from "next/image";
import { aboutContent } from "@/data/site";

export function AboutStorySection() {
  const { story } = aboutContent;

  return (
    <section className="about-story section-light">
      <div className="section-padding about-story__inner">
        <div className="about-story__logo-wrap">
          <div className="about-story__logo-frame">
            <Image
              src={story.logo}
              alt={story.logoAlt}
              width={280}
              height={285}
              className="about-story__logo"
              sizes="(max-width: 768px) 200px, 280px"
            />
          </div>
        </div>
        <ul className="about-story__list">
          {story.items.map((paragraph) => (
            <li key={paragraph.slice(0, 48)} className="about-story__item">
              <span className="about-story__bullet" aria-hidden>
                •
              </span>
              <p>{paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
