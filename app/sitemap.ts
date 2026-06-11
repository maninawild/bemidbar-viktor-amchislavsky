import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/tours",
    "/articles",
    "/library",
    "/jewish-pearls",
    "/archive",
    "/gallery",
    "/reviews",
    "/about",
    "/contacts"
  ];
  const articleRoutes = getArticles().map((article) => ({
    url: `${site.url}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.82
    })),
    ...articleRoutes
  ];
}
