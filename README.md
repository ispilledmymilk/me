# Personal site

Single-page resume site for Sai Pranavi Kasturi, built with [Astro](https://astro.build/), TypeScript, and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:4321`).

## Build

```bash
npm run build
```

Static output is written to `dist/`. Preview it locally:

```bash
npm run preview
```

## Resume PDF

The downloadable file lives at [`public/resume.pdf`](public/resume.pdf). Replace that file when your resume changes, then redeploy.

## Deploy

This project is configured as a static site (`output: 'static'` in [`astro.config.mjs`](astro.config.mjs)).

- **Production URL:** set `site` in `astro.config.mjs` to your real domain or GitHub Pages URL so Open Graph and canonical links resolve correctly.
- **GitHub Pages project site** (`https://<user>.github.io/<repo>/`): add `base: '/<repo>/'` next to `site` in `astro.config.mjs`, then configure your host to publish the `dist` folder (for example with a GitHub Action that runs `npm run build` and uploads `dist/`).

## Content

Resume sections and copy are defined in [`src/data/resume.ts`](src/data/resume.ts). Update that file to change wording, roles, or projects without touching layout markup.
