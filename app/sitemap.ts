// app/sitemap.ts
export default function sitemap() {
  const base = "https://lightmind.vercel.app"; // ha saját domained lesz, itt cseréld

  const routes = ["", "/about", "/services", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return routes;
}
