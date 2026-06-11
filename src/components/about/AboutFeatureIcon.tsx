import type { AboutFeature } from "@/data/site";

type AboutFeatureIconProps = {
  icon: AboutFeature["icon"];
};

export function AboutFeatureIcon({ icon }: AboutFeatureIconProps) {
  switch (icon) {
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4 2.3-7.4-6-4.6h7.6L12 2z" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 6h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm14 2.5 5-3.5v11l-5-3.5V8.5z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2v.3l8 5 8-5V8H4zm16 7.2l-8-5-8 5V16h16v-0.8z" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 8a4 4 0 110 8 4 4 0 010-8zm8.5 4.9l1.8 1-1 1.7 1.8 1-1 1.7-1.8 1 1 1.7-1.8 1-1-1.7-1.8 1-1-1.7 1.8-1-1-1.7 1-1.8-1.1-.2a7.9 7.9 0 000-3.4l1.1-.2 1-1.8-1.8-1 1-1.7-1.8-1 1-1.7 1.8-1-1-1.7 1.8-1 1 1.7 1-1.8a7.9 7.9 0 000 3.4l-1.1.2-1 1.8z" />
        </svg>
      );
  }
}
