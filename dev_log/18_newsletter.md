# Unit 18: Newsletter Subscription Form

## Objective

Add a MailerLite-powered newsletter subscription form to every content page on the MMDD website, styled to match the existing content sections rather than appearing as a separate footer element.

## Implementation

### Approach
- Created a reusable `Newsletter.astro` component that renders as a content section with heading, description, email input, and subscribe button
- Stripped MailerLite's heavy embed CSS (~400 lines) and replaced with Tailwind classes using the site's CSS variables for full dark/light mode support
- Added the component inside the `<article>` tag on all 4 content pages (Home, How It Works, Updates, About)
- Preserved MailerLite's form submission, validation, and success callback functionality

### Key Decisions
- **Placement:** Inside the article content area (not in the footer) — feels like a natural continuation of the page content
- **Styling:** Uses `not-prose` to escape Tailwind Typography defaults, styled with site CSS variables for theme consistency
- **Copy:** "Stay up to date with new releases, tools, and tips for MMDD. Very low frequency — no spam."
- **Layout:** Horizontal email + button on desktop, stacked on mobile, max-width constrained
- **Separation:** Subtle top border with spacing to distinguish from page content

### Additional Change
- Made the YouTube video on the home page responsive (full content width, 16:9 aspect ratio via `aspect-ratio: 16/9`)

## Files Modified

- `src/components/Newsletter.astro` (new) — Reusable newsletter form component
- `src/pages/index.astro` — Added Newsletter component
- `src/pages/how-it-works.astro` — Added Newsletter component
- `src/pages/updates.astro` — Added Newsletter component
- `src/pages/about.astro` — Added Newsletter component
- `src/content/docs/home.md` — Made YouTube iframe responsive

## MailerLite Integration Details

- Account ID: `2580225`
- Form ID: `44905619`
- Form action: `https://assets.mailerlite.com/jsonp/2580225/forms/196043191174038641/subscribe`
- Success callback: `ml_webform_success_44905619()`
- JS SDK: `https://groot.mailerlite.com/js/w/webforms.min.js`

## Status: Complete
