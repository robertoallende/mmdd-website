# Unit 02: Content Extraction

## Objective
Extract each HTML content section into separate Markdown files with consistent frontmatter, removing system status content while preserving styling elements and converting code examples to markdown format.

## Implementation
Extract 5 content sections from ui/index.html into individual .md files in src/content/:

### Files to Create:
- `home.md` - Main landing content with features list
- `how-it-works.md` - Architecture and workflow information  
- `news.md` - All news items in single file
- `community.md` - Developer network and contribution info
- `about.md` - Framework origins and team information

### Frontmatter Schema:
```yaml
---
title: "Section Title"
section: "section-id" 
order: 1
description: "Brief description for SEO meta"
---
```

### Content Processing Rules:
- **Remove**: All data-readout boxes with fake system metrics (SYSTEM STATUS, VERSION, etc.)
- **Keep**: HTML styling elements within markdown for design reference
- **Convert**: Code examples to markdown code fences (```)
- **Preserve**: News item structure, links, existing styling classes
- **Maintain**: Original content hierarchy and text

### File Naming Convention:
Files match section IDs from original HTML for easy template integration:
- home.md → #home section
- how-it-works.md → #how-it-works section  
- news.md → #news section
- community.md → #community section
- about.md → #about section

## AI Interactions
Will use systematic extraction approach:
1. Read original HTML content section by section
2. Convert each section preserving structure
3. Add appropriate frontmatter
4. Remove system status elements
5. Validate markdown syntax

## Files Modified
**Created:**
- src/content/home.md
- src/content/how-it-works.md
- src/content/news.md
- src/content/community.md
- src/content/about.md

## Status: Complete
Successfully extracted all 5 content sections from ui/index.html to individual markdown files with consistent frontmatter. Removed system status elements and preserved styling for design reference.