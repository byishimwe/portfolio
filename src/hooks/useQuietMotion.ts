import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "./useReducedMotion";
gsap.registerPlugin(useGSAP);
export function useQuietMotion(page: "home" | "project") {
  const scope = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useGSAP(
    (_context, contextSafe) => {
      if (reduced || !scope.current) return;
      const select = gsap.utils.selector(scope.current);
      if (page === "home")
        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .from(
            select(".hero-label"),
            { autoAlpha: 0, y: 12, duration: 0.45 },
            0,
          )
          .from(
            select(".hero-line"),
            { autoAlpha: 0, y: 16, duration: 0.65, stagger: 0.08 },
            0.08,
          )
          .from(
            select(".hero-support"),
            { autoAlpha: 0, y: 10, duration: 0.45 },
            0.32,
          )
          .from(
            select(".hero-visual"),
            {
              autoAlpha: 0,
              y: 10,
              clipPath: "inset(0 0 8% 0)",
              duration: 0.85,
              clearProps: "all",
            },
            0.16,
          );
      else
        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .from(select(".case-intro"), { autoAlpha: 0, y: 10, duration: 0.4 })
          .from(
            select(".case-image"),
            { autoAlpha: 0, y: 8, duration: 0.55, clearProps: "all" },
            0.08,
          );
      // No pinning or scroll controller. Each group reveals once without pre-hiding content.
      if (!("IntersectionObserver" in window)) return;
      const groups = select("[data-reveal]") as HTMLElement[];
      const observer = new IntersectionObserver(
        contextSafe!((entries: IntersectionObserverEntry[]) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              const targets =
                entry.target.querySelectorAll("[data-reveal-item]");
              gsap.from(targets.length ? targets : entry.target, {
                autoAlpha: 0,
                y: page === "home" ? 12 : 8,
                duration: page === "home" ? 0.42 : 0.3,
                stagger: 0.06,
                ease: "power2.out",
                clearProps: "all",
              });
              observer.unobserve(entry.target);
            }
        }),
        { threshold: 0.08 },
      );
      groups.forEach((group) => observer.observe(group));
      return () => observer.disconnect();
    },
    { scope, dependencies: [reduced, page], revertOnUpdate: true },
  );
  return scope;
}
