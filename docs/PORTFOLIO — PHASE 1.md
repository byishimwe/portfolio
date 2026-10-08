# **PORTFOLIO — PHASE 1**

## **Experience Architecture, Interaction Design & User Flows**

**Version:** 1.0  
**Date:** October 8, 2026  
**Project:** Personal Portfolio — Independent Creative Practice  
**Deadline:** Public launch and client outreach today  
**Status:** Implementation-ready proposal, building on Phase 0

---

# **00 — Phase Purpose**

Phase 0 defined **what we are building, who it serves, and why it exists**.

Phase 1 defines **how visitors experience it**.

This document specifies:

* The complete information architecture  
* Homepage section hierarchy  
* Navigation and user journeys  
* Hero layout and entrance  
* Selected Work presentation  
* The Living Frame's physical composition  
* Scroll behavior and interaction states  
* Project discovery and navigation  
* Case-study architecture  
* Mobile and tablet adaptations  
* Motion and transition behavior  
* Accessibility requirements  
* Technical component responsibilities  
* Progressive enhancement and failure states  
* Today's implementation priorities  
* Acceptance criteria

The objective is to remove architectural uncertainty before visual design and coding.

**Guiding principle:**

> Every interaction must either reveal the work, improve comprehension, or help visitors move toward a project conversation.

An effect without one of those purposes is unnecessary.

---

# **01 — Experience Philosophy**

## **1.1 The central idea**

**The portfolio behaves like a curated exhibition.**

The visitor enters through a typographic introduction, explores three distinct projects through a consistent visual frame, learns about the services and person behind the work, and reaches a clear invitation to collaborate.

The design should feel like one continuous composition rather than a collection of disconnected sections.

## **1.2 Four experience qualities**

### **A. Immediate clarity**

Visitors should understand what is offered before interacting with the gallery.

The hero must explicitly establish web design and development as the service.

### **B. Editorial confidence**

Visual rhythm comes from typography, spacing, image selection, and layout.

Movement adds refinement but must not compensate for poor composition.

### **C. Content-led immersion**

Each project changes the atmosphere of the gallery.

The project is the subject. The portfolio is the exhibition space.

### **D. Effortless movement**

Visitors can scroll, use navigation links, open live websites, jump directly to projects, and contact us without friction.

No mandatory introductions, unusual controls, or hidden navigation.

## **1.3 Intended emotional sequence**

**Arrival:** Clarity and curiosity.

**Café Bliss:** Warmth, atmosphere, and design sensibility.

**IMIZI:** Confidence, structure, and commercial credibility.

**Quad:** Technical sophistication and breadth.

**Services:** Understanding of what can be commissioned.

**About:** Confidence in the person delivering the work.

**Contact:** A natural invitation to begin a conversation.

---

# **02 — Information Architecture**

## **2.1 Public website structure**

The initial website has one primary route:

**/** — Portfolio homepage

Its sections appear in this exact sequence:

1. Navigation  
2. Hero  
3. Selected Work  
4. Services  
5. About  
6. Contact  
7. Footer

This order is intentional.

Work appears immediately after the hero because visual evidence is our strongest sales tool.

Services follow the proof, making the commercial offer easier to understand.

About establishes the human relationship.

Contact finishes the journey.

## **2.2 Section anchor structure**

| Section | Anchor |
| ----- | ----- |
| Hero | `#top` |
| Selected Work | `#work` |
| Café Bliss | `#project-cafe-bliss` |
| IMIZI | `#project-imizi` |
| Quad | `#project-quad` |
| Services | `#services` |
| About | `#about` |
| Contact | `#contact` |

Every anchor must work independently of GSAP.

A direct URL containing an anchor should lead to the correct content.

## **2.3 Optional project routes**

If time permits, use the following routes:

* `/work/cafe-bliss`  
* `/work/imizi`  
* `/work/quad`

These routes become dedicated project case studies.

The homepage must remain complete even if these routes are deferred.

**Launch decision:** Detailed case-study routes are not required before outreach. Meaningful project descriptions and direct links to the actual websites are required.

## **2.4 Navigation behavior**

The navigation should be minimal and stable.

**Left:** Personal wordmark or name

**Right:** Work / Services / About / Contact

Contact may receive slightly stronger visual emphasis than the other links.

Desktop behavior:

* The header remains accessible during scrolling.  
* It has a compact height and restrained styling.  
* It never obstructs important content.  
* It does not transform into a large animated navigation component.

Mobile behavior:

* Display a recognizable identity and direct contact access.  
* Use a compact menu if the full navigation cannot fit.  
* The menu opens and closes with standard, accessible controls.  
* Opening the menu should not animate the page into an unrelated composition.

A full-screen animated navigation experience is explicitly excluded.

## **2.5 Navigation state**

The active section may be indicated through:

* Text emphasis  
* A small underline  
* A subtle opacity change

No animated navigation tracker is required at launch.

Active-state decoration must never be the only way to understand navigation.

---

# **03 — Homepage Experience Overview**

## **3.1 Desktop experience**

The homepage follows this visual rhythm:

**01\. Typography**

Large introductory statement with substantial breathing room.

**02\. Frame emergence**

A fine editorial rule introduces the gallery.

**03\. Image-led exhibition**

Three projects are revealed through a persistent visual composition.

**04\. Return to typographic clarity**

The services section brings the visitor back to concise information.

**05\. Human presence**

The about section introduces the independent creative practice.

**06\. Strong final invitation**

An oversized typographic closing statement leads to contact.

This rhythm deliberately alternates between image-heavy and text-led compositions.

## **3.2 Mobile experience**

The mobile experience uses the same content and identity, but a different visual rhythm:

**Introduction → Project 01 → Project 02 → Project 03 → Services → About → Contact**

Each project receives its own visible image and information.

There is no requirement to scrub through a cinematic animation to reach another project.

Motion stays light and responsive.

## **3.3 Scroll philosophy**

We use **native scrolling**.

We do not:

* Replace ordinary scrolling with a custom wheel controller.  
* Force mandatory snap points between projects.  
* Lock scroll position while an animation completes.  
* Require horizontal swipes to discover essential work.  
* Prevent rapid scrolling past any section.

The site remains navigable even when visitors disregard the intended visual pacing.

---

# **04 — Hero Experience**

## **4.1 Purpose**

The hero must establish:

1. Who created the portfolio  
2. What they do  
3. The quality of their design approach  
4. Where to find the work  
5. How to initiate contact

The hero should be memorable through composition and typography rather than through a decorative animation.

## **4.2 Hero content**

### **Identity**

Personal name or wordmark, consistent with the navigation.

### **Primary headline**

**Digital experiences built to be remembered.**

Working line breaks on desktop:

**Digital experiences**  
**built to be**  
**remembered.**

Exact typography and line arrangement will be refined in Phase 2\.

### **Supporting statement**

A concise statement explaining that we design and develop distinctive, thoughtfully crafted websites for businesses and brands.

This copy should remain direct enough for a business owner to understand immediately.

### **Small metadata**

Potential elements:

* Independent Designer & Frontend Developer  
* Based in Rwanda  
* Web Design / Development / Interaction

Avoid repeating the same information in multiple places.

### **Primary directional link**

**Explore Selected Work ↓**

This points to `#work`.

### **Contact route**

The navigation provides a clear **Start a Project** action.

A second oversized hero CTA is optional, not necessary.

## **4.3 Desktop layout**

Recommended composition:

* Full-width editorial grid  
* Headline occupies the primary visual area  
* Supporting information occupies a narrower secondary area  
* Generous margins  
* Controlled alignment against common grid lines  
* Small metadata near the edges

The headline should dominate, but the service statement should remain visible without scrolling on common desktop displays.

The hero should feel open rather than empty.

## **4.4 Mobile layout**

The hero becomes a more compact vertical composition.

Order:

1. Introductory metadata or role  
2. Headline  
3. Supporting statement  
4. Explore Work link

The typography scales down, but retains personality.

Avoid forcing three desktop line breaks onto small screens if they create awkward wrapping.

The visitor should reach the selected work without having to pass through excessive unused space.

## **4.5 Entrance behavior**

The initial entrance should be short and optional.

Recommended sequence:

1. The page displays immediately.  
2. The headline settles into place with a subtle reveal.  
3. Supporting copy and metadata enter with a small delay.  
4. The page is fully interactive throughout.

No fullscreen loader.

No percentage counter.

No simulated waiting time.

No hidden page that becomes usable only after an animation finishes.

With reduced motion enabled, the content simply appears.

---

# **05 — The Transition into Selected Work**

## **5.1 Creative idea**

The hero's controlled geometry leads naturally into the gallery.

A fine horizontal rule marks the beginning of the exhibition.

As Selected Work enters the viewport, the gallery's visual area reveals its first image.

The rule and image frame should feel related through alignment and composition.

## **5.2 Practical implementation**

We should not attempt a mathematically complex transformation of a 1-pixel line into an entire image.

Instead:

* An editorial rule defines the gallery's upper boundary.  
* The media frame appears along the same alignment system.  
* The first project's image reveals through a controlled mask.  
* Project metadata becomes visible in its intended position.

This achieves the perception of continuity without fragile geometry calculations.

## **5.3 Scroll behavior**

The introductory reveal is triggered when the gallery approaches the visible viewport.

It should:

* Run only when the relevant content becomes visible.  
* Be interruptible.  
* Never hold the scroll.  
* Never hide project information if animation fails.  
* Be skipped for reduced-motion users.

The opening reveal is secondary to the gallery's project-to-project transitions.

---

# **06 — The Living Frame: Structural Design**

## **6.1 Definition**

The Living Frame is one consistent visual gallery system.

The frame itself stays recognizable.

The selected project changes its imagery, atmosphere, metadata, and subtle motion characteristics.

The visitor feels as if the exhibition has changed without the gallery being rebuilt.

## **6.2 Recommended desktop composition**

Use two major visual zones:

### **Zone A — The visual stage**

Approximately 70% of the available composition width.

Contains:

* Large project image  
* Consistent framing system  
* Controlled background surface  
* Layered media used for transitions  
* Limited depth and masking effects

### **Zone B — The editorial information rail**

Approximately 30% of the composition width.

Contains, for each project:

* Project index number  
* Project name  
* Category  
* Short description  
* Role or focus  
* Project links  
* Concept-project label where applicable

The exact proportions may be adjusted in Phase 2 to accommodate typography and screenshots.

**Important:** The 70/30 layout ratio is a spatial starting point. It is separate from our creative-direction ratio of 70% editorial / 30% cinematic.

## **6.3 The core layout technique**

The visual stage becomes sticky while the information rail scrolls naturally.

There are three project chapters in the information rail.

As each chapter reaches a defined position in the viewport, the visual stage transitions to that project's imagery.

This creates the sense of one evolving gallery without manually controlling the document's scroll position.

## **6.4 Why this is our chosen architecture**

A fully pinned, timeline-scrubbed animation would require more coordination across viewport dimensions, scrolling distances, image transitions, and browser behavior.

A sticky visual stage with natural chapter scrolling gives us:

* A recognizable persistent frame  
* Large, immersive imagery  
* An elegant relationship between image and text  
* Reliable access to every project  
* Less complicated scroll synchronization  
* Easier keyboard and mobile adaptations  
* A smaller risk of delaying launch

It is still a distinctive interaction.

Its sophistication comes from the transition quality and composition, not from making scrolling complicated.

## **6.5 Project chapters**

The information rail contains three semantic articles.

Each project is a complete content unit, not merely an animation trigger.

Project chapters receive enough vertical space to create a readable rhythm.

Their scroll regions must not contain large, apparently empty stretches solely to prolong the animation.

The exact spacing responds to content and viewport height.

## **6.6 Frame persistence**

While the visitor is inside the desktop Selected Work section:

* The main visual stage remains in a stable location.  
* Its imagery changes as project chapters advance.  
* Project metadata scrolls naturally.  
* The gallery's current atmosphere changes subtly.  
* Direct project links remain usable.

When Selected Work ends:

* The sticky stage releases naturally.  
* The next section enters.  
* There is no abrupt page jump or forced snap.

---

# **07 — Living Frame Project States**

## **7.1 Project 01 — Café Bliss**

**Visual mood:** Warm, welcoming, editorial.

The stage presents the real Café Bliss website through carefully selected screenshots.

Desired qualities:

* Warm neutral atmosphere  
* Large imagery  
* Relaxed visual rhythm  
* Gentle depth  
* Calm movement

Information:

**01 / CAFÉ BLISS**  
Hospitality / Website Concept

Short copy should describe a hospitality-focused digital experience emphasizing atmosphere, information clarity, menu exploration, and responsive behavior.

Primary action:

**View Live Website ↗**

Optional secondary action:

**Explore Project →**, only when a case-study route exists.

The project must be identified as a concept, not a paid client engagement.

## **7.2 Project 02 — IMIZI Training Club**

**Visual mood:** Strong, composed, architectural.

The transition from Café Bliss should introduce contrast and a more assertive image composition.

Desired qualities:

* Darker visual character  
* Stronger contrast  
* More disciplined geometry  
* Slightly firmer movement  
* Confident typographic hierarchy

Information:

**02 / IMIZI**  
Fitness / Brand Website Concept

Short copy should focus on identity, complete website structure, class information, membership presentation, and effective business communication.

Primary action:

**View Live Website ↗**

Optional secondary action:

**Explore Project →**

The surrounding portfolio design should adapt to IMIZI's visual identity without becoming an entirely different website.

## **7.3 Project 03 — Quad**

**Visual mood:** Structured, intelligent, digital.

Quad should feel distinct from the commercial website concepts.

Desired qualities:

* Precise presentation  
* Structured application imagery  
* Clear interface detail  
* Slightly more technical editorial treatment  
* Controlled, purposeful transitions

Information:

**03 / QUAD**  
Digital Product / Web Application

Short copy should communicate real application complexity and the breadth of interface and development capabilities.

Primary action:

**View Live Application ↗**

Optional secondary action:

**Explore Project →**

A sign-in screen alone is not an acceptable primary project image.

Use genuine, authorized screenshots of the application experience, with appropriate privacy and content considerations.

## **7.4 Transition narrative**

The three project chapters should have a deliberate progression.

**Café Bliss → IMIZI**

Warmth to strength.

**IMIZI → Quad**

Brand-led website to complex digital product.

The frame unifies the sequence.

The content creates the distinction.

---

# **08 — The Living Frame State Model**

## **8.1 Primary application states**

The gallery has three persistent project states:

* `cafe-bliss`  
* `imizi`  
* `quad`

The active project is determined primarily by the visitor's position in the normal document flow.

## **8.2 Secondary visual states**

The visual stage may be in one of the following conditions:

**Idle**

The current project is fully visible.

**Transitioning**

The stage is moving from one project presentation to another.

**Settled**

The incoming project has become the stable presentation.

For accessibility and reliability, project identity and visual animation state should not be treated as the same thing.

The correct project information should remain accessible even while images transition.

## **8.3 State transitions**

| From | Trigger | To |
| ----- | ----- | ----- |
| Hero | Scroll into work | Café Bliss |
| Café Bliss | IMIZI chapter enters active region | IMIZI |
| IMIZI | Quad chapter enters active region | Quad |
| Quad | Scroll upward into IMIZI | IMIZI |
| IMIZI | Scroll upward into Café Bliss | Café Bliss |
| Any project | Select project index | Scroll to selected chapter |
| Any project | Activate live link | Open corresponding live website |
| Any project | Activate available case-study link | Navigate to case study |

The reverse transition matters.

Scrolling upward must feel just as coherent as scrolling downward.

## **8.4 Active-project detection**

Recommended approach:

The active project is the chapter intersecting a stable activation region around the middle of the viewport.

A ScrollTrigger-based implementation may use each chapter's entry and reverse-entry callbacks, with clear boundaries.

Alternative:

Use IntersectionObserver if that proves sufficient for the launch animation.

Avoid using a continuous state update on every pixel of scrolling when discrete project transitions are all we need.

## **8.5 Rapid scrolling**

The experience must remain correct if the visitor moves quickly from Café Bliss to Quad.

Rules:

1. The latest active chapter determines the intended project.  
2. Any outdated image transition is interrupted or replaced.  
3. The stage settles on the newest project.  
4. No intermediate project animation must finish before the next begins.  
5. Project text remains readable.  
6. The frame never becomes blank between transitions.

This should be tested explicitly.

## **8.6 Source of truth**

**The document's active project chapter is the source of truth.**

We should not separately maintain conflicting active states for:

* ScrollTrigger  
* Project index  
* Stage imagery  
* Project metadata  
* Navigation highlights

All visual elements should derive from the same active project identity.

---

# **09 — Living Frame Motion Language**

## **9.1 Motion hierarchy**

The gallery's project transition is the most expressive motion system on the entire website.

Other animations should be quieter.

Hierarchy:

**Level 1:** Living Frame transitions  
**Level 2:** Frame introduction / optional route transitions  
**Level 3:** Section entrances  
**Level 4:** Hover and focus feedback

Never allow numerous Level 1 effects to compete for attention.

## **9.2 Media transition**

Recommended behavior:

1. The incoming image is prepared within the existing frame.  
2. The previous image begins to recede or disappear.  
3. The incoming image becomes visible through a controlled mask or crossfade.  
4. Small scale adjustments provide depth.  
5. The final image settles without visible shaking or overshoot.

A clean opacity transition is the safe fallback.

## **9.3 Scale movement**

Use subtle scale differences.

Indicative range:

* Normal state: `1.0`  
* Transitional or hover state: approximately `1.02–1.04`

Scale must never crop essential interface information aggressively.

For screenshots with readable UI, less scaling is preferable.

## **9.4 Masking**

Possible masking treatments:

* Horizontal reveal  
* Vertical reveal  
* Rectangular clip expansion

For today's implementation, a rectangular mask or layered crossfade is sufficient.

Complex multi-shape image morphing is excluded from the baseline.

## **9.5 Atmosphere**

Each project has a tonal environment.

Potential treatments:

* Background surface interpolation  
* Subtle color overlays  
* Frame accent changes  
* Limited shadow changes  
* Small variations in metadata emphasis

**Constraint:** Atmosphere changes must preserve readable text contrast.

The portfolio should not suddenly change its entire global color system in a way that compromises accessibility or feels like three unrelated websites.

For the launch version, limit atmospheric changes primarily to the Selected Work composition.

## **9.6 Motion timing**

Initial working ranges:

* Image transition: approximately 450–700 ms  
* Metadata emphasis: approximately 200–400 ms  
* Hover response: approximately 150–250 ms  
* Introductory frame reveal: approximately 500–800 ms

These values guide implementation but are not absolute requirements.

Timing should be shortened if transitions feel sluggish, especially during rapid scrolling.

## **9.7 Easing**

Use smooth, restrained easing.

Avoid:

* Elastic bounce  
* Exaggerated spring effects  
* Overshoot  
* Sudden acceleration  
* Repeated attention-seeking movement

We want the sensation of precise art direction, not playful UI gymnastics.

## **9.8 Scroll movement**

The gallery reacts to scrolling.

It does not control scrolling.

There should be no scroll lock, forced snapping, or delayed wheel response.

## **9.9 Hover behavior**

On pointer-capable devices:

* Project links may subtly reveal an arrow.  
* Media may respond with a slight image scale.  
* Link underline or emphasis may animate.  
* The project index may indicate the selected chapter.

Hover effects should not be required to discover information.

On touch devices, information and actions must remain fully visible.

---

# **10 — Project Index and Discoverability**

## **10.1 Purpose**

The Living Frame must not hide the fact that there are three projects.

Visitors need a way to move directly between them.

## **10.2 Recommended index**

A compact editorial index:

**01 — Café Bliss**  
**02 — IMIZI**  
**03 — Quad**

This can appear as a small navigation element integrated into the work section.

On desktop, it may sit along the frame boundary or near the image stage.

## **10.3 Index behavior**

Selecting an item scrolls to the corresponding chapter using a native anchor.

Do not implement an independent slideshow control disconnected from the document.

The scroll and active stage should remain synchronized.

## **10.4 Selected state**

The active item receives a subtle visual distinction.

Examples:

* Stronger text weight  
* Full opacity  
* Fine indicator rule  
* Small marker

The state change should not substantially move surrounding elements.

## **10.5 Mobile presentation**

The index may be reduced to a simple section heading:

**Selected Work / 01–03**

Because all three projects appear as normal stacked content, a separate persistent project index is not essential on mobile.

---

# **11 — Responsive Experience Architecture**

## **11.1 Desktop: 1100px and wider**

**Primary experience:** Sticky editorial gallery.

Characteristics:

* Large visual stage  
* Scrolling information rail  
* Three project chapters  
* Animated stage transitions  
* Optional project index  
* Full editorial composition

The frame remains visible while the visitor moves through the project chapters.

The image area should receive visual priority.

## **11.2 Tablet: 768–1099px**

**Primary experience:** Vertical editorial gallery.

Recommended structure for each project:

1. Project index and category  
2. Large image  
3. Title  
4. Description  
5. Project actions

No sticky two-column choreography is required.

Subtle image reveals remain available.

This avoids crowding the visual stage and informational rail into insufficient horizontal space.

## **11.3 Mobile: Below 768px**

**Primary experience:** Compact, vertically stacked portfolio.

Each project appears as a self-contained editorial block.

Structure:

**01 / CATEGORY**

**Large project image**

**Project name**

Brief explanation

**View Website ↗**

Optional project detail action.

Characteristics:

* Natural vertical scrolling  
* High-quality imagery  
* Legible text  
* Comfortable touch targets  
* Minimal animation  
* No horizontal overflow  
* No hidden required information  
* No hover-dependent controls

The site should look intentionally designed for mobile, not merely like a compressed desktop page.

## **11.4 Short desktop viewports**

If viewport height makes the sticky presentation cramped, allow the gallery to use its vertical layout.

A large desktop width does not guarantee generous vertical space.

The desktop gallery should be disabled or simplified on short-height displays where it cannot remain legible.

## **11.5 Orientation changes**

A visitor may rotate a tablet or resize a desktop browser.

The site must:

* Recalculate layout where needed.  
* Remove obsolete animation measurements.  
* Avoid duplicated scroll handlers.  
* Maintain the correct project state.  
* Prevent sticky-position glitches.

---

# **12 — Services Section**

## **12.1 Purpose**

Translate the visual work into understandable commercial offerings.

The visitor has seen what we can build.

Now we explain what they can commission.

## **12.2 Heading**

Working direction:

**What I Do**

Supporting copy should connect thoughtful design with practical business needs.

## **12.3 Three service blocks**

### **01 — Business Websites**

Professional and visually refined digital presences for businesses that need to communicate clearly and inspire trust.

### **02 — Custom Digital Experiences**

More distinctive websites combining art direction, motion, interaction, and tailored frontend development.

### **03 — Website Redesigns**

Improving existing websites through stronger structure, visual presentation, usability, and performance.

## **12.4 Composition**

Recommended:

* Section number or small metadata  
* Strong heading  
* Three aligned service entries  
* Thin dividing rules  
* Concise explanatory copy

Avoid conventional oversized icon cards.

The services section should look like part of the same editorial publication.

## **12.5 Interaction**

Minimal.

Potentially:

* Subtle hover emphasis on service labels  
* Gentle section introduction  
* Small rule animations

No interactive pricing table.

No rotating services carousel.

No requirement for visitors to select a service before contacting us.

---

# **13 — About Section**

## **13.1 Purpose**

Give the work a human author and support trust.

The about section should not resemble a long résumé.

## **13.2 Required content**

* Name  
* Professional role  
* Location  
* Concise personal introduction  
* Approach to design and development

## **13.3 Narrative direction**

The message should communicate:

* Care for visual quality  
* Respect for real business needs  
* Attention to implementation  
* Ability to work across design and frontend engineering

## **13.4 Visual composition**

Recommended:

Large heading:

**A little about me.**

A narrow, well-set paragraph occupying the main textual area.

Small supporting metadata may sit in a separate column.

A photograph is optional and should be used only if a suitable genuine image exists.

Do not substitute a generated or unrelated portrait.

## **13.5 Skills presentation**

Do not build a giant skills grid.

If technology needs to be mentioned, use one restrained line or short paragraph.

The projects already demonstrate technical capability.

## **13.6 Motion**

Very subtle text and rule reveals only.

No elaborate animated biography.

---

# **14 — Contact Experience**

## **14.1 Purpose**

Convert interest into a conversation.

This is the final commercial action.

## **14.2 Headline**

**Have something worth building?**

The line should be large, confident, and visually related to the hero.

## **14.3 Supporting copy**

A short invitation to discuss a new website, redesign, or digital experience.

The voice should be approachable, direct, and professional.

## **14.4 Primary action**

**Start a Project ↗**

For the Rwanda-focused launch, this can lead to WhatsApp.

We must confirm the correct destination before deployment.

## **14.5 Secondary action**

Visible email address or **Send an Email ↗**.

It must open an accurately addressed email composition.

## **14.6 Interaction**

Keep the interaction simple:

* Recognizable hover state  
* Clear focus styling  
* Functional links  
* No form submission dependency

## **14.7 Contact form decision**

**No custom contact form in the required launch scope.**

Rationale:

* WhatsApp and email already serve the primary conversion goal.  
* Forms require delivery infrastructure, spam handling, validation, failure states, and testing.  
* An unreliable contact form damages trust more than no form.

A contact form may be added later if there is a demonstrated need.

## **14.8 Footer relationship**

The contact section should flow into a compact footer rather than ending abruptly.

Footer content:

* Name/identity  
* Copyright year  
* Location if appropriate  
* Selected useful links

---

# **15 — Individual Case-Study Architecture**

## **15.1 Status**

Desirable, but secondary to the homepage launch.

We should design the architecture now so the homepage can accommodate future case-study routes without restructuring.

## **15.2 Case-study page sequence**

### **Section A — Project hero**

* Project name  
* Category  
* One-sentence overview  
* Large real project screenshot  
* Live website link

### **Section B — Project overview**

* What the project is  
* What motivated the design  
* Project type  
* Role and responsibilities

### **Section C — Design direction**

* Visual intent  
* Typography  
* Palette  
* Image treatment  
* Brand-specific design choices

### **Section D — Experience and features**

* Important interactions  
* Relevant flows  
* Information architecture  
* Responsive considerations

### **Section E — Selected imagery**

* Desktop view  
* Mobile view  
* Important detailed interface screens

### **Section F — Development**

A concise explanation of relevant implementation choices.

Focus on technical decisions that materially influenced the experience.

### **Section G — Closing navigation**

* Visit live site  
* Back to selected work  
* Next project, where useful

## **15.3 Required honesty**

For Café Bliss and IMIZI, clearly identify them as independent fictional concepts.

For Quad, describe actual features and verifiable contributions.

Do not use the conventional “challenge / solution / results” formula if we cannot substantiate real business results.

Instead, describe concept, intention, decisions, and functioning outcome.

## **15.4 Direct navigation**

If a visitor opens a case-study URL directly, the page must load correctly without first visiting the homepage.

If a user refreshes the route, it must remain functional.

## **15.5 Browser navigation**

The back button must return visitors to the previous page.

Where practical, returning to the homepage should restore the previously viewed work position.

## **15.6 Same-day fallback**

If a detailed route is not built, the homepage should still include:

* Strong screenshot  
* Description  
* Category  
* Role or focus  
* Concept label  
* Functional live-demo link

**Do not display a fake “Explore Project” link.**

---

# **16 — Shared-Element Case-Study Transition**

## **16.1 Creative goal**

Opening a project should eventually feel like entering the project displayed in the Living Frame.

The selected image expands or repositions into the case-study hero rather than disappearing into an unrelated page.

## **16.2 Intended sequence**

1. Visitor activates **Explore Project**.  
2. The clicked project frame becomes the visual anchor.  
3. Secondary homepage content recedes.  
4. The project image moves or expands toward its destination geometry.  
5. The case-study page becomes visible.  
6. The transition settles into the case-study hero.  
7. Normal scrolling continues.

The route should change as part of a real navigation process, not as a simulated page replacement that breaks browser history.

## **16.3 Engineering possibilities**

Two approaches may be evaluated:

**A. Native View Transitions**

Potentially useful when supported by the target browser and routing architecture.

**B. GSAP FLIP-style shared-element transition**

Provides more explicit control but introduces additional complexity.

Do not implement both competing approaches simultaneously.

## **16.4 Accessibility**

* Respect reduced-motion preferences.  
* Ensure focus moves appropriately after navigation.  
* Keep navigation functional without the animation.  
* Never delay content availability indefinitely.  
* Avoid sudden unwanted zooming.

## **16.5 Same-day decision**

**This transition is Phase 4 enhancement scope, not P0 launch scope.**

It must not delay a finished and working portfolio.

---

# **17 — Interaction Inventory**

Every planned interaction must have a clear purpose.

| Interaction | Purpose | Priority |
| ----- | ----- | ----- |
| Navigation anchors | Move between key sections | P0 |
| Explore Work anchor | Reach projects directly | P0 |
| Live project links | Demonstrate real work | P0 |
| WhatsApp link | Start client inquiry | P0 |
| Email link | Alternative client contact | P0 |
| Mobile navigation | Accessible section discovery | P0 |
| Project index | Jump among featured work | P1 |
| Living Frame image transitions | Establish signature identity | P1 |
| Atmospheric changes | Differentiate project chapters | P1 |
| Subtle section reveals | Refine presentation | P1 |
| Image hover response | Provide interactive feedback | P1 |
| Individual project routes | Tell deeper project stories | P1 |
| Shared-element route transition | Create spatial continuity | P2 |
| Advanced pinned choreography | Increase cinematic expression | P2 |

Priority definitions:

**P0:** Mandatory for today's usable launch.

**P1:** Add after the mandatory experience works.

**P2:** Can safely follow launch.

---

# **18 — Content Architecture**

## **18.1 Project data**

Project content should be defined centrally.

Each project needs the following data fields:

| Field | Purpose |
| ----- | ----- |
| `slug` | Stable project identifier |
| `number` | Editorial ordering |
| `name` | Public project name |
| `category` | Clear project type |
| `projectType` | Concept or other truthful classification |
| `summary` | Short commercial description |
| `description` | More substantial explanation |
| `role` | Accurate individual contribution |
| `year` | Project year |
| `coverImage` | Main image |
| `coverAlt` | Accessible image description |
| `supportingImages` | Optional secondary images |
| `liveUrl` | Working live project destination |
| `repositoryUrl` | Optional technical reference |
| `caseStudyPath` | Only when page exists |
| `atmosphere` | Presentation theme identifier |
| `features` | Selected actual capabilities |

Avoid embedding long descriptions directly inside animation components.

## **18.2 Single source of project content**

The desktop gallery, mobile gallery, and optional case-study pages should reuse the same project data.

This prevents inconsistent names, links, summaries, and disclosures.

## **18.3 Images**

Prepare at least one strong image per project.

Images should be:

* Authentic  
* High quality  
* Appropriately cropped  
* Optimized  
* Legible at intended sizes  
* Suitable for the frame's aspect ratio

Use additional assets where helpful, but do not delay launch trying to create an extensive library.

## **18.4 Quad-specific image requirement**

Quad needs imagery from its actual application experience.

If authenticated screenshots contain personal or user-generated content, use authorized demo data or sanitize sensitive information before publishing.

Do not create fictional interface screenshots that misrepresent its functionality.

## **18.5 Copy length**

Homepage descriptions should remain concise.

Suggested target:

* Category: 2–5 words  
* Summary: 1–2 meaningful sentences  
* Metadata: short and scannable  
* Service descriptions: 1–3 sentences  
* About: one concise paragraph plus optional supporting detail

The page should be visually rich without requiring extensive reading.

---

# **19 — Component Architecture**

## **19.1 Proposed high-level component tree**

**App**

* SiteHeader  
* Main  
  * HeroSection  
  * SelectedWorkSection  
    * WorkIntroduction  
    * WorkGallery  
      * WorkVisualStage  
      * WorkChapters  
        * ProjectChapter  
      * WorkIndex  
  * ServicesSection  
  * AboutSection  
  * ContactSection  
* SiteFooter

Optional routing:

* PortfolioPage  
* ProjectCaseStudyPage  
* NotFoundPage

## **19.2 SiteHeader**

Responsibilities:

* Display site identity  
* Provide main navigation  
* Provide contact access  
* Support mobile menu behavior  
* Maintain accessible keyboard interaction

Does not own gallery animation logic.

## **19.3 HeroSection**

Responsibilities:

* Display the primary positioning  
* Provide supporting copy  
* Direct visitors toward work  
* Handle optional introductory animation

Does not block initial page interactivity.

## **19.4 SelectedWorkSection**

Responsibilities:

* Establish gallery layout  
* Provide project chapter structure  
* Coordinate desktop/mobile composition  
* Own the work section's atmospheric styling

## **19.5 WorkVisualStage**

Responsibilities:

* Render the project's visual presentation  
* Manage layered images  
* Apply controlled visual transitions  
* Apply bounded atmosphere changes

Does not own business copy or routing decisions.

## **19.6 ProjectChapter**

Responsibilities:

* Display semantic project information  
* Contain project action links  
* Provide a stable scroll target  
* Act as an activation region for the current project  
* Display project imagery in stacked layouts where appropriate

Project information must remain accessible when the visual stage is disabled.

## **19.7 WorkIndex**

Responsibilities:

* Show available projects  
* Mark the active chapter  
* Provide direct anchor navigation

It does not maintain an independent project-selection state.

## **19.8 Motion controller**

Recommended as a narrowly scoped gallery controller or hook.

Responsibilities:

* Detect active chapter  
* Synchronize visual stage  
* Control image transitions  
* Clean up triggers and timelines  
* Handle resize and reduced-motion changes

It should not control the entire website's scrolling.

## **19.9 Shared UI**

Reusable components may include:

* SectionLabel  
* EditorialRule  
* ProjectLink  
* TextLink  
* Container  
* ResponsiveImage  
* ContactLink

Avoid overengineering a large component library.

Build only abstractions that improve consistency or eliminate meaningful repetition.

---

# **20 — Progressive Enhancement**

## **20.1 Baseline principle**

**The portfolio should be meaningful without advanced animation.**

Projects, descriptions, and links are normal content.

Animations enhance them.

## **20.2 Without GSAP**

Expected behavior:

* Hero remains visible.  
* Project content remains visible.  
* Project links work.  
* Gallery displays a stable project composition or stacked layout.  
* Services, about, and contact remain accessible.

No essential content should depend on an animation callback setting opacity to visible.

## **20.3 With reduced motion**

Recommended behavior:

* Disable masked image reveals.  
* Disable parallax and scale-based motion.  
* Use instant changes or very short opacity transitions.  
* Avoid smooth-scrolling animations.  
* Preserve all navigation and content.

Respect `prefers-reduced-motion`.

## **20.4 With slow image loading**

* Reserve image space using known dimensions or aspect ratios.  
* Display an appropriate stable background while loading.  
* Avoid layout shifts.  
* Keep project titles and links accessible.  
* Never show an empty white page while waiting for a gallery image.

## **20.5 With JavaScript errors in animation code**

Animation failure should not break navigation, content rendering, or contact links.

The structure must not depend on the successful completion of an animation timeline.

## **20.6 Direct anchor navigation**

Opening `/#project-imizi` should position the page near the IMIZI content and allow its matching visual to appear.

Account for the header height when positioning anchors.

---

# **21 — Accessibility & Input Behavior**

## **21.1 Semantic structure**

Use:

* One primary page heading  
* Logical heading hierarchy  
* Semantic sections and articles  
* Real anchor elements for navigation  
* Real buttons only for button actions

Avoid making noninteractive decorative elements behave like buttons.

## **21.2 Keyboard navigation**

Users must be able to:

* Reach navigation  
* Activate project links  
* Reach every project chapter  
* Operate the mobile menu  
* Access contact actions  
* Follow visible focus indicators

The gallery must never trap keyboard focus.

## **21.3 Inactive media layers**

Only the active visual presentation should be presented as the current image.

Inactive decorative image layers should not create redundant focus targets or confusing duplicate announcements.

Essential project descriptions remain in semantic project chapters.

## **21.4 Color contrast**

Atmospheric changes cannot make text difficult to read.

Project-specific visual moods should be designed against deliberate contrast rules.

## **21.5 Focus visibility**

Use a visible focus indicator that works on both light and dark surfaces.

Do not remove browser focus indicators without a suitable replacement.

## **21.6 Touch**

On mobile:

* Tap targets must be comfortably sized.  
* Links must not be obscured by image overlays.  
* No feature depends on hover.  
* No essential gesture requires unusual discovery.

## **21.7 External navigation**

External links should clearly describe their destination.

Links opening new tabs should be handled securely and, when appropriate, communicated accessibly.

## **21.8 Motion sensitivity**

Respect reduced-motion preferences across the entire website, not just the gallery.

---

# **22 — Performance Architecture**

## **22.1 Performance philosophy**

The portfolio is an image-led experience.

Our main performance challenge is balancing high-quality imagery with fast loading and responsive interaction.

## **22.2 Priorities**

* Optimize project imagery.  
* Use responsive image sizes.  
* Prefer efficient image formats where supported.  
* Reserve dimensions to prevent layout shifts.  
* Avoid downloading unnecessary large assets.  
* Load nonessential assets later.  
* Animate transforms and opacity where practical.  
* Avoid continuously triggering expensive layout calculations.  
* Keep the animation system localized.

## **22.3 Image loading**

The first visible content must not wait for all gallery images to download.

Prioritize assets needed for the initial experience.

Later project imagery can be loaded progressively while ensuring transitions remain stable.

Do not start an elaborate transition into an image that is not ready to display.

## **22.4 Font loading**

Use a restrained number of fonts and weights.

Apply an appropriate fallback stack.

Avoid making typography invisible until a custom font finishes loading.

## **22.5 Animation performance**

The gallery should not continuously measure all component geometry on each scroll event.

Use observer/trigger mechanisms and refresh calculations only when necessary.

Avoid excessive blur, filter, and large-area repaint effects.

## **22.6 Device behavior**

If a complex animated transition performs poorly on a device, the experience should degrade toward simple crossfades or a static presentation.

A smooth, reliable website is more impressive than an ambitious but stuttering one.

---

# **23 — Visual Continuity Rules**

These rules link the homepage sections into one coherent experience.

## **23.1 Shared grid**

Hero, work, services, about, and contact align to one underlying layout system.

## **23.2 Shared typography**

The same display and body families provide consistency across sections.

Project-specific identities appear mostly within their images and limited gallery treatments.

## **23.3 Shared editorial details**

Use consistent:

* Section numbering  
* Fine rules  
* Metadata labels  
* Text alignment  
* Border treatment  
* Link styling

## **23.4 Controlled contrast**

Alternate image-heavy and text-led sections.

Avoid placing three visually busy sections directly next to one another.

## **23.5 Avoid section isolation**

The site should not feel like a series of unrelated full-screen templates.

Transitions between sections should be composed through spacing, alignment, and visual rhythm.

---

# **24 — User Flows**

## **Flow A — Client browsing work**

**Open portfolio**

→ Read hero  
→ Understand web design/development offering  
→ Select or scroll to Work  
→ See Café Bliss  
→ Explore IMIZI if interested  
→ Open relevant live website  
→ Return to portfolio  
→ Review services  
→ Initiate contact

**Success:** Visitor understands the quality and relevance of the work without needing technical knowledge.

## **Flow B — Direct project discovery**

**Open portfolio with project anchor**

→ Land near selected project  
→ See corresponding image and details  
→ Open live website or continue exploring

**Success:** A project can be shared directly in personalized outreach.

## **Flow C — Mobile prospect**

**Open link from WhatsApp**

→ Read concise hero  
→ Scroll to work  
→ See large Café Bliss image  
→ Review project description  
→ Tap live website  
→ Return  
→ Tap contact

**Success:** No special interaction instructions are needed.

## **Flow D — Technical evaluator**

**Open portfolio**

→ Explore selected work  
→ Reach Quad  
→ Inspect authentic application imagery  
→ Open live experience  
→ Optionally inspect repository  
→ Learn about development capabilities

**Success:** The portfolio also demonstrates deeper engineering experience.

## **Flow E — Visitor with reduced motion**

**Open portfolio**

→ All content appears normally  
→ Navigate through native anchors  
→ Browse static/short-fade gallery  
→ Open project and contact links

**Success:** Nothing important is unavailable.

---

# **25 — Error & Edge Cases**

## **25.1 User scrolls rapidly**

The gallery settles on the latest appropriate project.

No animation queue or blank frame.

## **25.2 User scrolls backward**

Project states update correctly in reverse.

## **25.3 User clicks project index during transition**

The selected anchor takes priority.

The visual stage synchronizes with the destination chapter.

## **25.4 User resizes browser**

Sticky geometry and activation positions refresh safely.

No duplicate observers or GSAP triggers.

## **25.5 User opens a project anchor directly**

Correct chapter and visual presentation become available.

## **25.6 An image fails to load**

Preserve layout and display a useful fallback presentation.

Text and project actions remain visible.

## **25.7 A live project requires authentication**

The portfolio must already provide representative imagery and meaningful explanatory content.

This is particularly important for Quad.

## **25.8 User opens an external site and returns**

The portfolio should preserve its normal browser navigation behavior.

## **25.9 User presses Escape while mobile menu is open**

The menu closes and focus returns appropriately.

## **25.10 Reduced motion is enabled or changes**

The animation controller must respect the preference and safely settle visual state.

## **25.11 Short landscape viewport**

Use a simplified, nonsticky gallery where necessary.

## **25.12 Missing case-study route**

Do not render a misleading or broken Explore Project action.

Keep the working live website link.

## **25.13 Animation initialization fails**

All semantic content and navigation remain usable.

## **25.14 Direct route refresh**

Any launched case-study route must work when opened directly and refreshed.

---

# **26 — Today's Build Sequence**

The implementation order matters more than decorative completeness.

## **Stage A — Structural foundation**

Build:

* Application shell  
* Header/navigation  
* Hero  
* Work section with all three projects  
* Services  
* About  
* Contact  
* Footer

**Checkpoint:** The page is coherent and fully readable without animation.

## **Stage B — Visual fidelity**

Apply:

* Typography system  
* Spacing and grids  
* Accurate project imagery  
* Project-specific visual presentation  
* Responsive layouts  
* Editorial details

**Checkpoint:** The static website already looks professionally finished.

## **Stage C — Functional verification**

Verify:

* Navigation  
* Project links  
* Contact actions  
* Mobile menu  
* No obvious overflow  
* Correct asset loading  
* Accurate content

**Checkpoint:** The site can be deployed and used for outreach.

## **Stage D — Minimum viable Living Frame**

Implement:

* Desktop sticky visual stage  
* Active-chapter detection  
* Project image crossfades  
* Limited atmospheric changes  
* Project index  
* Reduced-motion behavior

**Checkpoint:** The signature gallery works smoothly without compromising the baseline.

## **Stage E — Optional enhancements**

Only if all previous checkpoints pass:

* Sophisticated masking  
* Richer image composition  
* More detailed case-study routes  
* Spatial route transitions  
* Further animation refinement

**Critical rule:** We do not move unfinished essentials into Stage E to make time for more animation.

---

# **27 — Phase 1 Acceptance Criteria**

## **27.1 Architecture**

* Homepage structure is explicit.  
* Each section has a defined purpose.  
* Project order is fixed.  
* Navigation and anchors are defined.  
* Optional routes have clear boundaries.

## **27.2 Living Frame**

* Desktop composition is defined.  
* Project chapters are defined.  
* Active-project logic is defined.  
* Forward and reverse transitions are defined.  
* Rapid-scroll behavior is defined.  
* Project index navigation is defined.  
* Responsive fallback is defined.  
* Reduced-motion behavior is defined.  
* The gallery works without advanced animation.

## **27.3 Content**

* Three projects have required content fields.  
* Real imagery requirements are defined.  
* Concept-project identification is required.  
* Contact actions have defined locations.  
* The service offer is understandable.

## **27.4 Technical**

* Component responsibilities are separated.  
* Content has one source of truth.  
* Scroll state does not conflict with other navigation state.  
* Performance and animation constraints are documented.  
* Edge cases are covered.

## **27.5 Launch suitability**

* A complete nonanimated version can ship independently.  
* The minimum viable Living Frame can be layered on afterward.  
* Optional case-study transitions cannot block outreach.  
* Mobile visitors receive an intentionally designed experience.  
* The contact path remains accessible throughout.

---

# **28 — Decisions Locked in Phase 1**

1. The portfolio is primarily one continuous homepage.  
2. Section order is Hero → Work → Services → About → Contact.  
3. The hero is typographic, not image- or WebGL-led.  
4. The site uses native document scrolling.  
5. The Living Frame is the primary signature interaction.  
6. The desktop gallery uses a persistent sticky visual stage and naturally scrolling project chapters.  
7. The desktop composition begins with an approximately 70/30 image-to-information proportion.  
8. Café Bliss, IMIZI, and Quad remain in that order.  
9. The stage changes its imagery and atmosphere while its underlying visual grammar remains consistent.  
10. Visitors can jump directly between projects.  
11. Tablet and mobile use vertically stacked project presentations.  
12. Short-height screens may use the simpler gallery layout.  
13. Scroll motion never blocks access to content.  
14. The project's semantic content remains readable independently of animation.  
15. Reduced-motion preferences are respected throughout.  
16. The launch does not require a contact form.  
17. WhatsApp and email are the primary contact paths.  
18. Detailed case studies are optional for today's launch.  
19. Shared-element page transitions are enhancements, not launch dependencies.  
20. The homepage must work before animation is added.  
21. Project content is structured centrally and reused across layouts.  
22. Visual presentation is prioritized over a technology-heavy developer résumé.  
23. Every visible link must have a working destination.  
24. The entire experience must remain trustworthy, accessible, and responsive.

---

# **29 — Decisions Reserved for Phase 2**

Phase 1 locks behavior and structure.

Phase 2 will lock visual execution.

Its remaining decisions include:

* Exact typefaces and weights  
* Display typography treatments  
* Grid measurements and page margins  
* Exact colors  
* Background surfaces  
* Gallery frame aspect ratio  
* Image cropping and composition  
* Title placement  
* Metadata styling  
* Divider treatments  
* Buttons and links  
* Motion curves and precise timings  
* Section spacing  
* Mobile typographic treatment  
* Hover visuals  
* Final hero composition  
* Final contact composition

These decisions should support the architecture we have already defined, not force us to redesign its logic.

---

# **30 — Final Experience Standard**

The finished portfolio should communicate three things in succession:

**First:** This person understands design.

**Second:** This person can build what they design.

**Third:** I know how to contact them about my project.

The Living Frame creates the memorable middle of the experience.

The hero establishes clarity.

The project work proves capability.

The services explain relevance.

The final contact section turns interest into action.

**The visitor should remember the quality of the work and the coherence of its presentation—not the effort required to navigate the site.**

---

## **Phase 1 Final Principle**

**The work is the exhibition. The frame is the identity. Motion is the transition between them.**

We will build the simplest technically reliable version of that experience, then elevate it through disciplined visual design and purposeful animation.

**Next: Phase 2 — Visual Identity, Art Direction & Motion System.**

