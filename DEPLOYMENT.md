# Deployment preparation

The existing Vite SPA deployment configuration is retained: Vercel **Vite** preset, `npm ci`, `npm run build`, output `dist/`, and application fallback to `/index.html`. Existing files are served as static assets. Response headers remain configured in `vercel.json`.

Set `VITE_SITE_URL` to the real public HTTPS origin, without a path or trailing slash, before building. It is public browser configuration; never put secrets in VITE-prefixed variables. A configured build emits absolute canonicals, a sitemap for the four content routes, and a robots sitemap reference. No real origin has been supplied or invented.

## SEO decision

Retain the simple Vite/React Router architecture. Titles, descriptions, project categories, Open Graph text and canonical URLs update per route in React. The initial HTML contains homepage metadata. Unknown paths receive client noindex and the designed recovery page, but the SPA fallback returns HTTP 200.

A small optional build-time HTML snapshot using the existing Playwright tooling was considered as the least invasive prerendering route. It would require a browser in the deployment build and a regeneration step whenever content/assets change. It is not enabled in the standard build; no framework migration or unreliable implicit prerendering is introduced. If non-JavaScript case-specific sharing is required at launch, add that explicit snapshot step or route-aware hosting responses and test them separately.

Current limitations: initial case-specific content/metadata require JavaScript; non-JavaScript crawlers may see homepage text on deep links; complete no-JavaScript navigation and server HTTP 404 are not provided. The noscript fallback retains email contact. Approved raster sharing artwork is pending, so image tags are omitted instead of referencing obsolete screenshots or missing files.

## Launch checklist

- Supply the five final images and authentic portrait slot contents as described in ASSET_REPLACEMENT; supply approved sharing artwork.
- Confirm the homepage reference and the proposed personal-reflection copy.
- Set the real public origin and deploy only through authorized access.
- Verify all four routes on direct access/refresh, theme persistence, anchors, Back, mobile menu, reduced motion, asset requests, contact hrefs, sitemap and robots output.
- Check real social previews and any required prerendering response behavior on the public host.

No public deployment or contact message has been made by this task. Local technical completion does not mean final-image or public-launch completion.
