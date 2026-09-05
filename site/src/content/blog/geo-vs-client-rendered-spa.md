---
title: Why GEO Doesn't Work on a Client-Rendered SPA
date: 2026-09-04
tags: [teaching, case-study]
description: Everyone's writing GEO advice like it's SEO with new vocabulary. None of it addresses the actual question for a client-rendered app — what a plain HTTP GET returns before any JavaScript runs.
image: /blog/geo-vs-spa-header.svg
imageAlt: Two browser-window illustrations side by side. The left, labeled BROWSER, shows a fully rendered page with a headline, paragraphs, cards, and a checkmark. The right, labeled AI CRAWLER, shows the same URL returning an almost-empty page with a dashed circle marked "empty."
draft: true
---

Everyone's suddenly writing about GEO — Generative Engine Optimization, getting your content surfaced by AI answer engines instead of just ranked by Google. Most of it reads like SEO advice with new vocabulary: structured data, an `llms.txt` file, clearer copy.

None of it answered the actual question I needed answered for a Blazor WebAssembly site I maintain: what does an AI crawler get when it fetches the page, given that the page doesn't really exist until a browser runs it?

Most AI crawlers issue a plain HTTP GET and read whatever HTML comes back — they don't boot a multi-megabyte WASM runtime to render the real content. So I did the same thing myself, with nothing but `curl`, to see what's actually there.

What survives: the `<head>` — meta tags, a few blocks of JSON-LD structured data, and a static markup snapshot of the hero section built for an unrelated performance reason. What doesn't survive: everything else — the actual bio, the real content, all of it sitting behind a loading spinner until the client-side runtime finishes booting.

The twist: the real content already existed as plain static JSON files, fetched at runtime — exactly as crawlable as any other file on the site — except the site's own `robots.txt` was blocking crawlers from every `.json` file with a blanket rule meant to keep them out of framework internals. The rule meant to protect the site from noise was also hiding the one place real content already lived in crawlable form.

Fixed both: narrowed the `robots.txt` rule to actually target the framework internals instead of every JSON file, and added an `llms.txt` with a plain-text summary AI systems can read without parsing or rendering anything.

Neither fixes the deeper problem — per-page content is still invisible to anything that won't run the client runtime. That needs real prerendering, not a content file.

Still, a good reminder: if you're running any client-rendered SPA and haven't checked what a plain `curl` of your own homepage returns, do that before writing GEO advice into a meta tag.
