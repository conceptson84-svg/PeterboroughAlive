# Peterborough Alive — New Website Plan

_Produced via `/plan-ceo-review` (SCOPE EXPANSION mode), 2026-08-08._
_Build approach: **B — static site + lightweight CMS + embedded services.**_

---

## 1. What Peterborough Alive is

A Christian charity initiative, **established 2018**, run by **RCCG City of Grace Church, Peterborough**.
It stages **free gospel music events** to unite the diverse communities of Peterborough, Cambridgeshire —
"praise, worship and prayer for the community." Tagline: **_Uniting community. Transforming lives._**

- **Events:** annual concerts, 2018 → 2023+ (past artists: Nathaniel Bassey, Philippa Hanna,
  Faith Child, Simply Andy, Lima Blaze, the Peterborough Alive Mass Choir).
- **Contact:** info@peterboroughaliveconcert.org · Wellington Street, Peterborough, PE1 5DU.
- **Brand:** plum/burgundy shield + gold flame/torch logo ("Est. 2018"); navy + gold event styling.

## 2. The problem with the old site

The previous site (`peterboroughaliveconcert.org`, Wix, last meaningful update ~2023) was a **static
4-page brochure** (Home, Artists, Partners, Contact). It could not: show the next event's date/venue
prominently, present past years, or surface the mission with any energy. It was a flyer, not a hub.

**Premise reframed:** the goal isn't "a prettier brochure." It's a **living hub for the annual event**
that a volunteer team can keep current, that looks and feels as alive as the events themselves, and that
newcomers can find on Google.

## 3. Scope decisions (SCOPE EXPANSION ceremony)

### In scope — baseline
- **Home** with a bold **"Next Event"** hero: date, venue, headline artists, big photo, primary CTA.
- **About** — mission, story since 2018, the church behind it.
- **Artists / Lineup** — current-year lineup + short bios (reuse existing bios).
- **Contact** — email, address, map, simple contact form (spam-protected).
- Mobile-first, brand-styled (plum/gold/navy), fast, accessible.

### In scope — accepted expansions
| # | Feature | Why | Effort |
|---|---------|-----|--------|
| 4 | **Past-Events archive + yearly galleries (2018→now)** | Social proof for newcomers + SEO; reuses existing photography | S–M |
| 6 | **Partners & Sponsors page + "Sponsor us" CTA** | Opens a funding channel without handling money on-site | S |
| 7 | **Watch / livestream** (YouTube/Facebook embed) | Extends reach beyond the room; near-zero cost | S |
| 8 | **SEO + Google Event structured data** | Discovery via search & Google event results | S |

### NOT in scope (explicitly skipped — with rationale)
| Feature | Decision | Rationale / revisit note |
|---------|----------|--------------------------|
| Free RSVP / ticket registration | Skipped | Team chose walk-up model; no headcount data. Revisit if venue capacity becomes a constraint. |
| **Online donations + Gift Aid** | Skipped | **Biggest money-left-on-the-table item for a UK charity — recommend revisiting first.** Gift Aid reclaims 25% from HMRC. |
| Email capture / newsletter | Skipped | No compounding list; audience rebuilds each year via socials. Cheap to add later. |
| Get-Involved (volunteer/choir/partner forms) | Skipped | Contact page covers enquiries for now. |
| Full custom web app (Approach C) | Rejected at approach stage | PCI/GDPR liability + maintenance burden a volunteer team can't sustain. |

## 4. Build approach (B) & architecture

Static site generator + lightweight headless CMS + best-in-class embeds. No server, no database,
no payment/PII handled by us.

```
                         ┌─────────────────────────────┐
                         │   Headless CMS (Sanity/       │
                         │   Payload free tier)          │
                         │   - event (date, venue, CTA)  │
                         │   - artists[]                 │
                         │   - years[] + galleries[]     │
                         │   - partners[] / sponsors[]   │
                         └──────────────┬────────────────┘
                                        │ build-time fetch
                                        ▼
   ┌──────────┐   git push   ┌──────────────────┐   deploy   ┌─────────────────┐
   │ Content  │─────────────▶│  Astro / Next.js  │──────────▶│  Vercel / Netlify│
   │ editor   │              │  static build     │           │  (CDN, HTTPS)    │
   │(volunteer)│             └──────────────────┘            └────────┬─────────┘
   └──────────┘                                                       │
                                                                      ▼
                                          ┌───────────────────────────────────────┐
                                          │  Visitor's browser (mobile-first)      │
                                          │  Embeds loaded client-side:            │
                                          │   • YouTube/Facebook (Watch)           │
                                          │   • Google Map (Contact)               │
                                          │   • Contact form → Formspree/email     │
                                          └───────────────────────────────────────┘
```

**Recommended stack:** Astro (excellent for content sites, ships minimal JS) + Sanity (generous free
tier, friendly editor) + Vercel/Netlify (free, HTTPS, CDN). If no one will maintain a CMS, drop to
**Approach A**: keep content in markdown files edited directly — same front end, one fewer moving part.

### Sitemap / information architecture
```
Home ("Next Event" hero)
├── About
├── Lineup / Artists (current year)
├── Past Events
│     ├── 2018  → gallery + lineup
│     ├── 2019  → gallery + lineup
│     └── …     → gallery + lineup
├── Partners & Sponsors   → "Become a sponsor" CTA
├── Watch (livestream / watch-again)
└── Contact (email, map, form)
```

## 5. Relevant review findings (adapted for a static site)

Most engineering-review sections (DB migrations, N+1 queries, error/rescue maps) are **N/A** for a
static site with third-party embeds. The findings that genuinely apply:

**Security / privacy (the real surface):**
- **Contact form → spam & abuse.** Use a managed form service (Formspree/Basin) or Google Form with
  honeypot + hCaptcha. Never post form data to an unauthenticated endpoint you host.
- **GDPR.** A privacy policy is required (the old site had a heavy US-flavoured one — replace with a
  short UK/GDPR-appropriate policy). Only collect what the contact form needs; state purpose + retention.
- **No card/PII on-site** by design (donations skipped; if added later, use JustGiving/Stripe-hosted).
- **Embeds** (YouTube, Maps) — use privacy-enhanced/no-cookie embed modes; add a cookie notice only if
  embeds set cookies.

**Performance (a real, present issue):**
- The supplied event photos are **6–12 MB each** (`_MG_4128.JPG` is 12 MB). Shipping these raw would
  make the gallery unusable on mobile. **Requirement:** responsive images — resize + convert to WebP/AVIF,
  serve `srcset`, lazy-load below the fold. Astro's `<Image>` or an image CDN handles this.
- Target: Lighthouse mobile ≥ 90; hero LCP < 2.5s on 4G.

**Design / UX (this is the point):**
- Hero must answer "what, when, where, is it free?" in the first viewport. Free is a headline, not fine print.
- Interaction states to design: empty (no upcoming event → show "next event announced soon" + past
  highlights), gallery loading (blur-up placeholders), form success/error, video-not-live fallback.
- Accessibility: WCAG AA contrast (watch gold-on-white), keyboard nav, alt text on every photo, 44px
  touch targets.

**Deployment / ops:**
- Vercel/Netlify auto-deploy on git push; preview URLs per change; instant rollback (redeploy previous).
- Point `peterboroughaliveconcert.org` DNS at the host; enable HTTPS (automatic).
- Post-deploy check: hero renders, gallery loads, contact form delivers a test email, video embed plays,
  Google Rich Results test passes for the Event schema.

## 6. Dream-state delta

This plan moves ~70% toward the 12-month ideal: a living, self-updatable, discoverable hub with a
strong current-event story and a proof-rich archive. The remaining 30% (reserved seats, Gift-Aided
donations, a compounding email list) was **consciously deferred** — the architecture (static + embeds)
leaves all of it as a clean drop-in later, no re-platforming required.

## 7. Implementation tasks

- [ ] **T1 (P1)** — Scaffold Astro project in `PAlive-WEB/`, wire brand tokens (plum #5b2a4a-ish, gold, navy), fonts, logo.
  - Verify: `npm run dev` renders a styled home shell.
- [ ] **T2 (P1)** — Build Home with "Next Event" hero (date/venue/CTA) + empty-state ("announced soon").
- [ ] **T3 (P1)** — Image pipeline: resize/convert supplied photos to WebP/AVIF, `srcset`, lazy-load.
  - Verify: Lighthouse mobile ≥ 90; no image > 300 KB delivered.
- [ ] **T4 (P1)** — About + Lineup/Artists pages (port existing bios).
- [ ] **T5 (P1)** — Past-Events archive: one page per year + gallery component. Seed with 2023 photos.
- [ ] **T6 (P2)** — Partners & Sponsors page + "Become a sponsor" CTA (mailto/contact link).
- [ ] **T7 (P2)** — Watch page: YouTube/Facebook embed with not-live fallback.
- [ ] **T8 (P1)** — Contact page: managed form (Formspree) + map + spam protection.
- [ ] **T9 (P1)** — SEO: meta/OG tags, sitemap.xml, robots.txt, Event structured data (JSON-LD).
  - Verify: Google Rich Results test passes for the event.
- [ ] **T10 (P2)** — CMS wiring (Sanity) for event/artists/years/partners — OR markdown fallback (Approach A).
- [ ] **T11 (P1)** — Short UK/GDPR privacy policy + cookie notice (only if embeds set cookies).
- [ ] **T12 (P1)** — Deploy to Vercel/Netlify, connect domain, HTTPS, run post-deploy checklist.

**Suggested phases:** Phase 1 = T1–T5, T8, T9, T11, T12 (a real, shippable site). Phase 2 = T6, T7, T10.

## 8. Open questions for the client
1. **Next event date/venue** — is a 2026 event confirmed? Drives the hero (and whether we show a
   countdown vs. "announced soon").
2. **CMS or markdown?** — Is there a volunteer who'll maintain content, or should we keep it in code?
3. **Domain** — keep `peterboroughaliveconcert.org`, or move to a shorter `peterboroughalive.org`?
4. **Assets** — can we get the full photo archive per year (2018–2025) and this year's lineup + hi-res logo (SVG)?
5. **Registered charity number** — for the footer/trust (and required if donations are ever added).
