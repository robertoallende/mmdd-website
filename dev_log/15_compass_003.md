# Unit 15: Compass Theme Migration - Subunit 003: Content Migration

## Objective
Convert all existing MMDD content from Starlight's docs format to Compass's folder-per-article MDX pattern with updated frontmatter.

## Implementation

### Content Structure Conversion
Current structure (Starlight):
```
src/content/docs/
├── how-it-works.mdx
├── news.mdx
├── community.mdx
└── about.mdx
```

Target structure (Compass):
```
src/content/docs/
├── methodology/
│   └── how-it-works/
│       └── how-it-works.mdx
├── updates/
│   └── news/
│       └── news.mdx
└── about/
    ├── about-mmdd/
    │   └── about-mmdd.mdx
    └── community/
        └── community.mdx
```

### Frontmatter Migration
From Starlight schema:
```yaml
title: "Page Title"
description: "..."
template: splash
```

To Compass schema:
```yaml
title: "Page Title"
description: "..."
category: "methodology"
order: 1
status: "published"
updatedAt: 2026-06-27
```

### Content Config
- Rewrite `src/content.config.ts` to use Compass's content collection schema
- Remove Starlight's `docsLoader`/`docsSchema` imports
- Remove `i18n` and `ctaSection` collections

### Validation
- All pages render without errors
- Content displays correctly with proper formatting
- Internal links still work

## Files Modified
- `src/content/docs/` (restructured)
- `src/content.config.ts` (rewritten)
- Remove `src/content/i18n/`
- Remove `src/content/sections/`

## Status: Not Started
