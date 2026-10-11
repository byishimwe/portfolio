import { useState } from "react";
import { Link } from "react-router";
import { projects } from "../content/projects";
import { AssetSlot } from "../components/AssetSlot";
import { emailUrl, gmailUrl, site, whatsappUrl } from "../config/site";
import { useQuietMotion } from "../hooks/useQuietMotion";
const services = [
  [
    "Business Websites",
    "A clear home for your business online, with the pages, information, and contact options your customers need.",
  ],
  [
    "Custom Digital Experiences",
    "Distinctive websites with purposeful motion and interaction, designed around your brand and the story you want to tell.",
  ],
  [
    "Website Redesigns",
    "A better experience for an existing website: clearer content, easier navigation, and a layout that works across devices.",
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
  const [copyStatus, setCopyStatus] = useState("");
  const [copying, setCopying] = useState(false);
  async function copyEmail() {
    setCopying(true);
    setCopyStatus("");
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus(
        "Couldn’t copy automatically. Select the email address above to copy it.",
      );
    } finally {
      setCopying(false);
    }
  }
  const scope = useQuietMotion("home");
  return (
    <div ref={scope} className="container homepage" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-label">Designer & Frontend Developer</p>
          <h1 id="hero-title" tabIndex={-1}>
            <span className="hero-line">Websites built</span>
            <span className="hero-line">around your</span>
            <em className="hero-line">business.</em>
          </h1>
          <div className="hero-support">
            <p>
              I’m Prince, an independent designer and frontend developer based
              in Rwanda. I build websites that express your brand, explain what
              you offer, and make it easy for customers to get in touch.
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
            A new website.
            <br /> Or a better one.
          </h2>
          <p>
            From your first website to a custom brand experience, I handle the
            design and frontend development around your goals, content, and
            budget.
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
            Design and development, with the same attention to detail.
          </h2>
          <p>
            I’m Prince Arnaud Ishimwe. I work across visual design and frontend
            development, connecting how a website looks with how it feels to
            use. I care about clear structure, thoughtful typography, and
            interactions that feel natural, from the first impression to the
            final detail.
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
            Let’s talk about
            <br /> your website.
          </h2>
        </div>
        <div className="contact-body">
          <p>
            Need a new website or a fresh direction for your current one? Tell
            me about your business, what you need, and when you’d like to
            launch. We can work out the next step together.
          </p>
          <div className="contact-actions">
            <a
              className="button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <span aria-hidden="true">→</span>
            </a>
            <a
              className="text-link"
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email via Gmail <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-email">
            <span className="email-address">{site.email}</span>
            <div className="email-options">
              <button
                type="button"
                className="email-option"
                onClick={copyEmail}
                disabled={copying}
              >
                {copying ? "Copying…" : "Copy email address"}
              </button>
              <a className="email-option" href={emailUrl}>
                Use email app <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p
              className="copy-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {copyStatus}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
