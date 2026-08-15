# Haxbyte

Personal technical content brand built by Doug Rosenberg — build-in-public posts, project
write-ups, and technical notes aimed at a cold/discoverable audience (recruiters, engineers,
future employers). Per the 2026-08-14/15 brand split documented in `career-development`'s
`HAXBYTE_BRAND_PLAN.md`, Haxbyte is content-only: consulting leads and client-facing
portfolio work route to `dougrosenbergdev.com` under Doug's real name instead. The site
still names Doug and links his real contact info — the split is about framing/audience, not
pseudonymity.

**Status:** design system and stack are decided; the project is **not yet scaffolded** —
no Astro project, no source tree exists yet. This repo currently holds planning docs only.

## ⚠ Launch constraint

Public launch is blocked until Doug's friend responds re: using the "Haxbyte" name (coined
jointly — a personal courtesy question, not a legal one). Fine to build/scaffold locally.
**Do not** register public DNS, push a live deploy, or register any public handles under
the "Haxbyte" name until that's resolved. Full detail in
[`docs/open-decisions.md`](./docs/open-decisions.md).

## Docs

- [`docs/TODO.md`](./docs/TODO.md) — **Start here.** Project status, next actions organized
  by priority (launch, content, refinements, nice-to-have).
- [`docs/architecture.md`](./docs/architecture.md) — stack (Astro, plain CSS, Cloudflare
  Pages) and why each piece was chosen over the alternatives considered.
- [`docs/design-system.md`](./docs/design-system.md) — color tokens, type, layout, and the
  "pulse-line" signature motif.
- [`docs/content-strategy.md`](./docs/content-strategy.md) — sitemap, content collections,
  and content format priorities.
- [`docs/engineering-standards.md`](./docs/engineering-standards.md) — mobile-first,
  performance, accessibility, and security rules that apply to every page/component.
- [`docs/frontend-principles.md`](./docs/frontend-principles.md) — visual craft discipline
  (how to execute the design system without drifting generic) and the copy/voice rules for
  all site text.
- [`docs/open-decisions.md`](./docs/open-decisions.md) — unresolved items, including the
  launch blocker above.

## Source of truth for business strategy

Positioning, content plan, and business action items are **not** owned by this repo — they
live in the sibling `career-development` repo's `HAXBYTE_BRAND_PLAN.md`
(`../career-development/projects/HAXBYTE_BRAND_PLAN.md`). Treat that doc as authoritative
for strategy; this repo is the technical/design brief and (once scaffolded) the codebase.

## ⚠ No git commits during working hours

**Never run `git commit` (or `git push`) between 8:30am and 5:00pm Central Time,
Monday–Friday.** This is a hard rule, not a preference — Doug's day job runs those hours
and commit activity during that window is a problem. Outside that window (evenings,
early mornings, weekends) commits are fine as normal. If asked to commit during the
blocked window, stage/prepare the change and say so instead of committing — don't commit
anyway and don't work around this with `--date` or scheduling tricks.

*(Assumption: "normal working hours" means weekdays only, since a strict 7-day version was
not stated. Flag it if that's wrong.)*

## Working conventions

- No dependencies exist yet — when scaffolding, use `npm create astro@latest` conventions
  and keep the stack to what's listed in `docs/architecture.md` (no Tailwind, no animation
  library — the pulse-line motif is hand-rolled SVG/CSS).
- Brand asset source files (logo SVGs) live in the `career-development` repo at
  `projects/haxbyte-assets/`, not in this repo. Accurate raster reference images are
  mirrored locally at `docs/assets/brand/`.
- Mobile-first, performance, accessibility, and security rules: see
  `docs/engineering-standards.md` — apply these from the first component, not as a
  retrofit.
