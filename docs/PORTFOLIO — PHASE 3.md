# **PORTFOLIO — PHASE 3**

## **Technical Architecture & Codex Implementation Specification**

**Version:** 1.0  
**Date:** October 8, 2026  
**Project:** Personal Portfolio — The Living Frame  
**Implementation agent:** Codex  
**Launch target:** October 8, 2026  
**Status:** Approved technical direction; ready for implementation  
**Dependencies:** Phase 0 — Product Definition; Phase 1 — Experience Architecture; Phase 2 — Visual Identity & Motion System

---

# **00 — Master Instructions for Codex**

You are acting as the lead frontend engineer and implementation agent for a premium personal portfolio.

Your responsibility is to build, test, refine, and prepare a complete production-ready website from scratch.

**Do not treat this project as a generic developer portfolio.**

It has an established creative direction, experience architecture, design system, business objective, and signature interaction.

The previous phase specifications are authoritative. This document defines how to implement them.

## **00.1 Mission**

Build an exceptionally polished, responsive personal portfolio presenting three projects:

1. Café Bliss  
2. IMIZI Training Club  
3. Quad

The portfolio must showcase design and development ability, establish commercial credibility, and encourage prospective clients to initiate a project conversation.

The defining experience is **The Living Frame**:

An editorial exhibition where project imagery and atmosphere transform within one persistent visual composition, and visitors can enter dedicated case-study pages through spatially continuous transitions.

## **00.2 Expected final result**

A fully functional website containing:

* Editorial homepage  
* Distinctive typographic hero  
* Complete Living Frame gallery  
* Three real project presentations  
* Three dedicated case-study pages  
* Services section  
* About section  
* Contact section  
* Responsive navigation  
* Carefully implemented motion  
* Accurate project imagery  
* Accessible interactions  
* Appropriate SEO and metadata  
* Production deployment configuration  
* Tests and verified production build

The result must feel custom-designed.

It must not resemble a portfolio starter template.

## **00.3 Execution authority**

You may make ordinary engineering decisions that are necessary to implement the documented design.

You must not independently replace major creative decisions.

Specifically, do not:

* Replace The Living Frame with a grid of cards.  
* Replace the editorial typography with a generic tech aesthetic.  
* Invent unrelated visual effects.  
* Introduce a 3D scene.  
* Replace actual project screenshots with unrelated imagery.  
* Remove the three case-study routes for convenience.  
* Substitute placeholder functionality while claiming features are complete.  
* Describe fictional concept projects as paying-client engagements.  
* Ignore mobile or reduced-motion requirements.  
* Declare completion without running validation.

If a feature is technically difficult, investigate and implement the best reliable approach.

If it cannot be completed, preserve the rest of the site and identify the limitation explicitly.

Do not silently remove functionality.

## **00.4 Working method**

Work in consecutive implementation checkpoints.

At each checkpoint:

1. Implement the defined scope.  
2. Run the relevant build and static checks.  
3. Inspect the result in a browser where tooling permits.  
4. Correct problems before proceeding.  
5. Record the outcome accurately.

Do not repeatedly stop for approval on routine engineering choices.

Only request human input for unavailable information that cannot legitimately be inferred, such as actual contact details, authentication, deployment authorization, or inaccessible source material.

## **00.5 The central quality standard**

**The site must look beautifully designed when motion is disabled, feel exceptional when motion is enabled, and remain straightforward for a potential client to use.**

---

# **01 — Product and Business Context**

## **01.1 Purpose**

This is an independent designer/developer portfolio used primarily for acquiring web design and development clients.

The initial target market is Rwanda, particularly:

* Hospitality and tourism businesses  
* Architecture, interiors, furniture, and creative studios  
* Established service and product businesses

The website should also be credible to international clients and creative professionals.

## **01.2 Primary audience**

Business owners and decision-makers.

Many may open the portfolio from a WhatsApp message on a smartphone.

Therefore:

* Mobile quality is essential.  
* The offer must be understandable immediately.  
* Real project imagery should appear early.  
* Visitors must be able to open functional demos.  
* Contact links must be obvious and reliable.

## **01.3 Secondary audience**

Designers, developers, agencies, and potential collaborators.

The technical sophistication should emerge through interaction quality and project presentation.

## **01.4 Working identity**

**Name:** Prince Ishimwe

**Role:** Designer & Frontend Developer

**Location:** Rwanda

This is the current working presentation. Verify the preferred public name before final deployment; do not assume that earlier variations of the full name are authoritative.

## **01.5 Primary positioning**

“I design and develop distinctive, thoughtfully crafted websites for businesses and brands.”

## **01.6 Primary conversion**

**Start a Project**

Preferred destination: the user's actual professional WhatsApp.

Secondary destination: the user's actual professional email.

Neither address has been confirmed in this specification.

Do not invent either one.

## **01.7 Commercial offering**

The website communicates:

1. Business Websites  
2. Custom Digital Experiences  
3. Website Redesigns

Detailed package pricing is intentionally excluded from the portfolio homepage.

The existing commercial offers remain separate.

---

# **02 — Scope and Delivery Definition**

## **02.1 Required pages**

The target build includes five routes:

| Route | Page |
| ----- | ----- |
| `/` | Portfolio homepage |
| `/work/cafe-bliss` | Café Bliss case study |
| `/work/imizi` | IMIZI case study |
| `/work/quad` | Quad case study |
| `*` | Designed 404 page |

All four public content routes must support direct navigation and browser refresh.

## **02.2 Homepage sections**

Exact order:

1. Header  
2. Hero  
3. Selected Work  
4. Services  
5. About  
6. Contact  
7. Footer

No additional filler sections.

## **02.3 Required signature interactions**

A. The Living Frame gallery  
B. Atmospheric transitions between project states  
C. Project index navigation  
D. Shared-element transition into case studies, where supported  
E. Appropriate reverse navigation  
F. Controlled supporting motion throughout the site

## **02.4 Not included**

Do not implement:

* Blog or CMS  
* Authentication  
* User accounts  
* Newsletter system  
* Arbitrary contact form backend  
* Pricing configurator  
* WebGL or Three.js  
* Custom cursor  
* Mandatory introductory loader  
* Horizontal scroll hijacking  
* Complex sound effects  
* Unrelated decorative animation systems  
* Fake client testimonials  
* Invented business results

## **02.5 Launch quality rule**

The complete baseline is mandatory.

Advanced motion must enhance the existing website rather than determine whether it is functional.

The implementation may provide simpler transitions on unsupported browsers or constrained devices, but must preserve all content and navigation.

---

# **03 — Technology Stack**

## **03.1 Core stack**

| Responsibility | Technology |
| ----- | ----- |
| UI | React |
| Language | TypeScript |
| Development/build | Vite |
| Styling | Tailwind CSS 4 \+ custom CSS |
| Client routing | React Router |
| Primary motion | GSAP |
| Scroll-state coordination | GSAP ScrollTrigger |
| React animation integration | `@gsap/react` |
| Route transitions | React Router View Transitions |
| Icons | Lucide React where needed |
| Deployment target | Vercel |
| Browser testing | Playwright |
| Unit testing | Vitest \+ Testing Library |
| Linting | ESLint |
| Formatting | Prettier |

Use supported stable releases compatible with one another.

Verify actual package versions and installation instructions before installing.

Commit the resulting lockfile.

Do not introduce another framework or animation library without a concrete technical reason.

## **03.2 Why React \+ Vite?**

The project is a small, mostly static portfolio with a handful of routes and a highly interactive gallery.

A React SPA is sufficient.

Vite provides a lightweight development and production build workflow.

A larger application framework is not required merely to display a portfolio.

## **03.3 Why Tailwind CSS?**

Tailwind is useful for:

* Responsive layout  
* Spacing  
* Typography utilities  
* Reusable utility patterns  
* Fast implementation

However, Tailwind must not dictate the design.

Use custom CSS for:

* Fluid editorial typography  
* Living Frame geometry  
* Masking  
* Shared-element transition styling  
* Detailed responsive compositions  
* Component-specific visual behavior

Avoid extremely long, unreadable utility strings.

## **03.4 Why GSAP?**

GSAP owns:

* Project image transitions  
* Atmosphere interpolation  
* Scroll-triggered active-state coordination  
* Hero entrance  
* Selected Work introduction  
* Limited section reveals

Use `@gsap/react` for lifecycle management and animation cleanup.

Register required plugins explicitly.

Use the current `gsap.matchMedia()` approach for breakpoint- and motion-sensitive animation setup.

## **03.5 Why React Router View Transitions?**

React Router supports navigation transitions using the browser's View Transition API.

Use this capability to connect the selected homepage project image with its corresponding case-study hero.

This keeps routing behavior standard and reduces the need for a custom page-transition engine.

Use ordinary navigation when the browser does not support the effect.

## **03.6 Avoid overlapping animation ownership**

The architecture has clear responsibilities:

**GSAP:** Animation within a mounted page.

**React Router / View Transitions:** Navigation between pages.

**CSS:** Static layout, responsive behavior, hover and focus feedback, and transition styling.

Do not use GSAP FLIP and native View Transitions simultaneously to control the same element's route transition.

Do not add Framer Motion solely for one additional effect.

## **03.7 External services**

The portfolio must not depend on:

* A database  
* Custom backend  
* Authentication provider  
* Paid CMS  
* Paid animation service

The live project URLs are external destinations, not data APIs.

---

# **04 — Project Initialization**

## **04.1 Repository**

Create a new portfolio implementation in the designated working directory.

Do not overwrite unrelated repositories or modify the existing Quad, Café Bliss, or IMIZI projects.

If the current repository contains an old portfolio, inspect its contents first and preserve or replace files deliberately rather than performing destructive operations blindly.

## **04.2 Initialization**

Use a React \+ TypeScript Vite template.

Install and configure:

* Tailwind CSS through its current Vite integration  
* React Router  
* GSAP and ScrollTrigger  
* `@gsap/react`  
* Lucide React if needed  
* ESLint  
* Prettier  
* Vitest  
* Testing Library  
* Playwright

Only install packages we actually use.

## **04.3 Recommended npm scripts**

Provide scripts equivalent to:

| Script | Action |
| ----- | ----- |
| `dev` | Start local development |
| `build` | Typecheck and create production build |
| `preview` | Preview production build locally |
| `typecheck` | Run TypeScript validation |
| `lint` | Run ESLint |
| `test` | Run unit tests |
| `test:e2e` | Run browser tests |
| `check` | Run typecheck, lint, tests, and build |

The exact implementation may use compatible standard commands.

## **04.4 TypeScript policy**

Enable strict typing.

Avoid `any` unless justified at a narrowly defined integration boundary.

Project data, routes, site configuration, and motion state should have explicit types.

## **04.5 Code quality**

Requirements:

* Clear module responsibilities  
* Readable naming  
* Minimal duplication  
* No unused imports  
* No debug statements in production  
* No dead components  
* No unreferenced design experiments  
* No hidden broken placeholders

---

# **05 — Recommended Repository Structure**

Use a feature-oriented structure.

Recommended layout:

**Root**

* `public/`  
  * `images/`  
    * `projects/`  
      * `cafe-bliss/`  
      * `imizi/`  
      * `quad/`  
  * `favicon.svg`  
  * `og-cover.png`  
  * `robots.txt`  
* `src/`  
  * `app/`  
    * `router.tsx`  
    * `AppLayout.tsx`  
    * `ScrollManager.tsx`  
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
    * `services/`  
      * `ServicesSection.tsx`  
    * `about/`  
      * `AboutSection.tsx`  
    * `contact/`  
      * `ContactSection.tsx`  
    * `case-study/`  
      * `CaseStudyHero.tsx`  
      * `CaseStudyOverview.tsx`  
      * `CaseStudyGallery.tsx`  
      * `CaseStudyNavigation.tsx`  
  * `pages/`  
    * `HomePage.tsx`  
    * `CaseStudyPage.tsx`  
    * `NotFoundPage.tsx`  
  * `content/`  
    * `projects.ts`  
    * `services.ts`  
  * `config/`  
    * `site.ts`  
    * `navigation.ts`  
  * `hooks/`  
    * `useReducedMotion.ts`  
    * other genuinely reusable hooks  
  * `styles/`  
    * `global.css`  
    * `tokens.css`  
    * `typography.css`  
    * `living-frame.css`  
    * `transitions.css`  
  * `test/`  
    * shared test setup  
  * `main.tsx`  
* `tests/`  
  * `e2e/`  
* `README.md`  
* `IMPLEMENTATION_STATUS.md`  
* `QA_REPORT.md`  
* `ASSET_PROVENANCE.md`  
* `DEPLOYMENT.md`  
* `vercel.json`, if necessary  
* `package.json`  
* `tsconfig.json`  
* `vite.config.ts`

This is a recommended structure, not a requirement to create empty files.

Only create components and directories that are meaningfully used.

## **05.1 Separation of concerns**

Content data must not be scattered through animation components.

The visual stage must not determine route URLs.

Case-study pages must not duplicate project metadata manually.

Site identity and contact destinations must be centrally configured.

Styling must not depend on fragile DOM relationships that break whenever copy changes.

## **05.2 Configuration ownership**

`src/config/site.ts` owns:

* Display name  
* Public title  
* Location  
* Contact email  
* WhatsApp destination  
* Canonical site URL  
* Social profile links, if included

`src/content/projects.ts` owns:

* Project metadata  
* Project URLs  
* Summaries  
* Detailed descriptions  
* Feature lists  
* Imagery  
* Case-study content  
* Atmosphere identifiers

---

# **06 — Content Data Model**

## **06.1 Required project type**

Define a TypeScript model with fields equivalent to:

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

## **06.2 Image metadata**

Each project image should include:

* File path  
* Width  
* Height  
* Alternative text  
* Optional focal point  
* Optional fit mode  
* Optional caption  
* Whether the asset is suitable for the Living Frame

Store dimensions when known so that layout space can be reserved.

## **06.3 Project type**

Use explicit distinctions such as:

* `concept`  
* `product`

This should drive accurate public copy.

Do not hide the fictional status of Café Bliss or IMIZI.

## **06.4 Atmosphere type**

Allow only known gallery themes:

* `cafe`  
* `imizi`  
* `quad`

Map these to the locked CSS color tokens.

Avoid arbitrary dynamically generated theme values.

## **06.5 Stable ordering**

The order is:

**Café Bliss → IMIZI → Quad**

Do not reorder based on perceived technical complexity.

## **06.6 Single source of truth**

All of the following must derive from the same project records:

* Desktop gallery  
* Mobile gallery  
* Project index  
* Case-study pages  
* Next/previous project navigation  
* Project URLs  
* Image references  
* Metadata  
* Structured content

This ensures consistent presentation.

---

# **07 — Project Content Requirements**

## **07.1 Café Bliss**

**Name:** Café Bliss  
**Category:** Hospitality / Website Concept  
**Year:** 2026  
**Role:** Design & Development  
**Type:** Independent fictional concept

**Live website:**  
[https\://cafe-bliss-rw.vercel.app](https://cafe-bliss-rw.vercel.app/)

**Repository:**  
[https\://github.com/byishimwe/cafe-bliss](https://github.com/byishimwe/cafe-bliss)

### **Homepage summary**

“A warm, responsive digital experience for a fictional neighborhood café, designed around atmosphere, menu discovery, and intuitive navigation.”

### **Capabilities to present**

* Editorial hospitality design  
* Responsive website  
* Menu browsing and filtering  
* Reservation-oriented interface  
* Accessible interactions  
* Business storytelling

### **Important truthfulness constraint**

Reservation and contact interactions are frontend demonstration flows, not verified production booking infrastructure.

Do not describe them as connected reservation processing.

### **Case-study narrative**

**Concept:** A welcoming café experience that communicates atmosphere and makes essential information approachable.

**Art direction:** Warm neutrals, refined typography, thoughtful photographic presentation.

**Experience:** Menu discovery, navigation, reservation-oriented interaction.

**Implementation:** Lightweight web development with practical accessibility and responsive considerations.

**Outcome:** A functioning fictional business website concept.

Do not claim real business conversions.

## **07.2 IMIZI Training Club**

**Name:** IMIZI Training Club  
**Category:** Fitness / Brand Website Concept  
**Year:** 2026  
**Role:** Design & Development  
**Type:** Independent fictional concept

**Live website:**  
[https\://imizi-training-club.vercel.app](https://imizi-training-club.vercel.app/)

**Repository:**  
[https\://github.com/byishimwe/imizi-training-club](https://github.com/byishimwe/imizi-training-club)

### **Homepage summary**

“A bold digital presence for a fictional strength and conditioning club, connecting identity, classes, memberships, and an intuitive visitor journey.”

### **Capabilities to present**

* Distinctive visual identity  
* Multi-page website architecture  
* Class and schedule presentation  
* Coaches and memberships  
* Responsive navigation  
* Contact and inquiry-oriented interaction

### **Important truthfulness constraint**

The business, coaches, prices, testimonials, and contact details are fictional concept content.

Form interactions must not be represented as connected client acquisition systems unless independently verified.

### **Case-study narrative**

**Concept:** A strength and conditioning brand rooted in confidence and discipline.

**Art direction:** Strong contrast, bold typography, athletic imagery, restrained iron-red emphasis.

**Experience:** Clear navigation between classes, memberships, coaches, and contact.

**Implementation:** Responsive React application with reusable components and structured content.

**Outcome:** A complete functioning fictional business website concept.

## **07.3 Quad**

**Name:** Quad  
**Category:** Digital Product / Web Application  
**Year:** 2026  
**Role:** Describe actual individual contribution accurately  
**Type:** Functional web application

**Live application:**  
[https\://joinquad.vercel.app](https://joinquad.vercel.app/)

**Repository:**  
[https\://github.com/byishimwe/quad](https://github.com/byishimwe/quad)

### **Homepage summary**

“A full-stack student community platform bringing content, profiles, messaging, and real-time interactions into one connected digital experience.”

### **Capabilities to present**

Use actual repository functionality, such as:

* Authentication  
* Community posts  
* Rich content interactions  
* Profiles and relationships  
* Messaging  
* Real-time notifications  
* Responsive product interface  
* Full-stack application architecture

### **Case-study narrative**

**Concept:** A connected digital environment for student communities.

**Product design:** Organizing social interactions, content, messaging, and profiles.

**Experience:** Authentic application screens and meaningful interaction flows.

**Engineering:** React and TypeScript frontend, with backend and real-time architecture described accurately after inspecting the repository.

**Outcome:** A functional application, without invented adoption or user statistics.

### **Critical media requirement**

The primary Quad presentation must show the actual application experience.

A login screen is insufficient.

Use real, authorized internal screenshots, existing repository assets, or an approved demo session.

Do not use private user-generated content or invent a fake authenticated interface.

---

# **08 — Asset Acquisition and Verification**

This step is essential.

Excellent portfolio architecture with weak screenshots will still produce an underwhelming result.

## **08.1 Sources of truth**

Use the existing GitHub repositories and live websites.

For each project:

1. Inspect the repository.  
2. Review its README and available documentation.  
3. Inspect the deployed website or application.  
4. Locate existing approved visual assets.  
5. Capture real screenshots where possible.  
6. Select the strongest compositions.  
7. Optimize them for the portfolio.

## **08.2 Browser capture**

Where browser tooling is available, use it to:

* Open each live website.  
* Inspect desktop layout.  
* Inspect mobile layout.  
* Capture representative screenshots.  
* Verify that the visual actually matches the source project.

Suggested desktop capture sizes:

* 1440 × 900  
* 1366 × 768

Suggested mobile capture sizes:

* 390 × 844  
* 375 × 812

Exact sizes may vary if more suitable compositions are available.

## **08.3 Screenshot selection criteria**

Choose imagery based on:

1. Visual quality  
2. Project recognizability  
3. Legibility  
4. Strength of composition  
5. Fit within the gallery  
6. Authenticity

Avoid selecting screenshots solely because they contain the most features.

## **08.4 Quad authentication limitation**

Do not assume public access to authenticated pages.

If an authenticated image cannot be captured legitimately:

* Inspect repository screenshot assets.  
* Look for authorized demo captures.  
* Check documentation for existing imagery.  
* Request a genuine screenshot if none is available.

Do not invent credentials, bypass access controls, or fabricate internal product visuals.

## **08.5 Image processing**

Where appropriate:

* Resize oversized captures.  
* Produce WebP or AVIF assets.  
* Preserve full-quality originals separately if useful.  
* Avoid aggressive compression.  
* Keep recognizable typography legible.  
* Record dimensions.

## **08.6 Asset provenance**

Create `ASSET_PROVENANCE.md`.

For each primary image, record:

* Associated project  
* Source URL or repository path  
* Whether it is a real screenshot  
* Date captured, if known  
* Any transformations performed  
* Any known limitations

## **08.7 Missing assets**

Do not replace missing real visuals with an unrelated stock photo and present the result as project work.

If a secondary asset is unavailable, simplify the gallery.

If a mandatory primary screenshot is missing, report that as an unresolved launch issue.

---

# **09 — Design Token Implementation**

Implement the visual system established in Phase 2\.

## **09.1 Core colors**

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

## **09.2 Gallery atmospheres**

| Project | Background |
| ----- | ----- |
| Café Bliss | `#E8DED1` |
| IMIZI | `#252624` |
| Quad | `#E1E7E8` |

The actual project screenshot must retain its own original design.

Do not recolor the screenshot.

## **09.3 Typography**

**Primary:** DM Sans  
**Secondary:** Instrument Serif

Use Google Fonts or an appropriately optimized font-loading strategy.

Apply safe fallback stacks.

## **09.4 Hero type**

Desktop target:

* 88–144px responsive range  
* Tight line height  
* Slightly negative tracking  
* DM Sans Medium  
* Instrument Serif Italic for the expressive line

Mobile target:

* Approximately 46–68px  
* Natural line wrapping  
* No horizontal clipping

## **09.5 Body typography**

* 16–18px  
* Comfortable line height  
* Constrained measure  
* Strong hierarchy between body and editorial metadata

## **09.6 Layout grid**

* Desktop: 12-column editorial grid  
* Tablet: 6-column conceptual grid  
* Mobile: 4-column conceptual grid  
* Maximum content width: 1440px  
* Responsive horizontal gutters  
* Consistent left and right alignment

## **09.7 Geometry**

* Predominantly square corners  
* Minimal rounding  
* Thin rules  
* Almost no shadows  
* No glassmorphic surfaces

## **09.8 Design consistency**

Use shared tokens instead of isolated arbitrary values.

However, do not rigidly preserve a token when the browser shows that the visual composition needs careful tuning.

Art direction requires optical adjustment.

---

# **10 — Application Routing**

## **10.1 Routes**

Create a React Router data-router configuration or another documented React Router mode that supports our required View Transition behavior.

Required pages:

* Home  
* Café Bliss  
* IMIZI  
* Quad  
* Not Found

## **10.2 Shared app layout**

The shared layout owns:

* Header  
* Main content outlet  
* Footer  
* Global navigation  
* Route-level scroll behavior  
* Global focus and accessibility concerns

Do not recreate the entire shell independently for each project.

## **10.3 Project lookup**

The case-study route reads the slug and resolves the corresponding project from structured data.

Unknown slugs must display a proper 404 state.

## **10.4 Direct navigation**

Directly opening:

`/work/cafe-bliss`

must load the case study.

The same applies to IMIZI and Quad.

Refresh must work on production hosting.

## **10.5 Scroll behavior**

Normal forward navigation to a new case study begins at its top.

Back navigation should restore the previous scroll position when practical.

Use React Router's supported restoration mechanisms where appropriate rather than building competing custom scroll controllers.

Homepage hash anchors must still work.

## **10.6 Focus management**

After route changes:

* Keyboard focus should move appropriately.  
* The new page heading should be discoverable.  
* Screen-reader users should not remain stranded in a removed navigation context.

Do not move focus in a way that disrupts ordinary pointer navigation unnecessarily.

## **10.7 Error states**

A route error must not result in a blank screen.

Provide a restrained error presentation consistent with the visual system.

---

# **11 — Header Implementation**

## **11.1 Desktop**

Left:

**PRINCE ISHIMWE**

Right:

**Work / Services / About / Start a Project**

## **11.2 Visual specifications**

* Sticky positioning  
* Paper-colored background  
* Approximately 80px height  
* Compact typography  
* Clear alignment  
* Minimal border treatment

## **11.3 Navigation**

On the homepage, section links navigate to anchors.

From a case-study page, those links navigate to homepage anchors.

Example:

`/#work`

## **11.4 Mobile**

Use:

* Wordmark  
* Menu button  
* Compact accessible navigation panel  
* Direct contact destination

Do not create a full experimental menu system.

## **11.5 Mobile interaction**

Required:

* Correct `aria-expanded`  
* Clearly associated menu control  
* Escape closes menu  
* Navigation closes menu  
* Focus remains logical  
* No background interaction trap or unintended scroll lock

## **11.6 Header state**

Any on-scroll border or transparency change should be subtle.

Do not build a complex hide/reveal header mechanism.

---

# **12 — Hero Implementation**

## **12.1 Content**

Main statement:

**Digital experiences**  
**built to be**  
*remembered.*

First two lines: DM Sans.

Final line: Instrument Serif Italic.

## **12.2 Supporting text**

“I design and develop thoughtful websites for businesses and brands — combining strong visual direction, purposeful interaction, and reliable frontend execution.”

## **12.3 Metadata**

Include the professional role and Rwanda-based location without excessive repetition.

## **12.4 CTA**

**Explore Selected Work ↓**

Links to `#work`.

Contact remains available through navigation.

## **12.5 Layout**

Desktop:

* Dominant typography  
* Controlled supporting information  
* Editorial margins  
* Strong whitespace  
* Clear baseline alignments

Mobile:

* Compact and readable  
* Headline remains visually expressive  
* Supporting paragraph follows naturally  
* First project is not excessively far below

## **12.6 Entrance**

Implement a short optional entrance:

* Subtle opacity  
* Small vertical translation  
* Gentle stagger  
* No character-by-character effects

Do not hide the website behind a loading animation.

---

# **13 — The Living Frame: Engineering Architecture**

This is the signature component of the entire portfolio.

Implement it deliberately rather than improvising scroll effects throughout the page.

## **13.1 Structural model**

The Selected Work section contains:

**Work Introduction**

**Work Index**

**Living Frame**

Inside the Living Frame:

**Visual Stage**

**Project Chapters**

Each chapter corresponds to exactly one project.

## **13.2 Desktop behavior**

At supported desktop sizes:

* The visual stage remains sticky.  
* The editorial project rail scrolls naturally.  
* Three project chapters determine the active visual state.  
* The frame geometry remains stable.  
* Imagery changes when the active chapter changes.  
* Atmospheric color changes accompany the imagery.  
* Project information remains readable.

## **13.3 No scroll hijacking**

The browser retains native scrolling.

Do not:

* Force scroll snapping.  
* Trap visitors in the gallery.  
* Take over wheel events.  
* Advance slides instead of scrolling.  
* Require finishing a timeline before leaving the section.

## **13.4 Sticky implementation**

Use CSS `position: sticky` for the visual stage.

Do not combine CSS sticky with a second GSAP pinning system on the same element.

The stage should remain inside the Selected Work section and release naturally when the section ends.

## **13.5 Desktop layout**

Start with:

* Approximately 67% for the visual stage  
* Approximately 40–56px gap  
* Remaining width for information

Use CSS Grid.

Ensure the information rail remains readable.

## **13.6 Frame aspect ratio**

Target:

**16:10**

The frame must not become taller than the usable viewport.

Short-height desktop viewports should switch to the stacked gallery.

## **13.7 Breakpoints**

Default responsive behavior:

* 1100px+ and sufficient height: sticky desktop gallery  
* 768–1099px: stacked gallery  
* Below 768px: stacked mobile gallery  
* Short-height desktop: stacked fallback

Treat roughly 700px as the initial height threshold for the enhanced sticky composition, then verify against actual dimensions.

## **13.8 Baseline-first rendering**

Before enhanced gallery logic initializes, every project must have a complete readable article with its own image.

Once the desktop enhanced stage is ready, hide redundant inline chapter imagery in that layout and display the shared stage.

If enhancement fails, preserve or restore the stacked images.

This prevents missing imagery when the motion layer fails.

## **13.9 Meaningful content**

Each project chapter must contain:

* Project number  
* Category  
* Title  
* Summary  
* Role/year metadata  
* Concept label where applicable  
* Live project link  
* Internal case-study link

The image is not a substitute for semantic content.

---

# **14 — Living Frame State Management**

## **14.1 Active-project type**

Use a typed project slug.

Possible values:

* `cafe-bliss`  
* `imizi`  
* `quad`

## **14.2 Single source of truth**

One active-project identity drives:

* Visual-stage image  
* Atmosphere color  
* Project index highlight  
* Any active metadata styling

Do not create separate independent active states for each visual component.

## **14.3 Initial state**

When the gallery first appears, Café Bliss is active by default.

However, on:

* Direct project anchor navigation  
* Browser scroll restoration  
* Deep linking  
* Initial load in the middle of the page

the visual stage should synchronize with the chapter actually in view.

Do not always reset to Café Bliss after a restored scroll position.

## **14.4 State detection**

Use ScrollTrigger callbacks or a well-defined IntersectionObserver approach.

Preferred behavior:

* Activate the chapter occupying the gallery's central reading region.  
* Update on downward scrolling.  
* Update on upward scrolling.  
* Correct state after resize or restoration.

Avoid unnecessary per-pixel React state updates.

## **14.5 Suggested state transitions**

**Café Bliss → IMIZI**

Warm stage becomes dark and composed.

**IMIZI → Quad**

Dark stage becomes cooler and more structured.

**Quad → IMIZI**

Reverse movement restores IMIZI.

**IMIZI → Café Bliss**

Reverse movement restores Café Bliss.

## **14.6 Rapid scrolling**

When a visitor moves quickly across multiple chapters:

* The latest chapter determines the target.  
* Older transitions are interrupted.  
* The stage never becomes empty.  
* Incoming images do not accumulate indefinitely.  
* The final image matches the chapter in view.

## **14.7 Resize behavior**

If the viewport changes from desktop to mobile:

* Remove desktop-specific observers.  
* Revert GSAP-created styles.  
* Restore stacked imagery.  
* Remove sticky behavior.  
* Preserve normal content access.

If returning to desktop:

* Reinitialize once.  
* Determine the correct active chapter.  
* Avoid duplicated triggers.

## **14.8 Reduced motion**

When reduced motion is requested:

* Do not use long masks or image zooms.  
* Use immediate or very short visual changes.  
* Keep all three projects navigable.  
* Preserve accurate active-project state.

---

# **15 — Living Frame Visual Stage**

## **15.1 Responsibilities**

The stage displays the active project's visual identity.

It owns:

* Image layers  
* Frame color  
* Image composition  
* Visual transitions  
* Controlled motion state

It does not own:

* Project copy  
* URLs  
* Browser navigation  
* Case-study content

## **15.2 Two-layer model**

Use:

1. Current image  
2. Incoming image

The incoming layer can be prepared while the current image remains visible.

After transition, normalize the state.

Do not keep an indefinitely growing stack of images.

## **15.3 Project imagery**

The stage must support per-project:

* Image source  
* `object-fit`  
* `object-position`  
* Background  
* Scale treatment

This is important because a marketing website screenshot and a dense web application screenshot should not be cropped identically.

## **15.4 Image transitions**

Starting choreography:

1. New project becomes active.  
2. Confirm the incoming image is ready.  
3. Prepare incoming image layer.  
4. Begin rectangular mask reveal or clean crossfade.  
5. Transition atmospheric surface.  
6. Apply subtle image scale settling.  
7. Remove obsolete visual layers.

## **15.5 Timing**

Suggested:

* Image reveal: 550ms  
* Background transition: 600ms  
* Index emphasis: 180ms  
* Supporting metadata emphasis: 250ms

## **15.6 Easing**

Use restrained GSAP easing:

* `power2.inOut`  
* `power2.out`

No bounce, elastic, or excessive overshoot.

## **15.7 Image movement**

Target range:

* Initial scale: approximately 1.025  
* Final scale: 1.0

Do not zoom application UI enough to make it unreadable.

## **15.8 Failure fallback**

If masked reveal causes visual artifacts or unacceptable performance, fall back to a layered opacity transition.

Do not replace the entire gallery design with generic cards because one masking effect fails.

---

# **16 — Living Frame Editorial Rail**

## **16.1 Purpose**

The information rail gives context to the imagery.

The rail should feel like a carefully typeset exhibition catalog.

## **16.2 Per-project structure**

Recommended sequence:

**01 / 03**

**HOSPITALITY — CONCEPT WEBSITE**

**Café Bliss**

Short descriptive copy.

**DESIGN & DEVELOPMENT · 2026**

**View Live Website ↗**  
**Explore Project →**

## **16.3 Typography**

* Project number: compact metadata  
* Category: restrained uppercase  
* Title: large display  
* Summary: readable body  
* Technical details: secondary  
* Actions: clearly interactive

## **16.4 Chapter activation**

The project should become active when its corresponding information enters the intended reading zone.

Avoid a transition occurring while the next chapter's title is not yet visible.

## **16.5 Spacing**

Chapters need enough height for comfortable reading.

Initial target:

Approximately 420–660px minimum per desktop chapter, adjusted responsively.

Do not add vast empty blocks solely to produce prolonged scrolling.

## **16.6 Accessibility**

Every project chapter is a semantic article.

The information must not rely on the stage being understood visually.

The active styling is an enhancement, not the only indicator of project identity.

---

# **17 — Project Index**

## **17.1 Display**

**01 — Café Bliss**  
**02 — IMIZI**  
**03 — Quad**

## **17.2 Behavior**

Each item links to the corresponding project chapter anchor.

Use actual anchor navigation, not a disconnected slideshow controller.

## **17.3 Active state**

Use:

* Stronger text color  
* Small indicator  
* Subtle underline

Avoid moving other navigation items when active state changes.

## **17.4 Route relationship**

The project index controls the homepage's scroll destination only.

The **Explore Project** action opens the case-study route.

These are distinct actions.

## **17.5 Mobile**

A persistent index is not required on mobile.

The three stacked articles must be directly visible through scrolling.

---

# **18 — Mobile Living Frame**

## **18.1 Principle**

**The mobile gallery is an intentionally composed editorial sequence, not a broken desktop pinning effect.**

## **18.2 Structure**

Each project appears as:

1. Number/category  
2. Large authentic image  
3. Project title  
4. Short summary  
5. Role and type  
6. Live website link  
7. Case-study link

## **18.3 Image geometry**

Use a carefully chosen aspect ratio suitable for the actual image.

Typical target:

* 4:3  
* 16:10

Do not make dense Quad UI unreadable by forcing an excessively narrow crop.

## **18.4 Motion**

Use:

* Gentle reveals  
* Small opacity changes  
* Limited image motion

No prolonged pinned scroll choreography.

## **18.5 Touch interaction**

All information and links remain visible without hover.

Tap targets must be comfortably sized.

## **18.6 Performance**

Avoid loading the full desktop animation infrastructure if it is unnecessary for the mobile presentation.

---

# **19 — Case-Study Pages**

All three projects receive dedicated case-study pages.

Use one reusable case-study template with project-specific content.

## **19.1 Page layout**

Each case study follows this order:

1. Shared header  
2. Case-study hero  
3. Project overview  
4. Design direction  
5. Experience and key features  
6. Selected screenshots  
7. Implementation highlights  
8. Closing actions  
9. Next project navigation  
10. Footer

## **19.2 Case-study hero**

Required:

* Project number  
* Project category  
* Project title  
* Brief overview  
* Project type  
* Role/year  
* Prominent real screenshot  
* Visit live website link

The selected homepage image should visually correspond to the case-study hero.

## **19.3 Project overview**

Explain:

* What the project is  
* Its purpose  
* Who it was designed for conceptually  
* What experience it demonstrates

Do not invent commissioned-client context.

## **19.4 Design direction**

Use a project-specific composition.

Explain:

* Visual character  
* Typography  
* Color  
* Imagery  
* Hierarchy  
* Brand expression

Do not turn this into generic sentences that could describe any project.

## **19.5 Experience section**

Show actual user-facing features.

Use meaningful screenshots and concise descriptions.

For Café Bliss, emphasize menu discovery and hospitality information.

For IMIZI, emphasize classes, memberships, and navigation.

For Quad, emphasize product interaction and application complexity.

## **19.6 Screenshot gallery**

Include genuine supporting images.

Allow layouts such as:

* Large full-width image  
* Two-column image pairing  
* Mobile screenshot composition  
* Close-up detail

Use the appropriate composition for each project's real assets.

Do not force identical image galleries where the content differs.

## **19.7 Implementation section**

Describe actual development choices.

Technical details should explain meaningful decisions rather than list every dependency.

## **19.8 Closing actions**

Required:

**Visit Live Website ↗**

**Back to Selected Work ←**

Optional:

**View Repository ↗**

Repository links should be secondary to the live website.

## **19.9 Next project**

Use:

Café Bliss → IMIZI → Quad

At the end of Quad, the navigation may return to Café Bliss or Selected Work.

## **19.10 Editorial consistency**

Case-study pages should use the same:

* Typography  
* Grid  
* Metadata treatment  
* Image-boundary geometry  
* Navigation  
* Link styling  
* Spacing rhythm

They may vary in imagery and atmospheric emphasis.

They should not look like three unrelated website templates.

---

# **20 — Shared-Element Route Transition**

This is the second major component of the signature experience.

## **20.1 Objective**

Clicking **Explore Project** should feel like entering the project currently shown in The Living Frame.

The transition preserves visual continuity between the homepage frame and the case-study hero.

## **20.2 Preferred technology**

Use React Router's supported View Transition navigation.

Use the browser View Transition API through the router's documented interface.

Do not build a completely separate SPA routing system.

## **20.3 Source element**

The source is the selected project's active image presentation.

The clicked project should be the same project currently displayed.

## **20.4 Destination element**

The destination is the corresponding case-study hero image.

The two elements should share the same underlying image or visually equivalent compositions.

## **20.5 Transition choreography**

Intended sequence:

1. Visitor activates Explore Project.  
2. Normal navigation begins.  
3. The source image becomes the shared visual anchor.  
4. Secondary homepage information recedes.  
5. The image scales/repositions to the case-study hero geometry.  
6. The destination title and project information appear.  
7. The page settles into a normal reading state.

## **20.6 Transition names**

Use stable, project-specific transition identifiers.

Example conceptual naming:

* `project-cafe-bliss-media`  
* `project-imizi-media`  
* `project-quad-media`

Do not apply the same active transition name to multiple simultaneously rendered elements in one document.

The selected image should be the transition source.

## **20.7 React Router integration**

Use supported route links with view transitions enabled.

Where needed, use route transition state to apply the appropriate image transition name only during relevant navigation.

Do not assume every browser implements the API identically.

## **20.8 Coordination with GSAP**

Before the route transition:

* Ensure the active gallery image is stable.  
* Avoid competing transforms.  
* Avoid leaving stale GSAP-applied styles on the transition source.

While navigation is occurring, GSAP must not independently transform the same image geometry.

## **20.9 Direct route navigation**

Opening a case-study URL directly must show the completed page normally.

There is no originating homepage image in this situation.

No transition should be required.

## **20.10 Browser back**

Where supported and reliable, returning to the homepage should provide a coherent reverse transition.

If the originating frame geometry cannot be restored correctly, use a simple route transition and restore scroll position.

Do not fake a reverse transition that moves the image toward the wrong project.

## **20.11 Unsupported browsers**

Normal React Router navigation must continue working.

A clean crossfade or immediate page change is acceptable.

## **20.12 Reduced motion**

Disable spatial zoom and significant scale movement.

Navigate directly or use a minimal fade.

## **20.13 Success condition**

The transition feels like the same visual object moving into a new composition.

It must not simply fade the entire page to black and reveal another page.

## **20.14 Reliability priority**

If the shared-element effect introduces route bugs, focus problems, or broken browser history, simplify the effect while preserving proper routing.

The route behavior must always remain correct.

---

# **21 — Services Section**

## **21.1 Structure**

Label:

**02 / SERVICES**

Heading:

**What I do.**

Three editorial rows.

## **21.2 Services**

### **Business Websites**

Clear, polished websites that help businesses establish credibility, present their services, and make it easier for customers to connect.

### **Custom Digital Experiences**

Distinctive websites that combine strong visual direction with thoughtful interaction and tailored frontend development.

### **Website Redesigns**

Transforming outdated websites into more coherent, modern, responsive, and effective digital experiences.

## **21.3 Layout**

Desktop:

* Numbered rows  
* Fine dividing lines  
* Large service title  
* Narrow explanatory text

Mobile:

* Stacked rows  
* Clear separation  
* Readable descriptions

## **21.4 Styling**

Do not implement generic icon cards.

Use editorial alignment and typography.

## **21.5 Motion**

Subtle section introduction only.

---

# **22 — About Section**

## **22.1 Structure**

Label:

**03 / ABOUT**

Heading:

**A little about me.**

## **22.2 Working introduction**

“I'm an independent designer and frontend developer based in Rwanda. I enjoy bringing together visual design and engineering to create websites that feel thoughtful, purposeful, and carefully built.”

## **22.3 Supporting approach**

Communicate a practical approach to:

* Understanding business needs  
* Developing clear visual direction  
* Designing useful interactions  
* Building reliable websites

## **22.4 Layout**

Typography-led composition.

Do not invent a portrait.

Do not add a giant technology icon wall.

## **22.5 Optional skills treatment**

A restrained line is acceptable:

`DESIGN · FRONTEND DEVELOPMENT · INTERACTION · RESPONSIVE SYSTEMS`

---

# **23 — Contact Section**

## **23.1 Heading**

**Have something worth building?**

## **23.2 Supporting message**

“Have a website in mind, or an existing one that needs a new direction? I'd love to hear about it.”

## **23.3 Primary action**

**Start a Project ↗**

Use the verified professional WhatsApp link.

## **23.4 Secondary action**

**Send an Email ↗**

Use the verified email address.

## **23.5 Required configuration**

Contact details must be centralized in site configuration.

Do not scatter them across components.

Do not hardcode fake numbers or addresses.

## **23.6 Missing details**

If actual values have not been supplied:

* Record them as required inputs.  
* Do not claim the contact links are functional.  
* Do not publish fake destinations.  
* Resolve them before declaring the site outreach-ready.

## **23.7 Design**

Large typography.

Warm paper background.

Minimal interaction.

The site should end confidently rather than with a generic form.

---

# **24 — Visual and Motion Polish**

## **24.1 Global motion hierarchy**

**Level 1:** Living Frame  
**Level 2:** Route transitions and frame entrance  
**Level 3:** Section reveals  
**Level 4:** Link and button responses

## **24.2 Hero entrance**

Short, restrained, nonblocking.

## **24.3 Section reveals**

Small opacity and vertical movement.

Do not animate every individual paragraph independently.

## **24.4 Links**

Use consistent:

* Underline  
* Arrow  
* Focus state  
* Hover response

## **24.5 Image hover**

Small controlled scale change where suitable.

No exaggerated magnification.

## **24.6 Reduced motion**

Every motion system must honor reduced-motion preferences.

## **24.7 Cleanup**

Use GSAP's supported React lifecycle integration.

Kill or revert:

* Timelines  
* Scroll triggers  
* Media-query-specific animations  
* Temporary styles  
* Event listeners

Never let route navigation create duplicated triggers.

---

# **25 — Responsive Implementation**

## **25.1 Target viewport coverage**

Test at minimum:

| Width × Height | Purpose |
| ----- | ----- |
| 1920 × 1080 | Large desktop |
| 1440 × 900 | Standard desktop |
| 1366 × 768 | Laptop |
| 1280 × 720 | Shorter desktop |
| 1024 × 768 | Tablet landscape |
| 768 × 1024 | Tablet portrait |
| 430 × 932 | Large mobile |
| 390 × 844 | Common mobile |
| 375 × 812 | Compact mobile |
| 320 × 700 | Narrow-screen edge case |

## **25.2 No horizontal overflow**

All pages must remain within the viewport.

Pay special attention to:

* Hero headline  
* IMIZI title  
* Sticky gallery  
* Case-study large imagery  
* Contact heading  
* Navigation

## **25.3 Responsive visual hierarchy**

Mobile is not simply smaller desktop.

Recompose layouts deliberately.

## **25.4 Content integrity**

Do not remove important project information just because a layout is narrow.

## **25.5 Motion simplification**

Use simpler behavior on mobile and short-height displays.

The visual quality must remain high even with less motion.

---

# **26 — Accessibility Requirements**

## **26.1 Semantic HTML**

Use:

* Header  
* Navigation  
* Main  
* Section  
* Article  
* Footer  
* Logical headings

One primary `h1` per page.

## **26.2 Skip navigation**

Provide a keyboard-accessible skip-to-content link.

## **26.3 Keyboard interaction**

Test:

* Header navigation  
* Mobile menu  
* Project index  
* Live project links  
* Case-study links  
* Contact actions  
* Back navigation

## **26.4 Focus states**

Visible focus indicators.

Do not remove outlines without adequate replacement.

## **26.5 Color contrast**

Verify normal text, large text, and relevant UI indicators.

Adjust muted colors if they fail contrast requirements.

## **26.6 Images**

Use meaningful alt text for informative screenshots.

Avoid duplicative announcements from inactive transition layers.

## **26.7 Reduced motion**

Respect system preferences.

Do not create essential information that exists only in animated states.

## **26.8 Touch**

Comfortable targets.

No hover-only controls.

## **26.9 Route accessibility**

Navigation to a new case-study page should provide an understandable focus and reading position.

## **26.10 Animation failure**

The semantic site remains usable when motion initialization fails.

---

# **27 — Performance Requirements**

## **27.1 Priority**

Large images and animations must not make the portfolio slow or unstable.

## **27.2 Images**

* Appropriate dimensions  
* Responsive sources when beneficial  
* Efficient formats  
* Reserved aspect ratios  
* Lazy loading of below-the-fold assets  
* No enormous uncompressed captures

## **27.3 Fonts**

* Only the two selected families  
* Limited required weights  
* Suitable fallback fonts  
* No invisible page while loading fonts

## **27.4 JavaScript**

Avoid unnecessary dependencies.

Keep animation code isolated.

Do not load large libraries for small effects that CSS can handle.

## **27.5 Animation**

Prioritize transform and opacity.

Avoid expensive large-area blur and continuously changing layout properties.

## **27.6 Layout stability**

Reserve space for gallery and case-study imagery.

Avoid significant content jumps as images load.

## **27.7 Performance evaluation**

Measure actual performance using suitable browser tooling.

Aim toward strong Core Web Vitals:

* LCP at or below 2.5 seconds under representative conditions  
* CLS at or below 0.1  
* INP at or below 200ms where properly measurable

These are targets to validate, not scores to claim without testing.

## **27.8 Testing integrity**

Do not report Lighthouse or performance scores unless they were actually measured.

Document the environment used for any reported numbers.

---

# **28 — SEO and Sharing Metadata**

## **28.1 Homepage title**

Suggested:

**Prince Ishimwe — Designer & Frontend Developer**

## **28.2 Homepage description**

“A Rwanda-based designer and frontend developer creating thoughtful websites and digital experiences for businesses and brands.”

## **28.3 Case-study metadata**

Each project should have a distinct:

* Page title  
* Description  
* Canonical URL  
* Appropriate social-sharing information

## **28.4 Social preview**

Create one high-quality, authentic portfolio social-sharing image.

Recommended size:

1200 × 630\.

It should reflect the portfolio's visual identity.

Do not use random decorative stock imagery.

## **28.5 SPA metadata limitation**

Because this is initially a client-rendered Vite application, changing metadata after JavaScript runs does not guarantee accurate previews for every social crawler.

The homepage must have reliable static initial Open Graph metadata in the served HTML.

For reliable per-case-study social previews, add route-specific prerendering or another proven static-HTML solution if necessary.

Do not claim that dynamically rendered metadata alone guarantees WhatsApp previews.

## **28.6 Additional essentials**

* Favicon  
* Robots file  
* Appropriate viewport meta  
* Canonical site URL  
* Semantic headings  
* Useful image alt text  
* No misleading structured data

---

# **29 — Testing Strategy**

Codex must test the implementation, not merely inspect source code.

## **29.1 Static checks**

Run:

* TypeScript checking  
* ESLint  
* Unit tests  
* Production build

All must pass before completion.

## **29.2 Routing tests**

Verify:

* Homepage loads.  
* Café Bliss case study loads.  
* IMIZI case study loads.  
* Quad case study loads.  
* Unknown route displays 404\.  
* Direct case-study refresh works.  
* Back navigation works.  
* Header section links work from case-study pages.

## **29.3 Project integrity tests**

Verify:

* Correct project order  
* Correct titles  
* Correct live URLs  
* Correct project types  
* Working screenshots  
* No fabricated claims

## **29.4 Living Frame tests**

Verify:

1. Café Bliss is initially active.  
2. Scrolling to IMIZI activates IMIZI.  
3. Scrolling to Quad activates Quad.  
4. Scrolling upward reverses correctly.  
5. Rapid scrolling settles on the correct project.  
6. Project index links target the correct chapter.  
7. Resizing does not duplicate triggers.  
8. Short-height layouts simplify correctly.  
9. Reduced motion removes the complex animation.  
10. Images never disappear into a blank frame.

## **29.5 Case-study transition tests**

Verify:

* Explore Project opens the matching route.  
* The correct image is used.  
* Browser history works.  
* Unsupported-browser fallback works.  
* Reduced-motion fallback works.  
* Direct route opening works without transition state.  
* Source and destination do not have conflicting transition identifiers.

## **29.6 Accessibility tests**

Use automated checks where available, but also inspect:

* Keyboard focus  
* Menu behavior  
* Heading order  
* Image alternatives  
* Color contrast  
* Reduced-motion behavior

## **29.7 Mobile tests**

Inspect screenshots.

Check:

* Actual composition  
* Typography  
* Project image crops  
* Text width  
* Touch targets  
* Navigation  
* Contact section  
* Horizontal overflow

## **29.8 Console and runtime**

No unhandled runtime exceptions.

No repeated effect initialization warnings.

No persistent broken asset requests.

No React key warnings or serious hydration-related issues.

## **29.9 Performance**

Use browser profiling or Lighthouse where available.

Investigate unnecessary image weight and layout shifts.

## **29.10 Honest test reporting**

For each test category, record:

* Passed  
* Failed  
* Not run  
* Blocked

Do not describe unexecuted tests as successful.

---

# **30 — Visual Review Requirements**

Source code is not sufficient evidence of visual quality.

Codex should inspect actual rendered screenshots where browser tooling permits.

## **30.1 Hero review**

Check:

* Typography scale  
* Natural line breaks  
* Serif accent  
* Spacing  
* Supporting paragraph placement  
* Above-the-fold clarity

## **30.2 Living Frame review**

Check:

* Dominant image  
* Correct proportions  
* Readable rail  
* Frame placement  
* Cropping  
* Alignment  
* Atmosphere  
* Active project correctness

## **30.3 Case-study review**

Check:

* Image quality  
* Visual hierarchy  
* Consistency  
* Text density  
* Layout variation  
* Authentic screenshots  
* Navigational continuity

## **30.4 Mobile review**

Check that the site still feels deliberately art-directed.

Avoid an appearance where every component has simply been placed in a generic centered column.

## **30.5 Iteration policy**

After each visual inspection:

1. Identify the most significant defects.  
2. Fix them.  
3. Re-run relevant checks.  
4. Reinspect the affected viewports.

Do not perform endless arbitrary visual tweaks.

Prioritize problems with the greatest impact on perceived quality and usability.

---

# **31 — Security and Integrity**

## **31.1 No secrets**

Do not commit:

* API tokens  
* Account passwords  
* Browser session cookies  
* Private credentials  
* Deployment secrets

## **31.2 Authenticated project images**

Any Quad authenticated screenshot must be authorized and safe to publish.

## **31.3 External links**

Use appropriate security attributes when opening links in new tabs.

## **31.4 Input handling**

The portfolio does not require a custom form or backend.

Avoid introducing unnecessary input-processing complexity.

## **31.5 Claims**

Never invent:

* Clients  
* Revenue  
* Conversion improvements  
* User numbers  
* Testimonials  
* Awards

## **31.6 Dependency hygiene**

Use maintained packages.

Check for relevant production dependency vulnerabilities.

Do not add unnecessary dependencies to implement simple features.

---

# **32 — Vercel Deployment Architecture**

## **32.1 Target**

Deploy to Vercel if the environment is authorized and configured to do so.

## **32.2 SPA routing**

Ensure direct navigation to client-side routes works.

Configure the hosting fallback correctly.

Do not let the fallback interfere with real static assets.

## **32.3 Build settings**

Production build must succeed.

Use the correct output directory, normally Vite's `dist`.

## **32.4 Environment configuration**

Provide the appropriate canonical domain and contact values before public launch.

Do not embed private deployment credentials in source files.

## **32.5 Domain**

Use the supplied custom domain if available.

Otherwise, use the actual deployment URL.

Do not invent a domain in metadata or documentation.

## **32.6 Deployment verification**

After deployment:

* Open the homepage.  
* Open every case-study route directly.  
* Refresh every case-study route.  
* Verify primary images.  
* Verify external project links.  
* Verify contact links.  
* Inspect the mobile viewport.  
* Check for production console errors.

## **32.7 Deployment blockers**

Report unresolved issues explicitly.

Examples:

* No deployment authorization  
* Unverified contact destination  
* Missing mandatory project media  
* Failing production build

Do not mark the site outreach-ready while those blockers remain.

---

# **33 — Codex Implementation Sequence**

Implement the website in the following checkpoints.

These are execution stages, not separate creative concepts.

## **Checkpoint A — Repository and foundation**

Tasks:

1. Initialize project.  
2. Configure TypeScript.  
3. Configure Vite.  
4. Configure Tailwind.  
5. Install essential dependencies.  
6. Configure routing.  
7. Create the global design tokens.  
8. Create application layout.  
9. Configure linting and testing.

**Acceptance:**

* App starts.  
* Routes resolve.  
* Build succeeds.  
* Shared styling loads.

## **Checkpoint B — Content and assets**

Tasks:

1. Create typed project data.  
2. Inspect source repositories.  
3. Verify live project links.  
4. Acquire genuine imagery.  
5. Optimize screenshots.  
6. Write accurate descriptions.  
7. Create project media metadata.  
8. Record provenance.

**Acceptance:**

* Every project has accurate content.  
* Every project has a genuine primary image.  
* No fabricated information.

## **Checkpoint C — Static homepage**

Tasks:

1. Header  
2. Hero  
3. Selected Work structure  
4. Project chapters  
5. Stacked gallery fallback  
6. Services  
7. About  
8. Contact  
9. Footer

**Acceptance:**

* Beautiful static composition.  
* Complete content.  
* Responsive layout.  
* Functional navigation.  
* No advanced-motion dependency.

## **Checkpoint D — Case-study pages**

Tasks:

1. Reusable case-study template.  
2. Café Bliss content.  
3. IMIZI content.  
4. Quad content.  
5. Image galleries.  
6. Live project links.  
7. Back/next navigation.  
8. Route-specific metadata.

**Acceptance:**

* All three routes function.  
* Case studies feel like part of the same portfolio.  
* Content accurately represents each project.  
* Direct navigation works.

## **Checkpoint E — Living Frame**

Tasks:

1. Build persistent visual stage.  
2. Implement active project detection.  
3. Implement image layers.  
4. Implement transitions.  
5. Implement atmosphere changes.  
6. Add project index.  
7. Handle reverse and rapid scrolling.  
8. Implement responsive and reduced-motion fallbacks.

**Acceptance:**

* One recognizable changing frame.  
* Correct project synchronization.  
* No blank visual states.  
* Natural scrolling preserved.  
* Mobile remains excellent.

## **Checkpoint F — Shared route transitions**

Tasks:

1. Enable router-based View Transitions.  
2. Define matching project image identifiers.  
3. Connect homepage image and case-study hero.  
4. Style spatial continuity.  
5. Handle unsupported browsers.  
6. Handle reduced motion.  
7. Verify browser back and direct routes.

**Acceptance:**

* Correct route navigation.  
* Shared-image continuity where supported.  
* Clean fallbacks everywhere else.  
* No competing GSAP transforms.

## **Checkpoint G — Final art direction**

Tasks:

1. Tune hero typography.  
2. Improve visual spacing.  
3. Refine screenshot cropping.  
4. Refine gallery transitions.  
5. Refine project compositions.  
6. Polish links and navigation.  
7. Verify consistency across routes.

**Acceptance:**

* No generic template appearance.  
* Clear visual hierarchy.  
* Cohesive editorial identity.  
* Motion complements the work.

## **Checkpoint H — QA and deployment**

Tasks:

1. Typecheck.  
2. Lint.  
3. Unit tests.  
4. End-to-end tests.  
5. Browser screenshots.  
6. Responsive review.  
7. Accessibility review.  
8. Production build.  
9. Deploy if authorized.  
10. Verify public routes and links.

**Acceptance:**

* Working deployment.  
* Verified functionality.  
* Honest test report.  
* No unresolved critical launch blockers.

---

# **34 — Priority Policy Under Time Pressure**

The launch target remains today.

The goal is to complete the whole experience.

However, reliability matters more than pretending everything is finished.

## **P0 — Absolute requirements**

* Functioning website  
* Correct positioning  
* High-quality visual system  
* Authentic project imagery  
* Three project presentations  
* Working project links  
* Responsive layout  
* Services/about/contact  
* Accurate identity  
* Working contact destinations  
* Public deployment  
* No critical errors

## **P1 — Full intended experience**

* Three dedicated case studies  
* Sticky desktop Living Frame  
* Atmospheric transitions  
* Project index  
* Refined responsive motion  
* Route-level continuity  
* Additional supporting project media

## **P2 — Refinements**

* Highly elaborate masking  
* Intricate cinematic staging  
* Secondary decorative motion  
* Advanced nonessential visual polish

## **Cutting rule**

If a tradeoff becomes unavoidable, simplify animation complexity before sacrificing basic function, mobile quality, accessibility, truthful content, or deployment reliability.

Do not remove a feature and conceal that decision.

Document deferred scope.

---

# **35 — Required Project Documentation**

Codex must leave the project understandable after implementation.

## **35.1 README.md**

Include:

* Project overview  
* Technology stack  
* Setup  
* Scripts  
* Routes  
* Basic architectural explanation  
* Deployment notes

## **35.2 IMPLEMENTATION\_STATUS.md**

For each major feature:

* Complete  
* Partial  
* Not implemented  
* Blocked

Explain significant deviations from this specification.

## **35.3 QA\_REPORT.md**

Record:

* Static checks  
* Unit test results  
* Browser tests  
* Responsive checks  
* Accessibility checks  
* Known issues  
* Tests not executed

Do not invent successful test results.

## **35.4 ASSET\_PROVENANCE.md**

Record the origin and authenticity of project imagery.

## **35.5 DEPLOYMENT.md**

Document:

* Build command  
* Output directory  
* Hosting configuration  
* Environment/configuration requirements  
* Production URL, if actually deployed  
* Remaining launch blockers, if any

---

# **36 — Acceptance Criteria**

The complete Phase 3 implementation should satisfy the following.

## **A. Architecture**

* Correct React/TypeScript application  
* Clean project structure  
* Typed content model  
* Central site configuration  
* Reusable components  
* Appropriate routing  
* No unnecessary dependencies

## **B. Homepage**

* Correct identity  
* Editorial hero  
* Work section with three projects  
* Services  
* About  
* Contact  
* Footer  
* Responsive navigation

## **C. Living Frame**

* Persistent desktop visual stage  
* Three project states  
* Atmosphere changes  
* Smooth image transitions  
* Project index navigation  
* Reverse scrolling  
* Rapid-scroll interruption  
* Correct direct-anchor initialization  
* Stable resizing  
* Mobile fallback  
* Reduced-motion fallback

## **D. Case studies**

* Café Bliss route  
* IMIZI route  
* Quad route  
* Accurate project narratives  
* Genuine imagery  
* Correct concept labels  
* Working live links  
* Next/back navigation  
* Direct refresh support

## **E. Shared transitions**

* Corresponding source/destination images  
* Working route navigation  
* Spatial continuity on supported browsers  
* Reduced-motion behavior  
* Unsupported-browser fallback  
* No duplicate transition names  
* No conflicting animation controllers

## **F. Visual design**

* DM Sans \+ Instrument Serif  
* Correct neutral palette  
* Consistent editorial grid  
* Strong visual hierarchy  
* High-quality screenshot composition  
* Purposeful whitespace  
* Coherent case-study layouts  
* No generic project-card replacement

## **G. Quality**

* Typecheck passes  
* Lint passes  
* Tests run and results documented  
* Production build succeeds  
* Mobile layouts inspected  
* Accessibility issues reviewed  
* No obvious horizontal overflow  
* No broken routes  
* No broken primary assets  
* No critical runtime errors

## **H. Launch**

* Real contact details configured  
* Public URL verified  
* Homepage verified  
* All three project routes verified  
* Live project links verified  
* Contact links verified  
* Mobile experience verified  
* No unresolved critical blockers

---

# **37 — Final Codex Completion Report**

When implementation is complete, provide a concise but factual report containing:

**1\. What was built**

Summarize the completed website and its principal features.

**2\. Routes**

List every working route.

**3\. Signature interactions**

Describe what was actually implemented for The Living Frame and route transitions.

**4\. Visual assets**

Identify which screenshots were used and whether any requested images were unavailable.

**5\. Validation**

Report exact commands executed and results.

**6\. Deployment**

Provide the actual URL if a deployment was completed and verified.

**7\. Remaining issues**

List unresolved defects, limitations, unavailable information, or deferred enhancements.

**8\. Readiness**

State one of:

* Ready for outreach  
* Ready after specified minor corrections  
* Not ready because of specified critical blockers

Do not claim outreach readiness without verified contact details and a working public deployment.

---

# **38 — Final Non-Negotiable Instructions**

Read and preserve every meaningful decision from Phases 0, 1, and 2\.

Build from scratch using the defined visual direction.

Avoid conventional developer-portfolio patterns.

Do not simplify The Living Frame into an ordinary card grid.

Use real project imagery.

Keep all claims accurate.

Create complete case studies.

Respect responsive behavior.

Respect reduced-motion preferences.

Preserve native scrolling.

Use one animation system for each distinct responsibility.

Test actual rendered behavior.

Complete the production build.

Deploy only through an authorized environment.

Report the real outcome.

**Do not stop at scaffolding, a component outline, or an untested visual prototype. The expected deliverable is the implemented portfolio.**

---

# **39 — Decisions Locked by Phase 3**

1. React \+ TypeScript \+ Vite is the application foundation.  
2. Tailwind CSS 4 and custom CSS implement the visual system.  
3. React Router owns application routing.  
4. GSAP owns within-page motion.  
5. The browser View Transition mechanism, coordinated through React Router, owns enhanced route continuity.  
6. There are three dedicated project case-study routes.  
7. Project data is defined once and reused.  
8. The desktop Living Frame uses CSS sticky positioning.  
9. Project detection uses discrete scroll activation, not per-pixel React updates.  
10. The stage uses controlled outgoing/incoming image layers.  
11. The gallery preserves native document scrolling.  
12. Mobile and short-height layouts use stacked project presentations.  
13. Reduced-motion behavior is required.  
14. Authentic project screenshots are required.  
15. Café Bliss and IMIZI remain clearly identified as concepts.  
16. Quad's technical claims must be verified against its implementation.  
17. Contact destinations are centrally configured and must be real.  
18. No custom backend, CMS, or unnecessary service infrastructure is introduced.  
19. The implementation must be validated in a browser where tools permit.  
20. A successful build alone does not constitute production readiness.  
21. The entire website must be deployable and ready for outreach.  
22. Advanced visual enhancements must not compromise navigation, accessibility, or reliability.

---

# **40 — Final Engineering Principle**

**Build an editorial exhibition, not a component showcase.**

The framework is infrastructure.

The design system is the language.

The projects are the evidence.

The Living Frame is the signature.

The case studies provide depth.

The contact path serves the business.

The engineering must make all of these parts feel like one deliberate, coherent experience.

**The final result should be good enough that the portfolio itself becomes the fourth example of our work.**