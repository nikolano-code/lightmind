// app/robots.ts
export default function robots() {
  const host = "https://lightmind.hu"; // ha saját domained lesz, itt cseréld
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
