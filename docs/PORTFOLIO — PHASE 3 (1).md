# **PORTFOLIO — PHASE 3**

## **Technical Architecture, Rendering Strategy & Codex Implementation Specification**

**Version:** 1.1 — Revised and Expanded  
**Date:** October 8, 2026  
**Project:** Personal Portfolio — The Living Frame  
**Implementation agent:** Codex  
**Launch target:** Complete public launch — October 8, 2026  
**Status:** Technical implementation specification ready for Codex  
**Document role:** Authoritative engineering, implementation, testing, and deployment specification  
**Dependencies:** Phase 0 v1.1; Phase 1 v1.1; Phase 2 v1.1

---

# **00 — Master Instructions for Codex**

You are the lead frontend engineer and implementation agent for a premium personal portfolio.

Your responsibility is to build the complete website from scratch, faithfully implement the supplied design specifications, acquire or prepare genuine project assets, test actual browser behavior, and deliver a production-ready deployment when authorized.

**This is not a generic developer portfolio.**

The project has an established business purpose, information architecture, visual identity, and signature interaction.

Read all four phase documents before implementation.

## **00.1 Mission**

Build a sophisticated, responsive personal portfolio featuring:

1. Café Bliss  
2. IMIZI Training Club  
3. Quad

The defining experience is **The Living Frame**.

It is an architectural-editorial project gallery whose imagery and atmosphere transform between projects, and whose selected project media provide spatial continuity into individual case-study pages.

The complete implementation must serve potential business clients while demonstrating exceptional frontend craft.

## **00.2 Required deliverables**

The finished product includes:

* Complete homepage  
* Premium typographic hero  
* Full Living Frame gallery  
* Three authentic project presentations  
* Three complete project case studies  
* Responsive header and navigation  
* Project index  
* Atmospheric transitions  
* Shared-element case-study navigation  
* Reliable navigation fallbacks  
* Services, About, Contact, and Footer  
* Genuine project imagery  
* Route-specific SEO and sharing metadata  
* Responsive editorial layouts  
* Keyboard and reduced-motion support  
* Automated and browser-based validation  
* Production build  
* Verified deployment when authorized  
* Accurate completion documentation

## **00.3 Authority of the specifications**

Each document has a distinct responsibility.

**Phase 0:** Product scope, audience, positioning, and business requirements.

**Phase 1:** Information architecture, interaction behavior, user flows, and navigation.

**Phase 2:** Visual identity, layout, composition, media treatment, and motion art direction.

**Phase 3:** Technology, architecture, implementation, testing, and deployment.

Do not silently replace an explicit design or experience decision with a more convenient implementation.

Where minor engineering details are unspecified, select the simplest robust approach that preserves the intended experience.

## **00.4 Prohibited substitutions**

Do not:

* Replace the Living Frame with ordinary project cards.  
* Omit the three case-study routes.  
* Turn the website into a résumé-style developer template.  
* Invent decorative 3D or unrelated visual effects.  
* Use fabricated screenshots of completed projects.  
* Present fictional concepts as commissioned client work.  
* Remove the project index.  
* Omit functional case-study navigation.  
* Introduce scroll hijacking.  
* Use multiple controllers for the same animation.  
* Ignore mobile, keyboard, or reduced-motion behavior.  
* Add unnecessary backend infrastructure.  
* Declare completion without testing.  
* Claim successful deployment without verifying it.

## **00.5 Working method**

Implement in checkpoints.

For each checkpoint:

1. Review the relevant specification.  
2. Implement the required behavior.  
3. Run available validation.  
4. Inspect actual rendered output when tooling allows.  
5. Correct significant problems.  
6. Record genuine completion status.  
7. Continue to the next checkpoint.

Avoid repeatedly requesting approval for ordinary engineering decisions.

Only request missing information that cannot reasonably be inferred or verified, such as the real contact destinations or access to authenticated Quad media.

## **00.6 Final quality standard**

**The site must be visually excellent without animation, distinctive with animation, reliable on mobile, and straightforward for a prospective client to understand and navigate.**

---

# **01 — Business and Product Context**

## **01.1 Purpose**

The portfolio supports acquisition of web design and development clients.

The initial focus is Rwanda, especially:

* Hospitality and tourism  
* Architecture, interiors, furniture, and creative studios  
* Established service and product businesses

The website should also be credible to international clients and creative professionals.

## **01.2 Primary audience**

Business owners and decision-makers.

Many may arrive through WhatsApp outreach.

They must quickly understand:

* Who created the work  
* What services are offered  
* Whether the design quality is suitable for their business  
* Whether the projects function  
* How to contact the developer

## **01.3 Secondary audience**

Designers, developers, agencies, and collaborators.

They may explore:

* Animation quality  
* Layout and art direction  
* Engineering decisions  
* Technical depth  
* Complex application work

## **01.4 Working public identity**

**Display name:** Prince Ishimwe

**Role:** Designer & Frontend Developer

**Location:** Rwanda

The preferred final public name must be verified.

Store the public identity in central configuration.

## **01.5 Primary positioning**

“I design and develop distinctive, thoughtfully crafted websites for businesses and brands.”

## **01.6 Primary commercial action**

**Start a Project**

Preferred destination: verified professional WhatsApp.

Secondary destination: verified professional email.

Do not invent contact destinations.

## **01.7 Services**

The public site presents:

1. Business Websites  
2. Custom Digital Experiences  
3. Website Redesigns

Detailed package pricing remains outside the homepage.

## **01.8 Success**

The website succeeds commercially when it can be shared with prospective clients and provides credible evidence of design and development capability, along with a dependable contact path.

---

# **02 — Complete Product Scope**

## **02.1 Required routes**

| Route | Purpose |
| ----- | ----- |
| `/` | Portfolio homepage |
| `/work/cafe-bliss` | Café Bliss case study |
| `/work/imizi` | IMIZI Training Club case study |
| `/work/quad` | Quad case study |
| Unmatched routes | Designed 404 experience |

All four content routes must load directly and work on browser refresh.

## **02.2 Homepage structure**

Exact order:

1. Header  
2. Hero  
3. Selected Work  
4. Services  
5. About  
6. Contact  
7. Footer

## **02.3 Required signature functionality**

* Sticky desktop Living Frame  
* Naturally scrolling project chapters  
* Three synchronized project states  
* Real image transitions  
* Atmospheric transformations  
* Project index  
* Reverse-scroll support  
* Rapid-scroll interruption  
* Case-study entry navigation  
* Shared-element transitions on supported browsers  
* Correct direct-route behavior  
* Reliable browser history  
* Responsive stacked gallery  
* Reduced-motion alternatives

## **02.4 Required case studies**

Each project must have:

* Large project-specific hero  
* Overview  
* Design direction  
* Actual experience and features  
* Authentic supporting imagery  
* Relevant implementation explanation  
* Live-project link  
* Return navigation  
* Next-project navigation

## **02.5 Exclusions**

Do not add:

* Blog  
* CMS  
* Authentication for the portfolio  
* User accounts  
* Pricing configurator  
* Newsletter  
* Complex contact form backend  
* WebGL or Three.js  
* Custom cursor  
* Introductory loading sequence  
* Unrelated animated decorations  
* Fabricated client results  
* Unnecessary application services

---

# **03 — Revised Rendering Architecture**

**This is the principal technical change in Version 1.1.**

## **03.1 Selected approach**

Use:

**React \+ TypeScript \+ Vite through React Router Framework Mode, with static prerendering of all four content routes.**

The deployment does not require a runtime application server.

The browser hydrates the generated HTML and handles interactive behavior.

## **03.2 Why change the original SPA approach?**

The original specification recommended a conventional Vite React SPA.

That architecture could render and navigate the portfolio successfully.

However, the complete product now contains four important shareable pages.

Individual case studies may be sent directly to prospective clients through WhatsApp.

A conventional client-rendered application can provide incomplete or generic HTML to crawlers that do not execute JavaScript.

Our routes should have usable page-specific HTML at build time.

## **03.3 Required rendering results**

Generate static HTML for:

* `/`  
* `/work/cafe-bliss`  
* `/work/imizi`  
* `/work/quad`

Each should contain appropriate:

* Page content  
* Heading structure  
* Title  
* Description  
* Canonical URL  
* Open Graph metadata  
* Social-preview image reference

The result must not depend on client-side JavaScript merely to add essential metadata.

## **03.4 Framework Mode configuration**

Use React Router's documented prerendering capability.

The intended configuration is conceptually:

* `ssr: false`  
* `prerender: ["/", "/work/cafe-bliss", "/work/imizi", "/work/quad"]`

Use the current supported syntax for the installed React Router version.

If a dynamic `/work/:slug` route is used, explicitly enumerate all three project URLs for prerendering.

A dynamic route alone does not guarantee that its possible parameter values are generated.

## **03.5 Runtime architecture**

The public website remains predominantly static.

There is:

* No application database  
* No runtime content API  
* No custom Express server  
* No authentication requirement  
* No server-side user session  
* No runtime rendering dependency for the four content pages

React hydrates the static output.

GSAP and other interactive systems initialize in the browser.

## **03.6 Hydration correctness**

The prerendered HTML and first client render must agree.

Avoid:

* Random initial text  
* Rendering browser-specific values before hydration  
* Accessing `window` during server/build-time rendering  
* Initial markup based on uninitialized viewport detection  
* Inconsistent image structures between static render and hydration  
* Time-dependent content that changes unexpectedly

Use effects, supported client-only mechanisms, and appropriate CSS responsiveness for browser-dependent behavior.

## **03.7 Static enhancement model**

Before interactive enhancement, the page should contain meaningful project content and a complete readable presentation.

After hydration, the desktop gallery may enable the shared visual stage and transitions.

If animation initialization fails, preserve the static layout.

## **03.8 Build output**

Do not assume the previous Vite SPA output directory, `dist`, remains correct.

React Router Framework Mode uses its own production build conventions.

The expected static client assets normally live in:

`build/client`

Verify the actual output before configuring deployment.

## **03.9 Framework decision boundary**

Use React Router Framework Mode for its static rendering and route integration.

Do not add runtime SSR, server actions, a database, or a CMS unless an independently verified requirement makes them necessary.

## **03.10 Compatibility**

The choice retains the previously locked core technologies:

* React  
* TypeScript  
* Vite  
* Tailwind  
* React Router  
* GSAP

This is an architectural refinement, not a redesign of the product.

---

# **04 — Technology Stack**

## **04.1 Core stack**

| Responsibility | Selected technology |
| ----- | ----- |
| UI | React |
| Language | TypeScript |
| Development infrastructure | Vite |
| Routing and prerendering | React Router Framework Mode |
| Styling | Tailwind CSS 4 \+ custom CSS |
| Animation | GSAP |
| Scroll-state integration | GSAP ScrollTrigger |
| React animation lifecycle | `@gsap/react` |
| Enhanced route transitions | React Router / browser View Transitions |
| Icons | Lucide React only where useful |
| Unit testing | Vitest \+ Testing Library |
| Browser testing | Playwright |
| Linting | ESLint |
| Formatting | Prettier |
| Deployment target | Vercel |

## **04.2 Version policy**

Use current supported stable releases compatible with one another.

Do not hardcode outdated versions from older tutorials.

Verify:

* Supported Node.js version  
* React Router Framework Mode requirements  
* Vite compatibility  
* Tailwind Vite integration  
* GSAP React integration  
* Test tool compatibility

Commit the package lockfile.

## **04.3 Styling responsibilities**

Tailwind handles:

* Responsive utilities  
* Spacing  
* Grid  
* Layout  
* Common component styling

Custom CSS handles:

* Design tokens  
* Editorial typography  
* Living Frame geometry  
* Atmospheric surfaces  
* Advanced transitions  
* Detailed case-study compositions  
* Route-transition pseudo-elements  
* Fine responsive art direction

Do not allow Tailwind defaults to override the specified design.

## **04.4 Animation ownership**

**GSAP:** Within-page animation.

**React Router and browser View Transitions:** Cross-route navigation enhancement.

**CSS:** Layout, static visual rules, focus, hover, and transition styling.

Avoid introducing Framer Motion merely to implement another version of the same effect.

## **04.5 Native scrolling**

Use browser-native document scrolling.

Smooth anchor scrolling may be applied where appropriate, respecting reduced motion.

Do not introduce a custom smooth-scroll library unless a demonstrated problem requires it.

No scroll hijacking.

---

# **05 — Repository Initialization**

## **05.1 Repository safety**

Build in the designated portfolio repository or working directory.

Before replacing files:

* Inspect the existing directory.  
* Identify unrelated material.  
* Preserve user work.  
* Avoid destructive operations.  
* Do not modify the Café Bliss, IMIZI, or Quad source repositories unless separately authorized.

## **05.2 Initialization**

Use the current React Router Framework Mode setup integrated with Vite.

Install only required dependencies.

Do not create a separate manual Vite SPA root that competes with the framework entry points.

## **05.3 Required development scripts**

Provide commands equivalent to:

| Script | Purpose |
| ----- | ----- |
| `dev` | Start framework development server |
| `build` | Produce framework/prerender build |
| `typecheck` | Validate TypeScript |
| `lint` | Run ESLint |
| `test` | Execute unit tests |
| `test:e2e` | Execute Playwright tests |
| `preview` | Serve and inspect the actual production output |
| `check` | Run required quality checks |

Use the documented React Router build commands.

Do not assume a plain `vite build` script implements the required prerendering.

## **05.4 TypeScript**

Enable strict mode.

Use typed route parameters, project records, image metadata, and animation state.

Avoid unjustified `any`.

## **05.5 Code standards**

* Clear names  
* Minimal duplication  
* No dead code  
* No debug statements in production  
* No unused dependencies  
* No fabricated components  
* No excessive abstraction  
* Maintainable styling  
* Accurate documentation

---

# **06 — Revised Repository Structure**

Because the application now uses React Router Framework Mode, update the original structure.

Recommended organization:

## **Root**

* `app/`  
  * `root.tsx`  
  * `routes.ts`  
  * `routes/`  
    * `home.tsx`  
    * `work.$slug.tsx`  
    * `not-found.tsx` or equivalent  
  * `components/`  
    * `layout/`  
      * `SiteHeader.tsx`  
      * `MobileNavigation.tsx`  
      * `SiteFooter.tsx`  
      * `Container.tsx`  
    * `ui/`  
      * `SectionLabel.tsx`  
      * `EditorialRule.tsx`  
      * `TextLink.tsx`  
      * `ResponsiveImage.tsx`  
      * `SkipLink.tsx`  
  * `features/`  
    * `hero/`  
      * `HeroSection.tsx`  
    * `work/`  
      * `SelectedWorkSection.tsx`  
      * `WorkIntroduction.tsx`  
      * `LivingFrame.tsx`  
      * `WorkVisualStage.tsx`  
      * `ProjectChapter.tsx`  
      * `WorkIndex.tsx`  
      * `useActiveProject.ts`  
      * `useLivingFrameMotion.ts`  
    * `case-study/`  
      * `CaseStudyPage.tsx`  
      * `CaseStudyHero.tsx`  
      * `CaseStudyOverview.tsx`  
      * `CaseStudySection.tsx`  
      * `CaseStudyMedia.tsx`  
      * `CaseStudyNavigation.tsx`  
    * `services/`  
    * `about/`  
    * `contact/`  
  * `content/`  
    * `projects.ts`  
    * `services.ts`  
  * `config/`  
    * `site.ts`  
    * `navigation.ts`  
    * `routes.ts`, if useful  
  * `hooks/`  
    * `useReducedMotion.ts`  
  * `styles/`  
    * `global.css`  
    * `tokens.css`  
    * `typography.css`  
    * `living-frame.css`  
    * `case-study.css`  
    * `transitions.css`  
* `public/`  
  * `images/projects/cafe-bliss/`  
  * `images/projects/imizi/`  
  * `images/projects/quad/`  
  * `images/social/`  
  * `favicon.svg`  
  * `robots.txt`  
* `tests/`  
  * `unit/`  
  * `e2e/`  
* `react-router.config.ts`  
* `vite.config.ts`  
* `package.json`  
* `tsconfig.json`  
* `README.md`  
* `IMPLEMENTATION_STATUS.md`  
* `QA_REPORT.md`  
* `ASSET_PROVENANCE.md`  
* `DEPLOYMENT.md`  
* `vercel.json`, only if required

This is the intended structure, not an instruction to create empty files.

## **06.1 Framework conventions**

Use the installed React Router version's actual route-module and root-document conventions.

Do not force an outdated manual SPA architecture into Framework Mode.

## **06.2 Shared content**

Project records must be centralized.

Do not duplicate project titles, URLs, descriptions, or image paths across multiple routes.

## **06.3 Design-system organization**

Maintain shared styling.

Do not independently hardcode the same colors and typography in every case-study component.

## **06.4 Component boundaries**

Keep:

* Routing separate from media rendering  
* Project data separate from animation logic  
* Gallery state separate from route state  
* Content separate from decorative presentation  
* Contact configuration separate from components

---

# **07 — Route Architecture**

## **07.1 Required routes**

* `/`  
* `/work/cafe-bliss`  
* `/work/imizi`  
* `/work/quad`  
* Unmatched route handling

## **07.2 Route modules**

Use typed route modules.

A shared parameterized case-study route is acceptable if all project paths are explicitly prerendered.

## **07.3 Prerendered paths**

The production build must generate page-specific HTML for all four content routes.

This is a release requirement.

## **07.4 Direct URL access**

Opening a case study directly must work without first loading the homepage.

## **07.5 Refresh behavior**

Refreshing a case-study URL must render the correct page.

The hosting system must not collapse all pages into generic homepage HTML.

## **07.6 Unknown slugs**

An unknown project slug must display a designed 404 state.

Where hosting permits, serve an appropriate 404 HTTP status.

Do not allow a generic static fallback to disguise nonexistent projects as successful content pages.

## **07.7 Shared root layout**

The root application owns:

* Document shell  
* Global styles  
* Header  
* Main outlet  
* Footer  
* Navigation state  
* Focus considerations  
* Shared error presentation where appropriate

## **07.8 Route scroll behavior**

Normal forward navigation:

Start at the top of the case study.

Browser Back:

Restore previous position where possible.

Direct anchors:

Scroll to the named section while accounting for header height.

## **07.9 Route focus**

Ensure keyboard and assistive-technology users understand that a new page has loaded.

Do not allow focus to remain stranded in removed content.

## **07.10 Navigation links**

Header links must work from every route.

From case studies:

* Work → `/#work`  
* Services → `/#services`  
* About → `/#about`

Contact follows the verified configured destination or homepage contact anchor.

---

# **08 — Central Content Model**

## **08.1 Project record**

Define a typed model containing:

* `slug`  
* `number`  
* `title`  
* `shortTitle`  
* `category`  
* `projectType`  
* `year`  
* `role`  
* `summary`  
* `overview`  
* `designDirection`  
* `implementationNotes`  
* `features`  
* `liveUrl`  
* `repositoryUrl`  
* `caseStudyPath`  
* `cover`  
* `gallery`  
* `atmosphere`  
* `caseStudySections`

## **08.2 Image metadata**

Each image record should include:

* Source  
* Width  
* Height  
* Alt text  
* Fit mode  
* Optional focal position  
* Caption  
* Project association  
* Suitable-for-frame indicator where useful

## **08.3 Section model**

The updated Phase 2 defines a small vocabulary of case-study layouts.

Support section types equivalent to:

* Section Introduction  
* Full-Width Media  
* Text \+ Image  
* Paired Images  
* Feature Detail  
* Mobile Presentation  
* Technical Note  
* Closing Navigation

Use a typed discriminated union or similarly maintainable content model.

Avoid building an unnecessary general-purpose CMS.

## **08.4 Project type**

Distinguish:

* Independent concept work  
* Functional product

Do not present fictional concepts as client commissions.

## **08.5 Atmosphere**

Restrict to:

* `cafe`  
* `imizi`  
* `quad`

## **08.6 Project ordering**

**Café Bliss → IMIZI → Quad**

Locked.

## **08.7 Single source of truth**

The same content model drives:

* Desktop gallery  
* Stacked gallery  
* Project index  
* Case-study pages  
* Next-project navigation  
* Metadata  
* Image paths  
* Live URLs

## **08.8 Prerender compatibility**

Content required for page generation must be available at build time.

Do not depend on browser-only APIs for constructing case-study content.

---

# **09 — Project Content Requirements**

## **09.1 Café Bliss**

**Project type:** Independent fictional hospitality concept  
**Role:** Design & Development  
**Year:** 2026

**Live:** [https\://cafe-bliss-rw.vercel.app](https://cafe-bliss-rw.vercel.app/)

**Repository:** [https\://github.com/byishimwe/cafe-bliss](https://github.com/byishimwe/cafe-bliss)

### **Homepage description**

“A warm, responsive digital experience for a fictional neighborhood café, designed around atmosphere, menu discovery, and intuitive navigation.”

### **Main evidence**

* Editorial hospitality design  
* Responsive website  
* Menu browsing and filtering  
* Reservation-oriented interface  
* Accessible interactions  
* Brand storytelling

### **Case-study narrative**

* Concept  
* Hospitality design direction  
* Typography and imagery  
* Menu interaction  
* Reservation-oriented frontend  
* Responsive design  
* Implementation details  
* Genuine screenshots

Do not claim backend booking operations or real business outcomes.

## **09.2 IMIZI Training Club**

**Project type:** Independent fictional fitness concept  
**Role:** Design & Development  
**Year:** 2026

**Live:** [https\://imizi-training-club.vercel.app](https://imizi-training-club.vercel.app/)

**Repository:** [https\://github.com/byishimwe/imizi-training-club](https://github.com/byishimwe/imizi-training-club)

### **Homepage description**

“A bold digital presence for a fictional strength and conditioning club, connecting identity, classes, memberships, and an intuitive visitor journey.”

### **Main evidence**

* Distinctive visual identity  
* Multi-page website  
* Classes and schedules  
* Coaches  
* Membership presentation  
* Responsive navigation  
* Contact-oriented interactions

### **Case-study narrative**

* Brand concept  
* Strong visual identity  
* Typography and contrast  
* Information architecture  
* Classes and timetable  
* Membership presentation  
* Responsive implementation  
* Genuine screenshots

Do not represent fictional business operations as real.

## **09.3 Quad**

**Project type:** Functional web application  
**Role:** Describe actual contribution accurately  
**Year:** 2026

**Live:** [https\://joinquad.vercel.app](https://joinquad.vercel.app/)

**Repository:** [https\://github.com/byishimwe/quad](https://github.com/byishimwe/quad)

### **Homepage description**

“A full-stack student community platform bringing content, profiles, messaging, and real-time interactions into one connected digital experience.”

### **Main evidence**

Verify actual functionality before writing final case-study copy.

Potential evidence includes:

* Authentication  
* Community posts  
* User profiles  
* Messaging  
* Notifications  
* Real-time interaction  
* Frontend and backend architecture

### **Case-study narrative**

* Product purpose  
* User experience  
* Authentic application imagery  
* Major feature interactions  
* Technical architecture  
* Actual implementation decisions

### **Special asset requirement**

A login screen is not sufficient.

The portfolio must include genuine authorized screenshots of the application's actual interface.

Do not fabricate product screens or reveal private content.

---

# **10 — Asset Acquisition and Provenance**

## **10.1 Source of truth**

Use actual project repositories and live websites.

## **10.2 Required process**

For every project:

1. Inspect repository documentation.  
2. Inspect live implementation.  
3. Identify strong existing visuals.  
4. Capture genuine screens where possible.  
5. Verify correspondence with the project.  
6. Choose an appropriate hero image.  
7. Capture meaningful supporting media.  
8. Optimize.  
9. Record provenance.

## **10.3 Primary hero images**

Required:

* Café Bliss hero  
* IMIZI hero  
* Quad authenticated application hero

The primary image must be suitable for both the Living Frame and case-study hero.

## **10.4 Supporting imagery**

Each case study must contain meaningful additional visual evidence.

Aim for at least two distinct supporting screenshots when available and appropriate.

Do not fabricate screenshots to reach a numeric target.

If important evidence is missing, report the gap and request genuine media when necessary.

## **10.5 Capture viewports**

Suggested desktop:

* 1440 × 900  
* 1366 × 768

Suggested mobile:

* 390 × 844  
* 375 × 812

Adjust when actual composition requires it.

## **10.6 Image authenticity**

Do not use:

* AI-generated completed website screenshots  
* Unrelated marketing stock photos presented as project work  
* Fake mobile UI  
* Fabricated authenticated screens  
* Unauthorized private user content

## **10.7 Image processing**

Optimize large captures while preserving readable text.

Use WebP or AVIF where useful.

Maintain stable dimensions.

## **10.8 Image metadata**

Store appropriate crop and fit information per image.

Quad may require contained layouts to preserve application UI.

## **10.9 Asset provenance document**

Create `ASSET_PROVENANCE.md`.

Record:

* Project  
* Asset path  
* Source  
* Screenshot authenticity  
* Capture date where known  
* Processing performed  
* Known limitations

## **10.10 Missing assets**

Do not silently replace a required screenshot with unrelated artwork.

Record blocked acquisition explicitly.

---

# **11 — Design System Implementation**

Implement Phase 2 v1.1 exactly as the visual authority.

## **11.1 Typography**

Primary:

**DM Sans**

Secondary:

**Instrument Serif**

Use only the necessary weights and styles.

## **11.2 Core palette**

| Token | Value |
| ----- | ----- |
| Paper | `#F4F1EB` |
| Ink | `#20211F` |
| Muted Ink | `#595A55` |
| Quiet Ink | `#77776F` |
| Rule | `#D7D2C8` |
| Soft Surface | `#EBE6DD` |
| Warm White | `#FCFAF6` |
| Dark Surface | `#1B1C1A` |
| Accent | `#805D4B` |

## **11.3 Project atmospheres**

| Project | Color |
| ----- | ----- |
| Café Bliss | `#E8DED1` |
| IMIZI | `#252624` |
| Quad | `#E1E7E8` |

## **11.4 Layout**

* Maximum content width: 1440px  
* Desktop editorial grid: 12 columns  
* Tablet conceptual grid: 6 columns  
* Mobile conceptual grid: 4 columns  
* Responsive gutters  
* Shared alignments

## **11.5 Geometry**

* Mostly square corners  
* Thin rules  
* Minimal shadows  
* No generic floating-card system

## **11.6 Typography hierarchy**

Use the responsive sizes and line-height principles defined in Phase 2 v1.1.

Large display typography must not overflow on narrow screens.

## **11.7 Case-study system**

Use the same global typography, palette, grid, and metadata language.

Project-specific atmospheres should mainly influence media areas, not replace the entire site theme.

## **11.8 Optical refinement**

Test actual rendering.

Adjust line breaks, image positioning, spacing, and responsive dimensions when required.

Do not independently invent a new design direction.

---

# **12 — Homepage Architecture**

## **12.1 Header**

Required:

* Name  
* Work  
* Services  
* About  
* Start a Project

Sticky presentation with clear responsive behavior.

## **12.2 Hero**

Working main statement:

**Digital experiences**  
**built to be**  
*remembered.*

Supporting copy:

“I design and develop thoughtful websites for businesses and brands — combining strong visual direction, purposeful interaction, and reliable frontend execution.”

Use the defined typographic hierarchy.

## **12.3 Selected Work**

Contains:

* Editorial introduction  
* Project index  
* Living Frame  
* Three project chapters

## **12.4 Services**

Three numbered editorial rows.

No generic icon cards.

## **12.5 About**

Concise typography-led section.

No fabricated portrait.

## **12.6 Contact**

**Have something worth building?**

WhatsApp and email.

## **12.7 Footer**

Restrained typography, small links, and consistent identity.

## **12.8 Static requirement**

The complete homepage must look professionally designed before animation enhancement is added.

---

# **13 — Living Frame Structural Engineering**

## **13.1 Desktop model**

Two major zones:

**Persistent visual stage**

**Naturally scrolling project rail**

## **13.2 Geometry**

Initial target:

* Approximately 67% visual stage  
* 40–56px gap  
* Remaining width for editorial information

Image-stage ratio:

**16:10**

## **13.3 Sticky behavior**

Use CSS `position: sticky`.

Do not also GSAP-pin the same element.

## **13.4 Sticky boundary**

The stage must remain within Selected Work.

It must release naturally before Services.

## **13.5 Stage height**

Account for:

* Header height  
* Available viewport height  
* Gallery margin  
* Image ratio

Switch to a stacked layout when vertical space is insufficient.

## **13.6 Rail content**

Each chapter contains:

* Number  
* Category  
* Title  
* Description  
* Project type  
* Role/year  
* Explore Project  
* View Live Website

## **13.7 Project index**

Use actual anchors:

* `#project-cafe-bliss`  
* `#project-imizi`  
* `#project-quad`

## **13.8 Scroll philosophy**

Native scrolling only.

No mandatory snapping.

No wheel interception.

No long forced timelines.

## **13.9 Static baseline**

Project chapters must contain meaningful content and imagery before the enhanced stage takes over.

Do not initially hide everything and rely on GSAP to make content visible.

---

# **14 — Living Frame State Management**

## **14.1 Active-project values**

* `cafe-bliss`  
* `imizi`  
* `quad`

## **14.2 Single authoritative active state**

One active-project identity controls:

* Stage media  
* Atmosphere  
* Index emphasis  
* Related active styling

## **14.3 Initial state**

At normal first entry:

Café Bliss.

On restored or deep-linked positions:

Calculate the actual relevant chapter.

## **14.4 Activation**

Use discrete chapter activation through ScrollTrigger or an observer.

Do not maintain React state for every scroll pixel.

## **14.5 Scroll direction**

Support downward and upward navigation.

## **14.6 Rapid scrolling**

Latest chapter wins.

Do not queue outdated transitions.

## **14.7 Index selection**

Index links scroll to the correct chapter and synchronize the stage.

## **14.8 Breakpoint changes**

Clean up desktop observers and animation styles before switching to stacked presentation.

Do not duplicate triggers after resizing.

## **14.9 Reduced motion**

Settle the correct project immediately or through minimal fading.

## **14.10 Route navigation priority**

If Explore Project is activated during a gallery transition:

* The clicked project's identity determines the destination.  
* Do not navigate to an unrelated active image.  
* Resolve conflicting gallery animation.  
* Start route navigation promptly.

## **14.11 View Transition source consistency**

The source media participating in route continuity must correspond to the clicked project.

This applies to desktop and mobile.

---

# **15 — Living Frame Visual Stage**

## **15.1 Ownership**

Owns:

* Visible project image  
* Atmosphere  
* Current/incoming layers  
* Image reveal  
* Scale settling  
* Image fit and position

Does not own:

* Project content  
* Route definitions  
* Contact configuration  
* Browser history

## **15.2 Layer model**

Use a current image and incoming image.

Avoid accumulating hidden media layers.

## **15.3 Image transition**

Recommended:

1. Prepare incoming image.  
2. Keep current image visible.  
3. Start controlled reveal.  
4. Transition atmosphere.  
5. Settle incoming image.  
6. Clear temporary layer.

## **15.4 Transition mask**

Preferred:

Rectangular reveal.

Fallback:

Crossfade.

## **15.5 Timing**

Initial:

* Image: 550ms  
* Atmosphere: 600ms  
* Metadata: 250ms  
* Index: 180ms

## **15.6 Scale**

Approximately 1.025 → 1.0.

## **15.7 GSAP cleanup**

Use the supported React integration.

Ensure timelines and observers are reverted when components unmount or breakpoints change.

## **15.8 Loading**

Avoid revealing an unloaded blank image.

When practical, preload or decode incoming media before running its transition.

## **15.9 Image failure**

Keep the layout coherent.

Preserve project information and links.

## **15.10 Route transition coordination**

Before shared-element navigation, prevent competing active transforms on the source image.

---

# **16 — Mobile and Tablet Gallery**

## **16.1 Principle**

The mobile gallery is deliberately designed, not simply the desktop sticky presentation forced into a narrow space.

## **16.2 Structure**

Each project shows:

1. Number/category  
2. Authentic image  
3. Project title  
4. Description  
5. Role/type  
6. Explore Project  
7. View Live Website

## **16.3 Images**

Use source-appropriate proportions.

Preserve important application UI in Quad.

## **16.4 Interaction**

All project actions must be visible without hover.

## **16.5 Motion**

Subtle entrance effects only.

No sticky desktop choreography.

## **16.6 Responsive breakpoints**

Initial:

* Wide desktop: 1100px and above, with sufficient height  
* Tablet: 768–1099px  
* Mobile: below 768px  
* Short desktop: stacked fallback

Tune based on actual geometry.

## **16.7 Shared transitions on mobile**

The source is the corresponding stacked project image.

Use a simpler spatial movement when supported.

Fallback to normal navigation when needed.

---

# **17 — Complete Case-Study Architecture**

## **17.1 Required routes**

Every project has a fully implemented page.

## **17.2 Shared structure**

1. Case-study hero  
2. Overview  
3. Design direction  
4. Experience and features  
5. Supporting image presentation  
6. Implementation highlights  
7. Closing actions  
8. Next-project navigation

## **17.3 Shared layout modules**

Implement the Phase 2 v1.1 editorial vocabulary:

* Section Introduction  
* Full-Width Media  
* Text \+ Image  
* Paired Images  
* Feature Detail  
* Mobile Presentation  
* Technical Note  
* Closing Navigation

Use a small number of reusable components.

## **17.4 Dynamic project data**

Render project-specific content from typed project records.

## **17.5 Authentic evidence**

Actual imagery must support actual claims.

Do not create long case studies from generic marketing paragraphs.

## **17.6 Hero relationship**

The case-study hero image must relate directly to the corresponding Living Frame image.

## **17.7 Responsive layout**

Use the global grid while adapting media compositions for tablet and mobile.

## **17.8 Shared navigation**

The same header and footer remain present across all routes.

## **17.9 Content hierarchy**

Use actual logical headings and readable paragraphs.

## **17.10 Different content, shared visual grammar**

Do not duplicate the same screenshot arrangement mechanically across all three projects.

---

# **18 — Café Bliss Case Study**

## **18.1 Hero**

* Project number  
* Category  
* Title  
* Summary  
* Role/year  
* Genuine hero image  
* Warm atmospheric field  
* Live website link

## **18.2 Overview**

Explain the fictional café concept and intended visitor experience.

## **18.3 Art direction**

Discuss:

* Warmth  
* Typography  
* Photographic presentation  
* Editorial spacing  
* Brand atmosphere

## **18.4 Experience**

Show real features:

* Menu browsing  
* Category filtering  
* Reservation-oriented interface  
* Responsive navigation

## **18.5 Screenshots**

Use genuine desktop and mobile captures when available.

## **18.6 Implementation**

Describe the actual lightweight frontend architecture and meaningful UI decisions.

## **18.7 Integrity**

Do not claim real reservations or business conversions.

## **18.8 Closing**

* Visit Live Website  
* Back to Work  
* Next: IMIZI

---

# **19 — IMIZI Case Study**

## **19.1 Hero**

* Project number  
* Category  
* Title  
* Summary  
* Role/year  
* Genuine hero image  
* Dark atmospheric field  
* Live website link

## **19.2 Overview**

Explain the fictional fitness brand.

## **19.3 Art direction**

Discuss:

* Athletic identity  
* Strong typography  
* Contrast  
* Brand character  
* Imagery

## **19.4 Experience**

Show real functionality:

* Classes  
* Timetable  
* Coaches  
* Memberships  
* Inquiry-oriented interface

## **19.5 Screenshots**

Use real page captures and relevant mobile visuals.

## **19.6 Implementation**

Describe the actual React implementation and meaningful responsive decisions.

## **19.7 Integrity**

Do not imply real gym operations, membership sales, or connected inquiry processing.

## **19.8 Closing**

* Visit Live Website  
* Back to Work  
* Next: Quad

---

# **20 — Quad Case Study**

## **20.1 Hero**

* Project number  
* Category  
* Title  
* Summary  
* Accurate role/year  
* Genuine application hero image  
* Cool-neutral atmospheric field  
* Live application link

## **20.2 Overview**

Explain the real application concept and purpose.

## **20.3 Experience**

Present actual product areas:

* Feed  
* Profiles  
* Content interactions  
* Messaging  
* Notifications

Only include features verified against the codebase.

## **20.4 Media**

Use large authentic application screenshots.

Avoid tiny unreadable image mosaics.

## **20.5 Technical explanation**

Discuss relevant implementation choices.

Possible areas:

* React and TypeScript architecture  
* State management  
* Authentication  
* Backend API  
* Real-time interaction  
* Data modeling

## **20.6 Integrity**

No fabricated statistics.

No unauthorized content.

No invented feature completeness.

## **20.7 Closing**

* Visit Live Application  
* View Repository  
* Back to Work  
* Return to Café Bliss or Selected Work

---

# **21 — Shared-Element Route Transitions**

## **21.1 Purpose**

Opening a project should feel like entering the selected work.

The homepage image becomes the visual connection to the destination hero.

## **21.2 Technology**

Use React Router's documented View Transition navigation.

Enhanced transitions apply during client-side navigation.

Direct document loads render normally.

## **21.3 Source element**

Desktop:

Active Living Frame media.

Mobile:

Selected stacked-project media.

## **21.4 Destination element**

Corresponding case-study hero media.

## **21.5 Stable identity**

Use project-specific transition names equivalent to:

* `project-cafe-bliss-media`  
* `project-imizi-media`  
* `project-quad-media`

## **21.6 Uniqueness**

Only one intended source element in the outgoing document should use the active transition name.

Only one intended destination element in the incoming document should use the matching identity.

Inactive image layers must not share that transition name.

## **21.7 Router state**

Use React Router's supported transition state and navigation APIs.

Do not maintain a separate fake route-transition state that can disagree with actual navigation.

## **21.8 Forward choreography**

1. Project selected.  
2. Navigation begins.  
3. Current image becomes source.  
4. Supporting gallery information recedes subtly.  
5. Image scales or repositions.  
6. Destination hero appears around the image.  
7. Case-study title and metadata become visible.  
8. Transition completes.  
9. Ordinary interaction resumes.

## **21.9 Coordination with GSAP**

The gallery must not simultaneously animate the same media geometry.

Settle or cancel relevant within-page transforms before route continuity begins.

## **21.10 Duration**

Initial visual target:

650–900ms.

Do not add an artificial waiting period.

Tune down if it feels slow.

## **21.11 CSS transition styling**

Use the supported View Transition pseudo-elements and project-specific transition names.

Avoid global rules that accidentally animate every visual element on every route.

## **21.12 Browser support**

When unsupported, normal navigation must still work.

## **21.13 Reduced motion**

Use immediate navigation or minimal fading.

## **21.14 Direct navigation**

No originating homepage source is required.

The case-study hero renders in its completed state.

## **21.15 Browser Back**

Restore normal navigation and previous project context.

Use a reverse spatial transition only when the correct image and destination geometry are reliably available.

## **21.16 Case-study-to-case-study navigation**

A clean route transition is sufficient.

Do not force unrelated project images into the same shared-element animation.

## **21.17 Success criteria**

The transition is successful when:

* Correct project image moves between contexts.  
* Destination page renders correctly.  
* History works.  
* Focus remains coherent.  
* No animation conflicts occur.  
* Reduced-motion behavior works.  
* Unsupported browsers navigate reliably.

---

# **22 — Scroll Restoration and Deep Links**

## **22.1 Homepage anchors**

Support:

* `#top`  
* `#work`  
* `#project-cafe-bliss`  
* `#project-imizi`  
* `#project-quad`  
* `#services`  
* `#about`  
* `#contact`

## **22.2 Forward navigation**

When opening a case study normally, begin at its top.

## **22.3 Browser Back**

Restore prior homepage scroll position where practical.

## **22.4 Active state restoration**

When returning near IMIZI, the stage should display IMIZI.

Do not default incorrectly to Café Bliss.

## **22.5 Direct hash visit**

Navigate to the target chapter and synchronize its image.

## **22.6 Header offsets**

Use appropriate scroll padding or margin.

## **22.7 Route-loading timing**

Wait for required layout information where necessary before synchronizing active gallery state.

Avoid unnecessary fixed timeout guesses.

## **22.8 Avoid competing scroll systems**

Use router-supported restoration mechanisms where appropriate.

Do not introduce two independent restoration controllers.

## **22.9 Explicit Back to Work**

This is different from browser Back.

A project return link may navigate to the matching homepage anchor.

---

# **23 — Navigation, Services, About, and Contact**

## **23.1 Header**

Sticky, compact, readable.

Use the established Phase 2 geometry.

## **23.2 Mobile menu**

Required:

* `aria-expanded`  
* Correct focus order  
* Escape closes  
* Menu closes after navigation  
* No persistent focus trap  
* Clearly visible links

## **23.3 Services**

Editorial rows:

1. Business Websites  
2. Custom Digital Experiences  
3. Website Redesigns

## **23.4 About**

Concise, accurate biography.

No fabricated portrait or credentials.

## **23.5 Contact**

Primary:

**Start a Project ↗**

Secondary:

**Send an Email ↗**

## **23.6 Contact configuration**

Use centralized site configuration.

Require real values before outreach readiness.

## **23.7 Contact behavior**

WhatsApp and email links must use valid verified destinations.

Avoid inventing placeholder phone numbers.

## **23.8 Footer**

Use consistent identity and navigation.

---

# **24 — SEO, Metadata, and Social Sharing**

**This section is strengthened by the new rendering architecture.**

## **24.1 Route-specific metadata**

Every required content route must have a unique appropriate:

* HTML title  
* Description  
* Canonical URL  
* Open Graph title  
* Open Graph description  
* Open Graph image  
* Open Graph URL

Include relevant social card metadata where useful.

## **24.2 Homepage metadata**

Suggested title:

**Prince Ishimwe — Designer & Frontend Developer**

Suggested description:

“A Rwanda-based designer and frontend developer creating thoughtful websites and digital experiences for businesses and brands.”

## **24.3 Case-study metadata**

Each route should identify its actual project.

For example:

**Café Bliss — Website Concept | Prince Ishimwe**

Equivalent titles for IMIZI and Quad.

Descriptions must accurately represent concept/product status.

## **24.4 Canonical URLs**

Use the actual deployed public domain.

Do not invent a production domain.

## **24.5 Social images**

Prepare authentic, well-composed sharing images.

Suggested dimensions:

1200 × 630\.

The image should use genuine project imagery or a truthful graphic composition based on the portfolio design system.

## **24.6 Absolute URLs**

Use absolute production URLs for Open Graph images and canonical metadata where required.

## **24.7 HTML verification**

Inspect production HTML as fetched without executing JavaScript.

Verify that the correct metadata exists in the served document for all four paths.

## **24.8 WhatsApp previews**

Test representative shared links where possible.

Do not claim guaranteed preview behavior without verification.

Social platforms may cache previews.

## **24.9 Semantic content**

The prerendered HTML should contain meaningful headings, text, and project descriptions—not only metadata.

## **24.10 Additional essentials**

* Favicon  
* Robots file  
* Viewport metadata  
* Appropriate image alt text  
* Sitemap if useful  
* No misleading structured data

---

# **25 — Performance Requirements**

## **25.1 Primary concerns**

* Large screenshots  
* Animation library weight  
* Route transitions  
* Layout stability  
* Mobile responsiveness

## **25.2 Image optimization**

Use:

* Efficient image formats  
* Correct dimensions  
* Responsive media where useful  
* Deferred below-the-fold loading  
* Stable aspect ratios

## **25.3 Critical media**

Prioritize media actually required for the visible viewport.

Do not eagerly load every case-study gallery asset on the homepage.

## **25.4 Fonts**

Two families only.

Load necessary weights and styles.

Use fallbacks.

## **25.5 Client JavaScript**

Avoid unnecessary dependencies.

Keep animation logic isolated.

Use route-level loading where appropriate.

## **25.6 GSAP**

Initialize client-side.

Clean up timelines and triggers.

Avoid unnecessary continuous updates.

## **25.7 View Transitions**

Keep page navigation responsive.

Do not delay navigation solely for visual theater.

## **25.8 Layout shift**

Reserve geometry for:

* Hero media  
* Living Frame  
* Case-study screenshots  
* Fonts where practical

## **25.9 Core Web Vitals**

Aim for:

* LCP at or below 2.5 seconds  
* CLS at or below 0.1  
* INP at or below 200ms where measurable

These are targets, not unverified achievement claims.

## **25.10 Measurement integrity**

Only report scores actually measured in a documented environment.

---

# **26 — Accessibility Requirements**

## **26.1 Semantic HTML**

Use correct header, nav, main, section, article, and footer elements.

One primary `h1` per page.

## **26.2 Keyboard navigation**

Every critical interaction must be keyboard accessible.

## **26.3 Skip link**

Provide a skip-to-content action.

## **26.4 Focus**

Visible indicators throughout.

## **26.5 Mobile menu**

Correct open/close semantics and focus behavior.

## **26.6 Reduced motion**

Respect the user's system preference.

## **26.7 Gallery accessibility**

Semantic project articles remain understandable independently of the animated stage.

## **26.8 Shared-media accessibility**

Decorative outgoing/incoming layers must not cause redundant announcements.

## **26.9 Route focus**

Ensure new pages have an understandable focus and reading position.

## **26.10 Images**

Meaningful alt text for informative visuals.

Avoid alt text that redundantly repeats an entire adjacent project description.

## **26.11 Contrast**

Verify text and controls against actual surfaces.

## **26.12 Touch**

Comfortable target size.

No hover-exclusive information.

---

# **27 — Error and Edge Cases**

Codex must explicitly handle:

1. Rapid gallery scrolling.  
2. Reverse gallery scrolling.  
3. Index selection during a transition.  
4. Direct project hash navigation.  
5. Browser Back after case-study navigation.  
6. Initial scroll restoration.  
7. Resize between desktop and mobile.  
8. Short-height desktop.  
9. Reduced-motion preference changes.  
10. Slow images.  
11. Failed images.  
12. Missing Quad authenticated media.  
13. Unsupported browser View Transitions.  
14. Route navigation during GSAP movement.  
15. Direct case-study refresh.  
16. Unknown project slug.  
17. Focus after route navigation.  
18. Open mobile menu during route change.  
19. Hydration mismatch.  
20. Browser-only code executed during prerender.  
21. Missing route-specific metadata.  
22. Incorrect prerender output paths.  
23. Incorrect static-host fallback.  
24. Broken external project URLs.  
25. Unverified WhatsApp or email.  
26. Narrow-screen horizontal overflow.  
27. Hidden content after failed animation initialization.  
28. Duplicate shared-element transition names.  
29. Cached or missing social preview images.  
30. Missing deployment authorization.

---

# **28 — Vercel Deployment Architecture**

## **28.1 Deployment target**

Vercel, when authorized.

## **28.2 Rendering model**

Deploy the statically prerendered React Router application.

No application runtime server is required for the four public content pages.

## **28.3 Output directory**

Verify the actual generated client output.

Expected:

`build/client`

Do not blindly configure `dist`.

## **28.4 Static route files**

Confirm that each required route has a corresponding generated HTML document.

## **28.5 Hosting rules**

Configure deployment routing to serve the correct prerendered HTML for each content path.

Avoid a blanket rewrite that serves the homepage HTML for every case-study URL and defeats route-specific metadata.

## **28.6 Unknown URLs**

Provide appropriate 404 handling where supported by the static host.

## **28.7 Assets**

Ensure screenshots, font files, and static media are served correctly.

## **28.8 Configuration**

Provide:

* Actual domain  
* Real WhatsApp  
* Real email

Do not embed secrets.

## **28.9 Production verification**

Open and verify:

* Homepage  
* Café Bliss  
* IMIZI  
* Quad  
* Direct route refresh  
* Project anchors  
* Live links  
* Contact links

## **28.10 HTML verification**

Check the actual served HTML for unique title, description, and social metadata.

## **28.11 Mobile verification**

Inspect a real or emulated mobile viewport.

## **28.12 Deployment status**

Do not claim public readiness until deployment and critical routes have actually been verified.

---

# **29 — Testing Strategy**

## **29.1 Static checks**

Run:

* TypeScript  
* ESLint  
* Unit tests  
* Production build

## **29.2 Prerender tests**

Verify:

* All four expected HTML outputs exist.  
* All contain meaningful content.  
* Route-specific titles differ.  
* Route-specific descriptions differ appropriately.  
* Canonical paths are correct.  
* Open Graph images are valid paths.  
* The static build completes without browser-global errors.

## **29.3 Hydration tests**

Verify:

* No hydration mismatch.  
* No duplicate rendered gallery.  
* No initial image disappearance.  
* No flash of broken layout.  
* Animation initializes only after client mount.

## **29.4 Routing tests**

Test:

* Homepage  
* Café Bliss  
* IMIZI  
* Quad  
* Unknown route  
* Direct refresh  
* Hash navigation  
* Browser Back  
* Next-project navigation  
* Header links from case studies

## **29.5 Living Frame tests**

Test:

* Correct first project  
* Forward transitions  
* Reverse transitions  
* Rapid-scroll interruption  
* Index synchronization  
* Resize behavior  
* Reduced motion  
* Short-height fallback  
* No empty frame  
* Correct project when restoring scroll position

## **29.6 View Transition tests**

Test:

* Each Explore Project action  
* Correct image correspondence  
* Unique transition names  
* No conflicting GSAP transforms  
* Direct route behavior  
* Browser Back  
* Reduced motion  
* Unsupported-browser fallback

## **29.7 Case-study tests**

Test:

* Correct project text  
* Genuine image assets  
* Correct project category  
* Accurate concept status  
* Working external URLs  
* Correct next-project order  
* Responsive media layouts

## **29.8 Accessibility**

Inspect:

* Keyboard navigation  
* Heading order  
* Focus  
* Menu behavior  
* Color contrast  
* Reduced motion  
* Alt text

## **29.9 Browser viewport coverage**

Test representative sizes:

* 1920 × 1080  
* 1440 × 900  
* 1366 × 768  
* 1280 × 720  
* 1024 × 768  
* 768 × 1024  
* 430 × 932  
* 390 × 844  
* 375 × 812  
* 320 × 700

## **29.10 Social metadata verification**

Fetch each actual production route as HTML.

Do not merely inspect metadata after React executes.

## **29.11 Test reporting**

For every category, report:

* Passed  
* Failed  
* Not run  
* Blocked

Do not claim unexecuted tests passed.

---

# **30 — Visual Review Requirements**

## **30.1 General rule**

Source code is not proof of visual quality.

Inspect actual pages in a browser when tooling permits.

## **30.2 Homepage**

Review:

* Typography  
* Hero spacing  
* Work visibility  
* Header alignment  
* Services  
* About  
* Contact

## **30.3 Living Frame**

Review:

* Stage proportions  
* Image quality  
* Rail readability  
* Active project  
* Atmosphere  
* Motion quality  
* Sticky release  
* Responsive fallback

## **30.4 Café Bliss case study**

Review:

* Hospitality atmosphere  
* Screenshot composition  
* Narrative flow  
* Responsive layout

## **30.5 IMIZI case study**

Review:

* Brand strength  
* Contrast  
* Genuine imagery  
* Page variation

## **30.6 Quad case study**

Review:

* Product interface visibility  
* Screenshot authenticity  
* Readability  
* Technical information hierarchy

## **30.7 Shared transitions**

Review:

* Image correspondence  
* Spatial continuity  
* Timing  
* Smooth settlement  
* Browser Back  
* Reduced motion

## **30.8 Fix process**

Identify the most significant problems first.

Fix them.

Recheck affected viewports.

Avoid endless arbitrary visual tweaking.

---

# **31 — Security and Content Integrity**

## **31.1 No credentials**

Do not commit secrets or private authentication data.

## **31.2 Quad privacy**

Use authorized screenshots.

Do not publish private user content.

## **31.3 External links**

Use appropriate security attributes for links opening new tabs.

## **31.4 Content honesty**

Never invent:

* Clients  
* Testimonials  
* Revenue  
* Conversion figures  
* Users  
* Awards  
* Commercial results

## **31.5 Dependency hygiene**

Use maintained dependencies.

Check for relevant production vulnerabilities.

## **31.6 No unnecessary backend**

The portfolio does not require one.

---

# **32 — Revised Codex Implementation Sequence**

The complete product should be implemented in consecutive checkpoints.

These are execution checkpoints, not optional product phases.

## **Checkpoint A — Foundation and Rendering**

Implement:

* React Router Framework Mode  
* Vite integration  
* TypeScript  
* Tailwind CSS  
* Static prerender configuration  
* Route definitions  
* Shared root layout  
* Basic testing configuration

**Acceptance:**

* Development server works.  
* All routes resolve.  
* Static build generates four content pages.  
* Hydration succeeds.

## **Checkpoint B — Content and Assets**

Implement:

* Typed project records  
* Site configuration  
* Genuine screenshots  
* Supporting case-study imagery  
* Asset provenance  
* Accurate project copy

**Acceptance:**

* Every project has genuine primary media.  
* Case-study content is truthful.  
* Project links are correct.

## **Checkpoint C — Static Homepage**

Implement:

* Navigation  
* Hero  
* Selected Work  
* Project chapters  
* Stacked presentation  
* Services  
* About  
* Contact  
* Footer

**Acceptance:**

* Strong static composition.  
* Responsive layout.  
* All essential links work.

## **Checkpoint D — Complete Case Studies**

Implement:

* Shared case-study system  
* Café Bliss page  
* IMIZI page  
* Quad page  
* Genuine media galleries  
* Project-specific layouts  
* Live links  
* Return and next-project navigation

**Acceptance:**

* All three pages are complete.  
* Routes prerender correctly.  
* Direct navigation works.  
* Visual quality matches Phase 2\.

## **Checkpoint E — Full Living Frame**

Implement:

* CSS-sticky stage  
* Active-project controller  
* Image layers  
* Transitions  
* Atmospheres  
* Index  
* Reverse scrolling  
* Rapid-scroll handling  
* Responsive and reduced-motion fallbacks

**Acceptance:**

* Gallery behaves correctly.  
* Images remain visible.  
* Stage synchronizes with chapters.  
* Native scrolling remains intact.

## **Checkpoint F — Spatial Route Continuity**

Implement:

* React Router View Transitions  
* Matching source/destination images  
* Project-specific transition names  
* GSAP coordination  
* Forward transitions  
* Reliable return behavior  
* Reduced-motion alternative  
* Unsupported-browser fallback

**Acceptance:**

* All three project routes navigate correctly.  
* Shared-image movement works where supported.  
* No duplicate transition identity or animation conflict.

## **Checkpoint G — SEO and Deployment Preparation**

Implement:

* Route metadata  
* Canonical URLs  
* Open Graph images  
* Robots file  
* Favicon  
* Static hosting configuration  
* Build-output verification

**Acceptance:**

* Four prerendered pages have correct metadata.  
* Production output is deployable.

## **Checkpoint H — Art-Direction Refinement**

Refine:

* Typography  
* Image selection and cropping  
* Hero compositions  
* Case-study pacing  
* Gallery geometry  
* Motion timing  
* Mobile layouts

**Acceptance:**

* No generic template appearance.  
* Cohesive visual identity.  
* Authentic imagery is presented effectively.

## **Checkpoint I — Final QA and Launch**

Run:

* Typecheck  
* Lint  
* Unit tests  
* Browser tests  
* Responsive review  
* Accessibility review  
* Metadata inspection  
* Production build  
* Deployment verification, when authorized

**Acceptance:**

* Functional production site.  
* Correct routes.  
* Verified contact links.  
* Genuine media.  
* No critical runtime errors.  
* Honest completion report.

---

# **33 — Launch Priority Policy**

## **33.1 Product target**

The approved target is the complete portfolio.

This includes:

* Homepage  
* Three case studies  
* Full Living Frame  
* Atmospheric transitions  
* Shared-element navigation  
* Mobile layouts  
* Accurate metadata  
* Public deployment

## **33.2 Implementation order**

Build the reliable static experience first.

Then complete case studies and signature functionality.

Then refine, test, and deploy.

## **33.3 Temporary checkpoints**

A functioning static homepage is a valid implementation checkpoint.

It is not the completed product.

## **33.4 Functional fallbacks**

Accepted:

* Crossfade instead of a failing complex mask  
* Normal routing on unsupported browsers  
* Stacked mobile gallery  
* Reduced-motion static behavior

Not accepted:

* Omitting case-study routes  
* Replacing the Living Frame with conventional cards  
* Inventing imagery  
* Shipping broken contact links  
* Ignoring accessibility  
* Hiding missing features in completion reports

## **33.5 Deadline rule**

Do not add unrelated new features.

Do not keep reopening design direction.

Focus on completing the approved product.

---

# **34 — Documentation Deliverables**

## **34.1 README.md**

Include:

* Project overview  
* Technology stack  
* Setup  
* Development scripts  
* Routes  
* Rendering architecture  
* Deployment instructions

## **34.2 IMPLEMENTATION\_STATUS.md**

For each feature:

* Complete  
* Partial  
* Not implemented  
* Blocked

Explain important deviations.

## **34.3 QA\_REPORT.md**

Include:

* Exact commands run  
* Test results  
* Browser checks  
* Responsive checks  
* Accessibility findings  
* Known issues  
* Unexecuted tests

## **34.4 ASSET\_PROVENANCE.md**

Document genuine project imagery and its source.

## **34.5 DEPLOYMENT.md**

Document:

* Build command  
* Prerender configuration  
* Output directory  
* Hosting configuration  
* Actual deployed URL, if any  
* Verified routes  
* Outstanding launch blockers

---

# **35 — Full Acceptance Criteria**

## **A — Rendering**

* React Router Framework Mode configured.  
* Static prerendering configured.  
* Four content routes produce HTML.  
* Route metadata is present before client JavaScript.  
* Hydration succeeds.  
* No unsupported browser globals execute during prerender.

## **B — Architecture**

* Strict TypeScript.  
* Centralized content.  
* Shared layout.  
* Maintainable component structure.  
* Clear animation responsibilities.  
* No unnecessary runtime backend.

## **C — Homepage**

* Correct identity.  
* Editorial hero.  
* Three projects.  
* Services.  
* About.  
* Contact.  
* Footer.  
* Responsive navigation.

## **D — Living Frame**

* Sticky desktop stage.  
* Three project states.  
* Image transformation.  
* Atmosphere transformation.  
* Project index.  
* Reverse scrolling.  
* Rapid scrolling.  
* Direct anchors.  
* Mobile fallback.  
* Reduced motion.

## **E — Case Studies**

* Café Bliss route.  
* IMIZI route.  
* Quad route.  
* Complete editorial structure.  
* Genuine supporting media.  
* Accurate narratives.  
* Live links.  
* Back/next navigation.  
* Direct refresh.

## **F — Route Transitions**

* Correct image matching.  
* Shared-element movement in supported browsers.  
* Stable destination hero.  
* No competing GSAP transforms.  
* Functional browser history.  
* Direct-route support.  
* Reduced-motion fallback.  
* Unsupported-browser fallback.

## **G — Design**

* DM Sans.  
* Instrument Serif.  
* Correct palette.  
* Editorial grid.  
* Strong imagery.  
* Case-study variety.  
* Consistent geometry.  
* Intentional spacing.  
* Deliberate mobile composition.

## **H — SEO and Sharing**

* Homepage metadata.  
* Café Bliss metadata.  
* IMIZI metadata.  
* Quad metadata.  
* Canonical URLs.  
* Social images.  
* Actual HTML inspected.  
* No incorrect generic metadata across all pages.

## **I — Quality**

* Typecheck passes.  
* Lint passes.  
* Unit tests executed.  
* Browser tests executed.  
* Responsive layouts reviewed.  
* Accessibility reviewed.  
* No critical runtime errors.  
* No important broken assets.  
* No horizontal overflow.

## **J — Launch**

* Real contact details configured.  
* Public URL exists.  
* Deployment verified.  
* All case-study routes verified.  
* Project links verified.  
* Contact links verified.  
* Mobile checked.  
* No critical unresolved blockers.

---

# **36 — Final Codex Completion Report**

When finished, report:

## **36.1 What was built**

Summarize the actual completed features.

## **36.2 Route status**

List every working public route.

## **36.3 Rendering**

Confirm which pages were statically prerendered.

## **36.4 Living Frame**

Explain which signature behaviors were implemented.

## **36.5 Case studies**

Explain the completed visual and content scope for each project.

## **36.6 Shared transitions**

Describe actual supported-browser behavior and fallbacks.

## **36.7 Assets**

Identify the real screenshots used and any missing media.

## **36.8 Testing**

Report exact commands and outcomes.

## **36.9 Deployment**

Provide the verified public URL if deployed.

## **36.10 Remaining issues**

Disclose any defects or deferred refinements.

## **36.11 Readiness**

Choose one:

* Ready for outreach  
* Ready after specified minor corrections  
* Not ready due to specified critical blockers

Never claim outreach readiness while contact destinations or production routes remain unverified.

---

# **37 — Locked Technical Decisions**

1. React, TypeScript, and Vite remain the foundation.  
2. React Router Framework Mode is used.  
3. The four content routes are statically prerendered.  
4. Runtime SSR is not required.  
5. No portfolio backend or database is required.  
6. Tailwind CSS 4 and custom CSS implement styling.  
7. GSAP owns within-page animation.  
8. React Router/browser View Transitions own enhanced route continuity.  
9. One animation controller must not conflict with another over the same route-transition geometry.  
10. The desktop Living Frame uses CSS sticky positioning.  
11. Project activation uses discrete reading-region detection.  
12. The visual stage uses controlled image layers.  
13. Native scrolling is preserved.  
14. Project order is Café Bliss → IMIZI → Quad.  
15. All three case-study routes are required.  
16. All three case studies use the Phase 2 editorial layout system.  
17. Shared-element navigation is part of the intended signature experience.  
18. Device/browser fallbacks preserve navigation.  
19. Mobile and short-height screens use stacked project presentations.  
20. Reduced-motion behavior is required.  
21. Content and imagery must be genuine.  
22. Café Bliss and IMIZI remain clearly identified as concepts.  
23. Quad must use genuine authorized application imagery.  
24. Project metadata and content are centralized.  
25. Every content route must have meaningful page-specific HTML.  
26. SEO and social metadata must be verified in generated output.  
27. The production build output must be configured correctly for hosting.  
28. Deployment must be verified rather than assumed.  
29. Contact information must be real.  
30. Automated checks and browser review are required.  
31. The complete portfolio is the intended same-day deliverable.  
32. Advanced interactions must never compromise core functionality.

---

# **38 — Version 1.0 → 1.1 Change Record**

## **38.1 Rendering strategy**

**Previous:** Conventional client-rendered Vite SPA.

**Updated:** React Router Framework Mode with static prerendering of all four content routes.

## **38.2 Repository structure**

**Previous:** Manual SPA-oriented `src/app/router.tsx` architecture.

**Updated:** Framework-compatible application root, route modules, configuration, and prerender build.

## **38.3 Build and deployment**

**Previous:** Assumed standard Vite SPA deployment output.

**Updated:** Verify framework build output and deploy prerendered HTML with correct route handling.

## **38.4 Case-study detail**

**Previous:** General shared case-study template.

**Updated:** Implementation requirements reflect the complete editorial layout system defined in Phase 2 v1.1.

## **38.5 Asset requirements**

**Previous:** Primary images were mandatory, with supporting media less explicitly defined.

**Updated:** Genuine supporting case-study media is part of the complete presentation.

## **38.6 Route transitions**

**Previous:** Correct architectural approach with general shared-element behavior.

**Updated:** Stronger requirements for source/destination identity, uniqueness, browser support, image readiness, and GSAP coordination.

## **38.7 SEO**

**Previous:** Route-specific metadata desired, with an acknowledged client-rendering limitation.

**Updated:** Build-time page-specific HTML and social metadata are required and verified.

## **38.8 Testing**

**Previous:** Strong functional and visual test requirements.

**Updated:** Prerender output, hydration, static metadata, and hosting behavior receive explicit tests.

## **38.9 Scope prioritization**

**Previous:** P0 baseline and P1 intended full experience.

**Updated:** Full experience remains the approved target, while checkpoints describe implementation order rather than optional product scope.

## **38.10 Preserved architecture**

The revision retains:

* React and TypeScript  
* Vite  
* Tailwind  
* GSAP  
* ScrollTrigger  
* CSS-sticky Living Frame  
* Native scrolling  
* Three projects  
* Three case studies  
* Shared-element transitions  
* Project atmospheres  
* Responsive stacked gallery  
* Reduced-motion support  
* Authentic project imagery  
* Direct contact  
* Vercel deployment target  
* Strict testing  
* Accurate completion reporting

---

# **39 — Final Non-Negotiable Instructions**

Read Phases 0, 1, 2, and 3\.

Treat them as one coordinated specification.

Build the complete portfolio.

Preserve the selected visual identity.

Use genuine project media.

Implement all four content routes.

Prerender them correctly.

Build the full Living Frame.

Build all three complete case studies.

Implement shared-element route navigation with appropriate fallbacks.

Preserve native scrolling.

Respect reduced motion.

Avoid animation conflicts.

Test responsive layouts.

Verify actual production HTML and metadata.

Do not invent contact details.

Deploy only through authorized access.

Report actual results.

**Do not stop at scaffolding, a static mockup, or an untested visual prototype.**

The expected result is a functioning, polished, production-ready portfolio.

---

# **40 — Final Engineering Principle**

**Build an editorial exhibition, not a collection of components.**

The rendering architecture makes it accessible and shareable.

The typography establishes identity.

The grid creates discipline.

The projects provide evidence.

The Living Frame establishes the signature.

The case studies provide depth.

The shared-element transitions create continuity.

The contact experience serves the business.

The engineering makes the whole experience feel effortless.

**The final result should be good enough that the portfolio itself becomes the fourth example of our work.**

---

## **Phase 3 Final Decision**

**Phase 3 v1.1 is the authoritative implementation blueprint for the complete portfolio.**

It is aligned with the expanded product scope of Phase 0 v1.1, the full experience architecture of Phase 1 v1.1, and the case-study art direction and motion language of Phase 2 v1.1.