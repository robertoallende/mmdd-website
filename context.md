# MMDD Website Remake - Context

## Status: 60% Complete (Units 01-04 Done)

**Goal:** Migrate MMDD website from Vite to Astro with DocKit theme
**Working Dir:** `/Users/robertoallende/code/astro/mmdd/remake`
**Dev Server:** `npm run dev` → http://localhost:4322/

## MMDD Methodology

**5-Step Cycle:** Create Context → Plan & Define → Implementation → Test & Validate → Commit
**Approach:** Unit-based, documentation-first, systematic AI collaboration
**Commits:** "Complete Unit XX: [Name]" with detailed body

## Completed

**Unit 01:** DocKit theme integrated, npm setup, routing fixed
**Unit 02:** 5 pages migrated (home→index, how-it-works, news, community, about), frontmatter adapted, DocKit examples removed
**Unit 03:** Simplified navigation - text logo "MMDD", removed search/sidebars/language picker, horizontal nav only
**Unit 04:** Home page enhancement - MDX conversion, splash template, 3 benefit cards, simplified hero, updated backgrounds

## Next Units

**05:** Theme Experimentation
**06:** Additional Features (RSS, Analytics, SEO)
**07:** GitHub Actions & Deployment to mmdd.dev

## Tech Stack

Astro v5.16.5 | DocKit (Starlight) | Tailwind | Node v22.19.0 | npm | Branch: astro-rebuild

## Key Files

- `dev_log/00_main.md` - Project plan & status
- `src/content/docs/` - 5 MMDD pages
- `src/config/config.json` - Site settings
- `astro.config.mjs` - Starlight config (sidebar: [], tableOfContents: false)

## Quick Ref

```bash
npm run dev      # Start dev server
npm run build    # Build production
git log -5       # Recent commits
```
