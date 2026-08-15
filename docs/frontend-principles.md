# Frontend & copy principles

`docs/design-system.md` covers *what* the visual system is (tokens, type, layout, the
pulse-line signature). This doc covers *how to execute it* without it drifting into
generic-template territory, plus the copy voice — nothing currently governs the actual
words on the site.

## Visual craft

**As of 2026-08-11:** Logo mark integrated into header (32px), hero (120px), and footer (28px).
Brand colors (signal teal, spark orange) applied via card accents and interactive hover states.
Pulse-line remains the signature motif, framed by the mark but not competing with it.

- **Spend boldness in one place.** The pulse-line motif + logo mark are the two balanced brand
  elements. Don't stack a third "hero moment" (e.g. a big animated stat block) on top of them —
  everything else stays quiet and disciplined.
- **Structural devices must encode real information.** Numbered markers are earned only by
  the actual 4-step build sequence (already called out in `design-system.md`) — no
  decorative 01/02/03 elsewhere, no fabricated stat counters, no progress bars that don't
  track something real.
- **Motion is deliberate, not scattered.** The pulse-line draw-in + section-divider reveal
  are the motion budget for v1. Hover micro-interactions are fine in small doses; piling on
  ambient animation beyond that is exactly what reads as AI-generated/generic rather than
  crafted.
- **Typography carries personality — hold the contrast.** The mono-display /
  serif-body pairing only works if every heading/body boundary keeps that contrast. Don't
  let a component quietly fall back to a system font.
- **Match complexity to the vision.** This is a minimal/restrained direction, so precision
  in spacing and alignment does more work than adding elements. When unsure whether to add
  something, cut it instead.
- **Watch CSS specificity collisions.** With hand-rolled CSS (no utility framework), a
  type-selector (`.section`) and an element/utility selector (`.cta`) can silently cancel
  each other's spacing — a likely source of "why isn't this style applying" bugs. Prefer
  consistent specificity levels (e.g. always class-based) over mixing selector types for
  the same property.

## Quality floor

Non-negotiable, ties directly to `docs/engineering-standards.md`:

- Responsive down to mobile (the mobile-first rule already in place).
- Visible keyboard focus states styled to match the brand — never removed without a
  replacement, never left as an invisible default.
- `prefers-reduced-motion` respected: the pulse-line draw-in and any scroll-triggered
  animation need a static fallback.

## Positioning (as of 2026-08-15)

**Haxbyte is a personal technical content brand — build-in-public, not a sales pitch.**

Per the 2026-08-14/15 brand split (`career-development/projects/HAXBYTE_BRAND_PLAN.md`),
Haxbyte's audience is cold/discoverable — recruiters, engineers, future employers — not a
referred small-business prospect. Consulting leads and client-facing portfolio work route to
`dougrosenbergdev.com` instead. Doug spent 3+ years building ERPs for nonprofits and
platforms for Fortune 10 companies; the about page still tells that story, but as
credibility for a technical reader, not a trust-check for a buyer.

Messaging priorities (still technical-credibility signals, just reframed for a technical
reader instead of a buyer):
1. **Clean code** (won't become technical debt)
2. **Performance** (sub-2-second loads)
3. **Scalability** (architecture that grows with the project)
4. **Accessibility** (works for everyone)
5. **No templates** (intentional, not generic)

## Copy & voice

"First-class copy" here means every word is doing a job, the same way spacing and color do.

- **Write from the visitor's side of the screen.** Describe what the visitor gets, not how
  Haxbyte builds it. *"Your site won't become technical debt"* beats *"We leverage Astro for
  blazing-fast static generation."* Save the tech-stack framing for build-in-public blog
  posts, where it's the actual subject — not for the front door.
- **Plain and specific beats clever.** This is already the site's stated positioning
  (`content-strategy.md`: "plain language, no jargon") — extend it past headlines into
  every button label, error message, and empty state.
- **Active voice, consistent vocabulary.** A link labeled "See the work" should land on a
  section actually titled that — not silently retitled "Portfolio" once you get there. The
  word a visitor clicks and the word they land on should match.
- **Cut agency-cliché filler.** "Seamless," "cutting-edge," "synergy," "elevate," "unlock" —
  these are the words that make a small-business consultancy site sound like every other
  consultancy site. Replace with the concrete thing being offered.
- **One job per element.** A headline states the benefit. A subhead adds the specific
  detail. A caption or label doesn't also try to be a CTA.
- **Empty states are still design, not an afterthought.** A `/work` page with zero case
  studies yet, or a `/blog` with one post, needs an intentional line in the site's voice
  ("First case study coming soon — here's what's in progress") — not a blank page or
  lorem ipsum.
- **Register: conversational, plain verbs, sentence case.** The reader is a technical or
  recruiter-side audience finding the site cold (`content-strategy.md`'s framing) — not a
  referred small-business owner doing a trust-check. Tune every sentence to that reader,
  including on `/work` and `/blog` pages that talk about the build itself: build-in-public
  and teaching voice, not a sales pitch.
