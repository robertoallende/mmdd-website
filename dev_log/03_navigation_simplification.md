# Unit 03: Navigation Simplification

## Objective

Simplify the site navigation and UI by removing unnecessary DocKit features and keeping only essential elements: a clean horizontal navigation bar with the 5 MMDD pages and theme switcher. Replace image logo with text, remove search, language picker, sidebars, and redundant navigation elements.

## Implementation

### Technical Approach

1. **Fix Logo - Text Only**
   - Remove logo image references in `src/config/config.json`
   - Replace with text: "MMDD" or "Micromanaged Driven Development"
   - Update logo configuration to use text instead of image paths
   - Ensure text displays properly without truncation

2. **Remove Second Horizontal Navigation Bar**
   - This is the duplicate navigation below the header
   - Identify which component renders it
   - Disable or remove from layout

3. **Remove Search Bar**
   - Disable search in `src/config/config.json`
   - Set `search: false` in settings
   - Verify search UI elements are hidden

4. **Remove Get Started Button**
   - Disable navigation button in `src/config/config.json`
   - Set `navigation_button.enable: false`
   - Clean up button styling if needed

5. **Remove Language Picker**
   - Simplify or remove locale configuration
   - Since we only have English content, remove multilingual UI
   - Update `src/config/locals.json` or disable language switcher

6. **Remove Left Sidebar Menu**
   - Disable sidebar in Starlight configuration
   - Update `astro.config.mjs` to hide sidebar
   - Or modify component overrides to not display sidebar

7. **Remove Right "On This Page" Sidebar**
   - Disable table of contents sidebar
   - Update Starlight config or component overrides
   - Remove "On This Page" navigation

8. **Verify Clean Layout**
   - Only horizontal navigation bar at top
   - Content takes full width (no sidebars)
   - Theme switcher remains functional
   - Navigation works on desktop and mobile

### Key Decisions

- **Logo:** Text-only, simple "MMDD" or full name
- **Navigation:** Single horizontal bar only (no sidebars, no duplicates)
- **Features to keep:** Theme switcher, core navigation
- **Features to remove:** Search, Get Started button, language picker, both sidebars
- **Mobile:** These changes should automatically improve mobile experience

### Components to Modify

**Configuration files:**
- `src/config/config.json` - Logo, search, navigation button settings
- `src/config/locals.json` - Language/locale settings
- `astro.config.mjs` - Starlight sidebar and navigation configuration

**Potential component overrides:**
- May need to modify header components to remove duplicate nav
- May need to adjust layout components to remove sidebars

### Success Criteria

- [ ] Logo displays as text without truncation
- [ ] Only one horizontal navigation bar visible
- [ ] Search bar removed
- [ ] Get Started button removed
- [ ] Language picker removed
- [ ] Left sidebar completely hidden
- [ ] Right "On This Page" sidebar removed
- [ ] Content spans full width
- [ ] Theme switcher still works
- [ ] Navigation links all functional
- [ ] Layout looks clean on desktop
- [ ] Mobile view improved (likely automatic with these changes)

## AI Interactions

[To be documented during implementation]

## Files Modified

**Expected modifications:**
- `src/config/config.json` - Logo, search, button settings
- `src/config/locals.json` - Locale configuration
- `astro.config.mjs` - Starlight configuration for sidebar/navigation
- Possibly component overrides if config changes aren't sufficient

## Status: In Progress

[To be updated upon completion]
