# Haxbyte

Astro site for [haxbyte.com](https://haxbyte.com) — Doug Rosenberg's build-in-public content
brand. See the repo root [`CLAUDE.md`](../CLAUDE.md) and [`docs/`](../docs/) for the full
brief (positioning, design system, content strategy); this file covers running and working
in this Astro project specifically.

## Commands

Run from `site/`:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`            |
| `npm run preview`   | Preview a production build locally            |
| `npm run astro ...` | Run any Astro CLI command (e.g. `astro check`)|

## Project structure

```
src/
├── pages/            routes: index, about, contact, /blog, /blog/[slug],
│                      /work, /work/[slug], sitemap.xml, 404
├── layouts/           Base.astro (site chrome), BlogPost.astro
├── components/        PulseLine.astro (pulse-line signature motif)
├── content/
│   ├── blog/          blog posts (Markdown + frontmatter)
│   └── work/           project write-ups
├── content.config.ts   content collection schemas (blog, work)
├── lib/posts.ts        getPublishedPosts() — see "Publishing a blog post" below
└── styles/tokens.css    design tokens (color, type, spacing)
```

## Publishing a blog post

Every post-listing page (`/`, `/blog`, `/blog/[slug]`, `sitemap.xml`) pulls from
`getPublishedPosts()` in `src/lib/posts.ts`, not the raw collection — so a post's visibility
is controlled in exactly one place, two ways:

- **`draft: true`** in a post's frontmatter — routine WIP status. Hidden from prod listings
  and the sitemap; still visible in `npm run dev` so you can preview before flipping to
  `draft: false`.
- **`BLOCKED_SLUGS`** in `src/lib/posts.ts` — a hard gate for posts under separate review
  (e.g. content/confidentiality concerns) that must stay unpublished even if `draft` gets
  flipped by mistake. Never built, in any environment, until removed from the list in code.

Full detail and current blocklist status: [`docs/content-strategy.md`](../docs/content-strategy.md#publishing-gate-for-blog-posts).

## Deploy

Cloudflare Workers, static assets (see `wrangler.jsonc`). Custom domain: haxbyte.com.
