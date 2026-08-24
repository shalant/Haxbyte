# Content & sitemap

**Status:** Site structure implemented as of 2026-08-11. All pages and dynamic routes are in place. Real client case studies added to `/work` portfolio: Hardware Etc LLC, Sonus Construction Group.

## What this site does

Content hub for a cold/discoverable audience — recruiters, engineers, future employers, not
referred consulting prospects (that audience is `dougrosenbergdev.com`'s job now). Home for
blog posts and build logs that get repurposed into LinkedIn content (build-in-public,
teaching, learning-journey posts).

**Positioning:** build-in-public / teaching voice aimed at technical credibility, not a
sales pitch. Consulting leads, client-facing portfolio work, and case-study-as-proof content
route to `dougrosenbergdev.com` under Doug's real name instead — see the domain-split
decision in the brand plan doc for the full reasoning.

## Sitemap

- `/` — home: hero, recent posts
- `/work` — build logs: write-ups on what I built, how, and why
- `/blog`, `/blog/[slug]` — content hub
- `/about` — brief story, tuned for a technical/recruiter reader
- `/contact`

## Content collections

- `blog` — title, date, tag: `build-in-public` / `teaching` / `case-study` / `learning`
- `work` — build logs: client/project type, before/after images, write-up of what got built
  and how

### Published Work (as of 2026-08-11)

- **Hardware Etc LLC** — B2B materials supplier (Squarespace). Focus: professionalism, bulk purchasing, B2B workflow.
- **Sonus Construction Group** — General contractor specializing in multi-family renovations (Squarespace). Focus: positioning, process, team-based approach, international procurement.

## Publishing gate for blog posts

Two independent mechanisms decide whether a blog post is publicly reachable. Both live in
code, not just frontmatter, so a post's exposure is never a silent side effect of editing a
Markdown file.

1. **`draft: true`** (frontmatter field, `blog` collection schema in `content.config.ts`) —
   routine unpublished/WIP status. Hides the post from the homepage, `/blog` index, and
   sitemap in production; still visible in local dev (`import.meta.env.DEV`) so it can be
   previewed before flipping to `draft: false`.
2. **`BLOCKED_SLUGS`** (hardcoded set in `site/src/lib/posts.ts`) — a hard gate for posts
   under separate review (e.g. content/confidentiality concerns), independent of the `draft`
   field. A blocked slug never builds a page, in any environment, even if `draft` is
   (accidentally or otherwise) set to `false`. Clearing it requires editing the code, not the
   post.

All post-listing pages (`/`, `/blog`, `/blog/[slug]`, `sitemap.xml`) pull from the single
`getPublishedPosts()` helper in `posts.ts` rather than querying the collection directly, so
both gates apply everywhere consistently.

**Cleared 2026-08-23:** `dashboards-lie-until-you-check-raw-output` and
`saxophone-navbar-i-cant-ship` were held in `BLOCKED_SLUGS` pending content review — the
dashboard post specifically because it originally named Google Analytics and gave a specific
form count, which risked reading as identifiable to Doug's day job. Genericized (no
product/vendor names, no specific counts) and unblocked; both now publish normally.

## Content format priorities

From the brand plan:

1. Before/after or WIP progress shots
2. Case study breakdowns
3. Teaching/process posts
4. Build-in-public learning posts

## Source of truth for business strategy

This doc set covers the technical/design brief only. Positioning, content plan, and
business action items live in the `career-development` repo's
[`HAXBYTE_BRAND_PLAN.md`](../../career-development/projects/HAXBYTE_BRAND_PLAN.md) —
treat that as authoritative for anything strategy-related.
