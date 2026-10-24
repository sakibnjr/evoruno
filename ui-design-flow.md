# Evoruno — UI Design Flow

> **Purpose:** This document defines the visual direction, page flow, section order, interaction principles, and implementation sequence for Evoruno's website.
>
> **Brand tagline:** Evolving Beyond Limits.
> **Primary language:** English
> **Primary market:** Bangladesh, with potential for international clients
> **Stack:** Next.js App Router, TypeScript, latest stable Tailwind CSS
> **Implementation assistant:** Antigravity
> **Primary design reference:** The user-provided reference video (`stride-preview.mp4`)

---

## 1. Design North Star

Recreate the supplied reference's overall visual style as closely as reasonably possible, replacing its branding and content with Evoruno's identity. Treat the reference as the primary source of truth for visual decisions—not as loose inspiration for an unrelated redesign.

Preserve, where feasible:
- Overall layout and section composition
- Dark/light section transitions
- Background treatments, gradients, and lighting
- Typography scale, alignment, and hierarchy
- Spacing and proportions
- Motion style, transitions, and timing
- Abstract or 3D visuals
- Navbar, buttons, cards, and recurring component patterns

Do not silently replace distinctive reference elements with generic agency-template sections. If an effect cannot be reproduced exactly, use the closest practical alternative and document the difference.

**Priority order:** reference fidelity → clear content and conversion → accessibility → performance → maintainability. Do not compromise essential usability or performance merely to reproduce a decorative effect.

---

## 2. Brand and Visual Direction

### Brand
- **Name:** Evoruno
- **Tagline:** Evolving Beyond Limits.
- **Positioning:** A modern digital solutions partner for businesses.
- **Services:** Website Development, Mobile App Development, SEO.

### Visual character
- Modern, premium, technology-focused, ambitious, and trustworthy
- Dark navy foundation with electric-blue accents
- Refined gradients, soft illumination, restrained borders, and subtle depth
- A combination of dark and light sections, following the reference
- Bold, clean, readable typography
- Abstract or 3D visuals where they match the reference

### Provisional design tokens
Treat these as initial values only. Inspect the reference and refine the palette before finalizing.

- Primary background: `#080B16`
- Secondary background: `#101629`
- Primary accent: `#4F7CFF`
- Secondary accent: `#7C5CFC`
- Primary text: `#F5F7FF`
- Secondary text: `#A7B0C5`
- Light section background: `#F5F7FB`

Do not scatter hardcoded hex values through components. Centralize brand colors and semantic tokens in the global theme stylesheet using the installed Tailwind CSS version's recommended conventions. For Tailwind CSS v4, use CSS-first theme configuration such as `@theme` where appropriate.

### Logo
Create an original, simple SVG-based Evoruno mark and wordmark. It should work on dark and light backgrounds and remain recognizable at favicon size. Do not imitate another brand's logo.

---

## 3. Global Layout and Navigation

### Desktop navbar
- Evoruno logo/wordmark on the left
- Primary links: Services, Work, About
- Contact-oriented CTA on the right
- Match the reference's placement, sizing, background, and sticky/static behavior as closely as feasible

### Mobile navbar
- Compact logo
- Accessible menu trigger
- Clear, touch-friendly navigation
- Visible contact CTA where the layout permits
- Keyboard operation, visible focus states, and appropriate ARIA attributes

### Shared layout rules
- Use a consistent content container and spacing scale
- Keep line lengths comfortable for reading
- Avoid accidental horizontal overflow
- Make active, hover, focus, disabled, loading, and error states consistent
- Do not make hover the only way to reveal important information

---

## 4. Homepage UI Flow

The homepage must follow this exact content sequence:

**Hero → Social Proof → Problem Statement → Solution / Value → How It Works → FAQ → Final CTA**

The reference determines the visual treatment; this sequence determines the content flow. The navbar appears before the hero and the footer follows the final CTA.

### 4.1 Hero

**Goal:** Communicate what Evoruno does and invite the visitor to take the next step.

**Content:**
- Optional eyebrow: `EVORUNO — DIGITAL SOLUTIONS`
- Brand tagline: `Evolving Beyond Limits.`
- Suggested headline: `Build Beyond What's Possible.`
- Suggested supporting copy: `We build high-performing websites, mobile applications, and digital experiences that help businesses grow.`
- Primary CTA: `Let's Discuss Your Project`
- Secondary CTA: `Explore Our Work`

These are draft copy options, not mandatory final wording. Refine them to fit the reference's composition and maintain a clear business value proposition.

**Visual flow:**
1. Load the hero's essential text and primary CTA immediately.
2. Reproduce the reference's key background, lighting, and visual composition.
3. Add the closest feasible abstract/3D visual.
4. Use motion only where it supports the reference and does not obstruct content.
5. Ensure the hero remains understandable if animation is disabled or fails.

**Requirements:**
- Main headline must be real HTML text, not baked into an image.
- CTA links must navigate to real destinations.
- Keep the hero responsive and readable on small screens.
- Optimize visual assets and avoid blocking the initial render.

### 4.2 Social Proof

**Goal:** Build trust after the hero.

Use only genuine evidence, such as:
- Selected work
- Real client feedback, with permission
- Client logos, with permission
- Technologies actually used
- Verifiable project outcomes

If verified social proof is limited, use a portfolio preview or capabilities section instead. Clearly label self-initiated projects. Never invent client counts, reviews, logos, awards, or results.

### 4.3 Problem Statement

**Goal:** Help potential clients recognize problems Evoruno can solve.

Potential themes:
- An outdated or unprofessional website
- Poor mobile experience
- A digital presence that does not communicate business value
- Difficulty attracting relevant organic search traffic
- Technology that does not support current business goals

Keep copy concise and relatable. Avoid fear-based or exaggerated claims. Follow the reference's typography, spacing, and visual transitions.

### 4.4 Solution / Value Proposition

**Goal:** Show how Evoruno's services address the identified problems.

Present the initial services:
1. **Website Development** — modern, responsive websites and web experiences
2. **Mobile App Development** — applications shaped around user needs and product goals
3. **SEO Services** — technical and on-page improvements that support crawlability and organic visibility

Each service should have a clear description and a real link to its service page when available. Avoid guaranteed rankings or unsupported promises.

### 4.5 How It Works

**Goal:** Explain the process and reduce uncertainty.

Use four steps:
1. **Discover** — Understand the business, goals, and requirements.
2. **Plan** — Define the proposed solution, scope, and timeline.
3. **Build** — Design, develop, review, and refine.
4. **Launch & Support** — Deploy the solution and provide agreed support.

Use a timeline, numbered steps, or another layout only if it fits the supplied reference. Keep the process easy to scan.

### 4.6 FAQ

**Goal:** Answer likely questions before a visitor contacts Evoruno.

Initial topics:
- What services does Evoruno provide?
- How much does a website cost?
- How long does a website project take?
- Can Evoruno redesign an existing website?
- Is ongoing maintenance available?
- Can Evoruno help improve organic search visibility?
- How does a project get started?

Use an accessible accordion if it fits the reference. Ensure buttons have correct accessible names and keyboard behavior. Do not add fabricated FAQ content or unsupported structured-data claims.

### 4.7 Final CTA

**Goal:** Turn interest into a qualified inquiry.

Suggested headline: `Ready to Build What's Next?`

Suggested supporting copy: `Tell us about your idea, your business, or the challenge you're trying to solve. Let's explore the right digital solution for you.`

Suggested CTA: `Let's Talk About Your Project`

Point the CTA to the actual contact page or configured contact channel. Do not use placeholder links in production.

### 4.8 Footer

After the final CTA, include a footer consistent with the reference:
- Evoruno logo and tagline, where appropriate
- Useful navigation
- Service links
- Confirmed contact details and social links
- Privacy Policy link
- Copyright notice

Do not invent contact information or social profiles.

---

## 5. Supporting Page Flow

Use the homepage design system and visual language for supporting pages. Do not force every page to duplicate the homepage's section sequence.

### `/services`
- Page intro
- Services overview
- Clear links to individual services
- Relevant CTA

### `/services/website-development`
- Service-specific hero
- Business needs and outcomes
- Capabilities and process
- Relevant work, if available
- FAQ where useful
- Inquiry CTA

### `/services/mobile-app-development`
- Service-specific hero
- Supported project types and capabilities
- Process and considerations
- Relevant work, if available
- Inquiry CTA

### `/services/seo`
- Service-specific hero
- Technical and on-page SEO scope
- Measurement and reporting only where offered
- Realistic expectations; no ranking guarantees
- Inquiry CTA

### `/work`
- Portfolio introduction
- Project cards with clear project labels
- Project details/case studies when evidence is available
- CTA

Clearly distinguish client work from self-initiated concepts.

### `/about`
- Evoruno's purpose and approach
- Working principles
- Accurate information about the business
- CTA

### `/contact`
- Clear invitation to get in touch
- Contact form with labels and validation
- Actual contact methods, once configured
- Clear success/error states
- Explain what happens after submission

Never show a success message until submission has actually succeeded.

### `/privacy-policy`
Explain the actual data collection, use, retention, and third-party services used by the live site. Do not publish claims that do not match implementation.

---

## 6. Interaction and Motion Flow

- Reproduce the reference's motion language where practical.
- Keep text, navigation, and CTAs usable without animation.
- Respect `prefers-reduced-motion`.
- Avoid animation that delays the main content or causes layout shifts.
- Use consistent hover and focus behavior.
- Ensure menus, accordions, forms, and buttons work with keyboard and touch input.
- Avoid adding motion libraries unless the reference requires them and the benefit justifies the dependency.

---

## 7. Responsive Behavior

Validate the design at mobile, tablet, laptop, and desktop widths.

Check:
- Navbar and menu behavior
- Hero headline wrapping
- CTA placement and touch targets
- 3D/abstract visual scaling or simplification
- Section spacing and order
- Card stacking
- FAQ interaction
- Footer layout
- No unintended horizontal scrolling

Do not simply shrink the desktop layout. Adapt composition while preserving the reference's visual identity.

---

## 8. SEO and Performance Flow

SEO must be built into the page architecture and content, not treated as a final cosmetic pass.

### For every indexable page
- Unique title and meta description
- Correct canonical URL
- Semantic HTML and logical headings
- Descriptive internal links
- Useful, original English-first content
- Optimized images with appropriate alt text
- Correct indexability and HTTP status

### Site-wide
- Working XML sitemap and `robots.txt`
- Production domain used in canonical URLs and metadata
- Appropriate structured data only where supported by visible content
- No accidental production `noindex`
- No broken internal links
- Optimized fonts, images, and JavaScript
- Search Console readiness

### Performance targets
Aim for good Core Web Vitals:
- LCP ≤ 2.5 seconds
- INP ≤ 200 ms
- CLS ≤ 0.1

Measure the production implementation. These targets are goals, not guarantees.

---

## 9. Design System and Code Rules

- Use Next.js App Router and TypeScript.
- Use the installed latest stable Tailwind CSS conventions.
- Prefer Server Components by default.
- Use Client Components only where interaction requires them.
- Centralize colors, typography, spacing, radius, shadows, and motion tokens.
- Avoid scattered hardcoded colors and arbitrary styling values.
- Prefer reusable components for recurring UI patterns.
- Keep global CSS small and purposeful.
- Avoid unnecessary dependencies and over-engineering.
- Inspect the existing project before changing configuration.
- Do not create fake content to fill a visual gap.

---

## 10. Recommended Implementation Sequence

1. Inspect the reference video and identify its major visual states and sections.
2. Inspect the existing Next.js project and installed Tailwind version.
3. Establish the design tokens and typography.
4. Create the Evoruno SVG logo and shared components.
5. Implement navbar and hero to closely match the reference.
6. Compare the implementation against the reference and refine it.
7. Implement the remaining homepage sections in the prescribed order.
8. Implement the footer and responsive behavior.
9. Add metadata, canonical URLs, sitemap, robots, and relevant structured data.
10. Build supporting pages using the established design system.
11. Test interactions, accessibility, mobile layouts, and forms.
12. Run production build, type/lint checks, SEO checks, and performance tests.
13. Document deviations from the reference and any unresolved launch blockers.

Do not generate the entire site in one uncontrolled pass. Validate the hero and shared design foundation before expanding the implementation.

---

## 11. Definition of Done

The UI flow is implemented when:
- The homepage follows the required section order.
- The visual direction closely matches the supplied reference.
- Evoruno branding and English-first content are applied.
- All visible navigation and CTAs have valid destinations.
- Responsive behavior is verified.
- Design tokens are centralized.
- Motion respects reduced-motion preferences.
- No fake testimonials, statistics, or contact details are present.
- SEO fundamentals are implemented and checked.
- The production build passes and remaining issues are documented.

**Final principle:** Match the reference first, customize it for Evoruno second, and validate usability, accessibility, SEO, and performance throughout implementation.
