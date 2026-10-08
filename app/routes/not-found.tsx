import { Link } from "react-router";
import { site } from "../config/site";
export function meta() {
  return [
    { title: `Page not found | ${site.name}` },
    { name: "robots", content: "noindex" },
  ];
}
export default function NotFound() {
  return (
    <section className="container error-page">
      <p className="eyebrow">404 / Not found</p>
      <h1 tabIndex={-1}>Outside the frame.</h1>
      <p>
        This page isn’t part of the exhibition. There’s plenty to explore back
        at the selected work.
      </p>
      <Link className="text-link" to="/#work">
        Back to selected work <span>→</span>
      </Link>
    </section>
  );
}
