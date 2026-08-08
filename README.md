# Peterborough Alive — website

Static site for Peterborough Alive, the free gospel music celebration in
Peterborough, Cambridgeshire (est. 2018). Built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing content (no coding needed)

All text and data live in `src/data/`:

- **`site.ts`** — the next event (currently **2027**), contact details, navigation.
  After a pause in 2025 and 2026, `nextEvent` points at 2027. Set `date`, `isoDate`,
  and `venue` once confirmed — filling `isoDate` also switches on the Google Event listing.
- **`artists.ts`** — the homepage lineup. Set `lineupConfirmed = true` when the 2027 bill is booked.
- **`pastEvents.ts`** — one entry per year. Drop photos into `src/assets/photos/`,
  reference them in a `gallery`, and the archive page builds itself.
- **`partners.ts`** — partner and sponsor names.

## Photos

Source photos live in `src/assets/photos/`. Astro automatically resizes them,
converts to WebP/AVIF, and generates responsive `srcset` at build time — so you can
drop in large originals and the site still loads fast on mobile. Replace the current
web-sized copies with full-resolution originals when available.

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages). Build command
`npm run build`, publish directory `dist/`. Update `site` in `astro.config.mjs`
to the final domain before launch.

## Not yet built (deferred by scope decision)

Free RSVP, online donations + Gift Aid, email capture, and Get-Involved forms were
consciously left out of v1. The static architecture means each can be added later
via an embed (Ticket Tailor, JustGiving/Stripe, Mailchimp) without re-platforming.
See `../PLAN.md`.
