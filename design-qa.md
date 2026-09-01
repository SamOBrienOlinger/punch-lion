# Punch Lion hero copy update — design QA

## Comparison target

- Source visual truth: `/workspace/scratch/71bee07759fa/upload/IMG_1037.jpeg`.
- Browser-rendered implementation: `/workspace/scratch/punch-lion-copy-mobile.jpg`.
- Combined comparison: `/workspace/scratch/71bee07759fa/qa-copy/hero-copy-comparison.jpg`.
- State: homepage at the top, mobile navigation closed.

## Viewport and normalization

- Source pixels: 1125 × 1765.
- Implementation pixels: 390 × 844 at DPR 1.
- Mobile content viewport: 375 × 844 CSS pixels inside a 390 × 844 QA frame; `clientWidth` and `scrollWidth` both measured 375px.
- For equal-region comparison, the source was resized to 390 × 612 and the implementation was top-cropped to 390 × 612. The source and implementation were then opened together in a 780 × 612 comparison image.

## Full-view comparison evidence

The combined comparison clearly shows the two requested hero edits. “Bespoke live experiences brought to life.” now occupies the upper label position, and the former lower summary has been removed rather than duplicated. The headline now reads “Experiences that bring people together.” The plural verb was corrected from “brings” to “bring” so the revised headline is grammatical.

The longer word “Experiences” remains fully visible on mobile and desktop. The implementation preserves the supplied logo, charcoal/aqua header, coral emphasis, warm ivory paper surface, CTA styling, and hero-image transition from the reference.

## Focused region comparison evidence

A separate focused crop was not needed because the full comparison is already limited to the header and hero, and both revised text regions are legible at the comparison size.

## Required fidelity surfaces

- Fonts and typography: the existing Bebas Neue label and Permanent Marker headline are preserved. “Experiences” fits without clipping; the three-line headline hierarchy remains intact.
- Spacing and layout rhythm: removing the duplicate lower summary closes the gap naturally while retaining clear separation between the headline and CTAs.
- Colors and visual tokens: no palette changes were introduced; charcoal, ivory, coral, aqua, and gold remain consistent with the approved direction.
- Image quality and asset fidelity: the supplied Punch Lion logo and existing optimized event photography are unchanged.
- Copy and content: the upper label and hero headline match the requested wording, with the necessary subject–verb agreement correction.

## Responsive and interaction checks

- Desktop: 1363 × 936 CSS viewport, DPR 1; document width matched the 1348px content surface with no horizontal overflow.
- Mobile: the headline, label, CTAs, logo, menu control, and hero image remained visible without clipping or horizontal overflow.
- The mobile menu opened, exposed all eight links, and closed correctly.
- Browser console: no app-originating errors or warnings. Browser-extension metadata errors were unrelated to the site.

## Runtime verification

- `npm run build`: passed.
- `npm run test:sites`: 4/4 tests passed.
- `npm run build:pages`: passed.

## Findings and comparison history

No actionable P0, P1, or P2 findings were present in the first post-implementation comparison, so no visual QA repair loop was required.

final result: passed
