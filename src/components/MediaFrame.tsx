import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useProjectTransition } from "../features/navigation/Transitions";
import type { Media, Project } from "../content/projects";
export function MediaFrame({
  project,
  media = project.cover,
  hero = false,
  transition = false,
  className = "",
}: {
  project: Project;
  media?: Media;
  hero?: boolean;
  transition?: boolean;
  className?: string;
}) {
  const transitioning = useProjectTransition(`/work/${project.slug}`);
  const image = useRef<HTMLImageElement>(null);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const failed = failedSource === media.src;
  useEffect(() => {
    // A prerendered image can fail before React attaches its error listener.
    if (image.current?.complete && image.current.naturalWidth === 0)
      setFailedSource(media.src);
  }, [media.src]);
  return (
    <div
      className={`media-frame ${className}`}
      data-project={project.slug}
      style={
        {
          "--atmosphere": project.atmosphere,
          viewTransitionName:
            transition && transitioning
              ? `project-${project.slug}-media`
              : "none",
        } as CSSProperties
      }
    >
      {failed ? (
        <div className="media-fallback">
          <span className="eyebrow">{project.category}</span>
          <strong>{project.title}</strong>
          <p>Explore the live project to see the full experience.</p>
        </div>
      ) : (
        <img
          ref={image}
          src={media.src}
          width={media.width}
          height={media.height}
          alt={media.alt}
          loading={hero ? "eager" : "lazy"}
          fetchPriority={hero ? "high" : "auto"}
          decoding="async"
          onError={() => setFailedSource(media.src)}
        />
      )}
    </div>
  );
}
