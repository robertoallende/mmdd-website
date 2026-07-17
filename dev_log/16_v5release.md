# Unit 16: MMDD v5 Website Update

## Objective

Update the MMDD website to reflect the v5.0.0 release: serve `00_kanban.md` alongside `00_mmdd.md`, add v5 release announcement, and update download references across all pages.

## Implementation

- Updated GitHub Actions deploy workflow to download both `00_mmdd.md` and `00_kanban.md` from the main repository into `dist/`
- Added build validation for `00_kanban.md` presence
- Updated home page quick start to reference v5 and include optional kanban download
- Updated How It Works page download section from v4.0 to v5.0 with kanban curl
- Added v5.0 release announcement to the news/updates page

## Files Modified

- `.github/workflows/deploy.yml` — download and validate `00_kanban.md`
- `src/content/docs/home.md` — quick start updated for v5, added kanban curl
- `src/content/docs/how-it-works.mdx` — download section updated to v5.0
- `src/content/docs/news.md` — v5.0 release announcement added

## Status: Complete
