# Unit 17: Init Script

## Objective

Serve `mmdd_init.sh` at `https://mmdd.dev/mmdd_init.sh` and update all Quick Start sections across the website to use the one-liner bootstrap command.

## Implementation

**Deploy workflow (`.github/workflows/deploy.yml`):**
- Download `mmdd_init.sh` from the main MMDD repository into `dist/`
- Add validation step to confirm the file exists in build output

**Content updates:**
- `src/content/docs/home.md` — Replace multi-step Quick Start with `curl -sL https://mmdd.dev/mmdd_init.sh | bash`
- `src/content/docs/how-it-works.mdx` — Replace bottom "try it" snippet with the same one-liner

## Files Modified

- `.github/workflows/deploy.yml`
- `src/content/docs/home.md`
- `src/content/docs/how-it-works.mdx`

## Status: Complete
