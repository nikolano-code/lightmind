import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lightmind.hu";

  // Alap fix oldalak
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 🔍 Dinamikus oldalak automatikus beolvasása (pl. blog, projektek, stb.)
  const dynamicDirs = ["blog", "projects"]; // ← ide add meg, ha lesz új mappa a /app alatt

  const dynamicRoutes = dynamicDirs.flatMap((dir) => {
    const fullPath = path.join(process.cwd(), "app", dir);
    if (!fs.existsSync(fullPath)) return [];

    const files = fs.readdirSync(fullPath).filter((file) => file.endsWith(".tsx"));

    return files.map((file) => ({
      url: `${baseUrl}/${dir}/${file.replace(".tsx", "")}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  });

  // Összevonás
  return [...staticRoutes, ...dynamicRoutes];
}

