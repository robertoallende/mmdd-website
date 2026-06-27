# Unit 15: Compass Theme Migration - Subunit 001: Project Scaffold & Dependency Swap

## Objective
Replace the Starlight-based project structure with Compass's standalone Astro 6 setup. Achieve a clean build with no content, proving the new foundation works.

## Implementation

### Remove Starlight Dependencies
- Remove `@astrojs/starlight`, `@astrojs/starlight-tailwind`
- Remove `astro-vtbot` (Starlight view transitions plugin)
- Remove `astro-seo` (replaced by Compass's built-in head management)

### Add Compass Dependencies
- `astro` ^6.4.3
- `@astrojs/mdx` ^6.0.1
- `@astrojs/rss` ^4.0.18
- `@astrojs/sitemap` ^3.6.0
- `tailwindcss` ^4.1.14
- `@tailwindcss/typography` ^0.5.16
- `@tailwindcss/vite` ^4.1.14
- `pagefind` ^1.5.2 (devDependency)

### Configure Base Files
- Create `site.config.mjs` with mmdd branding (name, URL, GitHub link, footer)
- Rewrite `astro.config.mjs` to use MDX + sitemap integrations, Tailwind vite plugin, Shiki themes
- Update `tsconfig.json`
- Update `package.json` scripts (add `build` with pagefind, `clean`, `format:check`)

### Verify
- `npm install` completes without errors
- `npm run dev` starts on port 3000
- `npm run build` produces `dist/` directory

## Files Modified
- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `site.config.mjs` (new)
- `tsconfig.json`

## Status: Not Started
