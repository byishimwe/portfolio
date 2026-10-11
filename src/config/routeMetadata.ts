import { site, metadata, type MetadataTag } from "./site";
import { getProject } from "../content/projects";
import { socialImage } from "./assets";
export function routeMetadata(pathname: string): MetadataTag[] {
  if (pathname === "/")
    return metadata(
      `${site.name} — Designer & Frontend Developer`,
      "Independent web design and frontend development in Rwanda. Business websites, custom brand experiences, and website redesigns by Prince Arnaud Ishimwe.",
      "/",
      socialImage,
    );
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  const project = match && getProject(match[1]);
  return project
    ? metadata(
        `${project.title} — ${project.category} | ${site.name}`,
        project.summary,
        `/work/${project.slug}`,
        socialImage,
      )
    : [
        { title: `Page not found | ${site.name}` },
        { name: "robots", content: "noindex" },
      ];
}
