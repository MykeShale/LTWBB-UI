# LTWBB Digital Mental Health Platform
## Complete Phased Implementation Guide
### Let's Talk with Bossbaby CBO | "Conversations Save Lives"

> **How to use this file:** Copy each prompt block exactly into Claude, Cursor, Bolt.new, or Claude Code. Work phase by phase. Do not skip phases -each builds on the last.

---

## PROJECT CONTEXT (Include this in every prompt session)

```
ORGANIZATION: Let's Talk with Bossbaby (LTWBB CBO)
FOUNDER/CEO: Rhoda Mwongela (Bossbaby)
TAGLINE: Conversations Save Lives
LOCATION: Murang'a County, Kenya (national digital reach)
MISSION: Mental health advocacy + climate action
CONTACT: +254 714 445791
SOCIALS: Instagram & Facebook -"Let's Talk with Bossbaby"

BRAND COLORS:
  Primary:    #2C3E8C (navy blue)
  Secondary:  #1A73E8 (royal blue)
  Accent:     #D6E4FF (light blue)
  Background: #FFFFFF / #F5F7FA
  Text:       #1A1A2E
  Crisis/CTA: #E53935 (red -crisis buttons ONLY)

CRISIS HOTLINES (must appear on every page):
  Befrienders Kenya: 0800 723 253 (free, 24/7)
  Kenya Red Cross:   1199
```

---

## TECH STACK (Agreed for all phases)

| Layer | Tool | Why |
|---|---|---|
| Frontend | Next.js 14 (App Router) | SEO, PWA, performance |
| Styling | Tailwind CSS + Shadcn/UI | Accessible, rapid |
| Database | Supabase (PostgreSQL) | Auth, storage, realtime |
| CMS | Sanity.io | Rhoda's team can edit without code |
| SMS (Kenya) | Africa's Talking API | OTP, notifications, SMS bot |
| Payments | Safaricom Daraja API + Stripe | M-Pesa + international |
| AI Chatbot | Anthropic Claude API | Bilingual wellness support |
| Hosting | Vercel | Free tier, edge, auto-SSL |
| Analytics | Google Analytics 4 | Traffic + behavior |
| Email | Resend | Transactional + newsletters |

---

---

# PHASE 1 -FOUNDATION
## Brand, Website & Content Hub
### Timeline: Months 1–3

**Goal:** Launch a polished, mobile-first public website. Establish LTWBB's digital identity, educate visitors on mental health, and showcase all projects.

---

### PHASE 1 -PROMPT 1: Project Setup & Architecture

```
You are building the official website for Let's Talk with Bossbaby (LTWBB CBO), 
a Kenyan community-based organization dedicated to mental health advocacy and 
climate action. CEO is Rhoda Mwongela (Bossbaby). Tagline: "Conversations Save Lives."

Set up the project with this exact structure:

TECH STACK:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Shadcn/UI (install components as needed)
- Sanity.io as headless CMS
- Vercel for deployment

RUN THESE COMMANDS:
npx create-next-app@latest ltwbb --typescript --tailwind --app --eslint
cd ltwbb
npx shadcn-ui@latest init
npm install @sanity/client next-sanity sanity
npm install @vercel/analytics
npm install next-themes
npm install react-hot-toast
npm install lucide-react

CREATE THIS FOLDER STRUCTURE:
app/
  (public)/          ← public-facing pages
    page.tsx         ← homepage
    about/
    projects/
    resources/
    podcast/
    events/
    contact/
    crisis/
    donate/
  (auth)/            ← authenticated user pages
    dashboard/
    booking/
    mood/
    forum/
    ambassador/
  (admin)/           ← admin-only pages
    admin/
  layout.tsx
  globals.css

components/
  ui/                ← shadcn components
  layout/
    Navbar.tsx
    Footer.tsx
    CrisisButton.tsx
  sections/          ← homepage sections
  cards/             ← reusable card components

lib/
  sanity.ts
  supabase.ts
  utils.ts

types/
  index.ts

public/
  images/
  icons/

SET UP TAILWIND with LTWBB brand colors in tailwind.config.ts:
colors: {
  brand: {
    navy:  '#2C3E8C',
    royal: '#1A73E8',
    light: '#D6E4FF',
    dark:  '#1A1A2E',
    crisis:'#E53935',
  }
}

CREATE globals.css with CSS variables for brand colors.
CREATE a .env.local template with all required environment variable keys (empty values).
CREATE README.md explaining the project structure.

Do not build any pages yet. Only scaffold the project.
```

---

### PHASE 1 -PROMPT 2: Global Layout Components

```
Build the global layout components for the LTWBB website.
Project context: mental health + climate action CBO, Kenya, brand color #2C3E8C navy blue.

BUILD THESE 3 COMPONENTS:

--- COMPONENT 1: Navbar (components/layout/Navbar.tsx) ---
- Sticky top navbar, height 64px
- Left: LTWBB logo (text-based fallback if no image: "LTWBB" in navy bold + tagline "Conversations Save Lives" in small gray)
- Center: Nav links -Home | About | Projects | Resources | Podcast | Events | Contact
- Right: "Get Help Now" button (red #E53935, rounded, bold) -links to /crisis page
- Mobile: hamburger menu, full-screen slide-down nav on mobile
- Active link underline in brand navy
- Transparent on homepage hero, solid white with shadow on scroll (use IntersectionObserver)
- Language toggle: EN | SW (store preference in localStorage, no actual translation yet -just the toggle UI)

--- COMPONENT 2: Footer (components/layout/Footer.tsx) ---
- Dark navy background (#2C3E8C), white text
- 4 columns:
  Col 1: Logo + tagline "Conversations Save Lives" + brief mission blurb (2 lines)
  Col 2: Quick Links -Home, About, Projects, Resources, Podcast, Events, Donate
  Col 3: Programs -Tree Therapy, Green Schools, Youth Ambassadors, Civil Servants Program, Counseling in Nature
  Col 4: Contact -Phone: +254 714 445791, Instagram link, Facebook link, Newsletter signup input + button
- Bottom bar: "© 2025 LTWBB CBO. All rights reserved. | Kenya Data Protection Act compliant"
- Mobile: stack all columns vertically

--- COMPONENT 3: CrisisButton (components/layout/CrisisButton.tsx) ---
- Floating button, fixed position, bottom-right corner (bottom: 24px, right: 24px)
- Red circle with white phone/heart icon
- On click: opens a modal/sheet with:
  Title: "You are not alone. Help is available right now."
  List of crisis contacts:
    - Befrienders Kenya: 0800 723 253 (Free, 24/7) -clickable tel: link
    - Kenya Red Cross: 1199 -clickable tel: link
    - LTWBB Direct: +254 714 445791
  Button: "Book a Counseling Session" → links to /booking
  Small text: "All conversations are confidential."
- The button must NEVER be hidden by other UI elements (use z-index: 9999)
- Subtle pulse animation to draw attention without being alarming
- On mobile: slightly smaller, same position

Add Navbar, Footer, and CrisisButton to app/layout.tsx so they appear on all pages.
```

---

### PHASE 1 -PROMPT 3: Homepage

```
Build the LTWBB homepage (app/(public)/page.tsx).
This is the most important page -it must immediately communicate safety, warmth, and purpose.

BUILD THESE SECTIONS IN ORDER:

--- SECTION 1: Hero ---
- Full viewport height (100vh)
- Background: dark navy overlay on a real photo (use a placeholder bg-gradient for now)
- Large headline: "You Don't Have to Face It Alone"
- Subheadline: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Conversations save lives."
- Two CTA buttons:
  Primary (white bg, navy text): "Start a Conversation" → /resources
  Secondary (outlined white): "Book a Counseling Session" → /booking
- Scroll indicator arrow at bottom

--- SECTION 2: Impact Stats Bar ---
- Light blue background (#D6E4FF)
- 4 animated counters (count up on scroll into view):
  🌳 Trees Planted: 5,000+
  🧠 People Reached: 2,000+
  🤝 Sessions Held: 300+
  🏫 Schools Partnered: 15+
- Each stat has an icon, number, and label
- Source these numbers from Sanity CMS (with fallback hardcoded values)

--- SECTION 3: Mission Statement ---
- White background, centered text layout
- Quote in large italic: "We believe conversations save lives. Mental health is not a luxury -it is a human right."
- Attribution: "-Rhoda Mwongela (Bossbaby), Founder & CEO"
- Small image of Rhoda (circular, right-aligned on desktop, centered on mobile)

--- SECTION 4: Our Programs ---
- Section title: "What We Do"
- Grid of 6 program cards (2 columns desktop, 1 mobile):
  1. Tree Therapy Project -icon: 🌳
  2. Green Schools Program -icon: 🏫
  3. Counseling in Nature -icon: 🌿
  4. Youth Ambassadors -icon: 🙋
  5. Let's Talk Podcast -icon: 🎙️
  6. Civil Servants Program -icon: 🛡️
- Each card: icon, title, 2-line description, "Learn More" link
- Cards have navy left border, hover lifts with box shadow

--- SECTION 5: Latest Resources ---
- Section title: "Mental Health Resources"
- Horizontal scroll of 3 article cards pulled from Sanity CMS
- Each card: category tag, title, 2-line excerpt, "Read More" link
- "View All Resources" button below → /resources

--- SECTION 6: Podcast Preview ---
- Dark navy background
- Left: "Listen to Our Podcast" heading + description
- Right: Embed latest episode (placeholder iframe for now, Spotify/Apple Podcasts)
- "All Episodes" button → /podcast

--- SECTION 7: Crisis Support Banner ---
- Red (#E53935) full-width banner
- Text: "If you are in crisis right now, help is one call away."
- Large buttons: "Call Befrienders: 0800 723 253" | "Call Kenya Red Cross: 1199"
- This section must NOT be removable from the homepage under any circumstance

--- SECTION 8: Partners & Media ---
- White background
- "Our Partners & Supporters" heading
- Horizontal logo row (grayscale, colored on hover) with placeholder logos

--- SECTION 9: Newsletter CTA ---
- Light blue background
- "Join our community. Get mental health tips, event updates, and stories."
- Email input + "Subscribe" button
- Privacy note: "No spam. Unsubscribe anytime."

All sections must be fully responsive (mobile-first).
Use Framer Motion for scroll animations (fade-in, slide-up).
```

---

### PHASE 1 -PROMPT 4: About, Projects & Contact Pages

```
Build three pages for the LTWBB website. Keep consistent styling with the homepage.

--- PAGE 1: About (/about) ---

Section 1 -Hero:
  Page title: "About Us"
  Subtitle: "A community built on conversations, rooted in care."
  Navy background, white text

Section 2 -Our Story:
  Two columns: text left, image right
  Text: "Let's Talk with Bossbaby was founded in 2021 by Rhoda Mwongela with one 
  conviction: that open, honest conversation about mental health can save lives. 
  What began as informal community conversations in Murang'a County has grown into 
  a registered Community-Based Organization (CBO) in 2024, running programs across 
  mental health advocacy and environmental sustainability."

Section 3 -CEO Message:
  Large quote block with navy left border
  Rhoda's full message from the company profile
  Circular photo of Rhoda, her name + title below: "Rhoda Mwongela (Bossbaby) -Founder & CEO"

Section 4 -Vision & Mission:
  Two cards side by side:
  VISION: "A mentally resilient and environmentally sustainable world where individuals 
  thrive and nature flourishes."
  MISSION: "To create safe spaces for mental health awareness while driving impactful 
  climate action through tree planting and environmental conservation."

Section 5 -Our Values:
  Icon grid: Empathy | Inclusivity | Openness | Action | Community | Sustainability

Section 6 -Goals Timeline:
  Vertical timeline showing:
  2025: Plant 100,000 trees | Establish 5 mental health support hubs | Train 500 youth ambassadors
  2026: Reach 10,000 individuals with mental health education

--- PAGE 2: Projects (/projects) ---

Section 1 -Hero: "Our Programs" title, navy background

Section 2 -Program Cards (detailed, full-page):
  For each of the 7 programs, create a large section:
  1. Tree Therapy Project
  2. Green Schools Mental Health Program  
  3. Counseling in Nature Program
  4. Youth Climate & Mental Health Champions
  5. Let's Talk Mental Health Podcast
  6. Mental Health for Civil Servants, Police, Military & Doctors
  7. Mental Health Awareness Walks & Events

  Each program section includes:
  - Icon + title + colored accent bar
  - Full description (from the company profile)
  - How to participate / get involved CTA button
  - Placeholder for impact numbers (will connect to CMS)

--- PAGE 3: Contact (/contact) ---

Two-column layout:
Left column:
  - "Get in Touch" heading
  - Phone: +254 714 445791 (clickable)
  - Instagram: Let's Talk with Bossbaby
  - Facebook: Let's Talk with Bossbaby
  - Location: Murang'a County, Kenya
  - Office hours: Monday–Saturday, 8am–6pm EAT
  - Crisis note: "For mental health emergencies, call Befrienders Kenya: 0800 723 253"

Right column:
  - Contact form with fields:
    Full Name (required)
    Email Address (required)
    Phone Number (optional)
    Topic (dropdown): General Inquiry | Book a Session | Partnership | Media | Volunteer | Donation
    Message (textarea, required)
    Submit button: "Send Message"
  - On submit: send email via Resend API, show success toast

Below: Google Maps embed showing Murang'a County area
```

---

### PHASE 1 -PROMPT 5: Resources Hub & Crisis Page

```
Build two critical content pages for LTWBB.

--- PAGE 1: Resources Hub (/resources) ---

This is the mental health education library. Content comes from Sanity CMS.

SANITY SCHEMA (create this first in sanity/schemas/article.ts):
  fields:
    title (string, required)
    slug (slug, required)
    category (array of strings): Anxiety | Depression | Youth | Men's Health | Women's Health | Relationships | Environment & Mind | Grief | Workplace Stress
    language: English | Swahili | Both
    excerpt (text, 200 chars max)
    body (block content / rich text)
    coverImage (image)
    readTime (number, minutes)
    publishedAt (datetime)
    featured (boolean)

RESOURCES PAGE LAYOUT:
  Hero: "Mental Health Resources" -navy background
  
  Filter bar (sticky below hero):
    - Search input
    - Category filter buttons (All, Anxiety, Depression, Youth, etc.)
    - Language toggle: All | English | Swahili
  
  Featured article: large card at top (featured: true in CMS)
  
  Article grid: 3 columns desktop, 2 tablet, 1 mobile
  Each card: cover image, category tag (colored), title, excerpt, read time, "Read Article" →
  
  Pagination: 12 articles per page
  
  Sidebar (desktop only):
    - "In Crisis?" box with hotlines
    - "Book a Session" CTA
    - Tag cloud

ARTICLE DETAIL PAGE (/resources/[slug]):
  - Progress bar at top showing reading progress
  - Hero image
  - Category + read time + date
  - Rich text body (style headings, blockquotes, bullet lists with LTWBB brand)
  - "Was this helpful?" thumbs up/down
  - Related articles (same category, 3 cards)
  - Always-visible "Need to talk to someone?" sidebar box on desktop

CREATE 5 SEED ARTICLES in Sanity with this content:
  1. "What Is Mental Health? A Guide for Kenyans" (English, Anxiety/General)
  2. "Afya ya Akili ni Nini? Mwongozo kwa Wakenya" (Swahili version of above)
  3. "Why Men in Kenya Don't Seek Help -And How to Change That" (English, Men's Health)
  4. "How Trees and Nature Help Our Mental Health" (English, Environment & Mind)
  5. "Signs Your Teenager May Be Struggling" (English, Youth)

--- PAGE 2: Crisis Support Page (/crisis) ---

This page must be simple, fast-loading, and calming. No fancy animations.

LAYOUT:
  Background: very light blue (#F0F7FF)
  
  Top section -immediate help:
    Large text: "Help is available right now."
    Red box (can't miss it):
      📞 Befrienders Kenya: 0800 723 253 -FREE, available 24/7
      📞 Kenya Red Cross: 1199
      📞 LTWBB Direct Line: +254 714 445791
    Each number is a large tap-to-call button on mobile
  
  Middle section -"If someone else is in crisis":
    Step-by-step guide: 
    1. Stay with them
    2. Listen without judgment  
    3. Ask directly: "Are you thinking about suicide?"
    4. Remove means of harm if safe to do so
    5. Call for help together
  
  Bottom section -"You are not alone":
    Soft, warm copy about LTWBB's community
    "Book a free initial consultation" button → /booking

IMPORTANT: This page must load in under 2 seconds. No heavy images. No animations.
Add <meta name="robots" content="noindex"> -we don't want this page appearing in Google search results for crisis keywords without proper context.
```

---

### PHASE 1 -PROMPT 6: CMS Setup & SEO

```
Complete the Sanity CMS setup and implement SEO across the entire LTWBB site.

--- SANITY SETUP ---

Create these schemas in sanity/schemas/:

1. article.ts (already created in Prompt 5)

2. project.ts -LTWBB programs
   fields: title, slug, icon (emoji or image), shortDescription, fullDescription (rich text),
   impactNumber (string e.g. "500 trees planted"), ctaText, ctaLink, featured, order

3. event.ts -walks, workshops, school visits
   fields: title, slug, date, endDate, location (text + GPS coordinates), 
   type (Walk | Workshop | School Visit | Retreat | Seminar),
   description (rich text), registrationLink, image, isUpcoming (computed)

4. podcastEpisode.ts
   fields: title, slug, episodeNumber, description, publishedAt,
   spotifyUrl, applePodcastsUrl, youtubeUrl, duration (minutes), transcript (rich text)

5. partner.ts
   fields: name, logo (image), website, partnerType (Funder | NGO | Government | Media | Community)

6. siteSettings.ts (singleton)
   fields: impactStats (object: treesPlanted, peopleReached, sessionsHeld, schoolsPartnered),
   featuredArticle (reference to article), announcementBanner (string, optional)

CONNECT SANITY:
- Create sanity.config.ts at project root
- Create lib/sanity.ts with client, urlFor helper, and typed fetch functions
- Create lib/queries.ts with GROQ queries for all content types
- Use Next.js ISR (revalidate: 3600) for all CMS pages

--- SEO SETUP ---

In app/layout.tsx, add comprehensive metadata:
  - Default title template: "%s | Let's Talk with Bossbaby"  
  - Default description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Book counseling, access resources, and join our community. Conversations save lives."
  - OpenGraph: title, description, image (create og-image.png 1200x630)
  - Twitter card: summary_large_image
  - Canonical URLs
  - Kenya-specific: language="sw-KE en-KE"

Add page-specific metadata to every page using generateMetadata().

Target keywords per page:
  Homepage: "mental health Kenya", "mental health support Murang'a"
  Resources: "mental health articles Kenya Swahili"
  Crisis: "mental health crisis Kenya help"
  Projects: "mental health programs Kenya youth"

CREATE app/sitemap.ts -auto-generate XML sitemap including all Sanity articles and events.
CREATE app/robots.ts -allow all except /admin and /crisis.

Install and configure next-seo or use native Next.js metadata API.
Add JSON-LD structured data on homepage (Organization schema) and articles (Article schema).

--- PERFORMANCE ---

In next.config.ts:
  - Enable image optimization (domains: cdn.sanity.io)
  - Enable compression
  - Add security headers (X-Frame-Options, CSP, etc.)

Add loading.tsx skeletons for resources and projects pages.
Add error.tsx boundaries for all major routes.
```

---

## PHASE 1 CHECKLIST
- [ ] Next.js project scaffolded and running locally
- [ ] Navbar, Footer, CrisisButton components built
- [ ] Homepage all 9 sections complete
- [ ] About, Projects, Contact pages complete
- [ ] Resources hub + article detail pages complete
- [ ] Crisis page live (simple, fast)
- [ ] Sanity CMS connected and schemas created
- [ ] 5 seed articles in Sanity
- [ ] SEO metadata on all pages
- [ ] Sitemap and robots.txt generated
- [ ] Deployed to Vercel with custom domain
- [ ] Google Analytics 4 connected
- [ ] Mobile tested on real Android device

---
---

# PHASE 2 -COMMUNITY PLATFORM
## Engagement, Booking, Forum & Mood Tracking
### Timeline: Months 3–6

**Goal:** Add the interactive layer. Community members can register, book counseling, join forums, track their mood, and enroll as youth ambassadors.

---

### PHASE 2 -PROMPT 1: Supabase Setup & Authentication

```
Set up Supabase as the backend for the LTWBB community platform.
This handles user authentication, the community database, and file storage.

--- SUPABASE PROJECT SETUP ---

Install dependencies:
npm install @supabase/supabase-js @supabase/ssr
npm install africas-talking  (SMS provider)

Create lib/supabase/client.ts -browser client
Create lib/supabase/server.ts -server component client  
Create lib/supabase/middleware.ts -session refresh middleware
Update middleware.ts to protect (auth) and (admin) routes

--- DATABASE SCHEMA ---

Run these SQL migrations in Supabase SQL editor:

-- USERS (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  county TEXT,
  age_group TEXT CHECK (age_group IN ('Under 18', '18-25', '26-35', '36-45', '46+')),
  why_joined TEXT, -- private, optional
  is_ambassador BOOLEAN DEFAULT false,
  ambassador_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- COUNSELING SESSIONS BOOKINGS
CREATE TABLE public.bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  session_type TEXT CHECK (session_type IN ('online', 'in-person', 'nature-based')),
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  counselor_id UUID REFERENCES public.profiles(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  user_note TEXT, -- brief reason (optional, private)
  counselor_note TEXT, -- post-session note (admin/counselor only, encrypted)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- MOOD TRACKING
CREATE TABLE public.mood_entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  score INTEGER CHECK (score BETWEEN 1 AND 5), -- 1=very low, 5=great
  journal TEXT, -- encrypted at application level
  created_at TIMESTAMPTZ DEFAULT NOW(),
  date DATE DEFAULT CURRENT_DATE
);

-- FORUM POSTS
CREATE TABLE public.forum_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  category TEXT CHECK (category IN ('stigma-stories', 'mens-health', 'womens-health', 'youth-corner', 'environment-mind', 'grief-loss', 'workplace-stress')),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  report_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- FORUM REPLIES
CREATE TABLE public.forum_replies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id),
  body TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TREE PLEDGES
CREATE TABLE public.tree_pledges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  count INTEGER DEFAULT 1,
  planted BOOLEAN DEFAULT false,
  planted_date DATE,
  photo_url TEXT,
  location TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AMBASSADORS
CREATE TABLE public.ambassadors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) UNIQUE,
  ambassador_id TEXT UNIQUE, -- auto-generated e.g. LTWBB-AMB-0001
  school_institution TEXT,
  focus_area TEXT CHECK (focus_area IN ('mental-health', 'environment', 'both')),
  county TEXT,
  activities_log JSONB DEFAULT '[]',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
  enrolled_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROW LEVEL SECURITY
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mood_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES (users can only read/write their own data)
CREATE POLICY "Users view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users view own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users view own mood" ON public.mood_entries FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Approved posts visible to all" ON public.forum_posts FOR SELECT USING (status = 'approved');

--- AUTHENTICATION FLOW ---

Create these pages:
app/(auth)/login/page.tsx
  - Phone number input (Kenyan format: 07XX or +2547XX)
  - "Send OTP" button → calls Africa's Talking SMS API
  - OTP input (6 digits)
  - "Verify" button → creates Supabase session
  - Email/password fallback option
  - "New here? Create account" link

app/(auth)/register/page.tsx
  - Full name (required)
  - Phone number (required, verified via OTP)  
  - Email (optional)
  - County (dropdown of all 47 Kenya counties)
  - Age group (dropdown)
  - Why are you joining? (optional, private textarea)
  - Terms acceptance checkbox
  - On success: create profile, redirect to /dashboard

Create app/(auth)/layout.tsx -centered card layout, no navbar, always show crisis button

Create middleware.ts:
  Protected routes: /dashboard, /booking, /mood, /forum (post), /ambassador
  Admin routes: /admin (role check)
  Redirect unauthenticated users to /login with returnUrl
```

---

### PHASE 2 -PROMPT 2: Counseling Booking System

```
Build the counseling session booking system for LTWBB.
Users book sessions; admin/counselors manage them.

--- BOOKING PAGE (app/(auth)/booking/page.tsx) ---

STEP 1 -Choose Session Type:
  Three large cards with icons:
  🖥️  Online Video Call
      "Connect with a counselor from anywhere via secure video call."
      Available: Monday–Saturday
      
  🏢  In-Person (Murang'a County)
      "Visit our safe space in Murang'a County for a face-to-face session."
      Location revealed after confirmation
      
  🌿  Counseling in Nature
      "Experience healing in a natural outdoor setting -forests, parks."
      Available: Weekends only

STEP 2 -Choose Date & Time:
  Calendar picker (react-day-picker):
  - Disable past dates
  - Disable Sundays
  - Available time slots: 8am, 10am, 12pm, 2pm, 4pm (check against existing bookings)
  - Show booked slots as disabled/gray

STEP 3 -Brief Note (optional):
  Textarea: "Is there anything you'd like us to know before your session? This is private and optional."
  Character limit: 500
  Privacy assurance text below: "This is only shared with your counselor. It is never stored publicly."

STEP 4 -Confirm & Book:
  Summary card showing: session type, date, time, note
  "Confirm Booking" button
  
  ON SUBMIT:
  1. Insert row into bookings table (status: 'pending')
  2. Send confirmation SMS via Africa's Talking:
     "Hi [Name], your LTWBB counseling session request for [Date] at [Time] has been received. 
     We'll confirm within 24 hours. Questions? Call +254 714 445791. Conversations save lives."
  3. Send email alert to admin (Rhoda): new booking notification with details
  4. Show success screen: "Booking Received! We'll confirm within 24 hours via SMS."

--- USER DASHBOARD - BOOKINGS TAB ---

Show table of user's bookings:
  Columns: Date | Time | Type | Status (colored badge) | Actions
  Status colors: Pending=yellow | Confirmed=green | Completed=gray | Cancelled=red
  Actions: View details | Cancel (only if status=pending, and >48hr before session)

--- BOOKING CONFIRMATION PAGE (/booking/[id]) ---
  Full booking details
  If confirmed: show meeting link (online) or location address (in-person/nature)
  "Add to Calendar" button (generates .ics file)
  "Cancel Booking" button with confirmation dialog

Create server actions in app/actions/booking.ts for all booking mutations.
Use optimistic updates for better UX.
```

---

### PHASE 2 -PROMPT 3: Mood Tracker

```
Build the daily mood tracking feature for LTWBB users.
This is a private, personal wellness tool. No data is ever visible to other users.

--- MOOD TRACKER PAGE (app/(auth)/mood/page.tsx) ---

LAYOUT: Two sections -Today's Check-in (left) + Your History (right)

TODAY'S CHECK-IN:
  Greeting: "Good morning, [Name]. How are you feeling today?"
  
  5 emoji scale (large, tappable buttons):
  😔 Very Low (1) | 😟 Low (2) | 😐 Okay (3) | 🙂 Good (4) | 😊 Great (5)
  
  Selected emoji highlights in brand navy, others dim
  
  Optional journal prompt (changes daily, rotating list of 30 prompts):
  Examples:
    "What's one thing that felt heavy today?"
    "What are you grateful for right now, even if it's small?"
    "What would feel like relief today?"
    "Is there something you've been avoiding? It's okay if yes."
  
  Journal textarea: max 1000 characters, placeholder "Write freely -this is just for you."
  
  "Save Today's Entry" button
  
  If no check-in today: show the form
  If already checked in today: show "You've already checked in today ✓" with option to update

HISTORY SECTION:
  Line chart (Recharts) showing last 30 days of mood scores
  Color gradient: red (1) → yellow (3) → green (5)
  Hover tooltip: date + score + emoji
  
  "Your 7-day average: [score]" summary card
  
  Calendar heatmap view (optional toggle) showing check-in consistency

CRISIS DETECTION LOGIC:
  After saving an entry:
  If user scores 1 (Very Low) for 3 consecutive days:
    Show gentle alert (not alarming -soft blue card):
    "We've noticed you've been having a really hard time lately. 
    That takes courage to acknowledge. You don't have to carry this alone.
    [Book a Session] [Call Befrienders: 0800 723 253]"
  
  If user scores 1 AND journal contains any of these words 
  ['suicide', 'end it', 'can't go on', 'no point', 'kill myself']:
    Immediately show crisis modal (cannot be dismissed without clicking a button):
    "We care about you. Please reach out to someone right now."
    Large button: "Call Befrienders Kenya: 0800 723 253 (Free, 24/7)"
    Secondary: "I'm safe -close this"
    Log this event (without journal content) for admin awareness

DATA PRIVACY:
  Journal entries are encrypted client-side before storage using a user-specific key derived from their user ID + a server-side secret (use AES-256-GCM via Web Crypto API).
  Admin CANNOT read journal entries.
  Only mood scores (not journals) are visible to counselors (with user consent).

Create app/actions/mood.ts for all mood mutations.
```

---

### PHASE 2 -PROMPT 4: Anonymous Community Forum

```
Build the anonymous community forum for LTWBB.
This is where community members share stories and support each other.
Safety and anonymity are the top priorities.

--- FORUM CATEGORIES ---
1. 🗣️ Stigma Stories -"Share your experience with mental health stigma"
2. 💪 Men's Mental Health -"A space for men to speak openly"
3. 🌸 Women's Health -"Women's mental wellness conversations"
4. 🎓 Youth Corner -"For students and young people"
5. 🌿 Environment & Mind -"How nature and climate affect our wellbeing"
6. 💔 Grief & Loss -"Navigating loss and bereavement"
7. 💼 Workplace Stress -"For civil servants, doctors, teachers, and workers"

--- FORUM LISTING PAGE (app/(public)/forum/page.tsx) ---

Accessible without login (read only).
Show approved posts only.

Layout:
  Left: Category sidebar (sticky on desktop)
  Main: Post list with filters (Most Recent | Most Replied | Following)
  
Each post card shows:
  - Category badge (colored)
  - Title
  - First 100 characters of body
  - "Community Member" (if anonymous) or first name only (if user chose to show name)
  - Relative time (2 hours ago)
  - Reply count
  - "Read Post" →

"Share Your Story" button (top right) -requires login

--- POST DETAIL PAGE (app/(public)/forum/[id]/page.tsx) ---

Full post content.
Replies section below (approved only).
"Reply" button -requires login.
"Report" button on every post and reply (sends alert to admin, no confirmation shown to reporter).

Never show: full names, email, phone, profile photos, or any identifying information.

--- CREATE POST PAGE (app/(auth)/forum/new/page.tsx) ---

REQUIRES LOGIN.

Form:
  Category (dropdown, required)
  Title (required, max 100 chars)
  Body (rich text / textarea, min 50 chars, max 2000 chars)
  
  Anonymity toggle (on by default):
  🔒 "Post anonymously" (default, recommended)
     "Others will see you as 'Community Member'"
  🙂 "Show my first name only"
     "Others will see your first name"
  
  Community guidelines checkbox (required):
    "I agree to be kind and supportive. I will not share identifying information 
    about others. I understand this space is for support, not professional advice."
  
  Submit button: "Share My Story"
  
  On submit:
  - Insert post with status='pending'
  - Show: "Thank you for sharing. Your post will appear after a quick review (usually within a few hours)."
  - Send admin notification: new post pending moderation

--- MODERATION QUEUE (admin only, built in Phase 3) ---
For now, create the pending status and admin notification trigger.

CONTENT RULES (enforce in UI + server validation):
- No phone numbers (regex check)
- No email addresses (regex check)  
- No external links in posts (strip or reject)
- Minimum 50 characters (prevents spam)
- Rate limit: max 3 posts per 24 hours per user
```

---

### PHASE 2 -PROMPT 5: Youth Ambassador Portal & Tree Counter

```
Build the Youth Ambassador enrollment system and the Tree Planting counter.

--- AMBASSADOR ENROLLMENT (app/(auth)/ambassador/page.tsx) ---

If user is NOT yet an ambassador:
  Show enrollment form:
  
  Hero: "Become a Youth Ambassador"
  Description: "Join our growing network of young leaders driving mental health 
  and climate action across Kenya."
  
  Form fields:
    School or Institution name (required)
    County (dropdown, 47 Kenya counties)
    Focus area: Mental Health Only | Environment Only | Both (radio, required)
    Brief motivation (textarea, 100–500 chars): "Why do you want to be an LTWBB ambassador?"
    Phone number confirmation (pre-filled from profile)
  
  On submit:
  - Insert into ambassadors table (status: 'pending')
  - Generate ambassador_id: LTWBB-AMB-[4-digit-sequence]
  - Send SMS: "Hi [Name]! Your LTWBB Youth Ambassador application has been received. 
    We'll review and respond within 3 days. ID: [ambassador_id]"
  - Admin notification email
  - Show: "Application submitted! Your ID is [ambassador_id]. We'll be in touch soon."

If user IS an ambassador (status='active'):
  Show ambassador dashboard:
  
  Header card: "Ambassador [Name]" | ID: LTWBB-AMB-XXXX | Status: Active badge
  
  Stats row:
    Events Attended: [count]
    Trees Pledged: [count]
    Months Active: [calculated]
  
  Activities Log (from JSONB column, editable):
    - List of logged activities with dates
    - "Log an Activity" button:
      Activity type: Awareness Talk | Tree Planting | School Visit | Community Walk | Social Media Post | Other
      Description (short text)
      Date
      Impact (how many people reached?)
  
  Resources section:
    Training materials (link to Sanity CMS resources tagged 'ambassador')
    "Download My Certificate" button (generates PDF -use react-pdf)
    
  Certificate template:
    "This certifies that [Full Name] is an active Youth Ambassador of Let's Talk 
    with Bossbaby CBO. Empowering communities through mental health and climate action."
    LTWBB logo, Rhoda's signature line, Ambassador ID, enrollment date.

--- TREE PLEDGE COUNTER ---

PUBLIC COMPONENT (on homepage + projects page):

Large animated counter showing:
🌳 [X,XXX] trees planted toward our goal of 100,000

Horizontal progress bar: [====>    ] X%

"Plant a Tree" button → requires login

TREE PLEDGE FLOW (app/(auth)/pledge/page.tsx):
  Step 1: "How many trees do you commit to plant?"
    Number input (1–100)
    Location (county, optional)
    "Make My Pledge" button
    Insert into tree_pledges table (planted=false)
    Show: "Thank you! You've pledged [X] trees. When you've planted them, come back to log it."

  Step 2 (after planting): "Mark Trees as Planted"
    Find user's pending pledges
    "I've planted my trees!" button
    Upload photo (optional, Supabase Storage)
    planted=true, planted_date=today
    Admin verifies (verified=false until admin approves)
    
  Public counter pulls: SUM of count WHERE planted=true AND verified=true
  Dashboard counter pulls: SUM of count WHERE planted=true (user's own)
  
  Leaderboard (public, optional -only if user consents): 
    Top 10 pledgers by county
```

---

## PHASE 2 CHECKLIST
- [ ] Supabase project created, all tables migrated
- [ ] Row Level Security policies active
- [ ] Phone OTP login working (Africa's Talking)
- [ ] Registration flow complete
- [ ] Middleware protecting auth routes
- [ ] Booking system -4-step flow complete
- [ ] Booking SMS confirmations working
- [ ] Mood tracker -check-in, history chart, crisis detection
- [ ] Forum -categories, post list, post detail, create post
- [ ] Forum -anonymity working, moderation queue (pending)
- [ ] Ambassador enrollment and dashboard
- [ ] Tree pledge counter live on homepage
- [ ] User dashboard with all features linked

---
---

# PHASE 3 -ADMIN DASHBOARD & IMPACT REPORTING
## Internal Operations, Content Management & Analytics
### Timeline: Months 6–9

**Goal:** Give Rhoda's team complete operational control -manage bookings, moderate content, update the site, and track impact -all without writing code.

---

### PHASE 3 -PROMPT 1: Admin Layout & Access Control

```
Build the protected admin dashboard for LTWBB CBO.
Only users with admin roles can access this section.

--- ROLE SYSTEM ---

Add roles to Supabase:
1. In auth.users metadata, set: { role: 'super_admin' | 'counselor' | 'content_editor' | 'volunteer_manager' }
2. Create a helper: lib/auth/getRole.ts that reads user role server-side

ROLE PERMISSIONS:
  super_admin:       All access (Rhoda)
  counselor:         View/manage own bookings, view assigned user profiles only
  content_editor:    Create/edit/delete Sanity content (articles, episodes, projects)
  volunteer_manager: View/manage ambassador applications and logs

--- ADMIN LAYOUT (app/(admin)/admin/layout.tsx) ---

Left sidebar (256px wide, dark navy background):
  LTWBB logo at top
  
  Navigation grouped by section:
  
  📊 OVERVIEW
    Dashboard Home
    
  🗓️ OPERATIONS  
    Bookings
    Events
    
  👥 COMMUNITY
    Forum Moderation
    Ambassador Management
    Tree Pledge Verification
    User Management
    
  📝 CONTENT
    Articles
    Podcast Episodes
    Project Pages
    
  📈 IMPACT
    Impact Tracker
    Reports
    
  💰 FUNDRAISING
    Donations
    Partners
    
  ⚙️ SETTINGS
    Site Settings
    Admin Users

Each nav item: icon + label. Active state: light blue bg, white text.
Sidebar collapses to icon-only on tablet.

Top bar: "LTWBB Admin" title | Logged-in admin name | Logout button

Mobile: sidebar becomes bottom nav (top 5 items) or hamburger.

--- ACCESS GUARD ---

Create middleware that:
1. Checks Supabase session
2. Checks role in user metadata
3. Redirects unauthorized users to /login
4. For role-specific pages: redirect to /admin if role doesn't have access

Show "Access Restricted" page (not 404) if a lower-role admin tries to access a restricted section.
```

---

### PHASE 3 -PROMPT 2: Admin Dashboard Home & Impact Tracker

```
Build the admin dashboard home page and impact tracking system for LTWBB.

--- DASHBOARD HOME (app/(admin)/admin/page.tsx) ---

Top row -KPI cards (live data from Supabase):
  🧠 Total Registered Users
  📅 Bookings This Month (pending + confirmed)
  ✅ Sessions Completed All Time
  🌳 Trees Planted (verified total vs. 100,000 goal -show progress bar)
  🙋 Ambassadors Enrolled (vs. 500 goal -show progress bar)
  📝 Forum Posts Pending Moderation (orange if > 5)

Row 2 -Charts:
  Left: "Monthly Users Registered" -bar chart, last 6 months (Recharts)
  Right: "Session Types Breakdown" -pie chart (online vs in-person vs nature)

Row 3 -Activity Feed:
  Real-time list of recent events (Supabase Realtime):
  - New booking request
  - New ambassador application  
  - New forum post pending
  - New tree pledge logged
  Each item: timestamp + action + "View" link

Row 4 -Upcoming Events:
  Next 3 events from Sanity with date, type, location
  "Manage Events" link

--- IMPACT TRACKER PAGE (app/(admin)/admin/impact/page.tsx) ---

Date range filter (default: current year)

MANUAL IMPACT ENTRY FORM:
  Date
  Category: Workshop | School Visit | Community Walk | Training | Media | Other
  People Reached (number)
  Location (county)
  Notes
  
  Entries table below with edit/delete

AUTO-AGGREGATED STATS (from database):
  - Total counseling sessions (completed)
  - Total registered users
  - Total trees planted (verified)
  - Total ambassadors
  - Forum posts published (approved)
  - Events held (from Sanity)

IMPACT CHARTS:
  1. "People Reached Over Time" -line chart by month
  2. "Geographic Reach" -bar chart by Kenya county  
  3. "Program Impact" -grouped bar (trees, sessions, ambassadors, schools)
  4. "Goal Progress" -horizontal progress bars for each 2025/2026 goal

EXPORT BUTTONS:
  "Export to CSV" -all impact data for selected date range
  "Generate PDF Report" -formatted impact report using react-pdf:
    LTWBB logo header
    Date range
    All KPI stats
    Key charts as images
    Narrative summary (editable text field before generating)
    Footer: "LTWBB CBO | Conversations Save Lives | +254 714 445791"
```

---

### PHASE 3 -PROMPT 3: Booking Management & Forum Moderation

```
Build the admin interfaces for managing counseling bookings and forum content.

--- BOOKING MANAGEMENT (app/(admin)/admin/bookings/page.tsx) ---

ACCESSIBLE BY: super_admin, counselor (own bookings only)

Filters bar:
  - Status: All | Pending | Confirmed | Completed | Cancelled
  - Session type: All | Online | In-Person | Nature-Based
  - Counselor: All | [Counselor Name]
  - Date range picker
  - Search by user name or phone

Bookings table:
  Columns: Date | Time | User Name | Phone | Session Type | Counselor | Status | Actions
  
  Actions per row:
  [Confirm] -changes status to 'confirmed', triggers SMS to user:
    "Hi [Name]! Your LTWBB counseling session on [Date] at [Time] is confirmed. 
    [Include meeting link for online / location details for in-person]. 
    Reply CANCEL if you need to reschedule. Call us: +254 714 445791"
    
  [Assign Counselor] -dropdown of counselor-role users
  
  [Complete] -changes status to 'completed', opens notes dialog:
    Counselor private notes textarea (encrypted, counselor-only)
    Session outcome: Productive | Referred | Follow-up Needed | Did Not Attend
    
  [Cancel] -with reason, triggers SMS to user
  
  [View User] -opens user profile drawer (name, phone, county, booking history -no journal data)

BOOKING DETAIL DRAWER:
  All booking info
  User contact details
  Counselor notes (if any, visible only to counselor and super_admin)
  Session history for this user (count only)
  Quick actions: Send SMS | Confirm | Complete

AUTOMATED REMINDERS (server-side cron via Vercel Cron Jobs):
  48 hours before session: SMS reminder to user
  1 hour before session: SMS reminder to counselor
  If session not marked complete after 4 hours: admin notification to check

--- FORUM MODERATION (app/(admin)/admin/forum/page.tsx) ---

ACCESSIBLE BY: super_admin, content_editor

Tab 1: Pending Posts (default)
  Cards for each pending post:
    Category badge | Title | Body (full) | Author: "[First Name] / Anonymous" | Posted: X mins ago
    
    Actions:
    ✅ Approve -status='approved', post goes live
    ❌ Reject -status='rejected', optional note to user (sent via in-app notification)
    🚨 Flag as Crisis -mark post, alert super_admin, consider reaching out to user
    
  Bulk approve/reject with checkbox selection

Tab 2: Reported Content
  Posts/replies with report_count > 0
  Show report count badge (red if >3)
  Same action buttons + "Remove" permanently deletes

Tab 3: All Published Posts
  Search, filter by category
  Can remove any published post
  View reply threads

MODERATION GUIDELINES (pinned at top):
  Auto-reject rule: if post contains phone number, email, or external link → auto-reject + notify admin
  This check runs server-side before even entering moderation queue
```

---

### PHASE 3 -PROMPT 4: Content CMS & Event Management

```
Build the admin interfaces for managing all website content and events.

--- CONTENT MANAGEMENT ---

NOTE: Sanity Studio handles article, podcast, and project editing natively.
Set up Sanity Studio embedded in the admin area OR as a separate Sanity Studio deployment.

Option A (recommended): Deploy Sanity Studio at admin.ltwbb.org/studio
  - Only Sanity-authenticated users can access
  - Grant content_editor and super_admin roles in Sanity

Option B: Embed using next-sanity:
  Create app/(admin)/admin/content/studio/[[...tool]]/page.tsx
  Use <NextStudio config={config} />

ADD THESE CUSTOM SANITY PLUGINS:
  1. Custom document badge showing "Live" | "Draft" status
  2. Scheduled publishing (sanity-plugin-scheduled-publishing)
  3. Media library (sanity-plugin-media)
  4. Translation support (mark field as 'English' or 'Swahili')
  5. SEO fields plugin (sanity-plugin-seo)

EDITORIAL WORKFLOW:
  Draft → Review → Published (3-stage workflow for articles)
  Podcast episodes: Draft → Published (2-stage)
  
CREATE CONTENT TEMPLATES in Sanity for fast creation:
  "Mental Health Article Template" -pre-filled structure: What it is, Signs & Symptoms, How to cope, When to seek help, Kenya resources
  "Swahili Tip Article" -shorter format for shareable content

--- EVENT MANAGEMENT (app/(admin)/admin/events/page.tsx) ---

Events are created in Sanity (where they appear on public site) 
AND mirrored in Supabase (for RSVP tracking).

Event creation form (create in Sanity via admin):
  Title, Date, End Date, Location (text + Google Maps link), Type, Description, 
  Max Capacity (optional), Registration Required (toggle), Cover Image
  
  If Registration Required:
    Auto-create registration form page at /events/[slug]/register
    Collect: name, phone, county, (how did you hear about us?)
    Send confirmation SMS via Africa's Talking

Event dashboard table:
  Columns: Title | Date | Type | Location | RSVPs | Status | Actions
  Actions: View RSVPs | Send SMS to RSVPs | Mark Complete | Edit | Delete
  
  "Send SMS to all RSVPs" -compose message, preview, confirm send:
    Use Africa's Talking bulk SMS
    Max 160 characters (show counter)
    
  "Export RSVPs to CSV" button

RSVP MANAGEMENT:
  List of RSVPs per event with: Name | Phone | County | RSVP Date | Attended (checkbox)
  Mark attendance after event
  Auto-generate attendance report
```

---

## PHASE 3 CHECKLIST
- [ ] Admin roles in Supabase (super_admin, counselor, content_editor, volunteer_manager)
- [ ] Admin sidebar layout and navigation
- [ ] Role-based access control enforced in middleware
- [ ] Dashboard home with live KPI cards
- [ ] Impact tracker -manual entry + auto-aggregated stats
- [ ] Impact charts and PDF export working
- [ ] Booking management -confirm, assign, complete, cancel
- [ ] Booking SMS automation (confirmation + reminders)
- [ ] Forum moderation -pending queue, approve/reject/flag
- [ ] Auto-reject rule for PII in posts
- [ ] Sanity Studio deployed and accessible to editors
- [ ] Event management -create, RSVP tracking, bulk SMS
- [ ] Ambassador management -approve, view logs
- [ ] Tree pledge verification admin view

---
---

# PHASE 4 -AI FEATURES, SCALE & SUSTAINABILITY
## Chatbot, M-Pesa, SMS Bot, PWA, School Portal
### Timeline: Months 9–14

**Goal:** Extend reach with AI-powered tools, mobile accessibility, donation infrastructure, and school partnerships. Make LTWBB self-sustaining.

---

### PHASE 4 -PROMPT 1: AI Wellness Chatbot ("Bossbaby Bot")

```
Build an AI-powered mental wellness chatbot for the LTWBB platform using the Anthropic Claude API.
The chatbot is called "Bossbaby Bot." It supports users in English and Swahili.
Safety is the absolute top priority -this is a mental health context.

--- SETUP ---

npm install ai @anthropic-ai/sdk

Create app/api/chat/route.ts (Vercel AI SDK streaming endpoint)

--- SYSTEM PROMPT (use exactly this) ---

You are Bossbaby Bot, a compassionate wellness companion for Let's Talk with Bossbaby (LTWBB CBO), 
a Kenyan mental health organization. You speak in warm, simple, relatable language -like a caring 
friend, not a clinical professional. You support users in both English and Swahili, switching 
languages based on how the user writes to you.

YOUR ROLE:
- Listen actively and validate feelings
- Guide users through CBT-based conversation techniques (gently, not formally)
- Suggest healthy coping strategies appropriate to the Kenyan cultural context
- Encourage users to book a counseling session or call a hotline when appropriate
- Celebrate small wins and progress

HARD RULES -NEVER BREAK THESE:
1. NEVER diagnose any mental health condition
2. NEVER recommend or discuss specific medications
3. NEVER roleplay as a therapist or doctor
4. ALWAYS include crisis resources when user mentions: suicide, self-harm, "end it all", 
   hopelessness, "no reason to live", "give up", or similar
5. When crisis keywords are detected, your ENTIRE response must start with:
   "⚠️ Please reach out for immediate support: Befrienders Kenya 0800 723 253 (Free, 24/7) | 
   Kenya Red Cross: 1199. You matter, and help is available right now."
   Then continue with the supportive response.
6. NEVER store or ask for identifying information (full name, ID, address)
7. If user asks you to do something outside mental wellness support, gently redirect:
   "I'm here specifically to support your mental wellbeing. For other questions, 
   please contact the LTWBB team directly: +254 714 445791."
8. Every 5-6 messages, remind user that you are an AI and not a substitute for 
   professional counseling: "Just a reminder -I'm an AI companion, not a therapist. 
   For professional support, you can book a session at ltwbb.org/booking."

KENYAN CULTURAL CONTEXT:
- Acknowledge the stigma around mental health in Kenya directly
- Reference local concepts of community and ubuntu (we heal together)
- Do not assume Western family structures -extended family, religious community are central
- Acknowledge financial stress and unemployment as valid mental health factors
- Be aware that many users may be first-generation help-seekers

CONVERSATION STARTERS you can suggest if user seems unsure:
- "I've been feeling really stressed lately"
- "I'm not sure if what I'm feeling is normal"
- "I want to support someone I care about"
- "I just need someone to talk to"

--- CHATBOT UI (app/(public)/chat/page.tsx) ---

Full-page chat interface:

Header:
  "Bossbaby Bot" | LTWBB logo | "I'm an AI companion -not a therapist" subtitle badge
  
Disclaimer (shown once, stored in localStorage after dismissal):
  "This chatbot provides general wellness support only. It is not a substitute for 
  professional mental health care. In a crisis, call Befrienders Kenya: 0800 723 253."
  "I Understand -Start Chatting" button

Chat window:
  Messages: user (right, navy bg) | bot (left, light blue bg)
  Timestamps on each message
  Typing indicator (3 dots animation) while streaming
  Use Vercel AI SDK useChat() hook for streaming

Suggested prompts (shown when chat is empty):
  "I've been feeling anxious lately"
  "Sijisikii vizuri" (Swahili: "I'm not feeling well")
  "How do I support a friend in crisis?"
  "What is depression?"

Input bar:
  Text input + send button
  "EN | SW" language preference toggle (hint to bot)
  Character limit: 500 per message
  
Persistent sidebar (desktop):
  "Need more support?" box:
  [Book a Counseling Session] button
  [Call a Hotline] button -opens crisis contacts
  
Crisis detection (client-side, in addition to API):
  Monitor user messages for keywords: ['suicide', 'kill myself', 'end my life', 'self harm', 'hurt myself']
  If detected: immediately show full-screen modal BEFORE sending to API:
  "We're concerned about your safety. Please reach out now."
  [Call 0800 723 253] large red button
  "I'm safe -continue chatting" small text link

RATE LIMITING:
  Max 50 messages per user per day (store in Supabase or Redis)
  Show counter: "X messages remaining today"
  When limit reached: "You've reached today's limit. For ongoing support, book a session."

CONVERSATION STORAGE:
  Store conversation history in Supabase (user_id, messages array, timestamp)
  User can view past conversations in their dashboard
  User can delete any/all conversations
  Admin CANNOT read conversation content (only metadata: count, date)
```

---

### PHASE 4 -PROMPT 2: M-Pesa Donations & Stripe Integration

```
Build the donation system for LTWBB CBO supporting both M-Pesa (Kenya) and Stripe (international).

--- DEPENDENCIES ---
npm install stripe
npm install @types/stripe

For M-Pesa, you'll use Safaricom Daraja API directly (no npm package needed, use fetch).

--- DONATION PAGE (app/(public)/donate/page.tsx) ---

HERO: "Support Our Mission"
Subtext: "Every contribution helps us reach more Kenyans with mental health support and plant more trees."

CAUSE SELECTOR (4 cards with icons):
  🧠 Mental Health Programs -"Fund counseling sessions and awareness workshops"
  🌳 Tree Planting -"Support our environmental and therapy initiatives"
  🙋 Youth Ambassadors -"Train the next generation of mental health leaders"
  💙 General Fund -"Support wherever it's needed most"

AMOUNT SELECTOR:
  Quick amounts: KES 100 | KES 500 | KES 1,000 | KES 5,000 | Custom
  For international: USD $5 | $10 | $25 | $50 | Custom
  Currency toggle: KES 🇰🇪 | USD 🌍

PAYMENT METHOD TABS:
  Tab 1: M-Pesa (default for KES)
  Tab 2: Card (Stripe, for USD and international)

M-PESA FLOW:
  Phone input (Kenyan format validation: 07XX/01XX)
  "Donate via M-Pesa" button
  
  Server action calls Daraja API:
    1. Get OAuth token: POST to https://sandbox.safaricom.co.ke/oauth/v1/generate
    2. STK Push: POST to https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest
       BusinessShortCode: [Paybill or Till number]
       TransactionType: CustomerPayBillOnline
       Amount: [selected amount]
       PartyA: [user phone]
       PartyB: [LTWBB shortcode]
       PhoneNumber: [user phone]
       CallBackURL: [your-domain]/api/mpesa/callback
       AccountReference: LTWBB-[cause]
       TransactionDesc: LTWBB Donation - [cause]
  
  Show to user: "Check your phone for an M-Pesa prompt. Enter your PIN to complete."
  Polling spinner (poll /api/mpesa/status every 3 seconds for 60 seconds)
  
  On success callback (/api/mpesa/callback):
    Insert into donations table
    Send thank-you SMS: "Thank you [Name]! Your KES [amount] donation to LTWBB has been received. 
    You're helping us save lives through conversations. 🌳 Conversations Save Lives."
    Generate and email impact certificate PDF

STRIPE FLOW:
  Use Stripe Checkout (redirect) -simpler and PCI compliant
  Create /api/stripe/checkout server action
  On success: redirect to /donate/success?session_id=[id]
  On success page: verify payment server-side, store in DB, show certificate

--- DATABASE ---

CREATE TABLE public.donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT,
  donor_phone TEXT,
  donor_email TEXT,
  amount DECIMAL(10,2),
  currency TEXT DEFAULT 'KES',
  cause TEXT,
  payment_method TEXT CHECK (payment_method IN ('mpesa', 'stripe', 'cash')),
  payment_reference TEXT, -- M-Pesa receipt or Stripe session ID
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  certificate_generated BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

--- IMPACT CERTIFICATE (PDF) ---

Generate using react-pdf or @react-pdf/renderer:

Certificate includes:
  LTWBB logo (top center)
  "Certificate of Impact"
  "This acknowledges that [Donor Name] generously contributed [KES/USD Amount] 
  to Let's Talk with Bossbaby CBO on [Date]."
  
  Dynamic impact statement based on cause:
  Mental Health: "Your gift supports [X] counseling sessions for Kenyans in need."
  Tree Planting: "Your gift will help plant [X] trees in Murang'a County."
  Youth Ambassadors: "Your gift trains [X] young mental health leaders."
  General: "Your gift supports LTWBB's mission to save lives through conversation."
  
  "Thank you for believing that conversations save lives."
  Rhoda Mwongela signature line | Date | Certificate number
  
Email via Resend as PDF attachment.
Also available to download from user dashboard.
```

---

### PHASE 4 -PROMPT 3: SMS Wellness Bot & Africa's Talking

```
Build an SMS-based mental health support bot using Africa's Talking API.
Users do not need smartphones or internet -just any phone that can send texts.

--- HOW IT WORKS ---
Users send a keyword SMS to LTWBB's Africa's Talking virtual number.
The system auto-replies with the relevant content.
No app, no internet, no login required.

--- KEYWORDS & RESPONSES ---

HELP → 
"LTWBB Crisis Support:
Befrienders Kenya: 0800 723 253 (Free, 24/7)
Kenya Red Cross: 1199
LTWBB: +254 714 445791
You are not alone."

TALK → (random from library of 30 messages)
"Hi. You reached out, and that takes courage.
Whatever you're going through, you don't have to face it alone.
LTWBB is here. Talk to us: +254 714 445791
Conversations save lives."

TIP → (rotating daily tip in English/Swahili based on message language)
Example EN: "Today's mental health tip: Take 5 deep breaths when overwhelmed. 
Breathe in for 4 counts, hold for 4, out for 4. It signals your brain to calm. -LTWBB"
Example SW: "Ushauri wa leo: Pumzika na kupumua polepole. Pumua ndani hesabu 4, 
simama 4, toa nje 4. Inasaidia akili kupumzika. -LTWBB"

BOOK →
"Book a free counseling session with LTWBB:
1. Visit: ltwbb.org/booking
2. Or call: +254 714 445791
Sessions: Online, In-Person, Nature-Based
We are here for you."

TREE →
"Join LTWBB's Tree Therapy Project!
Plant a tree as part of your healing journey.
Trees planted: 5,000+ toward 100,000 goal.
Learn more: ltwbb.org/projects
Plant with us: +254 714 445791"

MOOD →
"How are you feeling today? Reply with:
1 = Very low
2 = Low  
3 = Okay
4 = Good
5 = Great
Your response helps us understand your wellbeing."
(If user replies 1 or 2: auto-send HELP response + book session prompt)

SUBSCRIBE →
"You're now subscribed to LTWBB weekly tips!
Every Monday you'll receive a mental health tip.
Reply STOP to unsubscribe anytime. -LTWBB"

STOP →
"You've unsubscribed from LTWBB tips. You can always text SUBSCRIBE to rejoin.
Remember, help is always available: 0800 723 253 -LTWBB"

Any unrecognized keyword →
"Hi! Text one of these to LTWBB:
HELP - Crisis support
TALK - Someone to talk to
TIP - Daily wellness tip
BOOK - Book a session
TREE - Tree planting info
MOOD - Check-in
SUBSCRIBE - Weekly tips"

--- IMPLEMENTATION ---

Create app/api/sms/webhook/route.ts (POST endpoint):
  Africa's Talking sends POST when user texts the virtual number
  Parse: from (phone), to (virtual number), text (message body)
  
  Normalize input: text.trim().toUpperCase()
  Match keyword
  Look up user by phone in Supabase (create anonymous record if new)
  Log SMS interaction in sms_logs table
  Call Africa's Talking SMS API to send response
  Return 200

CREATE TABLE public.sms_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT,
  keyword TEXT,
  response_sent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.sms_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT UNIQUE,
  subscribed BOOLEAN DEFAULT true,
  language_pref TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

WEEKLY TIP CRON JOB (Vercel Cron):
  Every Monday 8am EAT:
  Get all sms_subscribers where subscribed=true
  Send batch SMS via Africa's Talking Bulk SMS
  Rotate through tip library (store in Sanity as 'smsTip' document type)

Register the webhook URL in Africa's Talking dashboard.
Set up the virtual number in Africa's Talking (or use shortcode).
```

---

### PHASE 4 -PROMPT 4: Progressive Web App (PWA)

```
Convert the LTWBB Next.js website into a fully installable Progressive Web App.
Most Kenyan users are on Android with limited storage -the PWA must be lightweight.

--- SETUP ---

npm install next-pwa
npm install workbox-webpack-plugin

Update next.config.ts to wrap with withPWA:
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    // Cache strategy config below
  ]
})

--- MANIFEST (public/manifest.json) ---

{
  "name": "Let's Talk with Bossbaby",
  "short_name": "LTWBB",
  "description": "Mental health support and community. Conversations save lives.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#2C3E8C",
  "orientation": "portrait",
  "icons": [
    { "src": "/icons/icon-72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icons/icon-96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icons/icon-128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ],
  "shortcuts": [
    { "name": "Get Help Now", "url": "/crisis", "icons": [{ "src": "/icons/crisis-96.png", "sizes": "96x96" }] },
    { "name": "Book Session", "url": "/booking", "icons": [{ "src": "/icons/book-96.png", "sizes": "96x96" }] },
    { "name": "Daily Check-In", "url": "/mood", "icons": [{ "src": "/icons/mood-96.png", "sizes": "96x96" }] }
  ]
}

--- OFFLINE CACHING STRATEGY ---

Cache these routes and assets for offline access:
  - /crisis page (most important -offline access to crisis hotlines)
  - /resources (last 10 articles viewed)
  - Navigation pages: /, /about, /projects, /podcast
  - User's saved mood entries (sync when back online)
  - LTWBB logo and critical images

Network-first for: /booking, /forum, /dashboard (need live data)
Cache-first for: static assets, fonts, icons

Show custom offline page (app/offline.tsx) when no connection:
  LTWBB logo
  "You're offline -but help is still available."
  Crisis hotlines (from cache): Befrienders 0800 723 253 | Kenya Red Cross 1199
  "Reconnect to access all features"

--- INSTALL PROMPT ---

Create components/PWAInstallPrompt.tsx:
  Listen for 'beforeinstallprompt' event
  Show bottom banner after user's 2nd visit:
    "Add LTWBB to your home screen for quick access to mental health support."
    [Install App] [Not now]
  On install: hide banner, track in analytics

--- PUSH NOTIFICATIONS ---

Set up Web Push via Supabase Edge Functions + VAPID keys:
npm install web-push

Notification types (all opt-in):
  1. Daily check-in reminder (user sets preferred time, default 8am)
  2. Upcoming booking reminder (24hr before session)
  3. New podcast episode
  4. Weekly mental health tip

Notification opt-in flow:
  After user logs in for first time: gentle modal
  "Would you like daily check-in reminders?"
  [Yes, enable notifications] [No thanks]
  
  If yes: request browser permission, store subscription in Supabase

Never send more than 1 push notification per day unless it's a booking reminder.
```

---

### PHASE 4 -PROMPT 5: School Partnership Portal (Green Schools Program)

```
Build the School Partnership Portal for LTWBB's Green Schools Mental Health Program.

--- SCHOOL REGISTRATION (app/(public)/schools/apply/page.tsx) ---

Public page for schools to apply to the program.

Form:
  School Name (required)
  County (dropdown)
  School Type: Primary | Secondary | Tertiary | Special Needs
  Approximate Student Population (number)
  Contact Person: Name, Role (Principal / Teacher / Counselor), Phone, Email
  
  Program interests (checkboxes):
  ☐ Tree Planting on school grounds
  ☐ Mental health awareness workshops for students
  ☐ Mental health awareness for teachers/staff
  ☐ Peer counseling club formation
  ☐ Stress management training
  
  How did you hear about LTWBB? (dropdown)
  Additional notes (optional)
  
  Submit → Admin notification + confirmation email to school contact
  
  Status tracking: school can check status at /schools/status using their email

--- SCHOOL DASHBOARD (app/(auth)/school/dashboard/page.tsx) ---

Schools get a separate login (school_admin role).
Accessed via unique link emailed to contact person after approval.

Dashboard sections:

1. PROGRAM STATUS
   Badge: Approved | Active | Pending | Completed
   LTWBB representative assigned: [Name, phone]
   Next scheduled visit/activity: [date]

2. IMPACT TRACKER
   Trees Planted on campus: [number] (admin updates)
   Workshops Held: [count]
   Students Reached: [count]
   Peer Counseling Club Members: [count] (school can update)
   Teachers Trained: [count]

3. ACTIVITIES LOG
   Table of all LTWBB activities at this school with dates and descriptions
   School admin can add their own activity logs
   
4. RESOURCES
   Downloadable materials: teacher guides, student worksheets, club starter kit
   Links to relevant LTWBB articles for educators
   
5. CERTIFICATE
   "Download School Participation Certificate" button
   Certificate: school name, program period, trees planted count, workshops held
   "Green Schools Program | LTWBB CBO | Conversations Save Lives"

--- ADMIN SCHOOL MANAGEMENT (app/(admin)/admin/schools/page.tsx) ---

Table of all schools:
  Name | County | Type | Status | Trees | Workshops | Contact | Actions

Actions:
  Approve / Reject application
  Assign LTWBB representative (select from team)
  Schedule a visit (creates event in events table)
  Update impact numbers for this school
  Send SMS to school contact
  Generate and send certificate
  
  Summary stats at top:
  Total schools: [count] | Active: [count] | Counties covered: [count]
  Total students reached via schools: [sum]
```

---

## PHASE 4 CHECKLIST
- [ ] Bossbaby Bot (AI chatbot) live with crisis detection
- [ ] Chatbot rate limiting and conversation storage
- [ ] M-Pesa STK Push integration working
- [ ] Stripe Checkout integration working
- [ ] Impact certificates generated and emailed
- [ ] Donations table and admin view
- [ ] SMS bot keywords working (HELP, TIP, TALK, BOOK, TREE, MOOD, SUBSCRIBE)
- [ ] Weekly SMS tip cron job running
- [ ] PWA installable on Android (test on real device)
- [ ] Offline crisis page accessible without internet
- [ ] Push notifications opt-in and delivery
- [ ] School registration portal live
- [ ] School dashboard with impact tracking
- [ ] Admin school management interface

---
---

# DEPLOYMENT & LAUNCH GUIDE

## Environment Variables Needed

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Africa's Talking
AFRICASTALKING_API_KEY=
AFRICASTALKING_USERNAME=
AFRICASTALKING_SENDER_ID=LTWBB

# Anthropic (Phase 4)
ANTHROPIC_API_KEY=

# Stripe (Phase 4)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Daraja / M-Pesa (Phase 4)
MPESA_CONSUMER_KEY=
MPESA_CONSUMER_SECRET=
MPESA_SHORTCODE=
MPESA_PASSKEY=
MPESA_CALLBACK_URL=

# Resend (email)
RESEND_API_KEY=

# App
NEXT_PUBLIC_SITE_URL=https://ltwbb.org
NEXT_PUBLIC_APP_NAME=Let's Talk with Bossbaby
```

---

## Vercel Cron Jobs Configuration (vercel.json)

```json
{
  "crons": [
    {
      "path": "/api/cron/booking-reminders",
      "schedule": "0 6 * * *"
    },
    {
      "path": "/api/cron/sms-weekly-tip",
      "schedule": "0 5 * * 1"
    },
    {
      "path": "/api/cron/mood-reminder-push",
      "schedule": "0 5 * * *"
    }
  ]
}
```

---

## Launch Sequence

```
PRE-LAUNCH (2 weeks before):
□ All Phase 1 pages live on staging URL
□ 10 articles written and published in Sanity
□ Rhoda's photo and bio finalized  
□ Crisis page tested -all phone numbers verified working
□ Mobile test on 3 Android devices (low-end, mid-range, high-end)
□ PageSpeed score > 80 on mobile
□ Safety review: mental health professional reviews chatbot and crisis flows
□ Legal: Privacy Policy and Terms in English and Swahili live

SOFT LAUNCH (Week 1):
□ Share with 50 trusted community members
□ Collect feedback via WhatsApp group
□ Fix critical bugs
□ Monitor Supabase and Vercel logs daily

PUBLIC LAUNCH:
□ Announce on Instagram and Facebook: "We're live!"
□ WhatsApp mass message to existing contacts
□ Email to existing partner organizations
□ Press release to Kenya media contacts
□ Rhoda records a launch video for social media
□ Google Search Console: submit sitemap
□ Google My Business: create listing for LTWBB
```

---

## Quick Reference -Kenya-Specific APIs

| Service | Documentation | Cost |
|---|---|---|
| Africa's Talking SMS | africastalking.com/docs | ~KES 1–3 per SMS |
| Africa's Talking Voice | africastalking.com/voice | Pay per minute |
| Safaricom Daraja (M-Pesa) | developer.safaricom.co.ke | Free API, M-Pesa fees apply |
| Safaricom Sandbox | developer.safaricom.co.ke/test_credentials | Free for testing |

---

*LTWBB CBO | Let's Talk with Bossbaby | Conversations Save Lives*  
*Contact: +254 714 445791 | Instagram & Facebook: Let's Talk with Bossbaby*  
*Built with 💙 for Kenya's mental health community*
