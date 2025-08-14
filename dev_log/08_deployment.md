# Unit 08: GitHub Pages Deployment & HTTPS Setup

## Objective
Set up professional deployment pipeline for the MMDD website using GitHub Actions with manual deployment triggers, build validation, and custom domain configuration at mmdd.dev with HTTPS.

## Implementation
Deploy the website using GitHub Pages with private repository support, manual control, and comprehensive validation:

### Deployment Strategy:
- **Custom Domain**: https://mmdd.dev/ (root domain)
- **Manual Control**: GitHub Actions workflow with manual dispatch button
- **Repository**: Private (GitHub Pro/Team plan required)  
- **Build Validation**: Linting + content verification (no unit tests)
- **Source**: Deploy directly from main branch

### Subunit Structure:

#### 08.1: Manual Deployment Workflow
- Create `.github/workflows/deploy.yml` with `workflow_dispatch` trigger
- Add "Run workflow" button accessible in GitHub UI
- Configure Node.js setup, dependency installation, and build process
- Deploy built assets to GitHub Pages

#### 08.2: Build Validation & Testing
- Integrate linting step into deployment workflow
- Content verification: ensure `dist/` contains required HTML files and assets
- Basic smoke test: verify markdown processing completed successfully
- Fail deployment pipeline if any validation step fails

#### 08.3: GitHub Pages Configuration
- Configure GitHub Pages for private repository (requires paid plan)
- Set up Pages to serve from deployment artifacts
- Add `CNAME` file containing `mmdd.dev` to build output
- Enable custom domain in repository settings

#### 08.4: Domain DNS Setup & HTTPS
- Configure DNS A/CNAME records pointing mmdd.dev to GitHub Pages
- Provide specific DNS configuration instructions
- Enable "Enforce HTTPS" in GitHub Pages settings
- Test complete workflow: manual trigger → build → validation → deploy → live at https://mmdd.dev

## AI Interactions
Systematic deployment setup approach:
1. Create GitHub Actions workflow with manual triggers
2. Implement build validation and content testing
3. Configure GitHub Pages for custom domain
4. Set up DNS records and HTTPS enforcement
5. Test complete deployment pipeline end-to-end
6. Document manual deployment process for future use

## Files Modified
**To be created:**
- `.github/workflows/deploy.yml` (GitHub Actions deployment workflow)
- Additional validation scripts if needed
- `CNAME` file configuration in build output

**To be configured:**
- GitHub repository settings (Pages, custom domain)
- DNS records for mmdd.dev domain
- HTTPS enforcement settings

## Status: Complete
Successfully implemented professional GitHub Pages deployment pipeline with manual control, comprehensive validation, and custom domain configuration.

## Final Implementation Summary:
- **Deployment URL**: https://mmdd.dev (live and working)
- **Manual Control**: GitHub Actions "Run workflow" button 
- **Build Validation**: Linting + content verification prevents broken deployments
- **Repository**: Public repository with GitHub Pages enabled
- **Domain Configuration**: DNS A records pointing mmdd.dev to GitHub Pages servers
- **HTTPS**: Automatically enabled and enforced by GitHub Pages