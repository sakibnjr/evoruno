# EVORUNO — Technical Requirements Document (TRD)

**Product:** Evoruno Official Website  
**Document Version:** 1.1 (Updated with GSAP, shadcn/ui, React Icons & SMTP)  
**Status:** Architecture Specification  
**Core Framework:** Next.js (App Router)  
**Language:** TypeScript (Strict Mode)  
**Styling Framework:** Tailwind CSS v4 (CSS-first `@theme`)  
**UI Components:** shadcn/ui (Radix UI Primitives)  
**Animation Engine:** GSAP (GreenSock Animation Platform) + `@gsap/react` + `ScrollTrigger`  
**Iconography:** React Icons (`react-icons`)  
**Backend Mail Delivery:** Gmail SMTP via Nodemailer (`nodemailer` + Google App Password)  
**Target Node Runtime:** Node.js 20+ LTS  
**Primary Deployment Target:** Vercel / Node VPS / Containerized Cloud  

---

## 1. System Overview & Architecture Philosophy

The Evoruno website is engineered as a high-performance, SEO-first, component-driven web application using modern Next.js App Router architecture. 

### Core Architectural Principles:
1. **Server Components by Default:** Maximize React Server Components (RSC) to minimize client-side JavaScript payloads, accelerate Largest Contentful Paint (LCP), and enhance search engine crawlability.
2. **Selective Hydration & UI Primitives (shadcn/ui):** Adopt **shadcn/ui** headless primitives (built on Radix UI) for robust accessibility, keyboard navigation, and design token integration. Interactive elements run in client components only when necessary.
3. **High-Fidelity Motion with GSAP:** Implement **GSAP** and **ScrollTrigger** for fluid timeline orchestrations, entrance reveals, scroll-driven visual effects, and matching the reference video aesthetics, encapsulated safely using the `@gsap/react` hook.
4. **CSS-First Design System:** Utilize Tailwind CSS v4 with unified `@theme` tokens in `globals.css` combined with `tailwind-merge` and `clsx` (`cn` helper) for class composition.
5. **Secure Backend Mail Delivery (Gmail SMTP + Nodemailer):** Handle email dispatches natively inside Next.js Server Actions using Gmail's dedicated SMTP relay (`smtp.gmail.com` on SSL Port 465 or `service: 'gmail'`) authenticated with a 16-character Google App Password—eliminating paid third-party email API lock-in.
6. **Optimized Icon Tree-Shaking:** Utilize **React Icons** (`react-icons`) with specific sub-package imports (e.g. `react-icons/fi`, `react-icons/hi2`) to ensure zero bundle bloat.
7. **End-to-End Type Safety:** Enforce TypeScript across all data structures, UI props, metadata, and form actions.

---

## 2. Technology Stack & Tooling

| Layer | Technology | Justification & Specific Configuration |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | Native RSC, hybrid rendering, built-in metadata API, image & font optimization. |
| **Language** | TypeScript | Strict mode enabled, zero `any` policy, type-safe APIs and schemas. |
| **Styling** | Tailwind CSS v4 | Cutting-edge performance, CSS-native variables, streamlined `@theme` configuration. |
| **UI Components** | shadcn/ui (Radix UI) | Accessible, unstyled primitives (Accordion, Sheet, Dialog, Form, Button) styled with Evoruno theme. |
| **Animation Engine** | GSAP (`gsap` + `@gsap/react`) | Industry-standard for complex timeline animations, ScrollTrigger parallax, and smooth entrance reveals. |
| **Iconography** | React Icons (`react-icons`) | Comprehensive icon library (Feather, Heroicons, Simple Icons); subpath imported for tree-shaking. |
| **Backend Mail / SMTP**| Nodemailer + Gmail SMTP | Direct Gmail SMTP transporter inside Next.js Server Actions using 16-character Google App Password. |
| **Font Management** | `next/font/google` | Zero layout shift, self-hosted at build time, pre-connected to Google Fonts. |
| **Form Validation** | Zod | Robust schema validation shared between client-side forms and server actions. |
| **Code Quality** | ESLint + Prettier | Enforces Next.js best practices and uniform TypeScript code formatting. |

---

## 3. Directory & Project Structure

The project follows a modular, scalable structure within the `src/` directory, incorporating shadcn/ui, GSAP, and SMTP modules:

```text
evoruno/
├── public/
│   ├── images/
│   │   ├── hero/               # Hero visuals, 3D renders, abstract art
│   │   ├── services/           # Service illustrations and diagrams
│   │   ├── portfolio/          # Project mockups and thumbnails
│   │   └── og-image.png        # Default 1200x630 social share card
│   ├── favicon.ico
│   ├── icon.svg
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Fonts, Root metadata, Providers, Global Nav/Footer)
│   │   ├── page.tsx            # Homepage (Hero, Proof, Problem, Solution, Process, FAQ, CTA)
│   │   ├── globals.css         # Tailwind v4 @theme, custom CSS variables, core resets
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── error.tsx           # Error boundary
│   │   ├── sitemap.ts          # Dynamic XML sitemap generator
│   │   ├── robots.ts           # Dynamic robots.txt generator
│   │   ├── services/
│   │   │   ├── page.tsx        # Services hub overview
│   │   │   ├── website-development/
│   │   │   │   └── page.tsx    # Website development dedicated page
│   │   │   ├── mobile-app-development/
│   │   │   │   └── page.tsx    # Mobile app development dedicated page
│   │   │   └── seo/
│   │   │       └── page.tsx    # SEO services dedicated page
│   │   ├── work/
│   │   │   └── page.tsx        # Portfolio and project showcase
│   │   ├── about/
│   │   │   └── page.tsx        # Company about page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact hub & inquiry form
│   │   ├── privacy-policy/
│   │   │   └── page.tsx        # Legal & privacy disclosures
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Fallback API endpoint for contact inquiries
│   ├── components/
│   │   ├── branding/
│   │   │   ├── Logo.tsx        # SVG Logo mark & wordmark component
│   │   │   └── BrandSymbol.tsx # Standalone icon/symbol
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Responsive header with blur background
│   │   │   ├── MobileNav.tsx   # shadcn Sheet / drawer mobile menu
│   │   │   ├── Footer.tsx      # Global footer
│   │   │   └── Container.tsx   # Standardized container wrapper
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx # Hero with GSAP text & visual entrance
│   │   │   ├── SocialProofSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx # Service cards with hover effects
│   │   │   ├── ProcessSection.tsx  # 4-Step connected timeline
│   │   │   ├── FaqSection.tsx      # FAQ with shadcn Accordion
│   │   │   └── FinalCtaSection.tsx
│   │   └── ui/                     # shadcn/ui components + Custom atomic elements
│   │       ├── button.tsx          # shadcn Button component (variants: default, outline, ghost)
│   │       ├── card.tsx            # shadcn Card component (styled for dark glowing borders)
│   │       ├── accordion.tsx       # shadcn Accordion component (Radix primitive)
│   │       ├── sheet.tsx           # shadcn Sheet component (Mobile drawer)
│   │       ├── input.tsx           # shadcn Input component
│   │       ├── textarea.tsx        # shadcn Textarea component
│   │       ├── badge.tsx           # shadcn Badge component
│   │       └── ContactForm.tsx     # Client-side form with validation feedback
│   ├── content/
│   │   ├── services.ts         # Structured data for all service offerings
│   │   ├── projects.ts         # Portfolio item data
│   │   └── faqs.ts             # FAQ questions and answers
│   ├── lib/
│   │   ├── actions/
│   │   │   └── contact.ts      # Server Action calling nodemailer SMTP
│   │   ├── animations/
│   │   │   └── gsap.ts         # GSAP registration, ScrollTrigger defaults, helper utilities
│   │   ├── mail/
│   │   │   ├── transporter.ts  # Nodemailer SMTP transporter singleton
│   │   │   └── templates.ts    # HTML email templates for inquiry notifications
│   │   ├── schemas/
│   │   │   └── contact.ts      # Zod validation schema
│   │   ├── utils.ts            # cn helper (clsx + tailwind-merge)
│   │   └── seo.ts              # JSON-LD generator utilities
│   └── types/
│       ├── index.ts            # Global TypeScript definitions
│       └── content.ts          # Content item interfaces
├── components.json             # shadcn/ui configuration file
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. UI Components (shadcn/ui) & Iconography (React Icons)

### 4.1 shadcn/ui Setup & Configuration (`components.json`)
The application uses **shadcn/ui** with Tailwind CSS v4. Configuration:
- **Style:** Default
- **Base Color:** Slate / Zinc (customized with Evoruno tokens)
- **CSS Variables:** Enabled (pointing to `--color-canvas-bg`, `--color-accent-blue`, etc.)
- **Components Installed:**
  - `accordion` (for Section 6 FAQ accordion)
  - `sheet` (for accessible mobile navigation drawer)
  - `button` (for primary, secondary, and ghost CTA buttons)
  - `card` (for problem statements, services, and portfolio items)
  - `input` & `textarea` (for contact inquiry forms)
  - `badge` (for section eyebrows and technology tags)

### 4.2 Utility Helper (`src/lib/utils.ts`)
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4.3 Iconography Strategy with React Icons
To optimize performance and eliminate runtime overhead:
- Use **React Icons** (`react-icons`) imported strictly from specific icon subsets:
  - `react-icons/fi` (Feather Icons — clean UI glyphs, arrows, checks)
  - `react-icons/hi2` (Heroicons 2 — solid & outline layout icons)
  - `react-icons/si` (Simple Icons — tech stack brand logos: Next.js, React, TypeScript, etc.)
  - `react-icons/bs` (Bootstrap Icons — utility icons)
- **Rule:** Never import from the root `react-icons` package (e.g. `import { FiArrowRight } from 'react-icons/fi'` is required).
- Custom brand assets (e.g., Evoruno geometric 'E' logo) remain native optimized SVGs.

---

## 5. Animation Architecture: GSAP & ScrollTrigger

### 5.1 GSAP Integration in Next.js App Router
Because Next.js uses server-side rendering, GSAP animations must execute inside Client Components (`'use client'`) and register plugins safely.

#### GSAP Centralized Registration (`src/lib/animations/gsap.ts`):
```typescript
'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default ease
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
}

export * from 'gsap';
export { ScrollTrigger };
```

### 5.2 Safe Animation Hook: `@gsap/react` (`useGSAP`)
Using the official `@gsap/react` package ensures automatic memory cleanup and prevents animation double-firing during React 18+ strict mode mounting.

#### Example Component Implementation:
```typescript
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Timeline for coordinated hero reveal
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
        .from('.hero-description', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { opacity: 0, scale: 0.95, duration: 0.5 }, '-=0.3')
        .from('.hero-visual', { opacity: 0, scale: 0.9, duration: 1.2 }, '-=0.8');

      // Scroll-triggered elements with matchMedia for responsiveness
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.hero-visual', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: 80,
          opacity: 0.6,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24">
      {/* Hero content markup */}
    </section>
  );
}
```

### 5.3 Reduced-Motion Compliance with GSAP
All GSAP animations must verify user preferences using `gsap.matchMedia()`:
```typescript
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: reduce)', () => {
  // Disable animation transforms for users who request reduced motion
  gsap.set('.animated-element', { opacity: 1, y: 0, scale: 1 });
});
```

---

## 6. Form Handling & Backend Gmail SMTP Engine

### 6.1 Architecture Overview
Contact form submissions are handled natively through a Next.js Server Action (`'use server'`) running in the Node.js runtime. Email dispatch is executed directly through **Gmail SMTP** using `nodemailer`.

#### Why Gmail SMTP + Nodemailer:
- Zero dependency on expensive third-party email SaaS APIs (Resend, SendGrid, Mailgun) for MVP and initial production.
- High deliverability straight from Evoruno's authorized Gmail / Google Workspace account.
- Inbound inquiries land instantly in the company inbox, and clicking "Reply" responds directly to the prospect via `replyTo`.

### 6.2 Gmail Account Configuration (16-Character App Password)
Because Google deprecated "Less secure apps" and enforces 2-Step Verification, standard account passwords cannot be used. A Google App Password must be generated:
1. Log into the Google Account for Evoruno (e.g., `evoruno.official@gmail.com`).
2. Go to **Google Account Settings** $\rightarrow$ **Security**.
3. Under *How you sign in to Google*, ensure **2-Step Verification** is turned **ON**.
4. In the search bar at the top or under 2-Step Verification, select **App passwords** (or visit: `https://myaccount.google.com/apppasswords`).
5. Enter an app name: `Evoruno Website Mailer`.
6. Click **Create** and copy the generated 16-character passcode (format: `xxxx xxxx xxxx xxxx`).

### 6.3 Environment Variables Configuration (`.env.local` / `.env.production`)
```env
# Production Domain
NEXT_PUBLIC_SITE_URL=https://evoruno.com

# Gmail SMTP Configuration
GMAIL_USER=evoruno.official@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_RECEIVER_EMAIL=contact@evoruno.com
```

> **Note:** Spaces in `GMAIL_APP_PASSWORD` can be included or omitted without issue; Nodemailer strips whitespace automatically.

### 6.4 Nodemailer Transporter Singleton (`src/lib/mail/transporter.ts`)
```typescript
import nodemailer from 'nodemailer';

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_APP_PASSWORD;

if (!user || !pass) {
  console.warn('⚠️ GMAIL_USER or GMAIL_APP_PASSWORD is not set in environment variables.');
}

// Singleton transporter configured specifically for Gmail SMTP
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

// Optional connection verification for development diagnostics
export async function verifySmtpConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('✅ Gmail SMTP connection established successfully.');
    return true;
  } catch (error) {
    console.error('❌ Gmail SMTP connection failed:', error);
    return false;
  }
}
```

### 6.5 Email Template Generator (`src/lib/mail/templates.ts`)
```typescript
import { ContactInput } from '@/lib/schemas/contact';

// Admin Notification Email (Received by Evoruno Team)
export function generateInquiryEmailHtml(data: ContactInput) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #080B16; color: #F5F7FF; padding: 24px; margin: 0; }
          .card { background-color: #101629; border: 1px solid #1e284a; border-radius: 12px; padding: 28px; max-width: 600px; margin: 0 auto; box-shadow: 0 8px 30px rgba(0,0,0,0.4); }
          .header { border-bottom: 1px solid #1e284a; padding-bottom: 16px; margin-bottom: 24px; }
          .logo { font-size: 22px; font-weight: 800; color: #4F7CFF; letter-spacing: 1.5px; }
          .title { font-size: 18px; font-weight: 600; color: #F5F7FF; margin: 8px 0 0; }
          .field { margin-bottom: 18px; }
          .label { font-size: 11px; text-transform: uppercase; color: #A7B0C5; letter-spacing: 0.8px; font-weight: 600; }
          .value { font-size: 15px; color: #F5F7FF; margin-top: 4px; line-height: 1.5; }
          .badge { display: inline-block; background-color: rgba(79, 124, 255, 0.15); color: #4F7CFF; border: 1px solid rgba(79, 124, 255, 0.4); padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600; text-transform: capitalize; }
          .message-box { background: #080B16; border: 1px solid #1e284a; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #E2E8F0; }
          .footer { font-size: 12px; color: #64748B; margin-top: 28px; text-align: center; border-top: 1px solid #1e284a; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div class="logo">EVORUNO</div>
            <div class="title">New Client Project Inquiry</div>
          </div>
          <div class="field">
            <div class="label">Client Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${data.email}" style="color: #4F7CFF; text-decoration: none;">${data.email}</a></div>
          </div>
          ${data.company ? `
          <div class="field">
            <div class="label">Company / Business</div>
            <div class="value">${data.company}</div>
          </div>` : ''}
          <div class="field">
            <div class="label">Service Required</div>
            <div class="value"><span class="badge">${data.service}</span></div>
          </div>
          ${data.budget ? `
          <div class="field">
            <div class="label">Estimated Budget</div>
            <div class="value">${data.budget}</div>
          </div>` : ''}
          <div class="field">
            <div class="label">Project Description</div>
            <div class="message-box">${data.message}</div>
          </div>
          <div class="footer">
            Sent automatically from Evoruno Official Website Contact Form. Reply directly to this email to contact ${data.name}.
          </div>
        </div>
      </body>
    </html>
  `;
}

// Client Auto-Acknowledgment Email (Sent to Prospect)
export function generateClientConfirmationEmailHtml(clientName: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #080B16; color: #F5F7FF; padding: 24px; margin: 0; }
          .card { background-color: #101629; border: 1px solid #1e284a; border-radius: 12px; padding: 28px; max-width: 600px; margin: 0 auto; }
          .logo { font-size: 22px; font-weight: 800; color: #4F7CFF; letter-spacing: 1.5px; }
          h2 { color: #F5F7FF; margin-top: 16px; font-size: 20px; }
          p { color: #A7B0C5; font-size: 15px; line-height: 1.6; }
          .highlight { color: #F5F7FF; font-weight: 600; }
          .footer { font-size: 12px; color: #64748B; margin-top: 24px; border-top: 1px solid #1e284a; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">EVORUNO</div>
          <h2>We received your message, ${clientName}!</h2>
          <p>Thank you for reaching out to <span class="highlight">Evoruno</span>. Our engineering and strategy team is reviewing your project details.</p>
          <p>We typically review inquiries and get back to you within <span class="highlight">24 business hours</span> with insights, initial questions, or next steps for a discovery discussion.</p>
          <p style="margin-top: 24px;">Best regards,<br><strong style="color: #F5F7FF;">The Evoruno Team</strong><br><span style="font-size: 13px; color: #4F7CFF;">Evolving Beyond Limits.</span></p>
          <div class="footer">
            Evoruno — High-performing websites, mobile applications, and SEO solutions.
          </div>
        </div>
      </body>
    </html>
  `;
}
```

### 6.6 Next.js Server Action (`src/lib/actions/contact.ts`)
```typescript
'use server';

import { contactSchema, ContactInput } from '@/lib/schemas/contact';
import { transporter } from '@/lib/mail/transporter';
import { generateInquiryEmailHtml, generateClientConfirmationEmailHtml } from '@/lib/mail/templates';

export interface ActionResponse {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}

export async function submitContactForm(prevState: unknown, formData: FormData): Promise<ActionResponse> {
  const rawData: Record<string, unknown> = {};
  formData.forEach((value, key) => {
    rawData[key] = value;
  });

  // 1. Zod Validation
  const validationResult = contactSchema.safeParse(rawData);
  if (!validationResult.success) {
    return {
      success: false,
      message: 'Please review and fix the highlighted fields.',
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const validData = validationResult.data;

  // 2. Honeypot check for bots
  if (validData.honeypot && validData.honeypot.length > 0) {
    // Return artificial success to deter bot retries
    return { success: true, message: 'Your message has been sent successfully.' };
  }

  // 3. Dispatch via Gmail SMTP
  try {
    const sender = process.env.GMAIL_USER || 'evoruno.official@gmail.com';
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || sender;

    // Send inquiry to Evoruno Team
    await transporter.sendMail({
      from: `"Evoruno Website" <${sender}>`,
      to: receiver,
      replyTo: validData.email, // Allows clicking 'Reply' in Gmail to answer the prospect directly
      subject: `[Project Inquiry] ${validData.name} — ${validData.service.toUpperCase()}`,
      text: `Client Name: ${validData.name}\nEmail: ${validData.email}\nService: ${validData.service}\nBudget: ${validData.budget || 'Not specified'}\n\nMessage:\n${validData.message}`,
      html: generateInquiryEmailHtml(validData),
    });

    // Send instant confirmation to prospect
    try {
      await transporter.sendMail({
        from: `"Evoruno" <${sender}>`,
        to: validData.email,
        subject: `Thank you for contacting Evoruno!`,
        html: generateClientConfirmationEmailHtml(validData.name),
      });
    } catch (confirmError) {
      // Non-critical: Log but do not fail the submission
      console.warn('Auto-confirmation email failed to send:', confirmError);
    }

    return {
      success: true,
      message: 'Thank you! Your project inquiry has been delivered. We will respond within 24 hours.',
    };
  } catch (error) {
    console.error('Gmail SMTP Dispatch Error:', error);
    return {
      success: false,
      message: 'Unable to send message due to a mail server connection issue. Please try again or email us directly at ' + (process.env.CONTACT_RECEIVER_EMAIL || 'contact@evoruno.com'),
    };
  }
}
```

---

## 7. Technical SEO Specifications

### 7.1 Metadata API Strategy
Configure base metadata in root `src/app/layout.tsx` using `metadataBase`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://evoruno.com'),
  title: {
    default: 'Evoruno — Digital Solutions | Websites, Mobile Apps & SEO',
    template: '%s | Evoruno',
  },
  description: 'Evoruno designs and engineers high-performance websites, mobile applications, and SEO solutions that help businesses evolve beyond limits.',
  keywords: [
    'Web development Bangladesh',
    'Mobile app development',
    'Custom web applications',
    'SEO services Bangladesh',
    'Next.js development company',
    'Evoruno'
  ],
  authors: [{ name: 'Evoruno' }],
  creator: 'Evoruno',
  publisher: 'Evoruno',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evoruno.com',
    siteName: 'Evoruno',
    title: 'Evoruno — Evolving Beyond Limits',
    description: 'High-performing websites, mobile applications, and digital experiences.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Evoruno Brand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evoruno — Evolving Beyond Limits',
    description: 'High-performing websites, mobile applications, and digital experiences.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 7.2 Sitemap & Robots Generation
- **Dynamic Sitemap (`src/app/sitemap.ts`):** Automatically maps all static and service pages with `lastModified`, `changeFrequency`, and `priority`.
- **Dynamic Robots (`src/app/robots.ts`):** Directs search engine crawlers to `https://evoruno.com/sitemap.xml`.

### 7.3 Structured Data (JSON-LD) Schemas
Implement JSON-LD script blocks in Server Components for:
1. **Organization Schema:** Name, alternateName, URL, logo, contactPoint, sameAs.
2. **WebSite Schema:** Site name, potentialAction SearchAction.
3. **BreadcrumbList Schema:** Applied on all sub-routes (`/services/website-development`).
4. **Service Schema:** Applied on dedicated service landing pages detailing provider and service type.

---

## 8. Performance & Core Web Vitals (CWV) Targets

### 8.1 Quantitative Performance Budgets
| Metric | Target | Optimization Strategy |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | **≤ 2.5s** | Preload hero fonts; prioritize hero visuals using Next.js `<Image priority>`; server-rendered hero text. |
| **INP (Interaction to Next Paint)** | **≤ 200ms** | Minimal client JS; dynamic GSAP execution with `useGSAP`; zero long blocking tasks (>50ms). |
| **CLS (Cumulative Layout Shift)** | **≤ 0.1** | Explicit dimensions on all media; avoiding flash of unstyled content via CSS-first initial state before GSAP runs. |
| **FCP (First Contentful Paint)** | **≤ 1.2s** | Inlined critical CSS via Tailwind; preconnect to critical origins. |
| **TTFB (Time to First Byte)** | **≤ 600ms** | Edge-caching on static assets; fast server rendering. |

### 8.2 Asset & Bundle Optimization Rules
- **GSAP Bundle:** Import only necessary plugins (`gsap` core and `ScrollTrigger`). Avoid importing unused bonus plugins.
- **React Icons Bundle:** Always import from subpaths (`react-icons/fi`, `react-icons/hi2`).
- **Typography:** Managed via `next/font/google` (`display: 'swap'`, `subsets: ['latin']`, zero external runtime HTTP requests).

---

## 9. Accessibility (a11y) & Security Specifications

### 9.1 Accessibility Standards
- **Standard:** Strict compliance with **WCAG 2.1 Level AA**.
- **shadcn/ui Primatives:** Automatically guarantee correct `aria-expanded`, `aria-controls`, and focus management in the FAQ accordion and Mobile Drawer.
- **Contrast Ratios:** Minimum 4.5:1 for body copy; 3:1 for large text and interactive components.
- **Keyboard Navigation:** Visible focus outlines (`focus-visible:ring-2 focus-visible:ring-accent-primary`).
- **Reduced Motion:** Integrated with both CSS `@media (prefers-reduced-motion: reduce)` and GSAP `matchMedia()`.

### 9.2 Security & Data Protection
1. **Environment Variables:**
   - Gmail credentials (`GMAIL_USER`, `GMAIL_APP_PASSWORD`) are strictly server-only (never exposed to client).
2. **HTTP Security Headers (`next.config.ts`):**
   - `Content-Security-Policy` (CSP)
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
3. **Input Sanitization:** Server action strictly validates and sanitizes strings using Zod.

---

## 10. Deployment & Infrastructure Pipeline

### 10.1 Environments
- **Development:** Local runtime (`npm run dev`) on `localhost:3000`.
- **Preview / Staging:** Branch deployments with unique preview URLs.
- **Production:** Production domain with automated edge caching and HTTPS enforcement.

### 10.2 Production Build Verification Script
Before any release or deployment, the following verification pipeline must pass with zero errors:
```bash
# 1. Type Check
npm run type-check # or npx tsc --noEmit

# 2. Lint Check
npm run lint

# 3. Production Build
npm run build
```

### 10.3 Post-Deployment Validation Checklist
1. Verify production domain resolves with valid SSL certificate.
2. Submit dynamic `https://evoruno.com/sitemap.xml` to Google Search Console.
3. Test contact form submission live and confirm Nodemailer SMTP delivery to admin inbox.
4. Verify GSAP animations run smoothly across mobile and desktop without layout shifts.
5. Run Lighthouse audit on mobile and desktop viewports to confirm green Core Web Vitals.
