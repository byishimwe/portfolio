import { Link, useParams } from "react-router";
import { getProject, adjacentProjects, rowLabels } from "../content/projects";
import { AssetSlot } from "../components/AssetSlot";
import { useQuietMotion } from "../hooks/useQuietMotion";
import NotFound from "./not-found";
export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const scope = useQuietMotion("project");
  if (!project) return <NotFound />;
  const { previous, next } = adjacentProjects(project.slug);
  return (
    <div ref={scope} className="container case-study">
      <Link className="back-link" to={`/#project-${project.slug}`}>
        <span aria-hidden="true">←</span> Back to Work
      </Link>
      <article>
        <header className="case-intro">
          <p className="eyebrow">
            {project.number} / 03{" "}
            <span className="case-category">{project.category}</span>
          </p>
          <h1 tabIndex={-1}>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <dl className="case-metadata">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
          </dl>
        </header>
        <AssetSlot name={project.slug} className="case-image" complete eager />
        <div className="case-actions">
          <a
            className="button"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.slug === "quad"
              ? "Visit Live Application"
              : "Visit Live Site"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="plain-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository <span aria-hidden="true">↗</span>
          </a>
        </div>
        <dl className="case-rows" data-reveal>
          {rowLabels.map((label, index) => (
            <div className="case-row" key={label}>
              <dt>
                <span className="row-number">0{index + 1}</span>
                <span>{label}</span>
              </dt>
              <dd>{project.rows[index]}</dd>
            </div>
          ))}
        </dl>
      </article>
      <nav className="project-pagination" aria-label="Project navigation">
        <Link to={previous ? `/work/${previous.slug}` : "/#work"}>
          <span>
            <span aria-hidden="true">←</span>{" "}
            {previous ? "Previous Project" : "Back to Work"}
          </span>
          {previous && <small>{previous.title}</small>}
        </Link>
        <Link to={next ? `/work/${next.slug}` : "/#work"}>
          <span>
            {next ? "Next Project" : "Back to Work"}{" "}
            <span aria-hidden="true">→</span>
          </span>
          {next && <small>{next.title}</small>}
        </Link>
      </nav>
    </div>
  );
}
