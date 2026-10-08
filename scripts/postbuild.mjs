import fs from "node:fs/promises";
import path from "node:path";
import { loadEnv } from "vite";
const root = "build/client";
await fs.copyFile(
  path.join(root, "404/index.html"),
  path.join(root, "404.html"),
);
const origin = loadEnv(
  "production",
  process.cwd(),
  "VITE_",
).VITE_SITE_URL?.replace(/\/$/, "");
if (origin) {
  const routes = ["/", "/work/cafe-bliss", "/work/imizi", "/work/quad"];
  await fs.writeFile(
    path.join(root, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${origin}${route}</loc></url>`).join("")}</urlset>`,
  );
  await fs.appendFile(
    path.join(root, "robots.txt"),
    `\nSitemap: ${origin}/sitemap.xml\n`,
  );
}
console.log(
  "Static 404 prepared; canonical origin:",
  origin || "not configured (set VITE_SITE_URL before launch)",
);
