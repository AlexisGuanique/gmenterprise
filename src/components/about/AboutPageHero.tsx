import Image from "next/image";
import { aboutContent, pageHeroes } from "@/data/site";
import { HeroAnimatedBackground } from "@/components/home/HeroAnimatedBackground";

export function AboutPageHero() {
  const { eyebrow } = pageHeroes.about;
  const { intro } = aboutContent;

  return (
    <section className="home-hero-block home-hero-block--about">
      <div className="hero-brz-bg hero-brz-bg__body">
        <HeroAnimatedBackground />
        <div className="hero-brz-bg__content relative z-10 flex min-h-full w-full flex-col items-center justify-center text-center">
          <div className="section-padding about-hero__inner">
            {eyebrow && (
              <p className="animate-fade-up text-base font-bold uppercase tracking-[0.15em] md:text-lg [animation-delay:0.05s]">
                <span className="text-white">{eyebrow.white}</span>
                <span className="text-primary-bright">{eyebrow.gold}</span>
              </p>
            )}
            <p className="about-hero__tagline animate-fade-up [animation-delay:0.1s]">
              <em className="about-hero__tagline-brand">{intro.tagline.brand}</em>
              <em className="about-hero__tagline-rest">{intro.tagline.rest}</em>
            </p>
            <ul className="about-hero__stats animate-fade-up [animation-delay:0.18s]">
              {intro.stats.map((stat) => (
                <li key={stat.alt} className="about-hero__stat">
                  <div className="about-hero__stat-card">
                    <div className="about-hero__stat-media">
                      <Image
                        src={stat.image}
                        alt=""
                        aria-hidden
                        fill
                        className="about-hero__stat-image"
                        sizes="(max-width: 640px) 40vw, 200px"
                      />
                    </div>
                    <p className="about-hero__stat-label">{stat.alt}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
