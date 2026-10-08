# Implementation status

| Feature                                                                              | Status                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| Homepage: header, editorial hero, work, services, about, contact, footer             | Complete                                                      |
| Three substantial case studies with distinct evidence layouts                        | Complete                                                      |
| Desktop CSS sticky stage, discrete active chapters, index, native scroll             | Complete                                                      |
| Image readiness, interruptible masked reveals, scale settlement, atmosphere          | Complete                                                      |
| Mobile, tablet, short-height desktop stacked presentation                            | Complete                                                      |
| React Router project-specific shared-element transitions and normal-routing fallback | Complete                                                      |
| Reduced motion, image failure fallback, semantic content and focus treatment         | Complete                                                      |
| Fresh truthful images, intrinsic dimensions, four social previews                    | Complete                                                      |
| Framework prerender configuration, route metadata, designed 404                      | Complete                                                      |
| Owner-confirmed public name, email and WhatsApp                                      | Complete                                                      |
| Vercel static hosting configuration                                                  | Complete                                                      |
| Absolute canonical/social URLs and sitemap on configured build                       | Requires real public origin                                   |
| Public deployment and outreach verification                                          | Not performed: no portfolio domain or Vercel project supplied |

Verification outcomes are recorded separately in QA_REPORT.md.

## Decisions

The finalized v1.1 files govern the implementation: plain Phase 0 and the `(1)` copies of Phases 1, 2 and 3. Earlier draft copies remain in `docs/` for context. The owner’s direct instruction supersedes the suggested asset directory: final images are directly under `public/`, and `/images/` is ignored.

The gallery uses one ScrollTrigger controller and one requestAnimationFrame reading-region update. CSS owns sticky positioning, GSAP owns the incoming mask/scale, and React Router owns route-transition geometry. This keeps native scroll and avoids competing controllers. Pending image decodes use a generation token so the latest requested project wins.

Quad’s authenticated live session was unavailable. Its actual source components were captured with safe synthetic props, explicitly disclosed in public copy and provenance; no features or real users were invented. No source project was modified.

No production origin was invented. Canonical and social URL generation is centrally configured and must be set for launch. Public readiness is not claimed before deployment verification.
