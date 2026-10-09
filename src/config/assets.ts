export type AssetKey = "hero" | "portrait" | "cafe-bliss" | "imizi" | "quad";
export interface PortfolioAsset {
  src: string | null;
  expectedPath: string;
  alt: string;
  width: number;
  height: number;
  position: string;
}
// Supply final files directly in public/, then set src to expectedPath.
export const assets: Record<AssetKey, PortfolioAsset> = {
  hero: {
    src: null,
    expectedPath: "/hero.webp",
    alt: "Featured design and development work",
    width: 1200,
    height: 1500,
    position: "50% 50%",
  },
  portrait: {
    src: null,
    expectedPath: "/portrait.webp",
    alt: "Prince Arnaud Ishimwe",
    width: 1000,
    height: 1200,
    position: "50% 35%",
  },
  "cafe-bliss": {
    src: null,
    expectedPath: "/cafe-bliss.webp",
    alt: "Café Bliss hospitality website presentation",
    width: 1600,
    height: 900,
    position: "50% 45%",
  },
  imizi: {
    src: null,
    expectedPath: "/imizi.webp",
    alt: "IMIZI Training Club website presentation",
    width: 1600,
    height: 900,
    position: "50% 40%",
  },
  quad: {
    src: null,
    expectedPath: "/quad.webp",
    alt: "Quad student community application presentation",
    width: 1600,
    height: 900,
    position: "50% 40%",
  },
};
// Supply approved 1200×630 sharing artwork; do not reuse obsolete portfolio previews.
export const socialImage: string | null = null;
