# EVORUNO — Design System & UI/UX Specification (design.md)

**Product:** Evoruno Official Website  
**Document Version:** 1.0  
**Design Philosophy:** Reference-First Modern Futuristic Aesthetic  
**Target Atmosphere:** Premium, Sleek, High-Tech, Trustworthy, Dynamic  
**Styling Paradigm:** Tailwind CSS v4 (@theme tokens) + Pure CSS Enhancements  

---

## 1. Design Vision & Philosophy

The Evoruno design language is rooted in a **reference-first methodology**. Rather than adopting generic agency card layouts or bland corporate templates, Evoruno embraces a futuristic, deep-space digital identity inspired by cutting-edge SaaS and high-end engineering brands.

### Key Visual Pillars:
1. **Luminous Depth:** Deep navy and obsidian canvas layers contrasted against soft electric-blue and ultraviolet directional illumination.
2. **Glassmorphism & Crisp Precision:** Translucent containers with subtle backdrop blurs, 1px frosted borders, and fine radial gradients that respond to user interaction.
3. **Futuristic Restraint:** Every visual element, particle accent, and glow serves to direct attention toward value propositions and conversion CTAs—never decorative clutter.
4. **Seamless Responsiveness:** Mobile experiences are not an afterthought; touch targets, font scaling, and animations adapt gracefully across smartphones, tablets, and ultra-wide displays.

---

## 2. Color System & Design Tokens

The color system is formulated around dark-mode dominance with high-contrast text and luminous focal points.

### 2.1 Color Palette Table

| Token Name | Hex Code | HSL Equivalent | Role & Application |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `#080B16` | `225° 47% 6%` | Global canvas background; deep space dark navy. |
| `bg-secondary` | `#101629` | `226° 44% 11%` | Card surfaces, navigation header, elevated panels. |
| `bg-surface-elevated`| `#172038` | `224° 41% 15%` | Hover states, active tabs, modal surfaces. |
| `bg-light-section` | `#F5F7FB` | `223° 33% 97%` | Reserved for light-themed contrast sections or documents. |
| `accent-primary` | `#4F7CFF` | `225° 100% 65%`| Primary brand electric blue; buttons, key highlights, active icons. |
| `accent-secondary` | `#7C5CFC` | `252° 96% 67%` | Supporting violet/purple accent; gradients, secondary badges. |
| `accent-glow` | `#00E5FF` | `186° 100% 50%`| Subtle cyan ambient glow for borders and interactive highlights. |
| `text-primary` | `#F5F7FF` | `228° 100% 98%`| Primary headlines, high-contrast body text. |
| `text-secondary` | `#A7B0C5` | `222° 21% 71%` | Secondary descriptions, subheadings, metadata. |
| `text-muted` | `#64748B` | `215° 16% 47%` | Captions, disabled states, copyright, subtle borders. |
| `border-subtle` | `rgba(255,255,255,0.08)` | — | Default card and divider borders. |
| `border-highlight`| `rgba(79,124,255,0.35)` | — | Hover borders, active focus indicators. |

### 2.2 Tailwind CSS v4 `@theme` Configuration Preview

```css
@theme {
  --color-canvas-bg: #080B16;
  --color-surface-card: #101629;
  --color-surface-hover: #172038;
  --color-surface-light: #F5F7FB;

  --color-accent-blue: #4F7CFF;
  --color-accent-violet: #7C5CFC;
  --color-accent-cyan: #00E5FF;

  --color-text-main: #F5F7FF;
  --color-text-subtle: #A7B0C5;
  --color-text-dim: #64748B;

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Plus Jakarta Sans', 'Inter', sans-serif;

  --radius-card: 16px;
  --radius-button: 9999px; /* Pill-shaped modern buttons */
  --radius-badge: 8px;

  --shadow-glow: 0 0 25px rgba(79, 124, 255, 0.25);
  --shadow-glow-lg: 0 0 50px rgba(79, 124, 255, 0.4);
}
```

---

## 3. Typography Hierarchy & Scale

Typography balances geometric elegance with readability across all screen sizes.

### 3.1 Type Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `56px - 72px` | `38px - 44px` | Bold (700) | `1.1` | `-0.02em` | Hero main headline ("Build Beyond What's Possible") |
| **Heading 1 (H1)** | `40px - 48px` | `30px - 34px` | SemiBold (600)| `1.2` | `-0.015em`| Section headers, Page titles |
| **Heading 2 (H2)** | `28px - 32px` | `24px - 26px` | SemiBold (600)| `1.25` | `-0.01em`| Card titles, Category headers |
| **Heading 3 (H3)** | `20px - 22px` | `18px - 20px` | Medium (500) | `1.35` | `0` | Subsection headings, Accordion titles |
| **Body Large** | `18px` | `16px` | Normal (400) | `1.6` | `0` | Hero supporting text, Intro summaries |
| **Body Standard** | `15px - 16px` | `14px - 15px` | Normal (400) | `1.6` | `0` | Paragraphs, Service descriptions, FAQ answers |
| **Eyebrow / Badge** | `12px - 13px` | `11px - 12px` | SemiBold (600)| `1.4` | `+0.08em` | Uppercase category tags ("EVORUNO — DIGITAL SOLUTIONS") |
| **Button Text** | `15px` | `14px` | SemiBold (600)| `1.2` | `+0.01em` | Primary and secondary CTAs |

---

## 4. Brand Assets & Logo Specification

### 4.1 Logo Architecture
The Evoruno brand identity consists of two synchronized elements:
1. **The Geometric E-Symbol (Mark):** An abstract, dynamic geometric monogram derived from the letter "E" depicting forward momentum, evolution, and technological elevation.
2. **The Wordmark:** Clean, geometric sans-serif lettering in uppercase/titlecase with custom letter spacing.

### 4.2 Application Rules
- **Dark Backgrounds (Standard):** White wordmark with Electric-Blue / Violet gradient symbol.
- **Light Backgrounds:** Obsidian `#080B16` wordmark with vibrant accent mark.
- **Favicon:** The standalone geometric E-Symbol rendered as a crisp 32x32 SVG/ICO.
- **Clearance Zone:** Minimum clear padding around the logo equal to the height of the symbol.

---

## 5. Homepage Layout Composition & Section Specs

The homepage follows the exact approved 7-section structure:

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR: [Logo]         [Services] [Work] [About] [Contact]  │
├─────────────────────────────────────────────────────────────┤
│ 1. HERO SECTION                                             │
│    - Eyebrow: EVORUNO — DIGITAL SOLUTIONS                   │
│    - Headline: Build Beyond What's Possible.                │
│    - Subtext & Dual CTA Buttons                             │
│    - [ Glowing 3D / Abstract Futuristic Visual Artwork ]    │
├─────────────────────────────────────────────────────────────┤
│ 2. SOCIAL PROOF & CAPABILITIES MARQUEE                      │
│    - Trusted tech stacks & verified project indicators      │
├─────────────────────────────────────────────────────────────┤
│ 3. THE PROBLEM STATEMENT                                    │
│    - 3-card grid: Outdated Sites | Poor Mobile | Zero SEO   │
├─────────────────────────────────────────────────────────────┤
│ 4. THE SOLUTION / VALUE PROPOSITION                         │
│    - 3 interactive service showcase cards with glowing aura │
├─────────────────────────────────────────────────────────────┤
│ 5. HOW IT WORKS (THE 4-STEP PROCESS)                        │
│    - (1) Discover ──> (2) Plan ──> (3) Build ──> (4) Launch │
├─────────────────────────────────────────────────────────────┤
│ 6. FREQUENTLY ASKED QUESTIONS (FAQ)                         │
│    - Clean expandable accordion items                       │
├─────────────────────────────────────────────────────────────┤
│ 7. FINAL CTA BANNER                                         │
│    - High-impact glowing gradient container                 │
├─────────────────────────────────────────────────────────────┤
│ FOOTER: Multi-column sitemap, legal, social, copyright      │
└─────────────────────────────────────────────────────────────┘
```

### 5.1 Component Design Details

#### Global Navigation (`Navbar`)
- Fixed at top with `backdrop-blur-md bg-[#080B16]/80` and bottom border `border-b border-white/5`.
- Desktop: Centered navigation links with subtle underline slide on hover. Pill-shaped primary CTA button on right ("Let's Talk").
- Mobile: Hamburger toggle triggering a full-screen or slide-in drawer with tactile navigation buttons.

#### Section 1: Hero Section
- Centered or asymmetric two-column composition with radiant radial background glow (`radial-gradient(circle at 50% 30%, rgba(79,124,255,0.15), transparent 70%)`).
- Main CTA: Pill button with electric-blue fill, white text, and dynamic hover glow.
- Secondary CTA: Ghost button with subtle border `border border-white/15 hover:border-white/40` and backdrop blur.

#### Section 2: Social Proof Bar
- Sleek horizontal band featuring technology symbols (Next.js, React, TypeScript, Tailwind CSS, Cloud) and competence badges.
- Low opacity by default (`opacity-60`) transitioning to full brightness (`opacity-100`) on hover.

#### Section 3: Problem Section
- 3 cards with dark surface `#101629` and subtle red/amber warning accents or sleek muted border cues.
- Illustrates common struggles: "Stagnant Online Presence", "Friction-Laden Mobile Experience", "Invisible on Google".

#### Section 4: Solution / Services Grid
- 3 prominent cards:
  1. **Website Development:** Browser frame mockup / code visual.
  2. **Mobile App Development:** Mobile frame illustration / touch gesture visual.
  3. **SEO Services:** Growth chart / search query spotlight.
- Hover Effect: Outer border illuminates with `accent-primary` gradient and subtle elevation shift (`translate-y-[-4px]`).

#### Section 5: Process Section (How It Works)
- Horizontal step flow on desktop, vertical illuminated timeline on mobile.
- Steps: **01. Discover**, **02. Plan**, **03. Build**, **04. Launch & Support**.
- Connected by a luminous gradient divider.

#### Section 6: FAQ Accordion
- Max-width 800px centered layout.
- Containerized rows with `border-b border-white/10`.
- Smooth rotation on chevron icon (`rotate-180`) and content expansion.

#### Section 7: Final CTA
- Full-width card with rounded corners (`rounded-2xl`).
- Gradient fill combining `#101629` with deep violet and blue mesh lights.
- High-visibility button linking directly to `/contact`.

---

## 6. Micro-Interactions, Motion & Animation Guidelines

All animations must feel fluid, snappy, and purposeful—avoiding sluggish or distracting effects.

### 6.1 Transition Specifications
- **Standard UI Transitions:** `transition-all duration-200 ease-out`
- **Card Hover & Scale:** `transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1`
- **Glow Intensity Shift:** `transition-shadow duration-300 ease-out hover:shadow-[0_0_30px_rgba(79,124,255,0.35)]`

### 6.2 Viewport Entrance Animations
- Simple CSS fade-in up:
  ```css
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ```
- Staggered child reveals (50ms - 100ms intervals).

### 6.3 Accessibility & Reduced Motion
In compliance with accessibility standards:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Responsive Breakpoints & Adaptive Layouts

| Breakpoint | Min-Width | Layout Adjustments |
| :--- | :--- | :--- |
| **Mobile (`sm`)** | `< 640px` | Single-column cards; vertical process timeline; full-screen mobile menu drawer; 16px horizontal page gutters. |
| **Tablet (`md`)** | `640px - 1024px` | 2-column problem/service grids; condensed navbar; 24px horizontal gutters. |
| **Desktop (`lg`)** | `1024px - 1280px` | 3-column service grid; horizontal process line; inline desktop navigation; 32px gutters. |
| **Wide Desktop (`xl`)** | `≥ 1280px` | Maximum content constraint at `1280px` (`max-w-7xl mx-auto`). |

---

## 8. UI Components Inventory

1. **Button:**
   - `Primary`: Solid blue background, rounded-full pill, bold text, ambient hover glow.
   - `Secondary / Ghost`: Bordered with translucent glass background, hover border brightening.
   - `Text / Link`: Subtle underline animation with arrow icon translation (`group-hover:translate-x-1`).
2. **Card:**
   - Background `#101629`, 1px border `rgba(255,255,255,0.08)`, rounded-2xl (`16px`).
3. **Badge / Tag:**
   - Rounded-md, uppercase font-mono/display, subtle translucent accent background with colored border.
4. **Form Inputs:**
   - Surface background `#101629/80`, border `rgba(255,255,255,0.12)`, focus ring `focus:border-accent-blue focus:ring-1 focus:ring-accent-blue`.
