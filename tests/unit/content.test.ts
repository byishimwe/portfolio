import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  projects,
  getProject,
  adjacentProjects,
  rowLabels,
} from "../../src/content/projects";
import { assets, socialImage } from "../../src/config/assets";
import fs from "node:fs";
import { AssetSlot } from "../../src/components/AssetSlot";
import { site, whatsappUrl, emailUrl, metadata } from "../../src/config/site";
import { routeMetadata } from "../../src/config/routeMetadata";
describe("approved portfolio content", () => {
  it("preserves real project order and non-circular navigation", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "cafe-bliss",
      "imizi",
      "quad",
    ]);
    expect(getProject("unknown")).toBeUndefined();
    expect(adjacentProjects("cafe-bliss").previous).toBeUndefined();
    expect(adjacentProjects("cafe-bliss").next?.slug).toBe("imizi");
    expect(adjacentProjects("imizi").previous?.slug).toBe("cafe-bliss");
    expect(adjacentProjects("imizi").next?.slug).toBe("quad");
    expect(adjacentProjects("quad").next).toBeUndefined();
    expect(adjacentProjects("unknown")).toEqual({
      previous: undefined,
      next: undefined,
    });
  });
  it("has exactly five concise rows and source-correct technologies", () => {
    expect(rowLabels).toEqual([
      "The Challenge",
      "Approach",
      "Constraints",
      "Tech Stack",
      "Lesson Learned",
    ]);
    for (const project of projects) {
      expect(project.rows).toHaveLength(5);
      expect(
        project.rows.every((row) => row.length > 10 && row.length < 230),
      ).toBe(true);
    }
    expect(projects[0].rows[3]).toBe("HTML5, CSS3, JavaScript.");
    expect(projects[0].summary).toContain("fictional");
    expect(projects[1].summary).toContain("fictional");
    expect(projects[2].rows[3]).toContain("Express, MongoDB");
  });
  it("preserves confirmed identity and contacts", () => {
    expect(site.name).toBe("Prince Arnaud Ishimwe");
    expect(new URL(whatsappUrl).pathname).toBe("/250795198946");
    expect(emailUrl).toContain("mailto:princeishimwe754@gmail.com");
  });
  it("reserves honest neutral slots without requesting missing files", () => {
    for (const [name, asset] of Object.entries(assets)) {
      expect(asset.expectedPath).not.toContain("/assets/");
      expect(asset.width).toBeGreaterThan(0);
      expect(asset.height).toBeGreaterThan(0);
      const html = renderToStaticMarkup(
        createElement(AssetSlot, { name: name as keyof typeof assets }),
      );
      if (asset.src) {
        expect(fs.existsSync(`public${asset.src}`)).toBe(true);
        expect(html).toContain("<img");
      } else {
        expect(html).toContain("Final image to come");
        expect(html).not.toContain("<img");
      }
    }
  });
  it("uses one configurable project source for crop and full presentation", () => {
    const asset = assets["cafe-bliss"];
    const original = asset.src;
    try {
      asset.src = asset.expectedPath;
      for (const complete of [false, true]) {
        const html = renderToStaticMarkup(
          createElement(AssetSlot, { name: "cafe-bliss", complete }),
        );
        expect(html).toContain(`src="${asset.expectedPath}"`);
        expect(html.match(/<img/g)).toHaveLength(1);
        expect(html).toContain(`width="${asset.width}"`);
      }
    } finally {
      asset.src = original;
    }
  });
  it("provides unique route metadata, honest sharing defaults and absolute URLs", () => {
    for (const project of projects) {
      const tags = routeMetadata(`/work/${project.slug}`);
      expect(tags).toContainEqual({
        title: `${project.title} — ${project.category} | ${site.name}`,
      });
      expect(tags).toContainEqual({
        name: "description",
        content: project.summary,
      });
      expect(
        tags.some((tag) => "property" in tag && tag.property === "og:image"),
      ).toBe(Boolean(socialImage));
    }
    expect(routeMetadata("/unknown")).toContainEqual({
      name: "robots",
      content: "noindex",
    });
    const origin = site.origin;
    try {
      site.origin = "https://portfolio.example.test";
      expect(
        metadata("Quad", "A student community.", "/work/quad", "/sharing.webp"),
      ).toContainEqual({
        tagName: "link",
        rel: "canonical",
        href: "https://portfolio.example.test/work/quad",
      });
      expect(
        metadata("Quad", "A student community.", "/work/quad", "/sharing.webp"),
      ).toContainEqual({
        property: "og:image",
        content: "https://portfolio.example.test/sharing.webp",
      });
    } finally {
      site.origin = origin;
    }
  });
});
