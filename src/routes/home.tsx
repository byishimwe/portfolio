import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site, whatsappUrl, emailUrl } from "../config/site";
import { LivingFrame } from "../features/LivingFrame";
import { useReducedMotion } from "../hooks/useReducedMotion";
const services = [
  [
    "Business Websites",
    "Clear, polished websites that help businesses establish credibility, present their services, and make it easier for customers to connect.",
    "Strategy · Design · Development",
  ],
  [
    "Custom Digital Experiences",
    "Distinctive websites that combine strong visual direction with thoughtful interaction and tailored frontend development.",
    "Art direction · Interaction · Creative development",
  ],
  [
    "Website Redesigns",
    "A new direction for an existing website. Stronger structure, clearer communication, and a more considered experience on every screen.",
    "Structure · Usability · Performance",
  ],
];
export default function Home() {
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  useGSAP(
    () => {
      if (!reduced)
        gsap.fromTo(
          ".hero-line",
          { y: 20 },
          {
            y: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "all",
          },
        );
    },
    { scope: hero, dependencies: [reduced], revertOnUpdate: true },
  );
  return (
    <>
      <section
        className="hero container"
        id="top"
        ref={hero}
        aria-labelledby="hero-heading"
      >
        <div className="hero-meta eyebrow">
          <span>Independent designer & frontend developer</span>
          <span>Based in Rwanda · Working everywhere</span>
        </div>
        <h1 id="hero-heading" tabIndex={-1}>
          <span className="hero-line">Digital experiences</span>
          <span className="hero-line">built to be</span>
          <em className="hero-line">remembered.</em>
        </h1>
        <div className="hero-bottom">
          <a className="text-link explore-link" href="#work">
            Explore Selected Work <span aria-hidden="true">↓</span>
          </a>
          <p>
            I design and develop thoughtful websites for businesses and brands —
            combining strong visual direction, purposeful interaction, and
            reliable frontend execution.
          </p>
        </div>
        <div className="hero-foot eyebrow">
          <span>Design with intention. Build with care.</span>
          <span>Selected work / 2026</span>
        </div>
      </section>
      <section
        id="work"
        className="container work-section"
        aria-labelledby="work-heading"
      >
        <div className="section-top">
          <p className="eyebrow">01 / Selected work</p>
          <span className="eyebrow">An editorial exhibition</span>
        </div>
        <div className="section-intro">
          <h2 id="work-heading">Selected work.</h2>
          <p>
            Three explorations of identity,
            <br />
            interaction, and digital experience.
          </p>
        </div>
        <LivingFrame />
      </section>
      <section
        id="services"
        className="container services-section section-space"
        aria-labelledby="services-heading"
      >
        <p className="eyebrow section-label">02 / Services</p>
        <div className="section-intro">
          <h2 id="services-heading">What I do.</h2>
          <p>
            From essential business websites to
            <br />
            distinctive interactive experiences.
          </p>
        </div>
        <div className="service-list">
          {services.map(([title, description, detail], index) => (
            <article className="service-row" key={title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{title}</h3>
              <div>
                <p>{description}</p>
                <span className="eyebrow service-detail">{detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="container about-section section-space"
        aria-labelledby="about-heading"
      >
        <p className="eyebrow section-label">03 / About</p>
        <div className="about-grid">
          <h2 id="about-heading">
            A little
            <br />
            about me.
          </h2>
          <div>
            <p className="lead">
              I’m {site.name}, an independent designer and frontend developer
              based in Rwanda.
            </p>
            <p>
              I enjoy bringing together visual design and engineering to create
              websites that feel thoughtful, purposeful, and carefully built.
              For me, a good website connects a distinct identity with the
              things people actually need to do.
            </p>
            <p>
              From the first conversation to the final detail, I approach the
              work with curiosity, clear communication, and care for how it
              looks and how it works.
            </p>
            <div className="about-notes eyebrow">
              <span>
                Visual design
                <br />
                Frontend development
                <br />
                Purposeful interaction
              </span>
              <span>
                Independent practice
                <br />
                Rwanda
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="container contact-section section-space"
        aria-labelledby="contact-heading"
      >
        <p className="eyebrow section-label">
          04 / A conversation is a good beginning
        </p>
        <h2 id="contact-heading">
          Have something
          <br />
          worth building?
        </h2>
        <div className="contact-bottom">
          <p>
            Have a website in mind, or an existing one that needs a new
            direction? I’d love to hear about it.
          </p>
          <div className="contact-actions">
            <a
              className="contact-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Project <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href={emailUrl}>
              Send an Email <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <a className="contact-email" href={emailUrl}>
          {site.email}
        </a>
      </section>
    </>
  );
}
