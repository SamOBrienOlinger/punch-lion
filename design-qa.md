# Punch Lion redesign — design QA

## Comparison target

- Source visual truth: `qa/source-visual-truth.png`
- Normalized source used for the final full-view comparison: `qa/source-normalized-1348x926.png`
- Browser-rendered desktop implementation: `qa/implementation-desktop-final.jpg`
- Browser-rendered mobile implementation: `qa/implementation-mobile-v4.jpg`
- Focused hero comparison: `qa/focused/source-hero-left.png` and `qa/focused/implementation-hero-left-final.jpg`
- State: public homepage, default theme, page top; mobile menu closed for the responsive capture

## Viewport and normalization

- Source pixels: 1487 × 1058.
- Browser CSS viewport: 1363 × 936 at `devicePixelRatio: 1`.
- Browser screenshot output: 1348 × 926. The cloud browser excludes its scrollbar/chrome gutter from the captured content surface.
- Density normalization: none required; browser DPR is 1. For the equal-pixel final comparison, the source was top-cropped from 1487 × 1058 to 1487 × 1021, then resized to 1348 × 926. No browser chrome or device frame was included.
- Mobile evidence: 390 × 844 CSS px, DPR 1, captured from the app iframe only.
- Additional responsive checks: 1024 × 900 and 768 × 900 CSS-pixel iframe viewports. Document width matched the content viewport at both widths, with no horizontal page overflow.

## Full-view comparison evidence

The normalized source and final desktop screenshot were opened together in the same comparison input. The implementation preserves the selected direction's black header, cream printed-paper field, orange/black palette, split hero, oversized hand-drawn headline, paired shadowed CTAs, and three-pathway strip. The live build intentionally uses the verified original Punch Lion logo and authentic Punch Lion event photography in place of the concept image's generated mascot/logo and illustrative crowd composite.

## Focused region comparison evidence

The left hero crops were opened together in the same comparison input to check display type, three-line wrap, orange emphasis, CTA sizing, borders, shadows, paper texture, and vertical rhythm. A separate 390 × 844 browser capture verified that the headline reflows without clipping, both CTAs remain full-width tap targets, the hero photograph begins below the copy, and the header/menu control remain visible.

## Required fidelity surfaces

- Fonts and typography: Permanent Marker supplies the brush-style hero voice; Bebas Neue handles navigation, labels, and CTA display text; Archivo handles body copy. Desktop hierarchy was enlarged after comparison and retains the intended three-line wrap. Mobile type scales without clipping or truncation.
- Spacing and layout rhythm: desktop retains the source's header/hero/pathway sequence and visible first-viewport pathway strip. Hero copy and image use a stable two-column grid above 960px, then stack at tablet/mobile widths. CTA spacing, square corners, hard shadows, and section gaps are consistent.
- Colors and visual tokens: the implementation maps the source to ink black, warm cream, and Punch Lion orange, with small yellow/blue/red pathway accents. Contrast is strong and there are no gradients.
- Image quality and asset fidelity: the unchanged original Punch Lion logo is used in the header and footer. Hero and programme photography comes from the supplied Punch Lion Instagram source and is locally optimized as WebP. The hero uses breakpoint-specific `object-position` values to keep the stage and audience visible.
- Copy and content: the selected headline, summary, CTAs, programme labels, and Punch Lion-specific descriptions are coherent and complete. No placeholder copy remains.
- Icons: Phosphor icons provide a consistent real icon family for social, navigation, CTA, and programme pathway affordances.
- Accessibility and behavior: semantic landmarks, alt text, visible focus outlines, keyboard-operable menu/links, reduced-motion support, and practical mobile tap targets are present.

## Findings

No actionable P0, P1, or P2 findings remain.

Accepted intentional differences:

- The generated concept logo/mascot is replaced by the verified original Punch Lion logo, as explicitly required.
- The generated hero composite is replaced by authentic Punch Lion event photography, as explicitly required.
- The pathway illustrations are implemented with a consistent production icon family rather than the concept's generated one-off artwork.

## Comparison history

1. Initial desktop comparison — P1/P2 findings:
   - The hero consumed too much of the first viewport, hiding the pathway strip.
   - The headline wrapped to four lines and was materially smaller than the source hierarchy.
   - Fix: constrained hero height, rebalanced grid tracks, tightened desktop wrapping, and enlarged the display hierarchy.
   - Post-fix evidence: `qa/implementation-desktop-v2.png`, followed by the final capture.
2. Mobile interaction pass — P1 finding:
   - The open mobile menu initially rendered behind the hero.
   - Fix: changed the menu to a fixed layer beneath the header, raised its stacking context, and locked document scroll while open.
   - Post-fix evidence: `qa/mobile-menu-harness-final.png`; links were visible and interactive.
3. Surface fidelity pass — P2 finding:
   - Major cream and black surfaces were flatter than the selected printed-poster direction.
   - Fix: introduced optimized paper and ink texture assets across the header, hero, cards, CTA, footer, and menu surfaces.
   - Post-fix evidence: `qa/implementation-desktop-v4.jpg` and later captures.
4. Final headline pass — P1/P2 findings:
   - One enlargement attempt clipped the final headline line at the desktop grid edge.
   - Fix: rebalanced base size and last-line optical scale, then increased the first and orange lines only at wide desktop widths. Added a narrower last-line scale for the 961–1180px range.
   - Post-fix evidence: `qa/implementation-desktop-final.jpg`; no visible clipping, page overflow, or unintended fourth line remains.

## Runtime verification

- `npm run build`: passed.
- `npm run test:sites`: 4/4 tests passed.
- Primary interactions tested in the cloud browser: desktop navigation, mobile menu open/close, visibility of all mobile links, and the Events link updating the hash to `#live-comedy`, closing the menu, and scrolling to the section.
- Responsive states checked: 1363px desktop, 1024px tablet landscape, 768px tablet portrait, and 390px mobile.
- Console check: no app-originating console errors were observed. One browser-extension metadata warning was unrelated to the app and ignored.

## Follow-up polish

No blocking polish remains. A future production pass may add CMS-backed event listings and form submission behavior without changing the approved visual system.

## Implementation checklist

- [x] Original logo used consistently.
- [x] Authentic Punch Lion imagery used.
- [x] Hero crop and positioning verified.
- [x] Desktop, tablet, and mobile layouts verified.
- [x] Mobile navigation and anchor behavior verified.
- [x] Build and Sites packaging tests passed.

final result: passed
