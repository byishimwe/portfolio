# Deployment

Target: Vercel static hosting with the **Vite** preset. No public deployment has been made from this workspace; no real portfolio origin is configured.

1. Import the repository into Vercel and select Vite.
2. Set `VITE_SITE_URL` to the actual public HTTPS origin, without a path or trailing slash.
3. Install with `npm ci`, build with `npm run build`, and publish **dist/**. The checked-in `vercel.json` specifies these settings and preserves the existing response headers.
4. The SPA fallback rewrites application routes to `/index.html`; Vercel serves existing static assets from the filesystem. Verify direct URLs and refresh for all three case studies.
5. Check all four content routes, unknown routes, project anchors, browser Back, menus, contact links, media, responsive layouts, sitemap, and robots.txt after deployment.

For a configured local build, copy `.env.example` to `.env`, set the public origin, and build. Environment files remain ignored. `VITE_SITE_URL` is public client configuration, not a secret. Do not create VITE-prefixed credentials or tokens. The Vite SEO plugin reads only the public origin and emits sitemap/robots output and absolute homepage canonical/social metadata. Without an origin it omits canonical URLs and uses relative social image paths.

## SPA SEO limitations

Every application URL receives the same HTML shell. Case-study content and unique metadata are applied by React after JavaScript executes. Unknown routes display the designed error page and receive client noindex metadata, but the SPA fallback returns HTTP 200 rather than a server HTTP 404. Without JavaScript, the shell provides homepage metadata and an email contact fallback.

Non-JavaScript social preview services may show the homepage preview for case-study links. Page-specific initial HTML, full no-JavaScript navigation, and accurate server status codes require an additional prerendering, SSR, or route-aware hosting response approach. These former framework prerendering capabilities are not preserved by the requested standard SPA. Test actual shared links after deployment before relying on case-specific previews.

Outstanding launch work: establish the real public origin, deploy through the owner's Vercel account, and verify public responses and preview behavior. Contact destinations are owner-confirmed; no email or WhatsApp message was sent during testing.
