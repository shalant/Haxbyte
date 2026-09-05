# Haxbyte Project TODO

**Last updated:** 2026-08-26  

**Recent work (2026-08-26):**
- ✅ `about.astro` copy pass — reframed "What I Build" (services/referral-project framing) as
  "What I Write About" (content categories), matching the content-only positioning from
  `docs/frontend-principles.md`'s Positioning section. No more consulting-pitch language;
  reads as technical credibility for a cold/recruiter-side reader instead of a buyer trust-check.

**Recent work (2026-08-23):**
- ✅ Three new blog posts drafted, reviewed, and gated behind `BLOCKED_SLUGS` during content
  review, then cleared: "Dashboards Lie Until You Check the Raw Output" (genericized to
  remove any Google/day-job-identifiable detail), "The Saxophone Navbar I Can't Ship", "The
  Ideal Mentor"
- ✅ Blog: older/newer post pager, LinkedIn + copy-link share icons, reading-time estimate,
  RSS feed (`/rss.xml`), per-post `imageAlt` field (schema + all three posts)
- ✅ Fixed a real bug: `/work/[slug].astro` was rendering raw markdown source via
  `set:html={piece.body}` instead of compiling it — every `/work` page was showing literal
  `##`/`![]` syntax. Fixed to match the blog pages' `render()` pattern.
- ✅ `hardware-etc.md` rewritten with real specifics and real before/after images (pulled
  from the dougrosenbergdev.com case study, reframed in build-log voice) — see resolved
  decision under Portfolio & Case Studies below
- ✅ Nav-link vertical alignment fixed (was 5-10px off from the logo)
- ✅ New convention documented: all changes go on a branch + PR, never committed straight to
  `main` (see root `CLAUDE.md`)

**Status:** Homepage + nav/footer rebuilt on a real light/dark theme system (merged). Site is
**live at https://haxbyte.com** — Cloudflare deployment, custom domain, and Web Analytics are
all done. Remaining pre-launch item: real-device mobile testing, then the launch announcement.

**Recent work (2026-08-15):**
- ✅ Font direction settled: IBM Plex Mono (display/utility) + Source Serif 4 (body), now
  self-hosted from `site/public/fonts/` instead of the Google Fonts CDN
- ✅ Real light/dark toggle (persisted, system-preference default) — supersedes the earlier
  fixed-dark-hero plan; see `docs/design-system.md`
- ✅ Nav: fixed + glassmorphism (`backdrop-filter`, themed tint, `@supports` fallback),
  fixed a mobile overlap bug in the process
- ✅ Hero rebuilt: ambient circuit-trace field, word-reveal headline, no separate dark block
- ✅ Added "How I build it" 4-step section to the homepage
- 🔲 Copy pass still needed — `about.astro` and others still read pre-brand-split (see
  Content & Marketing below)

---

## 🚀 Launch Phase (Blocking)

- [x] Resolve name approval with friend — resolved 2026-08-16, friend never responded, Doug
      proceeding with the name regardless (see `docs/open-decisions.md`)
- [x] Domain — Doug already owns `haxbyte.com`, no purchase needed
- [x] Set up Cloudflare deployment from `main` branch — done 2026-08-16. Cloudflare's
      dashboard has moved from classic Pages (build-output-directory field) to a unified
      "Workers & Pages" flow that deploys via Wrangler instead — connect the GitHub repo,
      set Path to `/site` (their "root directory" field, under Advanced settings), build
      command `npm run build`, deploy command `npx wrangler deploy` (default, picks up
      `site/wrangler.jsonc`, added this session, which points it at `./dist`). Build
      succeeded (30 files uploaded). `site/public/_headers` (CSP etc.) is confirmed still
      supported under Workers static-assets, not just classic Pages.
- [x] Configure custom domain (haxbyte.com) — done 2026-08-16. Went straight for a full
      registrar transfer (Cloudflare Registrar) rather than a plain nameserver swap; Cloudflare
      required the zone to exist on Cloudflare DNS before accepting the transfer, so the
      nameserver migration happened as part of that flow. Attached `haxbyte.com` as a Custom
      Domain on the `haxbyte` Worker (Workers & Pages → haxbyte → Domains and routes). Site is
      live at https://haxbyte.com. Registrar transfer itself (billing/renewal moving to
      Cloudflare, free 1-year extension past the Dec 17 expiration) may still be finalizing in
      the background but doesn't block the site.
- [x] Enable Cloudflare Web Analytics — confirmed live 2026-09-04 (dashboard toggle, no code
      change, chosen over Google Analytics/Plausible for zero-config + no cookie-consent
      requirement). Discovered already collecting real data going back to launch — 70 visits /
      100 page views Aug 16–Sep 4, versus the zone Overview's raw "Unique Visitors" stat
      showing 1,310 over the same window. That gap is expected and not a problem: the Overview
      number counts every raw edge request (bots, AI/search crawlers, uptime monitors, scanners
      hitting every public domain), while Web Analytics only counts a visit when a real
      browser's JS actually executes — same methodology split as GA4 vs. server logs.

### SEO Fundamentals
- [x] Create `robots.txt` (allow all, point to sitemap)
- [x] Create `sitemap.xml` (hand-rolled Astro endpoint, no new dependency)
- [x] Add Open Graph meta tags (og:title, og:description, og:image for social sharing)
- [x] Add Twitter Card meta tags (for LinkedIn/Twitter previews)
- [x] Add canonical tags (prevent duplicate content issues)
- [x] Document image alt text requirements — already covered in `docs/engineering-standards.md` (Accessibility section)
- [x] Add JSON-LD structured data for blog posts (publish date, author, description)
- [x] Create custom 404 error page

### GEO (Generative Engine Optimization)
- [x] Add `llms.txt` — built 2026-09-04 as a hand-rolled Astro endpoint
      (`site/src/pages/llms.txt.ts`), same pattern as `rss.xml.ts`/`sitemap.xml.ts`: generated
      at build time from the `blog`/`work` collections rather than hand-maintained, so it can't
      go stale relative to what's actually published.
- [x] Add site-wide `Person`/`WebSite` JSON-LD — added to the homepage only (not every page),
      with `Person.sameAs` linking to LinkedIn so AI engines can disambiguate/attribute Doug as
      an entity. Per-post `BlogPosting` JSON-LD (added earlier) still handles article-level data.
- [ ] Content-shape pass — review existing pages (About, Contact, older posts) for whether key
      facts read as clean, standalone, quotable statements vs. only marketing-toned prose; that
      distinction is what actually gets lifted into an AI-generated answer. Not started.

### Mobile Testing (Critical)
- [ ] Test on real iPhone (Safari)
- [ ] Test on real Android device (Chrome)
- [x] Verify touch targets are 44×44px minimum (all buttons, links, nav) — audited
      2026-08-16: found the theme toggle (32×32px), nav links, and footer links all under
      the minimum (no padding beyond a thin underline offset). Fixed: theme toggle is now
      44×44px, `.nav-links a` / `.footer-links a` get `min-height: 44px` + padding, homepage
      pill CTA padding bumped to clear 44px. `about`/`404` CTA buttons and card-heading links
      were already well over the minimum, left as-is. Verified via computed
      `getBoundingClientRect()` in Chrome, not a real device — window-resize browser
      automation wasn't producing a real mobile viewport in this environment (innerWidth
      stayed pinned to desktop width regardless of resize_window calls), so this was a
      code-level fix, not a visual mobile pass. Real-device confirmation still needed.
- [ ] Test mobile navigation (wraps to two centered rows below 40rem, not a hamburger — verify no overlap on real devices; simulated via injected CSS media-query override 2026-08-16, wraps cleanly with no overlap, but still needs a real-device check)
- [ ] Test all pages: home, about, contact, blog, work, work detail
- [ ] Verify forms are mobile-friendly (if applicable)
- [ ] Test orientation changes (portrait/landscape)
- [ ] No horizontal scroll on any viewport

### Accessibility & Performance
- [x] Manual contrast audit (2026-08-16) — found and fixed a real WCAG AA failure: the
      brand accent colors (`--signal` teal, `--spark` orange) were being used directly as
      TEXT color on light backgrounds in 10 places (global link color, nav active-state,
      footer links, tag pills, CTA buttons, etc.) — as low as ~1.6:1 against the 4.5:1
      requirement. Added `--link`/`--link-orange` (darkened, theme-aware) tokens for text/
      link use; `--signal`/`--spark` stay as-is for decorative/icon/dark-surface uses.
      `--ash` on `--paper` (already flagged as worth checking) verified fine at ~5:1.
- [x] Lighthouse audit (2026-08-16, local production build via `astro preview`) — 100/100
      across Performance, Accessibility, Best Practices, and SEO. Core Web Vitals: LCP
      1.66s, FCP 1.07s, TBT 0ms, CLS 0 — comfortably under the 2s target. Local-machine
      numbers, not real-network-to-Cloudflare-edge, but confirms no code-level bloat; worth
      re-running once actually deployed for real-world numbers.
- [x] Security headers — added `site/public/_headers` (CSP with sha256-pinned inline
      scripts, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS). SSL is automatic
      via Cloudflare Pages; no secrets in repo (verified, `.gitignore` covers `.env`); no
      contact-form backend yet so no data-handling surface to audit there

### Launch
- [ ] Launch announcement (LinkedIn post, share with network)

---

## 📝 Content & Marketing (High Priority)

- [ ] Refine copy sitewide — much of it (especially `about.astro`, including "What I Build")
      is still the pre-2026-08-14/15-split SMB-consulting pitch, not the current
      content-only/recruiter-engineer positioning. Starting point: reframe "What I Build"
      around real technical range (enterprise ERP/workflow architecture, LLM/AI integration,
      mobile/MAUI, this site itself) instead of service categories like "small business
      sites" / "redesigns" — that framing belongs on dougrosenbergdev.com, not here.

### Blog Posts (build-in-public angle)
**Note (2026-08-15):** the list below predates the content-only brand split — titles aimed
at SMB buyers ("small business mistakes," "conversions") don't fit the recruiter/engineer
audience. Replaced with the technical build-log ideas already drafted for the homepage
redesign; swap in real posts as they're written.
- [ ] Post 1: "Building Haxbyte in public — tech stack choices and why"
- [ ] Post 2: "Zero-dollar hosting: Astro on Cloudflare Pages"
- [ ] Post 3: "What breaks first when a Blazor ERP hits 500 concurrent users"
- [ ] Post 4: "Wiring an MCP server into a real support workflow"

### Portfolio & Case Studies
**Resolved 2026-08-23:** client work (Hardware Etc, Sonus Construction) stays on Haxbyte's
`/work`, framed as build logs — process and decisions ("how I built it"), not sales
case studies. That framing is what differentiates it from the dougrosenbergdev.com treatment
of the same client work, so the brand split holds without needing to migrate anything.
`hardware-etc.md` was rewritten in this voice 2026-08-23 (see project history) as the
reference example for future entries.
- [ ] Rewrite `sonus-construction.md` in the same build-log voice as `hardware-etc.md`
      (only the latter has been converted so far)
- [ ] Create a build-log template for future `/work` entries based on the `hardware-etc.md`
      pattern (challenge → decisions/tradeoffs → outcome, with real before/after images)

### LinkedIn & Social
- [ ] Develop LinkedIn content calendar (2-3 posts/week)
- [ ] Repurpose blog posts for LinkedIn (thread format)
- [ ] Share project journey posts (building in public)
- [ ] Engage with the technical/recruiter community on LinkedIn (not small-business owners —
      see brand split)

---

## 🎨 Design & UX Refinements (Medium Priority)

- [ ] Consider a subtle light-mode background texture as an alternative/addition to the
      hero's circuit-trace field — idea from 2026-08-16: a repeating grid of vertical
      arch/petal shapes (half-ovals), offset like brick coursing so they interlock, rendered
      tone-on-tone (same hue as `--bg`, only readable via subtle shadow/highlight, not color
      contrast) — a mid-century "scallop"/wall-panel motif. Not started; explore as its own
      pass, not folded into the current branch.
- [ ] User test the site (get feedback from referred prospects)
- [ ] Refine CTA copy based on testing
- [ ] Consider: add FAQ section to `/about` or home page
- ~~Consider: add testimonials section~~ / ~~"Services" page breakdown~~ — consulting-sales
      framing, contradicts content-only positioning; belongs on dougrosenbergdev.com if done
      at all
- [ ] Redraw logo SVGs from DALL-E reference (currently PNG only)
- [ ] Add video intro to hero (optional, performance-conscious approach)
- [ ] Create a proper 1200×630 `og:image` asset — currently reuses `haxbyte-logo.png` (409×322), which will look small/low-res in social share previews

---

## 🛠️ Technical Debt & Improvements (Lower Priority)

- [x] Add contact form backend — built 2026-09-02 on `feature/contact-form-worker`, not yet
      merged/deployed. Standalone Cloudflare Worker (`site/src/worker.js`) handling
      `POST /api/contact`, wired via `main` in `wrangler.jsonc` alongside the existing `assets`
      config, falling back to `env.ASSETS.fetch()` for everything else. Server-side validation +
      a honeypot field + an Origin check (not full CSRF — there's no session to protect, just a
      cheap reject of the obvious cross-site case). See `docs/open-decisions.md`'s resolved
      "Contact method" entry for the full reasoning.
- [ ] Implement email notifications for contact form submissions — code is in place, sending via
      Cloudflare's native Workers `send_email` binding (see `send_email` in `wrangler.jsonc` and
      `site/src/worker.js`), not a third-party API — no external account or secret needed. Still
      needs, before it actually sends anything: verify `doug.rosenberg@gmail.com` as a
      "Destination Address" in this Cloudflare account's Email Routing settings (dashboard ->
      the zone -> Email -> Email Routing -> Destination Addresses) — a one-time email
      confirmation click.
- [x] Set up automated performance monitoring (Lighthouse CI) — added 2026-09-05 as
      `.github/workflows/lighthouse.yml` (PR-time check only, runs on PRs into `main` and
      pushes to `main`; deploy-path-neutral, doesn't touch Cloudflare's own dashboard
      git-integration deploy). Builds `site/` and runs `@lhci/cli` (new devDependency)
      against the static `dist/` output via lhci's built-in server per
      `site/lighthouserc.json`: Performance/Best-Practices/SEO floor 0.9, Accessibility
      floor 0.95. Verified with a real local `npx lhci autorun` run (headless Chrome was
      available in this environment) against 5 pages (home/about/contact/blog/work), not
      just structural validation of the YAML/config.
- [x] Add RSS feed for blog — shipped 2026-08-23, hand-rolled `site/src/pages/rss.xml.ts`
      (same no-dependency approach as `sitemap.xml.ts`), linked in `<head>` and the footer
- [ ] Consider: newsletter signup on blog posts
- [ ] Add breadcrumb navigation for blog posts — partially covered by the older/newer post
      pager shipped 2026-08-23 (chronological, not hierarchical); revisit if a true
      Home > Blog > Post breadcrumb is still wanted
- [x] Implement dark mode — shipped 2026-08-15 (toggle + system-preference default); homepage
      + nav/footer covered, `/about`/`/contact`/`/work`/`/blog` still need converting to the
      theme tokens (see `docs/design-system.md`'s "Known gaps")
- [ ] Add search functionality to blog

---

## 📊 Brand & Positioning (Lower Priority)

- [x] Domain consolidation strategy — resolved 2026-08-15, see `docs/open-decisions.md`
- [ ] Clarify relationship between Haxbyte, dougrosenberg.com (music), and portfolio sites
- ~~Consider: separate blog for "AI/LLM engineering" topics (vs small business focus)~~ —
      moot; Haxbyte's whole audience is technical/recruiter now, not small-business
- ~~Update LinkedIn profile to reference Haxbyte as main consulting brand~~ — contradicts the
      brand split (Haxbyte is content-only; consulting is dougrosenbergdev.com's job). If a
      LinkedIn profile update is still wanted, it should point to Haxbyte as the content/
      build-in-public brand, not "consulting"

---

## 🚧 Future Expansion (Nice-to-Have)

- [ ] Free site audit tool (simple performance + SEO checker) — reframe as a build-in-public
      tool/demo if kept, not a lead-gen offer
- [ ] BizMachina case study (once it's ready to showcase) — fits here if it's Doug's own
      project; if it's client work, it belongs on dougrosenbergdev.com like the note above
- [ ] Podcast or video content series
- ~~"Build guide" for small business owners~~ / ~~Workshop/consulting content~~ — dropped,
      wrong audience for Haxbyte post-split

---

## Notes

- **Launch blocker:** resolved 2026-08-16 — see `docs/open-decisions.md`
- **Git constraint:** No commits 8:30am–5pm CT, Mon–Fri (Doug's day job)
- **Docs rule:** Keep docs/ in sync with code changes (implemented 2026-08-11)
- **Brand assets:** Logo SVGs need redraw from DALL-E reference (not critical for launch)
