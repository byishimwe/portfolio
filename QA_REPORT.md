# Redesign QA report

Local verification on Windows, 9 October 2026. This report replaces the historical Living Frame migration results; those tests and screenshots do not establish acceptance of the new design.

## Commands and results

| Check                                        | Result                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| `npm run check`                              | Passed: TypeScript, ESLint, six Vitest tests, production build            |
| `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` | Eight tests passed in installed Chrome                                    |
| Prettier                                     | Passed                                                                    |
| `npm run dev`                                | Vite starts and redesigned pages render on port 5173                      |
| `npm run preview`                            | Vite production preview serves all direct routes on port 4173             |
| `npm audit --omit=dev`                       | Zero production vulnerabilities                                           |
| Configured-origin build                      | Canonical, sitemap and robots output verified with a reserved test origin |
| `/images/` ignore rule                       | Preserved; library untouched                                              |

Browser tests cover the exact homepage section count, three projects in order, three services, About portrait slot, simple contact, absence of old galleries, one asset slot per case study, five source-correct rows, only Role/Year/Type metadata, external links after the image, direct refresh, unknown routes and metadata.

## Interaction, theme and motion

- Real non-circular project sequence, Back to Work, header anchors, route-heading focus, browser Back, and saved scroll positions pass.
- Mobile menu supports keyboard opening, Tab into links, Escape dismissal and focus return; modified clicks retain native behavior. Contact hrefs retain owner-confirmed values. No contact message was sent.
- System theme, saved explicit preference before DOMContentLoaded, route/refresh persistence, system changes, and blocked localStorage pass. Both themes are monochrome; all hero lines, including remembered., have identical computed foreground colors.
- Frame sampling confirms hero, service and case-heading animation actually changes opacity and settles. Reduced motion removes translation, and image masks settle to the normal state. GSAP contexts and observers clean up on route changes.
- A separate live-dev test with a temporary in-memory geometric fixture confirms missing-image fallback, a shared preview/case source, CSS cover cropping with focal position, full-image contain fit, and successful decoding. No fixture was written to public or used as production imagery.

## Responsive and visual review

All four content routes were checked in both themes at 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 375×812 and 320×700. No horizontal overflow or unintended hero-line wrapping was found.

Sixteen full-page screenshots were generated at desktop 1440px and mobile 390px in light and dark themes, under ignored `tmp/redesign-qa/`. Representative homepage, Café Bliss, IMIZI and Quad images were opened and inspected. Review covered type hierarchy, foreground consistency, preview dimensions, service alignment, About text/portrait composition, contact simplicity, case-row legibility and real pagination. The supplied Café Bliss light/dark desktop/mobile reference was compared structurally; intentional differences correct inaccurate stack labels, extra metadata and fictional navigation, and reserve neutral owner-image slots.

No approved homepage image was included in the supplied set or existing repository. A matching Downloads candidate was inspected and owner confirmation requested; homepage acceptance currently rests on the exact written brief. Final visual review with the approved homepage mockup remains outstanding; the supplied imagery was subsequently installed and checked as recorded below.

Eight Axe scans—four routes in both themes—report zero WCAG 2 A/AA and WCAG 2.1 AA violations. This is an automated result, not accessibility certification. The subsequent asset activation pass is recorded below.

## Remaining input and limits

All five image slots and the sharing artwork are supplied and active as WebP. Tests automatically follow the asset map when files are activated. The supplied assets are installed; final owner acceptance remains pending. Personal Lesson Learned copy comes from the supplied brief and remains subject to final owner editorial review.

The Vite SPA retains the documented initial-HTML and social-sharing limits: project content/metadata require JavaScript, unknown-route fallback has HTTP 200, and full no-JavaScript navigation is unavailable. The honest no-JavaScript email fallback passes. No production origin, public deployment, social-preview cache verification, Firefox/WebKit, physical-device or screen-reader verification is claimed.

Local implementation and technical checks are complete; final mockup/asset acceptance and public launch are pending. See ASSET_REPLACEMENT.md, CONTENT_SOURCES.md and DEPLOYMENT.md.

## Project image activation

The owner-supplied PNGs were converted at WebP quality 92/method 6, without resizing. Each output decodes at 1672×941, matching the updated asset map. Combined size falls from 5,695,501 to 650,456 bytes (88.6% smaller). The original PNGs are preserved in ignored `tmp/project-image-originals/`; only the WebP files ship in public output. The same file is used for each cropped preview and complete case-study image. The existing asset-aware browser suite checks decoding and missing requests in both themes, across the responsive viewport matrix.

## Remaining image activation — 10 October 2026

Hero and sharing PNGs were converted at WebP quality 92/method 6, retaining 1122×1402 and 1734×907 dimensions respectively. Combined size is 665,624 bytes, 86.3% smaller than the PNGs. Originals remain in ignored `tmp/remaining-image-originals/`. The 113,468-byte portrait WebP is used unchanged. The hero, About portrait, and shared social metadata now use the supplied files.

`npm run check` passed TypeScript, ESLint, six unit tests, and the production build. All eight Chrome Playwright tests passed, including image decoding, eight Axe scans, interactions, animations, and the 72-page responsive matrix. The first matrix run exceeded its default 30-second total test limit; its explicit budget is now 90 seconds, and the complete matrix passed in 37.6 seconds. Assertions and viewport coverage are unchanged. Prettier, ESLint for the updated test, and Git whitespace checks passed.

Fresh desktop and mobile homepage screenshots in both themes were inspected for hero composition, portrait framing, and preserved layout. Initial HTML sharing-image URL, actual dimensions, and large-image Twitter card were verified in both unconfigured and reserved-origin builds. The configured build also retains canonical, sitemap, and robots output. PNG sources are excluded from production output, and `/images/` remains ignored.

## Final refinement — 10 October 2026

`npm ci` succeeded after stopping local Vite processes that held a Windows native-module file lock. `npm run check` passed TypeScript, ESLint, six unit tests, and the production build. `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` passed all nine tests in the production preview. Prettier and Git whitespace checks passed; the final test-only edit also passed ESLint. The install audit reported one low-severity dependency finding; `npm audit --omit=dev` found zero production vulnerabilities. No dependency versions were changed.

The new menu test covers all four anchors from all four content routes at desktop and mobile widths, keyboard opening, Tab into links, Escape/focus return, outside-click dismissal, hidden closed navigation and direct desktop Contact. Its first run attempted an outside click on a headline obscured by the mobile popover; the test now clicks the unobstructed page gutter and passes. Existing Back/scroll restoration, sticky offsets, theme persistence, motion/reduced motion, contact URLs, metadata, direct loads, refresh and unknown-route checks pass.

The 72-page responsive matrix passes all nine specified sizes in both themes. Additional homepage screenshots and measured frames cover all nine sizes in both themes under ignored `tmp/refinement-*.png`. Representative laptop/mobile homepage, menu, and all three case-study screenshots were opened and inspected. The hero bottom is 617px at 1440×900 and 1366×768, and 605px at 1280×720. Portrait height never exceeds 360px. No horizontal overflow or unintended hero-line wrapping was detected. The shorter hero cover frame deliberately crops the photograph's outer top/bottom details; wireframes and workspace remain visible. The portrait retains its complete source composition. Mobile hero scrolling remains natural.

Eight Axe scans across four routes and two themes report no WCAG 2 A/AA or WCAG 2.1 AA violations. No missing media responses or browser page errors were found by the suite. Chrome coverage does not establish physical-device, screen-reader, Firefox or WebKit acceptance. External project actions retain verified destination URLs; this task does not verify protected Quad workflows. SPA SEO/HTTP status limitations remain as documented in DEPLOYMENT.

Approved assets (including sharing, Quad and favicon), deployment configuration and production-origin settings are unchanged. Pre-existing design-reference deletions were not included. No publication, deployment or contact message occurred. See FINAL_REFINEMENT_REVIEW.md for implementation and copy comparison. Ready for owner review — not deployed.
