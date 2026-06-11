import { images } from "@/styles/theme";

const bgStyle = { backgroundImage: `url("${images.heroBg}")` };

export function HeroAnimatedBackground() {
  return (
    <div className="hero-brz-bg__media" aria-hidden>
      <div className="hero-brz-bg__pan">
        <div className="hero-brz-bg__layer" style={bgStyle} />
      </div>

      <div className="hero-brz-bg__mirror-pan">
        <div className="hero-brz-bg__layer hero-brz-bg__layer--mirror" style={bgStyle} />
      </div>

      <div className="hero-brz-bg__mirror-shine" />

      <div className="hero-brz-bg__color" />
    </div>
  );
}
