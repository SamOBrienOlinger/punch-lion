# Punch Lion

A responsive redesign of the Punch Lion website, built around the original Punch Lion identity and authentic event photography.

## Live site

https://samobrienolinger.github.io/punch-lion/

## Features

- Original Punch Lion logo used consistently in the header and footer
- Responsive desktop, tablet, and mobile layouts
- Carefully positioned hero photography with breakpoint-specific crops
- Authentic Punch Lion event and workshop imagery
- Accessible keyboard navigation and mobile menu
- Live comedy, kids' comedy, workshop, and corporate programme sections
- Locally hosted fonts, images, and print-style surface textures

## Run locally

```bash
npm install
npm run dev
```

## Validate the production build

```bash
npm run build
npm run test:sites
```

GitHub Pages deploys automatically from `main` using the workflow in
`.github/workflows/deploy-pages.yml`.

## Technology

- React 19
- Vite 6
- Phosphor Icons
- OpenAI Sites-compatible worker packaging

## Image sources

The logo is the original Punch Lion brand asset. Event and workshop photographs were selected from the supplied [Punch Lion Instagram profile](https://www.instagram.com/punch_lion/).
