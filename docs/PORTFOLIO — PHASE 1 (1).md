# **PORTFOLIO — PHASE 1**

## **Experience Architecture, Interaction Design & User Flows**

**Version:** 1.1 — Revised and Expanded  
**Date:** October 8, 2026  
**Project:** Personal Portfolio — Independent Creative Practice  
**Signature concept:** The Living Frame  
**Implementation agent:** Codex  
**Launch target:** Complete public launch and beginning client outreach — October 8, 2026  
**Status:** Experience architecture locked for implementation  
**Document role:** Authoritative experience, interaction, navigation, and user-flow specification  
**Dependencies:** Phase 0 v1.1 — Product Definition; Phase 2 — Visual Identity & Motion System; Phase 3 — Technical Architecture & Codex Implementation

---

# **00 — Phase Purpose**

Phase 0 defined **what we are building, who it serves, and why it exists**.

Phase 1 defines **how visitors experience it**.

This document specifies:

* Complete information architecture  
* All public routes  
* Homepage hierarchy  
* Site-wide navigation  
* Hero layout and entrance  
* Selected Work introduction  
* The Living Frame's structural composition  
* Project-specific gallery states  
* Scroll activation and state synchronization  
* Image and atmospheric transition behavior  
* Project discovery and navigation  
* Three complete case-study experiences  
* Shared-element navigation into case studies  
* Browser history and scroll restoration  
* Direct links and refresh behavior  
* Mobile and tablet adaptations  
* Services, About, Contact, and Footer experiences  
* Interaction responsibilities  
* Content architecture  
* Component ownership  
* Progressive enhancement  
* Accessibility and keyboard behavior  
* Motion and performance constraints  
* Failure states and edge cases  
* Codex implementation checkpoints  
* Acceptance criteria  
* Locked architectural decisions

The purpose is to remove fundamental experience-design uncertainty before implementation.

Codex should not need to invent how the principal interactions work.

## **00.1 Guiding principle**

**Every interaction must either reveal the work, improve comprehension, establish meaningful continuity, or help visitors move toward a project conversation.**

An effect without one of those purposes is unnecessary.

## **00.2 Complete-build commitment**

The approved experience includes:

1. A complete editorial homepage.  
2. The full Living Frame gallery.  
3. Three dedicated case-study pages.  
4. Spatially continuous transitions from gallery to case study in supported browsers.  
5. Coherent navigation back into the exhibition.  
6. Deliberately designed desktop, tablet, and mobile experiences.  
7. Accessible, performant fallback behavior.

These are part of the intended product, not optional ideas for an unspecified future release.

The implementation can be completed in successive checkpoints, but those checkpoints must converge on the full experience.

## **00.3 Architectural versus technical responsibilities**

Phase 1 defines:

* The visitor's experience  
* Interaction behavior  
* State relationships  
* Navigation semantics  
* Responsive transformations  
* Failure behavior

Phase 2 defines exact visual design.

Phase 3 defines the technical implementation.

Where this document references React Router, GSAP, ScrollTrigger, or browser View Transitions, those references align the experience with our chosen technical approach.

They should not turn Phase 1 into a duplicate implementation manual.

---

# **01 — Experience Philosophy**

## **1.1 The central idea**

**The portfolio behaves like a curated exhibition.**

The visitor enters through a typographic introduction, explores three distinct projects through a consistent visual frame, enters an individual project to understand it more deeply, and eventually reaches an invitation to collaborate.

The overall experience must feel like one continuous composition.

The homepage is the exhibition.

The case-study pages are individual exhibition rooms.

The Living Frame provides the visual relationship between them.

## **1.2 The two parts of The Living Frame**

### **Part A — Exhibition**

The visitor moves through three projects within one persistent gallery structure.

The frame remains recognizable.

The displayed work, color atmosphere, information emphasis, and subtle motion character change.

### **Part B — Entering a project**

The visitor opens a case study through an action associated with the displayed project.

The project image provides visual continuity into the case-study hero.

The visitor feels as though they moved closer to the work rather than being abruptly transported to an unrelated layout.

These are not two competing signatures.

**They are two expressions of one idea: continuity through framing.**

## **1.3 Four fundamental experience qualities**

### **A. Immediate clarity**

Visitors understand what is offered before interacting with the gallery.

The hero establishes web design and development as the service.

The visual sophistication must never make the offer ambiguous.

### **B. Editorial confidence**

The experience is constructed from:

* Typography  
* Spacing  
* Alignment  
* Image selection  
* Hierarchy  
* Restraint  
* Compositional consistency

Movement adds refinement but cannot compensate for an unconvincing layout.

### **C. Content-led immersion**

Each project changes the gallery's atmosphere.

The visual treatment responds to real differences between the projects.

The project remains the subject.

The portfolio remains the exhibition space.

### **D. Effortless movement**

Visitors can:

* Scroll naturally  
* Navigate to sections  
* Jump directly between projects  
* Open live websites  
* Enter case studies  
* Return to the homepage  
* Use browser history  
* Share direct links  
* Initiate contact

No mandatory introductions, unusual controls, or hidden navigation.

## **1.4 Intended emotional sequence**

**Arrival:** Clarity, confidence, and curiosity.

**Café Bliss:** Warmth, atmosphere, hospitality, and design sensibility.

**IMIZI:** Strength, structure, brand expression, and commercial credibility.

**Quad:** Technical sophistication, interface complexity, and breadth.

**Case-study exploration:** Deeper understanding and confidence in the decisions behind the work.

**Services:** Understanding of what can be commissioned.

**About:** Confidence in the person delivering the work.

**Contact:** A natural invitation to start a conversation.

## **1.5 Two levels of engagement**

The experience must support both quick browsing and deep exploration.

### **Quick browsing**

Visitors may only have 30–60 seconds.

They should understand the service, see convincing work, and locate contact immediately.

### **Deep exploration**

Interested visitors can enter complete case studies, inspect images, read rationale, and examine working projects.

The detailed experience should reward curiosity.

It should not be mandatory for understanding the basic offer.

## **1.6 Interaction hierarchy**

The homepage's most memorable interaction is the gallery transformation.

The navigation into a case study is the continuation of that signature.

Other interactions should be quieter.

The visitor should remember the work and the coherence of the experience—not the difficulty of navigating it.

---

# **02 — Information Architecture**

## **2.1 Public website structure**

The complete portfolio has four principal content routes.

| Route | Page | Status |
| ----- | ----- | ----- |
| `/` | Portfolio homepage | Required |
| `/work/cafe-bliss` | Café Bliss case study | Required |
| `/work/imizi` | IMIZI Training Club case study | Required |
| `/work/quad` | Quad case study | Required |
| Unmatched routes | Designed 404 page | Required |

Every content route must load directly.

Every content route must work when refreshed.

Every content route must be reachable through standard browser navigation.

## **2.2 Homepage structure**

The homepage follows this exact sequence:

1. Navigation  
2. Hero  
3. Selected Work  
4. Services  
5. About  
6. Contact  
7. Footer

This order is intentional.

Selected Work appears immediately after the hero because actual work is our strongest evidence of capability.

Services follow the proof, making the commercial offer easier to understand.

About establishes a human relationship.

Contact concludes the experience.

## **2.3 Homepage anchors**

| Section | Anchor |
| ----- | ----- |
| Hero | `#top` |
| Selected Work | `#work` |
| Café Bliss chapter | `#project-cafe-bliss` |
| IMIZI chapter | `#project-imizi` |
| Quad chapter | `#project-quad` |
| Services | `#services` |
| About | `#about` |
| Contact | `#contact` |

Every anchor should remain meaningful independently of gallery animation.

A direct URL containing a hash must position the visitor at the relevant content.

Account for the sticky header when positioning anchors.

## **2.4 Case-study route conventions**

The project slug must be stable.

Use the exact routes:

* `/work/cafe-bliss`  
* `/work/imizi`  
* `/work/quad`

Do not create competing aliases such as `/projects/quad` unless there is a documented redirect.

Do not use a project title as an unstable dynamic route value.

## **2.5 Navigation from case studies**

The header remains consistent across all pages.

From a case study:

**Work** leads to `/#work`.

**Services** leads to `/#services`.

**About** leads to `/#about`.

**Start a Project** leads to the verified contact destination or the portfolio's contact section, according to the final configured CTA behavior.

The wordmark leads to the homepage.

These should be real links.

## **2.6 Case-study independence**

A visitor may arrive directly from an outreach message at `/work/cafe-bliss`.

They must not need to have seen the homepage or its animation.

The case-study page must independently communicate:

* Project identity  
* Project type  
* Purpose  
* Major visual character  
* Actual work performed  
* Functional live destination  
* Route toward contact

## **2.7 404 experience**

Unknown routes display a designed Not Found page.

The page should:

* Use the portfolio's visual language.  
* Explain the destination could not be found.  
* Offer a clear route back to work or home.  
* Preserve navigation.  
* Avoid novelty animations or unrelated visual concepts.

On hosting that serves a client-rendered SPA shell for unknown paths, the client-side 404 presentation remains required. Where practical, configure actual 404 response behavior for non-application routes without breaking SPA direct navigation.

## **2.8 Site-wide journey**

The visitor can navigate between the following major destinations:

**Homepage ↔ Case Study ↔ Other Case Study**

Every route also retains access to:

**Work / Services / About / Contact**

A case study should never feel like a navigational dead end.

---

# **03 — Global Navigation Architecture**

## **3.1 Purpose**

The navigation provides orientation and direct access to important content without competing with The Living Frame.

It must remain recognizable and predictable.

## **3.2 Desktop navigation**

**Left:** Personal wordmark or name

**Right:**

* Work  
* Services  
* About  
* Start a Project

The contact action may receive slightly stronger emphasis.

The header should remain compact.

## **3.3 Header positioning**

The header remains accessible during scrolling.

Preferred behavior:

* Sticky positioning  
* Stable height  
* Solid or nearly opaque background  
* Restrained lower rule when appropriate  
* No large layout changes during scrolling

The header must never obscure important content or gallery controls.

## **3.4 Identity**

Use the final confirmed public name.

Working implementation label:

**PRINCE ISHIMWE**

Identity should be centrally configured rather than repeated as unrelated hardcoded strings.

## **3.5 Active navigation state**

The active location may be indicated through:

* Small underline  
* Text emphasis  
* Controlled opacity change  
* Fine rule

The treatment must remain restrained.

Do not create a competing animated navigation tracker.

## **3.6 Mobile navigation**

When the full navigation cannot fit:

* Display the wordmark.  
* Display an accessible menu control.  
* Provide a clear contact route.  
* Reveal a compact navigation panel.  
* Preserve ordinary scrolling behavior after navigation.

A full-screen cinematic navigation system is excluded.

## **3.7 Mobile menu behavior**

When opened:

* Navigation items are clearly visible.  
* The open state is announced correctly.  
* Keyboard focus follows a predictable order.  
* The close action is discoverable.

When closed:

* Hidden menu controls are not accidentally focusable.  
* Focus returns sensibly if the menu was closed with Escape.  
* Navigation actions operate normally.

Required behavior:

* Escape closes the menu.  
* Selecting an item closes the menu.  
* Route changes close the menu.  
* The menu state does not persist accidentally into a different page.  
* Focus styling remains visible.

## **3.8 Navigation during transitions**

Route transitions must not cause:

* Duplicate headers  
* Stuck mobile menus  
* Inaccessible links  
* Unexpected focus traps  
* Header flicker unrelated to the intended transition

The shared shell remains visually consistent.

## **3.9 External project links**

Live project destinations should clearly indicate that they open an external experience.

Opening them in a new tab is appropriate because the visitor may want to return to the portfolio.

Use accessible link labels and secure external-link behavior.

## **3.10 Navigation quality standard**

The navigation should disappear into the quality of the experience.

Visitors should not need to think about how it works.

---

# **04 — Homepage Experience Overview**

## **4.1 Desktop visual rhythm**

The homepage follows six compositional movements.

### **Movement 01 — Typography**

Large introductory statement with substantial breathing room.

### **Movement 02 — Frame emergence**

A fine editorial rule establishes the Selected Work exhibition.

### **Movement 03 — Image-led exhibition**

The Living Frame presents three projects through one persistent visual composition.

### **Movement 04 — Return to typographic clarity**

Services translate capability into commercially understandable offerings.

### **Movement 05 — Human presence**

About introduces the independent creative practice.

### **Movement 06 — Final invitation**

A large typographic statement leads toward direct contact.

The page alternates between image-heavy and text-led compositions.

## **4.2 Mobile rhythm**

Mobile follows the same information order with different choreography:

**Introduction → Café Bliss → IMIZI → Quad → Services → About → Contact**

Every project receives its own visible image and information.

The visitor should not be forced through a desktop-style pinned sequence.

## **4.3 Scroll philosophy**

Use native scrolling.

Do not:

* Replace scrolling with custom wheel controls.  
* Force mandatory snap points.  
* Lock scroll while waiting for animations.  
* Require horizontal swipes to discover projects.  
* Prevent visitors from scrolling quickly.  
* Artificially prevent leaving the gallery.  
* Require completing a presentation sequence.

The portfolio reacts to visitor movement.

It does not dictate it.

## **4.4 Content availability**

Critical content must remain accessible regardless of animation progress.

The experience should remain understandable when:

* GSAP is unavailable.  
* Motion is disabled.  
* A transition is interrupted.  
* Images load slowly.  
* A visitor navigates by keyboard.  
* A visitor opens a case study directly.

The complete client-rendered application requires JavaScript; independence from animation does not imply that a React SPA functions fully with JavaScript disabled.

The implementation must specifically avoid making semantic content depend on successful animation initialization.

---

# **05 — Hero Experience**

## **5.1 Purpose**

The hero establishes:

1. Who created the portfolio.  
2. What they do.  
3. The quality of their design approach.  
4. Where visitors can find the work.  
5. How visitors can initiate contact.

## **5.2 Design philosophy**

The hero should be memorable through typography and composition.

It does not need:

* A decorative 3D object  
* An unrelated animated illustration  
* Floating technology logos  
* An elaborate cursor  
* A mandatory introductory animation

The typography itself is the subject.

## **5.3 Primary headline**

**Digital experiences built to be remembered.**

Working desktop treatment:

**Digital experiences**  
**built to be**  
*remembered.*

The first two lines use the primary sans-serif family.

The final line uses the expressive serif accent.

Exact type sizes and optical adjustments are defined in Phase 2\.

## **5.4 Supporting statement**

Working copy:

“I design and develop thoughtful websites for businesses and brands — combining strong visual direction, purposeful interaction, and reliable frontend execution.”

The sentence must be readable without requiring scrolling through an animation.

## **5.5 Identity and metadata**

Potential elements:

* Independent Designer & Frontend Developer  
* Based in Rwanda  
* Web Design / Development / Interaction

Avoid unnecessary repetition.

The identity, role, location, and supporting statement should work together rather than duplicate one another.

## **5.6 Main directional action**

**Explore Selected Work ↓**

Destination:

`#work`

It must be a real anchor link.

## **5.7 Contact route**

The navigation provides:

**Start a Project**

A second oversized hero contact button is not required.

## **5.8 Desktop composition**

Use:

* Full-width editorial grid  
* Dominant headline  
* Narrow supporting paragraph  
* Generous margins  
* Small contextual metadata  
* Clear visual alignment

The service explanation should remain visible on ordinary desktop viewports.

Do not make the hero so tall that the important explanatory copy is hidden unnecessarily.

## **5.9 Mobile composition**

Recommended content order:

1. Professional metadata  
2. Primary headline  
3. Supporting statement  
4. Explore Work link

The typography should reflow naturally.

Do not force desktop line breaks that clip on mobile.

The first project must not feel unreasonably distant.

## **5.10 Initial entrance behavior**

Recommended sequence:

1. The page renders immediately.  
2. Headline settles into place through a restrained reveal.  
3. Supporting copy and metadata enter.  
4. The visitor can interact with the page throughout.

No:

* Full-screen loader  
* Progress indicator  
* Simulated waiting  
* Delayed content access  
* Animation-dependent rendering of critical content

## **5.11 Reduced-motion behavior**

The hero displays normally with no significant translation or delayed entrance.

Its static composition remains complete.

---

# **06 — Transition into Selected Work**

## **6.1 Creative idea**

The hero's geometry leads into the exhibition.

A fine horizontal rule marks the beginning of Selected Work.

The first image frame appears within the same grid alignment.

The visual relationship should feel deliberate.

## **6.2 Initial exhibition sequence**

1. The Selected Work label enters.  
2. A fine editorial rule becomes visible.  
3. The image stage establishes its position.  
4. Café Bliss appears within the frame.  
5. The visitor continues into the project gallery.

## **6.3 Implementation boundary**

Do not create an excessively complicated transformation from a 1-pixel line into a large image frame.

Instead, use matching alignment and a controlled reveal to create the perception of continuity.

## **6.4 Scroll behavior**

The introduction begins when the section approaches the visible viewport.

It must:

* Be interruptible  
* Avoid scroll locking  
* Preserve project access  
* Remain correct during fast scrolling  
* Be skipped or simplified for reduced motion  
* Never leave the image stage hidden

## **6.5 Relationship to the signature interaction**

The introduction is the opening of the exhibition.

The transformations between projects are the principal interaction.

The introduction should not visually overpower them.

---

# **07 — The Living Frame: Structural Architecture**

## **7.1 Definition**

The Living Frame is one consistent editorial gallery system.

The frame remains recognizable.

The selected project changes:

* Imagery  
* Atmosphere  
* Metadata emphasis  
* Internal composition  
* Subtle motion character

The exhibition transforms without losing its identity.

## **7.2 Desktop composition**

Use two major zones.

### **Zone A — Persistent Visual Stage**

Approximately 67% of the content composition before accounting for the editorial gap.

Contains:

* Large project media  
* Stable external frame geometry  
* Atmospheric surface  
* Layered images  
* Transition effects  
* Limited depth and masking

### **Zone B — Editorial Information Rail**

Occupies the remaining useful width.

Contains three semantic project chapters.

Each chapter includes:

* Project number  
* Category  
* Name  
* Short description  
* Project type  
* Role or focus  
* Live website link  
* Explore Project link

The precise proportions may be adjusted optically during Phase 2 implementation.

The spatial ratio is separate from the 70% editorial / 30% cinematic creative balance.

## **7.3 Chosen layout architecture**

**Persistent CSS-sticky visual stage \+ naturally scrolling editorial chapters.**

The visual stage remains stable within Selected Work.

The project information advances through normal document flow.

As the visitor reaches another project chapter, the stage transitions to that project's imagery.

## **7.4 Why this architecture is locked**

It provides:

* Persistent framing  
* Large immersive imagery  
* Clear correspondence between image and text  
* Direct access to each project  
* Normal browser scrolling  
* Reliable project anchors  
* Simpler responsive adaptation  
* Better keyboard behavior  
* Reduced scroll synchronization complexity

It avoids the fragility of a fully scrubbed animation sequence that takes control of the visitor's scroll movement.

## **7.5 Sticky responsibility**

Use CSS sticky positioning for the visual stage.

Do not simultaneously apply a second competing pinning system to the same element.

The frame remains sticky only within the Selected Work section.

It releases naturally when the section ends.

## **7.6 Stable frame geometry**

The outer frame keeps a consistent visual shape while projects change.

The established target ratio is 16:10.

Internal image treatments may vary according to the screenshot.

The stage must not become taller than the usable viewport.

## **7.7 The relationship between the two columns**

When a project chapter becomes the active reading context:

* Its image should occupy the visual stage.  
* Its title and summary should be comfortably readable.  
* Its links must remain accessible.  
* Its index item should be identifiable.  
* Its atmosphere should match the stage.

The stage should not change so early that the next project is invisible in the information rail.

## **7.8 Project chapter height**

Each chapter needs enough vertical space to support a deliberate transition.

Avoid huge blank regions created only to prolong animation.

The exact height should respond to:

* Copy length  
* Font size  
* Viewport height  
* Header position  
* Reading comfort

An initial desktop minimum of roughly 420–660px is an acceptable implementation starting point.

The final value must be verified in the rendered design.

## **7.9 Beginning of gallery**

On entering Selected Work:

* Café Bliss is the default first project.  
* Its image appears.  
* Its chapter is the initial active reading context.  
* The project index identifies it.

If the visitor loads a deep link or restored scroll position, the correct chapter takes precedence over the default.

## **7.10 End of gallery**

After Quad:

* The sticky stage releases.  
* Selected Work ends.  
* Services enters naturally.  
* No sudden scroll position adjustment occurs.  
* No image remains stuck over later sections.

## **7.11 Visual hierarchy**

The image is the primary subject.

The project title is the next priority.

Description and actions provide essential context.

Metadata supports the composition.

The gallery should not become a collection of competing labels around the image.

---

# **08 — Living Frame Project States**

## **8.1 Project 01 — Café Bliss**

**Slug:** `cafe-bliss`

**Mood:** Warm, welcoming, editorial.

The stage presents genuine Café Bliss imagery.

Desired qualities:

* Warm neutral atmosphere  
* Large visual presence  
* Relaxed pacing  
* Gentle depth  
* Calm movement  
* Hospitality-specific character

### **Information**

**01 / 03**

**HOSPITALITY — CONCEPT WEBSITE**

**Café Bliss**

Description should emphasize:

* Atmosphere  
* Hospitality  
* Menu discovery  
* Information clarity  
* Responsive design

### **Actions**

**Explore Project →**  
Destination: `/work/cafe-bliss`

**View Live Website ↗**  
Destination: [https\://cafe-bliss-rw.vercel.app](https://cafe-bliss-rw.vercel.app/)

### **Integrity**

Identify the project as a fictional concept.

Do not imply that its reservation flow creates real customer bookings.

## **8.2 Project 02 — IMIZI Training Club**

**Slug:** `imizi`

**Mood:** Strong, composed, architectural.

The transition from Café Bliss introduces:

* Darker atmosphere  
* Greater contrast  
* Firmer geometry  
* Strong brand identity  
* More assertive visual rhythm

### **Information**

**02 / 03**

**FITNESS — CONCEPT WEBSITE**

**IMIZI Training Club**

Description should emphasize:

* Brand identity  
* Website structure  
* Classes  
* Memberships  
* Responsive navigation  
* Business communication

### **Actions**

**Explore Project →**  
Destination: `/work/imizi`

**View Live Website ↗**  
Destination: [https\://imizi-training-club.vercel.app](https://imizi-training-club.vercel.app/)

### **Integrity**

Identify the project as fictional.

Do not describe club operations, coaches, testimonials, or memberships as verified real-world business data.

## **8.3 Project 03 — Quad**

**Slug:** `quad`

**Mood:** Structured, intelligent, digital.

Quad should feel distinct from the commercial website concepts.

Desired qualities:

* Precise presentation  
* Genuine application imagery  
* Readable interface detail  
* Controlled visual pacing  
* Product-oriented composition

### **Information**

**03 / 03**

**DIGITAL PRODUCT — WEB APPLICATION**

**Quad**

Description should emphasize actual application capabilities, including:

* Community content  
* Profiles  
* Messaging  
* Real-time interaction  
* Full-stack development

### **Actions**

**Explore Project →**  
Destination: `/work/quad`

**View Live Application ↗**  
Destination: [https\://joinquad.vercel.app](https://joinquad.vercel.app/)

Optional repository access may appear within the case study.

### **Integrity**

A login screen alone is not an adequate primary project image.

Use genuine, authorized application imagery.

Do not invent user numbers, adoption figures, or commercial success.

## **8.4 Atmospheric sequence**

**Café Bliss → IMIZI**

Warmth transforms into strength.

**IMIZI → Quad**

Brand-led experience transforms into structured digital product design.

**Quad → IMIZI**

The atmosphere returns toward the darker, grounded presentation.

**IMIZI → Café Bliss**

The environment returns to warmth.

The frame unifies the sequence.

The projects create the differences.

## **8.5 Project independence**

Every project must remain individually understandable.

A visitor should not need to see the preceding project to understand the next one.

This matters for direct anchors and quick browsing.

---

# **09 — Living Frame State Model**

## **9.1 Active-project identity**

The gallery has three project identities:

* `cafe-bliss`  
* `imizi`  
* `quad`

The active project is determined primarily by the visitor's location in the normal document flow.

## **9.2 Visual transition state**

Separate the active project identity from animation progress.

The visual stage may be:

**Idle**

A valid current project is visible, with no transition underway.

**Preparing**

The next project's imagery is being readied while the current image remains visible.

**Transitioning**

The incoming project is replacing the outgoing project.

**Settled**

The target project is fully displayed and the visual state has been normalized.

The state model should prevent disagreement between the current chapter and visible image.

## **9.3 Source of truth**

The current project chapter is the source of truth.

The following derive from it:

* Stage imagery  
* Atmosphere  
* Project index emphasis  
* Relevant active styling

Do not independently maintain conflicting project identities in multiple components.

## **9.4 Initial activation**

On a normal top-of-page visit, Café Bliss is the initial gallery project.

On a direct hash visit or browser scroll restoration, calculate the appropriate active project from the resulting chapter position.

Do not forcibly reset the gallery to Café Bliss after restoring a position near Quad.

## **9.5 Activation region**

Use a stable reading region near the central portion of the viewport, accounting for the sticky header.

The active project should correspond to the chapter occupying that region.

A ScrollTrigger-based implementation may use suitable entry and reverse-entry callbacks.

An observer-based implementation is also acceptable if it produces equivalent behavior.

Do not perform unnecessary React updates for every pixel of scrolling.

## **9.6 Explicit state transition table**

| Current state | Visitor action | Required result |
| ----- | ----- | ----- |
| Hero | Scroll into work | Café Bliss becomes active |
| Café Bliss | Enter IMIZI reading region | IMIZI becomes active |
| IMIZI | Enter Quad reading region | Quad becomes active |
| Quad | Scroll upward into IMIZI | IMIZI becomes active |
| IMIZI | Scroll upward into Café Bliss | Café Bliss becomes active |
| Any gallery state | Select project index item | Scroll to its chapter and synchronize the stage |
| Any gallery state | Activate Explore Project | Navigate to corresponding case study |
| Any gallery state | Activate live link | Open corresponding live destination |
| Any gallery state | Resize to stacked breakpoint | Render complete stacked project presentation |
| Any gallery state | Enable reduced motion | Settle into accessible simplified presentation |

## **9.7 Rapid scrolling**

The visitor may quickly move from Café Bliss to Quad.

Rules:

1. Latest active chapter determines the target.  
2. Older transitions are interrupted or superseded.  
3. Intermediate project animations are not queued.  
4. The stage settles on the latest project.  
5. The stage never becomes persistently blank.  
6. Project text remains readable.  
7. Index emphasis synchronizes with the final project.

## **9.8 Reverse scrolling**

Transitions must work upward as well as downward.

The user should not encounter:

* Incorrect images  
* Frozen active-state indicators  
* Empty frames  
* Unnecessary animation delays  
* Image transitions running in the wrong direction

## **9.9 Index navigation**

Selecting another project from the index should:

1. Navigate to the corresponding chapter anchor.  
2. Move the document naturally.  
3. Update the active project.  
4. Transition the stage to the corresponding image.  
5. Preserve ordinary browser navigation.

The index must not operate an independent slideshow disconnected from the page's scroll position.

## **9.10 Resizing**

When breakpoint changes affect the gallery:

* Remove obsolete desktop-specific animation setup.  
* Restore stacked media when necessary.  
* Recalculate activation geometry.  
* Avoid duplicate observers.  
* Preserve the appropriate project identity.  
* Prevent stale inline transforms.

## **9.11 Reduced-motion changes**

If reduced motion becomes active:

* Stop complex running transitions.  
* Settle the image to the current project.  
* Remove unnecessary transforms and masks.  
* Preserve all project information and links.

If the preference changes back, the animation system should initialize without duplicating listeners.

## **9.12 Images not yet loaded**

The current image remains visible while an incoming image is prepared.

Do not expose an empty transition layer.

If the incoming asset fails:

* Preserve stable geometry.  
* Display a coherent fallback.  
* Keep the correct project information accessible.  
* Avoid repeating a failed transition indefinitely.

## **9.13 State ownership**

One gallery controller or narrowly scoped hook should coordinate the active project and visual transitions.

The visual stage should not independently decide which chapter is current.

---

# **10 — Living Frame Motion Language**

## **10.1 Central principle**

**Motion communicates continuity.**

The gallery should feel like one changing exhibition rather than three abruptly replaced cards.

## **10.2 Motion hierarchy**

**Level 1 — Primary signature**

Living Frame transitions.

**Level 2 — Spatial continuity**

Frame introduction and case-study entry.

**Level 3 — Supporting section entrances**

Services, About, Contact.

**Level 4 — Micro-interactions**

Links, arrows, focus and hover feedback.

The complete frame-to-case-study interaction is part of the signature system, even though it occurs during navigation.

Do not introduce multiple unrelated Level 1 effects.

## **10.3 Media transformation**

Recommended sequence:

1. Incoming media is prepared.  
2. Incoming layer is placed within the existing frame.  
3. Outgoing image begins to recede.  
4. Incoming image appears through a controlled mask or crossfade.  
5. Subtle scale creates depth.  
6. Atmosphere moves toward the incoming project's treatment.  
7. The incoming media settles.  
8. The temporary outgoing layer is removed.

## **10.4 Masking**

Preferred treatment:

A controlled rectangular reveal.

Possible directions:

* Vertical  
* Horizontal  
* Clip expansion

The final choice should match the frame's composition and remain consistent.

Do not introduce a different elaborate masking effect for every project.

## **10.5 Safe transition fallback**

If masking is unsupported or performs poorly, use a clean layered crossfade.

A convincing, smooth crossfade is preferable to an unstable elaborate mask.

## **10.6 Scale**

Indicative range:

* Stable image: 1.0  
* Transitional image: approximately 1.02–1.04

Do not aggressively zoom UI screenshots.

## **10.7 Atmosphere**

Each project has a distinct tonal environment.

Potential changes include:

* Stage background  
* Limited frame accents  
* Subtle overlays  
* Small metadata emphasis changes

The global site identity remains stable.

Do not suddenly recolor every page element.

## **10.8 Text behavior**

Semantic project descriptions exist in normal document flow.

They should not disappear simply because the stage changes.

Active emphasis may change, but the underlying information remains readable.

## **10.9 Motion timing**

Initial design ranges:

* Image transition: 450–700ms  
* Atmosphere: approximately 550–650ms  
* Metadata emphasis: 200–400ms  
* Hover feedback: 150–250ms  
* Introductory reveal: 500–800ms

These are implementation starting points.

Adjust timing based on actual performance and visual quality.

## **10.10 Easing**

Use smooth, deliberate easing.

Avoid:

* Elastic bounce  
* Exaggerated spring movement  
* Overshoot  
* Sudden acceleration  
* Repetitive attention-seeking motion

The impression should be precise and composed.

## **10.11 Scroll response**

Animation reacts to active chapters.

It does not take control of scroll input.

No forced snapping, wheel hijacking, or scroll lock.

## **10.12 Hover response**

On pointer devices:

* Small image-scale response  
* Refined underline or arrow movement  
* Subtle index emphasis

On touch devices:

* All information remains visible.  
* No action depends on hover.  
* Controls remain clearly interactive.

---

# **11 — Project Index and Discoverability**

## **11.1 Purpose**

The visitor should know that three projects are available.

The Living Frame should not hide the range of work behind an ambiguous scrolling sequence.

## **11.2 Content**

**01 — Café Bliss**  
**02 — IMIZI**  
**03 — Quad**

## **11.3 Placement**

The index is integrated into the Selected Work composition.

Possible positions:

* Along the upper boundary of the gallery  
* Above the persistent visual stage  
* Near the selected-work section introduction

The index should not become a second large navigation system.

## **11.4 Interaction**

Each item links directly to a corresponding chapter anchor:

* `#project-cafe-bliss`  
* `#project-imizi`  
* `#project-quad`

## **11.5 Active state**

Use subtle distinction:

* Stronger text color  
* Underline  
* Small rule  
* Controlled opacity

The active-state treatment must not shift surrounding labels unexpectedly.

## **11.6 Browser semantics**

Use real links.

Direct navigation must work without waiting for an animation controller.

The anchor and stage state should synchronize after navigation.

## **11.7 Mobile adaptation**

Because the mobile presentation contains all three stacked projects, a persistent index is not essential.

A compact **Selected Work / 01–03** label may be sufficient.

---

# **12 — Responsive Experience Architecture**

## **12.1 General principle**

Responsive design changes composition, not the amount of meaningful content.

Every visitor receives the same projects, essential information, and navigation options.

Animation complexity may vary.

## **12.2 Desktop — 1100px and wider**

Primary experience:

**Sticky editorial gallery**

Characteristics:

* Large visual stage  
* Scrolling information rail  
* Three project chapters  
* Image transformations  
* Atmospheric changes  
* Project index  
* Complete links  
* Stable visual hierarchy

The image receives the most visual emphasis.

## **12.3 Tablet — 768–1099px**

Primary experience:

**Vertical editorial gallery**

Per-project structure:

1. Number/category  
2. Large image  
3. Title  
4. Description  
5. Project metadata  
6. Live action  
7. Explore Project action

A sticky two-column gallery is not required.

Subtle image reveals may remain.

## **12.4 Mobile — Below 768px**

Primary experience:

**Compact, vertically stacked exhibition**

Each project is a complete editorial block.

Requirements:

* Natural vertical scrolling  
* High-quality imagery  
* Legible titles  
* Short readable descriptions  
* Comfortable touch targets  
* Visible actions  
* No horizontal overflow  
* No hidden required information  
* No hover dependency

## **12.5 Short desktop viewports**

A wide display can still have insufficient vertical space.

If the sticky image stage cannot fit comfortably below the header, switch to the stacked experience.

An initial implementation threshold near 700px height may be used, but must be verified against final content dimensions.

Do not force an oversized sticky frame into a short browser window.

## **12.6 Orientation changes**

Rotating or resizing a device must not:

* Leave the stage pinned incorrectly.  
* Duplicate animation triggers.  
* Keep stale transition geometry.  
* Hide stacked imagery.  
* Desynchronize the active project.

## **12.7 Responsive case-study pages**

Case studies also require independent responsive compositions.

On desktop:

* Large hero imagery  
* Editorial metadata  
* Wide project screenshots  
* Controlled text measures  
* Optional asymmetrical compositions  
* Carefully arranged image pairs

On tablet:

* Simplified grids  
* Reduced spacing  
* Strong image hierarchy  
* Readable captions

On mobile:

* Single-column reading flow  
* Appropriately cropped screenshots  
* Comfortable paragraph widths  
* Clear section boundaries  
* Visible live/back navigation  
* No tiny illegible application UI

## **12.8 Consistency without forced uniformity**

Café Bliss, IMIZI, and Quad may require different screenshot treatments.

Do not enforce an identical image crop if it damages a project's presentation.

The editorial system remains consistent.

The content-specific composition adapts.

---

# **13 — Complete Case-Study Architecture**

## **13.1 Status**

**All three case studies are required parts of the complete portfolio.**

They are no longer optional additions.

Their architecture must be designed and implemented alongside the homepage.

## **13.2 Product role**

The homepage demonstrates quality quickly.

Case studies provide evidence and explanation.

They should communicate the thinking behind the work, not merely repeat the homepage.

## **13.3 Shared case-study sequence**

Each page follows this general structure.

### **Section A — Project Hero**

Required:

* Project number  
* Project category  
* Project title  
* Short overview  
* Project type  
* Role/year  
* Large real project image  
* Live project action

The hero should feel like a continuation of the clicked homepage frame.

### **Section B — Project Overview**

Explain:

* What the project is  
* What motivated the concept or product  
* Intended audience  
* Core experience  
* Actual individual role

Avoid inventing a client brief.

### **Section C — Design Direction**

Explain:

* Visual intent  
* Typography  
* Color palette  
* Imagery  
* Composition  
* Brand-specific design decisions

This section should contain meaningful project-specific content.

### **Section D — Experience and Features**

Explain actual interactions and functional experiences.

Use:

* Screenshots  
* Short descriptions  
* Feature details  
* Relevant interface flows

Do not claim functionality that does not exist.

### **Section E — Selected Imagery**

Provide genuine visual evidence.

Possible compositions:

* Full-width desktop screenshot  
* Image pairing  
* Mobile capture  
* Interface detail  
* Content-specific composition

Do not fill image galleries with unrelated stock material.

### **Section F — Development and Implementation**

Explain relevant technical decisions.

Focus on choices that contributed meaningfully to the experience.

Avoid giant lists of technologies without context.

### **Section G — Closing Actions**

Include:

**Visit Live Website ↗**

**Back to Selected Work ←**

Repository link where useful.

### **Section H — Next Project**

Provide a clear transition into another case study or back to the gallery.

The project sequence remains:

Café Bliss → IMIZI → Quad.

## **13.4 Case-study page identity**

The page must inherit the global portfolio system:

* Header  
* Typography  
* Grid  
* Editorial rules  
* Metadata style  
* Link treatment  
* Spacing  
* Footer  
* Focus behavior

Project-specific identity should emerge primarily through its actual images and selective atmospheric treatment.

## **13.5 Direct navigation**

The visitor must be able to open each case-study URL directly.

The page must load fully even when no homepage transition has occurred.

## **13.6 Browser refresh**

Refreshing the case study must not cause a 404 from the production hosting configuration.

## **13.7 Back navigation**

The browser Back action must work normally.

Where practical, the visitor should return to the previous homepage scroll position.

Internal Back to Selected Work should navigate to the work section or relevant project anchor.

These actions must not be confused:

**Browser Back:** Return to previous history entry.

**Back to Selected Work:** Navigate explicitly toward the portfolio work gallery.

## **13.8 Content independence**

Case studies must not depend on homepage animation state.

The destination page should have everything needed to render itself from its route and project data.

---

# **14 — Café Bliss Case Study**

## **14.1 Role**

Demonstrate hospitality art direction, accessible interaction, responsive presentation, and business-oriented information design.

## **14.2 Required narrative**

### **Opening**

Introduce Café Bliss as an independent fictional café website concept.

### **Concept**

Explain the intention to create a warm, welcoming digital environment appropriate for a neighborhood café.

### **Art direction**

Discuss:

* Editorial hospitality aesthetic  
* Warm neutrals  
* Typography  
* Photographic atmosphere  
* Content hierarchy

### **Experience**

Show:

* Homepage design  
* Menu browsing  
* Filtering  
* Reservation-oriented interface  
* Relevant responsive details

### **Development**

Describe actual implementation choices supported by the project.

### **Outcome**

Present a functioning concept website.

Do not imply that it serves real bookings or generated business growth.

## **14.3 Required visual evidence**

At minimum, include:

* Strong project hero screenshot  
* Additional representative interface imagery  
* Relevant desktop/mobile presentation where available

## **14.4 Primary actions**

**Visit Live Website ↗**

[https\://cafe-bliss-rw.vercel.app](https://cafe-bliss-rw.vercel.app/)

**Back to Selected Work ←**

`/#project-cafe-bliss`

**Next Project →**

`/work/imizi`

## **14.5 Tone**

Warm, considered, atmospheric.

The page should not become more decorative than the actual project.

---

# **15 — IMIZI Case Study**

## **15.1 Role**

Demonstrate a coherent brand translated into a complete service-business website.

## **15.2 Required narrative**

### **Opening**

Introduce IMIZI as an independent fictional strength and conditioning club concept.

### **Concept**

Explain the intended brand character and audience.

### **Art direction**

Discuss:

* Strong contrasts  
* Distinctive athletic identity  
* Typography  
* Color emphasis  
* Image-led composition

### **Experience**

Show:

* Homepage  
* Classes  
* Schedule presentation  
* Memberships  
* Coaches  
* Navigation  
* Contact/trial-oriented interface

### **Development**

Describe the actual responsive React implementation and meaningful component or interaction decisions.

### **Outcome**

Present a complete functioning fictional service-business website.

Do not imply that the gym is operating commercially.

## **15.3 Required visual evidence**

At minimum:

* Strong hero screenshot  
* Additional page or feature screenshots  
* Relevant mobile presentation where available

## **15.4 Primary actions**

**Visit Live Website ↗**

[https\://imizi-training-club.vercel.app](https://imizi-training-club.vercel.app/)

**Back to Selected Work ←**

`/#project-imizi`

**Next Project →**

`/work/quad`

## **15.5 Tone**

Strong, composed, disciplined.

Keep the portfolio's editorial identity intact.

---

# **16 — Quad Case Study**

## **16.1 Role**

Demonstrate complex product interfaces, real application interaction, and full-stack development capability.

## **16.2 Required narrative**

### **Opening**

Introduce Quad as a functional student community platform.

### **Product purpose**

Explain its community-oriented digital experience.

### **Interface architecture**

Describe real application structure, such as:

* Feed and content  
* User profiles  
* Community interactions  
* Messaging  
* Notifications

### **Design and experience**

Show how content, navigation, interaction, and interface states support the application.

### **Engineering**

Explain verified decisions relating to:

* React  
* TypeScript  
* Backend architecture  
* Application state  
* Real-time features  
* Relevant data and interaction flows

Only include features actually supported by the implementation.

### **Outcome**

Present the functioning product and its actual capabilities.

Do not invent usage or adoption statistics.

## **16.3 Critical screenshot requirement**

A sign-in screen is insufficient as the primary project representation.

Use actual authenticated application imagery with authorized or safe content.

Avoid exposing private user data.

## **16.4 Required visual evidence**

Include meaningful examples of:

* Main application interface  
* At least one substantial product interaction area  
* Additional relevant feature/detail imagery where available

## **16.5 Primary actions**

**Visit Live Application ↗**

[https\://joinquad.vercel.app](https://joinquad.vercel.app/)

**View Repository ↗**

[https\://github.com/byishimwe/quad](https://github.com/byishimwe/quad)

**Back to Selected Work ←**

`/#project-quad`

For next-project navigation, return to Café Bliss or Selected Work in a coherent way.

## **16.6 Tone**

Precise, structured, product-oriented.

The page can include greater technical detail than the two business website concepts.

---

# **17 — Shared-Element Case-Study Navigation**

This is a required part of the intended signature experience.

## **17.1 Central creative goal**

Opening a project should feel like entering the project displayed in the Living Frame.

The selected image should remain visually recognizable as it moves from the homepage gallery to the case-study hero.

The object the visitor selected becomes the destination's main visual subject.

## **17.2 Entry action**

Each project chapter includes:

**Explore Project →**

The action navigates to the corresponding route.

The action must exist and work for all three projects.

## **17.3 Source element**

On desktop, the source is the currently active image in the Living Frame.

On tablet/mobile, the source is the corresponding project's visible stacked image.

Do not animate from the wrong project's image.

## **17.4 Destination element**

The destination is the matching case-study hero image or its shared visual container.

It should correspond visually to the homepage source.

Using an unrelated destination image would break the sense of continuity.

## **17.5 Intended forward sequence**

1. Visitor sees a project.  
2. Visitor activates Explore Project.  
3. The route transition begins.  
4. The selected project image becomes the shared visual anchor.  
5. Surrounding homepage information recedes subtly.  
6. The image moves or expands toward its case-study geometry.  
7. The destination composition appears.  
8. Project title and metadata settle.  
9. The visitor continues reading the case study.

## **17.6 Visual transition principle**

The transition must communicate:

**Same project → New composition**

It should not feel like:

**Old page disappears → Unrelated page appears**

## **17.7 Motion hierarchy**

The shared-element transition is a major signature moment.

However, it must remain visually consistent with the gallery's motion vocabulary:

* Restrained easing  
* Controlled scale  
* Deliberate masking  
* Clean geometry  
* No excessive bounce  
* No unnecessary full-screen blackout

## **17.8 Preferred technical ownership**

Use routing coordinated with browser View Transitions where supported.

GSAP remains responsible for within-page gallery motion.

Do not independently animate the same route-transition geometry through competing systems.

## **17.9 Transition identity**

The source and destination must share an intentional project-specific transition identity.

Only the relevant visual element should participate.

Avoid assigning the same transition name to multiple simultaneously rendered images.

## **17.10 Transition readiness**

Before navigation begins:

* The selected project must be identified correctly.  
* The source image must be stable.  
* Any conflicting gallery transition should be settled or coordinated.  
* The route destination must be valid.

The system must not wait indefinitely for an image animation to finish before navigating.

## **17.11 Destination stability**

After transition:

* The case-study hero appears correctly.  
* Normal page interaction resumes.  
* Temporary transition styles are cleared.  
* Focus and history behave correctly.  
* Scrolling is not locked.  
* No overlay remains above the page.

## **17.12 Browser back**

Browser Back must return to the previous page.

When a reverse shared-element transition is possible and reliable, it may reconnect the case-study hero to the original gallery frame.

This requires restoring the correct project state and scroll position.

If that cannot be guaranteed, use a simple route transition instead of animating toward an incorrect visual destination.

## **17.13 Internal return action**

**Back to Selected Work ←** is an explicit navigation link.

It may return to the matching project anchor.

It must work even if the visitor originally opened the case study directly.

## **17.14 Direct case-study visit**

No homepage source element exists.

The case-study page appears normally.

Do not fabricate a transition from an invisible or nonexistent source.

## **17.15 Unsupported browsers**

Use normal route navigation.

The page must still work.

The advanced visual effect is conditional on browser capability.

## **17.16 Reduced motion**

Disable significant spatial zoom and long movement.

Use an immediate route change or restrained fade.

## **17.17 Mobile transition**

On capable mobile browsers, the same shared-element idea may be expressed more simply.

Do not force large desktop-scale movement.

A modest image-position transition can be appropriate.

If it creates instability, use normal navigation.

## **17.18 Completion criteria**

The feature is considered implemented when:

* All three Explore Project links work.  
* The correct source and destination are paired.  
* Enhanced continuity works on tested supported browsers.  
* Unsupported browsers navigate correctly.  
* Reduced motion works.  
* Browser history remains functional.  
* Direct routes work.  
* No competing animation leaves broken styles.  
* The resulting transition is visually coherent.

---

# **18 — Scroll Restoration and Navigation State**

## **18.1 Purpose**

The exhibition must remain navigable after moving between pages.

A visitor should not lose their place unnecessarily.

## **18.2 Browser Back behavior**

If a visitor enters Café Bliss from its homepage chapter and presses Back:

* The homepage returns.  
* The previous work position should be restored when practical.  
* Café Bliss should again be the active gallery state.  
* The frame must not display IMIZI or Quad by mistake.

Equivalent behavior applies to IMIZI and Quad.

## **18.3 Explicit Back to Work**

The dedicated Back to Selected Work action should return to a logical project anchor, regardless of previous history.

## **18.4 Direct hash navigation**

Examples:

`/#project-cafe-bliss`

`/#project-imizi`

`/#project-quad`

Opening these URLs should:

1. Position the relevant chapter appropriately.  
2. Account for header offset.  
3. Synchronize the visual stage.  
4. Make project actions accessible.

## **18.5 Initial restoration timing**

If scroll position is restored after the application initially renders, the gallery must synchronize after layout and image geometry are stable.

Avoid activating the wrong project based on an earlier temporary scroll position.

## **18.6 Route changes**

On normal forward navigation to a case study, begin at its intended top position.

Do not preserve the homepage's scroll offset on an unrelated case-study page.

## **18.7 Anchor links from case studies**

Header section links must navigate to the homepage and its corresponding anchor.

They must not merely attempt to find an anchor inside the case-study page.

## **18.8 Navigation under animation**

A visitor may activate a link while another animation is running.

Navigation takes priority.

Animations must clean up rather than prevent the action.

---

# **19 — Services Section**

## **19.1 Purpose**

Translate visible design capability into understandable commercial offerings.

The visitor has seen what we can build.

Now we explain what they can commission.

## **19.2 Heading**

Working direction:

**What I do.**

Supporting copy connects visual design with practical business needs.

## **19.3 Three services**

### **01 — Business Websites**

Professional and visually refined digital presences for businesses that need to communicate clearly and inspire trust.

### **02 — Custom Digital Experiences**

More distinctive websites combining art direction, motion, interaction, and tailored frontend development.

### **03 — Website Redesigns**

Improving existing websites through stronger structure, visual presentation, usability, and performance.

## **19.4 Composition**

Use:

* Editorial section label  
* Strong heading  
* Three numbered service entries  
* Thin rules  
* Concise explanatory copy

Avoid generic oversized icon cards.

## **19.5 Interaction**

Keep it minimal.

Possible treatments:

* Subtle hover emphasis  
* Gentle section introduction  
* Fine rule reveal

No:

* Rotating carousel  
* Interactive pricing configurator  
* Required service selection  
* Elaborate animated accordion

All essential descriptions remain visible.

## **19.6 Mobile**

Service entries stack naturally.

Use readable spacing and clear hierarchy.

---

# **20 — About Section**

## **20.1 Purpose**

Give the work a human author and support trust.

The section should not become a lengthy résumé.

## **20.2 Required content**

* Confirmed public name  
* Professional role  
* Location  
* Short personal introduction  
* Approach to design and development

## **20.3 Narrative**

Communicate:

* Care for visual quality  
* Respect for business needs  
* Attention to implementation  
* Ability to combine design and engineering  
* Thoughtful collaboration

## **20.4 Working heading**

**A little about me.**

## **20.5 Composition**

Desktop:

* Large editorial heading  
* Narrow readable paragraph  
* Supporting professional metadata

Mobile:

* Heading  
* Paragraph  
* Metadata

## **20.6 Portrait**

Optional only if a suitable genuine photograph exists.

Do not invent a face or substitute unrelated imagery.

## **20.7 Skills**

Do not build a giant skills grid.

A restrained statement about capabilities is sufficient.

The projects should demonstrate most of the technical ability.

## **20.8 Motion**

Very subtle section introduction.

No elaborate animated biography timeline.

---

# **21 — Contact Experience**

## **21.1 Purpose**

Convert interest into conversation.

This is the portfolio's principal commercial action.

## **21.2 Heading**

**Have something worth building?**

The headline should feel visually connected to the hero.

## **21.3 Supporting message**

A concise invitation to discuss a new website, redesign, or custom digital experience.

## **21.4 Primary contact**

**Start a Project ↗**

Preferred destination:

Verified professional WhatsApp.

## **21.5 Secondary contact**

**Send an Email ↗**

Destination:

Verified professional email.

## **21.6 Contact details**

The actual email address and WhatsApp destination must be supplied and confirmed.

Do not invent placeholders and present them as functional public links.

## **21.7 Interaction**

Required:

* Clear link behavior  
* Visible focus  
* Readable labels  
* Comfortable targets  
* Reliable external navigation

## **21.8 Contact form**

No custom contact form is required.

Rationale:

WhatsApp and email already serve the intended client journey.

An unnecessary form adds delivery, spam, validation, and failure-state complexity.

## **21.9 Availability indicator**

An availability statement is optional.

If displayed, it must be accurate.

Do not claim a specific workload or booking availability without confirmation.

## **21.10 Case-study contact access**

Every case-study page retains access to contact through the shared navigation.

A secondary closing invitation may also be included if it supports the case-study composition.

Do not duplicate the full homepage Contact section mechanically on every page unless the result improves the flow.

---

# **22 — Footer Experience**

## **22.1 Purpose**

Create a clean ending and provide useful secondary navigation.

## **22.2 Content**

* Name  
* Copyright year  
* Location if appropriate  
* Relevant links  
* Optional Back to Top

## **22.3 Visual behavior**

The footer flows naturally from the final section.

No elaborate reveal is necessary.

## **22.4 Case-study consistency**

The footer remains consistent across the homepage and case studies.

---

# **23 — Interaction Inventory**

Every planned interaction must have a defined purpose.

All primary interactions below are part of the complete intended product.

| Interaction | Purpose | Required behavior |
| ----- | ----- | ----- |
| Header navigation | Move between sections and pages | Working links |
| Explore Work | Reach the gallery | Native anchor |
| Project index | Jump among projects | Anchor and state synchronization |
| Gallery stage | Present active project | Stable persistent desktop composition |
| Image transformation | Establish Living Frame identity | Controlled project transitions |
| Atmosphere transformation | Differentiate projects | Synchronized with active project |
| Reverse scrolling | Support natural exploration | Correct previous project |
| Rapid scrolling | Preserve reliable state | Latest project wins |
| Explore Project | Enter a case study | Correct internal route |
| Shared-element transition | Maintain visual continuity | Enhanced supported-browser behavior |
| Browser Back | Return to previous location | Correct navigation and restoration |
| Case-study next project | Continue exploration | Correct internal route |
| Live project link | Demonstrate functioning work | Correct external destination |
| Repository link | Provide technical evidence | Correct destination where included |
| Mobile navigation | Accessible page navigation | Standard menu behavior |
| WhatsApp | Start project inquiry | Verified destination |
| Email | Alternative contact | Verified destination |
| Reduced-motion mode | Preserve access without heavy animation | Simplified/instant movement |
| Responsive gallery | Adapt composition | Complete stacked version |
| Section reveals | Support presentation rhythm | Quiet, nonblocking motion |
| Link hover/focus | Provide interaction feedback | Clear and consistent |

## **23.1 Required versus environmental behavior**

A required feature may have multiple valid behaviors depending on device support.

Example:

**Shared-element navigation**

* Supported browser: Enhanced spatial transition.  
* Unsupported browser: Functional standard navigation.  
* Reduced motion: Immediate or minimal transition.

The feature is still implemented.

Its advanced visual expression is conditional on capability.

## **23.2 Secondary polish**

Optional decorative refinements must not compete with the core interaction system.

Examples:

* Additional parallax  
* Small secondary image movement  
* More elaborate reveal geometry  
* Decorative line animations

These are not separate product features.

---

# **24 — Content Architecture**

## **24.1 Central project model**

Project content should be defined once.

Required fields include:

| Field | Purpose |
| ----- | ----- |
| `slug` | Stable project identifier |
| `number` | Editorial ordering |
| `title` | Public project name |
| `shortTitle` | Compact project label |
| `category` | Project category |
| `projectType` | Truthful classification |
| `year` | Project year |
| `role` | Actual individual contribution |
| `summary` | Short homepage description |
| `overview` | Longer project explanation |
| `designDirection` | Project art-direction narrative |
| `implementationNotes` | Verified technical details |
| `features` | Selected actual capabilities |
| `liveUrl` | External live destination |
| `repositoryUrl` | Repository where relevant |
| `caseStudyPath` | Required case-study route |
| `cover` | Main project image |
| `gallery` | Supporting images |
| `atmosphere` | Gallery theme identity |

## **24.2 Case-study content model**

Each case study needs sufficient data for:

* Hero  
* Overview  
* Design direction  
* Key experiences  
* Screenshots  
* Technical explanation  
* Closing actions  
* Next-project navigation

Do not create empty sections purely to satisfy a template.

## **24.3 Single source of truth**

Use shared data for:

* Homepage gallery  
* Mobile project blocks  
* Project index  
* Case studies  
* Related-project navigation  
* Project URLs  
* Metadata  
* Images  
* Descriptions

This prevents contradictions.

## **24.4 Image metadata**

Images should include:

* Actual file source  
* Meaningful alt text  
* Known dimensions  
* Appropriate fit behavior  
* Optional focal position  
* Optional caption  
* Project association

## **24.5 Image authenticity**

Use real project imagery.

Do not fabricate completed interfaces.

Quad requires genuine, authorized product screens.

## **24.6 Copy hierarchy**

Homepage copy should remain concise.

Suggested:

* Category: 2–5 words  
* Summary: 1–2 meaningful sentences  
* Metadata: brief  
* Services: 1–3 sentences  
* About: one concise paragraph with optional supporting detail

Case studies can be substantially richer because their purpose is deeper explanation.

## **24.7 Case-study content quality**

Avoid identical generic copy across all three projects.

Each page should show real differences in:

* Concept  
* Audience  
* Design  
* Functionality  
* Implementation  
* Visual evidence

---

# **25 — Component and Responsibility Architecture**

## **25.1 High-level tree**

**Application**

* Shared Layout  
  * Site Header  
  * Main Route Content  
  * Site Footer

**Home Route**

* Hero  
* Selected Work  
  * Work Introduction  
  * Project Index  
  * Living Frame  
    * Visual Stage  
    * Project Chapters  
* Services  
* About  
* Contact

**Case-Study Route**

* Case-Study Hero  
* Project Overview  
* Design Direction  
* Experience and Features  
* Selected Images  
* Implementation  
* Closing Navigation  
* Next Project

**Not Found Route**

* 404 Message  
* Back to Home/Work

## **25.2 SiteHeader**

Owns:

* Identity  
* Navigation  
* Contact access  
* Mobile menu  
* Accessible keyboard behavior

Does not own gallery motion.

## **25.3 HeroSection**

Owns:

* Main positioning  
* Supporting copy  
* Contextual metadata  
* Explore Work action  
* Optional entrance

Does not block initial page interactivity.

## **25.4 SelectedWorkSection**

Owns:

* Gallery structure  
* Work introduction  
* Responsive composition  
* Project chapters  
* Atmospheric context

## **25.5 LivingFrame**

Coordinates the visual relationship between project chapters and the stage.

Does not own routing or business content.

## **25.6 WorkVisualStage**

Owns:

* Active image presentation  
* Image layers  
* Visual transitions  
* Background atmosphere  
* Project-specific fit/position treatment

Does not own:

* Project descriptions  
* Contact destinations  
* Route definitions

## **25.7 ProjectChapter**

Owns:

* Semantic project description  
* Category and metadata  
* Project actions  
* Stable anchor  
* Reading/activation region  
* Stacked imagery where appropriate

## **25.8 WorkIndex**

Owns:

* Direct project anchors  
* Visual active-state indication

Does not maintain an independent project identity.

## **25.9 Gallery controller**

Owns:

* Active-chapter synchronization  
* Scroll activation logic  
* Image transition coordination  
* Resize adaptation  
* Reduced-motion response  
* Animation cleanup

Does not control the entire document scroll.

## **25.10 CaseStudyPage**

Uses the project slug to determine content.

Owns:

* Rendering the project case-study structure  
* Consistent sections  
* Route-specific content  
* Project navigation

Does not duplicate hardcoded project records.

## **25.11 CaseStudyHero**

Owns:

* Project headline  
* Metadata  
* Hero image  
* Live-project action  
* Destination identity for shared-element transitions

## **25.12 Route transition responsibility**

The route transition mechanism connects a selected project source image with its destination hero.

It should not also attempt to control the Living Frame's internal scrolling transitions.

## **25.13 Shared UI**

Use reusable components for meaningful repeated patterns:

* Container  
* Section Label  
* Editorial Rule  
* Text Link  
* Project Link  
* Responsive Image  
* Contact Link  
* Skip Link

Avoid building an unnecessarily large internal component library.

---

# **26 — Progressive Enhancement and Failure States**

## **26.1 Principle**

**The experience must remain meaningful without its advanced animation layer.**

Semantic content and navigation are essential.

Animation is an enhancement to presentation.

## **26.2 Without GSAP**

Expected behavior:

* Hero visible  
* Project content visible  
* Project links functional  
* Stable project imagery available  
* Case-study routes functional  
* Services and About accessible  
* Contact accessible

A stacked gallery is an acceptable structural fallback if desktop enhancement cannot initialize.

## **26.3 Without native View Transitions**

Expected behavior:

* Explore Project opens the correct case study.  
* Browser history works.  
* Direct routes work.  
* No transition-related blank page.

## **26.4 Reduced motion**

Disable or simplify:

* Large image movement  
* Masked reveals  
* Parallax  
* Significant zoom  
* Long entrance translations  
* Spatial route movement

Preserve the same content and navigation.

## **26.5 Slow image loading**

* Reserve image geometry.  
* Keep text visible.  
* Preserve current media until incoming media is available.  
* Do not create layout shifts.  
* Do not leave an empty gallery.  
* Preserve project actions.

## **26.6 Failed image**

Display a coherent fallback surface or verified alternative asset.

Do not fabricate imagery or endlessly replay a failed transition.

## **26.7 Animation error**

Failure of animation initialization must not destroy the page.

The implementation should prevent critical content from remaining hidden by unfinished animation styles.

## **26.8 Route transition error**

Normal navigation must take priority over decorative continuity.

Do not allow a failed transition to trap the visitor on the homepage.

## **26.9 JavaScript execution distinction**

The React application requires JavaScript unless separately prerendered or server-rendered.

Therefore, do not falsely claim full no-JavaScript functionality from a client-rendered SPA.

The actual requirement is that **essential content not depend on the optional animation subsystem**.

---

# **27 — Accessibility and Input Behavior**

## **27.1 Semantic structure**

Use:

* One primary page heading  
* Logical heading hierarchy  
* Semantic sections  
* Semantic articles  
* Real anchors for navigation  
* Real buttons for actions

## **27.2 Keyboard navigation**

Visitors must be able to:

* Reach site navigation  
* Use mobile menu  
* Activate project index links  
* Access each project  
* Open case studies  
* Return to work  
* Use next-project navigation  
* Open external project websites  
* Reach contact links

## **27.3 Focus management**

Focus must remain visible.

Route transitions must not leave focus associated with an element that no longer exists.

On new case-study navigation, the page's reading and focus position must be understandable.

## **27.4 Shared media accessibility**

Inactive image layers should not create redundant screen-reader announcements.

Decorative transition clones should be hidden from the accessibility tree.

Essential project meaning must live in semantic project chapters and case-study content.

## **27.5 Color contrast**

Atmospheric changes must preserve readable foreground/background contrast.

Project-specific moods do not justify inaccessible text.

## **27.6 Touch**

On mobile:

* Comfortable tap targets  
* Visible actions  
* No hover-only content  
* No unusual required gestures  
* No obstructive animated overlays

## **27.7 Reduced motion**

Respect `prefers-reduced-motion` across:

* Hero  
* Gallery  
* Route transitions  
* Section entrances  
* Hover effects where appropriate

## **27.8 External links**

Use understandable labels and appropriate secure external navigation behavior.

## **27.9 Case-study readability**

Longer project pages require:

* Comfortable line lengths  
* Clear headings  
* Proper image captions  
* Logical reading order  
* Appropriate content grouping

## **27.10 Animation and accessibility**

Never delay or remove the availability of essential interactive elements while an animation plays.

---

# **28 — Performance Architecture**

## **28.1 Primary challenge**

The portfolio is image-led and animated.

The main performance task is balancing visual richness with responsiveness.

## **28.2 Images**

* Optimize dimensions.  
* Prefer efficient formats.  
* Use responsive sources where helpful.  
* Reserve geometry.  
* Load below-the-fold assets progressively.  
* Preserve screenshot clarity.

## **28.3 Fonts**

Use the two selected families.

Avoid unnecessary weights.

Provide fallbacks.

Do not hide typography while custom fonts load.

## **28.4 Animation**

Favor:

* Transform  
* Opacity  
* Efficient bounded masking

Avoid:

* Large-area continuous blur  
* Excessive filters  
* Frequent layout recalculations  
* Per-pixel React state updates  
* Multiple competing animation controllers

## **28.5 Route transitions**

The shared-element effect must not force excessive layout work or freeze navigation.

Keep animation geometry deliberate and bounded.

## **28.6 Responsive loading**

The mobile gallery should not unnecessarily initialize desktop-only scroll choreography.

## **28.7 Project images**

The actual image selection should consider both fidelity and file size.

Do not load enormous full-page captures at full resolution when only a limited composition is displayed.

## **28.8 Performance fallback**

If a complex effect performs poorly:

* Reduce visual complexity.  
* Switch to a simpler transition.  
* Preserve content.  
* Keep the site responsive.

A smooth experience is more valuable than an effect that stutters.

---

# **29 — Visual Continuity Rules**

## **29.1 Shared grid**

The homepage and all case studies use one underlying layout system.

## **29.2 Shared typography**

The same display and body families define the site.

Project-specific identities appear primarily through real project imagery.

## **29.3 Shared editorial details**

Use consistent:

* Section numbering  
* Fine rules  
* Metadata labels  
* Alignment  
* Borders  
* Link styling  
* Spacing rhythm

## **29.4 Controlled contrast**

Alternate image-heavy and text-heavy compositions.

Avoid stacking several visually busy sections without breathing room.

## **29.5 Shared image identity**

The homepage project frame and case-study hero must be visibly related.

This is essential for believable spatial continuity.

## **29.6 Case-study individuality**

Each project may introduce its own visual atmosphere and image structure.

The portfolio's core visual grammar remains consistent.

## **29.7 No unrelated page templates**

The visitor should not feel that opening a case study leads to a completely different website.

## **29.8 Contact consistency**

The route to contacting us remains recognizable across the experience.

---

# **30 — User Flows**

## **Flow A — Prospective Client**

**Open portfolio**

→ Read hero  
→ Understand web design/development offer  
→ Explore Selected Work  
→ See Café Bliss  
→ Explore case study  
→ Inspect actual imagery and decisions  
→ Visit live website  
→ Return to portfolio  
→ Review services  
→ Start a project conversation

**Success:** Visitor gains meaningful confidence from both visual evidence and explanation.

## **Flow B — Direct Hospitality Case Study**

**Receive Café Bliss URL**

→ Open `/work/cafe-bliss`  
→ Understand project  
→ Review hospitality art direction  
→ Inspect functional experiences  
→ Open live website  
→ Return to portfolio  
→ Contact developer

**Success:** The case study works as an independent outreach asset.

## **Flow C — Desktop Creative Evaluator**

**Open portfolio**

→ Notice typographic identity  
→ Enter Selected Work  
→ Observe Café Bliss presentation  
→ Scroll into IMIZI  
→ Observe frame and atmosphere transform  
→ Scroll into Quad  
→ Open Quad case study  
→ Experience spatial route continuity  
→ Review technical depth

**Success:** The portfolio demonstrates creative-development ability through its own construction.

## **Flow D — Mobile Prospect**

**Open link in WhatsApp**

→ Read concise hero  
→ Scroll to stacked projects  
→ Inspect genuine imagery  
→ Read summary  
→ Open relevant case study or live website  
→ Return  
→ Contact through WhatsApp or email

**Success:** No desktop-specific interaction is required.

## **Flow E — Returning Visitor**

**Return to portfolio**

→ Use navigation or direct anchor  
→ Jump to desired project  
→ See synchronized gallery state  
→ Open case study  
→ Use browser Back  
→ Return to meaningful previous position

**Success:** Normal navigation remains predictable.

## **Flow F — Reduced-Motion Visitor**

**Open portfolio**

→ All content appears normally  
→ Navigate through anchors  
→ Browse stable image compositions  
→ Open case study without spatial zoom  
→ Reach contact

**Success:** Nothing important is lost.

## **Flow G — Technical Evaluator**

**Open Quad case study**

→ See actual application imagery  
→ Understand product features  
→ Read meaningful implementation details  
→ Open live application  
→ Optionally inspect repository

**Success:** The portfolio demonstrates real engineering capability without relying on exaggerated claims.

## **Flow H — Cross-Project Exploration**

**Open Café Bliss case study**

→ Read project  
→ Select Next Project  
→ Open IMIZI  
→ Continue through Quad  
→ Return to Selected Work

**Success:** All three case studies feel like one curated collection.

---

# **31 — Error and Edge Cases**

The implementation must explicitly account for the following.

## **31.1 Rapid scrolling**

The gallery settles on the most recently active project.

No blank stage or animation queue.

## **31.2 Reverse scrolling**

Correct previous project becomes active.

## **31.3 Index selected during transition**

Anchor navigation takes priority.

The stage synchronizes to the destination.

## **31.4 Browser resize**

Gallery geometry refreshes safely.

No duplicated observers or scroll triggers.

## **31.5 Direct project anchor**

Correct chapter and image state appear.

## **31.6 Image failure**

Layout and project actions remain available.

## **31.7 Quad authentication**

The portfolio itself provides representative real imagery and explanation.

The visitor is not required to create an account merely to understand Quad.

## **31.8 Returning from external website**

Normal browser history behavior is preserved.

## **31.9 Escape on mobile menu**

Menu closes and focus returns sensibly.

## **31.10 Reduced-motion preference changes**

The current project settles correctly.

Animation setup updates safely.

## **31.11 Short landscape viewport**

Stacked gallery replaces cramped sticky choreography.

## **31.12 Direct case-study refresh**

The page loads without a production routing error.

## **31.13 Case-study route not found**

Display 404 page.

Do not render a broken or blank case-study template.

## **31.14 Transition interrupted by navigation**

Latest navigation takes priority.

Temporary visual styles are cleaned up.

## **31.15 Shared-element browser incompatibility**

Use functional standard navigation.

## **31.16 Browser Back after case study**

Restore the prior route and appropriate work position.

## **31.17 Opening case study directly**

Display case-study hero without expecting a transition source.

## **31.18 Stale transition source**

Do not animate an outdated image associated with another project.

## **31.19 Multiple matching transition names**

Ensure only the intended active source and destination use the matching identity.

## **31.20 New route with unloaded hero image**

Preserve sensible layout and avoid a blank destination.

## **31.21 Slow device**

Simplify or reduce motion while preserving the entire experience.

## **31.22 Keyboard-only visitor**

All projects, routes, and contact methods remain accessible.

## **31.23 Missing contact configuration**

Do not publish fabricated destinations or claim outreach readiness.

## **31.24 App opened through WhatsApp browser**

Maintain usable layout, navigation, and contact behavior.

## **31.25 Sticky gallery overlap**

The visual stage must not cover later sections or overlap the header.

## **31.26 Browser scroll restoration timing**

The active gallery project must synchronize after restoration.

## **31.27 Route animation cleanup**

No stale GSAP styles, temporary overlays, or duplicate transitions persist after navigation.

## **31.28 Missing project asset**

Report the asset problem rather than replacing it with invented project imagery.

---

# **32 — Codex Implementation Sequence**

The complete experience must be built.

Implementation checkpoints exist to ensure reliable progress and quality.

## **Stage A — Application Foundation**

Build:

* App shell  
* Routing  
* Shared navigation  
* Global design tokens  
* Content architecture  
* Layout components

**Checkpoint:** All required routes resolve.

## **Stage B — Content and Real Assets**

Prepare:

* Three project records  
* Accurate descriptions  
* Real screenshots  
* Case-study content  
* Verified project URLs  
* Image metadata

**Checkpoint:** Project content is complete enough for all pages.

## **Stage C — Static Homepage**

Implement:

* Hero  
* Selected Work structure  
* Services  
* About  
* Contact  
* Footer  
* Responsive layouts

**Checkpoint:** The static presentation is coherent and complete.

## **Stage D — Three Case Studies**

Implement:

* Shared template  
* Café Bliss content  
* IMIZI content  
* Quad content  
* Real image galleries  
* Working live links  
* Back and next navigation

**Checkpoint:** All case-study routes are complete and independently usable.

## **Stage E — Full Living Frame**

Implement:

* Sticky visual stage  
* Project activation  
* Image transitions  
* Atmosphere changes  
* Project index  
* Rapid-scroll handling  
* Reverse transitions  
* Responsive adaptation  
* Reduced-motion behavior

**Checkpoint:** The complete gallery works without compromising scrolling or content access.

## **Stage F — Shared-Element Route Navigation**

Implement:

* Project-specific source identity  
* Matching case-study hero  
* Enhanced route transitions  
* Reverse-navigation behavior where reliable  
* Browser support fallback  
* Reduced-motion fallback  
* Focus/history coordination

**Checkpoint:** The transition is spatially coherent and navigation remains correct.

## **Stage G — Visual and Interaction Refinement**

Refine:

* Typography  
* Grid alignment  
* Image crops  
* Case-study compositions  
* Gallery timing  
* Responsive polish  
* Hover/focus states  
* Performance

**Checkpoint:** The experience feels deliberate and professionally finished.

## **Stage H — Testing and Deployment**

Verify:

* Typechecking  
* Linting  
* Tests  
* Routes  
* Contact links  
* Responsive behavior  
* Accessibility  
* Animations  
* Assets  
* Production build  
* Deployment

**Checkpoint:** The public site is genuinely ready for outreach.

## **32.1 Important scope rule**

Do not treat stages E and F as optional simply because they occur after the static site.

They are part of the approved complete build.

## **32.2 Quality rule**

The final result must not be declared complete unless the required functionality has been implemented and its actual status reported.

---

# **33 — Phase 1 Acceptance Criteria**

## **33.1 Information architecture**

* Four primary content routes are defined.  
* Homepage structure is explicit.  
* Every section has a purpose.  
* Three case-study routes are required.  
* 404 behavior is defined.  
* Navigation from every route is defined.  
* Project ordering is consistent.

## **33.2 Hero**

* Positioning is explicit.  
* Primary headline is defined.  
* Supporting statement is present.  
* Explore Work action is defined.  
* Responsive composition is defined.  
* Entrance remains nonblocking.

## **33.3 Living Frame**

* Desktop structure is defined.  
* Sticky behavior is defined.  
* Project chapters are defined.  
* Frame geometry remains consistent.  
* Active-project logic is defined.  
* Image transformation is defined.  
* Atmosphere transformation is defined.  
* Forward and reverse scrolling are defined.  
* Rapid scrolling is defined.  
* Project index is defined.  
* Direct project anchors are defined.  
* Responsive alternatives are defined.  
* Reduced-motion behavior is defined.

## **33.4 Case studies**

* Three complete case studies are required.  
* Shared page structure is defined.  
* Each project has its own narrative requirements.  
* Real image requirements are defined.  
* Case studies work independently.  
* Next/back navigation is defined.  
* Accurate project classification is required.  
* Technical claims must be verifiable.

## **33.5 Shared-element navigation**

* Source image behavior is defined.  
* Destination image behavior is defined.  
* Forward transition sequence is defined.  
* Browser Back behavior is defined.  
* Direct-route behavior is defined.  
* Reduced-motion behavior is defined.  
* Unsupported-browser fallback is defined.  
* Animation ownership is separated.  
* Focus/history behavior is defined.

## **33.6 Content**

* Project data fields are specified.  
* One content source is required.  
* Case-study content fields are defined.  
* Genuine image requirements are defined.  
* Concept-project identification is required.  
* Contact actions have defined locations.  
* The commercial offer remains understandable.

## **33.7 Technical and accessibility**

* Component responsibilities are separated.  
* Gallery state has one source of truth.  
* Scroll and route state responsibilities do not conflict.  
* Semantic content remains accessible.  
* Responsive layouts are deliberate.  
* Reduced motion is respected.  
* Performance constraints are defined.  
* Edge cases are covered.

## **33.8 Launch suitability**

* Full product scope is defined.  
* All routes can be implemented from the specification.  
* Core interactions have predictable fallbacks.  
* Contact remains accessible.  
* The experience is suitable for mobile outreach traffic.  
* Testing requirements can be derived from this document.  
* The specification does not contradict Phase 0 v1.1 or Phase 3\.

---

# **34 — Decisions Locked in Phase 1, Version 1.1**

The following are authoritative architectural decisions.

## **Site structure**

1. The portfolio consists of a main homepage and three dedicated case-study pages.  
2. Homepage order remains Hero → Work → Services → About → Contact.  
3. A designed 404 experience is required.  
4. The same navigation system is used throughout.  
5. Every content route must support direct navigation and refresh.  
6. Case studies are independently shareable.

## **Hero**

7. The hero is primarily typographic.  
8. The primary message remains “Digital experiences built to be remembered.”  
9. Supporting copy explicitly communicates web design/development services.  
10. The introduction is nonblocking.  
11. No decorative hero WebGL or introductory loader is required.

## **Living Frame**

12. The Living Frame is the primary signature experience.  
13. The desktop gallery uses a CSS-sticky visual stage.  
14. Project chapters scroll naturally.  
15. The outer frame remains recognizable between projects.  
16. The frame changes imagery and atmosphere.  
17. Project ordering is Café Bliss → IMIZI → Quad.  
18. A project index provides direct navigation.  
19. Active project state follows the document's reading position.  
20. Rapid scrolling must settle correctly.  
21. Reverse scrolling must work.  
22. Animation cannot trap or hijack scrolling.  
23. Tablet and mobile use deliberately stacked project layouts.  
24. Short-height screens may use the stacked layout.  
25. Reduced-motion users receive a complete accessible experience.

## **Case studies**

26. All three case studies are part of the intended complete launch.  
27. They share a consistent structural framework.  
28. Each requires distinct project-specific content.  
29. They must use genuine images.  
30. Café Bliss and IMIZI remain identified as fictional concepts.  
31. Quad must include real application imagery.  
32. Direct route navigation and refresh must work.  
33. Case-study next/back navigation is required.

## **Spatial navigation**

34. Explore Project is a required action for every project.  
35. Its enhanced transition connects the homepage image with the case-study hero.  
36. The transition belongs to the same Living Frame concept.  
37. React Router/browser View Transitions provide the intended route-continuity approach.  
38. GSAP remains responsible for within-page motion.  
39. Competing control of the same animated geometry is prohibited.  
40. Unsupported browsers receive reliable normal navigation.  
41. Reduced-motion users avoid significant spatial movement.  
42. Browser history must remain functional.  
43. Direct case-study visits cannot depend on a source image.  
44. Returning to the gallery should preserve or restore the correct project context where reliable.

## **Commercial experience**

45. Services remain concise and business-focused.  
46. About remains human and restrained.  
47. WhatsApp and email remain the principal contact methods.  
48. No custom contact form is required.  
49. Contact access remains available across routes.  
50. Case studies support direct personalized outreach.

## **Implementation and quality**

51. Project content is centralized.  
52. Essential semantic content must not depend on animation success.  
53. Responsive quality is mandatory.  
54. Keyboard navigation is mandatory.  
55. Image authenticity is mandatory.  
56. Performance and animation cleanup are mandatory.  
57. Full implementation is the target, not a minimal homepage-only deliverable.  
58. Technical fallbacks preserve functionality rather than silently remove features.  
59. Codex must test the actual result.  
60. The implementation must remain faithful to Phase 0 and Phase 2 design decisions.

---

# **35 — Decisions Governed by Phase 2**

Phase 1 locks behavior and structure.

Phase 2 defines exact visual execution.

The established visual decisions include:

* DM Sans as the primary typeface  
* Instrument Serif as the expressive secondary typeface  
* Warm Paper and dark Ink surfaces  
* Project-specific atmospheres  
* Consistent editorial grid  
* Large hero typography  
* Stable Living Frame geometry  
* 16:10 gallery target aspect ratio  
* Fine rules  
* Restrained metadata  
* Architectural image treatment  
* Purposeful motion hierarchy

The Phase 2 revision must additionally provide full specifications for:

* Case-study hero compositions  
* Case-study image galleries  
* Individual project visual storytelling  
* Homepage-to-case-study shared-element geometry  
* Destination-page entrance  
* Returning-to-gallery visual behavior  
* Responsive case-study compositions  
* Reduced-motion transition design  
* Cross-route visual consistency

These decisions must support the interaction architecture rather than replace it.

---

# **36 — Decisions Governed by Phase 3**

Phase 3 owns:

* Exact application architecture  
* Dependencies and versions  
* React Router setup  
* GSAP integration  
* ScrollTrigger behavior  
* View Transition implementation  
* Project data types  
* Component boundaries  
* Image asset processing  
* Technical error handling  
* Automated testing  
* Deployment configuration  
* Completion reporting

The development architecture must serve the experience described in this document.

It should not substitute a technically convenient but visually unrelated interaction model.

---

# **37 — Version 1.0 → 1.1 Change Record**

## **37.1 Route architecture**

**Previously:** One required homepage; case studies were optional.

**Now:** Homepage plus three case studies are required.

## **37.2 Case-study depth**

**Previously:** Case-study content architecture was preliminary.

**Now:** Complete page sequences, project-specific narratives, imagery, and navigation are specified.

## **37.3 Explore Project**

**Previously:** Secondary action shown only if a case-study route existed.

**Now:** Required action for all three projects.

## **37.4 Shared-element navigation**

**Previously:** A desirable future enhancement.

**Now:** A required part of the intended complete experience for supported environments.

## **37.5 Back navigation**

**Previously:** General browser-back guidance.

**Now:** Explicit distinction between browser history, Back to Work, direct routes, scroll restoration, and visual return behavior.

## **37.6 Content model**

**Previously:** Homepage-focused project records with optional case-study paths.

**Now:** Required case-study routes and detailed shared content structure.

## **37.7 Interaction inventory**

**Previously:** Several primary features labeled P1 or P2 and postponable.

**Now:** Main gallery, case studies, project index, and shared navigation are part of the complete scope, with device/browser fallbacks.

## **37.8 Implementation sequence**

**Previously:** Full case studies and spatial navigation appeared in optional final stages.

**Now:** Both have dedicated required implementation checkpoints.

## **37.9 Responsive architecture**

**Preserved:** Desktop sticky gallery, tablet/mobile stacked presentations.

**Expanded:** Complete responsive case-study behavior and route transitions.

## **37.10 Preserved principles**

The revision retains:

* Curated exhibition concept  
* Natural scrolling  
* Hero clarity  
* 70% editorial / 30% cinematic balance  
* Café Bliss → IMIZI → Quad ordering  
* Accessible project discovery  
* Restrained motion  
* Real project imagery  
* Honest project descriptions  
* Functional contact paths  
* Performance awareness  
* Clear component responsibilities  
* Progressive enhancement

---

# **38 — Final Experience Standard**

The finished portfolio should communicate three things:

**First:** This person understands design.

**Second:** This person can build what they design.

**Third:** I know how to contact them about my project.

The hero establishes clarity.

The Living Frame creates the memorable exhibition.

The case studies reveal the thinking and implementation behind the work.

The shared-element transition gives the exhibition spatial continuity.

The services explain commercial relevance.

About establishes the human relationship.

Contact turns interest into action.

The visitor should remember the quality of the work and the coherence of its presentation—not the effort required to navigate the website.

---

## **Phase 1 Final Principle**

**The work is the exhibition. The frame is the identity. Motion is the transition between them.**

The homepage introduces the work.

The Living Frame transforms its presentation.

The case studies invite deeper exploration.

The route transitions connect those experiences into one continuous visual language.

And every visitor retains the freedom to navigate naturally.

**Phase 1 v1.1 is now aligned with the complete product scope established in Phase 0 v1.1 and the technical architecture defined in Phase 3\.**

**Next: Update Phase 2 — Visual Identity, Art Direction & Motion System to Version 1.1.**