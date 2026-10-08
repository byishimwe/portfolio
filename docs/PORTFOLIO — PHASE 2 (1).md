# **PORTFOLIO — PHASE 2**

## **Visual Identity, Art Direction, Design System & Motion Specification**

**Version:** 1.1 — Revised and Expanded  
**Date:** October 8, 2026  
**Project:** Personal Portfolio — Independent Creative Practice  
**Signature concept:** The Living Frame — An Editorial Exhibition  
**Implementation agent:** Codex  
**Launch target:** Complete public launch — October 8, 2026  
**Status:** Full visual direction defined for implementation  
**Document role:** Authoritative art-direction, visual-design, and motion specification  
**Dependencies:** Phase 0 v1.1; Phase 1 v1.1; Phase 3 — Technical Architecture & Codex Implementation

---

# **00 — Purpose of This Phase**

Phase 0 established the business purpose and complete product scope.

Phase 1 established the experience architecture, required routes, and interaction behavior.

**Phase 2 establishes exactly how the entire experience should look, feel, move, and maintain visual continuity across pages.**

This document covers:

1. Creative direction and reference principles  
2. Visual identity  
3. Typography and type hierarchy  
4. Color system  
5. Responsive layout grids  
6. Spacing and geometry  
7. Navigation art direction  
8. Hero composition  
9. Selected Work introduction  
10. Living Frame composition  
11. Café Bliss gallery art direction  
12. IMIZI gallery art direction  
13. Quad gallery art direction  
14. Global case-study visual architecture  
15. Case-study hero compositions  
16. Café Bliss case-study art direction  
17. IMIZI case-study art direction  
18. Quad case-study art direction  
19. Case-study narrative layouts and media galleries  
20. Spatially continuous route transitions  
21. Reverse navigation and visual continuity  
22. Image selection and treatment  
23. Motion language  
24. Services, About, Contact, and Footer  
25. Responsive visual specifications  
26. Accessibility and performance  
27. Implementation design tokens  
28. Visual quality assurance  
29. Complete-build priorities  
30. Acceptance criteria  
31. Locked decisions  
32. Production inputs

## **00.1 What has changed**

The previous version concentrated primarily on the homepage and Living Frame gallery.

Version 1.1 expands the visual system to cover the full required product:

* Homepage  
* Café Bliss case study  
* IMIZI Training Club case study  
* Quad case study  
* Homepage-to-case-study transitions  
* Reverse navigation where reliable  
* Cross-route visual consistency  
* Complete mobile case-study presentation

The case studies are not optional.

The spatial route transition is part of the intended signature experience, with appropriate browser and accessibility fallbacks.

## **00.2 Creative direction remains unchanged**

We are not selecting a new aesthetic.

The established direction remains:

**Architectural-editorial design with restrained cinematic qualities.**

The goal of this revision is completeness and consistency, not reinvention.

## **00.3 Implementation standard**

This document must be sufficiently precise that Codex can translate it into components, styling, motion, and responsive layouts without independently inventing the fundamental art direction.

Exact measurements remain subject to optical refinement in a real browser.

That flexibility does not authorize replacing the selected design language.

---

# **01 — The Creative Direction**

## **1.1 Selected concept**

**The Living Frame — An Editorial Exhibition**

A contemporary personal portfolio built around architectural composition, editorial typography, carefully presented project imagery, complete project stories, and purposeful cinematic transitions.

The visual language should suggest an independent creative practice with unusually strong attention to detail.

It should feel credible to a hospitality business owner, sophisticated to an architecture studio, and carefully engineered to a frontend developer.

## **1.2 The desired impression**

Imagine a beautifully art-directed architecture or design publication translated into an interactive website.

Its pages use:

* Large confident typography  
* Quiet neutral backgrounds  
* Precise image boundaries  
* Generous margins  
* Restrained supporting labels  
* Thin editorial rules  
* Strong visual hierarchy  
* Carefully considered image placement  
* Controlled movement  
* Consistent editorial structure

Now introduce a signature interaction.

Within Selected Work, the central frame transforms between projects.

When a project is opened, the visual language continues into its own case-study page.

The visitor moves from an exhibition overview into a more detailed presentation of the selected work.

## **1.3 Creative balance**

**70% Editorial Exhibition / 30% Cinematic Camera**

### **Editorial exhibition means**

* Grid discipline  
* Typographic hierarchy  
* Ordered information  
* Consistent geometry  
* Deliberate negative space  
* Project numbering  
* Strong photography and imagery  
* Controlled visual rhythm  
* Distinct content hierarchy

### **Cinematic camera means**

* Layered images  
* Masked reveals  
* Subtle scale changes  
* Spatial continuity  
* Smooth atmospheric transformations  
* Deliberate movement  
* Depth created through composition  
* Motivated transitions between states

The cinematic layer must never overpower the editorial foundation.

## **1.4 Five visual principles**

### **Principle 01 — The work is the color**

The global interface uses a controlled palette.

The projects supply most of the visual variety.

This allows each project to retain its identity without making the portfolio feel fragmented.

### **Principle 02 — Scale creates confidence**

Important statements and project imagery should be genuinely large.

The composition should not apologize for taking space.

However, small content must remain legible and purposeful.

### **Principle 03 — Alignment creates luxury**

Strong alignment matters more than decoration.

Text, images, numbers, rules, and controls should follow a shared geometric system.

### **Principle 04 — Restraint creates contrast**

The signature transition is memorable partly because the rest of the website is controlled.

Not every section needs a dramatic animation.

### **Principle 05 — Precision creates trust**

Avoid:

* Awkward line breaks  
* Inconsistent spacing  
* Cropped information  
* Poor image quality  
* Weak hierarchy  
* Unnecessary decorative shapes  
* Misaligned controls  
* Generic case-study layouts  
* Broken mobile compositions

The visitor should perceive care without consciously inspecting every design decision.

## **1.5 A sixth principle — Continuity creates identity**

The homepage and case studies must feel like parts of the same designed environment.

The transition into a case study should not reveal an unrelated visual system.

Shared geometry, typography, spacing, and motion connect the experience.

**The project changes. The underlying design intelligence remains recognizable.**

---

# **02 — Visual References & Boundaries**

## **2.1 Reference directions**

### **Architectural editorial websites**

Use as inspiration for:

* Disciplined grids  
* Negative space  
* Typography  
* Full-width imagery  
* Careful hierarchy  
* Refined navigation

### **Independent design studios**

Use as inspiration for:

* Confident project presentation  
* Small, curated collections  
* Restrained commercial messaging  
* Sophisticated visual identity

### **Exhibition design**

Use as inspiration for:

* Consistent visual framing  
* Project-specific atmosphere  
* Deliberate transitions  
* Numbered chapters  
* Relationship between image and explanatory text

### **Cinematography**

Use as inspiration for:

* Spatial continuity  
* Motivated movement  
* Depth  
* Framing  
* Controlled changes in atmosphere  
* Visual pacing

## **2.2 Reference examples from the original direction**

* Atelier Oslo — editorial typography and spatial restraint  
* Forma Atelier — project numbering and curated presentation  
* M35 / JPW — architectural gallery discipline

These are directional references only.

Do not reproduce another studio's distinctive layout, brand identity, original imagery, or interaction choreography.

## **2.3 Rejected direction — Conventional developer portfolio**

Avoid:

* Hero portrait with floating technology icons  
* Skill-progress bars  
* Excessive programming-language badges  
* Three-column project-card grids  
* Fake terminal interfaces  
* Animated typing introductions  
* Large résumé-style sections

## **2.4 Rejected direction — Experimental technology showcase**

Avoid:

* Unrelated 3D environments  
* Sci-fi motifs  
* Neon visual language  
* Custom cursors that obstruct native behavior  
* Long intro loaders  
* Scroll hijacking  
* Heavy distortions  
* Continuous particle systems

## **2.5 Rejected direction — Generic luxury template**

Avoid:

* Decorative serif typography everywhere  
* Excessive beige and brown  
* Generic stock imagery  
* Arbitrary oversized words  
* Overly cinematic effects without purpose  
* Unnecessary background grain  
* Repeated full-screen title animations

## **2.6 Case-study-specific reference principle**

A case study should resemble a thoughtful editorial feature about the work.

Not:

**Project title → Generic laptop mockup → Challenge → Solution → Technologies → Footer**

Instead:

**Project identity → Strong visual evidence → Concept → Art direction → Experience → Selected screens → Engineering → Meaningful conclusion**

The sequence should feel curated and project-specific.

---

# **03 — Typography System**

Typography is the principal expression of identity.

There are two selected type families.

## **3.1 Primary typeface — DM Sans**

**Source:** Google Fonts  
**Family:** DM Sans  
**Role:** Core brand, editorial, and interface typography

Used for:

* Hero main lines  
* Navigation  
* Project titles  
* Case-study titles  
* Section headings  
* Service headings  
* Body copy  
* Metadata  
* Buttons and links  
* Captions  
* Contact information

### **Rationale**

DM Sans combines contemporary clarity with enough warmth to avoid an overly technical appearance.

Its versatility allows us to build a cohesive system without introducing unnecessary fonts.

### **Selected weights**

* **400:** Regular body text  
* **500:** Primary display and medium emphasis  
* **600:** Navigation, project titles, and important labels

Do not use heavy weight automatically for large headings.

## **3.2 Secondary typeface — Instrument Serif**

**Source:** Google Fonts  
**Family:** Instrument Serif  
**Role:** Expressive editorial accent

Use regular and italic styles selectively.

Appropriate uses:

* Final line of the hero headline  
* Occasional expressive statement  
* A rare case-study editorial accent  
* A carefully selected concluding phrase

Do not use Instrument Serif for:

* Long body paragraphs  
* Navigation  
* Buttons  
* Metadata  
* Image captions  
* Technical explanations  
* Every major section heading

### **Restraint rule**

**The serif accent should remain exceptional.**

The hero is its principal application.

If it appears again within a case study, it should serve a meaningful visual purpose.

## **3.3 Hero typographic treatment**

Working headline:

**Digital experiences**  
**built to be**  
*remembered.*

The first two lines use DM Sans Medium.

The last line uses Instrument Serif Italic.

The contrast should be graceful rather than theatrical.

Do not introduce gradients or a bright accent color merely to emphasize the final word.

## **3.4 Typography scale**

| Role | Desktop target | Mobile target | Treatment |
| ----- | ----- | ----- | ----- |
| Hero display | 88–144px | 46–68px | Sans 500 / Serif 400 |
| Case-study hero title | 88–132px | 46–68px | Sans 500 |
| Major section heading | 64–96px | 40–58px | Sans 500 |
| Gallery project title | 48–72px | 36–48px | Sans 500 |
| Case-study section heading | 40–64px | 30–44px | Sans 500 |
| Service title | 28–40px | 26–32px | Sans 500 |
| Lead paragraph | 20–24px | 18–20px | Sans 400 |
| Body text | 16–18px | 16px | Sans 400 |
| Supporting description | 14–15px | 14–15px | Sans 400 |
| Image caption | 13–14px | 13–14px | Sans 400 |
| Navigation | 13–14px | 14px | Sans 500 |
| Editorial metadata | 11–12px | 11–12px | Sans 500 |

These are starting ranges.

Codex must tune the final sizes against actual content and viewport widths.

## **3.5 Recommended line heights**

| Role | Line height |
| ----- | ----- |
| Oversized display | 0.94–1.02 |
| Major heading | 1.02–1.08 |
| Project title | 1.05–1.12 |
| Lead paragraph | 1.35–1.5 |
| Standard body | 1.55–1.7 |
| Image caption | 1.4–1.6 |
| Metadata | 1.2–1.4 |

Display typography should feel tightly composed.

Long-form case-study text must remain comfortable to read.

## **3.6 Letter spacing**

Suggested values:

* Large sans-serif display: approximately `-0.055em`  
* Medium headings: approximately `-0.035em`  
* Project titles: approximately `-0.045em`  
* Body: normal or slightly negative  
* Metadata: approximately `0.10em`

Do not force tight tracking onto longer reading text.

Allow Instrument Serif to preserve its natural character.

## **3.7 Text width**

Target reading measures:

* Standard body: 52–68 characters  
* Case-study long-form paragraphs: approximately 55–70 characters  
* Hero supporting copy: 34–48 characters  
* Gallery description: 30–45 characters  
* About paragraph: 52–65 characters  
* Image captions: concise and appropriately aligned

Long-form content should not span the full desktop width.

## **3.8 Capitalization**

Use normal sentence or title case for meaningful content.

Use uppercase for small editorial labels.

Examples:

`SELECTED WORK`

`INDEPENDENT PRACTICE`

`DESIGN & DEVELOPMENT`

`01 / 03`

Do not uppercase long paragraphs.

## **3.9 Numerical typography**

Project numbers:

`01`  
`02`  
`03`

Use consistent formatting and tabular figures where appropriate.

Numbering should connect the homepage gallery and case-study pages.

## **3.10 Typography on case studies**

Case-study titles use DM Sans, not a different typeface per project.

Project-specific character should emerge through:

* Image composition  
* Scale  
* Spacing  
* Color atmosphere  
* Supporting typography visible inside genuine screenshots

Do not adopt the original website's entire font system as the portfolio page's body typography.

That would fracture the experience.

## **3.11 Fallbacks**

Primary fallback:

`Arial, Helvetica, sans-serif`

Serif fallback:

`Georgia, Times New Roman, serif`

Typography must remain visible while fonts load.

---

# **04 — Color System**

## **4.1 Overall direction**

**Warm neutral, dark ink, restrained natural accents.**

The page shell remains visually stable.

Project-specific atmospheres appear primarily within selected visual areas.

## **4.2 Core palette**

| Token | Hex | Usage |
| ----- | ----- | ----- |
| Paper | `#F4F1EB` | Main background |
| Ink | `#20211F` | Primary text |
| Muted Ink | `#595A55` | Supporting text |
| Quiet Ink | `#77776F` | Nonessential metadata where contrast permits |
| Rule | `#D7D2C8` | Dividers and boundaries |
| Soft Surface | `#EBE6DD` | Secondary surfaces |
| Warm White | `#FCFAF6` | Light media surfaces |
| Dark Surface | `#1B1C1A` | Dark treatment |
| Accent | `#805D4B` | Restricted warm emphasis |

The Paper background should feel warm without becoming visibly yellow.

Ink should feel rich without being pure black.

## **4.3 Principal combinations**

**Paper \+ Ink:** Primary editorial composition.

**Paper \+ Muted Ink:** Supporting text.

**Dark Surface \+ Warm White:** Strong contrast treatment.

**Paper \+ Accent:** Limited emphasis.

Use accents sparingly.

## **4.4 Color hierarchy**

Primary text uses Ink.

Supporting text uses Muted Ink.

Quiet Ink is reserved for sufficiently legible noncritical metadata.

Rule is used for separators.

Strong contact actions may use Ink and Warm White.

Do not color every link using the Accent token.

## **4.5 Project atmospheres**

### **Café Bliss**

**Mood:** Warm and tactile

* Stage: `#E8DED1`  
* Supporting accent: `#8B6650`  
* External editorial text: global Ink  
* Image character: natural warmth and soft contrast

### **IMIZI**

**Mood:** Strong and grounded

* Stage: `#252624`  
* Supporting neutral: `#D5D1CA`  
* Project-specific red comes from the genuine IMIZI design  
* Light text when placed on dark surfaces

### **Quad**

**Mood:** Structured and digital

* Stage: `#E1E7E8`  
* Supporting neutral: `#B8C4C7`  
* External editorial text: global Ink  
* Image character: crisp application UI

## **4.6 Atmosphere boundaries**

Project-specific color may influence:

* Gallery stage  
* Image boundary  
* Narrow surrounding field  
* Small section indicators  
* Case-study hero media field  
* Selected project-specific media modules

It must not unexpectedly recolor:

* Global header  
* Standard body text  
* Important contact controls  
* Entire site background  
* Focus indicators

## **4.7 Cross-route atmosphere continuity**

When a visitor moves from Café Bliss in the Living Frame into its case study, the destination hero may retain a recognizable warm visual field.

Equivalent behavior applies to IMIZI and Quad.

However, the long-form case-study reading environment returns predominantly to the portfolio's core Paper and Ink system.

**The project atmosphere is a chapter treatment, not a replacement for the entire brand identity.**

## **4.8 Accessibility**

Verify actual foreground/background combinations.

Target WCAG AA:

* Normal text: 4.5:1  
* Large text: 3:1  
* Meaningful UI boundaries and indicators: 3:1 where applicable

The exact values above are design starting points.

If small text fails contrast, adjust the combination.

---

# **05 — Layout Grid**

## **5.1 Global container**

**Maximum width:** 1440px.

Suggested horizontal padding:

| Viewport | Padding |
| ----- | ----- |
| Wide desktop | 64–88px |
| Standard desktop | 40–64px |
| Tablet | 28–40px |
| Mobile | 20–24px |
| Narrow mobile | 16–20px |

Initial responsive rule:

`padding-inline: clamp(20px, 5vw, 88px)`

Apply appropriate overrides where necessary.

## **5.2 Desktop grid**

**12-column editorial grid.**

Suggested column gap: approximately 24px.

Shared alignments should govern:

* Navigation  
* Hero  
* Selected Work  
* Living Frame  
* Services  
* About  
* Contact  
* Footer  
* Case-study content  
* Case-study image galleries

## **5.3 Tablet grid**

Use a six-column conceptual grid or equivalent practical CSS layout.

Focus on image clarity and reading width.

## **5.4 Mobile grid**

Use a four-column conceptual grid that normally resolves to one principal content column.

Avoid complex multi-column case-study layouts on small screens.

## **5.5 Shared alignment lines**

Important shared lines:

1. Left outer content boundary  
2. Major visual-stage beginning  
3. Information-column beginning  
4. Right outer content boundary

Case-study heroes should reuse these lines where visually appropriate.

## **5.6 Controlled asymmetry**

Appropriate examples:

* Large hero title with narrower supporting metadata  
* Gallery image paired with a compact information rail  
* Case-study heading with a separate project metadata column  
* Wide media block paired with a small caption area

Avoid arbitrary offsets.

Every asymmetrical composition should feel intentional.

## **5.7 Case-study grid behavior**

Use the same 12-column foundation while allowing project-specific media arrangements.

Examples:

* Full-width image occupying all available columns  
* Main text occupying approximately six or seven columns  
* A visual paired with narrow explanatory copy  
* Two coordinated image columns  
* Full-width media followed by a narrow caption

Do not force every project section into a repetitive 50/50 split.

## **5.8 Reading versus exhibition widths**

The image may use the full container.

Long-form writing should use a narrower reading measure.

The alternation between those widths establishes the editorial rhythm.

---

# **06 — Spacing System**

## **6.1 Base rhythm**

Use a restricted spacing scale:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160`

The site should not contain dozens of arbitrary spacing values.

## **6.2 Component spacing**

Suggested starting points:

* Label to nearby text: 8–12px  
* Heading to paragraph: 20–32px  
* Project title to category: 8–12px  
* Paragraph to action: 24–32px  
* Service entry internal separation: 16–24px  
* Major content blocks: 48–80px

## **6.3 Homepage section spacing**

Desktop:

* Major vertical padding: 120–160px  
* Compact subsections: 64–96px

Mobile:

* Major vertical padding: 72–96px  
* Compact subsections: 40–64px

## **6.4 Case-study spacing**

Case studies need their own rhythm.

Suggested desktop spacing:

* Hero text to media: 48–80px  
* Hero media to overview: 96–144px  
* Between major narrative sections: 112–160px  
* Between related images: 24–48px  
* Image to caption: 12–20px  
* Text heading to paragraph: 24–32px

Mobile:

* Hero text to image: 32–48px  
* Image to next content section: 64–96px  
* Major narrative sections: 72–96px  
* Related media: 20–32px  
* Image to caption: 12–16px

These are design starting points.

They should be tuned based on content.

## **6.5 Negative space**

Whitespace should create:

* Hierarchy  
* Breathing room  
* Visual pause  
* Image emphasis  
* Reading rhythm  
* Chapter separation

Avoid large blank stretches without a clear purpose.

## **6.6 Case-study pacing**

Do not place all text together followed by all images.

Interleave:

**Context → Image → Explanation → Image → Detail → Conclusion**

This creates the sensation of progressing through a curated publication.

## **6.7 Section boundaries**

Use thin rules or purposeful negative space.

Avoid turning every section into a different colored rectangle.

---

# **07 — Geometry & Surface Treatment**

## **7.1 Overall geometry**

Predominantly rectangular and architectural.

Use:

* Crisp image boundaries  
* Straight rules  
* Balanced frames  
* Minimal rounding  
* Precise alignment

## **7.2 Radii**

Recommended:

* Living Frame: square or 2px  
* Case-study media: 0–4px  
* Small controls: 2–4px

Avoid rounded dashboard-style cards.

## **7.3 Borders**

Primary border:

`1px solid var(--color-rule)`

Use for:

* Header  
* Gallery boundaries  
* Section labels  
* Service rows  
* Case-study metadata divisions  
* Image captions  
* Footer

## **7.4 Shadows**

Almost absent.

Use a subtle shadow only where it genuinely improves media separation.

Avoid large floating-card shadows.

## **7.5 Textures**

Default: no artificial paper grain.

Project imagery already supplies texture.

## **7.6 Background decoration**

Avoid:

* Abstract blobs  
* Floating circles  
* Unnecessary gradients  
* Ornamental 3D  
* Decorative particles

Typography and project imagery provide sufficient character.

## **7.7 Geometry across route transitions**

The shared visual object should retain recognizable proportions and boundaries as it moves from gallery frame to case-study hero.

Differences in final size are expected.

Unnecessary changes in shape are not.

---

# **08 — Navigation Art Direction**

## **8.1 Structure**

Desktop:

**Left:** Personal wordmark

**Right:** Work / Services / About / Start a Project

## **8.2 Wordmark**

Working display:

**PRINCE ISHIMWE**

Use the final confirmed public name.

Treatment:

* DM Sans  
* 14–16px  
* Weight 600  
* Slight negative tracking  
* No unnecessary icon or monogram

## **8.3 Header dimensions**

Desktop:

Approximately 80px.

Mobile:

Approximately 64px.

## **8.4 Positioning**

Sticky at top.

Preferred treatment:

* Paper background  
* High legibility  
* Fine bottom rule if useful  
* Minimal visual change on scroll

Avoid heavy glassmorphic effects.

## **8.5 Navigation links**

* 13–14px  
* Medium weight  
* Ink color  
* Compact spacing  
* Underline or subtle emphasis on hover  
* Approximately 180–220ms feedback

## **8.6 Contact action**

**Start a Project ↗**

May receive slightly stronger text emphasis.

Avoid a large button that dominates the header.

## **8.7 Mobile menu**

Use a simple compact navigation panel.

Requirements:

* Recognizable wordmark  
* Accessible menu button  
* Clear open/close state  
* Contact link  
* Keyboard access  
* Escape behavior  
* Visible focus

## **8.8 Case-study navigation consistency**

The same header is used on all routes.

Do not create an entirely different navigation design for each case study.

## **8.9 Header during shared transitions**

The header should remain stable during page navigation.

Do not make it scale, rotate, or participate in the shared-image transition.

The project image is the visual protagonist.

---

# **09 — Hero Art Direction**

## **9.1 Concept**

**A large editorial statement with supporting information arranged like publication metadata.**

The hero must communicate premium design quality immediately.

## **9.2 Composition**

Desktop:

* Oversized headline  
* Narrow supporting paragraph  
* Small professional metadata  
* Strong left alignment  
* One directional link  
* Generous negative space

## **9.3 Headline**

**Digital experiences**  
**built to be**  
*remembered.*

First two lines:

* DM Sans  
* Weight 500  
* Tight tracking  
* Ink

Final line:

* Instrument Serif Italic  
* Weight 400  
* Ink

## **9.4 Desktop scale**

Initial target:

`font-size: clamp(5.5rem, 8vw, 9rem)`

Line height:

`0.95`

Sans tracking:

`-0.055em`

Verify actual fit.

## **9.5 Supporting copy**

“I design and develop thoughtful websites for businesses and brands — combining strong visual direction, purposeful interaction, and reliable frontend execution.”

Treatment:

* 18–22px desktop  
* 16–18px mobile  
* Muted Ink  
* Narrow line measure

## **9.6 Metadata**

Potential labels:

**INDEPENDENT DESIGNER & FRONTEND DEVELOPER**

**BASED IN RWANDA**

Avoid repetition.

## **9.7 Hero height**

Desktop:

Approximately 80–90% of usable viewport height, subject to content fitting.

Mobile:

Content-driven, with generous but controlled spacing.

## **9.8 Explore Work**

**Explore Selected Work ↓**

A typography-led link.

No oversized primary button required.

## **9.9 Hero animation**

Suggested:

* Subtle opacity  
* 16–24px vertical settling  
* Supporting copy follows  
* Approximately 650–700ms overall

No letter-by-letter animation.

No mandatory loader.

## **9.10 Reduced motion**

Content appears immediately without significant translation.

## **9.11 Case-study relationship**

The case-study hero must have the same level of typographic confidence, but should not copy the homepage headline composition exactly.

The homepage introduces the practice.

Case-study heroes introduce individual projects.

---

# **10 — Selected Work Introduction**

## **10.1 Purpose**

Move from typography-led introduction to image-led exhibition.

## **10.2 Content**

Label:

**01 / SELECTED WORK**

Heading:

**Selected work.**

Optional supporting statement:

“Three explorations of identity, interaction, and digital experience.”

The statement must not imply three commissioned clients.

## **10.3 Composition**

Use:

* Fine upper rule  
* Section number  
* Large heading  
* Brief context  
* Clear beginning of gallery

## **10.4 Frame emergence**

The media frame appears using shared grid alignment.

The gallery should feel as though the exhibition has opened.

## **10.5 Motion**

A restrained rule reveal followed by an image reveal.

Do not implement a fragile transformation from a literal 1-pixel line into the entire frame.

## **10.6 Relationship to case studies**

The project numbering introduced here carries through to the individual pages.

For example:

**01 / 03 — CAFÉ BLISS**

The exhibition and its detailed project page share this editorial identity.

---

# **11 — The Living Frame: Main Composition**

## **11.1 Structural design**

Desktop:

**A. Persistent visual stage**

**B. Scrolling editorial project rail**

The visual stage dominates.

The information rail provides context and navigation.

## **11.2 Proportions**

Initial target:

* Approximately 67% visual stage  
* 40–56px editorial gap  
* Remaining width for information

Calculate proportions in a way that preserves an adequate information rail.

The gap must not be ignored when computing column widths.

## **11.3 Stage ratio**

**16:10**

Reasons:

* Cinematic but not excessively wide  
* Suitable for website screenshots  
* Reasonable vertical dimensions  
* Versatile across business sites and applications

Keep the external frame geometry stable across projects.

## **11.4 Sticky dimensions**

The frame must fit below the navigation.

Starting top offset:

Approximately 96–120px.

Use the actual available viewport height to validate the frame.

## **11.5 Gallery rail**

Three naturally scrolling chapters.

Each includes:

* Project number  
* Category  
* Project name  
* Description  
* Project type and role  
* Explore Project action  
* View Live Website action

**Explore Project is required**, not optional.

## **11.6 Primary action hierarchy**

Recommended visual hierarchy:

**Explore Project →**

Primary internal exploration action.

**View Live Website ↗**

Secondary but clearly visible external action.

The live link must remain easy to find.

Neither action should be hidden behind hover.

## **11.7 Project metadata composition**

Example:

**01 / 03**

`HOSPITALITY — CONCEPT WEBSITE`

**Café Bliss**

Short summary.

`DESIGN & DEVELOPMENT · 2026`

**Explore Project →**

**View Live Website ↗**

## **11.8 Project chapter height**

Initial desktop target:

`min-height: clamp(420px, 68svh, 660px)`

Tune based on actual reading experience.

Do not create unnecessary empty scroll distance.

## **11.9 Active chapter relationship**

The active image should correspond to the chapter occupying the intended reading region.

Its title and actions should be visible or easily accessible.

## **11.10 Project index**

**01 — Café Bliss**

**02 — IMIZI**

**03 — Quad**

Integrate this as a restrained editorial control.

## **11.11 Active index state**

Active:

* Ink  
* Small underline or rule  
* Full opacity

Inactive:

* Muted Ink  
* No large movement

## **11.12 Stage atmosphere**

The stage carries project-specific color.

The broader page remains primarily Paper.

## **11.13 Image-link behavior**

The Explore Project text link is mandatory and explicit.

The active visual image may also function as a case-study link where the design supports a clear accessible interaction.

Do not make the visual image the only discoverable way to enter a project.

## **11.14 Transition-source requirement**

The currently displayed project image must have a clear visual identity that can connect to the corresponding case-study hero.

This requirement influences image selection, framing, and destination composition.

## **11.15 Responsive simplification**

Tablet/mobile use stacked projects.

They preserve:

* Project imagery  
* Editorial metadata  
* Explore Project action  
* Live website action  
* Genuine content

---

# **12 — Café Bliss Gallery Art Direction**

## **12.1 Role**

The first project establishes the Living Frame's initial quality.

## **12.2 Mood**

Warm, inviting, tactile, editorial.

## **12.3 Priorities**

* Hospitality atmosphere  
* Authentic screenshot  
* Refined typography  
* Clear website identity  
* Recognizable composition

## **12.4 Stage treatment**

Warm-neutral surface:

`#E8DED1`

Genuine Café Bliss imagery dominates.

Minimal shadow.

Controlled image inset where appropriate.

## **12.5 Screenshot selection**

Prefer an image showing:

* Café Bliss identity  
* Strong typography  
* Hospitality photography  
* Convincing layout  
* Actual website content

## **12.6 Information**

**01 / 03**

**HOSPITALITY — CONCEPT WEBSITE**

**Café Bliss**

Suggested description:

“A warm, responsive digital experience for a fictional neighborhood café, designed around atmosphere, menu discovery, and intuitive navigation.”

Metadata:

`DESIGN & DEVELOPMENT · 2026`

## **12.7 Actions**

**Explore Project →**

`/work/cafe-bliss`

**View Live Website ↗**

[https\://cafe-bliss-rw.vercel.app](https://cafe-bliss-rw.vercel.app/)

## **12.8 Motion**

* Soft reveal  
* Gentle depth  
* Minimal image scale  
* Smooth atmosphere transition

Café Bliss establishes the baseline motion character.

## **12.9 Continuity into case study**

The same genuine project image, or a compositionally matching version, should become the Café Bliss case-study hero.

Its warm atmospheric surface should remain recognizable during the transition.

---

# **13 — IMIZI Gallery Art Direction**

## **13.1 Role**

Demonstrate strong brand character and complete commercial website presentation.

## **13.2 Mood**

Strong, disciplined, confident, architectural.

## **13.3 Priorities**

* Brand identity  
* Contrast  
* Strong composition  
* Website structure  
* Athletic character  
* Real imagery

## **13.4 Stage treatment**

Dark surface:

`#252624`

Preserve the website's own neutral and iron-red visual identity.

Do not arbitrarily recolor the screenshot.

## **13.5 Screenshot selection**

Prefer an image showing:

* IMIZI branding  
* Strong typography  
* Actual website composition  
* Relevant fitness imagery  
* Clear visual hierarchy

## **13.6 Information**

**02 / 03**

**FITNESS — CONCEPT WEBSITE**

**IMIZI Training Club**

Suggested description:

“A bold digital presence for a fictional strength and conditioning club, connecting identity, classes, memberships, and a clear path to explore the experience.”

Metadata:

`DESIGN & DEVELOPMENT · 2026`

## **13.7 Actions**

**Explore Project →**

`/work/imizi`

**View Live Website ↗**

[https\://imizi-training-club.vercel.app](https://imizi-training-club.vercel.app/)

## **13.8 Motion**

* Geometric reveal  
* Controlled contrast  
* Slightly firmer rhythm  
* Clean settling  
* No bounce

## **13.9 Continuity into case study**

The gallery's dark stage should transition naturally into a related IMIZI case-study hero presentation.

The portfolio shell should remain recognizable.

---

# **14 — Quad Gallery Art Direction**

## **14.1 Role**

Demonstrate advanced product interfaces and technical depth.

## **14.2 Mood**

Precise, structured, intelligent, digital.

## **14.3 Priorities**

* Genuine product interface  
* Real functionality  
* Clear application detail  
* Strong information architecture  
* Technical credibility

## **14.4 Stage treatment**

Cool-neutral surface:

`#E1E7E8`

Use a clean application screenshot.

Preserve the interface's actual colors and layout.

## **14.5 Screenshot selection**

A login screen alone is unacceptable.

Use a genuine authorized authenticated view showing meaningful product functionality.

Do not fabricate the interface.

## **14.6 Information**

**03 / 03**

**DIGITAL PRODUCT — WEB APPLICATION**

**Quad**

Suggested description:

“A full-stack student community platform bringing content, profiles, messaging, and real-time interactions into one connected digital experience.”

Metadata:

`FULL-STACK DEVELOPMENT · 2026`

## **14.7 Actions**

**Explore Project →**

`/work/quad`

**View Live Application ↗**

[https\://joinquad.vercel.app](https://joinquad.vercel.app/)

Optional repository access may appear in the case study.

## **14.8 Motion**

* Crisp transitions  
* Structured masking  
* Minimal blur  
* Slightly quicker settling  
* Precise rather than futuristic

## **14.9 Continuity into case study**

The authentic application interface should become the visual anchor leading into Quad's case-study page.

The image must remain readable during its final settled state.

---

# **15 — Global Case-Study Visual Architecture**

This is one of the major additions in Version 1.1.

## **15.1 Central principle**

**A case study is an editorial feature, not an expanded project card.**

Every project page should feel curated, substantial, and visually connected to the overall portfolio.

## **15.2 Shared identity**

All three case studies inherit:

* DM Sans  
* Instrument Serif as rare accent  
* Paper and Ink shell  
* Global grid  
* Editorial numbering  
* Fine rules  
* Consistent metadata  
* Restrained interactions  
* Shared header and footer  
* Common contact/navigation language

## **15.3 Shared visual structure**

Each case study contains:

1. Project hero  
2. Overview  
3. Design direction  
4. Experience and key features  
5. Selected imagery  
6. Development highlights  
7. Closing actions  
8. Next-project navigation

The exact arrangement of media within the middle sections may vary to suit the project.

## **15.4 Consistency versus sameness**

The layout system should be consistent.

The pages should not be visually identical.

Café Bliss has a warm hospitality emphasis.

IMIZI has a stronger athletic brand character.

Quad has a precise application-oriented presentation.

Variation should arise from the actual work, not arbitrary changes to portfolio typography.

## **15.5 Editorial identity**

Use:

* Section labels  
* Small project numbers  
* Large controlled headlines  
* Narrow reading columns  
* Wide authentic imagery  
* Carefully placed captions  
* Strong vertical rhythm

## **15.6 Page backgrounds**

Preferred standard reading environment:

Paper with Ink typography.

Project atmospheric treatments may appear in:

* Hero visual fields  
* Image modules  
* Selected wide media sections  
* Small metadata accents

Avoid turning every case study into a completely different global theme.

## **15.7 Narrative pacing**

A good page should alternate between:

* Visual evidence  
* Explanation  
* Details  
* Breathing room

Example rhythm:

**Project identity → Large image → Overview → Visual composition → Explanation → Interface detail → Technical context → Closing image/action**

## **15.8 Page length**

Case studies should be substantial enough to demonstrate genuine work.

However, longer does not automatically mean better.

Avoid repetitive sections and generic filler.

The page should provide meaningful information at every major step.

## **15.9 No repeated hero formula**

The three case studies may share structure, but should not each display the same uninspired arrangement of a giant title followed by six identical screenshot cards.

Use project-specific visual modules while retaining the same overall design grammar.

---

# **16 — Case-Study Hero Composition**

This section defines the most important connection between the homepage and individual projects.

## **16.1 Purpose**

The case-study hero must:

* Identify the project  
* Establish its category and character  
* Communicate its purpose  
* Show genuine project imagery  
* Provide a live destination  
* Continue the visual identity of the clicked gallery frame

## **16.2 Required elements**

Every case-study hero includes:

* Project number  
* Category  
* Project name  
* One-sentence introduction  
* Project type  
* Role  
* Year  
* Primary project image  
* View Live Website action  
* Clear route toward Selected Work

## **16.3 Recommended desktop composition**

Use two principal layers of hierarchy.

### **Layer A — Editorial heading area**

Contains:

* Breadcrumb or back-to-work link  
* Project number and category  
* Large project title  
* Short introduction  
* Compact project metadata

### **Layer B — Main visual hero**

Contains:

* Large authentic screenshot  
* Project-specific atmospheric surface  
* Precise image framing

## **16.4 Hero title scale**

Initial desktop target:

88–132px.

Mobile:

46–68px.

Use fluid sizing.

Prevent long titles such as IMIZI Training Club from clipping.

Allow intentional line wrapping where needed.

## **16.5 Metadata**

Example:

`01 / 03`

`HOSPITALITY · CONCEPT WEBSITE`

`ROLE — DESIGN & DEVELOPMENT`

`YEAR — 2026`

The metadata should be scannable.

Do not present it as a large table dominating the hero.

## **16.6 Image placement**

The project media should have substantial presence.

Recommended desktop behavior:

* Full content width or similarly dominant composition  
* Appropriate atmospheric field  
* Clear relationship to the headline above  
* Limited decorative framing  
* Genuine screenshot

## **16.7 Hero geometry and route transition**

The destination image must be able to receive the shared-element transition from the homepage frame.

Recommended:

* Maintain recognizable image edges.  
* Avoid unrelated shape changes.  
* Preserve a compatible aspect-ratio relationship where practical.  
* Allow image scaling/repositioning between source and destination.  
* Avoid changing to a completely unrelated picture during the shared transition.

## **16.8 Source image matching**

Use the same genuine asset whenever that creates the cleanest visual continuity.

If the destination uses a larger or differently cropped composition, preserve enough recognizable content that the movement still feels coherent.

## **16.9 Destination reveal**

As the shared media settles:

* Project title becomes readable.  
* Supporting metadata appears.  
* The layout resolves into its normal reading state.  
* The visitor can continue scrolling.

Do not keep text hidden behind a prolonged transition.

## **16.10 Direct route behavior**

When the case study loads directly:

* The complete hero appears normally.  
* The image has its correct final composition.  
* No invisible source element is expected.  
* No introductory animation is required to reveal essential content.

## **16.11 Mobile hero**

Recommended order:

1. Back to Work  
2. Project number/category  
3. Project title  
4. Short description  
5. Compact metadata  
6. Main image  
7. Live website action

The visual media should remain substantial.

Avoid oversized empty margins that push the first image too far down.

## **16.12 Image semantics**

The hero image must use appropriate alternative text.

Decorative transition clones should not create redundant announcements.

---

# **17 — Café Bliss Case-Study Art Direction**

## **17.1 Purpose**

Demonstrate a carefully designed hospitality website through a rich but restrained editorial presentation.

## **17.2 Emotional character**

Warm, calm, tactile, welcoming.

The page should feel appropriate to hospitality without simply duplicating the Café Bliss website.

## **17.3 Hero**

Suggested composition:

**01 / 03 — HOSPITALITY**

**Café Bliss**

A concise concept description.

Large authentic Café Bliss screenshot.

Warm atmospheric image field:

`#E8DED1`

## **17.4 Visual distinction**

Use warmth primarily through genuine photography, the website's own typography, and limited surrounding surfaces.

Keep portfolio titles and body copy in the global type system.

## **17.5 Overview section**

Recommended heading:

**A warmer kind of digital welcome.**

This is a working editorial heading, not a claim about business performance.

Explain the intended experience:

* Welcoming atmosphere  
* Clear café information  
* Menu discovery  
* Reservation-oriented exploration

## **17.6 Overview layout**

Desktop:

* Small section label  
* Large heading in a broad column  
* Narrow explanatory paragraph offset nearby or beneath  
* Fine editorial rule

Mobile:

* Heading and paragraph stack naturally

## **17.7 Design direction section**

Focus on:

* Warmth  
* Typography  
* Photographic composition  
* Editorial spacing  
* Palette  
* Brand storytelling

Present actual website visuals.

A useful composition is a wide image followed by a narrower explanation.

## **17.8 Experience section**

Show real interaction areas such as:

* Menu presentation  
* Filtering  
* Reservation-oriented UI  
* Responsive navigation

Use screenshots that genuinely demonstrate these features.

## **17.9 Media arrangement**

Recommended sequence:

1. Large hero screenshot  
2. Wide supporting screenshot  
3. Text-led explanation  
4. A paired visual module showing useful interface details  
5. Mobile screenshot presentation where available  
6. Final project image or detail

Avoid unnecessary device mockups.

## **17.10 Image framing**

Warm neutral background may support a contained screenshot.

Allow the actual website imagery to retain its original contrast and color.

## **17.11 Captions**

Use concise descriptions identifying what is shown.

Example:

**Menu discovery — Category-based browsing within the café experience.**

Do not invent feature outcomes.

## **17.12 Development section**

Use the global Paper and Ink reading system.

Discuss relevant implementation details without overwhelming the hospitality narrative with code terminology.

## **17.13 Closing**

Provide:

**Visit Live Website ↗**

**Back to Selected Work ←**

**Next Project — IMIZI →**

## **17.14 Transition continuity**

The Café Bliss homepage frame should expand/reposition into the case-study hero while preserving its warmth and recognizable screenshot.

---

# **18 — IMIZI Case-Study Art Direction**

## **18.1 Purpose**

Demonstrate the translation of a distinctive fitness brand into a coherent multi-page business website.

## **18.2 Emotional character**

Strong, disciplined, grounded, confident.

## **18.3 Hero**

Suggested:

**02 / 03 — FITNESS**

**IMIZI Training Club**

Short concept statement.

Large genuine screenshot.

Dark stage surface:

`#252624`

## **18.4 Color treatment**

Use the dark atmosphere principally within hero and selected image modules.

The standard reading sections return to Paper and Ink.

The project's existing red accent should appear naturally through its authentic imagery.

Do not introduce unrelated red UI controls throughout the portfolio.

## **18.5 Overview section**

Suggested heading:

**Identity built on strength.**

Explain the intended brand and the relationship between identity, content, and website structure.

## **18.6 Design direction**

Emphasize:

* Athletic visual character  
* Strong typography  
* Dark/light contrast  
* Brand consistency  
* Image hierarchy  
* Clear navigation

## **18.7 Experience section**

Show:

* Classes  
* Schedule presentation  
* Coaches  
* Memberships  
* Inquiry-oriented interface

Use real captures.

## **18.8 Media rhythm**

This page can use slightly firmer visual compositions than Café Bliss.

Recommended:

* Large full-width hero  
* Strong image pair  
* Wide layout/detail section  
* Narrow explanation  
* Another large supporting image  
* Mobile views where useful

## **18.9 Editorial controls**

Keep the global navigation and link system.

Do not turn the portfolio into the gym's original website.

## **18.10 Typography**

Global DM Sans remains the primary case-study typeface.

The gym's distinct typography is visible inside real screenshots.

Do not import the gym's whole branding system into the portfolio shell.

## **18.11 Motion**

The page may reveal large imagery with geometric precision.

Avoid violent or aggressive movement intended to mimic gym advertising.

## **18.12 Captions**

Use compact explanatory labels tied to real features.

Examples:

* Class schedule interface  
* Membership presentation  
* Responsive navigation

## **18.13 Development section**

Explain actual React architecture, responsiveness, and interaction decisions.

Do not invent connected booking or membership processing.

## **18.14 Closing**

**Visit Live Website ↗**

**Back to Selected Work ←**

**Next Project — Quad →**

## **18.15 Transition continuity**

The dark gallery frame should move into a corresponding dark hero media field.

The outer portfolio identity remains intact.

---

# **19 — Quad Case-Study Art Direction**

## **19.1 Purpose**

Demonstrate genuine application complexity through a precise editorial presentation of the product and its technical implementation.

## **19.2 Emotional character**

Structured, clear, intelligent, modern.

Avoid futuristic motifs.

## **19.3 Hero**

Suggested:

**03 / 03 — DIGITAL PRODUCT**

**Quad**

Short product description.

Large actual authenticated application screenshot.

Cool-neutral background:

`#E1E7E8`

## **19.4 Visual challenge**

Quad is more information-dense than the two business websites.

Its screenshots may contain:

* Navigation  
* Feeds  
* Cards  
* User profiles  
* Rich interface components  
* Messaging systems

Aggressive cropping may remove important context.

## **19.5 Image treatment**

Prefer contained interface imagery when necessary.

Use the surrounding cool-neutral field to create breathing room.

Avoid shrinking the interface so far that it becomes visually meaningless.

## **19.6 Overview section**

Suggested heading:

**A more connected student experience.**

Explain what the application is designed to do.

Do not invent adoption or commercial success.

## **19.7 Experience section**

Use real visual evidence to show meaningful product areas:

* Content/feed  
* Profiles  
* Messaging  
* Notifications  
* Rich interaction states

## **19.8 Media layout**

Recommended:

1. Large authenticated interface screenshot  
2. Product overview  
3. Focused interface/detail composition  
4. Additional application views  
5. Responsive interface evidence if available  
6. Engineering narrative

## **19.9 Interface readability**

Do not combine numerous tiny screenshots into one unreadable mosaic.

Prefer a smaller number of large images.

Dense interfaces should have enough resolution and area to communicate structure.

## **19.10 Technical narrative**

The Quad case study may use more detailed technical content than the business concepts.

Potential themes:

* Application architecture  
* Component structure  
* State management  
* Authentication  
* Real-time features  
* Data flow  
* Backend integration

Only use verified facts.

## **19.11 Technical layout**

Use a restrained editorial layout.

Potentially:

* Small technical labels  
* Narrow explanatory paragraphs  
* Selected interface imagery  
* Organized feature rows

Do not transform the page into developer documentation.

## **19.12 Motion**

Crisp and controlled.

Avoid futuristic glitch or scanning effects.

## **19.13 Closing**

**Visit Live Application ↗**

**View Repository ↗**

**Back to Selected Work ←**

Next project may return to Café Bliss or Selected Work.

## **19.14 Transition continuity**

The actual Quad application image should remain recognizable as it transitions from the Living Frame into the case-study hero.

Do not use a login screen as a substitute for an authenticated product visual.

---

# **20 — Case-Study Editorial Modules**

All three pages should use a small, reusable vocabulary of editorial layouts.

## **20.1 Module A — Section Introduction**

Contains:

* Small number/label  
* Large heading  
* Narrow explanatory copy  
* Optional fine rule

## **20.2 Module B — Full-Width Media**

Contains:

* Large authentic screenshot  
* Stable aspect ratio  
* Optional caption  
* Appropriate atmospheric surface

Use when a project needs strong visual emphasis.

## **20.3 Module C — Text \+ Image**

Contains:

* Readable explanatory text  
* Supporting screenshot  
* Deliberate alignment

Use when imagery benefits from immediate explanation.

## **20.4 Module D — Paired Images**

Contains:

* Two related screenshots  
* Coordinated edges and spacing  
* Individual or shared captions

Use only when comparison or sequence adds value.

## **20.5 Module E — Feature Detail**

Contains:

* Small editorial label  
* Feature heading  
* Concise functional explanation  
* Relevant visual evidence

Avoid generic icon cards.

## **20.6 Module F — Mobile Presentation**

Contains genuine mobile screenshots.

May use:

* Contained vertical images  
* Side-by-side mobile captures on wide screens  
* Single-column presentation on small screens

Do not fabricate mobile layouts.

## **20.7 Module G — Technical Note**

Contains:

* Technical topic  
* Concise explanation  
* Optional verified implementation detail

This is especially useful for Quad.

## **20.8 Module H — Closing Navigation**

Contains:

* Live website action  
* Repository where appropriate  
* Back to Work  
* Next Project

Use strong typography and fine rules.

## **20.9 Layout variety**

The pages should use different combinations of these modules.

Do not construct three pages from the exact same repeated sequence of visual blocks regardless of content.

## **20.10 Captions**

Captions should be short, informative, and close to the corresponding image.

They should not become decorative text without meaning.

---

# **21 — Case-Study Image Gallery System**

## **21.1 Philosophy**

**Actual screenshots are the visual evidence.**

The portfolio should not rely on fabricated marketing compositions.

## **21.2 Required image set**

Every project needs:

* One genuine primary hero image  
* Genuine supporting visuals sufficient to illustrate its major claims

Aim for at least two distinct supporting captures where available and meaningful.

Do not create fake visuals merely to meet an arbitrary count.

If meaningful supporting media is unavailable, identify the gap and obtain authentic assets.

## **21.3 Image proportions**

Use media ratios appropriate to the source:

* 16:10 for major website presentation  
* 16:9 where wider website composition is useful  
* 4:3 for selected supporting imagery  
* Natural vertical proportions for mobile captures  
* Contained application UI where readability matters

## **21.4 Cropping**

Never crop essential UI or project branding arbitrarily.

Store project-specific focal positions where useful.

## **21.5 Image placement**

Use a mixture of:

* Full-width imagery  
* Contained imagery  
* Editorial image pairs  
* Detail views

The image arrangement should follow the story.

## **21.6 Image optimization**

Prefer appropriately optimized assets.

Preserve enough resolution for actual visual evaluation.

Avoid huge uncompressed files.

## **21.7 Lightbox decision**

A complex lightbox is not required.

Most screenshots should be sufficiently large in the document itself.

If an enlarged-view action is included, it must be accessible and should not disrupt route transitions or scrolling.

## **21.8 Captions**

Use captions when they clarify:

* The feature shown  
* The screen's role  
* An interaction  
* A design decision

Do not caption every image redundantly.

## **21.9 Loading behavior**

Reserve geometry before images load.

Do not allow large layout shifts.

Below-the-fold media can load progressively.

## **21.10 Quad privacy**

Do not expose sensitive user content.

Use authorized screens or safe demo data.

## **21.11 Asset provenance**

Preserve knowledge of where each image originated.

The implementation should be able to distinguish genuine captures from any later decorative material.

---

# **22 — Spatially Continuous Route Transition**

This is the second major addition in Version 1.1.

## **22.1 Central creative idea**

**The selected project frame becomes the case-study hero.**

The visitor should feel that they have moved closer to the selected work.

The experience should maintain visual continuity without becoming theatrical.

## **22.2 Entry context**

The visitor is viewing a project within the Living Frame.

They select:

**Explore Project →**

The same concept applies to the stacked mobile presentation.

## **22.3 Source composition**

The source consists primarily of the current project's visual media.

Its defining qualities include:

* Visible screenshot  
* Stable rectangular geometry  
* Project-specific atmosphere  
* Known position  
* Recognizable crop

## **22.4 Destination composition**

The destination is the case-study hero media field.

It should use:

* Matching genuine image  
* Related atmospheric surface  
* Compatible visual treatment  
* Consistent framing language

## **22.5 Preferred motion choreography**

### **Beat 01 — Selection**

Visitor activates Explore Project.

The selected image is the visual subject.

### **Beat 02 — Separation**

Secondary gallery information recedes subtly.

The image remains visually stable.

### **Beat 03 — Spatial movement**

The image expands or repositions toward the destination hero geometry.

This is the principal signature moment.

### **Beat 04 — Destination emergence**

The case-study composition becomes visible around the moving image.

The page title and metadata appear in their final hierarchy.

### **Beat 05 — Settlement**

The image and layout reach their final positions.

The visitor can continue scrolling normally.

## **22.6 Motion duration**

Recommended initial range:

Approximately 650–900ms for the spatial transition, depending on device capability and visual distance.

This is not a mandatory delay before navigation.

The actual timing should be tuned to feel immediate enough for normal website use.

If the transition feels slow, shorten it.

## **22.7 Easing**

Use restrained smooth easing.

No bounce.

No exaggerated overshoot.

No rubber-band distortion.

## **22.8 Image geometry**

Prefer:

* Stable rectangular bounds  
* Controlled scale  
* Consistent aspect-ratio logic  
* Predictable crop  
* Clean final edges

Avoid dramatic transformations into unrelated shapes.

## **22.9 Background behavior**

The project-specific atmosphere should remain visually related across the transition.

Do not recolor the entire site shell abruptly.

## **22.10 Text behavior**

Homepage metadata recedes quietly.

Case-study title and information enter near the end of the image transition.

Avoid distracting simultaneous text explosions.

## **22.11 Shared visual identity**

The source image and destination hero should use the same or meaningfully matching asset.

The project should be recognizable throughout the movement.

## **22.12 Transition ownership**

The route transition mechanism should own the shared image's page-to-page movement.

GSAP gallery animation must not independently control that same geometry simultaneously.

## **22.13 Duplicate image caution**

Inactive gallery layers or redundant responsive images should not share the active transition identity.

Only the intended source/destination pairing participates.

## **22.14 Direct route behavior**

If the visitor opens `/work/imizi` directly, no homepage frame exists.

Render the normal completed case-study hero.

Do not fake an animation from nowhere.

## **22.15 Browser fallback**

Where shared-element transitions are unsupported:

* Navigate normally.  
* Preserve destination content.  
* Optionally use a simple fade.  
* Avoid broken or empty visual states.

## **22.16 Reduced-motion fallback**

Disable significant spatial scaling.

Use immediate navigation or minimal opacity changes.

## **22.17 Mobile choreography**

The mobile source is the selected stacked project's image.

A smaller, simpler shared-image movement may be used when supported.

Do not force desktop-scale zoom.

## **22.18 Final quality standard**

The transition must feel like:

**One visual object changing context.**

Not:

**An elaborate page animation unrelated to the selected project.**

---

# **23 — Reverse Navigation & Cross-Route Continuity**

## **23.1 Purpose**

Returning from a case study should feel coherent, not disorienting.

## **23.2 Browser Back**

When possible:

* Restore previous homepage position.  
* Restore the correct active project.  
* Reconnect the project image to the gallery frame.  
* Preserve normal browser history.

## **23.3 Reverse transition constraints**

Only perform a spatial reverse transition when the correct destination frame geometry is available.

If not, use ordinary route navigation or a restrained fade.

Never animate a project image toward the wrong frame.

## **23.4 Back to Selected Work**

The explicit return action should navigate to the corresponding project context.

For example:

Café Bliss returns to:

`/#project-cafe-bliss`

## **23.5 Return visual**

The homepage should display the corresponding project's image and atmosphere when the visitor returns.

## **23.6 Next-project navigation**

Moving from one case study to the next should feel coherent.

A restrained page transition is acceptable.

Do not require a complex shared-image transformation between two unrelated projects.

## **23.7 Shared navigation shell**

The header and global typography remain consistent throughout route changes.

## **23.8 Focus and accessibility**

The transition must not leave controls inaccessible.

Focus should move appropriately after navigation.

## **23.9 No loading theater**

Do not add artificial loading screens merely to make the transition appear cinematic.

---

# **24 — Living Frame Image Treatment**

## **24.1 Authenticity**

Use actual project imagery.

No fabricated completed interfaces.

No unrelated stock images presented as portfolio evidence.

No fake mobile screenshots.

## **24.2 Capture guidance**

Where practical:

* Capture consistent desktop widths  
* Use clean screenshots  
* Preserve project branding  
* Remove unnecessary browser chrome  
* Crop deliberately  
* Optimize publication assets

## **24.3 Frame ratio**

Primary gallery target:

16:10.

Do not force every screenshot into a destructive crop.

## **24.4 Image fit**

### **Café Bliss**

Cover may be appropriate when it preserves visual identity.

### **IMIZI**

Cover or contained treatment depending on the actual source image.

### **Quad**

Prefer contain when cropping would remove application UI.

## **24.5 Positioning**

Set intentional focal points.

Do not center every image by default.

## **24.6 Layering**

Use current and incoming visual layers.

During transition:

* Incoming image appears.  
* Outgoing image recedes.  
* State settles.  
* Temporary layer is cleared.

## **24.7 Clarity**

Avoid:

* Excessive blur  
* Desaturation  
* Artificial color grading  
* Bright overlays  
* Distortions

## **24.8 Browser chrome**

Avoid generic browser-frame mockups around every image.

The portfolio frame should feel like an exhibition mount.

## **24.9 Shared transition asset**

The image chosen for the Living Frame is also a route-transition design asset.

Its composition should work at both source and destination sizes.

## **24.10 Asset preparation priority**

Required:

* Café Bliss authentic primary  
* IMIZI authentic primary  
* Quad authentic authenticated primary  
* Supporting authentic media for the three case studies

Do not use invented work to fill missing media.

---

# **25 — Living Frame Motion System**

## **25.1 Principle**

**Motion is the language of continuity.**

## **25.2 Main gallery transition**

1. Incoming image is prepared.  
2. Incoming layer appears above the previous image.  
3. A controlled mask or crossfade reveals it.  
4. Previous image recedes.  
5. Incoming image settles.  
6. Atmosphere reaches its target.  
7. Temporary state is cleared.

## **25.3 Durations**

Starting values:

* Image transition: 550ms  
* Atmosphere: 550–650ms  
* Metadata: 250ms  
* Index emphasis: 180ms  
* Hover media: 250ms

## **25.4 Easing**

GSAP direction:

* `power2.inOut` for major transitions  
* `power2.out` for entrances and hover

## **25.5 Scale**

Incoming image approximately 1.025 → 1.0.

Avoid heavy zoom.

## **25.6 Mask**

Preferred:

Vertical rectangular reveal.

Fallback:

Layered crossfade.

## **25.7 Atmosphere synchronization**

Stage surface, image, and index should visually settle into the same active project.

## **25.8 Text**

Project descriptions remain readable in normal document flow.

Do not hide them during stage transitions.

## **25.9 Reverse scrolling**

Use coherent movement in both directions.

## **25.10 Rapid scrolling**

Latest project wins.

No animation queue.

No permanently blank frame.

## **25.11 Continuous parallax**

Not part of the required signature.

If implemented as a small refinement, keep it subtle and efficient.

## **25.12 Reduced motion**

Disable significant:

* Image zoom  
* Parallax  
* Mask reveals  
* Long translations

Preserve content and project identity.

---

# **26 — Frame Introduction Motion**

## **26.1 Purpose**

Connect hero geometry to the gallery.

## **26.2 Sequence**

1. Selected Work heading appears.  
2. Upper editorial rule reveals.  
3. Frame settles.  
4. Café Bliss imagery appears.  
5. Natural scrolling continues.

## **26.3 Duration**

Approximately 500–700ms, with restrained overlap.

## **26.4 Constraints**

No scroll lock.

No artificial waiting.

No long mandatory introductory sequence.

## **26.5 Fallback**

Display the frame immediately if the reveal cannot run reliably.

---

# **27 — Link and Button System**

## **27.1 Philosophy**

Typography-led interactions.

Avoid oversized rounded buttons everywhere.

## **27.2 Primary commercial action**

**Start a Project ↗**

Use clear typography and restrained emphasis.

## **27.3 Internal project action**

**Explore Project →**

This should be visually distinct enough to communicate entry into a case study.

Suggested:

* Medium weight  
* Small right arrow  
* Fine underline or animated rule  
* Clear focus treatment

## **27.4 External project action**

**View Live Website ↗**

Use the diagonal arrow consistently.

## **27.5 Navigation vocabulary**

* `↗` — External destination  
* `→` — Internal navigation  
* `←` — Return navigation  
* `↓` — Downward exploration  
* `↑` — Back to top

## **27.6 Hover**

* Underline emphasis  
* Arrow movement of 2–3px  
* 150–220ms duration  
* No layout shift

## **27.7 Focus**

Visible outline or equivalent high-contrast focus style.

Focus quality is mandatory.

## **27.8 Touch**

Do not hide important links behind hover.

Provide comfortable touch targets.

## **27.9 Disabled links**

Never display an action that looks usable but leads nowhere.

All three Explore Project destinations are required.

## **27.10 Case-study closing actions**

Use the same link vocabulary.

The closing section may increase typography scale, but not invent an unrelated button style.

---

# **28 — Services Section Art Direction**

## **28.1 Philosophy**

**An editorial list, not a collection of service cards.**

## **28.2 Label**

**02 / SERVICES**

## **28.3 Heading**

**What I do.**

## **28.4 Supporting line**

“From essential business websites to distinctive interactive experiences.”

## **28.5 Layout**

Three numbered rows with fine rules.

Each row contains:

* Number  
* Service title  
* Short description

## **28.6 Services**

### **Business Websites**

“Clear, polished websites that help businesses establish credibility, present their services, and make it easier for customers to connect.”

### **Custom Digital Experiences**

“Distinctive websites that combine strong visual direction with thoughtful interaction and tailored frontend development.”

### **Website Redesigns**

“Transforming outdated websites into more coherent, modern, responsive, and effective digital experiences.”

## **28.7 Styling**

* Number: metadata treatment  
* Title: approximately 30–40px desktop  
* Description: comfortable body text  
* Generous row spacing  
* Fine top/bottom rules

## **28.8 Motion**

Subtle introduction.

No unnecessary accordion or carousel.

---

# **29 — About Section Art Direction**

## **29.1 Purpose**

Move from capability to personal credibility.

## **29.2 Label**

**03 / ABOUT**

## **29.3 Heading**

**A little about me.**

## **29.4 Layout**

Desktop:

* Large heading  
* Narrow explanatory paragraph  
* Optional supporting metadata

Mobile:

* Heading  
* Paragraph  
* Metadata

## **29.5 Working copy**

“I'm an independent designer and frontend developer based in Rwanda. I enjoy bringing together visual design and engineering to create websites that feel thoughtful, purposeful, and carefully built.”

## **29.6 Portrait**

Not required.

Use only a genuine suitable portrait if available.

## **29.7 Skills**

No giant technology grid.

A restrained capability line is sufficient.

## **29.8 Motion**

Simple fade or small vertical movement.

---

# **30 — Contact Section Art Direction**

## **30.1 Purpose**

Create the final invitation to collaborate.

## **30.2 Heading**

**Have something worth building?**

Suggested composition:

**Have something**  
**worth building?**

## **30.3 Typography**

Large DM Sans display.

Prefer pure sans-serif here to distinguish it from the hero's serif accent.

## **30.4 Supporting copy**

“Have a website in mind, or an existing one that needs a new direction? I'd love to hear about it.”

## **30.5 Primary contact**

**Start a Project ↗**

Verified WhatsApp destination.

## **30.6 Secondary contact**

**Send an Email ↗**

Verified email destination.

## **30.7 Palette**

Preferred:

Paper \+ Ink.

Do not introduce a dramatic new theme simply because this is the final section.

## **30.8 Composition**

* Large headline  
* Supporting copy  
* Clear primary action  
* Secondary email  
* Purposeful whitespace

## **30.9 Motion**

Subtle.

Do not delay contact information.

## **30.10 Case-study contact access**

The shared navigation must continue providing contact access on case-study routes.

A case-study closing section may also include a concise collaboration invitation when it improves the flow.

---

# **31 — Footer Design**

## **31.1 Structure**

* Name  
* Copyright  
* Location  
* Useful links  
* Optional Back to Top

## **31.2 Treatment**

* Thin top rule  
* DM Sans  
* Muted text  
* Restrained spacing

## **31.3 Consistency**

Use the same footer throughout the portfolio.

Do not create a separate branded footer for each project.

---

# **32 — Responsive Visual Specifications**

## **32.1 Wide desktop — 1440px+**

* Full-scale typography  
* Wide margins  
* Sticky Living Frame  
* Strong visual stage  
* Asymmetrical editorial sections  
* Wide case-study media

## **32.2 Standard desktop — 1100–1439px**

* Same gallery concept  
* Reduced type sizes  
* Narrower margins  
* Responsive column gap  
* Readable information rail  
* Strong case-study composition

## **32.3 Tablet — 768–1099px**

* Stacked gallery  
* Simplified navigation if necessary  
* Large images  
* Comfortable reading widths  
* Responsive case-study grids  
* No mandatory desktop sticky choreography

## **32.4 Mobile — 375–767px**

* Strong headline  
* Clear introductory copy  
* Large project images  
* Readable descriptions  
* Visible links  
* Single-column case-study reading flow  
* Comfortable touch targets  
* No horizontal overflow

## **32.5 Narrow mobile — 320–374px**

Verify:

* Wordmark fit  
* Hero wrapping  
* Case-study titles  
* Contact heading  
* Navigation controls  
* Image widths  
* No horizontal scrolling

## **32.6 Short-height desktop**

When vertical space is insufficient, use the stacked gallery.

Initial threshold:

Approximately 700px viewport height, subject to actual geometry testing.

## **32.7 Responsive typography**

Use fluid sizing with clamp and deliberate breakpoint adjustments.

## **32.8 Responsive case-study imagery**

Large desktop screenshots may need different mobile framing.

For application screens, preserve important UI.

Use contained images when necessary.

## **32.9 Mobile shared-element behavior**

On compatible devices:

* Use restrained movement  
* Preserve image correspondence  
* Avoid excessive zoom

On incompatible or reduced-motion environments:

* Navigate normally

## **32.10 Responsive quality principle**

The mobile experience should feel art-directed, not merely functional.

---

# **33 — Motion Hierarchy Across the Whole Site**

Four motion levels.

## **Level 1 — Signature**

**Living Frame gallery transformations and spatial entry into case studies.**

These are related parts of one system.

## **Level 2 — Major composition entrances**

Hero entrance.

Selected Work introduction.

Case-study destination settlement.

## **Level 3 — Section reveals**

Services.

About.

Contact.

Case-study narrative sections.

## **Level 4 — Micro-interactions**

Links.

Arrows.

Hover emphasis.

Focus feedback.

## **Non-negotiable rule**

Level 3 and Level 4 animations must never compete with Level 1\.

The site should feel coordinated.

---

# **34 — Detailed Motion Tokens**

| Token | Initial value | Purpose |
| ----- | ----- | ----- |
| Fast duration | 180ms | Hover emphasis |
| Normal duration | 280ms | Small UI change |
| Image reveal | 550ms | Gallery image transition |
| Atmosphere | 600ms | Stage color change |
| Entrance | 650ms | Major section introduction |
| Route spatial transition | 650–900ms | Gallery-to-case-study continuity |
| Standard easing | `power2.out` | Entrance and settling |
| Main transition easing | `power2.inOut` | Gallery transformation |

Route transition timing is a design target, not a mandatory blocking delay.

## **34.1 Distances**

* Text entrance: 12–24px  
* Arrow hover: 2–3px  
* Gallery image scale: approximately 1.025  
* Avoid large arbitrary page translations

## **34.2 Trigger frequency**

Section entrances should generally happen once.

Gallery transitions remain bidirectional.

## **34.3 Motion cleanup**

Animation setup must clean up on:

* Unmount  
* Route change  
* Resize  
* Breakpoint change  
* Reduced-motion change

## **34.4 Route transition coordination**

Do not allow GSAP gallery transforms to conflict with the shared-element route movement.

## **34.5 Reduced motion**

All significant decorative motion must be removable.

---

# **35 — Accessibility & Readability**

## **35.1 Body text**

Ordinarily at least 16px.

Small metadata may be 11–12px but cannot carry the only essential explanation.

## **35.2 Contrast**

Test:

* Paper \+ Ink  
* Paper \+ Muted Ink  
* Quiet Ink labels  
* Dark IMIZI surfaces  
* Focus indicators  
* Accent links

## **35.3 Focus**

Visible keyboard focus on all interactive controls.

## **35.4 Touch**

No hover-exclusive content.

No tiny adjacent controls.

## **35.5 Semantic integrity**

One primary heading per page.

Logical heading hierarchy.

## **35.6 Case-study reading**

Use comfortable paragraph measures and descriptive section headings.

## **35.7 Images**

Meaningful alt text.

Avoid duplicate announcements from transition layers.

## **35.8 Reduced motion**

Preserve complete static design and navigation.

## **35.9 Route accessibility**

Page transitions must not trap focus or leave content inaccessible.

---

# **36 — Performance Constraints**

## **36.1 Fonts**

Only the two selected families.

Avoid unnecessary weights.

Provide fallbacks.

## **36.2 Images**

* Optimize  
* Reserve geometry  
* Use responsive sizes where appropriate  
* Defer below-the-fold media  
* Preserve clarity

## **36.3 Animation**

Favor:

* Transform  
* Opacity  
* Efficient bounded masking

Avoid:

* Repeated layout reads  
* Heavy blur  
* Unnecessary large filters  
* Excessive scroll listeners

## **36.4 Route transitions**

The shared-element effect should remain responsive.

Do not block route navigation on decorative animation completion.

## **36.5 Case-study media**

Do not eagerly load every large screenshot from every case study on initial homepage entry.

Each route should load what it needs.

## **36.6 Visual fallback**

If advanced movement causes poor performance, simplify it while preserving the site and its underlying visual quality.

---

# **37 — Implementation Design Tokens**

The following tokens preserve the original Phase 2 system and establish useful additions for the case-study design.

These are initial coding values, not replacements for browser-based art-direction review.

## **37.1 Color tokens**

| CSS token | Value |
| ----- | ----- |
| `--color-paper` | `#F4F1EB` |
| `--color-ink` | `#20211F` |
| `--color-muted` | `#595A55` |
| `--color-quiet` | `#77776F` |
| `--color-rule` | `#D7D2C8` |
| `--color-surface` | `#EBE6DD` |
| `--color-white` | `#FCFAF6` |
| `--color-dark` | `#1B1C1A` |
| `--color-accent` | `#805D4B` |
| `--color-cafe` | `#E8DED1` |
| `--color-imizi` | `#252624` |
| `--color-quad` | `#E1E7E8` |

## **37.2 Typography tokens**

| Token | Value |
| ----- | ----- |
| `--font-sans` | `"DM Sans", Arial, sans-serif` |
| `--font-serif` | `"Instrument Serif", Georgia, serif` |
| `--text-body` | `1rem` |
| `--text-lead` | `clamp(1.125rem, 1.7vw, 1.5rem)` |
| `--text-hero` | `clamp(3rem, 8vw, 9rem)` |
| `--text-section` | `clamp(2.5rem, 6vw, 6rem)` |
| `--text-project` | `clamp(2.25rem, 4.6vw, 4.5rem)` |
| `--text-case-title` | `clamp(3rem, 7.5vw, 8.25rem)` |

## **37.3 Layout tokens**

| Token | Value |
| ----- | ----- |
| `--content-max` | `1440px` |
| `--page-gutter` | `clamp(20px, 5vw, 88px)` |
| `--header-height` | `80px` |
| `--section-space` | `clamp(80px, 10vw, 160px)` |
| `--case-section-space` | `clamp(80px, 10vw, 160px)` |
| `--gallery-aspect` | `16 / 10` |

## **37.4 Geometry tokens**

| Token | Value |
| ----- | ----- |
| `--radius-small` | `2px` |
| `--border-rule` | `1px solid var(--color-rule)` |

## **37.5 Motion tokens**

| Token | Value |
| ----- | ----- |
| `--duration-fast` | `180ms` |
| `--duration-normal` | `280ms` |
| `--duration-reveal` | `550ms` |
| `--duration-atmosphere` | `600ms` |
| `--duration-entrance` | `650ms` |
| `--duration-route` | `800ms` |
| `--ease-css-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` |

GSAP easing names should be configured through the animation system rather than inserted directly as invalid CSS easing values.

## **37.6 Mobile overrides**

Starting recommendations:

* Header height: 64px  
* Page gutter: 20px  
* Major section spacing: approximately 80px  
* Hero font: `clamp(3rem, 11vw, 4.25rem)`

Case-study title sizes must also adapt to narrow screens.

## **37.7 Scroll alignment**

Account for header height in section anchors.

Use appropriate scroll-padding or scroll-margin values.

## **37.8 Selection styling**

Use Ink background with Warm White foreground for selected text.

## **37.9 Implementation rule**

Do not use token values blindly.

The actual browser composition determines whether optical adjustments are needed.

Tuning is expected.

Reinventing the design system is not.

---

# **38 — Visual Quality Assurance**

Codex must inspect rendered output, not only source code.

## **38.1 Homepage typography**

* Headline has deliberate line breaks.  
* Serif accent complements the sans-serif.  
* Supporting copy is immediately clear.  
* Typography fits target viewports.  
* No awkward clipping or overflow.

## **38.2 Living Frame**

* Image stage dominates.  
* Rail remains readable.  
* Frame geometry is stable.  
* Atmospheres are distinct.  
* Image transitions are coherent.  
* Project index is aligned.  
* Explore Project is discoverable.

## **38.3 Case-study heroes**

* Project title is legible and expressive.  
* Genuine primary image has sufficient presence.  
* Metadata is restrained.  
* Hero connects visually with the homepage frame.  
* Image composition supports shared-element transition.  
* Direct-route hero looks complete without transition.

## **38.4 Café Bliss case study**

* Warm hospitality character.  
* Actual screenshots.  
* Meaningful visual narrative.  
* Clear menu/experience imagery.  
* Readable long-form text.  
* Correct concept status.

## **38.5 IMIZI case study**

* Strong brand character.  
* Appropriate contrast.  
* Genuine multi-page imagery.  
* Clear class/membership presentation.  
* Correct concept status.

## **38.6 Quad case study**

* Genuine application screenshots.  
* Not represented solely by sign-in.  
* Interface details remain legible.  
* Technical narrative matches actual product.  
* No invented usage claims.

## **38.7 Shared transitions**

* Correct image participates.  
* Source and destination are recognizable.  
* No conflicting transforms.  
* No blank intermediate state.  
* Final destination settles correctly.  
* Reverse behavior is sensible.  
* Reduced-motion fallback works.

## **38.8 Site-wide consistency**

* Same type system.  
* Same grid.  
* Same link vocabulary.  
* Same editorial rules.  
* Similar image-boundary logic.  
* Appropriate visual variety.  
* No unrelated template styling.

## **38.9 Mobile**

* Intentional single-column compositions.  
* Readable project images.  
* Case-study headings fit.  
* Contact remains easy to reach.  
* No horizontal overflow.  
* Navigation is accessible.

## **38.10 Visual iteration**

Review screenshots at representative desktop, laptop, tablet, and mobile sizes.

Fix significant composition problems before polishing tiny decorative details.

---

# **39 — Complete-Build Design Priorities**

The goal remains the complete portfolio today.

These priorities describe implementation order, not permanent feature exclusions.

## **Foundation checkpoint**

* Global typography  
* Color system  
* Grid  
* Navigation  
* Hero  
* Static Selected Work  
* Services  
* About  
* Contact  
* Footer

## **Case-study checkpoint**

* Complete Café Bliss page  
* Complete IMIZI page  
* Complete Quad page  
* Authentic supporting imagery  
* Responsive editorial modules  
* Internal navigation

## **Signature checkpoint**

* Sticky Living Frame  
* Image transitions  
* Atmosphere changes  
* Project index  
* Correct active state  
* Responsive alternatives

## **Spatial continuity checkpoint**

* Shared-element source and destination  
* Case-study entry transition  
* Supported-browser behavior  
* Reduced-motion behavior  
* Reliable navigation fallback  
* Browser-back handling

## **Quality checkpoint**

* Typography refinement  
* Image cropping  
* Layout consistency  
* Motion polish  
* Responsive review  
* Accessibility  
* Performance  
* Deployment verification

## **Important scope rule**

The case studies and signature transitions are part of the approved full product.

They should not be automatically deferred because they are implemented after the static homepage.

If a technical limitation arises, preserve functionality through the documented fallback and report the limitation honestly.

---

# **40 — Visual Acceptance Criteria**

Phase 2 is considered successfully implemented when the following are true.

## **Identity**

The site looks like a coherent independent creative practice.

It does not resemble a generic developer template.

## **Typography**

Typography establishes a strong identity across all routes.

Instrument Serif remains a deliberate accent.

## **Palette**

The restrained global palette supports the three distinct project atmospheres.

## **Gallery**

The Living Frame has stable geometry, clear image priority, readable project information, and coherent transformations.

## **Case studies**

All three pages are carefully designed editorial experiences, not generic copies of the same page.

## **Imagery**

Every project uses genuine visual evidence.

## **Shared transition**

The homepage image and case-study hero are visually connected.

Enhanced movement works where supported.

Fallbacks remain reliable.

## **Responsiveness**

The mobile gallery and case studies feel independently designed.

## **Motion**

The signature interaction remains the most expressive part of the site.

Other animations support it.

## **Commercial clarity**

The hero and services communicate the offer.

Contact is easy to find.

## **Implementation readiness**

Every major visual component has a defined hierarchy, design rule, or measurement.

---

# **41 — Locked Visual Decisions**

The following decisions are authoritative.

## **Global identity**

1. The portfolio uses architectural-editorial design with restrained cinematic qualities.  
2. The creative balance is 70% editorial / 30% cinematic.  
3. DM Sans is the primary typeface.  
4. Instrument Serif is the expressive secondary typeface.  
5. The main background is warm Paper.  
6. Primary text is dark Ink.  
7. Accent colors remain restrained.  
8. Project imagery provides most visual variety.  
9. A consistent editorial grid is used across all routes.  
10. Navigation is minimal and consistent.

## **Hero and homepage**

11. The homepage hero is primarily typographic.  
12. The headline uses one serif-accent line.  
13. The Living Frame uses approximately 67/33 visual-to-information proportions, allowing for its gap.  
14. Its target aspect ratio is 16:10.  
15. The outer gallery frame remains stable.  
16. Café Bliss uses a warm atmosphere.  
17. IMIZI uses a dark, grounded atmosphere.  
18. Quad uses a cooler, structured atmosphere.  
19. Project information follows a clear numerical and typographic hierarchy.  
20. Explore Project is a required visible action.  
21. Services use an editorial list, not oversized cards.  
22. About remains concise and typography-led.  
23. Contact closes the homepage through strong typography.

## **Case studies**

24. All three case-study pages require complete visual design.  
25. They share the portfolio's typography and grid.  
26. Each uses project-specific genuine imagery.  
27. Each has a large, carefully composed hero.  
28. Each contains meaningful visual narrative sections.  
29. Each uses a controlled editorial module system.  
30. Long-form copy uses readable measures.  
31. Captions clarify the imagery.  
32. Case studies retain project individuality without becoming unrelated website themes.  
33. The portfolio's Paper and Ink reading environment remains recognizable.  
34. Project-specific colors are concentrated in media and selected atmosphere treatments.

## **Signature interaction**

35. The Living Frame is the primary signature.  
36. Spatial entry into case studies is part of that same signature.  
37. Source and destination images must be visibly related.  
38. Shared-element movement uses controlled geometry.  
39. No unrelated shape distortion is required.  
40. Route transitions must not compete with GSAP gallery movement.  
41. Supported browsers receive enhanced continuity.  
42. Unsupported browsers receive functional navigation.  
43. Reduced-motion preferences are respected.  
44. Browser-back behavior must remain reliable.

## **Quality**

45. No unnecessary decorative 3D.  
46. No default artificial grain.  
47. No excessive gradients.  
48. No large floating-card shadows.  
49. No fabricated project screenshots.  
50. No unreadable interface mosaics.  
51. No generic case-study placeholder designs.  
52. Mobile presentation is intentional.  
53. Static compositions must look complete.  
54. All visual decisions must support the complete product launch.  
55. Responsive quality, readability, and functional navigation remain non-negotiable.

---

# **42 — Remaining Production Inputs**

The creative system is defined.

The following operational details still require resolution.

## **42.1 Public identity**

Confirm final preferred name and spelling.

Working presentation:

**PRINCE ISHIMWE**

## **42.2 Contact**

Provide:

* Real professional WhatsApp destination  
* Real professional email

Do not invent contact information.

## **42.3 Project assets**

Acquire genuine:

* Café Bliss screenshots  
* IMIZI screenshots  
* Quad authenticated application screenshots  
* Supporting media for all three case studies

## **42.4 Deployment**

Use the actual confirmed domain or public deployment URL.

## **42.5 Visual tuning**

Refine in the browser:

* Headline wrapping  
* Case-study title fit  
* Gallery proportions  
* Image focal points  
* Responsive media crops  
* Section spacing  
* Motion timing  
* Shared-element destination geometry

These are implementation refinements, not unresolved creative strategy.

---

# **43 — Version 1.0 → 1.1 Change Record**

## **43.1 Complete case-study art direction**

**Previously:** The document primarily specified the homepage gallery.

**Now:** All three dedicated case studies have defined visual direction, structure, media treatment, and content hierarchy.

## **43.2 Case-study heroes**

**Previously:** No complete shared hero system was defined.

**Now:** The case-study hero has explicit typographic, spatial, metadata, and image requirements.

## **43.3 Editorial narrative modules**

**Previously:** Individual project pages were not given a complete visual layout vocabulary.

**Now:** Reusable full-width media, text/image, paired-image, detail, technical, and closing modules are specified.

## **43.4 Spatial continuity**

**Previously:** Shared-element route transitions were optional future enhancements.

**Now:** They are part of the intended complete signature experience.

## **43.5 Reverse navigation**

**Previously:** Visual return behavior was not fully specified.

**Now:** Browser Back, Back to Work, source/destination matching, and reliable fallback rules are defined.

## **43.6 Motion hierarchy**

**Previously:** The Living Frame gallery was the principal signature.

**Now:** Gallery transformation and entering a case study are explicitly two parts of the same signature system.

## **43.7 Project links**

**Previously:** View Live Website was the main required gallery action; case-study links were conditional.

**Now:** Explore Project and View Live Website are both required, with clear visual roles.

## **43.8 Asset expectations**

**Previously:** One primary screenshot per project was the main required asset set.

**Now:** Genuine supporting imagery is also required to tell complete case-study stories.

## **43.9 Responsive scope**

**Previously:** Responsive design focused heavily on the homepage gallery.

**Now:** Complete responsive case-study layouts and mobile shared-element behavior are included.

## **43.10 Preserved decisions**

The revision retains:

* Editorial-exhibition direction  
* 70/30 creative balance  
* DM Sans \+ Instrument Serif  
* Warm neutral palette  
* 12-column desktop grid  
* Restrained spacing and geometry  
* 16:10 Living Frame  
* Café Bliss → IMIZI → Quad  
* Native scrolling  
* Stacked mobile gallery  
* Minimal navigation  
* Strong typographic hero  
* Editorial services list  
* Concise About  
* Direct contact experience  
* Reduced-motion support  
* Authentic project imagery  
* Performance awareness  
* Visual restraint

---

# **44 — Final Art Direction Statement**

**The Living Frame is an editorial exhibition of digital work.**

The typography establishes the identity.

The grid establishes discipline.

The images establish the projects.

The gallery transitions establish transformation.

The case studies establish depth.

The shared-element navigation establishes continuity.

The restrained visual language gives each project room to speak.

A visitor should experience the website as one carefully composed environment—confident at first glance, memorable in motion, substantial in its project storytelling, and effortless to navigate.

Above all, it should demonstrate the kind of taste, attention, and execution quality a client would want brought to their own website.

## **Phase 2 Final Principle**

**Design creates the impression. Work provides the evidence. Motion makes the experience memorable.**

The entire system succeeds only when these qualities reinforce one another.

**Phase 2 v1.1 defines the visual direction for the complete four-route portfolio and is aligned with Phase 0 v1.1, Phase 1 v1.1, and the Phase 3 technical architecture.**