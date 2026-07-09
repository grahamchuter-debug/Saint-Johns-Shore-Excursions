export const SITE_NAME = "St. John's Shore Excursions";
export const SITE_URL = "https://saintjohnsshoreexcursions.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers visiting St. John's, Newfoundland and Labrador — Signal Hill, Cape Spear, puffins, icebergs, Jellybean Row, and Canada & New England port planning.";
export const GEO_LABEL = "St. John's, Newfoundland and Labrador";

export const DEFAULT_HERO_IMAGE = "/images/st-johns-hero.png";
export const DEFAULT_HERO_ALT =
  "St. John's harbour and Signal Hill panorama, Newfoundland and Labrador";

export const HERO_IMAGES = {
  stJohns: {
    src: DEFAULT_HERO_IMAGE,
    alt: DEFAULT_HERO_ALT,
  },
  signalHill: {
    src: "/images/signal-hill-hero.jpg",
    alt: "Cabot Tower on Signal Hill overlooking St. John's harbour, Newfoundland and Labrador",
  },
  capeSpear: {
    src: "/images/cape-spear-hero.jpg",
    alt: "Cape Spear lighthouse at the easternmost point near St. John's, Newfoundland and Labrador",
  },
  jellybeanRow: {
    src: "/images/jellybean-row-hero.jpg",
    alt: "Colourful Jellybean Row houses in downtown St. John's, Newfoundland and Labrador",
  },
  quidiVidi: {
    src: "/images/quidi-vidi-hero.jpg",
    alt: "Quidi Vidi fishing village harbour in St. John's, Newfoundland and Labrador",
  },
  iceberg: {
    src: "/images/iceberg-hero.jpg",
    alt: "Iceberg off the Newfoundland and Labrador coast near St. John's",
  },
  whale: {
    src: "/images/whale-hero.jpg",
    alt: "Humpback whale off the Newfoundland coast near St. John's",
  },
  puffin: {
    src: "/images/puffin-hero.jpg",
    alt: "Atlantic puffin on the Newfoundland coast near St. John's",
  },
  port: {
    src: "/images/port-hero.jpg",
    alt: "St. John's harbour waterfront and cruise port, Newfoundland and Labrador",
  },
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
    },
  };
}
