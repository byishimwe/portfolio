# **PORTFOLIO — PHASE 2**

## **Visual Identity, Art Direction, Design System & Motion Specification**

**Version:** 1.0  
**Date:** October 8, 2026  
**Project:** Personal Portfolio — Independent Creative Practice  
**Launch target:** Today, October 8, 2026  
**Status:** Design baseline proposed for implementation  
**Previous phases:** Phase 0 — Product Definition; Phase 1 — Experience Architecture

---

# **00 — Purpose of This Phase**

Phase 0 established the business purpose.

Phase 1 established the experience structure and interaction behavior.

**Phase 2 establishes the exact visual language used to bring that experience to life.**

This document covers:

1. Creative direction and references  
2. Visual principles  
3. Typography and type hierarchy  
4. Color system  
5. Responsive layout grids  
6. Spacing and geometry  
7. Navigation art direction  
8. Hero composition  
9. Living Frame design  
10. Individual project art direction  
11. Services, about, and contact compositions  
12. Buttons, links, and micro-interactions  
13. Motion design  
14. Responsive design  
15. Image selection and treatment  
16. Accessibility and performance  
17. Implementation tokens  
18. Same-day production priorities  
19. Acceptance criteria  
20. Locked decisions

The document is deliberately implementation-oriented.

We are not creating a moodboard and leaving every important measurement undecided.

We are establishing a working visual system that can be translated directly into CSS and components.

---

# **01 — The Creative Direction**

## **1.1 The selected concept**

**The Living Frame — An Editorial Exhibition**

A contemporary personal portfolio built around architectural composition, editorial typography, carefully presented project imagery, and purposeful cinematic transitions.

The visual language should suggest a small, independent creative practice with unusually strong attention to detail.

It should feel credible to a hospitality business owner, sophisticated to an architecture studio, and carefully engineered to a frontend developer.

## **1.2 The desired impression**

Imagine a beautifully art-directed architecture or design publication translated into a website.

Its pages use:

* Large confident typography  
* Quiet neutral backgrounds  
* Precise image boundaries  
* Generous margins  
* Restrained supporting labels  
* Thin editorial rules  
* Strong visual hierarchy  
* Carefully controlled movement

Now add one signature interaction: the central project frame changes with the work being presented.

That is the experience.

## **1.3 Creative balance**

**70% editorial exhibition / 30% cinematic camera**

Editorial exhibition means:

* Grid discipline  
* Typographic hierarchy  
* Ordered information  
* Consistent geometry  
* Deliberate negative space  
* Visible project numbering  
* Controlled visual rhythm

Cinematic camera means:

* Layered images  
* Masked reveals  
* Subtle scale changes  
* Spatial continuity  
* Smooth transitions between atmospheres  
* Movement that emphasizes composition

The cinematic layer should never overpower the editorial foundation.

## **1.4 Five visual principles**

### **Principle 01 — The work is the color**

The global interface uses a controlled palette.

The projects supply most of the changing visual energy.

This prevents the portfolio from competing with its own work.

### **Principle 02 — Scale creates confidence**

Important statements and project imagery should be genuinely large.

Small information should remain intentionally small, but never uncomfortably tiny.

### **Principle 03 — Alignment creates luxury**

Strong alignment is more important than decoration.

Text, images, numbers, and rules should share a consistent geometric system.

### **Principle 04 — Restraint creates contrast**

A spectacular project transition is memorable when the rest of the experience is calm.

We should not animate everything simply because we can.

### **Principle 05 — Precision creates trust**

No awkward line breaks, inconsistent spacing, oversized cards, clipped mobile content, or ambiguous links.

A prospect should perceive care without needing to consciously inspect the details.

---

# **02 — Visual References & Boundaries**

## **2.1 Reference directions**

**Architectural editorial websites**

Borrow the disciplined grids, negative space, refined typography, and large project imagery.

**Independent design studios**

Borrow the confidence of presenting a small amount of excellent work rather than filling the website with unnecessary sections.

**Exhibition design**

Borrow the idea of a consistent visual frame that gives each subject a distinct identity.

**Cinematography**

Borrow the careful use of framing, controlled movement, and changes in atmosphere.

## **2.2 References consulted**

* Atelier Oslo — editorial typography and spatial restraint  
* Forma Atelier — project numbering and curated visual presentation  
* M35 / JPW — gallery discipline and architectural image composition

These references establish visual principles only.

We must not directly reproduce another studio's distinctive layout, imagery, branding, or animations.

## **2.3 Explicitly rejected directions**

### **Conventional developer portfolio**

Rejected elements:

* Hero portrait with floating technology icons  
* Skills represented as progress bars  
* Overly prominent programming-language badges  
* Generic project cards in a three-column grid  
* Animated terminal or code editor  
* Typing-effect introductions

### **Experimental technology showcase**

Rejected elements:

* Unrelated 3D environments  
* Sci-fi and neon visual language  
* Custom cursors that obstruct native behavior  
* Long introductory loaders  
* Scroll hijacking  
* Heavy distortions  
* Continuous particle systems

### **Generic luxury template**

Rejected elements:

* Overly decorative serif typography everywhere  
* Excessive brown and beige  
* Generic stock imagery  
* Arbitrary oversized words  
* Decorative animations that obscure the work

We want original composition, not a recognizable template aesthetic.

---

# **03 — Typography System**

Typography is the principal expression of identity.

There are two selected type families.

## **3.1 Primary typeface — DM Sans**

**Source:** Google Fonts  
**Family:** DM Sans  
**Role:** Core brand and interface typography

Used for:

* Hero's main sans-serif lines  
* Navigation  
* Project titles  
* Body copy  
* Section headings  
* Service headings  
* Metadata  
* Buttons and links  
* Contact information

### **Why DM Sans?**

It combines contemporary clarity with enough warmth to avoid the detached feeling of a purely technical typeface.

It performs well across large display typography and practical interface text.

Its weight range also reduces our need for additional font families.

### **Selected weights**

* 400 — Regular body text  
* 500 — Primary display and medium emphasis  
* 600 — Navigation, project titles, and important labels

Use heavier weights sparingly.

Large typography should not automatically become bold.

## **3.2 Secondary typeface — Instrument Serif**

**Source:** Google Fonts  
**Family:** Instrument Serif  
**Role:** Expressive editorial accent

Use primarily the regular and italic styles.

Appropriate uses:

* The final word of the hero headline  
* A small number of expressive secondary statements  
* An occasional section headline accent  
* Possibly the contact section

Do not use Instrument Serif for:

* Main body paragraphs  
* Navigation  
* Buttons  
* Project metadata  
* Large volumes of descriptive copy  
* Every section title

### **Why Instrument Serif?**

It introduces a more human, editorial quality without demanding a separate decorative design system.

The contrast between a clean sans-serif and a carefully placed serif accent creates visual character.

### **Critical restraint rule**

**Never turn every major heading into a sans-serif/italic-serif combination.**

Use this contrast in the hero and perhaps one later moment.

Its rarity gives it value.

## **3.3 Primary heading treatment**

Working hero:

**Digital experiences**  
**built to be**  
*remembered.*

The first two lines use DM Sans.

The last line uses Instrument Serif Italic.

The third line should feel like a graceful change in texture, not an exaggerated flourish.

The exact line wrapping may adapt to screen width.

Do not insert desktop-specific line breaks that damage mobile typography.

## **3.4 Typography scale**

Use fluid values within defined limits.

| Text role | Desktop | Mobile | Weight / treatment |
| ----- | ----- | ----- | ----- |
| Hero display | 88–144px | 46–68px | Sans 500 / serif 400 |
| Major section heading | 64–96px | 40–58px | Sans 500 |
| Project title | 48–72px | 36–48px | Sans 500 |
| Service title | 28–40px | 26–32px | Sans 500 |
| Lead paragraph | 20–24px | 18–20px | Regular |
| Body | 16–18px | 16px | Regular |
| Small description | 14–15px | 14–15px | Regular |
| Navigation | 13–14px | 14px | Medium |
| Editorial metadata | 11–12px | 11–12px | Medium |

These are starting ranges, not instructions to apply maximum sizes indiscriminately.

## **3.5 Recommended line heights**

| Role | Line height |
| ----- | ----- |
| Oversized display | 0.94–1.02 |
| Major headings | 1.02–1.08 |
| Project titles | 1.05–1.12 |
| Lead paragraphs | 1.35–1.5 |
| Standard body | 1.55–1.7 |
| Metadata | 1.2–1.4 |

The display typography should feel tightly composed.

Body typography must remain comfortable to read.

## **3.6 Letter spacing**

Use:

* Large sans-serif display: approximately `-0.055em`  
* Medium headings: approximately `-0.035em`  
* Project titles: approximately `-0.045em`  
* Body text: normal or very slightly negative  
* Editorial metadata: approximately `0.10em`

Do not apply aggressively tight tracking to long body paragraphs.

The serif should retain its natural character.

## **3.7 Text width**

Recommended comfortable measures:

* Standard reading paragraph: 52–68 characters  
* Hero supporting copy: approximately 34–48 characters  
* Project summary: approximately 30–45 characters on desktop  
* About paragraph: approximately 52–65 characters

Text width should be controlled using character-based widths or layout columns, not arbitrary long full-width lines.

## **3.8 Case and capitalization**

Use normal sentence or title case for meaningful content.

Use uppercase only for small editorial labels.

Examples:

`SELECTED WORK`  
`INDEPENDENT PRACTICE`  
`01 / 03`

Do not uppercase entire descriptive paragraphs.

## **3.9 Numerical typography**

Project numbers should be visually consistent.

Use:

`01`  
`02`  
`03`

Prefer tabular numbers for counters and numerical metadata where supported.

## **3.10 Fallbacks**

Primary fallback:

`Arial, Helvetica, sans-serif`

Serif fallback:

`Georgia, Times New Roman, serif`

Font loading must not hide the website.

---

# **04 — Color System**

## **4.1 Overall direction**

**Warm neutral, dark ink, restrained natural accents.**

The global page should not use a constantly changing full-screen background.

Most atmospheric changes should happen within the Selected Work composition.

The visual language remains consistent as projects change.

## **4.2 Core palette**

| Token | Hex | Usage |
| ----- | ----- | ----- |
| Paper | `#F4F1EB` | Main page background |
| Ink | `#20211F` | Primary text and dark controls |
| Muted Ink | `#595A55` | Secondary body text |
| Quiet Ink | `#77776F` | Nonessential metadata on paper |
| Rule | `#D7D2C8` | Borders and separators |
| Soft Surface | `#EBE6DD` | Alternate surfaces |
| Warm White | `#FCFAF6` | Elevated/light visual surfaces |
| Dark Surface | `#1B1C1A` | Select dark treatments |
| Accent | `#805D4B` | Restrained warm emphasis |

These colors form the global visual system.

The paper background should feel warm without becoming visibly yellow.

The ink should feel rich without being pure black.

## **4.3 Color preview**

The relationships matter more than individual swatches.

**Primary combination:** Paper \+ Ink

**Secondary combination:** Paper \+ Muted Ink

**Dark combination:** Dark Surface \+ Warm White

**Accent combination:** Paper \+ Accent

Accent should be used sparingly.

It must not become the default color for every line, arrow, or heading.

## **4.4 Color hierarchy**

### **Primary text**

Use Ink.

### **Supporting text**

Use Muted Ink.

### **Decorative metadata**

Use Quiet Ink only where the text size and contrast remain accessible.

### **Borders**

Use Rule.

### **Primary contact action**

Use Ink background with Warm White text, or a strong high-contrast text link.

### **Editorial accent**

Use the warm Accent only where it provides a meaningful distinction.

## **4.5 Atmospheric project palette**

Each project receives a gallery-specific environment.

### **Café Bliss**

**Atmosphere:** Warm and tactile

* Stage background: `#E8DED1`  
* Accent suggestion: `#8B6650`  
* Text outside media: global Ink  
* Image character: natural warmth and soft contrast

### **IMIZI**

**Atmosphere:** Strong and grounded

* Stage background: `#252624`  
* Supporting neutral: `#D5D1CA`  
* Image accent: use the project's existing iron-red identity  
* Text inside dark regions: Warm White

### **Quad**

**Atmosphere:** Structured and digital

* Stage background: `#E1E7E8`  
* Supporting neutral: `#B8C4C7`  
* Main typography: global Ink  
* Image character: crisp, clean, high-detail application UI

## **4.6 Boundaries of atmospheric changes**

Project-specific color may influence:

* The image-stage surface  
* A narrow frame boundary  
* A small indicator  
* A subtle surrounding field  
* Selected editorial details

It must not unexpectedly recolor:

* The global header  
* Main body paragraphs  
* Important contact buttons  
* The complete page background  
* Accessibility focus styles

## **4.7 Color accessibility**

All final text/surface combinations must be contrast-tested.

Aim for WCAG AA:

* Normal text: at least 4.5:1  
* Large text: at least 3:1  
* Meaningful UI boundaries and indicators: at least 3:1 where required

If an accent or metadata color fails, adjust it.

The exact hex values are design targets, not an excuse to ignore contrast validation.

---

# **05 — Layout Grid**

## **5.1 Global container**

Recommended:

**Maximum content width: 1440px**

Horizontal padding:

* Wide desktop: 64–88px  
* Standard desktop: 40–64px  
* Tablet: 28–40px  
* Mobile: 20–24px  
* Very narrow mobile: 16–20px

Use a responsive CSS clamp where appropriate.

Suggested rule:

`padding-inline: clamp(20px, 5vw, 88px)`

The outer padding should remain consistent throughout the page.

## **5.2 Desktop grid**

**12-column editorial grid**

Recommended gutters: approximately 24px.

Use the grid to establish shared alignments between:

* Header  
* Hero  
* Work introduction  
* Gallery  
* Services  
* About  
* Contact  
* Footer

Not every section needs to visually expose the 12 columns.

The grid is an underlying compositional system.

## **5.3 Tablet grid**

Use a 6-column design framework or equivalent CSS grid.

Prioritize:

* Image clarity  
* Readable typography  
* Comfortable content widths  
* Simpler section compositions

## **5.4 Mobile grid**

Use a four-column conceptual grid, usually implemented as one content column.

Avoid forced multi-column layouts for project information.

## **5.5 Alignment rules**

The most important shared vertical lines are:

1. Left outer content boundary  
2. Gallery visual-stage beginning  
3. Gallery information-rail beginning  
4. Right outer content boundary

The hero should align to these same boundaries where possible.

## **5.6 Asymmetry**

Controlled asymmetry is encouraged.

Examples:

* Oversized heading with small right-side metadata  
* Large gallery image next to a narrow information rail  
* Services with numbers in a slim column  
* Contact heading with contact actions aligned separately

Avoid arbitrary asymmetric offsets.

Every imbalance should be visually intentional.

---

# **06 — Spacing System**

## **6.1 Base rhythm**

Use an approximately 8px-based spacing system with limited intermediate values.

Core spacing values:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160`

The design should not require dozens of unrelated spacing values.

## **6.2 Component spacing**

Suggested defaults:

* Small label to adjacent text: 8–12px  
* Heading to supporting paragraph: 20–32px  
* Project title to category: 8–12px  
* Project paragraph to actions: 24–32px  
* Service entry internal spacing: 16–24px  
* Major adjacent content blocks: 48–80px

## **6.3 Section spacing**

Desktop:

* Major section top/bottom padding: approximately 120–160px  
* Compact editorial subsection spacing: 64–96px

Mobile:

* Major section top/bottom padding: approximately 72–96px  
* Compact subsection spacing: 40–64px

These should be reduced when necessary to avoid excessively long mobile scrolling.

## **6.4 Breathing room**

Whitespace must create hierarchy.

Avoid adding space merely to imitate a minimalist website.

A large blank region is justified when it:

* Establishes a strong visual pause  
* Frames important typography  
* Separates major narrative chapters  
* Gives the work more presence

An empty gap without a compositional purpose is wasted space.

## **6.5 Section boundaries**

Use thin rules or carefully controlled negative space.

Avoid defaulting to giant colored background blocks for each section.

---

# **07 — Geometry & Surface Treatment**

## **7.1 General geometry**

The portfolio should be predominantly rectangular and architectural.

Use:

* Crisp image boundaries  
* Straight rules  
* Balanced rectangular frames  
* Minimal corner rounding  
* Precise alignment

## **7.2 Border radii**

Recommended:

* Major gallery frame: `2px` or square  
* Secondary media: `2–4px`  
* Small controls: `2–4px`  
* Pills: only for a clearly functional or compact status purpose

Avoid large rounded cards.

The interface should not look like a dashboard component library.

## **7.3 Borders**

Primary borders:

`1px solid var(--color-rule)`

Use borders to define:

* Header boundaries when needed  
* Gallery edges  
* Section labels  
* Service dividers  
* Footer structure  
* Focus or interactive states

## **7.4 Shadows**

Shadows should be almost absent.

The primary image frame may use an extremely subtle shadow if required by the image composition.

Avoid floating-card shadow systems.

## **7.5 Textures**

Default: no added paper noise or grain.

Real project imagery already provides visual texture.

If an extremely subtle material texture is explored later, it must not compromise text clarity or image presentation.

**Not required for today's launch.**

## **7.6 Background decoration**

No abstract blobs, floating circles, animated gradients, or ornamental 3D shapes.

The typography, imagery, and spacing provide enough character.

---

# **08 — Navigation Art Direction**

## **8.1 Structure**

Desktop:

**Left:** Personal wordmark  
**Right:** Work / Services / About / Start a Project

About and Services may appear in either order based on available width, but the work link should be prominent.

## **8.2 Wordmark**

Use the public personal name rather than inventing an agency name.

**Working presentation:** PRINCE ISHIMWE

Final preferred spelling and naming must be confirmed.

Treatment:

* DM Sans  
* Approximately 14–16px  
* Weight 600  
* Slight negative letter spacing  
* No symbol or elaborate monogram necessary

A custom logo is not a prerequisite.

## **8.3 Header dimensions**

Desktop:

* Approximate height: 80px  
* Comfortable vertical alignment  
* Thin lower rule when useful

Mobile:

* Approximate height: 64px  
* Compact identity  
* Clear menu/contact access

## **8.4 Positioning**

The header remains available during scrolling.

Recommended:

* Sticky at top  
* Solid or nearly opaque paper background  
* Thin border on scroll when needed  
* No large glassmorphic blur effect

Use discretion with transparency.

Legibility takes priority when the page scrolls behind the header.

## **8.5 Link treatment**

Default:

* DM Sans  
* 13–14px  
* Medium  
* Ink color  
* Compact spacing

Hover:

* Underline or subtle directional indicator  
* Slight emphasis shift  
* Approximately 180–220ms

The animation must not cause text to jump.

## **8.6 Primary navigation CTA**

**Start a Project ↗**

The contact action may use:

* A discreet arrow  
* Slightly stronger weight  
* A carefully designed underline

Avoid a large contrasting button that visually dominates the header.

## **8.7 Mobile navigation**

Use a simple compact menu.

Preferred:

* Wordmark on left  
* Menu button on right  
* Clear contact link within the opened menu  
* Accessible open/close behavior

The mobile menu should feel like part of the editorial system.

No elaborate page-cover transition is required.

---

# **09 — Hero Art Direction**

This is the portfolio's first significant design moment.

It must establish quality without overwhelming the visitor.

## **9.1 Hero concept**

**A large editorial statement, with information placed like publication metadata.**

The visitor should feel that the page has been carefully composed.

The hero contains no decorative product render, fictional image, or complex scene.

## **9.2 Composition**

Desktop:

* Oversized main headline  
* Narrow supporting paragraph  
* Small professional metadata  
* Strong left alignment  
* One primary directional link  
* Generous negative space

The headline is the visual subject.

## **9.3 Headline**

Working copy:

**Digital experiences**  
**built to be**  
*remembered.*

Treatment:

First two lines:

* DM Sans  
* Weight 500  
* Tight tracking  
* Dark ink

Final line:

* Instrument Serif Italic  
* Weight 400  
* Slightly different natural line character  
* Dark ink

Do not color the last word bright orange or apply unnecessary gradients.

The font contrast is sufficient.

## **9.4 Desktop scale**

Recommended CSS starting point:

`font-size: clamp(5.5rem, 8vw, 9rem)`

Line height:

`0.95`

Tracking for sans-serif:

`-0.055em`

Allow the serif line to receive its own optical adjustment.

Actual fit must be checked at common desktop widths.

## **9.5 Hero content hierarchy**

1. Main headline  
2. Clear service explanation  
3. Identity/location metadata  
4. Explore Work link

The service explanation cannot be hidden below an excessively tall hero on ordinary desktop screens.

## **9.6 Supporting paragraph**

Working copy:

“I design and develop thoughtful websites for businesses and brands — combining strong visual direction, purposeful interaction, and reliable frontend execution.”

Treatment:

* 18–22px desktop  
* 16–18px mobile  
* Muted Ink  
* Controlled line width  
* Comfortable line height

This sentence provides clarity that the expressive headline intentionally does not.

## **9.7 Metadata**

Possible labels:

**INDEPENDENT DESIGNER & FRONTEND DEVELOPER**

**BASED IN RWANDA**

Use only what improves understanding.

The page should not repeat “Rwanda,” “Independent,” and “Frontend Developer” in numerous adjacent locations.

## **9.8 Hero height**

Desktop:

Approximately 80–90% of the usable viewport height, subject to content fitting.

Do not force a fixed minimum height that clips content on short screens.

Mobile:

Prefer content-driven height.

The hero should remain generous, but the first project should not feel unnecessarily distant.

## **9.9 Explore Work treatment**

Text:

**Explore Selected Work ↓**

Use a simple typographic link.

Possible treatment:

* Bottom-aligned  
* Fine preceding rule  
* Small directional arrow  
* Restrained hover shift

## **9.10 Hero entrance**

Recommended:

* Headline opacity settles from 0 to 1  
* Small vertical movement of approximately 16–24px  
* Supporting copy follows  
* Maximum overall entrance around 700ms

Do not animate each individual letter.

Do not delay interactivity.

Do not require visitors to wait for an introduction.

## **9.11 Mobile hero**

Key adjustments:

* Headline approximately 46–68px  
* Natural, readable line wrapping  
* Supporting copy beneath headline  
* Compact metadata  
* Adequate bottom spacing  
* No horizontal overflow

Allow the serif word to remain distinctive without extending beyond the screen.

---

# **10 — Selected Work Introduction**

## **10.1 Purpose**

Create the editorial transition from typography-led introduction to image-led work.

## **10.2 Content**

Small label:

**01 / SELECTED WORK**

Heading:

**Selected work.**

Supporting microcopy, if needed:

“Three explorations of identity, interaction, and digital experience.”

This copy must not imply all projects were client commissions.

## **10.3 Composition**

The work introduction occupies the width of the editorial grid.

Recommended:

* Fine upper rule  
* Small section number  
* Large title  
* Brief context  
* Clear introduction to the gallery

## **10.4 Visual transition from hero**

A fine line marks the change in section.

The image stage appears within the same alignment framework.

The transition should feel like the exhibition is opening.

## **10.5 Motion**

The line may reveal horizontally.

The gallery frame enters subtly.

Do not require a complex physical transformation from the rule into a full image rectangle.

That would increase implementation fragility without meaningfully improving the experience.

---

# **11 — The Living Frame: Main Composition**

This is the most important design specification in Phase 2\.

## **11.1 Visual structure**

The desktop gallery consists of:

**A. Persistent image stage**

**B. Scrolling editorial project rail**

The stage occupies the majority of the width.

The project rail contains titles, descriptions, metadata, and actions.

## **11.2 Desktop proportions**

Suggested available-width distribution:

* Visual stage: approximately 67%  
* Gap: approximately 40–56px  
* Information rail: remaining width

Treat these as responsive design proportions, not rigid percentages that ignore the gap.

The image should dominate without forcing project descriptions into an unreadably narrow column.

## **11.3 Stage aspect ratio**

**Primary design target: 16:10**

Why:

* Cinematic without being excessively wide  
* Suitable for actual website screenshots  
* Leaves reasonable vertical room on desktop  
* Works with large images and interface previews  
* More versatile than a very wide 21:9 crop

If a project image requires a different presentation, use internal image composition rather than changing the entire frame's dimensions between projects.

**The outer frame geometry stays stable.**

## **11.4 Stage dimensions**

Within the desktop grid:

* Occupy the visual-stage column  
* Maintain a 16:10 visual area  
* Fit within the usable viewport height  
* Allow room for the sticky header and gallery details

The frame must not extend below the viewport while sticky.

## **11.5 Sticky positioning**

Recommended top offset:

Approximately 96–120px, depending on the final header height and viewport.

The stage should sit comfortably below the navigation.

It should not visually collide with the header.

On screens too short to display the stage and surrounding margins, disable the sticky composition.

## **11.6 Information rail**

The right-side editorial rail contains three project chapters.

Each chapter includes:

**Number**  
**Category**  
**Project title**  
**Concise description**  
**Project details**  
**Live website link**  
**Optional case-study link**

The right rail scrolls naturally.

It should be clean, aligned, and intentionally narrow.

## **11.7 Information hierarchy**

Recommended sequence for each chapter:

`01 / 03`

`HOSPITALITY — CONCEPT WEBSITE`

**Café Bliss**

Short summary.

`DESIGN / DEVELOPMENT / 2026`

**View Live Website ↗**

The most visible elements are the project title and the image.

The category and project details provide context rather than competing for attention.

## **11.8 Chapter height**

Desktop project chapters should provide sufficient scroll distance for a deliberate transition.

Suggested starting point:

`min-height: clamp(420px, 68svh, 660px)`

Do not add artificial blank space beyond what is needed to create a coherent reading and transition rhythm.

The exact geometry should be tuned in the browser.

## **11.9 Content positioning within chapters**

Prefer vertically balanced placement.

As a chapter enters its active region, its title and description should be comfortably visible.

Avoid having the active project image change while its corresponding title remains far below the viewport.

## **11.10 Project index**

Use a compact editorial index integrated with the gallery:

**01 — Café Bliss**  
**02 — IMIZI**  
**03 — Quad**

Potential placement:

* Above the frame  
* Along the upper boundary of the work composition  
* In a narrow row shared with the work heading

Do not create a second large navigation system.

The index should be clear but visually subordinate.

## **11.11 Selected index state**

Active:

* Ink color  
* Small underline or rule  
* Full opacity

Inactive:

* Muted Ink  
* No large movement  
* No aggressive fading

## **11.12 Gallery background**

The global page remains Paper.

The gallery image stage receives the selected project's atmospheric color.

If a narrow surrounding field is used, keep it spatially contained.

Do not animate the entire website background between warm, dark, and blue surfaces.

---

# **12 — Project Art Direction: Café Bliss**

## **12.1 Role in the portfolio**

Café Bliss is the first project and the initial state of the Living Frame.

It must establish the quality of the gallery.

## **12.2 Mood**

Warm, inviting, tactile, quiet, editorial.

## **12.3 Visual priorities**

* Hospitality atmosphere  
* Authentic screenshots  
* Elegant typography  
* Appealing image treatment  
* Clear website structure

## **12.4 Stage treatment**

Use a warm-neutral background.

The real project screenshot should occupy most of the frame.

Possible composition:

* One large screenshot  
* Extremely subtle inset from frame boundaries  
* Minimal shadow or no shadow  
* Careful focal positioning

## **12.5 Screenshot choice**

Prefer a screenshot that shows:

* The website's strongest visual atmosphere  
* A recognizable brand  
* Beautiful typography  
* A convincing composition

Avoid a crop that makes the actual website impossible to recognize.

## **12.6 Information**

**01 / 03**

**HOSPITALITY — CONCEPT WEBSITE**

**Café Bliss**

Suggested description:

“A warm, responsive digital experience for a fictional neighborhood café, designed around atmosphere, menu discovery, and intuitive navigation.”

Metadata:

`DESIGN & DEVELOPMENT · 2026`

Primary action:

**View Live Website ↗**

Destination:

[https\://cafe-bliss-rw.vercel.app](https://cafe-bliss-rw.vercel.app/)

## **12.7 Color**

Atmospheric surface:

`#E8DED1`

The surrounding mood may subtly warm, but the global Ink typography stays consistent.

## **12.8 Motion character**

* Soft, deliberate reveal  
* Gentle crossfade  
* Minimal image scale  
* No bouncy movement

Café Bliss establishes the baseline motion personality.

---

# **13 — Project Art Direction: IMIZI**

## **13.1 Role in the portfolio**

IMIZI demonstrates brand character and a complete commercial website experience.

## **13.2 Mood**

Strong, disciplined, confident, architectural.

## **13.3 Visual priorities**

* Strong visual identity  
* Bold image composition  
* Clear website structure  
* Fitness-oriented energy  
* Controlled color contrast

## **13.4 Stage treatment**

Keep the outer frame geometry unchanged.

Within the frame:

* Introduce a dark stage surface  
* Showcase the project's existing red/neutral visual language  
* Preserve readable screenshot detail  
* Avoid excessive contrast filters

## **13.5 Screenshot choice**

Prefer a screenshot that communicates:

* The IMIZI identity  
* Strong visual hierarchy  
* Real website layout  
* Relevant fitness or brand imagery

An image chosen solely because it is dramatic is not enough.

It must also demonstrate the actual website.

## **13.6 Information**

**02 / 03**

**FITNESS — CONCEPT WEBSITE**

**IMIZI Training Club**

Suggested description:

“A bold digital presence for a fictional strength and conditioning club, connecting brand identity with classes, memberships, and a clear path to explore the experience.”

Metadata:

`DESIGN & DEVELOPMENT · 2026`

Primary action:

**View Live Website ↗**

Destination:

[https\://imizi-training-club.vercel.app](https://imizi-training-club.vercel.app/)

## **13.7 Color**

Atmospheric surface:

`#252624`

The project screenshot should bring its own iron-red accents.

Do not recolor the actual project interface to match the portfolio.

## **13.8 Motion character**

* More geometric reveal  
* Slightly firmer pacing  
* Clean, confident settling  
* Minimal overshoot

The difference should be subtle.

We are not constructing a completely separate animation identity.

---

# **14 — Project Art Direction: Quad**

## **14.1 Role in the portfolio**

Quad demonstrates technical depth and product-interface capability.

It is the final project because it expands the visitor's understanding of what we can build.

## **14.2 Mood**

Precise, structured, modern, intelligent.

## **14.3 Visual priorities**

* Real application interface  
* Product complexity  
* Clean information architecture  
* Multiple interacting systems  
* Authentic implementation evidence

## **14.4 Stage treatment**

A cooler neutral stage.

Possible composition:

* One strong authenticated application screenshot  
* Minimal surrounding surface  
* Carefully controlled crop  
* Enough clarity to identify real interface elements

A secondary interface detail may be added later, but one genuinely strong screenshot is more important than a complex collage.

## **14.5 Screenshot choice**

Do not use the login page as the only visual.

Capture a useful view of the actual application containing representative content and functional interface elements.

If necessary, prepare safe demo data.

Never publish private user content without authorization.

## **14.6 Information**

**03 / 03**

**DIGITAL PRODUCT — WEB APPLICATION**

**Quad**

Suggested description:

“A full-stack student community platform bringing content, profiles, messaging, and real-time interactions into one connected digital experience.”

Metadata:

`FULL-STACK DEVELOPMENT · 2026`

Primary action:

**View Live Application ↗**

Destination:

[https\://joinquad.vercel.app](https://joinquad.vercel.app/)

Optional technical link:

**View Repository ↗**

Destination:

[https\://github.com/byishimwe/quad](https://github.com/byishimwe/quad)

## **14.7 Color**

Atmospheric surface:

`#E1E7E8`

Project-specific colors should come primarily from its actual interface.

## **14.8 Motion character**

* Crisp transitions  
* Minimal blur  
* Structured mask geometry  
* Slightly quicker perceived settling

Quad should feel deliberate, not futuristic.

---

# **15 — Living Frame: Image Treatment**

## **15.1 Asset philosophy**

**Use actual project imagery.**

No AI-generated screenshots.

No unrelated stock photographs pretending to be our work.

No fabricated mobile screens.

No unnecessary generic laptop mockups.

## **15.2 Preferred screenshot format**

For primary desktop images:

* Capture at a consistent desktop viewport where practical  
* Use clean screenshots  
* Remove unrelated browser UI where possible  
* Preserve the project's own branding  
* Crop carefully  
* Optimize before publication

## **15.3 Primary aspect ratio**

Target assets prepared for a 16:10 stage.

However, do not blindly crop every source image to 16:10.

Different screenshots require different internal presentation rules.

## **15.4 Image fit**

### **Café Bliss**

Prefer a visually immersive composition.

`object-fit: cover` may be appropriate when the crop preserves meaningful content.

### **IMIZI**

Use cover or a contained composition depending on the selected screenshot.

### **Quad**

Prefer `object-fit: contain` when cropping would remove important application UI.

The stage's background surface can provide the surrounding space.

## **15.5 Image positioning**

Set an intentional focal point per image.

Do not assume all images should be centered.

Project-specific `object-position` values may be stored in the project configuration.

## **15.6 Image layering**

The Living Frame may have two visual layers:

1. Current image  
2. Incoming image

During transition, the incoming image appears above the current image.

Once settled, inactive layers should not remain as a growing collection of hidden images.

## **15.7 Image clarity**

Avoid applying:

* Strong blur  
* Aggressive contrast filters  
* Desaturation  
* Bright overlays  
* Arbitrary color grading

The projects already have their own carefully designed identities.

## **15.8 Browser chrome**

Do not surround every screenshot with a generic browser mockup.

A restrained edge or surface may be sufficient.

The frame should feel like an exhibition mount, not a laptop advertisement.

## **15.9 Asset optimization**

Provide appropriately sized image files.

Favor WebP or AVIF where useful, with a reliable fallback.

Avoid downloading a multi-megabyte screenshot when the displayed dimensions require far less.

Reserve aspect ratios to prevent layout shifts.

## **15.10 Minimum asset set for today's launch**

Required:

* Café Bliss primary screenshot  
* IMIZI primary screenshot  
* Quad primary authenticated screenshot

Preferred:

* One supporting image per project  
* One representative mobile capture per business website

Additional imagery must not delay the first functional deployment.

---

# **16 — Living Frame: Motion System**

## **16.1 Central motion principle**

**Motion is the language of continuity.**

Images should transform while the visual identity remains coherent.

The visitor must always understand which project is being presented.

## **16.2 Main image transition**

Recommended baseline:

1. Incoming project image is ready.  
2. Incoming image appears above the current one.  
3. Incoming image reveals through a simple mask.  
4. Previous image recedes subtly.  
5. Incoming image settles at its stable scale.  
6. The active atmosphere finishes its transition.

There should be no blank frame.

## **16.3 Transition duration**

Starting values:

* Image transition: **550ms**  
* Stage atmosphere: **550–650ms**  
* Metadata highlight: **250ms**  
* Project index emphasis: **180ms**  
* Hover image response: **250ms**

These are nominal durations.

Transitions should be interruptible, so rapid scrolling can shorten or replace them.

## **16.4 Easing**

Recommended easing direction:

* GSAP `power2.inOut` for major project transitions  
* `power2.out` for entrances and hover feedback  
* No elastic or bounce curves

The motion should feel weighted, not springy.

## **16.5 Image scale**

Suggested:

* Incoming image begins around `1.025`  
* Settles at `1.0`

This is enough to provide perceived depth.

Avoid large zooms, especially on UI screenshots.

## **16.6 Masking**

Preferred launch treatment:

**Vertical rectangular reveal**

The incoming image becomes visible progressively through a straightforward rectangular clip.

Alternative if this produces undesirable artifacts:

**Layered crossfade**

A perfect crossfade is better than a poorly executed mask.

## **16.7 Atmosphere transition**

When active project changes:

* Current atmospheric surface begins shifting toward the next color.  
* Incoming image reveals.  
* Index and associated emphasis update.  
* Project content remains available.

Do not animate dozens of unrelated CSS properties.

## **16.8 Metadata behavior**

The right-hand project descriptions already exist in the normal document flow.

Avoid making them disappear just because the visual stage changes.

Only subtle active emphasis should change.

This reduces the risk of text becoming unreadable during scrolling.

## **16.9 Reverse transition**

Scrolling upward must trigger the corresponding previous-project state.

The reverse transition may use the same motion treatment rather than a complicated reversed cinematic sequence.

The visitor should never experience jarring image jumps.

## **16.10 Rapid scrolling**

If visitors move quickly from Café Bliss to Quad:

* Interrupt outdated transitions.  
* Prioritize the latest active project.  
* Do not queue all intermediate effects.  
* Maintain a visible frame.  
* Settle promptly into the correct project.

This is an essential engineering requirement.

## **16.11 Continuous parallax**

Not required for launch.

If used later, limit to a very subtle internal image offset.

Do not connect heavy animation work to every scroll pixel.

## **16.12 Reduced motion**

When `prefers-reduced-motion: reduce` is enabled:

* Disable image zooms  
* Disable parallax  
* Disable long masked reveals  
* Disable decorative entrance translations  
* Switch projects instantly or with a very short fade  
* Preserve all information and navigation

The portfolio must remain visually complete.

---

# **17 — Frame Introduction Motion**

## **17.1 Purpose**

Create continuity between the hero and the gallery.

## **17.2 Sequence**

1. The Selected Work heading becomes visible.  
2. The upper editorial rule appears.  
3. The gallery frame settles into place.  
4. Café Bliss imagery becomes visible.  
5. The gallery continues as a normal scroll experience.

## **17.3 Recommended duration**

Approximately 500–700ms overall, with modest overlap.

## **17.4 Constraints**

No scroll lock.

No pinned cinematic introduction that visitors must finish watching.

No long delay before the first project becomes accessible.

## **17.5 Launch fallback**

If the introduction creates problems, display the frame immediately.

The gallery's content and layout are more important than this effect.

---

# **18 — Link and Button System**

## **18.1 Design philosophy**

Prefer typography-led interactive elements.

The portfolio should not need oversized rounded buttons everywhere.

## **18.2 Primary action**

Example:

**Start a Project ↗**

Possible treatment:

* Ink text  
* Medium weight  
* Fine underline  
* Small diagonal arrow

In the final contact section, the action can become larger and more expressive.

## **18.3 Secondary action**

Example:

**View Live Website ↗**

Treatment:

* 14–16px  
* Medium weight  
* Subtle underline or arrow  
* Clear spacing from supporting metadata

## **18.4 Arrow icon**

Use one consistent arrow vocabulary.

Recommended:

* `↗` for external destination  
* `→` for internal navigation  
* `↓` for downward section navigation

Do not mix multiple icon styles arbitrarily.

## **18.5 Hover**

Recommended:

* Underline grows or becomes more visible  
* Arrow shifts 2–3px at most  
* Text remains stable  
* Duration 150–220ms

Avoid animation that changes the link's overall width and moves neighboring elements.

## **18.6 Focus**

Keyboard focus must remain visible.

Use a deliberate outline or equivalent high-contrast treatment.

Focus should be at least as understandable as hover.

## **18.7 Touch devices**

Do not hide arrows or important labels until hover.

Tap targets should provide sufficient touch area, ideally around 44px minimum in practical navigation contexts.

## **18.8 Disabled interactions**

Do not display disabled project links that look functional.

If a case-study page does not exist, omit that action.

---

# **19 — Services Section Art Direction**

## **19.1 Design principle**

**An editorial list, not a grid of service cards.**

The section should return the visitor to typographic calm after the image-heavy gallery.

## **19.2 Heading**

Small label:

**02 / SERVICES**

Large heading:

**What I do.**

Supporting line:

“From essential business websites to distinctive interactive experiences.”

## **19.3 Composition**

Desktop:

* Main title in a large area  
* Three numbered service rows below  
* Strong column alignment  
* Fine horizontal rules

Each service entry contains:

Number / Service title / Short description

## **19.4 Service entries**

### **01 — Business Websites**

“Clear, polished websites that help businesses establish credibility, present their services, and make it easier for customers to connect.”

### **02 — Custom Digital Experiences**

“Distinctive websites that combine strong visual direction with thoughtful interaction and tailored frontend development.”

### **03 — Website Redesigns**

“Transforming outdated websites into more coherent, modern, responsive, and effective digital experiences.”

## **19.5 Row styling**

Suggested:

* Thin top rule  
* Number in small metadata styling  
* Service title around 30–40px  
* Description in readable body text  
* Large but controlled vertical padding  
* Bottom rule after final entry

## **19.6 Interaction**

Optional:

* Small arrow or underline on relevant actions  
* Gentle entrance as section enters view

Do not animate the service rows into complex accordions.

All descriptions should remain visible.

## **19.7 Mobile treatment**

Each row stacks:

Number  
Title  
Description

Keep vertical spacing generous, but not wasteful.

---

# **20 — About Section Art Direction**

## **20.1 Purpose**

Move from visual capability to personal credibility.

The section should feel warm and human without abandoning the editorial design system.

## **20.2 Heading**

Small label:

**03 / ABOUT**

Main heading:

**A little about me.**

## **20.3 Composition**

Desktop:

* Large heading on one side  
* Narrow, carefully typeset paragraph on the other  
* Optional supporting professional details

Mobile:

* Heading  
* Paragraph  
* Small metadata

## **20.4 Working copy**

“I'm an independent designer and frontend developer based in Rwanda. I enjoy bringing together visual design and engineering to create websites that feel thoughtful, purposeful, and carefully built.”

A second short paragraph may describe the approach to business needs and collaboration.

Avoid unnecessarily lengthy personal storytelling.

## **20.5 Portrait decision**

**No portrait required today.**

A genuine professional portrait could add trust later.

Do not use an invented or unrelated face simply to fill the composition.

## **20.6 Technical skills**

Avoid a large icon grid.

If useful, include one restrained line:

`DESIGN · FRONTEND DEVELOPMENT · INTERACTION · RESPONSIVE SYSTEMS`

The portfolio's actual work should do most of the explaining.

## **20.7 Motion**

Simple opacity or small vertical entrance.

No animated biography timeline.

---

# **21 — Contact Section Art Direction**

## **21.1 Purpose**

Create a final memorable typographic moment that invites collaboration.

The contact section should feel like the natural conclusion of the exhibition.

## **21.2 Heading**

**Have something worth building?**

Suggested composition:

**Have something**  
**worth building?**

Avoid an awkward split that isolates a tiny word.

## **21.3 Typography**

Use large DM Sans display typography.

Optionally introduce Instrument Serif on a single meaningful word if the result genuinely improves the design.

However, our preferred baseline is **pure DM Sans** here.

This prevents repetition of the hero's exact typographic trick.

## **21.4 Composition**

Desktop:

* Oversized left-aligned or carefully composed headline  
* Small supporting statement  
* Prominent Start a Project action  
* Visible email alternative  
* Generous surrounding whitespace

## **21.5 Supporting text**

Working copy:

“Have a website in mind, or an existing one that needs a new direction? I'd love to hear about it.”

Keep the tone approachable and professional.

## **21.6 Primary contact**

**Start a Project ↗**

Destination: verified WhatsApp link.

## **21.7 Secondary contact**

**Send an Email ↗**

Destination: verified email address.

## **21.8 Color treatment**

Preferred:

Paper background with strong Ink typography.

Optional alternative:

Dark Surface background with Warm White typography.

**Recommendation for launch:** Keep the Paper background.

The website should end with the same calm visual confidence with which it began.

## **21.9 Animation**

Minimal.

The large statement can reveal gently.

Contact links use the global interaction system.

Do not make users wait for the contact information to appear.

---

# **22 — Footer Design**

## **22.1 Purpose**

Provide a clean final boundary.

## **22.2 Structure**

Desktop:

* Name or wordmark  
* Copyright  
* Location  
* Small links

Mobile:

Stack naturally with comfortable spacing.

## **22.3 Treatment**

* Thin upper rule  
* Small DM Sans  
* Muted text  
* Minimal padding compared with major content sections

## **22.4 Content**

Possible:

`© 2026 PRINCE ISHIMWE`

`RWANDA`

`BACK TO TOP ↑`

Use the confirmed public identity.

Do not add unnecessary platform badges or decorative footer graphics.

---

# **23 — Responsive Visual Specifications**

## **23.1 Wide desktop — 1440px and above**

Desired experience:

* Hero typography receives full scale.  
* Wide editorial margins.  
* Living Frame uses its sticky two-column presentation.  
* Supporting metadata remains compact.  
* Services and About use controlled asymmetry.

## **23.2 Standard desktop — 1100–1439px**

Desired experience:

* Same gallery concept.  
* Slightly reduced type sizes.  
* Narrower margins.  
* Reduced column gaps where necessary.  
* No clipped project description.

## **23.3 Tablet — 768–1099px**

Desired experience:

* Large but simpler image-led composition.  
* Stacked projects.  
* Reduced hero size.  
* Simplified navigation as needed.  
* No sticky desktop gallery required.

## **23.4 Mobile — 375–767px**

Desired experience:

* Strong headline  
* Readable intro  
* Large project images  
* Clear project titles  
* Compact paragraphs  
* Comfortable actions  
* Natural vertical scrolling  
* No dependence on hover or long animations

## **23.5 Narrow mobile — 320–374px**

Essential checks:

* Wordmark fits.  
* Hero typography wraps without clipping.  
* Contact action fits.  
* Project names fit or wrap naturally.  
* No horizontal scrolling.  
* Navigation remains accessible.

## **23.6 Short-height desktop**

For narrow vertical desktop space, use the stacked gallery even when width is large.

Suggested initial simplification condition:

Viewport height below approximately 700px.

This threshold should be tested against the final header, stage dimensions, and content rather than accepted blindly.

## **23.7 Responsive typography**

Use `clamp()` and breakpoint-specific adjustments.

Avoid defining dozens of isolated fixed font sizes.

## **23.8 Responsive imagery**

The stage must preserve good composition across aspect ratios.

For mobile:

* Prefer an image ratio between 4:3 and 16:10, depending on content.  
* Reposition screenshots intentionally.  
* Preserve important website information.  
* Avoid tiny unreadable UI framed by excessive empty margins.

---

# **24 — Motion Hierarchy Across the Whole Site**

We will use four motion levels.

## **Level 1 — Signature interaction**

**The Living Frame transitions**

Most expressive.

Occurs primarily when the active project changes.

## **Level 2 — Major composition entrances**

**Hero entrance and Selected Work introduction**

Controlled, brief, visually meaningful.

## **Level 3 — Section transitions**

**Services, About, Contact**

Simple fades or restrained vertical movement.

## **Level 4 — Micro-interactions**

**Links, arrows, small image responses**

Fast, minimal, functional.

## **Non-negotiable rule**

A Level 3 or Level 4 animation must never visually compete with Level 1\.

The visual system should feel coordinated, not like unrelated animation experiments.

---

# **25 — Detailed Motion Tokens**

Initial motion values:

| Token | Value | Purpose |
| ----- | ----- | ----- |
| `--duration-fast` | 180ms | Hover/focus emphasis |
| `--duration-normal` | 280ms | UI changes |
| `--duration-reveal` | 550ms | Image reveal |
| `--duration-atmosphere` | 600ms | Gallery surface changes |
| `--duration-entrance` | 650ms | Major section entrance |
| `--ease-standard` | `power2.out` | Soft entrances |
| `--ease-transition` | `power2.inOut` | Gallery transitions |

The GSAP easing names are conceptual tokens rather than CSS easing strings.

CSS-only interactions should use equivalent browser-compatible easing values.

## **25.1 Animation distance**

* Text entrance: 12–24px  
* Arrow hover: 2–3px  
* Image scale: approximately 1.025  
* No large page-level translations

## **25.2 Trigger frequency**

Do not replay entrance animations repeatedly as visitors scroll up and down.

One-time entrance reveals are usually preferable.

Living Frame transitions should remain bidirectional.

## **25.3 Motion cleanup**

When a component unmounts or layout changes:

* Remove stale listeners.  
* Clean up GSAP timelines.  
* Recalculate valid scroll geometry.  
* Restore stable visual states.

## **25.4 Initial load**

The site should never begin with blank content waiting for JavaScript animation initialization.

Baseline content should be present and readable.

---

# **26 — Accessibility & Readability Rules**

## **26.1 Typography**

Minimum body text should ordinarily be 16px.

Small metadata may be 11–12px but should never contain the only essential explanation of a project.

## **26.2 Contrast**

Test all selected text/surface combinations.

Particular attention:

* Quiet metadata on Paper  
* Text over dark gallery surfaces  
* Focus outlines  
* Accent-colored links

## **26.3 Reduced motion**

All nonessential movement must be removable.

Static design must remain complete and visually balanced.

## **26.4 Keyboard**

Every link should have a visible focus treatment.

The gallery index, navigation, live project links, and contact links must be usable without a pointer.

## **26.5 Touch**

No hover-exclusive project details.

No tiny links placed near each other.

## **26.6 Semantic integrity**

Visual typography must not compromise the logical heading structure.

The hero has the main `h1`.

Project and section headings follow a coherent hierarchy.

## **26.7 Images**

Provide meaningful alternative text for informative images.

Do not repeat lengthy project descriptions through identical image alt text.

Decorative duplicate layers should not clutter the accessibility tree.

---

# **27 — Performance Constraints**

## **27.1 Primary concern**

The visual quality depends on large images.

The initial website must still load efficiently.

## **27.2 Font strategy**

Use two font families only.

Prefer efficiently served WOFF2 assets.

Avoid importing unnecessary weights.

Apply suitable font fallbacks.

Use `font-display: swap` or equivalent strategy.

## **27.3 Animation strategy**

Animate primarily:

* Transform  
* Opacity  
* Limited clip paths

Avoid:

* Large-area blur effects  
* Expensive continuously changing filters  
* Repeated layout reads on every scroll event  
* Numerous independent scroll animation timelines

## **27.4 Image strategy**

* Proper sizes  
* Responsive image sources  
* Reserved geometry  
* Deferred loading for offscreen assets  
* Priority for the first required content images  
* No autoplay background video at launch

## **27.5 Progressive enhancement**

Before JS enhancement, each project should remain independently understandable with its own image and information.

After the desktop gallery enhancement successfully initializes, the shared visual stage may replace redundant inline imagery.

If enhancement fails, restore the normal stacked presentation.

The site must never depend on animation to make essential content visible.

---

# **28 — Implementation Design Tokens**

The following tokens provide an initial coding baseline.

They may be adjusted slightly after testing real content and screenshots.

:root {

  /\* Core colors \*/

  \--color-paper: \#F4F1EB;

  \--color-ink: \#20211F;

  \--color-muted: \#595A55;

  \--color-quiet: \#77776F;

  \--color-rule: \#D7D2C8;

  \--color-surface: \#EBE6DD;

  \--color-white: \#FCFAF6;

  \--color-dark: \#1B1C1A;

  \--color-accent: \#805D4B;

  /\* Project atmospheres \*/

  \--color-cafe: \#E8DED1;

  \--color-imizi: \#252624;

  \--color-quad: \#E1E7E8;

  /\* Typography \*/

  \--font-sans: "DM Sans", Arial, sans-serif;

  \--font-serif: "Instrument Serif", Georgia, serif;

  \--text-body: 1rem;

  \--text-lead: clamp(1.125rem, 1.7vw, 1.5rem);

  \--text-hero: clamp(3rem, 8vw, 9rem);

  \--text-section: clamp(2.5rem, 6vw, 6rem);

  \--text-project: clamp(2.25rem, 4.6vw, 4.5rem);

  /\* Layout \*/

  \--content-max: 1440px;

  \--page-gutter: clamp(20px, 5vw, 88px);

  \--header-height: 80px;

  \--section-space: clamp(80px, 10vw, 160px);

  /\* Geometry \*/

  \--radius-small: 2px;

  \--border-rule: 1px solid var(--color-rule);

  /\* Motion \*/

  \--duration-fast: 180ms;

  \--duration-normal: 280ms;

  \--duration-reveal: 550ms;

  \--duration-atmosphere: 600ms;

  \--ease-css-standard:

    cubic-bezier(0.22, 1, 0.36, 1);

}

## **28.1 Mobile overrides**

@media (max-width: 767px) {

  :root {

    \--header-height: 64px;

    \--page-gutter: 20px;

    \--section-space: 80px;

    \--text-hero: clamp(3rem, 11vw, 4.25rem);

  }

}

## **28.2 Baseline page behavior**

html {

  scroll-padding-top: calc(var(--header-height) \+ 16px);

}

body {

  margin: 0;

  background: var(--color-paper);

  color: var(--color-ink);

  font-family: var(--font-sans);

  font-size: var(--text-body);

  line-height: 1.6;

}

img {

  display: block;

  max-width: 100%;

}

::selection {

  background: var(--color-ink);

  color: var(--color-white);

}

## **28.3 Responsive design rule**

Do not use token values blindly.

A token establishes consistency.

The final browser composition establishes whether the value is visually correct.

Tuning is expected.

Reinventing the entire visual system during implementation is not.

---

# **29 — Visual Quality Checklist**

Before considering the design ready:

## **Typography**

* Display typography has deliberate line breaks.  
* DM Sans and Instrument Serif complement each other.  
* Serif accents are rare and intentional.  
* Body copy remains comfortably readable.  
* Headings fit across target viewports.  
* No orphaned single words create awkward layouts.

## **Color**

* Global palette is consistent.  
* Project atmospheres remain distinct.  
* Primary text has adequate contrast.  
* Links and focus states are visible.  
* Atmosphere changes do not obscure content.

## **Layout**

* Section alignments follow the shared grid.  
* Margins are consistent.  
* Negative space feels purposeful.  
* Main project imagery receives enough emphasis.  
* Information rails remain readable.  
* The hero and contact section feel related.

## **Project imagery**

* Café Bliss uses authentic imagery.  
* IMIZI uses authentic imagery.  
* Quad shows the actual application.  
* Crops preserve meaningful content.  
* Images are optimized.  
* Project identities remain visually recognizable.

## **Motion**

* The Living Frame is the strongest motion moment.  
* Other animations are restrained.  
* Rapid scrolling does not create broken states.  
* Reverse scrolling works.  
* Reduced-motion behavior is complete.  
* Animation never blocks navigation.

## **Mobile**

* Hero fits without overflow.  
* Navigation remains accessible.  
* Project imagery is convincing.  
* Links are comfortably tappable.  
* Service and about content remain readable.  
* Contact information is easy to reach.

---

# **30 — Same-Day Design Priorities**

Today's deadline demands sequencing by practical value.

## **P0 — Mandatory visual foundation**

1. Global colors and typography  
2. Responsive container and grid  
3. Functional, polished navigation  
4. Strong typographic hero  
5. Convincing image-led project gallery  
6. Real screenshots for all three projects  
7. Readable project information  
8. Elegant services section  
9. Concise about section  
10. Prominent contact conclusion  
11. Consistent interaction styling  
12. Mobile-responsive layouts

**The P0 design must look complete without advanced animation.**

## **P1 — Signature polish**

1. Sticky desktop Living Frame  
2. Project image transitions  
3. Gallery atmosphere changes  
4. Project index  
5. Subtle hero entrance  
6. Restrained section reveals  
7. Refined arrow and link motion

## **P2 — Post-launch enhancements if necessary**

1. Elaborate masking  
2. Advanced image depth  
3. Shared-element route transitions  
4. Expanded case-study galleries  
5. Complex section-to-section choreography  
6. Decorative art-direction experiments

## **Time-saving rule**

Do not build a full polished Figma prototype if the development implementation will take longer than the remaining launch window.

Use this specification as the source of truth.

Create any necessary quick compositions in Figma, then implement and refine against real content in the browser.

Today's objective is a finished production website, not a perfect design file.

---

# **31 — Visual Acceptance Criteria**

Phase 2 is considered successful when:

### **Identity**

The site looks like a coherent independent creative practice, not a generic developer template.

### **Typography**

The hierarchy is strong enough to support the entire website without decorative imagery in every section.

### **Palette**

The neutral global frame consistently supports three visually distinct projects.

### **Composition**

The sticky desktop gallery gives imagery clear visual priority without making descriptions or links difficult to use.

### **Responsiveness**

The mobile gallery feels independently designed and does not attempt to imitate desktop sticky choreography.

### **Motion**

The Living Frame can provide a distinctive signature while all content remains functional without it.

### **Commercial clarity**

The hero and services communicate the actual offering, and contact is easy to find.

### **Implementation readiness**

All fundamental visual choices have an initial token, measurement, rule, or explicit implementation direction.

---

# **32 — Locked Visual Decisions**

1. The visual identity is architectural-editorial with restrained cinematic qualities.  
2. The portfolio maintains a 70% editorial / 30% cinematic balance.  
3. DM Sans is the primary typeface.  
4. Instrument Serif is the secondary expressive typeface.  
5. The hero combines large sans-serif typography with one serif-accent line.  
6. The main background is warm Paper.  
7. The primary text is dark Ink.  
8. Accent colors are restrained.  
9. Project imagery provides most of the visual variety.  
10. The global layout uses a consistent editorial grid.  
11. The desktop Living Frame uses an approximately 67/33 visual-to-information composition, accounting for its gap.  
12. The frame's target aspect ratio is 16:10.  
13. The outer frame geometry remains stable across projects.  
14. Café Bliss uses a warm atmosphere.  
15. IMIZI uses a dark, grounded atmosphere.  
16. Quad uses a cooler, structured atmosphere.  
17. Project information uses a clear numerical and typographic hierarchy.  
18. Project imagery must faithfully represent real implementations.  
19. Services are presented as an editorial list, not oversized cards.  
20. About remains concise and typography-led.  
21. Contact closes the page through a strong typographic statement.  
22. No unnecessary decorative 3D, grain, gradients, or large shadows.  
23. The Living Frame is the most expressive animation.  
24. Other motion remains intentionally quieter.  
25. Motion respects reduced-motion preferences.  
26. Tablet and mobile use stacked project presentations.  
27. The static experience must look professionally finished.  
28. Advanced route transitions are not required for launch.  
29. All visual decisions must support today's deployment.  
30. Responsive quality, content clarity, and functional contact remain more important than decorative polish.

---

# **33 — Remaining Production Inputs**

The creative system is defined.

The following are implementation inputs rather than unresolved creative strategy:

### **Identity**

Confirm the preferred public display name and spelling.

### **Contact**

Provide the actual WhatsApp and email destinations.

### **Project assets**

Select or capture the final genuine project screenshots.

### **Deployment**

Choose the final domain or use a reliable public Vercel URL for the initial launch.

### **Final visual tuning**

Adjust headline wrapping, screenshot crops, section spacing, and gallery geometry in the actual browser.

These refinements should not reopen our fundamental art direction.

---

# **34 — Final Art Direction Statement**

**The Living Frame is an editorial exhibition of digital work.**

The typography establishes the identity.

The grid establishes discipline.

The images establish the projects.

The transitions establish continuity.

The restrained visual language gives each project room to speak.

A visitor should experience the portfolio as a carefully composed whole: confident at first glance, interesting in motion, clear in communication, and effortless to navigate.

Above all, it should demonstrate the kind of taste, attention, and execution quality a client would want brought to their own website.

---

## **Phase 2 Final Principle**

**Design creates the impression. Work provides the evidence. Motion makes the experience memorable.**

The portfolio succeeds only when all three support one another.

**Next: Phase 3 — Production Implementation.**