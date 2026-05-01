import type { MetadataRoute } from "next";

const siteUrl = "https://asimanabdullazade.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,                      lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/photography`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/film`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/design`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
  ];
}
