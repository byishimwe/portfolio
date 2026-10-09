import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { site } from "../config/site";
import { ThemeToggle } from "../features/theme/ThemeProvider";
const sections = ["Work", "Services", "About", "Contact"];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !navigation.current?.contains(event.target as Node) &&
        !button.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    const focusOutside = (event: FocusEvent) => {
      if (
        !navigation.current?.contains(event.target as Node) &&
        !button.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("pointerdown", outside);
    window.addEventListener("focusin", focusOutside);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("pointerdown", outside);
      window.removeEventListener("focusin", focusOutside);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" aria-label={`${site.name} — home`}>
          {site.name}
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {sections.map((section) => (
            <Link key={section} to={`/#${section.toLowerCase()}`}>
              {section}
            </Link>
          ))}
        </nav>
        <div className="header-controls">
          <ThemeToggle />
          <button
            ref={button}
            className="icon-button menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {open ? (
                <path d="m5 5 14 14M19 5 5 19" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        ref={navigation}
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {sections.map((section) => (
          <Link
            key={section}
            to={`/#${section.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {section}
          </Link>
        ))}
      </nav>
    </header>
  );
}
