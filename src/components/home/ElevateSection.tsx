import Image from "next/image";
import { homeContent } from "@/data/site";

export function ElevateSection() {
  const { elevate } = homeContent;

  return (
    <section className="elevate-section section-light">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="elevate-section__title">
              {elevate.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="elevate-section__copy">
              {elevate.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="elevate-section__closing">{elevate.closing}</p>
          </div>
          <div className="elevate-section__image-frame relative aspect-[4/3] overflow-hidden rounded-[10px]">
            <Image
              src={elevate.image.src}
              alt={elevate.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
