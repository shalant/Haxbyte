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

The site's design system builds on that but deliberately does **not** extend the
dark-navy-with-teal logo card across the whole page — that would be both the obvious move
and a known AI-generated-design cliché (dark bg + single bright accent). Instead: the
dark/teal world is confined to the hero (where the brand identity lives), handing off into
a warm, readable, mostly-light body — literally enacting the brand's pitch of translating
technical craft into something a non-technical small-business owner can read and trust.

## Color

| Token      | Hex       | Role                                                  |
|------------|-----------|--------------------------------------------------------|
| `--ink`    | `#0B1220` | Hero/dark sections, primary text on light               |
| `--paper`  | `#EEF1EF` | Body background — cool pale sage-gray, not warm cream    |
| `--signal` | `#2DD4BF` | Brand teal — mostly confined to dark hero + links        |
| `--spark`  | `#E8703F` | Warm ember accent — one CTA / the signature motif        |
| `--ash`    | `#5B6A66` | Muted secondary text                                     |
| `--white`  | `#FFFFFF` |                                                           |

## Type

- **Display:** IBM Plex Mono, bold, large scale, tight tracking — headlines. Monospace as a
  confident hero headline face (not just tiny code snippets) is unusual for a consultancy
  site and directly honest about the subject.
- **Body:** Source Serif 4 (or Lora) — genuine reading comfort for blog/case-study content,
  deliberate contrast against the mechanical mono headlines.
- **Utility:** IBM Plex Mono, small, letter-spaced caps — labels, dates, "spec" tags
  (`$0/mo hosting`, `Astro + Cloudflare`).

## Layout

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

## Signature element: the pulse-line

A recurring "pulse-line" motif — a thin, jagged/stepped line using the same geometry as the
logo's circuit trace. Reused as:

1. The hero's draw-in animation (`stroke-dashoffset`, no JS library needed).
2. The divider between major sections, with the rhythm varying slightly each time.

Ties the logo, the code/circuit subject matter, and a quiet nod to Doug's music background
(reads as both a circuit trace and a signal waveform) into one motif specific to Haxbyte.

## Implementation status (as of 2026-08-11)

**Branding fully integrated:**
- Logo mark in header (32px) + wordmark text
- Hero section features large mark (120px) with drop-shadow
- Footer includes mark + social/navigation links
- Service cards: gradient top border (signal → spark) + hover lift effect
- Post cards: left border accent in spark + slide-on-hover
- Footer: signal border-top + gradient background + mark
- Pulse-line dividers between content sections
- Brand colors (signal, spark) used throughout for interactive elements and accents
