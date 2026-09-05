# Design system

Brand colors were locked in during logo work. **As of 2026-08-11, the current accurate
reference is [`assets/brand/haxbyte-mark-source.png`](./assets/brand/haxbyte-mark-source.png)
/ [`haxbyte-logo-source.png`](./assets/brand/haxbyte-logo-source.png)** (a crop from the
actual chosen DALL-E concept, panel 04 of a 5-up grid — mirrored from
`career-development/projects/haxbyte-assets/`). Older hand-authored SVGs
(`haxbyte-icon.svg`, `haxbyte-logo.svg`, etc., still only in the `career-development` repo)
were made from a written description before that concept was pinned down and don't match
it — see [`assets/brand/README.md`](./assets/brand/README.md) for specifics and the plan to
redraw them as flat vectors from the new reference.

**Updated 2026-08-15:** the site now ships a real light/dark toggle (see Color below), which
superseded the earlier plan to hardcode a dark "ink" hero regardless of viewer theme — a
fixed dark hero on an otherwise-toggleable page read as broken/half-switched once the toggle
existed, and conflicted with the actual goal (one consistent tone per page load, in either
theme). The hero is distinguished from the body by type and an ambient circuit-trace field
(ink-colored and faint in light mode, teal and brighter in dark mode) rather than by a
separate colored container. This still avoids the dark-bg-with-single-accent AI-design
cliché — the two themes are complete, considered palettes, not "dark mode as an
afterthought."

## Color

Brand constants (fixed values, theme-independent):

| Token      | Hex       | Role                                                  |
|------------|-----------|--------------------------------------------------------|
| `--ink`    | `#0B1220` | Dark brand navy — base for the dark palette below        |
| `--paper`  | `#EEF1EF` | Light brand neutral — base for the light palette below   |
| `--signal` | `#2DD4BF` | Brand teal accent — constant across both themes           |
| `--spark`  | `#E8703F` | Warm ember accent — constant across both themes           |
| `--ash`    | `#5B6A66` | Muted secondary text (light-mode value)                   |
| `--white`  | `#FFFFFF` |                                                           |

Semantic theme tokens (flip between light/dark; drive body background/text, nav, cards,
footer, and the hero's trace treatment) — `--bg`, `--surface`, `--surface-2` /
`--surface-2-soft` (fixed dark "screen" chrome for code blocks, constant in both themes),
`--text`, `--text-muted`, `--line`, `--trace-color`, `--trace-opacity`, `--shadow-1/2/3`,
`--card-border`, `--nav-glass`, `--nav-border`, `--link`, `--link-orange`. Defined in
`site/src/styles/tokens.css`: light values on bare `:root`, dark values under
`@media (prefers-color-scheme: dark)` (guarded so an explicit light choice wins) and again
under `:root[data-theme="dark"]` so the in-page toggle wins in both directions. The toggle
persists its choice to `localStorage` and applies it before paint to avoid a flash of the
wrong theme.

Accents (`--signal`, `--spark`) intentionally do **not** flip — only neutrals and the trace
treatment do. Both fail WCAG AA as TEXT color on the light palette despite being fine on
dark (`--signal` teal: ~10:1 on dark, ~1.6:1 on light; `--spark` orange: ~6:1 on dark, ~2.7:1
on light) — **resolved 2026-08-16** via `--link` (`#0D5A4F` light / `#2DD4BF` dark) and
`--link-orange` (`#B4441C` light / `#E8703F` dark), theme-aware darkened stand-ins used
anywhere the accent is TEXT (links, tags, eyebrows, CTA button backgrounds). Rule of thumb:
`--signal`/`--spark` for decorative/icon/dark-surface/graphic use, `--link`/`--link-orange`
for anything that's actually text a reader needs to read.

## Type

- **Display:** IBM Plex Mono, bold, large scale, tight tracking — headlines. Monospace as a
  confident hero headline face (not just tiny code snippets) is unusual for a personal
  engineering site and directly honest about the subject.
- **Body:** Source Serif 4 (or Lora) — genuine reading comfort for blog/case-study content,
  deliberate contrast against the mechanical mono headlines.
- **Utility:** IBM Plex Mono, small, letter-spaced caps — labels, dates, "spec" tags
  (`$0/mo hosting`, `Astro + Cloudflare`).

## Layout

```
[ fixed glass nav — blurs whatever scrolls under it, both themes ]
[ HERO — same surface as the body, not a separate dark block ]
  ambient circuit-trace field (faint ink in light mode, brighter teal in dark)
  eyebrow + word-reveal mono headline + one CTA pill
     ⌇⌇⌇  ← pulse-line divider
[ BODY — same surface as the hero ]
  recent build logs — image-forward before/afters
  "how I build it" — a real 4-step sequence (row layout, not cards —
    a sequence and a post index are different kinds of content)
    (only place numbered markers are justified — no decorative 01/02/03 elsewhere)
  contact
```

## Signature element: the pulse-line

A recurring "pulse-line" motif — a thin, jagged/stepped line using the same geometry as the
logo's circuit trace. Reused as:

1. The hero's draw-in animation (`stroke-dashoffset`, no JS library needed).
2. The divider between major sections, with the rhythm varying slightly each time.

Ties the logo, the code/circuit subject matter, and a quiet nod to Doug's music background
(reads as both a circuit trace and a signal waveform) into one motif specific to Haxbyte.

## Implementation status (as of 2026-08-15)

**Branding integrated, homepage + nav/footer on the new theme system:**
- Logo mark in header (32px) + wordmark text; footer includes mark + nav links
- Fixed nav (`position: sticky`) with glassmorphism (`backdrop-filter: blur(14px)
  saturate(1.5)`, tinted with the page's own bg color per theme, not plain white/black) — a
  `@supports` fallback swaps in a solid background for browsers without `backdrop-filter`
- Light/dark toggle (sun/moon icon button in nav) driving `[data-theme]` on `<html>`,
  persisted to `localStorage`; defaults to system preference via `prefers-color-scheme`
- Hero: ambient animated circuit-trace SVG field (theme-aware color/opacity), word-by-word
  headline reveal on load, pill CTA — no separate dark background block (see Color/Layout
  above)
- Recent-posts cards and the "how I build it" step rows use the semantic tokens, so they
  flip correctly with the toggle
- Fonts self-hosted from `site/public/fonts/` (IBM Plex Mono 400/700, Source Serif 4 400) as
  `woff2` + `@font-face` in `tokens.css`, replacing the earlier Google Fonts `<link>` — avoids
  a second CDN/asset host per `docs/engineering-standards.md`
- Pulse-line dividers between content sections; brand colors (signal, spark) used throughout
  for interactive elements and accents

**Known gaps, not yet covered by this pass:**
- ~~`/about`, `/contact`, `/work`, `/blog` pages still use the fixed `--ink`/`--paper` tokens
  directly~~ — **resolved, verified 2026-09-05:** these pages (and `BlogPost.astro`, `404.astro`)
  now use only the semantic `--text`/`--bg`/`--surface`/`--line`/`--link` tokens, which flip
  correctly with the toggle per `tokens.css`. No code change was needed — this note was stale
  relative to work already done in a prior pass; likely got missed when this doc was last
  updated.
- The global `a { color: var(--signal) }` link-color rule fails WCAG AA contrast on the light
  palette (~1.6:1, needs 4.5:1) — see Color above. Pre-existing, not introduced by this pass,
  not yet fixed since it's a site-wide visual change beyond this PR's scope.
- ~~`/about` and `/work` (Hardware Etc, Sonus Construction case studies) still carry
  pre-brand-split copy pitched at SMB consulting clients~~ — **resolved.** `about.astro` was
  rewritten to the content-only "What I Write About" framing 2026-08-26; `hardware-etc.md`
  was rewritten in build-log voice 2026-08-23 and `sonus-construction.md` 2026-09-05 (see
  `docs/TODO.md`'s Portfolio & Case Studies section). Re-verified 2026-09-05: no remaining
  consulting-pitch language sitewide.
- Nav wraps to two centered rows below `40rem` rather than a true mobile-first collapse —
  functional and non-overlapping, but the nav (and likely other components) hasn't had a
  full mobile-first pass yet.
