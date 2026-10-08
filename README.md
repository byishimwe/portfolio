# The Living Frame

An editorial portfolio for Prince Arnaud Ishimwe: a homepage and three case studies, with a native-scroll sticky exhibition on desktop and a stacked layout on smaller screens.

## Develop

Use Node.js 22.12+ or 24 and npm.

```sh
npm ci
npm run dev         # Vite development server, default port 5173
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm test            # Vitest
npm run build       # tsc --noEmit && vite build; output dist/
npm run preview     # Vite production preview, default port 4173
npm run check       # TypeScript, ESLint, Vitest, production build
npm run test:e2e    # Playwright against a fresh production preview
```

Install the test browser with `npx playwright install chromium`. On Windows, an installed Chrome can be used with `$env:PLAYWRIGHT_CHANNEL='chrome'`. Build before running E2E tests. Tests start their own preview server; `PLAYWRIGHT_REUSE_SERVER=1` explicitly opts into reusing a server.

## Architecture

Vite, React 19, strict TypeScript, Tailwind CSS 4, GSAP with @gsap/react, and browser View Transitions. Vite uses `@vitejs/plugin-react` and `@tailwindcss/vite` directly. `index.html` loads `src/main.tsx`, which mounts `src/App.tsx` with React createRoot. React Router remains only for declarative BrowserRouter/Routes navigation between the homepage, three case studies, and the designed unknown-page screen. There is no Framework Mode plugin, framework server, loader, type generation, hydration, or framework build process.

The feature architecture remains under `src/components`, `src/features`, `src/hooks`, `src/config`, `src/content`, and `src/styles`. `src/content/projects.ts` owns project copy and media; `src/config/site.ts` owns identity and contact destinations. LivingFrame retains its scroll state, image readiness, and GSAP choreography. The navigation feature implements native shared-element transitions, interruption handling, reduced-motion fallback, hash navigation, history scroll restoration, and route focus. RouteMetadata updates page-specific head tags after client navigation.

## SEO and rendering

The initial HTML contains homepage metadata and an empty React mount point. React renders content and updates route-specific title, description, social tags, canonical links, and unknown-page noindex metadata. With `VITE_SITE_URL` configured, the Vite build also supplies absolute homepage social/canonical URLs, a four-route sitemap, and its robots reference.

This SPA no longer supplies prerendered content or case-study metadata before JavaScript, a server-level HTTP 404 for unknown routes, or full navigation without JavaScript. The noscript fallback offers email contact. Crawlers and social preview services that do not execute JavaScript may see homepage metadata on case-study URLs. Restoring those capabilities requires an additional prerendering, SSR, or route-aware hosting response approach; the standard SPA does not provide them. See [DEPLOYMENT.md](DEPLOYMENT.md).

## Media and configuration

Optimized images live directly in **public/**. The original **images/** library is untouched and ignored by Git. Existing assets and design remain unchanged. See [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md) for sources and the Quad demo disclosure.

Optional media preparation: install Python and Pillow, capture PNGs into `tmp/captures`, then run `python scripts/prepare-assets.py`; its dimensions manifest is `src/content/image-dimensions.json`. Python is not required to build. The Quad capture harness accepts a source checkout: `node scripts/quad-preview.mjs ../quad/frontend`; it does not contact the production backend.

`VITE_SITE_URL` is the only application environment variable and is a public HTTPS origin. Every VITE-prefixed variable is public client configuration; never put secrets there. No server-only credentials were migrated.

See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) and [QA_REPORT.md](QA_REPORT.md). The supplied phase documents in `docs/` remain historical design references; the owner's architecture migration request supersedes their framework-specific instructions.
