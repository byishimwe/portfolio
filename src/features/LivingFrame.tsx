import { useEffect, useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { useLocation } from "react-router";
import {
  TransitionLink as Link,
  useProjectTransition,
} from "./navigation/Transitions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, type Project } from "../content/projects";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { MediaFrame } from "../components/MediaFrame";

const desktopQuery = "(min-width: 1100px) and (min-height: 700px)";
export function LivingFrame() {
  const [enhanced, setEnhanced] = useState(false);
  const [active, setActive] = useState(projects[0]);
  const [displayed, setDisplayed] = useState(projects[0]);
  const [outgoing, setOutgoing] = useState<Project | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const incoming = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const generation = useRef(0);
  const reduced = useReducedMotion();
  const location = useLocation();
  const transitioning = useProjectTransition(`/work/${displayed.slug}`);

  useEffect(() => {
    const media = matchMedia(desktopQuery);
    const update = () => setEnhanced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enhanced) return;
    const chapters = [
      ...root.current!.querySelectorAll<HTMLElement>(".project-chapter"),
    ];
    let frame = 0;
    const synchronize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const readingLine = Math.min(window.innerHeight * 0.46, 420);
        const distances = chapters.map((chapter) =>
          Math.abs(
            chapter.getBoundingClientRect().top +
              Math.min(chapter.offsetHeight / 2, 200) -
              readingLine,
          ),
        );
        setActive(projects[distances.indexOf(Math.min(...distances))]);
      });
    };
    gsap.registerPlugin(ScrollTrigger);
    const controller = ScrollTrigger.create({
      trigger: root.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: synchronize,
      onRefresh: synchronize,
    });
    window.addEventListener("resize", synchronize);
    window.addEventListener("hashchange", synchronize);
    synchronize();
    return () => {
      controller.kill();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", synchronize);
      window.removeEventListener("hashchange", synchronize);
    };
  }, [enhanced]);

  useEffect(() => {
    if (!enhanced || !location.hash.startsWith("#project-")) return;
    // Run after Router's scroll restoration and the enhanced layout commit.
    // Native same-document hash navigation can otherwise restore an older
    // position associated with the previous history entry's router key.
    const target = [
      ...root.current!.querySelectorAll<HTMLElement>(".project-chapter"),
    ].find((chapter) => `#${chapter.id}` === location.hash);
    const frame = requestAnimationFrame(() =>
      target?.scrollIntoView({ block: "start", behavior: "instant" }),
    );
    return () => cancelAnimationFrame(frame);
  }, [enhanced, location.hash]);

  useEffect(() => {
    const token = ++generation.current;
    if (!enhanced || active.slug === displayed.slug) return;
    const image = new Image();
    image.src = active.cover.src;
    image
      .decode()
      .catch(() => undefined)
      .then(() => {
        if (token !== generation.current) return;
        timeline.current?.kill();
        setOutgoing(displayed);
        setDisplayed(active);
      });
  }, [active, displayed, enhanced]);

  useGSAP(
    () => {
      timeline.current?.kill();
      if (!outgoing || reduced || transitioning) {
        gsap.set(incoming.current, { clearProps: "all" });
        return;
      }
      timeline.current = gsap.timeline({ onComplete: () => setOutgoing(null) });
      timeline.current.fromTo(
        incoming.current,
        { clipPath: "inset(100% 0 0 0)", scale: 1.025 },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          duration: 0.55,
          ease: "power2.inOut",
          clearProps: "all",
        },
      );
    },
    {
      scope: root,
      dependencies: [displayed.slug, reduced, transitioning],
      revertOnUpdate: true,
    },
  );

  const settle = (project: Project) => {
    ++generation.current;
    timeline.current?.kill();
    if (incoming.current) gsap.set(incoming.current, { clearProps: "all" });
    flushSync(() => {
      setActive(project);
      setDisplayed(project);
      setOutgoing(null);
    });
  };

  return (
    <div ref={root} className={`living-frame ${enhanced ? "enhanced" : ""}`}>
      <div className="stage-column" aria-hidden={!enhanced}>
        <nav className="project-index" aria-label="Project index">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`#project-${project.slug}`}
              aria-current={active.slug === project.slug ? "true" : undefined}
            >
              <span>{project.number}</span> {project.shortTitle}
            </a>
          ))}
        </nav>
        <div
          className="stage"
          data-active={displayed.slug}
          style={
            {
              "--atmosphere": displayed.atmosphere,
              viewTransitionName: transitioning
                ? `project-${displayed.slug}-media`
                : "none",
            } as CSSProperties
          }
        >
          {outgoing && (
            <div className="stage-layer" aria-hidden="true">
              <img src={outgoing.cover.src} width={1440} height={900} alt="" />
            </div>
          )}
          <div ref={incoming} className="stage-layer">
            <MediaFrame key={displayed.slug} project={displayed} hero />
          </div>
          <Link
            className="stage-hit"
            to={`/work/${displayed.slug}`}
            viewTransition={!reduced}
            onClick={() => settle(displayed)}
            aria-label={`Explore ${displayed.title}`}
            tabIndex={enhanced ? 0 : -1}
          />
        </div>
        <div className="stage-caption">
          <span>The Living Frame</span>
          <span>
            {displayed.number} / 03 — {displayed.shortTitle}
          </span>
        </div>
      </div>
      <div className="project-rail">
        {projects.map((project) => (
          <article
            id={`project-${project.slug}`}
            className="project-chapter"
            key={project.slug}
            aria-labelledby={`title-${project.slug}`}
          >
            <p className="eyebrow chapter-label">
              <span>{project.number} / 03</span>
              <span>
                {project.category} ·{" "}
                {project.slug === "quad"
                  ? "Web application"
                  : "Concept website"}
              </span>
            </p>
            <div className="chapter-media">
              <MediaFrame project={project} transition={!enhanced} />
            </div>
            <h3 id={`title-${project.slug}`}>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <p className="eyebrow project-role">
              {project.role} · {project.year}
            </p>
            <div className="project-actions">
              <Link
                className="text-link"
                to={`/work/${project.slug}`}
                viewTransition={!reduced}
                onClick={() => settle(project)}
              >
                Explore Project <span aria-hidden="true">→</span>
              </Link>
              <a
                className="live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.slug === "quad"
                  ? "View Live Application"
                  : "View Live Website"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
