import type { AssetKey } from "../config/assets";
export const rowLabels = [
  "The Challenge",
  "Approach",
  "Constraints",
  "Tech Stack",
  "Lesson Learned",
] as const;
export interface Project {
  slug: Exclude<AssetKey, "hero" | "portrait">;
  number: string;
  title: string;
  category: string;
  role: string;
  year: number;
  type: string;
  summary: string;
  liveUrl: string;
  repositoryUrl: string;
  rows: [string, string, string, string, string];
}
// Facts checked against actual source; lessons are owner-provided editorial reflections.
export const projects: Project[] = [
  {
    slug: "cafe-bliss",
    number: "01",
    title: "Café Bliss",
    category: "Hospitality · Website",
    role: "Design & Development",
    year: 2026,
    type: "Independent Concept",
    summary:
      "An editorial website concept for a fictional neighborhood café, pairing a welcoming atmosphere with menu discovery and a demonstration reservation flow.",
    liveUrl: "https://cafe-bliss-rw.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/Cafe-Bliss",
    rows: [
      "Make a fictional neighborhood café feel welcoming online while helping visitors find its menu and essential information.",
      "Paired expressive typography and warm photography with straightforward navigation, a filterable menu, and a structured reservation interface.",
      "Kept the experience lightweight and frontend-only, with accessible interactions and reservation forms presented as demonstrations.",
      "HTML5, CSS3, JavaScript.",
      "Visual atmosphere depends on typography, spacing, and image selection as much as functionality.",
    ],
  },
  {
    slug: "imizi",
    number: "02",
    title: "IMIZI Training Club",
    category: "Fitness · Website",
    role: "Design & Development",
    year: 2026,
    type: "Independent Concept",
    summary:
      "A bold, multi-page website concept for a fictional Kigali training club, built to make its classes, schedule, and membership options easy to explore.",
    liveUrl: "https://imizi-training-club.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/imizi-training-club",
    rows: [
      "Give a training club a recognizable identity without letting bold visuals obscure schedules, programs, and membership information.",
      "Created a consistent multi-page system using athletic typography, reusable components, clear navigation, and a weekly class timetable.",
      "Balanced high-contrast visuals with responsive readability, keeping membership and trial inquiries within a demonstration website.",
      "React, JavaScript, Vite, React Router, Tailwind CSS.",
      "Bold branding works best when the information underneath remains easy to navigate and understand.",
    ],
  },
  {
    slug: "quad",
    number: "03",
    title: "Quad",
    category: "Digital Product · Web Application",
    role: "Full-stack Development",
    year: 2026,
    type: "Application Project",
    summary:
      "A full-stack student community application bringing posts, polls, and conversations together in one connected interface.",
    liveUrl: "https://joinquad.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/quad",
    rows: [
      "Bring different forms of student interaction into one application while keeping its interface and architecture manageable.",
      "Built a React and TypeScript frontend with authenticated application flows, organized state management, and Socket.IO-based communication.",
      "Coordinated authentication, real-time events, media handling, and persistent data while maintaining clear boundaries between the frontend and backend.",
      "React, TypeScript, Express, MongoDB, Clerk, Socket.IO, Zustand.",
      "As applications grow, clear boundaries between state, data, and features help keep development manageable.",
    ],
  },
];
export const getProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
export function adjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 ? projects[index + 1] : undefined,
  };
}
