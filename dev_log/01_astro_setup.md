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

[To be documented during implementation]

## Files Modified

[To be documented during implementation]

## Status: In Progress

[To be updated upon completion]
