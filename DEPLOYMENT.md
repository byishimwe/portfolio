# Deployment

Target: Vercel static hosting. No public deployment has been made from this workspace, and there is no verified portfolio URL yet.

1. Import this repository into Vercel using the **Other** framework preset.
2. Set the production environment variable `VITE_SITE_URL` to the actual HTTPS origin, with no path or trailing slash.
3. Install with `npm ci`, build with `npm run build`, and publish **build/client**. The checked-in `vercel.json` supplies the build command, output directory, clean URLs, and basic response headers.
4. Do not add a blanket rewrite to the homepage: each case study has its own prerendered HTML and metadata.
5. Verify all four content routes by direct URL and refresh, the designed unknown-page response, hash returns, contact links, project links, and mobile layout.
6. Inspect the served HTML for each page’s unique title, description, absolute canonical, and absolute Open Graph image. Request the social images directly. Test a real shared link in WhatsApp after deployment; preview caches may take time to update.

The build prerenders the four content routes plus `/404`. `scripts/postbuild.mjs` prepares Vercel’s static `404.html` and generates a sitemap when the real origin is configured. No application server is required.

For a local configured build, copy `.env.example` to `.env`, set `VITE_SITE_URL`, and build. Environment files remain ignored. Without an origin, the build intentionally avoids fabricated canonical URLs and serves relative social image paths; this is suitable for local review, not the final outreach release.

Outstanding launch steps: establish the real public origin, deploy through the owner’s Vercel account, and verify the actual public routes and social previews. Email and WhatsApp values are owner-confirmed; no message was sent as part of verification.
