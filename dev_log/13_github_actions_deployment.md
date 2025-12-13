# Unit 13: GitHub Actions & Deployment

## Objective

Configure GitHub Actions workflow for automated deployment of the MMDD Astro site to GitHub Pages with custom domain (mmdd.dev). Adapt the existing discover project deployment workflow for Astro build process and validation.

## Implementation

### Technical Approach

1. **Create GitHub Actions Workflow**
   - Adapt discover project's `.github/workflows/deploy.yml`
   - Update for Astro build process (`npm run build`)
   - Maintain manual trigger via `workflow_dispatch`
   - Use Node.js 22.x (current project version)

2. **Build Validation**
   - Validate Astro build output in `dist/` directory
   - Check for index.html, CSS, and JS assets
   - Verify RSS feed and sitemap generation
   - Ensure favicon and images are included

3. **MMDD Guide Integration**
   - Download latest `00_mmdd.md` from main MMDD repository
   - Place in build output for direct access
   - Maintain compatibility with existing links

4. **Custom Domain Setup**
   - Add CNAME file with `mmdd.dev`
   - Configure GitHub Pages deployment
   - Ensure proper DNS configuration

5. **Deployment Process**
   - Use `peaceiris/actions-gh-pages@v3` for deployment
   - Deploy `dist/` directory to `gh-pages` branch
   - Configure custom domain in deployment

### Key Decisions

- **Trigger:** Manual deployment via workflow_dispatch (same as discover)
- **Node.js:** Version 22.x (matching current development environment)
- **Build Command:** `npm run build` (Astro standard)
- **Validation:** Comprehensive checks for Astro-specific outputs
- **Domain:** mmdd.dev (same custom domain as discover)

### Files to Create

**New files:**
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `CNAME` - Custom domain configuration (optional, workflow creates it)

### Workflow Configuration

**Build Process:**
1. Checkout repository
2. Setup Node.js 22.x with npm caching
3. Install dependencies (`npm install`)
4. Build Astro site (`npm run build`)
5. Download latest MMDD guide
6. Validate build output
7. Add CNAME file
8. Deploy to GitHub Pages

**Validation Checks:**
- `dist/index.html` exists and contains MMDD content
- CSS and JS assets generated in `dist/_astro/`
- RSS feed available at `dist/rss.xml`
- Sitemap files generated (`sitemap-index.xml`, `sitemap-0.xml`)
- Favicon copied to `dist/favicon.svg`
- Hero background images processed

**Environment:**
- Ubuntu latest runner
- Node.js 22.x (latest stable)
- npm package manager with caching
- Manual trigger for controlled deployments

### Success Criteria

- [ ] GitHub Actions workflow created and configured
- [ ] Workflow builds Astro site successfully
- [ ] Build validation passes all checks
- [ ] MMDD guide downloaded and included
- [ ] Custom domain (mmdd.dev) configured
- [ ] Deployment to GitHub Pages successful
- [ ] Site accessible at https://mmdd.dev
- [ ] All features work in production (RSS, sitemap, analytics)

## Status: Complete

Successfully implemented GitHub Actions deployment workflow for Astro site:
- ✓ GitHub Actions workflow created and configured
- ✓ Workflow builds Astro site with `npm run build`
- ✓ Comprehensive build validation for Astro-specific outputs
- ✓ MMDD guide download and integration
- ✓ Custom domain (mmdd.dev) configured with CNAME
- ✓ Deployment to GitHub Pages with peaceiris/actions-gh-pages@v3
- ✓ Manual trigger via workflow_dispatch for controlled deployments
- ✓ Node.js 22.x environment matching development setup

The deployment workflow is ready to replace the discover project and deploy the new Astro-based MMDD site to https://mmdd.dev with comprehensive validation and proper asset handling.
