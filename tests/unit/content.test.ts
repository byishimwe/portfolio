import { describe, expect, it } from "vitest";
import { projects, getProject } from "../../src/content/projects";
import { site, whatsappUrl, emailUrl, metadata } from "../../src/config/site";
import fs from "node:fs";
describe("published content integrity", () => {
  it("emits absolute canonical and social URLs when the public origin is configured", () => {
    const previous = site.origin;
    try {
      site.origin = "https://portfolio.example.test";
      const tags = metadata(
        "Quad",
        "A student community.",
        "/work/quad",
        "/social-quad.webp",
      );
      expect(tags).toContainEqual({
        tagName: "link",
        rel: "canonical",
        href: "https://portfolio.example.test/work/quad",
      });
      expect(tags).toContainEqual({
        property: "og:image",
        content: "https://portfolio.example.test/social-quad.webp",
      });
    } finally {
      site.origin = previous;
    }
  });
  it("has complete, genuine project evidence at every referenced path", () => {
    for (const project of projects) {
      for (const media of [project.cover, ...project.gallery, project.mobile]) {
        expect(fs.existsSync(`public${media.src}`), media.src).toBe(true);
        expect(media.src).not.toContain("/assets/");
        expect(media.alt.length).toBeGreaterThan(20);
      }
    }
  });
  it("rejects unknown projects and preserves exhibition order", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "cafe-bliss",
      "imizi",
      "quad",
    ]);
    expect(getProject("not-a-project")).toBeUndefined();
  });
  it("uses the user-supplied contact destinations", () => {
    expect(site.name).toBe("Prince Arnaud Ishimwe");
    expect(new URL(whatsappUrl).pathname).toBe("/250795198946");
    expect(emailUrl).toContain("mailto:princeishimwe754@gmail.com");
  });
  it("provides distinct project metadata and truthful concept disclosures", () => {
    for (const project of projects) {
      const meta = metadata(
        project.title,
        project.summary,
        `/work/${project.slug}`,
        `/social-${project.slug}.webp`,
      );
      expect(meta).toContainEqual({ title: project.title });
      expect(fs.existsSync(`public/social-${project.slug}.webp`)).toBe(true);
      expect(project.disclosure).toMatch(
        project.slug === "quad" ? /synthetic demo data/ : /fictional concept/,
      );
    }
  });
});
