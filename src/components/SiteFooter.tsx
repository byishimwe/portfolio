import { site, emailUrl } from "../config/site";
export function SiteFooter() {
  return (
    <footer className="container site-footer">
      <p>
        © {site.year} {site.name}
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/byishimwe"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href={emailUrl}>Email</a>
      </div>
    </footer>
  );
}
