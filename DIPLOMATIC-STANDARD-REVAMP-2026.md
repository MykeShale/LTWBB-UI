# LTWBB — International / Diplomatic-Standard Revamp Brief
### Let's Talk with Bossbaby · Audience-elevated design directive · 2026

> **Why this document exists:** LTWBB's audience profile has changed. Rhoda Kavutha Mwongela now serves as PA in the Murang'a County Government, has sat in direct conversation with figures like **Prof. PLO Lumumba**, and holds national recognition (Activist of the Year 2022, Young Advocate Award 2026). The site will be viewed by county/national government officials, continental civil-society leaders, and potential institutional partners — not only youth seeking support. The design and content must hold credibility in **both** rooms simultaneously: a 19-year-old in crisis at 2am, and a Permanent Secretary deciding whether to fund a partnership.
>
> This brief is additive — it does not replace `LTWBB.md`, `revamp.md`, `content.md`, or `design.md`. It is the **elevation layer** on top of them, plus a live bug audit of the current codebase at `C:\Users\Myke\Desktop\Work\ltwbb\ltwbb`.

---

## 0. Audit: What's broken right now (fix before anything else)

`git status` shows the team photo set was moved from `public/images/*` into `public/images/team/`, but **18 `<img>`/`src` references across the codebase still point to the old deleted paths**. Every one of these is currently a broken image in production:

| File | Broken reference |
|---|---|
| `components/sections/HeroSection.tsx:198` | `/images/rhoda.jpg` |
| `components/sections/FounderSpotlight.tsx:50` | `/images/nivishe.jpg` |
| `components/ui/HeroSection.tsx:77` | `/images/nivishe.jpg` |
| `components/sections/ProgramsSection.tsx:41` | `/images/ambassador.jpg` |
| `components/sections/CommunityGallerySection.tsx:100` | `/images/aylf.jpg` |
| `app/(public)/about/page.tsx` (9 refs) | `rhoda.jpg`, `dennis.jpeg`, `fidelis.jpeg`, `musembi.jpeg`, `ann.jpeg`, `mike.png`, `peter.jpeg`, `mbondo.jpeg`, `wandera.jpeg`, `nivishe.jpg` |
| `app/(public)/page.tsx:582` | `/images/webinars.jpg` |
| `app/(public)/webinars/page.tsx` (4 refs) | `/images/webinars.jpg` |

**Fix:** prefix every one of these with `/images/team/`, or better — read the section below on image architecture and migrate to named, semantic filenames instead of person-name JPEGs. This is a one-pass find/replace; do it first since right now the homepage hero and founder section are silently showing broken `<img>` icons to every visitor, including any government official who clicks the link.

---

## 1. The positioning shift

**Old framing:** "modern NGO, premium wellness startup energy."
**New framing:** "the same calm, human warmth — but now credible enough to sit on a county government letterhead, a continental advocacy panel, and a 2am crisis search result, without changing its voice for any of them."

Think of three real visitors and design so all three feel correctly addressed by the same homepage:

1. **A struggling young person**, alone, on a cracked Android screen, searching "mental health help Kenya."
2. **A county government partnerships officer** vetting LTWBB before a funding conversation, comparing it mentally to MSF, Amref, or a UN agency microsite.
3. **A continental figure** (the Lumumba tier) who met Rhoda once, is now googling her organization to see if it's serious before mentioning it publicly.

None of these three should be made to feel the site was built for someone else. That's the design problem — not "make it fancier."

---

## 2. What "international standard" actually means here (and what it doesn't)

**It does NOT mean:**
- More gold/luxury styling, more shine, more "premium SaaS" gradients
- Removing warmth or making the tone clinical/corporate
- Adding stock-photo diplomats shaking hands
- A second redesign that throws out the navy/royal-blue/Cormorant-Garamond/DM Sans system already specified in `revamp.md` — that system is correct and should stay

**It DOES mean:**
- **Editorial restraint** — the visual language of *The Guardian Long Reads* / MSF annual reports, not a charity gala invite
- **Verifiable credibility signals** placed where institutional visitors look first: registration number, SDG alignment, named partners, dated milestones, real photography of real moments — not icons standing in for facts
- **A dedicated "Recognition & Engagements" surface** — see Section 4 — that documents meetings, awards, and institutional touchpoints (Lumumba conversation, county role, 2022/2026 awards) with the same factual rigor as a press kit, not a testimonial carousel
- **Bilingual dignity** — EN/SW already planned; for continental reach, the institutional-facing pages (`/for-institutions`, `/about`) should read cleanly even skimmed by a non-Kenyan reader who has zero local context
- **Photography that survives a large screen in a boardroom**, not just a phone scroll — see Section 5

---

## 3. Content corrections to apply across all docs and pages

These facts should be the single source of truth going forward — reconcile `LTWBB.md` and `revamp.md`, which currently say "Private Secretary to the Deputy Governor" in some places:

```
Role:            Private Secretary / PA, Office of the [Deputy Governor], 
                 Murang'a County Government
Awards:          Activist of the Year — 2022
                 Young Advocate Award — 2026
Notable engagement: In-person conversation with Prof. PLO Lumumba
                 (verify exact context/date/forum before publishing — 
                 see "do not fabricate" rule below)
```

**Hard rule carried over from `revamp.md`:** do not publish the Lumumba meeting, or any dignitary engagement, with invented context (no fictional event name, no invented quote, no invented date). Get the real one-line factual context from Rhoda directly — e.g. "during [X forum] in [month/year]" — before it goes on the site. A vague or fabricated claim is worse for credibility with this audience than omitting it. If the real detail isn't confirmed yet, hold the section as a placeholder rather than publish unverified.

---

## 4. New section: "Recognition & Engagements"

Add this as a distinct module — not folded into the existing testimonials carousel, which is the wrong register for it. Place it on `/about` directly after the Story Timeline, and as a condensed version on the homepage between Founder Spotlight and Programs.

**Design pattern: an editorial "credentials strip," not a photo gallery.**

```
Layout:  Horizontal scroll on mobile, 3-up grid on desktop
Style:   White background, thin 1px navy-mist divider lines between items
         No card shadows, no rounded "achievement badge" styling —
         this section should look like a CV/press page, not a trophy shelf

Each entry:
  Date (Space Mono, 11px, royal blue)  e.g. "2026"
  Title (Cormorant, 20px, navy)        e.g. "Young Advocate Award"
  Context line (DM Sans, 14px, muted)  e.g. "[Awarding body], recognizing
                                        five years of mental health advocacy
                                        across Murang'a County and beyond."
  Optional photo (square, 1:1, desaturated 10%, navy duotone on hover only)

Entries to include (verify each before publishing):
  2021  Founded LTWBB at Murang'a University of Technology
  2022  Activist of the Year — [confirm awarding body]
  2023  Nivishe Foundation Fellowship (12-week certification)
  2024  LTWBB formally registered as a CBO
  2025  Appointed PA, Office of the Deputy Governor, Murang'a County
  2026  Young Advocate Award — [confirm awarding body]
  2026  [Lumumba engagement — pending confirmed context]
```

This format does three things the badge-pill version (`AwardBadges.tsx`) doesn't: it reads as documentation rather than decoration, it scales cleanly to add future engagements without redesigning a pill row, and it's the format a government partnerships officer or journalist will actually trust.

Keep `AwardBadges.tsx`'s compact pill version for the hero floating badges — that's the right register for a quick visual hit. This new section is the *expanded, sourced* version for anyone who clicks in.

---

## 5. Image system — what to shoot/source, and how to lay it out

The single biggest gap between "good NGO site" and "institution-ready site" is photography discipline. Icons and gradients can only carry a design so far before it reads as a template; specific, well-treated photography is what makes it feel like a real organization with a real footprint.

### 5.1 Photo treatment standard (apply to every photo on the site)

```
Color:      Slight desaturation (-8% to -12%) for a documentary, not 
            Instagram-filtered, feel
Overlay:    Navy gradient overlay only on hero/full-bleed images 
            (rgba(26,42,92,0.4) → transparent), never on portrait/card photos
Crop:       No centered "passport photo" crops for anyone except small 
            avatar contexts. Editorial crops — subject off-center, 
            environment visible, motion/context implied
Grain:      3% SVG feTurbulence grain on hero and founder images only 
            (already implemented in FounderSpotlight.tsx — keep, extend 
            to hero and engagement photos)
Aspect:     Standardize: 3:4 for portraits, 16:9 for environmental/event, 
            1:1 for the Recognition strip, 4:5 for gallery masonry
```

### 5.2 Image inventory needed (what to actually go shoot/source)

This is the gap analysis — what the current 13-photo set (mostly headshots) can't carry:

1. **Hero environmental shot** — Rhoda *in action*: mid-session facilitating, walking with community members, at a county office doorway — not a static portrait. This single image does more credibility work than any copy on the page.
2. **Institutional context shot** — Rhoda in the Murang'a County Government office setting, professional dress, environment visible (desk, county seal/signage if appropriate, not staged). This is what answers "is this person actually connected to government" before anyone reads a word of bio copy.
3. **Engagement/meeting photography** — if a real photo exists from the Lumumba conversation or comparable engagements, this is the single highest-value asset for the Recognition section. If none exists yet, flag this as a priority capture for the next engagement rather than fabricate context around an old photo.
4. **Community/program photography** — wider shots of actual sessions (Tree Therapy, Green Schools, ambassador walks) with real participants, real locations, visible weather/light — not posed group photos against a blank wall.
5. **Award/recognition moment** — the actual award presentation photo for 2022 and 2026, if they exist. These outperform a generated badge graphic every time for this audience.

If 1–3 don't exist yet as real photography, say so plainly to Rhoda's team rather than placeholder them — a tasteful gradient-and-typography hero with no photo is more credible than a stock photo or an unrelated image stretched to fit.

### 5.3 Layout patterns by section

```
HOME HERO
  Two-column 50/50 → swap the static portrait for the environmental 
  action shot (5.2.1). Keep floating award badges, keep navy gradient. 
  This single swap is the highest-leverage change on the whole site.

FOUNDER SPOTLIGHT (/  and /about)
  Keep current 3:4 frame + grain + award strip pattern — it's well-built.
  Swap source image from broken /images/nivishe.jpg to the institutional 
  context shot (5.2.2) once available; current Nivishe-fellowship photo 
  is a fine interim choice once the path is fixed.

RECOGNITION & ENGAGEMENTS (new, Section 4)
  1:1 square crops, documentary grade, no decoration — see 5.1.

COMMUNITY GALLERY (/gallery, CommunityGallerySection.tsx)
  Masonry grid, 4:5 dominant ratio, category filter already speced in 
  revamp.md — prioritize sourcing real session/event photography (5.2.4) 
  over the current single ambassador.jpg/aylf.jpg pairing carrying the 
  whole section.

PROGRAMS GRID
  Icon-driven cards are fine for the 7-program overview, but at least 
  the top 2–3 programs (Tree Therapy, Green Schools) should get one real 
  environmental photo each on their detail view — an icon alone reads 
  thin once a visitor clicks through expecting substance.

FOR-INSTITUTIONS PAGE (new page from revamp.md, not yet built)
  This page in particular should lead with the institutional context 
  shot (5.2.2) and the Recognition strip — it's the page a government 
  or NGO partner actually lands on.
```

---

## 6. Typography & layout — confirm, don't replace

`revamp.md` already specifies Cormorant Garamond (display) + DM Sans (body) + Space Mono (data/labels), navy/royal-blue palette, 12-column 1400px grid, generous 120px section padding. This system is already at the right altitude for an institutional audience — editorial seriousness without medical coldness, warmth without looking like a charity template. **Do not change the type/color system.** The work here is photography, content accuracy, and the new Recognition module — not a visual identity reset.

One addition worth making: on `/about` and `/for-institutions` only, increase body line-length restraint (max 65ch) and add a printable/PDF-export affordance for the institutional bio + Recognition section — government partnership officers often forward a one-pager internally before a meeting. A clean "Download One-Pager (PDF)" button using the existing `react-pdf` dependency (already planned in Phase 3/4 of `revamp.md`) pays for itself here.

---

## 7. Priority order

```
1. Fix the 18 broken image paths (Section 0) — ships today, zero design risk
2. Confirm real facts: exact title/office, both award-granting bodies, 
   Lumumba engagement context — blocks Section 4 from publishing
3. Source/shoot the 5 photo gaps in 5.2 — blocks the hero swap and 
   Recognition section from being more than a placeholder
4. Build Recognition & Engagements module (Section 4) on /about + home
5. Swap hero image once 5.2.1 exists
6. Build /for-institutions page per revamp.md, leading with 5.2.2 + 
   Recognition strip
7. Add One-Pager PDF export for institutional visitors
```

---

*Prepared as an elevation layer on top of `LTWBB.md`, `revamp.md`, and `content.md`. Source audit performed directly against the live codebase at `C:\Users\Myke\Desktop\Work\ltwbb\ltwbb` on 2026-06-19.*
