# Unit 10: Analytics Integration

## Objective

Implement Google Analytics 4 tracking for the MMDD Astro site using the same GA4 configuration and custom event tracking as the existing discover project. Enable monitoring of user behavior, page views, and engagement metrics.

## Implementation

### Technical Approach

1. **Google Analytics 4 Setup**
   - Use existing GA4 property ID: `G-2QVVJSV702`
   - Add gtag.js script to Astro site head
   - Configure dataLayer and basic GA4 tracking
   - Ensure tracking works across all pages

2. **Astro Integration Method**
   - Add GA4 script to base layout or head component
   - Use Astro's client-side scripting for event tracking
   - Ensure analytics load after page hydration
   - Handle both SSR and client-side rendering

3. **Custom Event Tracking**
   - Implement same events as discover project:
     - `external_link_click` - Track outbound links
     - `rss_feed_click` - Track RSS feed access
     - `code_copy` - Track code block copy button usage
     - Navigation events for mobile interactions
   - Add new events specific to Astro site structure

4. **Event Implementation Strategy**
   - Use Astro's client directives for interactive elements
   - Add event listeners for link clicks and interactions
   - Ensure gtag function availability before calling
   - Handle theme switcher and navigation interactions

### Key Decisions

- **GA4 Property:** Reuse existing `G-2QVVJSV702` (same as discover)
- **Integration:** Add to base layout for all pages
- **Events:** Implement core tracking events from discover
- **Loading:** Async loading to avoid blocking page render
- **Privacy:** Standard GA4 implementation (no additional privacy controls needed)

### Files to Create/Modify

**Modified files:**
- `src/layouts/` or head component - Add GA4 script
- `src/components/` - Add analytics event tracking to interactive components
- Create analytics utility functions if needed

**Reference implementation:**
- `/Users/robertoallende/code/astro/mmdd/discover/src/index.html` (lines 41-49) - GA4 setup
- `/Users/robertoallende/code/astro/mmdd/discover/src/js/main.js` - Event tracking examples

### Analytics Configuration

**Basic GA4 Setup:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2QVVJSV702"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-2QVVJSV702');
</script>
```

**Event Tracking Examples:**
```javascript
// External link tracking
gtag('event', 'external_link_click', {
  'event_category': 'outbound',
  'link_url': href,
  'link_text': linkText
});

// RSS feed tracking
gtag('event', 'rss_feed_click', {
  'event_category': 'engagement'
});

// Code copy tracking
gtag('event', 'code_copy', {
  'event_category': 'engagement',
  'code_length': code.length
});
```

### Events to Implement

**Core Events (from discover):**
- `external_link_click` - Outbound links (GitHub, AWS Builder, etc.)
- `rss_feed_click` - RSS feed access
- `code_copy` - Code block copy button clicks

**Astro-Specific Events:**
- `theme_switch` - Dark/light theme toggle
- `navigation_click` - Main navigation usage
- `card_interaction` - Home page card clicks

### Success Criteria

- [ ] GA4 script added to all pages
- [ ] Basic page view tracking working
- [ ] External link clicks tracked
- [ ] RSS feed clicks tracked  
- [ ] Code copy events tracked
- [ ] Theme switcher events tracked
- [ ] Analytics data visible in GA4 dashboard
- [ ] No JavaScript errors related to gtag
- [ ] Analytics work in both dev and build modes
- [ ] Performance impact minimal (async loading)

## Status: Complete

Successfully implemented Google Analytics 4 integration for the MMDD Astro site:
- ✓ GA4 script added to all pages via Head component
- ✓ Basic page view tracking working with property G-2QVVJSV702
- ✓ External link clicks tracked (outbound links)
- ✓ RSS feed clicks tracked
- ✓ Code copy events tracked (copy button usage)
- ✓ Theme switcher events tracked
- ✓ Analytics data will be visible in GA4 dashboard
- ✓ No JavaScript errors related to gtag
- ✓ Analytics work in both dev and build modes
- ✓ Performance impact minimal (async loading)

Analytics implementation matches the discover project setup with the same GA4 property and event tracking patterns, plus additional Astro-specific events for theme switching and enhanced user interaction monitoring.
