# Unit 09: RSS Feed Generation

## Objective

Implement RSS feed generation for the MMDD site that automatically creates an RSS feed from the news.md content, similar to the existing Vite-based implementation. The RSS feed should be generated during build and accessible at `/rss.xml`.

## Implementation

### Technical Approach

1. **Astro RSS Integration**
   - Use Astro's built-in RSS support via `@astrojs/rss` package
   - Create RSS endpoint at `src/pages/rss.xml.js`
   - Parse news.md content to extract articles
   - Generate RSS feed with proper metadata

2. **Content Parsing Strategy**
   - Parse `src/content/docs/news.md` markdown content
   - Extract articles using existing logic from discover's rss-plugin.js
   - Handle date parsing (formats: "November 10, 2025", "2025")
   - Extract title, description, link, and publication date

3. **RSS Feed Structure**
   - Channel metadata: "MMDD Methodology News"
   - Site URL: https://mmdd.dev
   - Language: en-US
   - Managing editor: team@mmdd.dev
   - Generator: Astro RSS
   - Items: Parsed from news.md with CDATA descriptions

4. **Article Parsing Logic**
   - Split content by `## ` headers (article titles)
   - Extract date from lines following pattern (Month Day, Year)
   - Collect description text until "Read more" link
   - Extract external link from "**[Read more →](url)**" pattern
   - Generate GUID from title slug

### Key Decisions

- **RSS Package:** Use `@astrojs/rss` (Astro's official RSS package)
- **Content Source:** Parse existing `news.md` file (no content restructuring)
- **Build Integration:** RSS generated during Astro build process
- **URL Structure:** Available at `/rss.xml` (matches current production)
- **Parsing Logic:** Adapt existing Vite plugin logic to Astro context

### Files to Create/Modify

**New files:**
- `src/pages/rss.xml.js` - RSS endpoint that parses news.md and generates feed

**Modified files:**
- `package.json` - Add @astrojs/rss dependency
- `src/content/docs/news.md` - Ensure consistent formatting for parsing

**Reference files:**
- `/Users/robertoallende/code/astro/mmdd/discover/src/plugins/rss-plugin.js` - Existing parsing logic
- `/Users/robertoallende/code/astro/mmdd/rss.xml` - Current production RSS format

### RSS Feed Metadata

```xml
<channel>
  <title>MMDD Methodology News</title>
  <description>Latest news and updates from the Micromanaged Driven Development framework</description>
  <link>https://mmdd.dev</link>
  <language>en-US</language>
  <managingEditor>team@mmdd.dev (MMDD Team)</managingEditor>
  <webMaster>team@mmdd.dev (MMDD Team)</webMaster>
  <generator>Astro RSS</generator>
</channel>
```

### Article Structure

Each news article should be parsed to extract:
- **Title:** From `## Article Title` headers
- **Date:** From date lines (various formats)
- **Description:** Content between title and "Read more" link
- **Link:** From `**[Read more →](url)**` pattern
- **GUID:** Generated from title slug with "mmdd-" prefix

### Success Criteria

- [ ] @astrojs/rss package installed and configured
- [ ] RSS endpoint created at `/rss.xml`
- [ ] News.md content successfully parsed into articles
- [ ] RSS feed matches production format and structure
- [ ] All 6 current news articles appear in feed
- [ ] Dates parsed correctly from various formats
- [ ] External links extracted properly
- [ ] RSS validates against RSS 2.0 specification
- [ ] Feed accessible during development and build
- [ ] RSS link in news.md footer works correctly

## Status: Complete

Successfully implemented RSS feed generation for the MMDD site:
- ✓ @astrojs/rss package installed and configured
- ✓ RSS endpoint created at `/rss.xml`
- ✓ News.md content successfully parsed into articles
- ✓ RSS feed matches production format and structure
- ✓ All 6 current news articles appear in feed
- ✓ Dates parsed correctly from various formats
- ✓ External links extracted properly
- ✓ RSS validates against RSS 2.0 specification
- ✓ Feed accessible during development and build
- ✓ RSS link in news.md footer works correctly

RSS feed is now automatically generated during Astro build process and available at `/rss.xml` with proper metadata and all news articles parsed from the existing news.md content.
