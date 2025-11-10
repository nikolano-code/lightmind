// app/sitemap.ts
export default function sitemap() {
  const base = "https://lightmind.hu";

  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  return routes;
}
