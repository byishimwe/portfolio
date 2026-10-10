import { defineConfig, loadEnv, type Plugin } from "vite";
import fs from "node:fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { socialImage, socialImageDimensions } from "./src/config/assets";
export default defineConfig(({ mode }) => {
  // Only the public origin is read. No server variables are injected into JS.
  const configured = loadEnv(
    mode,
    process.cwd(),
    "VITE_SITE_URL",
  ).VITE_SITE_URL;
  const origin = configured ? new URL(configured).origin : "";
  const publicSeo: Plugin = {
    name: "public-spa-seo",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          ...(socialImage
            ? [
                {
                  tag: "meta",
                  attrs: {
                    "data-route-meta": "",
                    property: "og:image",
                    content: `${origin}${socialImage}`,
                  },
                  injectTo: "head" as const,
                },
                ...Object.entries(socialImageDimensions).map(
                  ([dimension, value]) => ({
                    tag: "meta",
                    attrs: {
                      "data-route-meta": "",
                      property: `og:image:${dimension}`,
                      content: String(value),
                    },
                    injectTo: "head" as const,
                  }),
                ),
              ]
            : []),
          ...(origin
            ? [
                {
                  tag: "link",
                  attrs: {
                    "data-route-meta": "",
                    rel: "canonical",
                    href: `${origin}/`,
                  },
                  injectTo: "head" as const,
                },
                {
                  tag: "meta",
                  attrs: {
                    "data-route-meta": "",
                    property: "og:url",
                    content: `${origin}/`,
                  },
                  injectTo: "head" as const,
                },
              ]
            : []),
        ],
      };
    },
    generateBundle() {
      if (!origin) return;
      const routes = ["/", "/work/cafe-bliss", "/work/imizi", "/work/quad"];
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${origin}${route}</loc></url>`).join("")}</urlset>`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `${fs.readFileSync("public/robots.txt", "utf8")}\nSitemap: ${origin}/sitemap.xml\n`,
      });
    },
  };
  return { plugins: [react(), tailwindcss(), publicSeo] };
});
