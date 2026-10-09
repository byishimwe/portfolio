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
      "A warm, inviting website for a fictional neighborhood café, designed around atmosphere, menu discovery, and the pleasure of slowing down.",
    liveUrl: "https://cafe-bliss-rw.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/Cafe-Bliss",
    rows: [
      "Translate the warmth of a neighborhood café into a digital experience that's welcoming, clear, and easy to explore.",
      "Combined editorial typography and warm imagery with intuitive navigation, menu filtering, and a carefully structured reservation interface.",
      "Kept the project lightweight and entirely frontend-based, with accessible interactions and clearly identified demonstration forms.",
      "HTML5, CSS3, JavaScript.",
      "Strong atmosphere comes from deliberate typography, imagery, and spacing—not from adding unnecessary complexity.",
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
      "A bold multi-page website concept for a fictional Kigali training club, combining a distinctive athletic identity with clear, practical information.",
    liveUrl: "https://imizi-training-club.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/imizi-training-club",
    rows: [
      "Create a distinctive digital identity for a fictional training club while keeping classes, schedules, and memberships easy to understand.",
      "Built a consistent multi-page experience around strong typography, clear navigation, reusable components, and a structured weekly timetable.",
      "Balanced a bold visual identity with responsive usability, while keeping memberships and trial inquiries clearly within the concept's demonstration scope.",
      "React, JavaScript, Vite, React Router, Tailwind CSS.",
      "A memorable identity is most effective when it's supported by clear information architecture and practical interactions.",
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
      "A full-stack student community platform bringing posts, conversations, and shared campus experiences into one connected application.",
    liveUrl: "https://joinquad.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/quad",
    rows: [
      "Bring different forms of student interaction into one coherent application without losing clarity as the product grows.",
      "Built a React and TypeScript frontend with authenticated APIs, structured application state, and Socket.IO-powered communication.",
      "Coordinated authentication, real-time events, media handling, and persistent data while maintaining clear boundaries between the frontend and backend.",
      "React, TypeScript, Express, MongoDB, Clerk, Socket.IO, Zustand.",
      "Complex applications become easier to evolve when state, data flow, and domain responsibilities are defined clearly.",
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
