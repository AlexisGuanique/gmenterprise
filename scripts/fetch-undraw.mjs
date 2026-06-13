/**
 * Downloads unDraw illustrations (https://undraw.co/illustrations)
 * and applies the full GM Enterprise brand palette from theme-presets.
 *
 * License: unDraw open license — free for commercial use.
 * Run: npm run images:undraw
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicImages = path.join(root, "public", "images");

/** GM Enterprise — ilustraciones con contraste WCAG sobre --illus-surface (#D4E4F2) */
const BRAND = {
  gold: "#C9A227",
  illustrationAccent: "#0078C1",
  primaryDark: "#0C2340",
  /** Fills que eran blanco — visible sobre superficie clara */
  surfaceDeep: "#C5D9EA",
  /** Fills grises muy claros del SVG */
  surfaceMuted: "#B0C4D8",
  /** Fondo custom video / superficie card */
  surface: "#D4E4F2",
  black: "#0F172A",
  grayMuted: "#64748B",
  grayBorder: "#94A8BC",
  grayDark: "#334155",
};

/**
 * unDraw default colors → brand (longest hex first).
 * Acento principal → azul #0078C1 · oscuros → navy #0C2340 · dorado → #C9A227
 * Sin #14B8A6 (teal) en ilustraciones — el cliente percibe verde.
 */
const COLOR_MAP = [
  ["#14B8A6", BRAND.illustrationAccent],
  ["#14b8a6", BRAND.illustrationAccent],
  ["#6c63ff", BRAND.illustrationAccent],
  ["#6C63FF", BRAND.illustrationAccent],
  ["#ff6584", BRAND.gold],
  ["#ff6582", BRAND.gold],
  ["#575a89", BRAND.primaryDark],
  ["#575A89", BRAND.primaryDark],
  ["#3f3d56", BRAND.primaryDark],
  ["#3F3D56", BRAND.primaryDark],
  ["#2f2e43", BRAND.primaryDark],
  ["#2f2e41", BRAND.primaryDark],
  ["#2F2E41", BRAND.primaryDark],
  ["#090814", BRAND.black],
  ["#707070", BRAND.grayDark],
  ["#d0cde1", BRAND.surfaceMuted],
  ["#d6d6e3", BRAND.surfaceMuted],
  ["#e2e3e4", BRAND.surfaceMuted],
  ["#e4e4e4", BRAND.surfaceMuted],
  ["#e0e0e0", BRAND.surfaceMuted],
  ["#e6e6e6", BRAND.surfaceMuted],
  ["#f2f2f2", BRAND.surfaceMuted],
  ["#F0F4F8", BRAND.surfaceMuted],
  ["#f0f4f8", BRAND.surfaceMuted],
  ["#FAFBFC", BRAND.surfaceDeep],
  ["#fafbfc", BRAND.surfaceDeep],
  ["#cbcbcb", BRAND.grayBorder],
  ["#ffffff", BRAND.surfaceDeep],
  ["#fff", BRAND.surfaceDeep],
  ["#ccc", BRAND.grayBorder],
];

const CDN = "https://cdn.undraw.co/illustration";

/** Slugs chosen for semantic fit (not just visual similarity). */
/** @type {Record<string, string | null>} null = use built-in SVG */
const manifest = {
  "hero/slide-1.svg": "charts_31si",
  "hero/slide-2.svg": "conference-call_jgi5",
  "hero/slide-3.svg": "content-team_1p7b",

  "services/seo.svg": "location-search_9mdg",
  "services/social.svg": "comment-sent_8c4r",
  "services/ppc.svg": "split-testing_sdbx",
  "services/branding.svg": "setup-wizard_45kx",
  "services/email.svg": "text-messages_p6bk",
  "services/content.svg": "markdown-file_io4x",
  "services/influencer.svg": "join_niai",
  "services/video.svg": null,
  "services/local-seo.svg": "finding-the-way_qp1z",
  "services/analytics.svg": "ai-data-extraction_soxc",
  "services/landing.svg": "web-developer_gxaa",
  "services/crm.svg": "meet-the-team_fau8",
  "services/reputation.svg": "reviews_bmgj",

  "sections/carousel-1.svg": "charts_31si",
  "sections/carousel-2.svg": "content-team_1p7b",
  "sections/carousel-3.svg": "web-developer_gxaa",
  "sections/elevate.svg": "goal_v712",
  "sections/partner.svg": "join_niai",
  "sections/full-service.svg": "business-plan_zrf7",
  "sections/operations.svg": "build-mode_aa78",

  "about/stat-1.svg": "meet-the-team_fau8",
  "about/stat-2.svg": "build-mode_aa78",
  "about/stat-3.svg": "airplane_do9t",
  "about/stat-4.svg": "setup-wizard_45kx",

  "blog/post-1.svg": "open-book_pet1",
  "blog/post-2.svg": "morning-news_h9nz",
  "blog/post-3.svg": "road-to-knowledge_ufma",
};

export function applyBrandPalette(svg) {
  let result = svg;
  for (const [from, to] of COLOR_MAP) {
    result = result.split(from).join(to);
    const upper = from.toUpperCase();
    if (upper !== from) result = result.split(upper).join(to);
    const lower = from.toLowerCase();
    if (lower !== from) result = result.split(lower).join(to);
  }
  return result;
}

/** Adds breathing room so illustrations aren't clipped in square frames. */
export function normalizeSvgViewBox(svg, paddingRatio = 0.1) {
  const match = svg.match(/viewBox="([^"]+)"/);
  if (!match) return svg;

  const parts = match[1].trim().split(/\s+/).map(Number);
  if (parts.length !== 4 || parts.some(Number.isNaN)) return svg;

  const [minX, minY, width, height] = parts;
  const pad = Math.max(width, height) * paddingRatio;
  const viewBox = `${minX - pad} ${minY - pad} ${width + pad * 2} ${height + pad * 2}`;

  return svg.replace(/viewBox="[^"]+"/, `viewBox="${viewBox}"`);
}

/** Video marketing — monitor + play button (no suitable unDraw slug). */
function createVideoMarketingSvg() {
  const { illustrationAccent, primaryDark, surfaceDeep, surfaceMuted, surface, gold } = BRAND;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640" role="img" aria-label="Video marketing">
  <rect width="960" height="640" fill="${surface}"/>
  <rect x="120" y="80" width="720" height="420" rx="24" fill="${surfaceMuted}"/>
  <rect x="150" y="110" width="660" height="360" rx="12" fill="${primaryDark}"/>
  <circle cx="480" cy="290" r="72" fill="${illustrationAccent}" opacity="0.18"/>
  <polygon points="455,250 455,330 535,290" fill="${surfaceDeep}"/>
  <rect x="150" y="500" width="180" height="12" rx="6" fill="${surfaceMuted}"/>
  <rect x="150" y="528" width="120" height="12" rx="6" fill="${surfaceMuted}"/>
  <rect x="620" y="500" width="190" height="36" rx="18" fill="${illustrationAccent}"/>
  <rect x="350" y="500" width="240" height="8" rx="4" fill="${gold}" opacity="0.85"/>
  <circle cx="350" cy="504" r="14" fill="${illustrationAccent}"/>
  <path d="M760 140h48v48h-48z" fill="${illustrationAccent}" opacity="0.35" rx="8"/>
  <path d="M92 180c0-22 18-40 40-40h36v80h-36c-22 0-40-18-40-40z" fill="${illustrationAccent}" opacity="0.25"/>
</svg>`;
}

async function fetchSvg(slug) {
  const res = await fetch(`${CDN}/${slug}.svg`);
  if (!res.ok) throw new Error(`Failed ${slug}: ${res.status}`);
  return res.text();
}

async function main() {
  let ok = 0;
  let fail = 0;

  for (const [relativePath, slug] of Object.entries(manifest)) {
    const outPath = path.join(publicImages, relativePath);
    await mkdir(path.dirname(outPath), { recursive: true });

    try {
      const raw = slug ? await fetchSvg(slug) : createVideoMarketingSvg();
      const branded = applyBrandPalette(normalizeSvgViewBox(raw));
      await writeFile(outPath, branded, "utf8");
      console.log(`✓ ${relativePath} ← ${slug ?? "custom video"}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${relativePath} (${slug ?? "custom"}): ${err.message}`);
      fail++;
    }
  }

  console.log("\nGM Enterprise palette applied:");
  console.log(`  accent: ${BRAND.illustrationAccent} | navy: ${BRAND.primaryDark} | gold: ${BRAND.gold}`);
  console.log(`Done: ${ok} saved, ${fail} failed.`);
}

main();
