import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { site } from "../config/site";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const key = `${location.pathname}${location.hash}`;
  useEffect(() => {
    setOpen(false);
  }, [key]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="wordmark"
          to="/"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/#work">Work</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#about">About</Link>
          <Link className="header-cta" to="/#contact">
            Start a Project <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <button
          ref={button}
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </div>
      {open && (
        <nav
          key={key}
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
        >
          {["work", "services", "about", "contact"].map((section) => (
            <Link
              key={section}
              to={`/#${section}`}
              onClick={() => setOpen(false)}
            >
              {section === "contact"
                ? "Start a Project ↗"
                : section[0].toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
