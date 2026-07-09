import type { MetadataRoute } from "next";
import { excursions, staticGuidePaths } from "@/lib/excursions";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", ...staticGuidePaths, ...excursions.map((e) => e.path)];

  return [...new Set(paths)].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : path.includes("port-guide") || path.includes("signal-hill")
          ? 0.9
          : 0.8,
  }));
}
