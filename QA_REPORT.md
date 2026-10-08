# QA report

Verified locally on Windows, 8 October 2026, against the statically built portfolio served from `build/client`.

## Commands and outcomes

| Command                                              | Result                                                                 |
| ---------------------------------------------------- | ---------------------------------------------------------------------- |
| `npm run check`                                      | Passed: strict TypeScript, ESLint, five Vitest tests, production build |
| `$env:PLAYWRIGHT_CHANNEL='chrome'; npm run test:e2e` | Passed: all five Playwright tests, 47.2 seconds, installed Chrome      |
| `npm audit --omit=dev`                               | Passed: zero production vulnerabilities                                |
| `git check-ignore images/test.png`                   | Passed: root reference library is ignored                              |

The Chromium download was slow and stopped after the suite successfully ran with installed Chrome. To use a bundled test browser elsewhere, run `npx playwright install chromium`; alternatively set `PLAYWRIGHT_CHANNEL` to an installed compatible browser.

## Verified behavior

- All four content routes return meaningful prerendered HTML with page-specific titles and social image paths before client JavaScript. Direct refresh works. Unknown paths and unknown project slugs display the designed 404 with HTTP 404 in the local static server.
- Every referenced project image returns HTTP 200. Visible lazy-loaded images decode successfully when brought into view. There are 12 fresh interface captures and four social previews, totaling **651,224 bytes** of WebP media.
- Desktop stage follows forward, reverse, and rapid chapter changes. Direct project hashes and returns from case studies synchronize the stage and active index. The stage remains scoped to the exhibition; it releases before Services.
- All three project links, next-project navigation, browser Back, route focus, and refresh work. No page errors or duplicate-transition/hydration warnings were found by the relevant browser tests. CUA console inspection also found no errors or warnings on the reviewed homepage and case-study navigation.
- Project-specific View Transitions navigate and settle correctly in Chrome. Unsetting the browser API preserves normal routing. Reduced-motion navigation works. An aborted hero-image request displays the truthful fallback in both the stage and case-study hero.
- Mobile menu opens, closes with Escape, and returns focus to its button. New case-study navigation focuses the page heading. Email and WhatsApp hrefs match the owner-confirmed destinations; no message was sent.
- Content and a homepage-to-case-study link work with JavaScript disabled. The initial HTML uses a stacked exhibition; sticky choreography is enabled after hydration.
- Axe scans of the homepage and three case studies found **zero WCAG 2 A/AA and WCAG 2.1 AA violations**. This is an automated scan result, not a claim of accessibility certification.

## Responsive and visual review

Automated horizontal-overflow checks covered the homepage and all case studies at:

1920 × 1080, 1440 × 900, 1366 × 768, 1280 × 720, 1024 × 768, 768 × 1024, 430 × 932, 390 × 844, 375 × 812, and 320 × 700, plus short-height desktop at 1440 × 650.

No horizontal overflow was found. Below the desktop width/height thresholds, stacked project media remains visible.

Actual screenshots were visually reviewed using CUA and saved review images: desktop hero, Café/IMIZI/Quad frames and case-study layouts, mobile homepage, and all three mobile case-study openings. Review covered typography, spacing, image framing, project atmosphere, narrative rhythm, case-study layout variation, and responsive hierarchy. Generated full-page QA screenshots after loading visible media confirmed the supporting image layouts. Temporary captures and test artifacts remain ignored under `tmp/` and `test-results/`.

## Issues found and resolved

1. A concurrent dependency installation left inconsistent build packages. A clean install and compatible locked tool versions restored the checks.
2. Native same-document project hashes could restore the previous Router history position. The gallery now reapplies the requested project anchor after Router scroll restoration and the enhanced layout commit.
3. An image failure occurring before hydration could miss React’s error listener. MediaFrame now detects an already-failed image on mount, with failure state scoped to the image source.
4. The initial media test incorrectly required hidden and offscreen lazy images to decode immediately. It now verifies every asset response and scrolls visible media into view before checking decoded dimensions.

## Remaining launch checks and limitations

- **Not deployed.** No public portfolio origin or Vercel project was supplied. Configure `VITE_SITE_URL`, deploy, and verify actual served canonical URLs, sitemap, route responses, and social previews before outreach.
- Absolute canonical/social generation is unit-tested with a reserved test origin. The local build intentionally omits fabricated canonical URLs and uses relative social image URLs until a real origin is configured.
- Quad media is genuine source-component rendering with disclosed synthetic props, not a production authenticated-session capture.
- No Firefox, Safari/WebKit, physical-device, screen-reader, Lighthouse, or real WhatsApp preview-cache checks were run. Unsupported View Transition behavior was tested by removing the API in Chrome.
- The full dependency audit leaves one low-severity **development-only esbuild** advisory concerning its development server on Windows. This application does not run esbuild’s server, and the static production audit is clear. React Router also prints non-failing notices about future v8 flags.

Readiness: **complete and locally verified; public outreach readiness requires deployment and the listed public URL checks.**
