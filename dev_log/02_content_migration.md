# Unit 02: Content Migration

## Objective

Migrate all 5 MMDD content files from discover to remake, replacing DocKit's example content with MMDD methodology documentation. Configure Starlight navigation for a flat structure and adapt frontmatter to Starlight's format.

## Implementation

### Technical Approach

1. **Remove DocKit Example Content**
   - Delete all example documentation directories:
     - `src/content/docs/getting-started/`
     - `src/content/docs/contents/`
     - `src/content/docs/configurations/`
     - `src/content/docs/reference/`
     - `src/content/docs/fr/` (French translations)
   - Remove example pages:
     - `src/content/docs/privacy-policy.md`
     - `src/content/docs/terms-conditions.md`
     - `src/content/docs/about.md` (DocKit's about, not ours)
     - `src/content/docs/404.md`
   - Keep only the structure needed for MMDD content

2. **Migrate MMDD Content Files**
   Copy and adapt 5 files from `discover/src/content/` to `remake/src/content/docs/`:

   **Files to migrate:**
   - `home.md` (1,990 bytes) → `index.md` (replace DocKit splash)
   - `how-it-works.md` (3,507 bytes) → `how-it-works.md`
   - `news.md` (4,307 bytes) → `news.md` (external links page)
   - `community.md` (625 bytes) → `community.md`
   - `about.md` (1,810 bytes) → `about.md`

3. **Adapt Frontmatter**
   Convert discover frontmatter format to Starlight format:

   **Discover format:**
   ```yaml
   ---
   title: "Page Title"
   section: "section-name"
   order: 1
   description: "Description text"
   keywords: "keyword1, keyword2"
   ---
   ```

   **Starlight format:**
   ```yaml
   ---
   title: Page Title
   description: Description text
   ---
   ```

   **Changes:**
   - Keep: `title`, `description`
   - Remove: `section`, `order` (handled by sidebar config)
   - Remove: `keywords` (SEO handled differently in Starlight)
   - Remove quotes unless necessary

4. **Configure Sidebar Navigation**
   Update `src/config/sidebar.json` for flat MMDD structure:

   ```json
   {
     "main": [
       {
         "label": "Home",
         "slug": "index"
       },
       {
         "label": "How It Works",
         "slug": "how-it-works"
       },
       {
         "label": "News",
         "slug": "news"
       },
       {
         "label": "Community",
         "slug": "community"
       },
       {
         "label": "About",
         "slug": "about"
       }
     ]
   }
   ```

5. **Handle Home Page Special Case**
   - Rename `home.md` to `index.md` (Starlight convention for home)
   - Remove `template: splash` from index.mdx
   - Use standard documentation template for consistency
   - Home becomes first page in sidebar

6. **Verify Content Rendering**
   - Test each page loads correctly
   - Verify navigation works
   - Check that markdown formatting is preserved
   - Ensure links work (especially in news.md)

### Key Decisions

- **Navigation:** Flat structure with 5 pages at root level
- **Home page:** Replace DocKit splash with home.md content (as index.md)
- **Example content:** Remove all DocKit examples in this unit
- **Frontmatter:** Adapt to Starlight format (remove section, order, keywords)
- **File naming:** home.md → index.md for Starlight home page convention

### Success Criteria

- [ ] All DocKit example content removed
- [ ] 5 MMDD content files migrated to src/content/docs/
- [ ] Frontmatter converted to Starlight format
- [ ] Sidebar navigation configured with flat structure
- [ ] Home page (index.md) loads with MMDD home content
- [ ] All 5 pages accessible and rendering correctly
- [ ] Navigation menu shows all pages in correct order
- [ ] No broken links or missing content

## AI Interactions

- Systematic file-by-file migration with frontmatter adaptation
- Removed unnecessary frontmatter fields (section, order, keywords)
- Configured flat navigation structure for simple site architecture
- Verified all content renders correctly with dev server

## Files Modified

**Files deleted:**
- `src/content/docs/index.mdx` (DocKit splash page)
- `src/content/docs/getting-started/` (entire directory)
- `src/content/docs/contents/` (entire directory)
- `src/content/docs/configurations/` (entire directory)
- `src/content/docs/reference/` (entire directory)
- `src/content/docs/fr/` (entire directory)
- `src/content/docs/privacy-policy.md`
- `src/content/docs/terms-conditions.md`
- `src/content/docs/about.md` (DocKit version)
- `src/content/docs/404.md`

**Files to be created:**
- `src/content/docs/index.md` (from home.md)
- `src/content/docs/how-it-works.md`
- `src/content/docs/news.md`
- `src/content/docs/community.md`
- `src/content/docs/about.md` (MMDD version)

**Files modified:**
- `src/config/sidebar.json` - Updated with flat MMDD navigation structure

## Status: Complete

Successfully migrated all MMDD content from discover to remake:
- Removed all DocKit example content (getting-started, contents, configurations, reference, French translations)
- Migrated 5 MMDD markdown files with adapted frontmatter
- Converted frontmatter from discover format (section, order, keywords) to Starlight format (title, description)
- Renamed home.md to index.md for Starlight home page convention
- Configured flat sidebar navigation with 5 pages in order
- Verified all pages render correctly without errors
- Dev server starts successfully and all content displays properly

All success criteria met. Site now shows MMDD content with clean navigation structure.
