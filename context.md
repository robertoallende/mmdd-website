# MMDD Website Remake - Project Context

## Project Overview

**Goal:** Migrate the MMDD methodology website from Vite (discover) to Astro (remake) with a new theme while preserving all content.

**Current Status:** 50% Complete - Units 01-03 finished

**Live Development:** `npm run dev` → http://localhost:4322/

## MMDD Methodology (Micromanaged Driven Development)

A systematic methodology for AI-assisted software development using:
- **5-Step Cycle:** Create Context → Plan & Define → Implementation → Test & Validate → Commit
- **Unit-based approach:** Break work into small, reviewable units
- **Documentation-first:** Every decision documented in markdown
- **Commit format:** "Complete Unit XX: [Name]" with detailed body

## Project Structure

```
remake/
├── dev_log/              # MMDD documentation
│   ├── 00_mmdd.md       # MMDD methodology v3
│   ├── 00_main.md       # Project plan and status
│   ├── 01_astro_setup.md
│   ├── 02_content_migration.md
│   └── 03_navigation_simplification.md
├── src/
│   ├── content/docs/    # 5 MMDD pages
│   │   ├── index.md     # Home
│   │   ├── how-it-works.md
│   │   ├── news.md
│   │   ├── community.md
│   │   └── about.md
│   ├── config/          # JSON configs
│   └── components/      # Astro/Starlight components
└── astro.config.mjs     # Astro configuration
```

## Completed Units

### Unit 01: Astro Setup & Theme Selection
- ✓ Integrated DocKit Astro theme (built on Starlight)
- ✓ Converted from yarn to npm
- ✓ Configured site title: "Micromanaged Driven Development"
- ✓ Fixed home page routing conflict
- ✓ 442 packages installed, 0 vulnerabilities

### Unit 02: Content Migration
- ✓ Migrated 5 markdown files from discover
- ✓ Adapted frontmatter (removed: section, order, keywords; kept: title, description)
- ✓ Removed all DocKit example content (43 files)
- ✓ Configured flat sidebar navigation
- ✓ All pages verified rendering correctly

### Unit 03: Navigation Simplification
- ✓ Changed logo to text-only "MMDD"
- ✓ Removed: search bar, Get Started button, language picker
- ✓ Removed: left sidebar, right "On This Page" sidebar
- ✓ Kept: horizontal navigation bar + theme switcher
- ✓ Clean, minimal UI

## Planned Units

### Unit 04: Theme Experimentation
- Test alternative Astro themes
- Evaluate and select final theme
- Document decision rationale

### Unit 05: Additional Features
- RSS feed generation
- Google Analytics 4
- SEO meta tags and structured data
- XML sitemap

### Unit 06: GitHub Actions & Deployment
- Configure GitHub Actions workflow
- Set up GitHub Pages deployment
- Configure custom domain (mmdd.dev)
- Test production build

## Technical Stack

- **Framework:** Astro v5.16.5
- **Theme:** DocKit (Starlight-based)
- **Styling:** Tailwind CSS
- **Node:** v22.19.0
- **Package Manager:** npm
- **Deployment Target:** GitHub Pages
- **Domain:** mmdd.dev

## Key Configuration Files

- `src/config/config.json` - Site settings, logo, features
- `src/config/sidebar.json` - Navigation structure
- `src/config/menu.en.json` - Menu and footer links
- `astro.config.mjs` - Starlight configuration

## Current State (After Unit 03)

**Navigation:**
- Single horizontal bar: Home, How It Works, News, Community, About
- Theme switcher enabled
- No sidebars, no search, no language picker

**Content:**
- 5 MMDD pages fully migrated
- Frontmatter adapted to Starlight format
- All links functional

**Styling:**
- DocKit dark theme
- Clean, minimal layout
- Text-only logo "MMDD"

## Next Steps

1. Test current implementation
2. Decide: continue with Unit 04 (Theme Experimentation) or skip to Unit 06 (Deployment)?
3. Consider mobile responsiveness testing

## Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Git status
git log --oneline -5
```

## Important Notes

- Working directory: `/Users/robertoallende/code/astro/mmdd/remake`
- Source content: `../discover/src/content/`
- Branch: `astro-rebuild`
- All changes committed following MMDD format
- Dev server runs on port 4322 (4321 usually in use)
