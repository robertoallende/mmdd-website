# Unit 15: Compass Theme Migration

## Objective
Migrate the MMDD website from Astro 5 + Starlight (with 9 overridden components) to the Compass documentation theme (Astro 6, Tailwind CSS 4, MDX content collections, Pagefind search). This removes the Starlight dependency entirely and adopts a cleaner, purpose-built docs template.

## Rationale
The current implementation overrides 9 Starlight components, effectively fighting the framework. Compass provides equivalent functionality (MDX content, search, navigation, light/dark mode) without the overhead. The migration simplifies the architecture while gaining features like reusable MDX components, category-driven navigation, and better code block styling.

## Subunits

* **15.1** Project Scaffold & Dependency Swap — Replace Starlight with Compass dependencies, configure base project
* **15.2** Layout & Navigation Structure — Port layout, header, sidebar; define category structure
* **15.3** Content Migration — Convert content to Compass's folder-per-article MDX pattern
* **15.4** Home Page & Custom Components — Recreate landing page and port custom components
* **15.5** Styling & Theming — Migrate CSS, light/dark mode, typography, code blocks
* **15.6** Search, RSS & SEO — Configure Pagefind, RSS feed, meta tags, sitemap, analytics
* **15.7** Mobile Responsiveness & Polish — Verify responsive layout, navigation, final QA
* **15.8** Build, Deploy & Validation — Update CI/CD, verify production build, confirm live site

## Source Reference
Compass theme located at: `../compass/` (Astro 6, Tailwind CSS 4, MDX, Pagefind)
Current site: `remake/` (Astro 5, Starlight, Tailwind CSS 4)

## Key Differences

| Aspect | Current (Starlight) | Target (Compass) |
|--------|-------------------|-----------------|
| Framework | Astro 5 + Starlight | Astro 6 standalone |
| Content | Starlight docsLoader | MDX content collections |
| Search | Starlight built-in | Pagefind |
| Styling | Overridden components + custom CSS | index.css + Tailwind |
| Navigation | Starlight sidebar (disabled) | Category-driven from docs.ts |
| Code blocks | Expressive Code (Starlight) | Shiki (Astro native) |
| Components | Override components dir | MDX-registered components |

## Implementation Approach
Work from the Compass template as the base, bringing mmdd content into it rather than modifying the existing Starlight project in place. This avoids conflicts and allows clean validation at each step.

## Status: In Progress
