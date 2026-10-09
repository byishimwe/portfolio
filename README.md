# Prince Arnaud Ishimwe — Portfolio

A minimal portfolio for a Designer & Frontend Developer based in Rwanda. The current redesign brief replaces the historical Living Frame specifications in `docs/`.

## Development

Node.js 22.12+ or 24 and npm:

```sh
npm ci
npm run dev         # Vite, port 5173
npm run check       # TypeScript, ESLint, Vitest, production build
npm run preview     # dist/, port 4173
npm run test:e2e    # build first; fresh production preview
```

Install Chromium with `npx playwright install chromium`, or on Windows use `$env:PLAYWRIGHT_CHANNEL='chrome'` for installed Chrome. `PLAYWRIGHT_REUSE_SERVER=1` explicitly allows test-server reuse. `npm run typecheck`, `npm run lint`, and `npm test` also work independently. Format with Prettier.

## Architecture

React 19, TypeScript, Vite, Tailwind CSS 4, DM Sans, Instrument Serif, GSAP and @gsap/react. Simple declarative React Router routes: `/`, `/work/cafe-bliss`, `/work/imizi`, `/work/quad`, and a catch-all not-found screen. No backend, framework mode, service routes, or separate About page.

- `src/components`: shared navigation, footer, metadata, and image slots.
- `src/features/theme`: system-aware light/dark theme with persistent explicit choice; `index.html` chooses the theme before painting.
- `src/features/navigation`: hash offsets, history scroll restoration, and route-heading focus.
- `src/hooks/useQuietMotion.ts`: scoped GSAP entrances and one-time IntersectionObserver reveals; reduced motion renders content immediately. CSS owns hover/focus/theme transitions.
- `src/config/assets.ts`: the five image slots and optional sharing image.
- `src/content/projects.ts`: source-checked concise copy, real destinations, and non-circular previous/next navigation.
- `src/styles/global.css`: monochrome design tokens and responsive composition.

No pinned gallery, ScrollTrigger controller, shared-image route controller, supporting image collections, or generated imagery remains. The project uses ordinary route changes with quiet heading/image entrances.

## Imagery

The three owner-supplied project images are active as optimized WebP files. The hero visual and authentic portrait remain pending; their neutral slots reserve the composition without broken requests. Supply files directly in `public/` and activate their entries in the asset map. Each project uses the same source for its cropped work preview and complete case-study image. `/images/` stays ignored and untouched. No reference mockup is displayed as a production asset.

Follow [ASSET_REPLACEMENT.md](ASSET_REPLACEMENT.md). Approved sharing artwork is also pending; outdated social screenshots are removed and no image metadata is fabricated.

## References, content and launch

The attached approved Café Bliss theme mockup is saved in `design-reference/`. Its generated technology labels and fictional navigation names are corrected by the owner's brief. The homepage implementation follows the exact written structure; the missing approved homepage reference is tracked in `design-reference/README.md`.

Project facts are recorded in [CONTENT_SOURCES.md](CONTENT_SOURCES.md). Email and WhatsApp retain the owner's confirmed destinations; LinkedIn is omitted because no verified URL is configured.

`VITE_SITE_URL` is optional public-origin configuration; VITE-prefixed variables must never hold secrets. The configured build supplies canonical URLs, sitemap and robots output. This client-rendered SPA has initial homepage metadata; project metadata requires JavaScript. See [DEPLOYMENT.md](DEPLOYMENT.md), [QA_REPORT.md](QA_REPORT.md), and [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md). No production domain is invented and no public deployment is claimed.
