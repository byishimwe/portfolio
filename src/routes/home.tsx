import { Link } from "react-router";
import { projects } from "../content/projects";
import { AssetSlot } from "../components/AssetSlot";
import { emailUrl, whatsappUrl } from "../config/site";
import { useQuietMotion } from "../hooks/useQuietMotion";
const services = [
  [
    "Business Websites",
    "Clear, responsive websites that give businesses a credible home online and make it easier for customers to get in touch.",
  ],
  [
    "Custom Digital Experiences",
    "Tailored websites that bring visual storytelling, useful interactions, and frontend development together.",
  ],
  [
    "Website Redesigns",
    "A fresh direction for existing websites, with stronger structure, clearer communication, and easier navigation.",
  ],
];
function ServiceIcon({ index }: { index: number }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      {index === 0 ? (
        <>
          <rect x="3" y="4" width="26" height="19" rx="1" />
          <path d="m11 29 5-6 5 6M9 29h14" />
        </>
      ) : index === 1 ? (
        <>
          <path d="m16 3 13 8-13 8-13-8 13-8Z" />
          <path d="m5 18-2 2 13 8 13-8-3-2" />
        </>
      ) : (
        <>
          <path d="m5 27 2-8L23 3a3 3 0 0 1 5 5L12 24l-7 3Z" />
          <path d="m20 6 6 6M7 19l5 5" />
        </>
      )}
    </svg>
  );
}
export default function Home() {
  const scope = useQuietMotion("home");
  return (
    <div ref={scope} className="container homepage" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-label">Designer & Frontend Developer</p>
          <h1 id="hero-title" tabIndex={-1}>
            <span className="hero-line">Digital experiences</span>
            <span className="hero-line">built to be</span>
            <em className="hero-line">remembered.</em>
          </h1>
          <div className="hero-support">
            <p>
              I design and develop websites that help businesses communicate
              clearly and stand out — combining considered visual design, useful
              interactions, and reliable frontend development.
            </p>
            <Link className="text-link" to="/#work">
              Explore my work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <AssetSlot name="hero" className="hero-visual" eager />
      </section>
      <section
        id="work"
        className="work section"
        aria-labelledby="work-title"
        data-reveal
      >
        <div className="section-bar" data-reveal-item>
          <h2 id="work-title" className="eyebrow">
            Selected Work
          </h2>
          <p className="eyebrow">Three projects · 2026</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link
              key={project.slug}
              id={`project-${project.slug}`}
              to={`/work/${project.slug}`}
              className="project-row"
              data-reveal-item
              aria-label={`${project.number} — ${project.title}, ${project.category}. View project`}
            >
              <span className="project-number">{project.number}</span>
              <div className="project-row-copy">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
              <AssetSlot name={project.slug} className="project-preview" />
            </Link>
          ))}
        </div>
      </section>
      <section
        id="services"
        className="services section"
        aria-labelledby="services-title"
      >
        <div className="section-introduction" data-reveal>
          <p className="eyebrow">What I Do</p>
          <h2 id="services-title">
            Three ways to help bring
            <br className="desktop-break" /> your ideas to life.
          </h2>
          <p>
            From a first business website to a more involved digital experience,
            I shape the design and build around what your project needs.
          </p>
        </div>
        <div className="service-grid" data-reveal>
          {services.map(([title, copy], index) => (
            <article className="service" key={title} data-reveal-item>
              <ServiceIcon index={index} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="about section"
        aria-labelledby="about-title"
        data-reveal
      >
        <div className="about-copy" data-reveal-item>
          <p className="eyebrow">About Me</p>
          <h2 id="about-title">
            A designer and developer who cares about the details.
          </h2>
          <p>
            I'm Prince Arnaud Ishimwe, an independent designer and frontend
            developer based in Rwanda. I bring visual design and code together
            to build websites with care — from the first impression to the
            smallest interaction.
          </p>
        </div>
        <AssetSlot name="portrait" className="portrait" />
      </section>
      <section
        id="contact"
        className="contact section"
        aria-labelledby="contact-title"
        data-reveal
      >
        <div className="contact-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">
            Have something
            <br /> worth building?
          </h2>
        </div>
        <div className="contact-body">
          <p>
            Have a website in mind, or an existing one that needs a new
            direction? I’d love to hear what you’re working on.
          </p>
          <div className="contact-actions">
            <a
              className="button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Project <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href={emailUrl}>
              or send an email <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
