# Matt Sanford — Astro site

Marketing site for Matt Sanford, a CHEK-certified physical trainer on the North
Shore. Built with [Astro](https://astro.build) and configured for one-click
deployment to [Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

The static site is written to `dist/`.

## Project structure

```
src/
  layouts/
    Layout.astro      # Shared <head>, nav, footer
  pages/
    index.astro       # Home (/)
    about.astro       # About (/about)
    coaching.astro    # How I Coach (/coaching)
    work.astro        # Work With Me (/work)
    notes.astro       # Field Notes (/notes)
    contact.astro     # Contact (/contact)
  styles/
    global.css        # Site-wide styles (design tokens, components)
public/
  robots.txt
astro.config.mjs
vercel.json           # Vercel build/output configuration
```

## Deploying to Vercel

The repo is preconfigured for Vercel. Two ways to deploy:

1. **Via the Vercel dashboard.** Import the GitHub repo at
   <https://vercel.com/new>. Vercel auto-detects Astro from `vercel.json`. No
   environment variables required.
2. **Via the Vercel CLI.**
   ```bash
   npm i -g vercel
   vercel        # link & preview deploy
   vercel --prod # production deploy
   ```

`vercel.json` pins:

- `buildCommand: npm run build`
- `outputDirectory: dist`
- `framework: astro`
- `cleanUrls: true` (so `/about` and `/about/index.html` resolve identically)

## Notes on the migration

This project was migrated from a static HTML/CSS prototype originally built
with the Claude design tool. During the migration:

- The five HTML pages (`index`, `about`, `coaching`, `work`, `notes`,
  `contact`) became `.astro` pages under `src/pages/`.
- The shared header (nav) and footer were extracted into
  `src/layouts/Layout.astro`. Pages declare their `active` nav item as a prop.
- `styles.css` was moved verbatim to `src/styles/global.css` and imported once
  from `Layout.astro`.
- The Cloudflare email-protection script and the Claude design preview
  `tweaks.jsx`/`tweaks-panel.jsx` were dropped — they were dev-time tooling
  and aren't needed in production.
- All inter-page links were rewritten from `*.html` to clean URLs (`/about`,
  `/coaching`, etc.).
- Placeholder email `matt@example.com` is used wherever the prototype showed
  the obfuscated `[email protected]`. Update before going live.
