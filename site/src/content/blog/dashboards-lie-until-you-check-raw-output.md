---
title: Dashboards Lie Until You Check the Raw Output
date: 2026-08-18
tags: [teaching, case-study]
description: A handful of broken lead-gen forms, an unfamiliar corner of the stack, and the habit that actually confirmed the fix — checking raw output instead of trusting the dashboard.
image: /blog/dashboards-lie-header.png
imageAlt: Illustration of a dashboard showing a passing checkmark and a rising bar chart, with a corner peeled back to reveal raw log output underneath, including one highlighted error line and a magnifying glass over it.
---

A handful of lead-gen forms on a site I maintain had been silently failing to report data to its analytics setup — for who knows how long, since nothing was throwing an error.

I used Claude to map the unfamiliar territory fast: which pieces were actually involved, what "success" would even look like, and how to navigate an analytics dashboard I don't spend much time in.

I turned that into a discovery doc and a step-by-step implementation runbook — a way to work confidently in a part of my own stack I don't touch often.

Then the unglamorous part: small changes, deliberately broken failure paths to see what they'd actually do, manual confirmation at every step, and a push.

The dashboard said things were fine well before I trusted that. I only called it done after checking raw output via custom JavaScript in the console myself.

That habit paid off — while verifying, I found a second, unrelated bug: a silent failure further downstream in the same integration. Fixed that one too, same rule: don't trust it until you've verified it yourself.

Anyone else find that dashboards lie until you check the raw output yourself?
