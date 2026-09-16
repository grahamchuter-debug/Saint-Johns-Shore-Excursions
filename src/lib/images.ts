import { HERO_IMAGES, DEFAULT_HERO_IMAGE, DEFAULT_HERO_ALT } from "./site";

/**
 * Site image registry used by PageHero / ResponsiveImage.
 * Recovered for Phase 9A from HERO_IMAGES in site.ts (module was referenced
 * by Wave 3 components but never committed).
 */
export type SiteImage = {
  base: string;
  src: string;
  alt: string;
};

function baseFromSrc(src: string): string {
  const file = src.split("/").pop() ?? "";
  return file.replace(/\.(jpg|jpeg|png|webp|avif)$/i, "");
}

function toSiteImage(src: string, alt: string): SiteImage {
  return {
    base: baseFromSrc(src),
    src,
    alt,
  };
}

export const siteImages = {
  hero: toSiteImage(DEFAULT_HERO_IMAGE, DEFAULT_HERO_ALT),
  stJohns: toSiteImage(HERO_IMAGES.stJohns.src, HERO_IMAGES.stJohns.alt),
  signalHill: toSiteImage(HERO_IMAGES.signalHill.src, HERO_IMAGES.signalHill.alt),
  capeSpear: toSiteImage(HERO_IMAGES.capeSpear.src, HERO_IMAGES.capeSpear.alt),
  jellybeanRow: toSiteImage(
    HERO_IMAGES.jellybeanRow.src,
    HERO_IMAGES.jellybeanRow.alt,
  ),
  quidiVidi: toSiteImage(HERO_IMAGES.quidiVidi.src, HERO_IMAGES.quidiVidi.alt),
  iceberg: toSiteImage(HERO_IMAGES.iceberg.src, HERO_IMAGES.iceberg.alt),
  whale: toSiteImage(HERO_IMAGES.whale.src, HERO_IMAGES.whale.alt),
  puffin: toSiteImage(HERO_IMAGES.puffin.src, HERO_IMAGES.puffin.alt),
  port: toSiteImage(HERO_IMAGES.port.src, HERO_IMAGES.port.alt),
} as const satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;

export function getSiteImage(key: SiteImageKey): SiteImage {
  return siteImages[key];
}
