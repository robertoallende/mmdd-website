# Unit 15: Compass Theme Migration - Subunit 008: Build, Deploy & Validation

## Objective
Verify the production build works end-to-end, update CI/CD pipeline, and confirm the live site at mmdd.dev functions correctly.

## Implementation

### Build Verification
- `npm run build` completes without errors
- Pagefind index is generated in `dist/pagefind/`
- All HTML pages generated in `dist/`
- Static assets (fonts, images, icons) present in output
- `npm run preview` serves the site correctly with working search

### Update GitHub Actions Workflow
- Review `.github/workflows/deploy.yml`
- Ensure Node.js version matches Compass requirements (>=18.17.0)
- Update build command to include Pagefind: `npm run build` (already includes `&& pagefind --site dist`)
- Verify deployment target is still GitHub Pages

### Custom Domain
- Confirm `CNAME` file contains `mmdd.dev`
- Verify DNS configuration still valid after migration
- Test HTTPS works correctly

### Production Validation
- [ ] All pages load without errors
- [ ] Search works on production
- [ ] RSS feed accessible at /rss.xml
- [ ] Sitemap accessible at /sitemap-index.xml
- [ ] Analytics tracking fires correctly
- [ ] Favicon displays in browser tab
- [ ] OG image works for social sharing
- [ ] No console errors in browser dev tools
- [ ] Lighthouse score acceptable (performance, accessibility, SEO)

### Cleanup
- Remove old Starlight override components (`src/components/override-components/`)
- Remove unused config files (`src/config/menu.*.json`, `src/config/sidebar.json`, etc.)
- Remove unused assets (`src/assets/hero-bg-*.png`, `src/assets/doc-bg.png`)
- Update README.md to reflect new architecture

## Files Modified
- `.github/workflows/deploy.yml` (if needed)
- `README.md` (updated)
- Various files removed (cleanup)

## Status: Not Started
