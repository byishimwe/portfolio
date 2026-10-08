import dimensions from "./image-dimensions.json";
export type ProjectSlug = "cafe-bliss" | "imizi" | "quad";
export type Media = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};
export type Project = {
  slug: ProjectSlug;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  type: string;
  role: string;
  year: string;
  summary: string;
  liveUrl: string;
  repositoryUrl: string;
  atmosphere: string;
  cover: Media;
  gallery: Media[];
  mobile: Media;
  overviewTitle: string;
  overview: string;
  designTitle: string;
  design: string;
  experienceTitle: string;
  features: { title: string; description: string }[];
  engineering: string;
  stack: string[];
  disclosure: string;
};
const media = (
  name: keyof typeof dimensions,
  alt: string,
  caption: string,
): Media => ({ src: `/${name}.webp`, ...dimensions[name], alt, caption });
export const projects: Project[] = [
  {
    slug: "cafe-bliss",
    number: "01",
    title: "Café Bliss",
    shortTitle: "Café Bliss",
    category: "Hospitality",
    type: "Independent concept website",
    role: "Design & Development",
    year: "2026",
    atmosphere: "#E8DED1",
    summary:
      "A warmer digital welcome. A neighborhood café concept built around atmosphere, menu discovery, and the pleasure of slowing down.",
    liveUrl: "https://cafe-bliss-rw.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/cafe-bliss",
    cover: media(
      "cafe-desktop",
      "Café Bliss homepage with editorial coffee typography and a sunlit café table",
      "The opening invitation — warm typography, natural light, and a clear path to the menu.",
    ),
    gallery: [
      media(
        "cafe-menu",
        "Café Bliss menu with category filters and photographic food cards",
        "Menu discovery — category filters keep a varied menu easy to explore.",
      ),
      media(
        "cafe-reservation",
        "Café Bliss reservation demonstration with date, time, and guest fields",
        "A reservation-oriented interface with clear labels and honest demo feedback.",
      ),
    ],
    mobile: media(
      "cafe-mobile",
      "Café Bliss homepage captured at a mobile viewport",
      "A deliberate mobile composition, captured from the live website.",
    ),
    overviewTitle: "A warmer kind of digital welcome.",
    overview:
      "Café Bliss is a fictional neighborhood café, created as an independent design and development concept. The intention was to bring the feeling of a familiar corner into a website: welcoming, unhurried, and easy to navigate. Visitors can discover the menu, understand the café’s story, and explore a reservation flow without losing that sense of place.",
    designTitle: "Atmosphere, before decoration.",
    design:
      "Warm neutrals give the photography room to breathe. Large serif typography sets a relaxed editorial pace, while small labels and fine rules keep the information organized. The images do more than fill space: they establish the light, texture, and everyday rituals of the café.",
    experienceTitle: "Make discovery feel effortless.",
    features: [
      {
        title: "A menu worth exploring",
        description:
          "Category filters let visitors move between coffee, tea, breakfast, and bakery items. A fuller menu opens in a dedicated interface without breaking the page’s flow.",
      },
      {
        title: "A considered reservation flow",
        description:
          "Labeled fields, date-dependent time choices, and guest selection make the frontend demonstration understandable. Requests remain in the page session; no real table is booked.",
      },
      {
        title: "One continuous story",
        description:
          "Native section navigation connects the menu, brand story, events, and visit information. The same hierarchy adapts to a narrow screen.",
      },
    ],
    engineering:
      "A lightweight HTML, CSS, and JavaScript implementation keeps the experience focused. Native anchors support navigation, while the interactive menu and demonstration forms enhance the page. Clear validation and explicit demo messages separate useful interface behavior from real business operations.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive design"],
    disclosure:
      "Independent fictional concept. Reservations, contact messages, and newsletter signup are frontend demonstrations; they do not create bookings or deliver messages.",
  },
  {
    slug: "imizi",
    number: "02",
    title: "IMIZI Training Club",
    shortTitle: "IMIZI",
    category: "Fitness",
    type: "Independent concept website",
    role: "Design & Development",
    year: "2026",
    atmosphere: "#252624",
    summary:
      "Strength, translated into structure. A complete digital identity for a fictional training club rooted in discipline and consistency.",
    liveUrl: "https://imizi-training-club.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/imizi-training-club",
    cover: media(
      "imizi-desktop",
      "IMIZI Training Club homepage with strength typography, dark surfaces, and red accents",
      "Strength starts at the roots — the brand’s character carried into the first viewport.",
    ),
    gallery: [
      media(
        "imizi-classes",
        "IMIZI training disciplines with class photography and details",
        "Training disciplines — clear structure for comparing sessions.",
      ),
      media(
        "imizi-membership",
        "IMIZI membership plans and commitment options",
        "Membership presentation — an organized comparison of fictional plans.",
      ),
    ],
    mobile: media(
      "imizi-mobile",
      "IMIZI homepage at a mobile viewport",
      "The same brand strength at a smaller scale.",
    ),
    overviewTitle: "Identity built on strength.",
    overview:
      "IMIZI is a fictional strength and conditioning club concept set in Kigali. The project explores how a service business can communicate a clear standard across an entire website. Beyond a powerful first impression, the experience helps visitors understand the training, explore the coaches, compare memberships, and find their next step.",
    designTitle: "A grounded visual language.",
    design:
      "Condensed display typography, deep charcoal surfaces, and an iron-red accent give the brand a firm, recognizable voice. Photography brings human effort into the composition. A consistent grid connects the bold opening with the practical information that follows.",
    experienceTitle: "From first impression to next step.",
    features: [
      {
        title: "Training made clear",
        description:
          "Distinct class disciplines pair descriptions with session information. A day-based timetable gives visitors a practical way to explore the fictional training week.",
      },
      {
        title: "A complete service presence",
        description:
          "Separate pages for the facility, classes, coaches, memberships, and visit information give each subject space and keep the primary navigation direct.",
      },
      {
        title: "A clear inquiry path",
        description:
          "Trial-oriented actions lead into the visit interface. Membership and contact details belong to the concept; they do not represent an operating gym.",
      },
    ],
    engineering:
      "React and React Router organize the multi-page experience around shared navigation and reusable page structures. Responsive layouts preserve the club’s contrast and hierarchy on mobile. The class and membership interfaces make a larger set of business information easy to browse without adding unnecessary interaction.",
    stack: ["React", "React Router", "Tailwind CSS", "Responsive design"],
    disclosure:
      "Independent fictional concept. Club details, coaches, testimonials, memberships, and trial inquiries illustrate the website experience and are not real business operations.",
  },
  {
    slug: "quad",
    number: "03",
    title: "Quad",
    shortTitle: "Quad",
    category: "Digital product",
    type: "Functional web application",
    role: "Full-stack Development",
    year: "2026",
    atmosphere: "#E1E7E8",
    summary:
      "A shared space for student life. Content, conversations, and community brought together in a connected digital product.",
    liveUrl: "https://joinquad.vercel.app",
    repositoryUrl: "https://github.com/byishimwe/quad",
    cover: media(
      "quad-desktop",
      "Quad’s actual feed components rendered with safe demonstration content",
      "Actual Quad interface components, captured in an isolated preview with safe demo content.",
    ),
    gallery: [
      media(
        "quad-polls",
        "Quad poll interface rendered with clearly labeled demonstration content",
        "Poll interaction — real interface components with demonstration data.",
      ),
      media(
        "quad-light",
        "Quad’s feed interface in its light theme",
        "A shared interface system across light and dark themes.",
      ),
    ],
    mobile: media(
      "quad-mobile",
      "Quad actual interface components at a mobile viewport",
      "Responsive product components with safe demo content.",
    ),
    overviewTitle: "A more connected student experience.",
    overview:
      "Quad is a full-stack student community product built for campus conversation and entertainment. Posts, stories, polls, profiles, and chat form a connected experience. The work brings together product interface design and the engineering needed to support authenticated, media-rich social interaction.",
    designTitle: "Structure makes room for conversation.",
    design:
      "A steady navigation system creates orientation around a changing feed. Reusable content patterns make posts and polls familiar, while a restrained blue accent identifies actions and selected states. Light and dark themes preserve the same product hierarchy.",
    experienceTitle: "Different ways to take part.",
    features: [
      {
        title: "Content and community",
        description:
          "The source implements media posts, comments, reactions, bookmarks, stories, and polls. These share a responsive interface while preserving their different content needs.",
      },
      {
        title: "Connected identity",
        description:
          "Clerk handles authentication. User profiles and social relationships connect participation to a persistent identity rather than a collection of disconnected screens.",
      },
      {
        title: "Real-time interaction",
        description:
          "Socket.IO supports chat and notification events. The frontend communicates with an authenticated Express API; MongoDB stores the social data.",
      },
    ],
    engineering:
      "The React and TypeScript frontend uses Zustand for application state, Axios for API requests, and Socket.IO for real-time events. The Express and TypeScript backend uses MongoDB, Clerk authentication, Zod validation, and Cloudinary media storage. These are source-verified architecture choices, not claims of production scale or measured adoption.",
    stack: [
      "React & TypeScript",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Clerk",
      "Zustand",
    ],
    disclosure:
      "Portfolio product project. Screens show actual source components in an isolated local preview with synthetic demo data, not live users or a captured authenticated production session. No adoption or traffic metrics are claimed.",
  },
];
export const getProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
