# Unit 01: Astro Setup & Theme Selection

## Objective

Integrate the DocKit Astro theme into the remake project, configure basic site settings, and verify the development environment works correctly. This establishes the foundation for content migration in Unit 02.

## Implementation

### Technical Approach

1. **Copy DocKit files to remake**
   - Preserve remake's `.git` directory and git history
   - Preserve remake's `dev_log/` directory with MMDD documentation
   - Copy DocKit's structure: `src/`, `public/`, `astro.config.mjs`, configuration files
   - Copy `package.json` and merge dependencies

2. **Convert from yarn to npm**
   - Remove `yarn.lock` if present
   - Use npm for package management (consistent with remake's setup)
   - Generate `package-lock.json` via `npm install`

3. **Configure basic site settings**
   - Update `src/config/config.json`:
     - Site title: "Micromanaged Driven Development"
     - Site description: Appropriate MMDD description
     - Author and contact information
   - Keep other DocKit defaults for now

4. **Preserve example content**
   - Keep DocKit's example documentation pages
   - These will be replaced in Unit 02 during content migration
   - Useful for verifying theme functionality

5. **Verify development environment**
   - Run `npm install` to install dependencies
   - Run `npm run dev` to start development server
   - Verify site loads at localhost:4321
   - Check that Starlight/DocKit theme renders correctly

### Key Decisions

- **Package Manager:** npm (not yarn)
- **Example Content:** Keep until Unit 02
- **Site Title:** "Micromanaged Driven Development"
- **Integration Method:** File copy, preserving git history and dev_log
- **Node Version:** v22.19.0 (verified compatible)

### Files to be Copied/Modified

**Copied from DocKit:**
- `src/` (complete directory structure)
- `public/` (static assets)
- `astro.config.mjs` (Astro + Starlight configuration)
- `tsconfig.json` (TypeScript configuration)
- `package.json` (dependencies)
- `.gitignore` (merge with existing)
- `netlify.toml` (deployment config, may remove later)

**Preserved from remake:**
- `.git/` (git history)
- `dev_log/` (MMDD documentation)
- `README.md` (project readme)

**Modified:**
- `src/config/config.json` (update site title and details)
- `package.json` (merge dependencies, ensure npm scripts)
- `.gitignore` (merge both versions)

### Success Criteria

- [ ] All DocKit files successfully copied to remake
- [ ] Git history and dev_log preserved
- [ ] Dependencies installed via npm (package-lock.json generated)
- [ ] Site title updated to "Micromanaged Driven Development"
- [ ] Development server runs without errors
- [ ] Theme renders correctly in browser
- [ ] No yarn artifacts remaining (yarn.lock removed)

## AI Interactions

- Initial exploration of DocKit theme structure and features
- Discussion of package manager choice (npm vs yarn)
- Decision on example content retention strategy
- Configuration of site title and basic settings
- Systematic implementation with todo tracking

## Files Modified

**Copied from DocKit:**
- `src/` - Complete source directory with components, content, config, styles
- `public/` - Static assets and images
- `astro.config.mjs` - Starlight configuration with custom components
- `tsconfig.json` - TypeScript configuration

**Modified:**
- `package.json` - Updated name to "remake", description for MMDD, kept all DocKit dependencies
- `src/config/config.json` - Updated site title to "Micromanaged Driven Development", logo_text to "MMDD"

**Preserved:**
- `.git/` - Git history maintained
- `dev_log/` - MMDD documentation structure intact
- `README.md` - Project documentation
- `.gitignore` - Existing file (already compatible)

**Generated:**
- `package-lock.json` - NPM dependency lock file (442 packages installed)
- `node_modules/` - Dependencies installed successfully with 0 vulnerabilities

## Status: Complete

Successfully integrated DocKit Astro theme into remake project. Development environment verified working:
- All DocKit files copied and configured
- Converted from yarn to npm (package-lock.json generated)
- Site title updated to "Micromanaged Driven Development"
- Dependencies installed (442 packages, 0 vulnerabilities)
- Dev server tested and running successfully on http://localhost:4321/
- Example content preserved for Unit 02 content migration

Astro v5.16.5 running on Node v22.19.0. Theme renders correctly with Starlight framework.
