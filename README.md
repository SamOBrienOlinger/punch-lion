# Punch Lion

A responsive events website presenting Punch Lion’s live experiences, children’s comedy, workshops and corporate programmes.

**React · JavaScript · Vite**

[Visit the website](https://samobrienolinger.github.io/punch-lion/) · [Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

<img src="public/assets/punch-lion-logo.jpeg" alt="Punch Lion brand logo" width="280">

## What you can explore

- Original Punch Lion branding and event photography.
- Clear programme sections and contact links.
- Testimonials and company/partner content.
- Responsive navigation and horizontal browsing sections.

## Using the project

1. Browse the event, children’s comedy, workshop or corporate programme sections.
2. Explore testimonials and partner content.
3. Use the contact links to enquire about an experience.

## Getting started

Requires Node.js and npm. Check [package.json](package.json) for the existing toolchain and dependency versions.

```bash
git clone https://github.com/SamOBrienOlinger/punch-lion.git
cd punch-lion
npm ci
npm run dev
```

Open the local address printed by the Vite development server.

## Repository guide

| Path | Purpose |
| --- | --- |
| [index.html](index.html) | Primary browser entry point |
| [src/](src/) | Application components and client logic |
| [public/](public/) | Static files served with the app |
| [tests/](tests/) | Automated test source |
| [.github/workflows/](.github/workflows/) | Build, test or deployment workflows |
| [package.json](package.json) | Package dependencies and available commands |

## Checks and review

Use Node.js and npm for the package commands below. Install the package dependencies first when the command uses a local build or test tool.

| Command | Purpose |
| --- | --- |
| `npm run build` | Create the configured application build |
| `npm run build:pages` | Create the GitHub Pages build |
| `npm run test:sites` | Check the Sites worker packaging |

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

Supporting notes: [design-qa.md](design-qa.md).

Generate fresh results from the revision you are working on; historical test reports describe earlier runs.

## Deployment

GitHub Pages uses `npm run build:pages` and the workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). The `/punch-lion/` base path is part of that build. `npm run build` produces the separate Sites-compatible package.

## Credits and reuse

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [README.md · original project record](https://github.com/SamOBrienOlinger/punch-lion/blob/09386d3d2f81719ad917c569d5893dffca43ea0e/README.md)

The Punch Lion logo is the original brand asset. Event photography comes from the supplied [Punch Lion Instagram profile](https://www.instagram.com/punch_lion/).

No repository-level licence file is present in this snapshot. This README does not grant additional reuse permissions. Check with the relevant rights holders before reusing code, written content or assets.

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). For a problem or suggested improvement, [open an issue](https://github.com/SamOBrienOlinger/punch-lion/issues) with the affected page or command, steps to reproduce, and expected behaviour.

[Back to top](#punch-lion)
