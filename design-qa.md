# Punch Lion hero refinement — design QA

## Comparison target

- Source visual truth: `/workspace/scratch/punch-lion-copy-mobile.jpg` (the approved hero before this refinement).
- Browser-rendered mobile implementation: `/workspace/scratch/punch-lion-polish-mobile.jpg`.
- Browser-rendered desktop implementation: `/workspace/scratch/punch-lion-polish-desktop.jpg`.
- Combined before/after comparison: `/workspace/scratch/71bee07759fa/qa-polish/hero-polish-comparison.jpg`.
- State: homepage at the top, mobile navigation closed.

## Viewport and normalization

- Source pixels: 390 × 844 at DPR 1.
- Mobile implementation capture: 390 × 612 at DPR 1 from a 375 × 844 CSS-pixel content viewport inside the QA frame.
- Desktop implementation capture: 1348 × 926 from a 1363 × 936 CSS viewport at DPR 1.
- For equal-region comparison, the source was top-cropped to 390 × 612. Both mobile regions were placed side by side without rescaling.
- Mobile `clientWidth` and `scrollWidth` both measured 375px; desktop `clientWidth` and `scrollWidth` both measured 1348px.

## Full-view comparison evidence

The side-by-side mobile comparison shows a clearer hierarchy and a shorter, more deliberate hero. The supporting sentence now uses sentence case, Archivo, a calmer weight and conventional tracking instead of behaving like a second all-caps display label. The headline is consistently three lines, with “People together” kept intact, and the two CTAs have matched widths and tighter spacing. The hero image enters the viewport sooner without crowding the calls to action.

The desktop capture confirms that the same hierarchy remains balanced beside the photograph: the headline fits without clipping, the CTA pair aligns to a common width, and the first viewport still includes the service pathway strip.

## Focused region comparison evidence

A separate focused crop was unnecessary because the normalized comparison is already limited to the complete mobile header and hero, with the tagline, headline, CTAs, spacing and image transition all legible.

## Required fidelity surfaces

- Fonts and typography: Permanent Marker remains the expressive brand voice for the headline, while the longer supporting sentence now uses Archivo for cleaner readability. Responsive optical scaling keeps the headline to three lines without truncation.
- Spacing and layout rhythm: mobile hero padding, title spacing and CTA gaps were reduced; equal CTA widths improve alignment. Desktop spacing remains centered and proportional to the hero photograph.
- Colors and visual tokens: the approved charcoal, ivory, coral and aqua palette is unchanged. No gradients or new decorative effects were introduced.
- Image quality and asset fidelity: the supplied logo and existing optimized event photography remain unchanged, sharp and correctly cropped.
- Copy and content: all approved wording is preserved exactly, including “Bespoke live experiences brought to life.” and “Experiences that bring people together.”

## Responsive and interaction checks

- Mobile hero: no clipping or horizontal overflow at the 375px content width.
- Desktop hero: no clipping or horizontal overflow at the 1348px content width.
- Mobile navigation opened, exposed all eight links, and closed correctly.
- Browser console: no app-originating errors or warnings. Browser-extension metadata errors were unrelated to the site.

## Runtime verification

- `npm run build`: passed.
- `npm run test:sites`: 4/4 tests passed.
- `npm run build:pages`: passed.

## Findings and comparison history

No actionable P0, P1 or P2 findings were present in the first post-refinement comparison, so no visual QA repair loop was required.

final result: passed
