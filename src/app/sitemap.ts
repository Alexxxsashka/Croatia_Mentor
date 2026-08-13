import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://croatia-mentor.space";
  const locales = ["en", "ua", "ru"];

  const routes = [
    "",
    "/learn-croatian",
    "/lessons",
    "/games",
    "/vocabulary",
    "/glossary",
    "/ai-chat",
    "/contacts",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" || route === "/learn-croatian" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : route === "/learn-croatian" ? 0.9 : 0.8,
      });
    }
  }

  return entries;
}
