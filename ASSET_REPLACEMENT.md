# Final image replacement

All five owner-supplied image slots and the sharing artwork are active as WebP files. Do not substitute a generated portrait, fake interface, or old supporting screenshot.

| Asset                  | Path under public/ | Ratio / recommended dimensions        | Placement                                    | Fit and focal position                 | Mobile variant                                                  |
| ---------------------- | ------------------ | ------------------------------------- | -------------------------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| Hero                   | `hero.webp`        | 1122×1402 supplied; approximately 4:5 | Hero right; below text on mobile             | cover; 50% 50%; mobile frame 6:5       | Only if the intended composition cannot survive the mobile crop |
| Café Bliss             | `cafe-bliss.webp`  | 1672×941 supplied; approximately 16:9 | Homepage preview and one complete case image | preview cover at 50% 45%; case contain | Not needed by default                                           |
| IMIZI                  | `imizi.webp`       | 1672×941 supplied; approximately 16:9 | Homepage preview and one complete case image | preview cover at 50% 40%; case contain | Not needed by default                                           |
| Quad                   | `quad.webp`        | 1672×941 supplied; approximately 16:9 | Homepage preview and one complete case image | preview cover at 50% 40%; case contain | Not needed by default                                           |
| Authentic portrait     | `portrait.webp`    | 5:6, 1000×1200                        | About right; after copy on mobile            | cover at 50% 35%                       | Not needed by default                                           |
| Approved sharing image | `sharing.webp`     | 1734×907 supplied                     | Open Graph metadata                          | Complete raster composition            | Not applicable                                                  |

1. Place the five owner-supplied files directly in `public/`, not `public/assets/`. `/images/` remains ignored and untouched.
2. In `src/config/assets.ts`, keep each slot's `src` aligned with its `expectedPath`. Update alt text, actual intrinsic dimensions, and focal position if necessary. The preview and case study share one entry.
3. If a responsive variant is necessary, provide it as part of the final asset review; do not replace the shared project composition with unrelated content. The current layout needs no mobile variants for the recommended ratios.
4. The sharing image is configured as `/sharing.webp`; keep `socialImageDimensions` aligned with the actual file when replacing it. Additional project-specific social artwork can be wired during the final asset review.
5. Run the checks and visually review every crop in both themes at desktop and mobile widths. Full case-study images use contain, never crop; preserve sufficient contrast and neutral frame edges.
6. Tests automatically follow the asset map: missing slots must remain honest placeholders, and configured files must exist and decode. Verify image fidelity and crops after activating each file.

The supplied images are installed. Public launch and final owner review remain pending.

## Installed project images

All three were converted with Pillow WebP quality 92 and method 6, preserving the complete 1672×941 source resolution. No resizing or baked-in cropping was applied. Originals are preserved in ignored `tmp/project-image-originals/` and are excluded from the production build.

| Project    | PNG bytes | WebP bytes | Reduction |
| ---------- | --------: | ---------: | --------: |
| Café Bliss | 2,129,531 |    280,568 |     86.8% |
| IMIZI      | 1,804,563 |    170,112 |     90.6% |
| Quad       | 1,761,407 |    199,776 |     88.7% |

Combined: 5,695,501 → 650,456 bytes (88.6% reduction). Hero, portrait, and sharing artwork are also installed; see below.

## Remaining image activation — 10 October 2026

Hero and sharing PNGs were converted to WebP at quality 92/method 6, retaining their full resolution and composition. The supplied 1000×1200 portrait WebP is used unchanged (113,468 bytes). PNG originals are preserved under ignored `tmp/remaining-image-originals/` and do not ship.

| Image   | PNG bytes | WebP bytes | Dimensions |
| ------- | --------: | ---------: | ---------- |
| Hero    | 2,639,418 |    347,890 | 1122×1402  |
| Sharing | 2,229,876 |    317,734 | 1734×907   |

The two conversions reduce combined size from 4,869,294 to 665,624 bytes (86.3% smaller). The hero appears in the opening section, the portrait in About, and sharing artwork in Open Graph metadata. Initial HTML and runtime metadata use the same sharing-image dimensions.
