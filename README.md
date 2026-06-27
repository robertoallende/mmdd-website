# MMDD Website

The [mmdd.dev](https://mmdd.dev) website — built with Astro 6, Tailwind CSS 4, and the Compass documentation theme.

## Quick Start

```bash
npm install
npm run dev      # Dev server on port 3000
npm run build    # Production build + Pagefind search index
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/    # Header, reusable components
├── content/docs/  # MDX/Markdown content files
├── data/docs.ts   # Category structure and navigation
├── layouts/       # Base page layout
├── pages/         # File-based routing
└── index.css      # Tailwind + design system variables
```

## Content

Content lives in `src/content/docs/` as Markdown/MDX files with frontmatter:

```yaml
title: 'Page Title'
description: 'Page description'
category: 'how-it-works'  # matches a category in src/data/docs.ts
order: 1
status: 'published'
```

## Deployment

Push to `main` and trigger the GitHub Actions workflow to deploy to GitHub Pages at mmdd.dev.

## Built With

- [Astro](https://astro.build/) v6
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Pagefind](https://pagefind.app/) for search
- Compass theme architecture
