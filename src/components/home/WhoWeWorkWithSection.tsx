import { homeContent } from "@/data/site";
import { WhoWeWorkWithIllustration } from "@/components/home/WhoWeWorkWithIllustration";

export function WhoWeWorkWithSection() {
  const { whoWeWorkWith } = homeContent;

  return (
    <section className="who-we-work-detail section-green">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="who-we-work-detail__lead">
              {whoWeWorkWith.socialProof}
            </p>
            <p className="who-we-work-detail__body">
              {whoWeWorkWith.body}
            </p>
          </div>
          <div
            className="who-we-work-detail__image-frame"
            role="img"
            aria-label={whoWeWorkWith.detailIllustrationAlt}
          >
            <WhoWeWorkWithIllustration
              variant={whoWeWorkWith.detailIllustration}
              className="who-we-work-detail__illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
