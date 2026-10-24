# EVORUNO — Product Requirements Document (PRD)

**Product Name:** Evoruno Official Website  
**Document Version:** 1.0  
**Status:** Approved Specification  
**Product Type:** Digital Services & Technology Solutions Website  
**Primary Market:** Bangladesh (with scalability for global markets)  
**Primary Language:** English (Bangla planned for Phase 2)  
**Tagline:** *Evolving Beyond Limits.*  
**Primary Objective:** Position Evoruno as a premier digital partner and convert qualified visitors into business inquiries.

---

## 1. Executive Summary & Brand Foundation

### 1.1 Product Overview
Evoruno is a modern technology and digital solutions provider specializing in high-performance web development, mobile application engineering, and data-driven search engine optimization (SEO). 

The website serves as Evoruno's flagship digital touchpoint, digital service catalogue, portfolio showcase, and primary inbound client acquisition engine.

### 1.2 Product Vision
To build a world-class, futuristic, high-performance web platform that establishes immediate authority and credibility, communicating technical mastery, creative innovation, and tangible business value.

### 1.3 Brand Identity & Personality
- **Brand Name:** Evoruno
- **Tagline:** Evolving Beyond Limits.
- **Personality Attributes:**
  - **Innovative & Futuristic:** Embracing modern web standards, sleek dark aesthetics, and interactive flair.
  - **Trustworthy & Authentic:** Direct, honest claims without inflated vanity metrics or artificial hype.
  - **Growth-Oriented:** Focused on delivering measurable ROI and business evolution for clients.
  - **Professional & Precise:** Engineering excellence with attention to performance, a11y, and user experience.
- **Brand Positioning:** A modern technology partner delivering custom engineering and digital growth, distinguishing itself from generic freelance templates and routine marketing agencies.

---

## 2. Business Objectives & Success Metrics

### 2.1 Primary Business Objectives
1. **Lead Generation:** Capture high-intent, qualified project inquiries from business owners and founders.
2. **Value Communication:** Articulate service offerings clearly with tangible business outcomes.
3. **Credibility & Trust:** Showcase technical expertise and authentic portfolio projects.
4. **Organic Inbound Growth:** Establish an SEO foundation to rank for core service keywords.
5. **Seamless Conversion Paths:** Provide low-friction avenues to initiate contact (forms, direct communication channels).

### 2.2 Secondary Objectives
1. Provide an extensible architecture for future service additions, case studies, and blog content.
2. Lay structural groundwork for multi-language support (Bangla localization in Phase 2).
3. Implement analytics and conversion funnel measurement.

### 2.3 Measurable Key Performance Indicators (KPIs)
- **Inquiry Volume & Quality:** Monthly verified business inquiries.
- **Conversion Rate:** Contact form completion rate and CTA engagement.
- **Organic Search Performance:** Monthly impressions, clicks, and keyword ranking trajectory.
- **Engagement Quality:** Average session duration and bounce rate on core service landing pages.
- **Core Web Vitals:** Sustained green scores (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).

---

## 3. Target Audience & User Personas

### 3.1 Primary Audience
- **Small & Medium Business Owners:** Requiring professional, modern websites or digital redesigns to elevate their market standing.
- **Growing Enterprises:** Needing bespoke web applications, automated portals, or mobile applications.
- **Local Businesses in Bangladesh:** Seeking reliable digital solutions and improved visibility on Google Search.

### 3.2 Secondary Audience
- **Tech Startup Founders:** Seeking rapid MVP development, technical advisory, and responsive execution.
- **International Clients & Agencies:** Looking for an offshore engineering and design partner.

### 3.3 Core Pain Points & How Evoruno Solves Them
| Client Pain Point | Evoruno Product Solution |
| :--- | :--- |
| Outdated or amateur digital presence | High-end visual design with sleek, futuristic, reference-grade aesthetics. |
| Slow, unresponsive, or broken mobile experience | Mobile-first architecture, sub-second load times, fluid responsiveness. |
| Zero inbound organic leads from search | Technical SEO baked into the foundation, structured schema, crawlable pages. |
| Confusion over technical jargon & opaque pricing | Transparent 4-step process, clear service scopes, straightforward communication. |
| Fear of poor post-launch support | Defined launch & ongoing maintenance support frameworks. |

---

## 4. Product Scope & Phased Roadmap

### 4.1 Release Phase 1 (MVP — Initial Launch)
The initial release encompasses the complete public-facing identity, service architecture, and conversion system:
1. **Homepage:** Conversion-focused, 7-section narrative flow.
2. **Services Overview:** `/services` hub.
3. **Service Detail Pages:**
   - `/services/website-development`
   - `/services/mobile-app-development`
   - `/services/seo`
4. **Portfolio Showcase:** `/work` displaying verified projects and self-initiated case studies.
5. **About Us:** `/about` outlining company mission, values, and engineering approach.
6. **Contact Hub:** `/contact` with validated inquiry submission.
7. **Legal Compliance:** `/privacy-policy`.
8. **SEO & Discovery Engine:** Dynamic sitemap, robots.txt, JSON-LD schemas, and OpenGraph assets.

### 4.2 Release Phase 2 (Post-Launch Expansion)
- Tech insights blog & case study deep-dives.
- Bilingual localization (Bangla language toggle).
- Interactive project cost estimator & qualification wizard.
- Dedicated industry-specific landing pages (e.g., E-commerce, Healthcare, Real Estate).
- Headless CMS integration for dynamic content authoring.

### 4.3 Out of Scope for Version 1.0
- User authentication, client portals, and login dashboards.
- Payment gateway checkout or transaction processing.
- Automated appointment scheduling software / live calendar sync.
- Unsupported vanity counters (e.g., "500+ Happy Clients" without verification).

---

## 5. Information Architecture & Routing

```
evoruno.com
│
├── / (Homepage - Primary Conversion Engine)
│
├── /services (Services Overview)
│   ├── /services/website-development
│   ├── /services/mobile-app-development
│   └── /services/seo
│
├── /work (Portfolio & Case Studies)
│   └── /work/[slug] (Future Phase)
│
├── /about (Mission, Principles & Team)
├── /contact (Project Inquiry & Form)
├── /privacy-policy (Data Handling Policy)
│
├── /sitemap.xml (Automated Index)
└── /robots.txt (Crawler Directive)
```

---

## 6. Detailed Page Requirements

### 6.1 Homepage (`/`)
The homepage must adhere strictly to the following 7-section narrative order:

#### Section 1: Hero Section
- **Objective:** Immediately hook visitors, communicate core value proposition, and drive initial CTA clicks.
- **Copy:**
  - *Eyebrow:* `EVORUNO — DIGITAL SOLUTIONS`
  - *Headline:* `Build Beyond What's Possible.`
  - *Supporting Text:* `We build high-performing websites, mobile applications, and digital experiences that help businesses grow.`
  - *Primary CTA:* `Let's Discuss Your Project` (links to `/contact`)
  - *Secondary CTA:* `Explore Our Work` (links to `/work`)
- **Key Elements:** Brand logo, tagline, reference-grade visual glow/3D composition, prominent CTA button.

#### Section 2: Social Proof / Credibility Bar
- **Objective:** Build baseline trust prior to pitching solutions.
- **Content:** Highlight core technology stacks (Next.js, React, TypeScript, Tailwind, Python, Cloud), verified project highlights, or genuine client badges.
- **Integrity Rule:** Strictly no fabricated client logos, fake ratings, or simulated 5-star badges.

#### Section 3: Problem Statement
- **Objective:** Empathize with prospect struggles (outdated design, poor mobile conversions, lack of Google visibility).
- **Presentation:** High-contrast cards illustrating real business bottlenecks without alarmist or negative copy.

#### Section 4: Solution / Value Proposition
- **Objective:** Present Evoruno's three core services with direct value propositions:
  1. *Website Development:* Fast, responsive, conversion-engineered web platforms.
  2. *Mobile App Development:* Native and cross-platform mobile apps focused on UX.
  3. *SEO Services:* Technical foundations, semantic content, and ranking visibility.
- **CTAs:** Each service card must link directly to its dedicated sub-page.

#### Section 5: How It Works (Engagement Model)
- **Objective:** Demystify the engagement and lower psychological barriers to entry.
- **4-Step Process:**
  1. **Discover:** In-depth audit of business goals, technical needs, and timeline.
  2. **Plan:** Architecture blueprint, UI/UX prototyping, and roadmap confirmation.
  3. **Build:** Agile engineering, clean code implementation, and continuous testing.
  4. **Launch & Support:** Production deployment, SEO checks, and maintenance handover.

#### Section 6: Frequently Asked Questions (FAQ)
- **Objective:** Overcome client hesitation, address pricing, timelines, and post-launch support.
- **Key Topics:** Services covered, estimated timelines, custom vs. template builds, ongoing maintenance, SEO expectations.
- **UI Element:** Accessible, expandable accordion.

#### Section 7: Final Call to Action (CTA)
- **Objective:** Final push for inquiry submission.
- **Copy:**
  - *Headline:* `Ready to Build What's Next?`
  - *Supporting Text:* `Tell us about your idea, your business, or the challenge you're trying to solve. Let's explore the right digital solution for you.`
  - *Button:* `Let's Talk About Your Project` (leads to `/contact`)

---

### 6.2 Services Hub & Dedicated Service Pages
- **/services (Hub):** High-level summary of capabilities, architecture philosophy, and navigation to deep-dive pages.
- **/services/website-development:** Covers custom web apps, corporate portals, e-commerce, responsiveness, tech stack, and workflow.
- **/services/mobile-app-development:** Covers iOS/Android, React Native/Flutter, performance, API integrations, and app store deployment.
- **/services/seo:** Details technical SEO audits, site speed optimization, schema implementation, search intent targeting, and keyword strategy.

---

### 6.3 Portfolio / Work (`/work`)
- **Objective:** Provide tangible evidence of engineering competence.
- **Content:** Cards highlighting client work and self-initiated innovation projects.
- **Card Metadata:** Project Title, Industry, Technologies Used, Problem Solved, Live Demo / Case Study Link.
- **Labeling Rule:** Clearly identify self-initiated / conceptual projects vs. live commercial clients.

---

### 6.4 About Us (`/about`)
- **Objective:** Introduce the team, brand ethos, and engineering standards.
- **Key Sections:**
  - Story behind Evoruno and the tagline *Evolving Beyond Limits*.
  - Core values: Craftsmanship, Transparency, Performance, Long-term Partnership.
  - Technology stack and engineering standards.

---

### 6.5 Contact Hub (`/contact`)
- **Objective:** Zero-friction conversion gateway.
- **Elements:**
  - Direct inquiry form (Name, Email, Business Name, Service Required, Project Budget Tier, Message).
  - Alternative contact options: Direct Email, WhatsApp (when configured), Office location/Operating hours.
  - Clear next-step expectation: "We respond within 24 business hours."

---

### 6.6 Privacy Policy (`/privacy-policy`)
- **Objective:** Legal transparency and trust.
- **Requirements:** Accurate statement of data collection (contact forms, cookies, analytics scripts) with zero misleading disclosures.

---

## 7. Functional & Behavioral Requirements

### 7.1 Navigation & Global UI
- Sticky or fixed navigation bar with smooth blur backdrop (`backdrop-blur-md`).
- Active link indication for current page.
- Mobile drawer navigation accessible via touch with smooth slide-in interaction.
- Global footer with site directory, social links, copyright notice, and legal links.

### 7.2 Lead Capture & Forms
- Client-side validation for instant feedback (valid email format, required inputs).
- Server-side validation to prevent malformed or malicious payloads.
- Clear visual state feedback: Default, Loading/Submitting, Success confirmation, Error message.
- Honeypot / bot mitigation to prevent spam.

### 7.3 Interactivity & Performance Balance
- All interactive components (accordions, tabs, menus) must support full keyboard accessibility.
- Visual animations (glows, particles, fade-ins) must never block textual content or delay user interaction.
- Explicit support for `prefers-reduced-motion`.

---

## 8. Content Strategy & Copywriting Principles

1. **Clarity Over Jargon:** Focus on client business outcomes (revenue, speed, reliability) rather than dry technical terms alone.
2. **Authenticity Guarantee:** No synthetic testimonials, invented customer counts, or unverified awards.
3. **English-First Quality:** Flawless international English tone with active voice and concise phrasing.

---

## 9. Acceptance Criteria & Launch Readiness Checklist

- [ ] All 7 homepage sections implemented in the exact prescribed sequence.
- [ ] All 9 planned routes live, navigable, and free of 404 errors.
- [ ] Contact form sends verified notifications and provides proper UX feedback.
- [ ] All placeholder text ("Lorem Ipsum") and mock images replaced with production copy and visual assets.
- [ ] Responsive testing passed on iOS Safari, Android Chrome, and modern desktop browsers.
- [ ] 100% of links, buttons, and navigation elements have valid destinations.
- [ ] Core Web Vitals targets confirmed in production preview build.
- [ ] Sitemaps, robots.txt, and metadata tags verified against search engine guidelines.

---

## 10. Product Principles

1. **Reference Fidelity:** Match the high-end dark futuristic aesthetic of the reference without resorting to generic templates.
2. **Business Impact First:** Every design decision and feature must support brand elevation and inquiry conversion.
3. **Engineering Integrity:** High performance, accessible code, zero deceptive metrics.
4. **Agile Iteration:** Launch a rock-solid MVP, measure real feedback, and expand incrementally.
