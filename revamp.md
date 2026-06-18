# LTWBB Website -Full Revamp Prompt
## Let's Talk with Bossbaby | letstalkwithbossbaby.org
**Comprehensive Design & Development Brief · May 2026**

---

## MISSION CONTEXT

Build the full website for **Let's Talk with Bossbaby (LTWBB)** -a registered Kenyan mental health Community-Based Organisation founded and led by **Rhoda Kavutha Mwongela (Bossbaby)**. Rhoda is 25, an award-winning mental health activist, Private Secretary to the Deputy Governor of Murang'a County, and founder of LTWBB since 2021. The site must feel as serious and credible as a global mental health NGO while remaining warm, human, and accessible to a young Kenyan audience navigating real pain.

**Core tension to resolve in design:** The site must feel safe enough for someone in crisis, credible enough for a county government partnership, and compelling enough to recruit youth ambassadors. All three simultaneously.

---

## AESTHETIC DIRECTION

### Concept: "Organic Institutional"
A rare intersection of editorial sophistication and grounded warmth. Think the visual language of a Kenyan nature reserve -textured, breathing, rooted -fused with the precision of a world-class healthcare institution. Not a charity. Not a startup. Something that feels like both a sanctuary and a movement headquarters.

### Palette
```
BRAND COLORS:
  Primary:    #2C3E8C (navy blue)
  Secondary:  #1A73E8 (royal blue)
  Accent:     #D6E4FF (light blue)
  Background: #FFFFFF / #F5F7FA
  Text:       #1A1A2E
  Crisis/CTA: #E53935 (red -crisis buttons ONLY)
```

### Extended Web Color System
```
PRIMARY VARIATIONS:
  Navy Dark:   #1A2A5C (deep navy for headers)
  Navy Light:  #4A5A9C (light navy for hover states)
  Navy Mist:   #E8EAF5 (very light navy for backgrounds)

SECONDARY VARIATIONS:
  Royal Dark:  #1557D0 (deep royal for CTAs)
  Royal Light: #4A8FFF (light royal for accents)
  Royal Mist:  #F0F7FF (very light royal for subtle backgrounds)

ACCENT VARIATIONS:
  Light Blue:  #D6E4FF (primary accent)
  Sky Blue:    #B8D4FF (medium accent)
  Ice Blue:    #F5F9FF (subtle accent)

SUPPORTING COLORS:
  Text Dark:   #1A1A2E (primary text)
  Text Light:  #4A4A6E (secondary text)
  Text Muted:  #7A7A9E (muted text)
  Border:      #E0E4F0 (subtle borders)
  Shadow:      rgba(44, 62, 140, 0.1) (soft shadows)

CRISIS SYSTEM:
  Crisis Red:  #E53935 (crisis buttons ONLY)
  Crisis Dark: #C62828 (crisis hover)
  Crisis Light: #FFCDD2 (crisis backgrounds)
```

### Typography
- **Display / H1–H2:** `Cormorant Garamond` -serif, editorial, human. Weights: 300 (light, italic) and 600 (semi-bold). This font carries emotional weight without aggression.
- **Body / UI:** `DM Sans` -clean, warm grotesque. Weight 300 for body, 500 for labels. Not Inter. Not Roboto.
- **Data / Accents:** `Space Mono` -monospace for stats, year labels, tags, helpline numbers. Creates credibility contrast against the soft serif.
- **Scale:** Display 80–96px (hero), H1 52–64px, H2 40–52px, H3 24–28px, body 16–17px, labels 11–13px with 1.5–2px letter-spacing uppercase.

### Motion Philosophy
- **Entrance:** Staggered fade-up (opacity 0→1, translateY 32→0) triggered on IntersectionObserver. Delay: 0.1s per successive sibling.
- **Hover states:** Subtle -never distracting. Cards lift 4px with shadow. Links extend underlines. Arrows shift right 6px.
- **Counter animation:** Stats count up from 0 on scroll into view. Use requestAnimationFrame, not setInterval.
- **Nav transition:** Transparent → `rgba(28,58,43,0.97)` with `backdrop-filter: blur(20px)` at 80px scroll.
- **No:** Parallax (accessibility). No heavy spring physics. No page transitions.

### Layout Philosophy
- **Grid:** 12-column, 1400px max-width container, 60px side padding desktop, 24px mobile.
- **Asymmetry:** Hero section 50/50 but intentionally imbalanced in visual weight (heavy photo right, light text left). Timeline offset left. Resources split 65/35.
- **Texture:** Subtle `radial-gradient` dot pattern overlaid at 4% opacity on hero. Grain overlay on founder section using SVG filter. No stock pattern images.
- **Negative space:** Generous. Sections breathe at 120px top/bottom padding. Don't compress.

---

## BRAND IDENTITY TO EMBED

```
Organisation:    Let's Talk with Bossbaby (LTWBB)
Tagline:         "Conversations Save Lives."
Founder/CEO:     Rhoda Kavutha Mwongela (Bossbaby)
Founded:         November 2021
Registered:      CBO 2024
Location:        Murang'a County, Kenya
Email:           info@ltwbb.org / letstalkwithbossbaby@gmail.com
WhatsApp:        +254 714 445 791 → wa.me/254714445791
Instagram:       @Bossbaby.mentalhealthadvocate
M-Pesa Till:     9721411
SDG:             Goal 3 -Good Health and Well-Being
Awards:          Activist of the Year 2022 | Young Advocate for Mental Wellness 2026
Cases Supported: 2,000+
Youth Reached:   20,000+
Year One Cases:  570+
Active Programs: 7
```

---

## GLOBAL ELEMENTS

### Navigation (Sticky, Transparent → Frosted Navy on Scroll)
```
Left:   LTWBB wordmark (Cormorant, 18px, letter-spacing 3px) + "Conversations Save Lives" submark (Space Mono, 8px, navy mist)
Center: About | Programs | Resources | Webinars | Our Story | For Institutions
Right:  [Partner With Us] (ghost outlined royal blue) | [Get Help Now →] (royal blue filled, links to crisis section)
Scroll: backdrop-filter: blur(20px), background rgba(26,115,232,0.97), shadow
Mobile: Full-screen slide-in drawer, hamburger trigger, crisis button pinned to bottom
```

### Crisis Strip (Above Nav -Every Page)
```
Background: var(--navy-dark)
Border-bottom: 1px solid rgba(26,115,232,0.3)
Content: "Struggling right now?" | Befrienders Kenya: 0800 723 253 (Free·24/7) | NACADA: 1192 | Red Cross: 1199 | [💬 WhatsApp Us] royal blue button
```

### Footer (4 Columns)
```
Col 1: LTWBB logo white + tagline + CBO badge + SDG badge + © 2026 + Kenya Data Protection compliant
Col 2: Navigate (all pages)
Col 3: Programs list (all 7)
Col 4: Contact details + emergency helplines
Bottom bar: Copyright left | Social icons right (Instagram, Facebook, LinkedIn, WhatsApp)
```

### Floating Elements
```
Bottom-right: WhatsApp button (56px circle, #25D366, 💬 icon, hover scale 1.1, glow shadow)
Bottom-left:  Wanjiku AI Chatbot (56px circle, navy blue, 🌿 icon, tooltip "Talk to LTWBB Assistant")
Right-edge:   Scroll-to-top arrow (appears after 400px scroll)
```

---

## PAGE 1: HOME (/)

### Section 1 -Hero
```
Layout:       Two-column 50/50, align-items center, min-height 100vh
Background:   linear-gradient(135deg, #2C3E8C 0%, #1A2A5C 40%, #1A73E8 100%)
              + dot grid pattern SVG at 4% opacity
              + diagonal accent wash on right half (polygon clip, rgba(26,115,232,0.15))

Left Column:
  Eyebrow:    Space Mono 10px, letter-spacing 3px, royal blue
              "KENYA'S MENTAL HEALTH VOICE · SINCE 2021"
              with 30px royal blue line before text

  H1:         Cormorant 84px, white, line-height 1.0
              "You Don't Have
               to Face It
               Alone."
              -"Alone." in italic light blue

  Sub:        DM Sans 17px, rgba(255,255,255,0.65), line-height 1.7, max-width 480px
              "LTWBB creates safe spaces where conversations heal -for individuals,
               communities, governments, and institutions across Kenya and beyond."

  CTAs:       [Get Support Today →] -royal blue filled, 14px 32px padding, letter-spacing 1.5px
              [Partner With LTWBB] -navy outlined

  Crisis line: 12px, rgba(255,255,255,0.5), top border separator
              "In crisis? Call Befrienders Kenya free: 0800 723 253 · 24/7"

Right Column:
  Photo frame: 420×540px, overflow hidden, gradient background (navy → royal blue)
               Bottom overlay: name "Rhoda Kavutha Mwongela" + title "Bossbaby · Founder & CEO"
  
  Floating badges (CSS keyframe floatBadge, 4s infinite):
    Badge 1 (top right -30px):  🏆 Activist of the Year 2022
    Badge 2 (bottom left -40px): 🏆 Young Advocate 2026
    Both: light blue background, shadow, padding 10px 16px, font 11px

  Horizontal royal blue rule at section bottom: gradient line, 0.4 opacity
```

### Section 2 -Impact Statistics Bar
```
Background:   var(--light-blue), bordered top/bottom with rgba(44,62,140,0.1)
Layout:       5-column grid, 1200px max-width

Stats (animate on IntersectionObserver with count-up):
  2,000+    Mental Health Cases Supported
  20,000+   Youth Reached
  570+      Cases in First Year (2023)
  7         Active Programs
  5+        Years of Active Advocacy

Each stat: number in Cormorant 48px navy, label in Space Mono 11px uppercase, dividers between columns
Hover: subtle royal blue background fill on column
```

### Section 3 -Founder Spotlight
```
Layout:   Two-column, 50/50, 100px gap, align center
          Left: photo/visual frame | Right: content

Left (Visual):
  Main frame: full-height, aspect-ratio 3/4, navy→royal blue gradient
  Accent top-right: 80×80px light blue border square offset +20px outside
  Accent bottom-left: 100px royal blue horizontal rule, -30px left
  Award strip at bottom: rgba(44,62,140,0.92) backdrop, 3 light blue pills:
    "Activist 2022" | "Young Advocate 2026" | "Nivishe Certified"
  SVG grain overlay: feTurbulence filter, 3% opacity, for texture

Right (Content):
  Eyebrow:    "MEET THE FOUNDER"
  Name:       "Rhoda Kavutha Mwongela" -Cormorant 52px, navy
  AKA:        '"Bossbaby"' -Cormorant 24px, light blue, italic
  
  Bio 1:      Rhoda founded LTWBB at 21 as a university student navigating her own
              mental health journey. What began as peer conversations became Kenya's
              most personal and impactful mental health CBO.
  
  Bio 2:      Today she leads LTWBB while serving as Private Secretary to the Deputy
              Governor of Murang'a County -bridging grassroots advocacy with institutional
              policy. She is proof that one conversation can change a life.
  
  Pull quote: Left-border 3px royal blue | light blue background | Cormorant 20px italic navy
              "Mental health is not a luxury. It is not a weakness. It is a human right -
               and I will not stop until every Kenyan knows that."
  
  Credentials (icon + text rows):
    🎓 BSc Linguistics & Communication -Murang'a University of Technology (2024)
    🎓 MSc International Relations & Diplomacy -Mount Kenya University (In Progress)
    ✅ Certified Mental Health Advocate -Nivishe Foundation (12-week Fellowship, 2023)
    🛡️ GBV Community Champion | Gender Technical Working Group Liaison, Murang'a County
    📰 Member, Media Council of Kenya -MCK0110485
    🏛️ Private Secretary, Deputy Governor's Office -Murang'a County (2025–Present)
```

### Section 4 -Programs
```
Background:   var(--navy-dark)
Header:
  Eyebrow:    light blue, "OUR PROGRAMS"
  H2:         "Mental Wellness for Everyone" -"Everyone" in light blue italic
  Sub:        "Seven active programs -for individuals, institutions, schools, and communities."

Filter tabs: [All] [For Individuals] [For Institutions] [For Schools] [For Communities]
  Active state: royal blue background | Inactive: transparent, white 60% border
  Filter logic: JS data-cat attribute matching, fade transition

3×2 program card grid (2px gap between cards):
  Each card:
    - rgba(255,255,255,0.04) background, border rgba(255,255,255,0.07)
    - Hover: lift 4px, rgba(255,255,255,0.08), diagonal royal blue gradient overlay
    - Icon (32px emoji), badge pills, H3 white, body text rgba(255,255,255,0.55)
    - Impact chips: Space Mono 10px, light blue
    - Link: navy color, "→" arrow shifts on hover

  Cards:
    1. 🌿 Counseling in Nature      [Individual · Therapeutic]   200+ sessions · 95% satisfaction
    2. 🌳 Tree Therapy Project       [Community · Healing]        2,500+ trees · 300+ participants
    3. 🏫 Green Schools Program     [Education · Youth]          15 schools · 5,000+ students
    4. 🙋 Mental Wealth Ambassadors [Leadership · Youth]         150 ambassadors · 50+ projects
    5. 🛡️ Civil Servants Program    [Institutional · Professional] 8 institutions · 500+ professionals
    6. 🤝 Awareness Walks & Events  [Community · Awareness]      25+ events · 3,000+ attendees
```

### Section 5 -Resources Preview
```
Background:   var(--ice-blue)
Layout:       65/35 split -main content left, sticky sidebar right

Left:
  Eyebrow:    "MENTAL HEALTH LIBRARY"
  H2:         "Knowledge That Heals" -"Heals" in light blue italic
  Sub:        "Free, Kenya-rooted mental health content in English and Swahili."

  Article list (numbered rows with dividers):
    Each row: [num Space Mono] | [tag pill + title Cormorant 20px + meta] | [→ arrow]
    Hover: row slides right 12px, arrow turns royal blue

    001  ANXIETY     Understanding Anxiety Disorders: A Kenya Guide              5 min · EN/SW
    002  MEN'S HEALTH  Why Kenyan Men Don't Talk About Mental Health             6 min · EN
    003  WORKPLACE   Burnout in Public Service: What Civil Servants Need         7 min · EN
    004  YOUTH       Campus Mental Health: What Kenyan Students Need to Know     5 min · EN/SW
    005  DEPRESSION  Signs of Depression and When to Seek Help                  6 min · EN/SW
    006  NATURE      How Tree Therapy Works: The Science Behind Nature Healing   4 min · EN
    007  FAMILY      Healthy Communication: Building Emotional Safety at Home    5 min · EN
    008  TRAUMA      Family Mental Health After Trauma                          6 min · EN/SW

  CTA: [Explore All Resources →] royal blue filled

Right (Sticky Sidebar at top: 100px):
  Widget 1 -CRISIS SUPPORT (navy background):
    "Need Help Right Now?" -Cormorant 26px white
    Paragraph: "You are not alone. These helplines are free and available 24 hours a day."
    Helpline list (4 items, each in rgba(255,255,255,0.06) box):
      Befrienders Kenya    0800 723 253  (Free · 24/7 · Confidential)
      National Mental Health  1199
      NACADA               1192
      National Child Helpline  116  (Under 18 only)
    [💬 Chat with LTWBB] -#25D366 green full-width button

  Widget 2 -FREE DOWNLOADS (below, navy bg continued):
    "Free Downloads" -Cormorant 20px white
    3 download links (hover: background lightens):
      📄 Self-Help Wellbeing Workbook ↓
      📋 Programme Overview Brochure ↓
      👔 Mental Health at Work: Manager's Guide ↓
```

### Section 6 -Testimonials
```
Background:   var(--light-blue)
H2:           "What Our Community Says" -"Community" in light blue italic
Layout:       3-column grid, 2px gaps, white cards

Each card:
  Large decorative quote mark: Cormorant 80px, navy mist, absolute positioned top-right
  Quote text: Cormorant 20px italic navy, line-height 1.6
  Author name: 12px, text-light
  Program tag: light blue background pill, 9px uppercase letter-spacing

Quotes:
  1. "LTWBB reached our campus and created a safe space none of us knew we needed.
     The conversations that followed changed our lives."
     -University Student, Murang'a · Youth Ambassadors Program

  2. "As a nurse, I was always caring for others. LTWBB's civil servants program
     reminded me that I need care too. It was a turning point."
     -Healthcare Professional · Civil Servants Program

  3. "Rhoda's sessions brought our department together around mental health for the
     first time. We now have a wellness structure in place."
     -HR Manager · County Government Partnership
```

### Section 7 -Webinars
```
Background:   var(--navy-dark)
H2:           "Join Our Weekly Mental Health Webinars" -"Weekly" italic light blue
Sub:          "Every Wednesday & Saturday · Open to all · Free · No registration required"

Two-card grid (2px gap):
  Card A -Wednesday:
    Ghost "WED" text: Cormorant 80px, rgba(255,255,255,0.06), absolute positioned
    Badge: light blue fill "Every Wednesday"
    Title: "Open Wellness Conversations" -Cormorant 36px white
    Time:  "📅 Every Wednesday · 6:00 PM EAT · Live Video"
    Features (✓ list): Expert-hosted · Anonymous participation · Interactive Q&A · Recorded
    CTA: [Register Free →] royal blue filled

  Card B -Saturday:
    Ghost "SAT" text
    Badge: light blue fill "Every Saturday"
    Title: "Themed Deep-Dive Sessions"
    Time:  "📅 Every Saturday · 10:00 AM EAT · Live Video + Q&A"
    Features: Guest facilitators · English & Swahili · Free always · Open to all
    CTA: [Register Free →]

  Institutional CTA bar (full width, below cards, rgba(255,255,255,0.04) bg):
    "Running an Organisation? Book a private webinar for your team →" -light blue link
```

### Section 8 -Story Timeline
```
Background:   var(--ice-blue)
H2:           "From a Conversation to a Movement" -"Movement" italic light blue
Layout:       max-width 900px centered

Vertical timeline:
  Left column: 80px wide, year in Space Mono 13px royal blue, right-aligned
  Connector line: absolute, left 80px, top to bottom, 1px linear-gradient(navy mist → transparent)
  Dot: 8px circle, royal blue, border 2px white, shadow 0 0 0 3px navy mist
  Content: title Cormorant 24px navy + body DM Sans 14px text-mid

Milestones:
  2021 -The Beginning
    Founded November 2021 at Murang'a University of Technology. Rhoda, then 21, turned
    peer counseling into structured advocacy. "Bossbaby" -authority and accessibility in one brand.

  2022 -First Recognition
    Activist of the Year 2022. First awareness walks in Murang'a County. Campus programs expand.

  2023 -Building the Foundation
    570+ cases documented while still a full-time student. Nivishe Foundation 12-week fellowship.
    Tree Therapy and Counseling in Nature programs launch.

  2024 -Official Registration
    LTWBB formally registered as a CBO. Green Schools Program launches (15 schools).
    2,000+ cumulative cases supported.

  2025 -Governance & Scale
    Appointed Private Secretary to the Deputy Governor of Murang'a County at age 24.
    Joins Murang'a County Gender Technical Working Group. Civil Servants Program expands.

  2026 -National Recognition & Global Vision
    Young Advocate for Mental Wellness 2026. 20,000+ youth reached. International partnerships
    initiated. The movement that began as one conversation is shaping Kenya's mental health policy.
```

### Section 9 -Institutional Partnership
```
Background:   var(--royal-blue) (institutional authority)
Layout:       centered, max-width 800px
H2:           "Is Your Organisation Ready to Prioritise Mental Health?"
Sub:          LTWBB partners with county governments, NGOs, schools, hospitals, and corporates.

Who we work with (icon grid, 3×2):
  🏛️ County Government    🏥 Hospitals & Clinics    🎓 Universities
  🏫 Schools              🌍 NGOs & INGOs           🏢 Corporates

5-step process (horizontal, numbered, Space Mono):
  01 Submit Enquiry → 02 Discovery Call → 03 Custom Proposal → 04 Agreement → 05 Delivery + Impact

CTAs: [Request a Partnership Proposal →] light blue filled | [Download Programme Brochure ↓] navy outlined
```

### Section 10 -Donate
```
Background:   var(--light-blue), radial gradient glow top-right (royal blue 10% → transparent)
Layout:       centered, max-width 1000px

H2:           "Every Shilling Saves a Life" -"Saves a Life" italic light blue
Sub:          "Your support funds outreach programs, therapy linkages, safe spaces,
               and mental wellness advocacy across Kenya."

M-Pesa display (navy background card, light blue border offset):
  Label:      "M-PESA TILL NUMBER" -Space Mono 11px navy mist
  Number:     "9721411" -Space Mono 52px royal blue, letter-spacing 4px
  Sub-label:  "Let's Talk with Bossbaby CBO"
  Pseudo-element: light blue border offset 8px bottom-right (creates depth shadow effect)

Bullet row: → Support outreach programs · → Fund therapy referrals
            → Strengthen safe spaces · → Train Wellness Ambassadors
```

### Section 11 -Newsletter
```
Background:   var(--light-blue)
H2:           "Mental Health, Delivered Monthly" -centered
Sub:          "Tips, program updates, and stories of hope. No spam. Unsubscribe anytime."
Form:         [Email input (flex)] + [Subscribe → button (navy bg)]
Note:         "Join 2,000+ community members · Kenya Data Protection Act compliant"
```

### Section 12 -Crisis Band (Bottom of Every Page)
```
Background:   var(--navy-dark)
Top border:   2px solid rgba(26,115,232,0.3)
H2:           "If you are in crisis right now, help is one call away." -white, Cormorant 40px
Buttons (large, tap-friendly, flex-wrap):
  [📞 Befrienders Kenya: 0800 723 253 -Free · 24/7] -royal blue filled
  [📞 Kenya Red Cross: 1199]
  [📞 NACADA: 1192]
  [📞 Child Helpline: 116]
Note:         "Or chat with us on WhatsApp: +254 714 445 791 (Mon–Sat, 8am–6pm)"
```

---

## CHATBOT: WANJIKU AI WELLNESS ASSISTANT

### Identity & Visual
```
Name:         Wanjiku (Swahili -"voice in the community")
Trigger:      Bottom-left floating bubble, 56px circle, navy blue, 🌿 icon
Tooltip:      "Talk to LTWBB Assistant" (shows on hover)
Window:       340px wide, flex column, max-height 480px, white bg
              Positioned absolute bottom: 70px, left: 0
              Border: 1px rgba(44,62,140,0.1), box-shadow 0 20px 60px rgba(0,0,0,0.25)
```

### Chatbot Window Structure
```
Header:       Navy bg, 🌿 avatar (36px light blue circle), name "Wanjiku · LTWBB Assistant",
              status "● Online · Here to help", × close button
Messages:     Scrollable flex column, max-height 300px, 16px padding
              Bot messages: light blue bg, left-aligned
              User messages: navy bg white text, right-aligned
Quick-replies: Flex-wrap pill buttons (show on open, hide after first interaction)
Input:        Text field + → send button (royal blue bg)
```

### Opening State
```
Bot message:  "Hi, I'm Wanjiku -LTWBB's wellness assistant. 👋
               I'm here to help you find resources, learn about our programs, or just have
               a conversation. What can I help you with today?"

Quick-reply buttons:
  💬 I need to talk    📚 Resources    🌿 Programs    📞 Crisis lines
```

### Response Flows
```
FLOW 1 -"I need to talk to someone":
  "I hear you. Thank you for reaching out -that takes real courage. 💙
   
   The fastest way to speak with someone at LTWBB is WhatsApp:
   💬 wa.me/254714445791 (Mon–Sat, 8am–6pm)
   
   If you need immediate support right now:
   📞 Befrienders Kenya: 0800 723 253 (free, 24/7)"

FLOW 2 -"Find mental health resources":
  "Here are some topics I can help with:
   📖 Anxiety · 👨 Men's Mental Health · 💼 Workplace Burnout · 🎓 Campus Life
   
   What would you like to explore?"

FLOW 3 -"Learn about programs":
  Lists all 7 programs with emojis, asks which is most relevant

FLOW 4 -"Crisis helplines":
  Lists all 4 helplines with numbers in Space Mono weight
  "Please call if you need immediate support. You matter. 💙"

CRISIS DETECTION -if message contains:
  "suicide" | "end my life" | "can't go on" | "want to die" | "kill myself" | "ending it"
  
  IMMEDIATE response (no delay):
  "I'm really glad you reached out. What you're feeling is real, and you deserve support. 💙
   
   Please call Befrienders Kenya right now:
   📞 0800 723 253 -Free · Available 24/7
   
   If you can't call, I'm here with you. You are not alone. You matter."
```

---

## ADDITIONAL FEATURE SPECS

### Mood Check-In Widget (NEW -Bottom of Home, Before Newsletter)
```
Background:   soft light blue rgba(214,228,255,0.3), centered
H3:           "How are you feeling today?"
5 emoji buttons (large, 48px, hover scale 1.15):
  😞 Struggling   😔 Low   😐 Okay   🙂 Good   😊 Thriving

On select:
  Struggling/Low:  Shows crisis resources + "Want to talk? Chat with Wanjiku →"
  Okay:            Shows this week's webinar + "Join our Wednesday session →"
  Good/Thriving:   Shows volunteer/ambassador opportunities + "Help others feel this way →"

Gentle animation: selected emoji scales up, others fade to 40% opacity
```

### Self-Help Breathing Exercise Widget (NEW -On Crisis Page)
```
Circle animation (CSS keyframes, 4s ease-in-out):
  Expand: "Breathe In" (4 seconds)
  Hold:   "Hold" (4 seconds)  
  Contract: "Breathe Out" (6 seconds)

Visual: royal blue circle, pulsing border-radius animation
Text rotates through phases
Subtitle: "Take a moment. You are safe here."
```

### 5-4-3-2-1 Grounding Exercise (Crisis Page)
```
Background:   var(--ice-blue) light blue mist
Step reveals: each step appears on click/tap "Next →"
  🔵 5 things you can SEE
  🟢 4 things you can TOUCH
  🟡 3 things you can HEAR
  🟠 2 things you can SMELL
  🔴 1 thing you can TASTE
Progress bar: royal blue, fills across top as steps complete
Final screen: "You made it through. Take your time. You are not alone. 💙"
```

---

## PAGES TO BUILD

### /about
- Full-page hero (navy, landscape photo overlay)
- Full founder biography (4 paragraphs from site content)
- Mission + Vision statements (blockquote style, royal blue left-border)
- Core values grid (6 cards: Empathy, Inclusivity, Openness, Action, Community, Sustainability)
- Full story timeline
- Verified partners section
- Strategic goals 2026 + 2027
- Dual CTA: [Access Support →] | [Partner With LTWBB →]

### /programs
- Hero with 4 stat badges
- Program filter + full grid
- Individual program detail sections (each with full description, who it's for, impact, CTA)
- Institutional partnership band
- Contact form for institutional enquiry

### /resources
- Full-page search bar hero
- Featured article (full-width horizontal card)
- 20-article library (categorised)
- 4 downloadable toolkits
- Persistent sidebar (crisis widget + newsletter)

### /webinars
- Recurring schedule (no stale dates)
- Why join checklist
- Private webinar booking for institutions
- Recordings archive (honest -only list real content)

### /crisis
- Calm opening (warm off-white, NOT red, NOT alarming)
- "You Are Safe. Help Is Here."
- All 6 emergency contacts (large tap-friendly buttons)
- Breathing exercise widget
- 5-4-3-2-1 grounding exercise
- "Worried about someone else?" section
- Links to resources (at bottom, not competing with crisis content)

### /contact
- Two-lane layout: personal support (left) | institutional (right)
- WhatsApp direct link prominent
- Institutional enquiry form (org name, contact, type, subject, message)
- Speaking engagement info
- Media/press info
- Donation info

### /for-institutions (NEW)
- Hero: "Bring Mental Wellness to Your Organisation"
- 6 sectors we work with
- 8 service offerings
- 5-step partnership process
- Enquiry form

---

## ACCESSIBILITY & TECHNICAL

```
WCAG:         AA minimum. Color contrast ratios checked against text.
              Crisis-critical elements: AAA compliance required.
Focus states: Visible focus rings, keyboard navigable, skip-to-content link
ARIA:         aria-label on all icon buttons, role="status" on chatbot messages
              aria-live="polite" on dynamic content changes
Images:       All decorative with aria-hidden="true"
              Founder photo: meaningful alt text describing Rhoda and context
Mobile:       Full responsive. All tap targets minimum 44×44px.
              Crisis buttons minimum 56px height.
Performance:  Google Fonts via preconnect. No heavy JS dependencies.
              IntersectionObserver for scroll animations (not scroll events).
Languages:    EN primary. SW toggle on nav for Swahili content (where available).
Privacy:      Kenya Data Protection Act notice in footer + newsletter form.
```

---

## CONTENT ACCURACY -VERIFIED FACTS ONLY

```
CORRECT:
  Stats:        2,000+ cases | 20,000+ youth | 570+ year one | 7 programs | 5+ years
  Contact:      +254 714 445 791 | letstalkwithbossbaby@gmail.com | Till: 9721411
  Awards:       Activist of Year 2022 | Young Advocate Mental Wellness 2026
  Role:         Private Secretary & Senior Administrative Officer, Deputy Governor's Office
  Education:    BSc Murang'a (2024) | MSc MKU (ongoing) | PG Diploma KIMC (2025–2026)
  Helplines:    Befrienders 0800 723 253 | Mental Health 1199 | NACADA 1192 | Child 116
  Certification: Nivishe Foundation 12-week fellowship (2023)
  Membership:   MCK0110485 | Gender Technical Working Group Liaison | Youth President Murang'a

DO NOT FABRICATE:
  -No fictional speakers or facilitators (no "Dr. Sarah Kimani", "Dr. James Muriithi")
  -No WHO/UNICEF/Ministry of Health partner logos without verified MOUs
  -No YouTube placeholder links (remove until real recordings exist)
  -No Google Meet generic links (replace with registration form)
  -No stale December 2024 webinar dates (use recurring format)
  -No impact numbers higher than verified figures
```

---

## DESIGN INSPIRATION REFERENCES

The design should feel like it sits at the intersection of:
- **Médecins Sans Frontières (MSF)** -editorial seriousness, credibility, human impact
- **A Kenyan national park lodge** -organic warmth, nature textures, rooted in place
- **The Guardian Long Reads** -typographic clarity, generous whitespace, content first
- **A high-end wellness retreat** -calm authority, never clinical, never sterile

What it should NOT look like:
- A generic charity website (avoid soft purples, stock photos of strangers hugging)
- A medical clinic (no harsh whites, blue cross icons, clinical coldness)
- A startup (no gradients over purple, no floating orbs, no "AI aesthetic")
- A government portal (no serif-free bureaucratic layouts, no dense nav menus)

---

## IMPLEMENTATION CHECKLIST

Before shipping, verify:
- [ ] All crisis helpline numbers are correct and tap-to-call on mobile
- [ ] WhatsApp link uses wa.me/254714445791 (not generic)
- [ ] Chatbot crisis detection triggers on all keyword variants
- [ ] Stats counter only fires once (not on every scroll)
- [ ] Filter tabs show/hide correctly with smooth transitions
- [ ] Nav transparent on load, frosted on scroll
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] All external links open in new tab
- [ ] Footer © reads 2026
- [ ] No stale dates anywhere on the page
- [ ] Wanjiku chatbot window opens from bottom-left, WhatsApp from bottom-right
- [ ] Crisis band appears above footer on every page
- [ ] Mood check-in widget routes correctly to resources/webinars/volunteer
- [ ] Breathing exercise animation loops smoothly (CSS only, no JS dependency)
- [ ] Grounding exercise steps reveal in sequence with progress bar
- [ ] Accessibility: focus states visible on all interactive elements
- [ ] Page title: "Let's Talk with Bossbaby -Mental Health Support in Kenya"
- [ ] Meta description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Counseling, programs, and community support since 2021. Conversations save lives."

---

*Prompt version: 2.0 · May 2026*
*Sources: LTWBB official materials, website content brief, LinkedIn profile, Nivishe Foundation records, Murang'a County public records*
*All statistics verified against LTWBB program documentation*
*Prepared for: Full website development handoff*