import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public", "images");

const C = {
  navy: "#0C2340",
  teal: "#14B8A6",
  gold: "#C9A227",
  cream: "#F0F4F8",
  white: "#FAFBFC",
  slate: "#334155",
};

function scene({ title, subtitle, icon, accent = C.teal }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.navy}"/>
      <stop offset="100%" stop-color="#163A5F"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${C.gold}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1320" cy="180" r="220" fill="${accent}" opacity="0.12"/>
  <circle cx="220" cy="720" r="280" fill="${C.gold}" opacity="0.08"/>
  <rect x="120" y="140" width="520" height="12" rx="6" fill="url(#accent)" opacity="0.9"/>
  <text x="120" y="260" fill="${C.white}" font-family="Georgia, serif" font-size="72" font-weight="700">${title}</text>
  <text x="120" y="340" fill="${C.cream}" font-family="Arial, sans-serif" font-size="34" opacity="0.9">${subtitle}</text>
  <g transform="translate(980, 320)" fill="none" stroke="${accent}" stroke-width="4" opacity="0.85">
    ${icon}
  </g>
  <rect x="120" y="760" width="360" height="8" rx="4" fill="${C.gold}" opacity="0.55"/>
</svg>`;
}

const icons = {
  chart: `<path d="M40 180V40M120 180V100M200 180V20M280 180V80"/><circle cx="40" cy="40" r="10" fill="${C.teal}"/><circle cx="120" cy="100" r="10" fill="${C.gold}"/><circle cx="200" cy="20" r="10" fill="${C.teal}"/><circle cx="280" cy="80" r="10" fill="${C.gold}"/>`,
  team: `<circle cx="160" cy="70" r="48"/><path d="M60 200c20-56 220-56 200 0"/><circle cx="70" cy="110" r="34"/><circle cx="250" cy="110" r="34"/>`,
  brand: `<rect x="30" y="40" width="300" height="180" rx="16"/><path d="M80 170l70-90 50 60 40-50 70 80"/>`,
  social: `<rect x="40" y="50" width="280" height="170" rx="20"/><circle cx="110" cy="120" r="24"/><path d="M170 95h90M170 125h70M170 155h50"/>`,
  ads: `<rect x="30" y="60" width="300" height="40" rx="8"/><rect x="30" y="120" width="220" height="24" rx="6" opacity="0.5"/><rect x="30" y="160" width="260" height="24" rx="6" opacity="0.35"/><rect x="30" y="200" width="180" height="24" rx="6" opacity="0.25"/>`,
  design: `<circle cx="100" cy="100" r="60"/><circle cx="210" cy="90" r="42"/><circle cx="170" cy="180" r="36"/>`,
  email: `<rect x="50" y="70" width="260" height="160" rx="14"/><path d="M50 90l130 80 130-80"/>`,
  content: `<rect x="60" y="50" width="240" height="30" rx="6"/><rect x="60" y="100" width="200" height="18" rx="4" opacity="0.6"/><rect x="60" y="135" width="220" height="18" rx="4" opacity="0.45"/><rect x="60" y="170" width="180" height="18" rx="4" opacity="0.35"/>`,
  video: `<rect x="50" y="60" width="260" height="150" rx="16"/><path d="M150 95l70 40-70 40z" fill="${C.navy}" stroke="none"/>`,
  office: `<rect x="40" y="40" width="280" height="190" rx="12"/><rect x="80" y="80" width="60" height="50" rx="4"/><rect x="170" y="80" width="60" height="50" rx="4"/><rect x="80" y="150" width="150" height="50" rx="4"/>`,
};

const files = {
  "hero/slide-1.svg": scene({ title: "Growth", subtitle: "Data-driven marketing", icon: icons.chart }),
  "hero/slide-2.svg": scene({ title: "Strategy", subtitle: "Campaigns that scale", icon: icons.team, accent: C.gold }),
  "hero/slide-3.svg": scene({ title: "Brand", subtitle: "Presence that converts", icon: icons.brand }),
  "services/seo.svg": scene({ title: "SEO", subtitle: "Search visibility", icon: icons.chart }),
  "services/social.svg": scene({ title: "Social", subtitle: "Community growth", icon: icons.social, accent: C.gold }),
  "services/ppc.svg": scene({ title: "Paid Ads", subtitle: "Performance media", icon: icons.ads }),
  "services/branding.svg": scene({ title: "Branding", subtitle: "Identity systems", icon: icons.design, accent: C.gold }),
  "services/email.svg": scene({ title: "Email", subtitle: "Automation flows", icon: icons.email }),
  "services/content.svg": scene({ title: "Content", subtitle: "Editorial strategy", icon: icons.content }),
  "services/influencer.svg": scene({ title: "Influence", subtitle: "Creator partnerships", icon: icons.team, accent: C.gold }),
  "services/video.svg": scene({ title: "Video", subtitle: "Ad production", icon: icons.video }),
  "services/local-seo.svg": scene({ title: "Local SEO", subtitle: "Regional dominance", icon: icons.chart, accent: C.gold }),
  "services/analytics.svg": scene({ title: "Analytics", subtitle: "Reporting suite", icon: icons.ads }),
  "services/landing.svg": scene({ title: "Landing", subtitle: "High conversion pages", icon: icons.content, accent: C.gold }),
  "services/crm.svg": scene({ title: "CRM", subtitle: "Automation setup", icon: icons.email }),
  "services/reputation.svg": scene({ title: "Reputation", subtitle: "Trust management", icon: icons.team }),
  "sections/carousel-1.svg": scene({ title: "Insights", subtitle: "Business analytics", icon: icons.chart }),
  "sections/carousel-2.svg": scene({ title: "Collaborate", subtitle: "Expert team support", icon: icons.team, accent: C.gold }),
  "sections/carousel-3.svg": scene({ title: "Results", subtitle: "Measurable growth", icon: icons.ads }),
  "sections/elevate.svg": scene({ title: "Elevate", subtitle: "Business success", icon: icons.team }),
  "sections/partner.svg": scene({ title: "Partner", subtitle: "Expert guidance", icon: icons.office, accent: C.gold }),
  "sections/full-service.svg": scene({ title: "Full Service", subtitle: "End-to-end marketing", icon: icons.office }),
  "sections/operations.svg": scene({ title: "Operations", subtitle: "Streamlined growth", icon: icons.chart, accent: C.gold }),
  "blog/post-1.svg": scene({ title: "Strategy", subtitle: "Growth playbook", icon: icons.content }),
  "blog/post-2.svg": scene({ title: "Automation", subtitle: "Workflow basics", icon: icons.ads, accent: C.gold }),
  "blog/post-3.svg": scene({ title: "Engagement", subtitle: "Customer success", icon: icons.team }),
  "about/stat-1.svg": scene({ title: "250+", subtitle: "Clients served", icon: icons.team }),
  "about/stat-2.svg": scene({ title: "Auto", subtitle: "Smart workflows", icon: icons.ads, accent: C.gold }),
  "about/stat-3.svg": scene({ title: "Global", subtitle: "Multi-market reach", icon: icons.chart }),
  "about/stat-4.svg": scene({ title: "Custom", subtitle: "Tailored solutions", icon: icons.design, accent: C.gold }),
};

for (const [rel, svg] of Object.entries(files)) {
  const dir = join(root, rel.split("/").slice(0, -1).join("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(root, rel), svg, "utf8");
}

writeFileSync(
  join(root, "logo.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 56" fill="none" role="img" aria-label="GM Enterprise">
  <rect width="280" height="56" rx="8" fill="${C.navy}"/>
  <rect x="12" y="10" width="36" height="36" rx="8" fill="${C.teal}"/>
  <text x="58" y="36" fill="${C.white}" font-family="Georgia, serif" font-size="22" font-weight="700">GM Enterprise</text>
  <rect x="210" y="22" width="58" height="4" rx="2" fill="${C.gold}"/>
</svg>`,
  "utf8",
);

console.log(`Generated ${Object.keys(files).length + 1} images in public/images/`);
