# Unit 15: Compass Theme Migration - Subunit 004: Home Page & Custom Components

## Objective
Recreate the mmdd landing page and port custom components to work within Compass's MDX component system.

## Implementation

### Home Page Recreation
The current homepage uses a Starlight splash template with:
- Hero section (title, tagline, background images)
- 3 benefit cards in a grid
- CTA section

Recreate using Compass's `index.astro` page with:
- SearchHero or custom hero component
- CategoryCard components for main sections
- Clean landing page layout

### Port Custom Components
Components to evaluate and port:
- `HeroTabs.astro` / `HeroTabsItem.astro` — Tabbed hero content
- `AccordionContainer.astro` / `Accordion.astro` — Expandable sections
- `CTA.astro` — Call to action blocks
- `LinkButton.astro` — Styled link buttons
- `Analytics.astro` — GA4 tracking (move to layout)

### Register MDX Components
- Add any ported components to `src/components/docs/mdx-components.ts`
- Ensure they're available inside .mdx articles without explicit imports

### Compass Components Available
Leverage Compass's built-in components where they match:
- `Callout` (for tips/warnings)
- `Card` / `CardGrid` (for benefit cards)
- `Steps` / `Step` (for methodology steps)
- `Accordion` (already exists in Compass)
- `Tabs` (for code examples)

## Files Modified
- `src/pages/index.astro` (updated)
- `src/components/` (ported components)
- `src/components/docs/mdx-components.ts` (new)

## Status: Not Started
