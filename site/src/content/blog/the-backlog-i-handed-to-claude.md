---
title: The Backlog I Handed to Claude for a Day
date: 2026-09-05
tags: [build-in-public, learning]
description: What shipped clean on its own, what needed my own eye anyway, and the bug I only found because it double-checked raw output instead of trusting a dashboard.
draft: true
---

My TODO list for this site had the usual pile of small, well-defined items nobody prioritizes when time is short — a stale checklist note, a stretched logo standing in for a real social-share image, a design idea from three weeks ago that never got prototyped. So instead of letting it sit, I handed the backlog to Claude Code for a day and let it work branch-by-branch, PR-by-PR, while I was out.

The boring stuff shipped clean on its own: a proper social-share image built from the actual brand tokens instead of a stretched logo, a client-side search box on the blog, and two TODO notes that turned out to already be done and just never got checked off.

One item needed my own judgment anyway. It prototyped a subtle wall-panel texture for the homepage hero — right mechanism, tasteful idea — but its first pass at the opacity read as a loud grid fighting the headline for attention. It caught that itself and dialed it back, but the actual "does this fit the brand" call was still mine to make from a live preview link before I merged it.

Then I asked it to check how the site was actually performing on search. Instead of just repeating the analytics dashboard number, it ran a live search for the site and pulled the real robots.txt off the edge — and found that a bot-management feature I'd never touched was silently blocking the exact AI crawlers I'd spent effort making the site legible to. Nothing in my own docs would have caught that. Only checking the raw response did.

Same lesson as always, just from the other side this time: scoped, reversible work with a fixed process — branch, build check, PR — is a different trust boundary than anything that touches taste or goes out unsupervised.

What's on your backlog that you'd hand off versus keep for yourself?
