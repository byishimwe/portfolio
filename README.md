# The Living Frame

An editorial portfolio for Prince Arnaud Ishimwe: a complete homepage and three project case studies, with a native-scroll sticky exhibition on desktop and an intentional stacked layout on smaller screens.

## Develop

Use Node.js 22.12+ or 24 and npm.

```sh
npm ci
npm run dev
```

```sh
npm run check       # TypeScript, ESLint, Vitest, production build
npm run preview     # Serve build/client on port 4173
npm run test:e2e    # Playwright against the production preview
```

Install the test browser once with `npx playwright install chromium`.

## Architecture

React, strict TypeScript, Vite, React Router Framework Mode, Tailwind CSS 4, custom CSS, GSAP, and browser View Transitions. `react-router.config.ts` sets `ssr: false` and prerenders `/`, `/work/cafe-bliss`, `/work/imizi`, `/work/quad`, and the designed `/404` document. The deployable output is **build/client**. No portfolio runtime backend is needed.

`app/content/projects.ts` owns project copy, links, atmosphere, and media. `app/config/site.ts` owns identity and contact destinations. `LivingFrame.tsx` owns the discrete scroll state, image readiness, and GSAP choreography. React Router owns route transitions. Content is visible in the initial HTML; animation enhances it after hydration.

## Media

New optimized images live directly in **public/**. The original **images/** library is untouched and ignored by Git. See [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md) for capture sources and the Quad demo disclosure. No supplied reference screenshot is a production asset.

Optional media preparation: install Python and Pillow, capture PNGs into `tmp/captures`, then run `python scripts/prepare-assets.py`. The checked-in WebP assets are already prepared; Python is not required to build the site. The Quad capture harness takes a source checkout path: `node scripts/quad-preview.mjs ../quad/frontend`. It needs that checkout’s installed dependencies and built CSS; it never mounts protected routes or contacts the production backend.

## Launch

Set `VITE_SITE_URL` to the real HTTPS public origin before building. See [DEPLOYMENT.md](DEPLOYMENT.md). This supplies absolute canonical/social URLs and the sitemap. Contact details are already configured from the owner’s explicit confirmation.

See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) and [QA_REPORT.md](QA_REPORT.md) for scope and verification.
