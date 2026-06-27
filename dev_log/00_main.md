# Project Plan and Dev Log

Migrate the MMDD methodology website from Vite-based architecture to Astro, preserving all content while implementing a modern theme and ensuring mobile responsiveness.

## Structure

This project follows MMDD methodology with units representing major development phases. Each unit contains discrete tasks that build incrementally toward the final goal. Units focus on content migration, functionality, and deployment infrastructure.

## About the Project

### What This Is
A complete reimplementation of the MMDD methodology website (currently at mmdd.dev) using Astro as the static site generator. The project migrates 5 existing markdown content files from a Vite-based system to Astro's content collections, implements a new modern theme, and ensures full mobile responsiveness before exploring additional theme options.

### Architecture
```
remake/
├── src/
│   ├── pages/          # Astro page routes
│   ├── content/        # Content collections (migrated .md files)
│   │   ├── home.md
│   │   ├── how-it-works.md
│   │   ├── news.md
│   │   ├── community.md
│   │   └── about.md
│   ├── layouts/        # Page layouts
│   ├── components/     # Reusable components
│   └── styles/         # CSS/styling
├── public/             # Static assets
├── dev_log/            # MMDD development documentation
└── astro.config.mjs    # Astro configuration
```

Build process generates static HTML/CSS/JS for deployment to GitHub Pages with custom domain (mmdd.dev).

### Technical Stack
- **Framework:** Astro (static site generator)
- **Content:** Markdown files migrated from discover project
- **Theme:** To be selected (modern Astro theme)
- **Styling:** Theme-based CSS + custom modifications
- **Deployment:** GitHub Pages with GitHub Actions
- **Domain:** mmdd.dev (custom domain via GitHub Pages)
- **Node.js:** v18.20.8+ or v20.3.0+, v22.0.0+

### Source Content
Migrating from `discover/src/content/`:
- home.md (1,990 bytes)
- how-it-works.md (3,507 bytes)
- news.md (4,307 bytes)
- community.md (625 bytes)
- about.md (1,810 bytes)

## Project Status
### Overall Completion
100% - Units 01-13 complete, deployment workflow implemented

### Completed Features
- MMDD project structure initialized
- Development log directory created
- Project plan documented
- DocKit Astro theme integrated into remake
- Development environment configured and tested (Astro v5.16.5, Node v22.19.0)
- Site title configured as "Micromanaged Driven Development"
- 442 npm packages installed with 0 vulnerabilities
- Home page routing conflict resolved
- All DocKit example content removed
- 5 MMDD content pages migrated with adapted frontmatter
- Logo changed to text-only (MMDD)
- Search bar removed
- Get Started button removed
- Language picker removed
- Left and right sidebars removed
- Clean horizontal navigation implemented
- Home page converted to MDX with splash template
- Component-based landing page with 3 benefit cards
- Hero component simplified (removed search and badges)
- Updated hero background images for light and dark modes
- Removed 16 unused DocKit theme assets
- Simplified logo to empty space
- Updated home navigation to "Micromanaged Driven Development"
- Removed footer content completely
- Disabled call-to-action section
- Configured code blocks as plain gray boxes with copy button
- Removed duplicate headings from all content pages
- Disabled breadcrumbs and pagination
- Removed header border line
- Polished news page formatting
- Fixed mobile sidebar gap (sidebar width set to 0px)
- Enhanced How It Works page with Card components
- 5-step MMDD cycle presented in Grid layout with icons
- Removed header border line completely
- Fixed mobile navigation to work on all pages
- Theme-aware mobile header background (light/dark)
- GitHub icon in footer instead of text
- Consistent card sizing and icon colors
- RSS feed generation implemented with @astrojs/rss
- All 6 news articles automatically parsed and included in RSS feed
- RSS feed available at /rss.xml during development and build
- Google Analytics 4 integration with property G-2QVVJSV702
- Event tracking for external links, RSS clicks, code copy, and theme switching
- Analytics working in both development and production modes
- SEO optimization with astro-seo package and enhanced meta tags
- XML sitemap generation at /sitemap-index.xml with all pages
- Structured data (JSON-LD) for Organization and WebSite schemas
- Methodology-focused page titles and descriptions for better search rankings
- MMDD favicon copied from discover project and properly configured
- Consistent visual branding across browser tabs and bookmarks
- GitHub Actions deployment workflow with comprehensive validation
- Custom domain setup (mmdd.dev) and automated deployment to GitHub Pages
- MMDD guide integration and Astro-specific build validation

## Units Implemented
### Completed Units
* **01**: Astro Setup & Theme Selection - DocKit theme integrated, npm configured, dev server verified, routing fixed
* **02**: Content Migration - 5 MMDD pages migrated, DocKit examples removed, frontmatter adapted, navigation configured
* **03**: Navigation Simplification - Removed unnecessary UI elements, text-only logo, clean horizontal navigation
* **04**: Home Page Enhancement - MDX conversion, splash template, component-based cards, simplified hero, updated backgrounds
* **05**: Asset Cleanup and UI Refinement - Removed 16 DocKit assets, empty logo, updated nav labels, removed footer and CTA
* **06**: UI Polish and Code Block Styling - Clean code blocks, removed duplicate headings, disabled breadcrumbs, removed header border
* **07**: Mobile Layout Fix and How It Works Enhancement - Fixed sidebar gap on mobile, enhanced How It Works with Card components
* **08**: Mobile Fixes and Header Cleanup - Fixed mobile navigation on all pages, removed header border, theme-aware header backgrounds, GitHub icon
* **09**: RSS Feed Generation - Implemented RSS feed with @astrojs/rss, parses news.md content, available at /rss.xml
* **10**: Analytics Integration - Google Analytics 4 with property G-2QVVJSV702, event tracking for user interactions
* **11**: SEO and XML Sitemap - astro-seo integration, structured data, methodology-focused meta tags, XML sitemap generation
* **12**: Favicon Implementation - MMDD favicon copied from discover project, consistent visual branding
* **13**: GitHub Actions & Deployment - Automated deployment workflow, custom domain setup, comprehensive validation
* **14**: Font Size Improvements - Reduced H1/H2 heading sizes for better readability and modern typography standards

### Units In Progress
None currently

## Planned Units

### Unit 09: RSS Feed Generation
- Implement RSS feed generation
- Configure feed content and metadata
- Test RSS feed functionality

### Unit 10: Analytics Integration
- Add analytics integration (Google Analytics 4)
- Configure tracking and events
- Verify analytics data collection

### Unit 11: SEO and XML Sitemap
- Configure SEO meta tags and structured data
- Add XML sitemap generation
- Optimize search engine visibility
- Install and configure astro-seo package

### Unit 12: Favicon Implementation
- Copy favicon from discover project
- Configure favicon in Astro site
- Ensure proper favicon formats and sizes
- Test favicon display across browsers

### Unit 13: GitHub Actions & Deployment
- Configure GitHub Actions workflow for automated builds
- Set up GitHub Pages deployment
- Configure custom domain (mmdd.dev)
- Test deployment pipeline
- Verify production build and live site functionality

### Unit 15: Compass Theme Migration
- Migrate from Astro 5 + Starlight to Compass theme (Astro 6, Tailwind CSS 4, MDX, Pagefind)
- Remove Starlight dependency and 9 overridden components
- Adopt category-driven navigation and folder-per-article content structure
- Subunits: scaffold, layout, content, components, styling, SEO, mobile, deploy

### Unit 99: FAQ Implementation
- Add FAQ sections to key pages (How It Works, About)
- Implement FAQ component with structured data
- Include methodology-focused questions and answers
- Optimize for search intent and user queries

## Expected Workflow
- Edit content in markdown files within src/content/
- Run `npm run dev` for live preview with hot reload
- Run `npm run build` for production static files
- Push to GitHub triggers automated deployment via GitHub Actions
- Monitor live site at mmdd.dev
