type IllustrationVariant =
  | "online-sellers"
  | "retail-brands"
  | "logistics"
  | "scaling-businesses"
  | "growth-ecosystem";

type WhoWeWorkWithIllustrationProps = {
  variant: IllustrationVariant;
  className?: string;
};

export function WhoWeWorkWithIllustration({
  variant,
  className = "",
}: WhoWeWorkWithIllustrationProps) {
  switch (variant) {
    case "online-sellers":
      return (
        <svg
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden
        >
          <rect x="20" y="28" width="120" height="72" rx="8" fill="#3ECF9A" />
          <rect x="28" y="36" width="104" height="48" rx="4" fill="#F7C948" opacity="0.25" />
          <rect x="36" y="44" width="40" height="6" rx="2" fill="#ffffff" opacity="0.9" />
          <rect x="36" y="56" width="56" height="4" rx="2" fill="#ffffff" opacity="0.5" />
          <rect x="36" y="66" width="48" height="4" rx="2" fill="#ffffff" opacity="0.5" />
          <circle cx="120" cy="52" r="14" fill="#F7C948" />
          <path
            d="M114 52h12M120 46v12"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <rect x="52" y="92" width="56" height="8" rx="4" fill="#F7C948" />
          <path
            d="M48 20h64l8 8H40l8-8z"
            fill="#F7C948"
          />
        </svg>
      );
    case "retail-brands":
      return (
        <svg
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden
        >
          <rect x="24" y="32" width="112" height="68" rx="6" fill="#3ECF9A" />
          <rect x="32" y="40" width="96" height="52" rx="4" fill="#F7C948" opacity="0.2" />
          <path
            d="M56 68c0-8 6-14 14-14h20c8 0 14 6 14 14v12H56V68z"
            fill="#F7C948"
          />
          <rect x="68" y="48" width="24" height="16" rx="3" fill="#ffffff" opacity="0.85" />
          <circle cx="48" cy="88" r="6" fill="#F7C948" />
          <circle cx="112" cy="88" r="6" fill="#F7C948" />
          <path
            d="M60 24h40l6 8H54l6-8z"
            fill="#F7C948"
          />
          <rect x="72" y="56" width="16" height="3" rx="1.5" fill="#3ECF9A" opacity="0.6" />
        </svg>
      );
    case "logistics":
      return (
        <svg
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden
        >
          <rect x="16" y="48" width="72" height="40" rx="6" fill="#3ECF9A" />
          <rect x="88" y="56" width="48" height="32" rx="4" fill="#F7C948" opacity="0.35" />
          <rect x="96" y="64" width="32" height="16" rx="2" fill="#3ECF9A" opacity="0.5" />
          <circle cx="40" cy="96" r="10" fill="#F7C948" />
          <circle cx="40" cy="96" r="4" fill="#ffffff" />
          <circle cx="112" cy="96" r="10" fill="#F7C948" />
          <circle cx="112" cy="96" r="4" fill="#ffffff" />
          <rect x="24" y="56" width="28" height="20" rx="3" fill="#F7C948" opacity="0.5" />
          <path
            d="M52 40h48l12 8H64"
            stroke="#F7C948"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="120" y="36" width="24" height="16" rx="3" fill="#F7C948" />
          <path d="M124 44h16M132 40v8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "scaling-businesses":
      return (
        <svg
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden
        >
          <rect x="20" y="88" width="16" height="24" rx="3" fill="#F7C948" opacity="0.5" />
          <rect x="44" y="72" width="16" height="40" rx="3" fill="#F7C948" opacity="0.7" />
          <rect x="68" y="52" width="16" height="60" rx="3" fill="#F7C948" />
          <rect x="92" y="36" width="16" height="76" rx="3" fill="#3ECF9A" />
          <rect x="116" y="20" width="16" height="92" rx="3" fill="#F7C948" />
          <path
            d="M28 80l24-16 24-20 24-16 24-12"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="28" cy="80" r="4" fill="#ffffff" />
          <circle cx="52" cy="64" r="4" fill="#ffffff" />
          <circle cx="76" cy="44" r="4" fill="#ffffff" />
          <circle cx="100" cy="28" r="4" fill="#ffffff" />
          <circle cx="124" cy="16" r="4" fill="#ffffff" />
          <path
            d="M108 12l16 4-4 16"
            stroke="#F7C948"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "growth-ecosystem":
      return (
        <svg
          viewBox="0 0 320 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden
        >
          <rect width="320" height="240" rx="10" fill="#3ECF9A" />
          <circle cx="160" cy="120" r="48" fill="#F7C948" opacity="0.2" />
          <circle cx="160" cy="120" r="32" fill="#F7C948" opacity="0.35" />
          <circle cx="160" cy="120" r="18" fill="#F7C948" />
          <rect x="60" y="52" width="48" height="36" rx="6" fill="#F7C948" opacity="0.6" />
          <rect x="212" y="52" width="48" height="36" rx="6" fill="#F7C948" opacity="0.6" />
          <rect x="48" y="152" width="56" height="40" rx="6" fill="#ffffff" opacity="0.15" />
          <rect x="216" y="152" width="56" height="40" rx="6" fill="#ffffff" opacity="0.15" />
          <path
            d="M108 70h44M212 70h44M76 172h64M180 172h64"
            stroke="#F7C948"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M132 70l20 34M188 70l-20 34M104 172l40-34M216 172l-40-34"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <rect x="148" y="108" width="24" height="24" rx="4" fill="#ffffff" opacity="0.9" />
          <path
            d="M154 120h12M160 114v12"
            stroke="#3ECF9A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="72" y="64" width="24" height="4" rx="2" fill="#ffffff" opacity="0.7" />
          <rect x="224" y="64" width="24" height="4" rx="2" fill="#ffffff" opacity="0.7" />
          <rect x="60" y="164" width="32" height="4" rx="2" fill="#ffffff" opacity="0.5" />
          <rect x="228" y="164" width="32" height="4" rx="2" fill="#ffffff" opacity="0.5" />
        </svg>
      );
  }
}
