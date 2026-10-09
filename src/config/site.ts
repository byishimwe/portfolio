export const site = {
  name: "Prince Arnaud Ishimwe",
  role: "Designer & Frontend Developer",
  location: "Rwanda",
  year: 2026,
  email: "princeishimwe754@gmail.com",
  whatsapp: "250795198946",
  origin: import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "",
};
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Prince, I’d like to discuss a website project.")}`;
export const emailUrl = `mailto:${site.email}?subject=${encodeURIComponent("Let’s build something thoughtful")}`;
export type MetadataTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { tagName: "link"; rel: string; href: string };
export function metadata(
  title: string,
  description: string,
  path: string,
  image: string | null,
): MetadataTag[] {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...(image
      ? [
          { property: "og:image", content: `${site.origin}${image}` },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
        ]
      : []),
    {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    },
    ...(site.origin
      ? [
          { property: "og:url", content: `${site.origin}${path}` },
          {
            tagName: "link" as const,
            rel: "canonical",
            href: `${site.origin}${path}`,
          },
        ]
      : []),
  ];
}
