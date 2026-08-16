# Haxbyte Project TODO

**Last updated:** 2026-08-15  
**Status:** Homepage + nav/footer rebuilt on a real light/dark theme system, ready to PR.
Still blocked on the friend's-name launch constraint (see Notes) — **not** ready to deploy
publicly yet regardless of code state.

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

- [ ] Resolve name approval with friend (launch blocker — Doug's day job hours constraint applies)
- [ ] Purchase haxbyte.com domain (or verify if already purchased)
- [ ] Set up Cloudflare Pages deployment from main branch
- [ ] Configure custom domain (haxbyte.com)
- [ ] Set up analytics (Google Analytics or Plausible)

### SEO Fundamentals
- [x] Create `robots.txt` (allow all, point to sitemap)
- [x] Create `sitemap.xml` (hand-rolled Astro endpoint, no new dependency)
- [x] Add Open Graph meta tags (og:title, og:description, og:image for social sharing)
- [x] Add Twitter Card meta tags (for LinkedIn/Twitter previews)
- [x] Add canonical tags (prevent duplicate content issues)
- [x] Document image alt text requirements — already covered in `docs/engineering-standards.md` (Accessibility section)
- [x] Add JSON-LD structured data for blog posts (publish date, author, description)
- [x] Create custom 404 error page

### Mobile Testing (Critical)
- [ ] Test on real iPhone (Safari)
- [ ] Test on real Android device (Chrome)
- [ ] Verify touch targets are 44×44px minimum (all buttons, links, nav)
- [ ] Test mobile navigation (wraps to two centered rows below 40rem, not a hamburger — verify no overlap on real devices)
- [ ] Test all pages: home, about, contact, blog, work, work detail
- [ ] Verify forms are mobile-friendly (if applicable)
- [ ] Test orientation changes (portrait/landscape)
- [ ] No horizontal scroll on any viewport

### Accessibility & Performance
- [ ] Verify WCAG 2.1 AA accessibility (automated + manual testing)
- [ ] Performance audit (Lighthouse, Core Web Vitals)
- [ ] Security checklist (SSL, headers, no secrets in repo)

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
**Note (2026-08-15):** per `docs/content-strategy.md`'s actual sitemap, `/work` is "build
logs: write-ups on what I built, how, and why" — Doug's own projects, not client case
studies. The 2026-08-11 decision below predates the brand split and now contradicts it:
Hardware Etc and Sonus Construction are consulting client work, which routes to
dougrosenbergdev.com per the split, not Haxbyte. `site/src/content/work/hardware-etc.md`
and `sonus-construction.md` still exist and still get built into `/work` today.
- [ ] Decide: migrate the Hardware Etc / Sonus Construction case studies to
      dougrosenbergdev.com and replace `/work` here with real build logs (ERP/workflow
      write-ups, mobile/MAUI learning, this site's own build) — or explicitly re-affirm
      keeping them here if there's a reason the split doesn't apply to `/work`
- [ ] Create build-log template for future `/work` entries (once the above is decided)
- ~~Decided (2026-08-11): Keep `/work` focused on SMB case studies~~ — superseded, see note above

### LinkedIn & Social
- [ ] Develop LinkedIn content calendar (2-3 posts/week)
- [ ] Repurpose blog posts for LinkedIn (thread format)
- [ ] Share project journey posts (building in public)
- [ ] Engage with the technical/recruiter community on LinkedIn (not small-business owners —
      see brand split)

---

## 🎨 Design & UX Refinements (Medium Priority)

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

- [ ] Add contact form backend (Cloudflare Functions or external service)
- [ ] Implement email notifications for contact form submissions
- [ ] Set up automated performance monitoring (Lighthouse CI)
- [ ] Add RSS feed for blog
- [ ] Consider: newsletter signup on blog posts
- [ ] Add breadcrumb navigation for blog posts
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

- **Launch blocker:** Friend's approval on "Haxbyte" name (not legal, personal courtesy)
- **Git constraint:** No commits 8:30am–5pm CT, Mon–Fri (Doug's day job)
- **Docs rule:** Keep docs/ in sync with code changes (implemented 2026-08-11)
- **Brand assets:** Logo SVGs need redraw from DALL-E reference (not critical for launch)
