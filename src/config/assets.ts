export type AssetKey = "hero" | "portrait" | "cafe-bliss" | "imizi" | "quad";
export interface PortfolioAsset {
  src: string | null;
  expectedPath: string;
  alt: string;
  width: number;
  height: number;
  position: string;
}
// Owner-supplied images live directly in public/.
export const assets: Record<AssetKey, PortfolioAsset> = {
  hero: {
    src: "/hero.webp",
    expectedPath: "/hero.webp",
    alt: "Website wireframes and design sketches on a sunlit desk",
    width: 1122,
    height: 1402,
    position: "50% 50%",
  },
  portrait: {
    src: "/portrait.webp",
    expectedPath: "/portrait.webp",
    alt: "Prince Arnaud Ishimwe",
    width: 1000,
    height: 1200,
    position: "50% 35%",
  },
  "cafe-bliss": {
    src: "/cafe-bliss.webp",
    expectedPath: "/cafe-bliss.webp",
    alt: "Café Bliss website displayed on a laptop in a sunlit café setting",
    width: 1672,
    height: 941,
    position: "50% 45%",
  },
  imizi: {
    src: "/imizi.webp",
    expectedPath: "/imizi.webp",
    alt: "IMIZI Training Club website presented on a monitor in a gym setting",
    width: 1672,
    height: 941,
    position: "50% 40%",
  },
  quad: {
    src: "/quad.webp",
    expectedPath: "/quad.webp",
    alt: "Quad application presentation showing its feed, chat, polls, and notifications",
    width: 1672,
    height: 941,
    position: "50% 40%",
  },
};
export const socialImage: string | null = "/sharing.webp";
export const socialImageDimensions = { width: 1734, height: 907 };
