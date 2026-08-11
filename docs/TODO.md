# Haxbyte Project TODO

**Last updated:** 2026-08-11  
**Status:** Build complete, positioned, UI refined, ready for launch phase

**Recent work (2026-08-11 EOD):**
- ✅ Glassy navbar with backdrop blur + semi-transparent background
- ✅ Active link detection and styling (aria-current, spark underline, signal color)
- ✅ Ready to commit locally
- 🔄 Font exploration in progress (learning typography principles before direction)

---

## 🚀 Launch Phase (Blocking)

- [ ] Resolve name approval with friend (launch blocker — Doug's day job hours constraint applies)
- [ ] Purchase haxbyte.com domain (or verify if already purchased)
- [ ] Set up Cloudflare Pages deployment from main branch
- [ ] Configure custom domain (haxbyte.com)
- [ ] Set up analytics (Google Analytics or Plausible)

### SEO Fundamentals
- [ ] Create `robots.txt` (allow all, point to sitemap)
- [ ] Create `sitemap.xml` (auto-generate or manual list of all pages)
- [ ] Add Open Graph meta tags (og:title, og:description, og:image for social sharing)
- [ ] Add Twitter Card meta tags (for LinkedIn/Twitter previews)
- [ ] Add canonical tags (prevent duplicate content issues)
- [ ] Document image alt text requirements (all images need descriptive alt text)
- [ ] Add JSON-LD structured data for blog posts (publish date, author, description)
- [ ] Create custom 404 error page

### Mobile Testing (Critical)
- [ ] Test on real iPhone (Safari)
- [ ] Test on real Android device (Chrome)
- [ ] Verify touch targets are 44×44px minimum (all buttons, links, nav)
- [ ] Test mobile navigation (hamburger menu functionality)
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

### Blog Posts (build-in-public angle)
- [ ] Post 1: "Why I'm bringing enterprise discipline to small business sites"
- [ ] Post 2: "Building Haxbyte in public — tech stack choices and why"
- [ ] Post 3: "Case study: Hardware Etc redesign (Squarespace → custom)"
- [ ] Post 4: "Common small business website mistakes (and how to avoid them)"
- [ ] Post 5: "Performance matters: why your site speed affects conversions"

### Portfolio & Case Studies
- [ ] Add before/after screenshots to Hardware Etc case study
- [ ] Add before/after screenshots to Sonus Construction case study
- [ ] Create case study template for future projects
- **Decided (2026-08-11):** Keep `/work` focused on SMB case studies (Hardware Etc, Sonus). ArborKin/BizMachina belong in blog posts or `/about` mention, not portfolio section (positioning clarity)

### LinkedIn & Social
- [ ] Develop LinkedIn content calendar (2-3 posts/week)
- [ ] Repurpose blog posts for LinkedIn (thread format)
- [ ] Share project journey posts (building in public)
- [ ] Engage with small business community on LinkedIn

---

## 🎨 Design & UX Refinements (Medium Priority)

- [ ] User test the site (get feedback from referred prospects)
- [ ] Refine CTA copy based on testing
- [ ] Consider: add FAQ section to `/about` or home page
- [ ] Consider: add testimonials section (once you have client quotes)
- [ ] Consider: add "Services" page breakdown (detailed explanation of each offer)
- [ ] Redraw logo SVGs from DALL-E reference (currently PNG only)
- [ ] Add video intro to hero (optional, performance-conscious approach)

---

## 🛠️ Technical Debt & Improvements (Lower Priority)

- [ ] Add contact form backend (Cloudflare Functions or external service)
- [ ] Implement email notifications for contact form submissions
- [ ] Set up automated performance monitoring (Lighthouse CI)
- [ ] Add RSS feed for blog
- [ ] Consider: newsletter signup on blog posts
- [ ] Add breadcrumb navigation for blog posts
- [ ] Implement dark mode (optional — currently light-only)
- [ ] Add search functionality to blog

---

## 📊 Brand & Positioning (Lower Priority)

- [ ] Domain consolidation strategy (haxbyte.com vs dougrosenbergdev.com)
- [ ] Clarify relationship between Haxbyte, dougrosenberg.com (music), and portfolio sites
- [ ] Consider: separate blog for "AI/LLM engineering" topics (vs small business focus)
- [ ] Update LinkedIn profile to reference Haxbyte as main consulting brand

---

## 🚧 Future Expansion (Nice-to-Have)

- [ ] "Build guide" for small business owners (educational content)
- [ ] Free site audit tool (simple performance + SEO checker)
- [ ] BizMachina case study (once it's ready to showcase)
- [ ] Workshop/consulting content (teach small business owners about web strategy)
- [ ] Podcast or video content series

---

## Notes

- **Launch blocker:** Friend's approval on "Haxbyte" name (not legal, personal courtesy)
- **Git constraint:** No commits 8:30am–5pm CT, Mon–Fri (Doug's day job)
- **Docs rule:** Keep docs/ in sync with code changes (implemented 2026-08-11)
- **Brand assets:** Logo SVGs need redraw from DALL-E reference (not critical for launch)
