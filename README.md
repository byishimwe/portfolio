# Prince Arnaud Ishimwe — Portfolio

Personal portfolio of an independent designer and frontend developer based in Rwanda. The website showcases selected projects, services, background, and ways to get in touch.

## Live website

**[princeishimwe.vercel.app](https://princeishimwe.vercel.app)** — currently hosted on Vercel.

## Featured projects

1. **Café Bliss** — a fictional hospitality website concept.
2. **IMIZI Training Club** — a fictional fitness website concept.
3. **Quad** — a full-stack student community application.

Each project has a dedicated case study with its approach, constraints, technical stack, and links to the live project and repository. Concept reservation and inquiry flows are demonstrations.

## Tech stack

- React 19 and TypeScript 5
- Vite 7 and React Router 7 in declarative SPA mode
- Tailwind CSS 4
- GSAP 3 with `@gsap/react` 2
- DM Sans and Instrument Serif, served locally through Fontsource
- Vitest, Playwright with Axe, ESLint, and Prettier

## Features

- Responsive layouts and three compact project previews
- System-aware light/dark themes with saved user preference
- Compact keyboard-accessible navigation with Escape and outside-click dismissal
- Three dedicated case studies with previous/next navigation
- Subtle entrances and hover transitions, with reduced-motion support
- Explicit WhatsApp and Gmail contact actions, with a selectable email address, clipboard feedback, and an email-app alternative
- Route-specific titles, descriptions, and social-sharing metadata
- Optimized WebP imagery and a transparent, theme-aware SVG favicon

## Getting started

Use Node.js 22.12+ or 24 and npm.

```sh
git clone https://github.com/byishimwe/portfolio.git
cd portfolio
npm ci
npm run dev
```

Vite serves the development site at `http://localhost:5173` by default.

```sh
npm run build       # TypeScript checks and production output in dist/
npm run preview     # Local production preview, port 4173 by default
```

### Checks

```sh
npm run check       # TypeScript, ESLint, unit tests, production build
npx playwright install chromium
npm run test:e2e    # Run after building; starts a production preview
npx prettier --check README.md src tests *.ts *.js *.json index.html
```

On Windows, installed Chrome can be used with `$env:PLAYWRIGHT_CHANNEL='chrome'` before running E2E tests. Stop an existing preview first, or explicitly opt into reuse with `$env:PLAYWRIGHT_REUSE_SERVER='1'`. Individual checks are available through `npm run typecheck`, `npm run lint`, and `npm test`.

## Configuration

Copy `.env.example` to `.env` for local configuration. `VITE_SITE_URL` is the public website origin, without a path or trailing slash:

```dotenv
VITE_SITE_URL=https://princeishimwe.vercel.app
```

It generates canonical URLs, sitemap URLs, the robots sitemap reference, and absolute social-sharing image URLs. Set it in the hosting environment before building. When moving to a custom domain, update this variable and rebuild. Never put secrets in `VITE_` variables: they are exposed to the browser.

The portfolio is client-rendered. Initial HTML contains homepage metadata; case-specific metadata requires JavaScript. Unknown routes display a recovery page and client-side `noindex`, while the SPA fallback returns HTTP 200. Route-specific sharing for crawlers that do not execute JavaScript would require prerendering or route-aware hosting responses.

Project copy and destinations live in `src/content/projects.ts`; identity and contact settings are in `src/config/site.ts`. Images live directly in `public/`, with paths, alternative text, intrinsic dimensions, and sharing-image dimensions maintained in `src/config/assets.ts`. Project previews and case studies share their source images. The local `/images/` library is Git-ignored.

The primary email action opens Gmail in a new tab with the recipient and subject filled in; visitors may need to sign into Gmail. Visitors using other services can copy the visible address or choose **Use email app**, which relies on their configured `mailto:` handler. Copy failures leave the address selectable and announce manual-copy instructions. No email is sent by the portfolio. The no-JavaScript contact links in `index.html` must also be kept aligned when changing the contact address.

## Deployment

The portfolio is deployed on Vercel with deployments linked to GitHub. The repository's `vercel.json` specifies:

| Setting              | Value                                       |
| -------------------- | ------------------------------------------- |
| Framework            | Vite                                        |
| Build command        | `npm run build`                             |
| Output directory     | `dist`                                      |
| SPA routing fallback | Rewrite application routes to `/index.html` |

Keep `VITE_SITE_URL` aligned with the public origin. Pushing or merging to the connected production branch may trigger a deployment.

## License and assets

No license is specified for this repository. Supplied photography and portfolio presentation assets are not automatically licensed for reuse.
