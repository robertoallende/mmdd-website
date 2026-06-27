# Unit 15: Compass Theme Migration - Subunit 005: Styling & Theming

## Objective
Migrate visual styling to Compass's approach, preserving mmdd's light/dark mode, typography choices, and code block appearance.

## Implementation

### Replace Styling Architecture
Current:
- `src/styles/global.css` (Starlight overrides)
- `src/styles/base.css`
- `src/styles/components.css`
- `src/styles/button.css`
- `src/styles/navigation.css`
- `src/tailwind-plugin/tw-bs-grid.js` (Bootstrap grid plugin)
- `src/tailwind-plugin/tw-theme.js` (theme variables)

Target:
- `src/index.css` (single Compass stylesheet with Tailwind)
- Tailwind utilities via `@tailwindcss/typography`

### Typography
- Compass uses Geist (variable) and Geist Mono fonts
- Preserve Unit 14's font size improvements (reduced H1/H2)
- Apply via `public/fonts/` and CSS `@font-face`

### Dark Mode
- Compass has built-in light/dark toggle in Header
- Verify mmdd content looks correct in both modes
- Port any custom dark mode overrides

### Code Blocks
- Compass uses Shiki with `github-light` / `github-dark` themes
- Current site uses Expressive Code (Starlight) with gray boxes + copy button
- Configure Shiki to match desired appearance
- Verify code copy button works (Compass's article-enhancements.ts)

### Cleanup
- Remove `src/tailwind-plugin/` directory
- Remove old `src/styles/` files
- Remove `src/config/theme.json`

## Files Modified
- `src/index.css` (new, replaces styles/)
- `public/fonts/` (Geist fonts)
- Remove `src/styles/`
- Remove `src/tailwind-plugin/`

## Status: Not Started
