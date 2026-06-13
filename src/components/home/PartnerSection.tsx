import Image from "next/image";
import { homeContent } from "@/data/site";

export function PartnerSection() {
  const { partner } = homeContent;

  return (
    <section className="partner-section section-green">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="partner-section__image-frame relative aspect-[4/3] overflow-hidden rounded-[10px]">
            <Image
              src={partner.image.src}
              alt={partner.image.alt}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="partner-section__heading">{partner.heading}</h2>
            <p className="partner-section__list-title">{partner.listTitle}</p>
            <ul className="partner-section__list">
              {partner.bullets.map((item) => (
                <li key={item} className="partner-section__list-item">
                  <span className="partner-section__bullet" aria-hidden>
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
