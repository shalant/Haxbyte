# Architecture

## Stack

- **Astro** + Markdown content collections — static output by default, shared layouts
  avoid copy-pasting HTML across ~20 posts per site expected from repurposed blog content.
- **Plain modern CSS** (custom properties, `:has()`, container queries, native nesting) —
  no Tailwind, deliberately, to avoid the generic "Tailwind card grid" look and keep full
  control over a distinctive visual system.
- **View Transitions API** (Astro's built-in `<ClientRouter />`) for smooth page/section
  transitions — native browser support, no animation library required.
- **Cloudflare** for hosting — free tier covers this site's traffic entirely, git-push
  deploy, global CDN. Deployed 2026-08-16 via Cloudflare's unified "Workers & Pages" flow
  (classic Pages' dashboard fields have been replaced by a Wrangler-based Workers
  static-assets deploy — see `site/wrangler.jsonc` and `docs/TODO.md`'s Cloudflare setup
  notes), not the original "Cloudflare Pages" product this doc was written against; the
  hosting rationale below is unchanged.
  - Rejected: Azure Static Web Apps (Doug's day-job stack — would work, but is more
    infrastructure than a static marketing site needs, and undercuts the "deployed for $0"
    content angle).
  - Rejected: GoDaddy hosting (not built for git-based static deploys).
- **Domain:** `haxbyte.com`, registered with Cloudflare (transferred from Hostinger; confirmed
  in the Cloudflare dashboard's Domains → Registrations, Active, expires Dec 17, 2027,
  auto-renew on). DNS also lives on Cloudflare, so registration and DNS are consolidated in
  one place.
- **Contact:** not yet decided — plain `mailto:`/Calendly link (zero setup, default choice
  given the "no spend until there's a client" rule) vs. an actual on-page form (would need
  Cloudflare Pages Functions or a free-tier service like Formspring).

## Status

**Build complete and positioned as of 2026-08-11.** The Astro project is production-ready with:
- Design system (CSS tokens, typography, layout, branded components)
- All page routes (/, /about, /contact, /blog, /work)
- Dynamic routes for blog posts and portfolio pieces
- Content collections configured (2 real client case studies live)
- Base layouts and components in place
- Strong positioning based on Doug's enterprise background
- Logo and visual branding integrated throughout
- Performance and accessibility standards built in

Ready for launch. Next: content expansion, blog posts, marketing.

See [`open-decisions.md`](./open-decisions.md) for what's still unresolved, including the
launch blocker.
