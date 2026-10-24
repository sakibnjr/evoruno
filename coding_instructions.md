# Evoruno Codebase & Architectural Standards

**Document:** `coding_instructions.md`  
**Applies To:** `evoruno-client` (Next.js 16, React 19, TypeScript, Tailwind CSS v4)  
**Status:** Mandatory Engineering Guidelines

---

## 1. Directory & Folder Naming Convention
- **Private Folders (`_` Prefix):** Any directory containing code that is **not** a page route must start with an underscore `_` to adhere to Next.js App Router conventions and distinguish them from route segments.
  - `@/_ui/`: Atomic, reusable UI primitives (e.g. `button.tsx`, `badge.tsx`, `card.tsx`, `accordion.tsx`, `input.tsx`).
  - `@/_components/`: Feature-level sections, layout structures, branding, forms, and cards:
    - `@/_components/layout/` (`Navbar.tsx`, `Footer.tsx`, `Container.tsx`, `MobileNav.tsx`)
    - `@/_components/sections/` (`HeroSection.tsx`, `SocialProofSection.tsx`, `ProblemSection.tsx`, etc.)
    - `@/_components/branding/` (`Logo.tsx`)
    - `@/_components/forms/` (`ContactForm.tsx`)
    - `@/_components/cards/` (`ProjectCard.tsx`, `ServiceCard.tsx`)
    - `@/_components/seo/` (`JsonLd.tsx`)
- **Route Folders:** Located exclusively inside `src/app/` (e.g., `src/app/services/`, `src/app/work/`, `src/app/contact/`).

---

## 2. Strict Import Aliases (`@/`)
- Always use `@/` path aliases for all internal module imports.
- **Forbidden:** Relative traversal imports such as `../../_ui/button` or `../../../lib/utils`.
- **Standard Format:**
  ```tsx
  import { Button } from '@/_ui/button';
  import { Container } from '@/_components/layout/Container';
  import { cn } from '@/lib/utils';
  ```

---

## 3. Component Granularity & File Size Limits
- **Maximum Line Count:** **Strict ceiling of 180 lines per `.tsx` file.**
  - If a file approaches or exceeds 180 lines, extract internal sub-components, sections, or logic into separate, focused sub-files.
- **Small & Reusable:** Deconstruct large components into single-responsibility, reusable building blocks (e.g., extracting table rows, command center tabs, or project cards).

---

## 4. Server-Side First (React Server Components by Default)
- All pages and section layouts must remain **Server Components** by default.
- Take advantage of Server Components for instant HTML streaming, zero client-side JavaScript bundle penalty, and optimal SEO.

---

## 5. Surgical Client Component Boundaries (`'use client'`)
- **Never mark an entire page or full section as `'use client'`** unless strictly necessary.
- Isolate interactivity into small client "islands":
  - `HeroSection.tsx` remains a Server Component; only the interactive showcase (`HeroCommandCenter.tsx`) uses `'use client'`.
  - `Navbar.tsx` remains a Server Component; only the mobile drawer toggle (`MobileNav.tsx`) uses `'use client'`.
  - `FaqSection.tsx` remains a Server Component; only the collapsible item logic (`accordion.tsx`) uses `'use client'`.
  - `ContactPage` remains a Server Component; only `ContactForm.tsx` uses `'use client'`.

---

## 6. Zero Heavy / Unused Dependency Rule
- Use native React primitives (`useState`, `useActionState`, Context API) and pure Tailwind CSS v4 utilities.
- Avoid third-party UI libraries like GSAP, Radix UI, or CVA unless explicitly demanded and properly integrated.

---

## 7. Quality & Verification Gates
Before committing any changes:
1. `npx tsc --noEmit` must pass with 0 errors.
2. `npm run lint` must pass with 0 warnings/errors.
3. `npm run build` must successfully prerender all static routes.
4. Keep all TSX files $\le 180$ lines.
