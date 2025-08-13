# Unit 04: Template Preparation

## Objective
Convert ui/index.html to a Vite-compatible template format by removing hardcoded content and inline assets, then creating a clean HTML template that imports the organized CSS/JS files and provides placeholders for markdown content injection.

## Implementation
Transform ui/index.html into a Vite template:

### HTML Template Creation:
- Copy ui/index.html structure to src/index.html
- Remove all hardcoded content sections (home, how-it-works, etc.)
- Remove inline `<style>` and `<script>` tags
- Add CSS import link to src/css/styles.css
- Add JS script tag for src/js/main.js
- Create content placeholders for markdown injection

### Content Structure Preservation:
- Maintain exact HTML structure for styling compatibility
- Keep navigation tabs with onclick handlers
- Preserve content-section div structure for JS functionality
- Maintain all CSS class names and IDs

### Template Placeholders:
- Replace hardcoded content with placeholder divs
- Ensure section IDs match markdown file names
- Prepare structure for dynamic content injection
- Keep Google Fonts link and meta tags

### Directory Structure After Unit 04:
```
src/
├── index.html (Vite template)
├── content/ (markdown files)
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## AI Interactions
Systematic template conversion approach:
1. Read ui/index.html to understand full structure
2. Create clean Vite-compatible template
3. Remove inline assets and hardcoded content
4. Add proper asset imports for Vite processing
5. Maintain styling and functionality compatibility

## Files Modified
**Created:**
- src/index.html (Vite template with asset imports)

## Status: Complete
Successfully created clean Vite-compatible HTML template. Removed inline assets and hardcoded content, added proper asset imports, and created placeholders for markdown content injection while preserving all styling and functionality.