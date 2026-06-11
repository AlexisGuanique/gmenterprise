import Image from "next/image";
import { homeContent } from "@/data/site";

export function OperationsVideoSection() {
  const { whoWeWorkWith } = homeContent;

  return (
    <section className="operations-video-section bg-white">
      <div className="section-padding operations-video-section__inner">
        <h2 className="operations-video-section__title">{whoWeWorkWith.subtitle}</h2>
        <div className="operations-video-section__media">
          {whoWeWorkWith.video ? (
            <video
              className="operations-video-section__video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Business operations overview"
            >
              <source src={whoWeWorkWith.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Team collaboration"
              width={1200}
              height={675}
              className="operations-video-section__video h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
