# Project Plan and Dev Log

Convert an existing static HTML website to use Markdown files for content management, using Vite to generate static HTML at build time while preserving the existing design and functionality.

## Structure

This project follows MMDD methodology with units representing major development phases. Each unit contains discrete tasks that build incrementally toward the final goal. Units 01-09 handle core functionality, Units 10-11 focus on SEO optimization.

## About the Project

### What This Is
A conversion of the MMDD framework website from a single static HTML file to a modern Vite-based static site generator that processes Markdown content at build time. The site will maintain its existing tabbed navigation design and styling while enabling easier content management through separate .md files.

### Architecture
```
src/
├── index.html (main template with current design)
├── content/
│   ├── home.md
│   ├── how-it-works.md
│   ├── news.md
│   ├── community.md
│   └── about.md
├── js/
│   └── main.js (tab navigation and markdown rendering)
└── css/
    └── styles.css (extracted from inline styles)
```

Build-time processing converts Markdown to HTML and injects into the template. Final output is pure static HTML/CSS/JS for deployment to GitHub Pages.

### Technical Stack
- **Build Tool:** Vite
- **Content:** Markdown with frontmatter support
- **Processing:** marked (Markdown parser), gray-matter (frontmatter)
- **Styling:** Existing CSS (extracted from inline)
- **JavaScript:** Plain JS (no TypeScript needed)
- **Deployment:** GitHub Pages with custom domain (mmdd.dev)
- **Analytics:** Google Analytics 4
- **Domain:** HTTPS via GitHub Pages custom domain

## Project Status
### Overall Completion
0% - Project initialization phase

### Completed Features
None - Starting development

## Units Implemented
### Completed Units
None yet

### Units In Progress
#### 01. Project Foundation
**Status:** Planning complete, ready to begin implementation

## Planned Units

* **01**: Project Foundation - Initialize Vite project, create src/ structure, verify dev server
* **02**: Content Extraction - Extract HTML sections to .md files with frontmatter
* **03**: Asset Organization - Move CSS/JS to separate files, configure Vite processing
* **04**: Template Preparation - Convert index.html to Vite template format
* **05**: Markdown Processing Setup - Install dependencies, create conversion system
* **06**: Build Integration - Create Vite plugin/script for markdown-to-HTML injection
* **07**: Development Workflow - Configure live reload, test full dev/build process
* **08**: GitHub Pages Deployment & HTTPS Setup - Configure custom domain, automated deployment
* **09**: Google Analytics Integration - Setup GA4, privacy-compliant tracking
* **10**: Basic SEO Implementation - Meta tags, sitemap, robots.txt, performance optimization
* **11**: Professional SEO - Advanced SEO research and implementation
  * **11.1**: SEO Assessment & Research (Google SEO Guide, "The Art of SEO" by Eric Enge, Moz Guide)
  * **11.2**: Advanced SEO Implementation (structured data, keyword optimization, monitoring)

## Expected Workflow
- Edit content in .md files
- Run `npm run dev` for live preview with hot reload
- Run `npm run build` for production static files
- Deploy dist/ folder to GitHub Pages via automated pipeline
- Monitor SEO performance and analytics