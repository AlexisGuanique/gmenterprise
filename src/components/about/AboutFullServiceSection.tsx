import Image from "next/image";
import Link from "next/link";
import { aboutContent, siteConfig } from "@/data/site";
import type { Locale } from "@/lib/locales";

type AboutFullServiceSectionProps = {
  locale: Locale;
};

export function AboutFullServiceSection({ locale }: AboutFullServiceSectionProps) {
  const { fullService } = aboutContent;
  const { image } = fullService;

  return (
    <section className="about-full-service bg-white">
      <div className="section-padding about-full-service__inner">
        <div className="about-full-service__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="about-full-service__image"
            sizes="(max-width: 992px) 100vw, 50vw"
            priority={false}
          />
        </div>
        <div className="about-full-service__content">
          <h2 className="about-full-service__title">{fullService.title}</h2>
          <p className="about-full-service__description">{fullService.description}</p>
          <Link
            href={siteConfig.scheduleHref(locale)}
            className="about-full-service__cta"
          >
            {fullService.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
