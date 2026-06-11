import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public", "images");

const C = {
  navy: "#0C2340",
  blue: "#0078C1",
  teal: "#14B8A6",
  gold: "#C9A227",
  gray: "#4A4E51",
  cream: "#F0F4F8",
  white: "#FFFFFF",
  sky: "#EDF6FF",
  skyDeep: "#D6E8F7",
};

function scene({ id, title, subtitle, glyph, accent = C.blue }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.navy}"/>
      <stop offset="100%" stop-color="#163A5F"/>
    </linearGradient>
    <linearGradient id="accent-${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${C.teal}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg-${id})"/>
  <circle cx="1280" cy="200" r="240" fill="${accent}" opacity="0.1"/>
  <circle cx="240" cy="700" r="300" fill="${C.gold}" opacity="0.07"/>
  <rect x="120" y="140" width="480" height="10" rx="5" fill="url(#accent-${id})"/>
  <text x="120" y="270" fill="${C.white}" font-family="Georgia, serif" font-size="76" font-weight="700">${title}</text>
  <text x="120" y="350" fill="${C.cream}" font-family="Arial, sans-serif" font-size="32">${subtitle}</text>
  <g transform="translate(1080, 280)">${glyph}</g>
  <rect x="120" y="760" width="320" height="8" rx="4" fill="${C.gold}" opacity="0.5"/>
</svg>`;
}

/** Tarjeta cuadrada — ícono grande centrado, fondo claro, sin texto */
function cardThumb({ id, glyph, accent = C.blue, accent2 = C.teal }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.sky}"/>
      <stop offset="55%" stop-color="${C.white}"/>
      <stop offset="100%" stop-color="${C.skyDeep}"/>
    </linearGradient>
    <linearGradient id="plate-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${accent2}"/>
    </linearGradient>
    <filter id="shadow-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="${C.navy}" flood-opacity="0.12"/>
    </filter>
  </defs>
  <rect width="400" height="400" fill="url(#bg-${id})"/>
  <circle cx="350" cy="55" r="70" fill="${accent}" opacity="0.09"/>
  <circle cx="45" cy="355" r="90" fill="${accent2}" opacity="0.08"/>
  <circle cx="320" cy="330" r="40" fill="${C.gold}" opacity="0.12"/>
  <g filter="url(#shadow-${id})">
    <rect x="108" y="108" width="184" height="184" rx="44" fill="${C.white}"/>
    <rect x="118" y="118" width="164" height="164" rx="38" fill="url(#plate-${id})" opacity="0.14"/>
  </g>
  <g transform="translate(200, 200)">${glyph}</g>
</svg>`;
}

const glyphs = {
  chart: `<g fill="${C.blue}"><rect x="-52" y="8" width="22" height="44" rx="7"/><rect x="-20" y="-16" width="22" height="68" rx="7" opacity="0.82"/><rect x="12" y="-36" width="22" height="88" rx="7" opacity="0.58"/><circle cx="-41" cy="0" r="5" fill="${C.gold}"/><circle cx="-9" cy="-24" r="5" fill="${C.gold}"/><circle cx="23" cy="-44" r="5" fill="${C.gold}"/></g>`,
  social: `<g fill="${C.blue}"><rect x="-58" y="-34" width="116" height="76" rx="20" opacity="0.18"/><circle cx="-26" cy="-6" r="18"/><rect x="4" y="-20" width="52" height="8" rx="4" opacity="0.55"/><rect x="4" y="-4" width="40" height="8" rx="4" opacity="0.4"/><rect x="4" y="12" width="28" height="8" rx="4" opacity="0.28"/></g>`,
  ads: `<g fill="${C.blue}"><path d="M-54-18h108v24H-54z" rx="8"/><rect x="-54" y="16" width="72" height="12" rx="6" opacity="0.45"/><rect x="-54" y="36" width="88" height="12" rx="6" opacity="0.3"/><rect x="-54" y="56" width="60" height="12" rx="6" opacity="0.2"/><circle cx="42" cy="0" r="14" fill="${C.gold}"/></g>`,
  design: `<g><circle cx="-28" cy="-8" r="30" fill="${C.blue}" opacity="0.85"/><circle cx="22" cy="-18" r="22" fill="${C.teal}" opacity="0.75"/><circle cx="8" cy="24" r="18" fill="${C.gold}" opacity="0.8"/></g>`,
  email: `<g fill="${C.blue}"><rect x="-54" y="-38" width="108" height="76" rx="16"/><path d="M-54-22 0 18 54-22" fill="none" stroke="${C.white}" stroke-width="6" stroke-linejoin="round"/><circle cx="38" cy="-28" r="10" fill="${C.gold}"/></g>`,
  content: `<g fill="${C.blue}"><rect x="-50" y="-42" width="100" height="16" rx="6"/><rect x="-50" y="-16" width="76" height="10" rx="5" opacity="0.5"/><rect x="-50" y="2" width="88" height="10" rx="5" opacity="0.38"/><rect x="-50" y="20" width="64" height="10" rx="5" opacity="0.26"/><rect x="-50" y="38" width="48" height="10" rx="5" opacity="0.18"/></g>`,
  team: `<g fill="${C.blue}"><circle cx="0" cy="-24" r="22"/><path d="M-48 38c8-28 88-28 96 0" opacity="0.9"/><circle cx="-34" cy="2" r="16" opacity="0.55"/><circle cx="34" cy="2" r="16" opacity="0.55"/></g>`,
  video: `<g fill="${C.blue}"><rect x="-58" y="-40" width="116" height="80" rx="18"/><path d="M-8-18 28 0-8 18Z" fill="${C.white}"/></g>`,
  office: `<g fill="${C.blue}"><rect x="-56" y="-44" width="112" height="88" rx="14" opacity="0.2"/><rect x="-36" y="-20" width="28" height="24" rx="4"/><rect x="8" y="-20" width="28" height="24" rx="4" opacity="0.75"/><rect x="-36" y="12" width="72" height="24" rx="4" opacity="0.55"/></g>`,
  target: `<g fill="none" stroke="${C.blue}" stroke-width="7"><circle cx="0" cy="0" r="40"/><circle cx="0" cy="0" r="22"/><circle cx="0" cy="0" r="6" fill="${C.gold}" stroke="none"/></g>`,
  globe: `<g fill="none" stroke="${C.blue}" stroke-width="6"><circle cx="0" cy="0" r="38"/><path d="M0-38a52 20 0 0 1 0 76M-38 0h76M-28-28c16 10 16 54 0 64M28-28c-16 10-16 54 0 64"/></g>`,
  spark: `<g fill="${C.gold}"><path d="M0-44 10-8 44 0 10 8 0 44-10 8-44 0-10-8Z"/><circle cx="0" cy="0" r="10" fill="${C.blue}"/></g>`,
};

const files = {
  "hero/slide-1.svg": scene({ id: "hero-1", title: "Growth", subtitle: "Data-driven marketing", glyph: glyphs.chart }),
  "hero/slide-2.svg": scene({ id: "hero-2", title: "Strategy", subtitle: "Campaigns that scale", glyph: glyphs.team, accent: C.teal }),
  "hero/slide-3.svg": scene({ id: "hero-3", title: "Brand", subtitle: "Presence that converts", glyph: glyphs.design, accent: C.gold }),
  "services/seo.svg": cardThumb({ id: "seo", glyph: glyphs.chart }),
  "services/social.svg": cardThumb({ id: "social", glyph: glyphs.social, accent: C.teal, accent2: C.blue }),
  "services/ppc.svg": cardThumb({ id: "ppc", glyph: glyphs.ads, accent: C.blue, accent2: C.navy }),
  "services/branding.svg": cardThumb({ id: "branding", glyph: glyphs.design, accent: C.gold, accent2: C.blue }),
  "services/email.svg": cardThumb({ id: "email", glyph: glyphs.email, accent: C.teal, accent2: C.blue }),
  "services/content.svg": cardThumb({ id: "content", glyph: glyphs.content }),
  "services/influencer.svg": cardThumb({ id: "influencer", glyph: glyphs.team, accent: C.teal, accent2: C.navy }),
  "services/video.svg": cardThumb({ id: "video", glyph: glyphs.video, accent: C.navy, accent2: C.blue }),
  "services/local-seo.svg": cardThumb({ id: "local-seo", glyph: glyphs.target, accent: C.teal, accent2: C.blue }),
  "services/analytics.svg": cardThumb({ id: "analytics", glyph: glyphs.chart, accent: C.navy, accent2: C.teal }),
  "services/landing.svg": cardThumb({ id: "landing", glyph: glyphs.spark, accent: C.gold, accent2: C.blue }),
  "services/crm.svg": cardThumb({ id: "crm", glyph: glyphs.office, accent: C.blue, accent2: C.teal }),
  "services/reputation.svg": cardThumb({ id: "reputation", glyph: glyphs.globe, accent: C.teal, accent2: C.navy }),
  "sections/carousel-1.svg": cardThumb({ id: "carousel-1", glyph: glyphs.chart }),
  "sections/carousel-2.svg": cardThumb({ id: "carousel-2", glyph: glyphs.team, accent: C.teal, accent2: C.blue }),
  "sections/carousel-3.svg": cardThumb({ id: "carousel-3", glyph: glyphs.ads }),
  "sections/elevate.svg": cardThumb({ id: "elevate", glyph: glyphs.spark, accent: C.gold, accent2: C.blue }),
  "sections/partner.svg": cardThumb({ id: "partner", glyph: glyphs.office, accent: C.teal, accent2: C.navy }),
  "sections/full-service.svg": cardThumb({ id: "full-service", glyph: glyphs.team, accent: C.blue, accent2: C.teal }),
  "sections/operations.svg": cardThumb({ id: "operations", glyph: glyphs.chart, accent: C.navy, accent2: C.teal }),
  "blog/post-1.svg": cardThumb({ id: "blog-1", glyph: glyphs.content }),
  "blog/post-2.svg": cardThumb({ id: "blog-2", glyph: glyphs.ads, accent: C.teal, accent2: C.blue }),
  "blog/post-3.svg": cardThumb({ id: "blog-3", glyph: glyphs.team, accent: C.gold, accent2: C.blue }),
  "about/stat-1.svg": cardThumb({ id: "stat-1", glyph: glyphs.team }),
  "about/stat-2.svg": cardThumb({ id: "stat-2", glyph: glyphs.ads, accent: C.teal, accent2: C.blue }),
  "about/stat-3.svg": cardThumb({ id: "stat-3", glyph: glyphs.globe, accent: C.blue, accent2: C.teal }),
  "about/stat-4.svg": cardThumb({ id: "stat-4", glyph: glyphs.design, accent: C.gold, accent2: C.blue }),
};

for (const [rel, svg] of Object.entries(files)) {
  const dir = join(root, rel.split("/").slice(0, -1).join("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(root, rel), svg, "utf8");
}

console.log(`Generated ${Object.keys(files).length} images in public/images/`);
