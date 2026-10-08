import { useParams } from "react-router";
import { TransitionLink as Link } from "../features/navigation/Transitions";
import { getProject, projects } from "../content/projects";
import { MediaFrame } from "../components/MediaFrame";
import { useReducedMotion } from "../hooks/useReducedMotion";
import NotFound from "./not-found";
export default function ProjectPage() {
  const params = useParams();
  const project = getProject(params.slug);
  const reduced = useReducedMotion();
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className={`case-study case-${project.slug}`}>
      <header className="container case-header">
        <Link className="back-link" to={`/#project-${project.slug}`}>
          ← Back to Selected Work
        </Link>
        <div className="case-kicker eyebrow">
          <span>
            {project.number} / 03 — {project.category}
          </span>
          <span>{project.type}</span>
        </div>
        <h1 tabIndex={-1}>{project.title}</h1>
        <div className="case-intro">
          <p className="lead">{project.summary}</p>
          <div>
            <dl className="case-meta">
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live {project.slug === "quad" ? "Application" : "Website"}{" "}
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>
      <figure className="container case-hero">
        <MediaFrame project={project} hero transition />
        <figcaption>
          <span>{project.cover.caption}</span>
          <span className="eyebrow">{project.number} / Opening frame</span>
        </figcaption>
      </figure>
      <section className="container narrative section-space">
        <p className="eyebrow section-label">01 / The idea</p>
        <div className="narrative-grid">
          <h2>{project.overviewTitle}</h2>
          <div>
            <p className="lead">{project.overview}</p>
            <p className="disclosure">{project.disclosure}</p>
          </div>
        </div>
      </section>
      <figure className="container case-wide">
        <MediaFrame project={project} media={project.gallery[0]} />
        <figcaption>{project.gallery[0].caption}</figcaption>
      </figure>
      <section className="container design-section section-space">
        <p className="eyebrow section-label">02 / Art direction</p>
        <div className="narrative-grid">
          <h2>{project.designTitle}</h2>
          <p className="lead">{project.design}</p>
        </div>
        <div className="design-notes">
          <span>Identity</span>
          <span>Typography</span>
          <span>Hierarchy</span>
          <span>Rhythm</span>
        </div>
      </section>
      <section className="container experience-section section-space">
        <p className="eyebrow section-label">03 / The experience</p>
        <h2>{project.experienceTitle}</h2>
        <div className="feature-list">
          {project.features.map((feature, index) => (
            <div className="feature-row" key={feature.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="container evidence-grid">
        <figure className="desktop-evidence">
          <MediaFrame project={project} media={project.gallery[1]} />
          <figcaption>{project.gallery[1].caption}</figcaption>
        </figure>
        <figure className="mobile-evidence">
          <MediaFrame project={project} media={project.mobile} />
          <figcaption>{project.mobile.caption}</figcaption>
        </figure>
      </div>
      <section className="container engineering-section section-space">
        <p className="eyebrow section-label">04 / Behind the experience</p>
        <div className="narrative-grid">
          <h2>
            Care in the
            <br />
            implementation.
          </h2>
          <div>
            <p className="lead">{project.engineering}</p>
            <ul className="stack-list" aria-label="Implementation technologies">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="text-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the source <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="container case-closing">
        <div className="closing-actions">
          <Link className="text-link" to={`/#project-${project.slug}`}>
            Back to Selected Work <span>←</span>
          </Link>
          <a
            className="text-link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live {project.slug === "quad" ? "Application" : "Website"}{" "}
            <span>↗</span>
          </a>
        </div>
        <Link
          className="next-project"
          to={`/work/${next.slug}`}
          viewTransition={!reduced}
        >
          <span className="eyebrow">Next project / {next.number}</span>
          <span>{next.title}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </article>
  );
}
