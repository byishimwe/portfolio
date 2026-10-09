import { Link } from "react-router";
export default function NotFound() {
  return (
    <section className="container error-page">
      <p className="eyebrow">404 / Not found</p>
      <h1 tabIndex={-1}>Page not found.</h1>
      <p>There’s plenty to explore back at the selected work.</p>
      <Link className="text-link" to="/#work">
        Back to Work <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
