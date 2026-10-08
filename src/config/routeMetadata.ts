import { site, metadata, type MetadataTag } from "./site";
import { getProject } from "../content/projects";
export function routeMetadata(pathname: string): MetadataTag[] {
  if (pathname === "/")
    return metadata(
      `${site.name} — Designer & Frontend Developer`,
      "An independent designer and frontend developer in Rwanda, creating thoughtful websites and digital experiences for businesses and brands.",
      "/",
      "/social-home.webp",
    );
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  const project = match && getProject(match[1]);
  return project
    ? metadata(
        `${project.title} — ${project.type} | ${site.name}`,
        project.summary,
        `/work/${project.slug}`,
        `/social-${project.slug}.webp`,
      )
    : [
        { title: `Page not found | ${site.name}` },
        { name: "robots", content: "noindex" },
      ];
}
