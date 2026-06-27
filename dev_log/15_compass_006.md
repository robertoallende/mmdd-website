# Unit 15: Compass Theme Migration - Subunit 006: Search, RSS & SEO

## Objective
Configure Pagefind search, migrate the RSS feed, and port all SEO optimizations (meta tags, structured data, sitemap, analytics).

## Implementation

### Pagefind Search
- Pagefind runs as post-build step: `astro build && pagefind --site dist`
- Compass includes `src/scripts/docs-search.ts` for search UI
- SearchHero component on homepage provides search interface
- Sidebar includes search input for article pages
- Test with `npm run preview` (search only works on built output)

### RSS Feed
- Port `src/pages/rss.xml.js` to Compass's `src/pages/rss.xml.ts` pattern
- Use `@astrojs/rss` to generate feed from docs collection
- Include news/update articles in feed
- Verify feed validates and includes all expected entries

### SEO & Meta Tags
- Compass handles meta via Layout.astro `<head>` section
- Port structured data (JSON-LD for Organization, WebSite)
- Configure `og:image` using `public/og-image.png`
- Set canonical URLs via `site.config.mjs` siteUrl

### XML Sitemap
- `@astrojs/sitemap` integration (already in Compass config)
- Verify all pages appear in generated sitemap

### Google Analytics
- Port GA4 integration (property G-2QVVJSV702)
- Add tracking script to Layout.astro head
- Preserve event tracking for external links, code copy, theme switching

### Favicon
- Copy existing `public/favicon.svg` to new structure
- Compass uses `public/favicon-light.svg` and `public/favicon-dark.svg`
- Configure for both light and dark browser themes

## Files Modified
- `src/pages/rss.xml.ts` (migrated)
- `src/layouts/Layout.astro` (analytics, SEO additions)
- `public/favicon-light.svg`, `public/favicon-dark.svg`
- `public/og-image.png`

## Status: Not Started
