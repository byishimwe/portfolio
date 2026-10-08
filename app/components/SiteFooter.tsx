import { Link } from "react-router";
import { site, emailUrl } from "../config/site";
export function SiteFooter() {
  return (
    <footer className="container site-footer">
      <div>
        <Link to="/">{site.name}</Link>
        <span>Independent practice · {site.location}</span>
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/byishimwe"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a href={emailUrl}>Email ↗</a>
        <Link to="/#top">Back to top ↑</Link>
      </div>
      <p>© {site.year} · Thoughtfully designed. Carefully built.</p>
    </footer>
  );
}
