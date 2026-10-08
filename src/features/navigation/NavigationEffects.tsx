import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

const storageKey = "living-frame-scroll";
export function NavigationEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(location.pathname);
  const positions = useRef<Record<string, [number, number]>>({});
  const latest = useRef<[number, number]>([window.scrollX, window.scrollY]);
  const initialized = useRef(false);

  useLayoutEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      try {
        const stored = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
        if (stored && typeof stored === "object" && !Array.isArray(stored))
          positions.current = stored;
      } catch {
        /* optional storage */
      }
    }
    const oldRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";
    const update = () => {
      latest.current = [window.scrollX, window.scrollY];
    };
    const persist = () => {
      positions.current[
        `${location.pathname}${location.search}:${location.key}`
      ] = latest.current;
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(positions.current));
      } catch {
        /* optional storage */
      }
    };
    let anchorId = location.hash.slice(1);
    try {
      anchorId = decodeURIComponent(anchorId);
    } catch {
      /* malformed hashes still permit navigation */
    }
    const anchor = location.hash ? document.getElementById(anchorId) : null;
    const saved =
      positions.current[
        `${location.pathname}${location.search}:${location.key}`
      ];
    if (anchor) anchor.scrollIntoView({ block: "start" });
    else if (navigationType === "POP" && saved)
      window.scrollTo({ left: saved[0], top: saved[1], behavior: "instant" });
    else if (previousPath.current !== location.pathname || !location.hash)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("pagehide", persist);
    return () => {
      persist();
      history.scrollRestoration = oldRestoration;
      window.removeEventListener("scroll", update);
      window.removeEventListener("pagehide", persist);
    };
  }, [
    location.key,
    location.pathname,
    location.search,
    location.hash,
    navigationType,
  ]);

  useEffect(() => {
    if (
      previousPath.current !== location.pathname &&
      navigationType !== "POP" &&
      !location.hash
    )
      document.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
    previousPath.current = location.pathname;
  }, [location.pathname, location.hash, navigationType]);
  return null;
}
