# Unit 15: Compass Theme Migration - Subunit 002: Layout & Navigation Structure

## Objective
Implement Compass's layout system, header, sidebar, and define the category/navigation structure for mmdd's pages.

## Implementation

### Port Core Layout Files
- `src/layouts/Layout.astro` — Base HTML shell with head, fonts, dark mode support
- `src/components/Header.astro` — Top navigation with site name, nav links, dark mode toggle
- `src/components/Sidebar.astro` — Article-level sidebar navigation

### Define Category Structure
Create `src/data/docs.ts` with mmdd's content categories:
- **methodology** (parent) — How It Works content
- **updates** (parent) — News/changelog content
- **about** (parent) — About and Community content

### Set Up Page Routes
- `src/pages/index.astro` — Homepage
- `src/pages/[parent]/index.astro` — Parent category pages
- `src/pages/[parent]/[category]/[...slug].astro` — Article pages
- `src/pages/404.astro` — Not found page

### Configure Site Navigation
- Map mmdd's current pages (how-it-works, news, community, about) into Compass's URL structure
- Ensure navigation links in header match defined categories

## Files Modified
- `src/layouts/Layout.astro` (new)
- `src/components/Header.astro` (new)
- `src/components/Sidebar.astro` (new)
- `src/data/docs.ts` (new)
- `src/pages/index.astro` (new)
- `src/pages/[parent]/` (new)
- `src/pages/404.astro` (new)

## Status: Not Started
