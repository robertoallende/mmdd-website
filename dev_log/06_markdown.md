# Unit 06: Markdown Processing Setup

## Objective
Install markdown processing dependencies (marked, gray-matter) and create a build-time system to convert markdown files to HTML and inject them into the Vite template, replacing content section placeholders.

## Implementation
Set up markdown-to-HTML conversion system:

### Dependencies Installation:
- Install `marked` for markdown-to-HTML conversion
- Install `gray-matter` for frontmatter parsing
- Add as production dependencies (needed for build)

### Vite Plugin Creation:
- Create custom Vite plugin for markdown processing
- Plugin reads all .md files from src/content/
- Parse frontmatter and markdown content
- Convert markdown to HTML using marked
- Inject processed content into HTML template placeholders

### Processing Logic:
- Read markdown files during build process
- Extract frontmatter (title, section, order, description)
- Convert markdown body to HTML
- Replace placeholder divs with processed content
- Maintain section IDs and CSS classes for styling

### Template Integration:
- Replace empty `<div id="home" class="content-section active">` placeholders
- Preserve existing CSS classes and structure
- Ensure tab navigation continues to work
- Test with one content section first (home.md)

### File Processing Order:
- Process files based on frontmatter `order` field
- Ensure home section loads as active by default
- Handle all 5 content sections: home, how-it-works, news, community, about

## AI Interactions
Systematic markdown processing setup:
1. Install markdown processing dependencies
2. Create basic Vite plugin structure
3. Implement markdown file reading and parsing
4. Add HTML injection logic into template
5. Test with home.md content first
6. Extend to all content sections

## Files Modified
**Created:**
- vite.config.js (update with markdown plugin)
- src/plugins/markdown-plugin.js (custom Vite plugin)

**Dependencies Added:**
- marked (markdown parser)
- gray-matter (frontmatter parser)

**Commands to Run:**
- `npm install marked gray-matter`
- `npm run dev` (to test processing)

## Status: Complete
Successfully implemented markdown processing system with marked and gray-matter. Custom Vite plugin processes all 5 content sections at build time, converting markdown to HTML and injecting into template while preserving CSS classes and tab functionality.