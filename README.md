# Haxbyte

Personal technical content brand, built by Doug Rosenberg. Per the 2026-08-14/15 brand split
described in the `career-development` repo's
[`HAXBYTE_BRAND_PLAN.md`](../career-development/projects/HAXBYTE_BRAND_PLAN.md), Haxbyte is
content-only — build-in-public posts and technical notes for a cold/discoverable audience
(recruiters, engineers, future employers). Consulting leads and client-facing portfolio work
route to `dougrosenbergdev.com` under Doug's real name instead. That doc is the source of
truth for business strategy (positioning, content plan, action items); this README is the
technical/design brief for the codebase itself.

**Status (2026-08-16):** scaffolded and in active development (Astro project in `site/`).
The friend's-name launch blocker is resolved — friend never responded, Doug is proceeding
with the name regardless — so public deploy is no longer blocked. See
[`docs/open-decisions.md`](./docs/open-decisions.md) for details and remaining open items.

---

## What this site does

Content hub for a cold/discoverable audience — recruiters, engineers, future employers, not
referred consulting prospects. Home for blog posts and build logs that get repurposed into
LinkedIn content (build-in-public, teaching, learning-journey posts).

**Positioning:** build-in-public / teaching voice, technical-credibility signals over sales
pitch. Consulting positioning, client leads, and portfolio-as-proof-of-skill content live on
`dougrosenbergdev.com` instead. See the brand plan doc for the full reasoning.

---

## Stack

- **Astro** + Markdown content collections — static output by default, shared layouts
  avoid copy-pasting HTML across ~20 posts per site expected from repurposed blog content.
- **Plain modern CSS** (custom properties, `:has()`, container queries, native nesting) —
  no Tailwind, deliberately, to avoid the generic "Tailwind card grid" look and keep full
  control over a distinctive visual system.
- **View Transitions API** (Astro's built-in `<ClientRouter />`) for smooth page/section
  transitions — native browser support, no animation library required for this.
- **Cloudflare Pages** for hosting — free tier covers this site's traffic entirely, git-push
  deploy, global CDN. Chosen over Azure Static Web Apps (Doug's day-job stack, would also
  work, but is more infrastructure than a static marketing site needs and undercuts the
  "deployed for $0" content angle) and over GoDaddy hosting (not built for git-based static
  deploys).
- **Domain:** `haxbyte.com`, registered at Hostinger — staying there (no reason to migrate
  registrars). DNS points to Cloudflare once the site is ready to go live (nameserver
  migration to Cloudflare is the cleaner option for full CDN benefit; a CNAME record at
  Hostinger also works if DNS management should stay put).
- **Contact:** not yet decided — plain `mailto:`/Calendly link (zero setup, default choice
  given the "no spend until there's a client" rule) vs. an actual on-page form (would need
  Cloudflare Pages Functions or a free-tier service like Formspree).

---

## Design system

Brand colors were locked in during logo work (see `career-development/projects/haxbyte-assets/`
for the source SVGs: `haxbyte-icon.svg`, `haxbyte-icon-tile.svg`, `favicon.svg`,
`haxbyte-logo.svg`). The site's design system builds on that but deliberately does **not**
extend the dark-navy-with-teal logo card across the whole page — that would be both the
obvious move and a known AI-generated-design cliché (dark bg + single bright accent).
Instead: the dark/teal world is confined to the hero (where the brand identity lives),
handing off into a warm, readable, mostly-light body — literally enacting the brand's pitch
of translating technical craft into something a non-technical small-business owner can read
and trust.

**Color:**
| Token      | Hex       | Role                                                |
|------------|-----------|------------------------------------------------------|
| `--ink`    | `#0B1220` | Hero/dark sections, primary text on light            |
| `--paper`  | `#EEF1EF` | Body background — cool pale sage-gray, not warm cream |
| `--signal` | `#2DD4BF` | Brand teal — mostly confined to dark hero + links     |
| `--spark`  | `#E8703F` | Warm ember accent — one CTA / the signature motif     |
| `--ash`    | `#5B6A66` | Muted secondary text                                  |
| `--white`  | `#FFFFFF` |                                                        |

**Type:**
- **Display:** IBM Plex Mono, bold, large scale, tight tracking — headlines. Monospace as a
  confident hero headline face (not just tiny code snippets) is unusual for a personal
  engineering site and directly honest about the subject.
- **Body:** Source Serif 4 (or Lora) — genuine reading comfort for blog/case-study content,
  deliberate contrast against the mechanical mono headlines.
- **Utility:** IBM Plex Mono, small, letter-spaced caps — labels, dates, "spec" tags
  (`$0/mo hosting`, `Astro + Cloudflare`).

**Layout:**
```
[ INK — full-bleed hero ]
  logo mark, circuit trace draws itself in on load
  plain mono headline: what you do, who it's for
  one CTA
     ⌇⌇⌇  ← pulse-line divider
[ PAPER — content ]
  services (plain language, no jargon)
  work/portfolio — image-forward before/afters
  "how I build it" — a real 4-step sequence
    (only place numbered markers are justified — no decorative 01/02/03 elsewhere)
  recent posts / contact
```

**Signature element:** a recurring "pulse-line" motif — a thin, jagged/stepped line using
the same geometry as the logo's circuit trace. Reused as (1) the hero's draw-in animation
(`stroke-dashoffset`, no JS library needed), (2) the divider between major sections, with
the rhythm varying slightly each time. Ties the logo, the code/circuit subject matter, and
a quiet nod to Doug's music background (reads as both a circuit trace and a signal waveform)
into one motif specific to Haxbyte.

---

## Sitemap & content collections

- `/` — home: hero, recent posts
- `/work` — build logs: write-ups on what I built, how, and why
- `/blog`, `/blog/[slug]` — content hub
- `/about` — brief story, tuned for a technical/recruiter reader
- `/contact`

Content collections: `blog` (title, date, tag: build-in-public / teaching / case-study /
learning), `work` (client type, before/after images, short writeup).

**Content format priorities** (from the brand plan): before/after or WIP progress shots →
case study breakdowns → teaching/process posts → build-in-public learning posts. Full
reasoning in the brand plan doc.

---

## Open decisions

See [`docs/open-decisions.md`](./docs/open-decisions.md) for the current, single-source
list (this section previously duplicated it and had drifted out of sync).
