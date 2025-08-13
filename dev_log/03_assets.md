# Unit 03: Asset Organization

## Objective
Move CSS from inline styles to separate src/css/styles.css file and JavaScript from inline to src/js/main.js file, then configure Vite to process these assets properly.

## Implementation
Extract and organize assets from ui/index.html:

### CSS Extraction:
- Extract all `<style>` content from lines 8-393 in ui/index.html
- Create src/css/styles.css with extracted CSS
- Maintain exact styling to preserve existing design
- Remove inline styles from HTML template

### JavaScript Extraction:
- Extract script content from lines 626-684 in ui/index.html  
- Create src/js/main.js with tab functionality
- Preserve showSection() function and event listeners
- Remove inline script from HTML template

### Directory Structure:
```
src/
├── content/ (already created)
├── css/
│   └── styles.css
└── js/
    └── main.js
```

### Vite Asset Configuration:
- Ensure Vite can process CSS and JS imports
- Maintain asset references for build output
- Configure proper asset handling for production builds

## AI Interactions
Systematic asset extraction approach:
1. Read ui/index.html to identify CSS and JS sections
2. Extract CSS maintaining formatting and comments
3. Extract JavaScript preserving functionality
4. Create organized file structure
5. Prepare for Vite integration

## Files Modified
**Created:**
- src/css/styles.css (extracted from inline styles)
- src/js/main.js (extracted from inline script)

**Directories Created:**
- src/css/
- src/js/

## Status: Complete
Successfully extracted CSS styles and JavaScript functionality from ui/index.html into organized separate files. Assets are ready for Vite integration.