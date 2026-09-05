<!--
Template for a new /work build-log entry, based on the hardware-etc.md pattern
(see site/src/content/work/hardware-etc.md).

Placement note: this file lives in docs/templates/, NOT in site/src/content/work/.
The work collection's loader (site/src/content.config.ts) is
`glob({ pattern: '**/*.md', base: './src/content/work' })`, and Astro's glob loader
(node_modules/astro/dist/content/loaders/glob.js) has no underscore-prefix exclusion and
no `draft` field exists in the work schema — every .md file it matches becomes a real
getStaticPaths() entry in site/src/pages/work/[slug].astro with zero filtering. A file
like `_template.md` dropped into site/src/content/work/ would build and publish live at
/work/_template. So this template is kept entirely outside the content collection to
guarantee it can never accidentally go live. Copy this file's content into a new file
under site/src/content/work/ (e.g. site/src/content/work/some-client.md) to start a
real entry.

Voice/tone rules: see docs/frontend-principles.md's "Copy & voice" section — plain,
concrete, build-in-public/teaching voice for a technical or recruiter-side reader, not
a sales pitch. Cut agency-cliché filler ("seamless," "cutting-edge," "elevate").
-->

---
title: [Client Name — short project descriptor, e.g. "Materials Supplier Site"]
client: [Client Name]
description: [One sentence, written for a cold reader on the /work index card — what the project was and who it's for. Match the specificity of hardware-etc.md's description, not a generic summary.]
tags: [[platform/stack, e.g. squarespace], [project type, e.g. small business], [domain, e.g. b2b], [e-commerce]]
featured: [true or false — true surfaces this on the /work index above non-featured entries]
---

## What it needed

[State the real business problem the old site/situation failed at — concrete and specific,
not a vague "needed a redesign." hardware-etc.md names the actual buyer (a developer or GC
comparing suppliers) and the actual failure (an unstyled placeholder page with no layout or
branding). Name who the real audience/buyer was and what they couldn't do or trust before
this work. Include a real "before" image if you have one, e.g.:
![Alt text describing the old site's actual state](/work/[client-slug]-before.jpg)]

## What I built

[Cover the concrete decisions and tradeoffs you made — not a feature list. hardware-etc.md
explains WHY Squarespace was the right call for this client (no developer needed to update
copy/photos), then walks through the harder problem (two very different real-world
audiences using the same site) and how specific choices (nav, image weight, hierarchy,
catalog structure) served both. Every claim should be a decision with a reason attached,
not a bullet of capabilities. Include real before/after or in-progress images inline near
the decision they illustrate, e.g.:
![Alt text describing what this image actually shows](/work/[client-slug]-hero.jpg)]

## How it turned out

[A short, honest outcome statement — not inflated results or fabricated metrics. If there's
a real number (traffic, a client quote, a concrete outcome), use it; otherwise describe
plainly what the site/project now does for the business, the way hardware-etc.md's closing
line does ("the first credibility check a developer or GC runs before they ever pick up the
phone"). Link the live site if there is one:
**Live site:** [site name](https://example.com)]
