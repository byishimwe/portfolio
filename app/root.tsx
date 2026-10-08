import { useEffect, useRef } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigationType,
} from "react-router";
import type { Route } from "./+types/root";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { site } from "./config/site";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/400-italic.css";
import "./styles/global.css";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F4F1EB" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previous = useRef(location.pathname);
  useEffect(() => {
    if (
      previous.current !== location.pathname &&
      navigationType !== "POP" &&
      !location.hash
    ) {
      document.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
    }
    previous.current = location.pathname;
  }, [location.pathname, location.hash, navigationType]);
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const missing = isRouteErrorResponse(error) && error.status === 404;
  return (
    <>
      <SiteHeader />
      <main id="main" className="container error-page">
        <p className="eyebrow">
          {missing ? "404 / NOT FOUND" : "A SMALL INTERRUPTION"}
        </p>
        <h1 tabIndex={-1}>
          {missing ? "Outside the frame." : "Let’s find our way back."}
        </h1>
        <p>
          {missing
            ? "This page isn’t part of the exhibition."
            : "The page couldn’t be loaded. Try returning to the selected work."}
        </p>
        <a className="text-link" href="/#work">
          Back to selected work <span>→</span>
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
export const handle = { name: site.name };
