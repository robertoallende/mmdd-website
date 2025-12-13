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
5% - Project plan created, Unit 01 planned and ready for implementation

### Completed Features
- MMDD project structure initialized
- Development log directory created
- Project plan documented
- Unit 01 plan created with DocKit theme selection

## Units Implemented
### Completed Units
None yet

### Units In Progress
#### 01. Astro Setup & Theme Selection
**Status:** Planned - DocKit theme selected, implementation approach defined. Will copy DocKit files to remake, convert to npm, configure basic site settings (title: "Micromanaged Driven Development"), and verify development environment. Example content preserved for Unit 02.

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
