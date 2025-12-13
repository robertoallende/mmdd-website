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
50% - Units 01-03 complete, clean navigation implemented

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

## Units Implemented
### Completed Units
* **01**: Astro Setup & Theme Selection - DocKit theme integrated, npm configured, dev server verified, routing fixed
* **02**: Content Migration - 5 MMDD pages migrated, DocKit examples removed, frontmatter adapted, navigation configured
* **03**: Navigation Simplification - Removed unnecessary UI elements, text-only logo, clean horizontal navigation

### Units In Progress
None currently

## Planned Units

### Unit 01: Astro Setup & Theme Selection
- Initialize Astro project in remake directory
- Review and select an appropriate modern Astro theme
- Install theme and verify basic functionality
- Configure astro.config.mjs for project needs
- Verify development server works

### Unit 02: Content Migration
- Create content collection configuration
- Migrate 5 markdown files from discover/src/content/
- Preserve frontmatter and content structure
- Create necessary content schemas for type safety
- Validate all content renders correctly

### Unit 03: Navigation & Mobile Responsiveness
- Implement tabbed navigation (maintaining discover's UX pattern)
- Create responsive mobile navigation (hamburger menu)
- Ensure proper mobile viewport behavior
- Test navigation across different screen sizes
- Verify accessibility standards

### Unit 04: Theme Experimentation
- Document current theme performance and aesthetics
- Research and test alternative Astro themes
- Compare themes for content compatibility
- Select final theme or refine current choice
- Document theme decision and rationale

### Unit 05: Additional Features
- Implement RSS feed generation
- Add analytics integration (Google Analytics 4)
- Configure SEO meta tags and structured data
- Add XML sitemap generation
- Implement any additional discover features as needed

### Unit 06: GitHub Actions & Deployment
- Configure GitHub Actions workflow for automated builds
- Set up GitHub Pages deployment
- Configure custom domain (mmdd.dev)
- Test deployment pipeline
- Verify production build and live site functionality

## Expected Workflow
- Edit content in markdown files within src/content/
- Run `npm run dev` for live preview with hot reload
- Run `npm run build` for production static files
- Push to GitHub triggers automated deployment via GitHub Actions
- Monitor live site at mmdd.dev
