# Final image replacement

The three owner-supplied project images are active as WebP files. The hero and portrait slots still show neutral placeholders. Do not substitute a generated portrait, fake interface, or old supporting screenshot.

| Asset                  | Path under public/ | Ratio / recommended dimensions        | Placement                                    | Fit and focal position                 | Mobile variant                                                  |
| ---------------------- | ------------------ | ------------------------------------- | -------------------------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| Hero                   | `hero.webp`        | 4:5, 1200×1500                        | Hero right; below text on mobile             | cover; 50% 50%; mobile frame 6:5       | Only if the intended composition cannot survive the mobile crop |
| Café Bliss             | `cafe-bliss.webp`  | 1672×941 supplied; approximately 16:9 | Homepage preview and one complete case image | preview cover at 50% 45%; case contain | Not needed by default                                           |
| IMIZI                  | `imizi.webp`       | 1672×941 supplied; approximately 16:9 | Homepage preview and one complete case image | preview cover at 50% 40%; case contain | Not needed by default                                           |
| Quad                   | `quad.webp`        | 1672×941 supplied; approximately 16:9 | Homepage preview and one complete case image | preview cover at 50% 40%; case contain | Not needed by default                                           |
| Authentic portrait     | `portrait.webp`    | 5:6, 1000×1200                        | About right; after copy on mobile            | cover at 50% 35%                       | Not needed by default                                           |
| Approved sharing image | `sharing.webp`     | 1200×630                              | Open Graph metadata                          | Complete raster composition            | Not applicable                                                  |

1. Place the five owner-supplied files directly in `public/`, not `public/assets/`. `/images/` remains ignored and untouched.
2. In `src/config/assets.ts`, change each slot's `src: null` to its `expectedPath`. Update alt text, actual intrinsic dimensions, and focal position if necessary. The preview and case study share one entry.
3. If a responsive variant is necessary, provide it as part of the final asset review; do not replace the shared project composition with unrelated content. The current layout needs no mobile variants for the recommended ratios.
4. Set `socialImage` to `/sharing.webp` after approved sharing artwork exists; this enables its metadata. Additional project-specific social artwork can be wired during the final asset review.
5. Run the checks and visually review every crop in both themes at desktop and mobile widths. Full case-study images use contain, never crop; preserve sufficient contrast and neutral frame edges.
6. Tests automatically follow the asset map: missing slots must remain honest placeholders, and configured files must exist and decode. Verify image fidelity and crops after activating each file.

The layout is complete but asset completion and public launch readiness remain pending. The portrait must be an authentic owner-supplied photograph.

## Installed project images

All three were converted with Pillow WebP quality 92 and method 6, preserving the complete 1672×941 source resolution. No resizing or baked-in cropping was applied. Originals are preserved in ignored `tmp/project-image-originals/` and are excluded from the production build.

| Project    | PNG bytes | WebP bytes | Reduction |
| ---------- | --------: | ---------: | --------: |
| Café Bliss | 2,129,531 |    280,568 |     86.8% |
| IMIZI      | 1,804,563 |    170,112 |     90.6% |
| Quad       | 1,761,407 |    199,776 |     88.7% |

Combined: 5,695,501 → 650,456 bytes (88.6% reduction). Hero, authentic portrait, and approved sharing artwork remain pending.
