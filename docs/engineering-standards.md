# Engineering standards

Baseline rules for this codebase, decided before scaffolding so they shape the build from
the first commit rather than getting bolted on later. These apply to every page/component
added to the site.

## Mobile-first

Design and build for the smallest viewport first, then progressively enhance up to desktop
— not the reverse. Concretely:

- Write base CSS for mobile; add complexity via `min-width` media queries (never
  `max-width` overrides that undo a desktop-first layout).
- Layouts use responsive grids/flexbox that reflow at every breakpoint, not just one
  "tablet" and one "desktop" snapshot.
- Touch targets sized for fingers (44×44px minimum), not just mouse pointers.
- Test the actual mobile viewport during development, not just a resized desktop browser
  window.

## Performance & speed

- Target page load under 2 seconds.
- Compress all images and media before they ship — use Astro's built-in `<Image />` /
  `astro:assets` pipeline (automatic responsive sizing, modern formats like WebP/AVIF)
  rather than dropping raw exports into `public/`.
- Keep code clean and minimal — this is also why the stack has no Tailwind and no animation
  library (see `docs/architecture.md`); every dependency added is weighed against its
  payload cost.
- Cloudflare Pages' CDN (already the hosting choice — see `docs/architecture.md`) covers
  fast delivery; don't add a second CDN/asset host on top of it.
- Automated regression check: `.github/workflows/lighthouse.yml` runs Lighthouse CI
  (`@lhci/cli`) against the production build on every PR into `main` (and on push to
  `main`), asserting Performance/Best-Practices/SEO ≥ 0.9 and Accessibility ≥ 0.95 (see
  `site/lighthouserc.json`). This is a PR-time check only — it runs in GitHub Actions and
  is separate from the actual Cloudflare deploy, which still goes straight from `main`
  through Cloudflare's own dashboard git integration.

## Design & experience

- Clean, uncluttered layouts — no filler sections just to fill space.
- Navigation must be obvious at a glance; no hidden/hamburger-only nav on desktop, no more
  than one level of nesting.
- Responsive grids for every screen size, not fixed pixel widths.
- High contrast text — verify against the color tokens in `docs/design-system.md`.
  `--ash` on `--paper` checked 2026-08-16: ~5:1, fine. `--signal`/`--spark` as TEXT color
  were found failing (~1.6:1 / ~2.7:1 on light) and fixed via `--link`/`--link-orange` — see
  design-system.md's Color section for which token to use where.

## Accessibility

- Meet WCAG 2.1 AA as the baseline for all pages.
- Every image gets meaningful `alt` text (empty `alt=""` only for purely decorative images).
- Semantic HTML first (`<nav>`, `<button>`, `<article>`, heading hierarchy) — ARIA
  attributes are a fallback, not the default approach.
- Keyboard navigation must work end-to-end (focus states visible, logical tab order, no
  keyboard traps).

## Security

- HTTPS everywhere — Cloudflare Pages provides this by default; never link to or embed
  `http://` resources.
- No secrets/API keys committed to the repo, ever — use Cloudflare Pages environment
  variables/secrets for anything sensitive (e.g. a future contact-form backend).
- Security headers set via `site/public/_headers` (Cloudflare Pages' header-injection
  mechanism): CSP (script-src pinned to sha256 hashes of the two inline scripts in
  `Base.astro`, not `'unsafe-inline'` — regenerate the hashes if those scripts change),
  `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS.
- Whatever the contact method turns out to be (see `docs/open-decisions.md`), it must not
  collect more visitor data than the stated purpose requires, and must not log or store
  submissions anywhere insecure.
