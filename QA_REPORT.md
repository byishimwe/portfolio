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

No approved homepage image was included in the supplied set or existing repository. A matching Downloads candidate was inspected and owner confirmation requested; homepage acceptance currently rests on the exact written brief. Final visual review with the approved homepage mockup and actual imagery remains outstanding.

Eight Axe scans—four routes in both themes—report zero WCAG 2 A/AA and WCAG 2.1 AA violations. This is an automated result, not accessibility certification. Final imagery will need another visual/accessibility pass.

## Remaining input and limits

The hero visual, three project images, authentic portrait and sharing artwork are pending. Tests automatically follow the asset map when files are activated. No final-asset completion is claimed. Personal Lesson Learned copy comes from the supplied brief and remains subject to final owner editorial review.

The Vite SPA retains the documented initial-HTML and social-sharing limits: project content/metadata require JavaScript, unknown-route fallback has HTTP 200, and full no-JavaScript navigation is unavailable. The honest no-JavaScript email fallback passes. No production origin, public deployment, social-preview cache verification, Firefox/WebKit, physical-device or screen-reader verification is claimed.

Local implementation and technical checks are complete; final mockup/asset acceptance and public launch are pending. See ASSET_REPLACEMENT.md, CONTENT_SOURCES.md and DEPLOYMENT.md.
