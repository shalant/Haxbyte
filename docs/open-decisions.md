# Open decisions

- [ ] **Contact method** — plain `mailto:`/Calendly link vs. an on-page form (would need
      Cloudflare Pages Functions or a free-tier service like Formspree).
- [x] ~~**Domain consolidation** across the four owned domains~~ — **mostly resolved
      2026-08-15**: `haxbyte.com` = content brand (cold/discoverable audience),
      `dougrosenbergdev.com` = consulting + client-facing portfolio (warm-referral leads,
      real name). `drpcconsulting.com` and `dougrosenbergarchive.com` still genuinely open —
      revisit only if a concrete need surfaces. See the brand plan doc's domain-split
      decision.
- [ ] **Logo tagline conflict** — the Haxbyte logo lockup (in `career-development`'s
      `haxbyte-assets/`, not live text on this site) reads "WEB DEVELOPMENT CONSULTANCY,"
      which now conflicts with the content-only positioning above. Flagged in the brand plan
      as an open call for Doug, not something to resolve here — the asset lives in the other
      repo.
- [ ] **Pricing/offerings page** (e.g. Landing Page — $999, Custom Workflow — $2,999, Bigger
      projects — quoted) — belongs on `dougrosenbergdev.com`, not here, per the content/
      consulting split above. Noted 2026-08-15 as a forward pointer for whenever that site
      gets built out; not started anywhere yet.
- [x] ~~**Friend's response re: the "Haxbyte" name**~~ — **resolved 2026-08-16.** Friend
      never responded; Doug is comfortable proceeding with the name regardless. No longer
      blocks public launch. See the brand plan doc for full context.
- [x] ~~DALL-E asset pack vs. hand-authored logo~~ — **resolved 2026-08-11, discarded.** The
      `haxbyte-web-asset-pack/` extraction was broken, not just low-fidelity (`haxbyte-mark.png`
      turned out to be a solid teal square with a stray `>` fragment, not the actual mark).
      Deleted from the repo.
- [ ] **Vectorize the corrected logo reference** — the hand-authored `haxbyte-icon.svg` /
      `haxbyte-logo.svg` (still only in `career-development/projects/haxbyte-assets/`) don't
      match the concept Doug actually picked (panel 04 of the 5-up DALL-E grid). Accurate
      raster references now live in this repo at
      [`docs/assets/brand/`](./assets/brand/README.md) (mirrored from the
      `career-development` copy); the SVGs still need to be redrawn as flat vectors from
      them — see that folder's `README.md` for why auto-tracing won't work cleanly (source is
      a stylized 3D render, not flat art) and for freelancer/manual-trace options. No DALL-E
      credits needed for this step.

## Launch blocker — resolved

**Resolved 2026-08-16.** The friend's-name courtesy question no longer blocks public
launch (friend never responded; Doug is proceeding with the name regardless). Public DNS,
a live deploy, and public handles under the "Haxbyte" name are all fine to proceed with now.
