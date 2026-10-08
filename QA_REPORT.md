# Architecture migration QA report

Verified locally on Windows on 8 October 2026. The application now uses Vite development and production-preview servers and builds to **dist/**.

## Checks

| Check                                      | Result               |
| ------------------------------------------ | -------------------- |
| Dependency installation                    | Passed               |
| TypeScript                                 | Passed               |
| ESLint                                     | Passed               |
| Vitest                                     | Five tests passed    |
| Production build                           | Passed               |
| Playwright with installed Chrome           | Seven tests passed   |
| Vite development server and rendered pages | Passed               |
| Vite production preview and direct routes  | Passed               |
| Production dependency audit                | Zero vulnerabilities |
| Root images library ignore rule            | Preserved            |

Reproduce with `npm ci`, `npm run check`, and `$env:PLAYWRIGHT_CHANNEL='chrome'; npm run test:e2e`. Build before E2E tests. The suite starts a fresh `vite preview` server. A bundled browser can instead be installed with `npx playwright install chromium`.

## Behavior and preservation

- Homepage, all three case studies, direct refresh, next-project navigation, unknown routes, header anchors, project anchors, route heading focus, Back navigation, and scroll restoration are covered.
- The native View Transition test checks that each project has exactly one shared-element name in both old and new snapshots. Normal navigation without that browser API, modifier clicks, reduced motion, and failed-image fallback are covered.
- Gallery tests exercise forward, reverse, and rapid chapter changes and its release before Services. Mobile menus, Escape handling, focus return, and owner-confirmed contact destinations are covered.
- All referenced images return successfully; visible lazy media decode. No existing public asset or project content was changed. The generated stylesheet retains the original production CSS hash.
- Axe checks on all four content pages report zero WCAG 2 A/AA and WCAG 2.1 AA violations. This is an automated result, not accessibility certification.
- Initial HTML is correctly a SPA shell with homepage metadata; client navigation installs unique page metadata. JavaScript-disabled verification covers the honest email fallback. Unknown URLs return the shell and display the designed error page with client noindex metadata.

Responsive overflow checks cover 1920×1080, 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 375×812, 320×700, and short-height desktop 1440×650. Stacked media remain visible at the appropriate breakpoints.

All eleven before/after screenshots are pixel-identical against the final production preview. They cover the homepage and three case-study openings at desktop and mobile sizes, plus all three desktop gallery frames. Temporary screenshots and comparison measurements are ignored under `tmp/`; Playwright artifacts remain ignored.

The configured-origin build was separately checked for absolute homepage metadata, all four sitemap URLs, and the robots sitemap reference. The final local build has no invented public origin. Only the public `VITE_SITE_URL` variable exists; no server credentials were migrated into client variables.

## Limits

Framework prerendered content and initial case-study SEO, server-level HTTP 404, and full no-JavaScript navigation are no longer supplied. See [DEPLOYMENT.md](DEPLOYMENT.md) for consequences and alternative approaches. No public deployment, social preview-cache test, Firefox/WebKit, physical-device, screen-reader, or Lighthouse run was performed. Unsupported View Transitions are tested by removing the API in Chrome. Quad's synthetic-prop media disclosure is preserved.

The dependency tree retains one inherited low-severity development-only esbuild advisory; the production audit is clear.
