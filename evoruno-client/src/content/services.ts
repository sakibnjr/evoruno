export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'web-dev',
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'High-performing, responsive web platforms built for conversion and scale.',
    shortDesc: 'Custom modern web platforms and enterprise business sites engineered with Next.js, TypeScript, and clean architecture.',
    fullDesc:
      'We design and build bespoke web experiences tailored to your business objectives. From corporate websites and SaaS web portals to conversion-focused landing pages, every line of code is optimized for speed, responsive fluidity, search engine accessibility, and effortless maintainability.',
    deliverables: [
      'Custom Next.js & React Web Applications',
      'High-Conversion Corporate & SaaS Landing Pages',
      'Headless CMS & Dynamic Content Architecture',
      'Interactive Web Tools & Custom Portals',
      'Full Cross-Device Responsive Layouts',
      'API & Third-Party Service Integrations',
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'React', 'GSAP', 'Node.js'],
    outcomes: [
      'Sub-second page load times that maximize user retention',
      'Responsive touch interfaces optimized for smartphones and desktop',
      'Modular codebases designed for friction-free future scaling',
      'Strict technical SEO fundamentals baked into the build',
    ],
    metrics: [
      { label: 'Avg Lighthouse Score', value: '98+' },
      { label: 'LCP Threshold', value: '< 1.8s' },
      { label: 'Device Coverage', value: '100%' },
    ],
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Intuitive, native-grade mobile applications shaped around product objectives.',
    shortDesc: 'Cross-platform iOS and Android apps engineered with fluid 60fps animations, rock-solid stability, and offline readiness.',
    fullDesc:
      'Turn complex business workflows into simple, elegant mobile apps. We architect and implement cross-platform mobile solutions that feel truly native, combining responsive UI interactions, secure data synchronization, push notification infrastructures, and automated CI/CD app release pipelines.',
    deliverables: [
      'iOS & Android Cross-Platform Applications',
      'Native-feel UI/UX Prototyping & Design',
      'Secure Authentication & Backend API Sync',
      'Offline Storage & Background Sync',
      'Push Notifications & Analytics Integration',
      'App Store & Play Store Deployment Handover',
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'REST / GraphQL', 'Firebase', 'Secure Enclave'],
    outcomes: [
      'Consistent, high-performance experience across iOS and Android',
      'Reduced time-to-market with shared single-codebase architecture',
      'Smooth 60 FPS motion and tactile haptic feedback',
      'Strict data privacy and end-to-end encryption compliance',
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Crash-Free Rate', value: '99.9%' },
      { label: 'OS Compatibility', value: 'iOS & Android' },
    ],
  },
  {
    id: 'seo-services',
    slug: 'seo',
    title: 'SEO & Performance',
    tagline: 'Technical foundations and data-backed search engine optimization.',
    shortDesc: 'Search architecture, crawlability optimization, Core Web Vitals acceleration, and schema structured data.',
    fullDesc:
      'Visibility begins with technical excellence. We audit, restructure, and optimize web applications so search engines crawl, render, and index your high-value pages effortlessly. We eliminate technical bottlenecks, accelerate Core Web Vitals, and implement semantic JSON-LD structures to maximize organic discovery.',
    deliverables: [
      'Comprehensive Technical SEO Architecture Audits',
      'Core Web Vitals Optimization (LCP, INP, CLS)',
      'Schema.org JSON-LD Structured Data Implementation',
      'Dynamic XML Sitemaps, Robots.txt & Canonical Tagging',
      'Internal Linking & Crawl Budget Optimization',
      'Search Console Verification & Monitoring Strategy',
    ],
    techStack: ['JSON-LD', 'Schema.org', 'Lighthouse CI', 'Next.js Metadata API', 'OpenGraph'],
    outcomes: [
      'Zero search engine crawling roadblocks and error elimination',
      'Enhanced rich snippets eligibility in Google Search results',
      'Substantial Core Web Vitals performance score gains',
      'Sustainable foundation for organic search growth without fake promises',
    ],
    metrics: [
      { label: 'Core Web Vitals', value: '100% Green' },
      { label: 'Schema Validity', value: '100%' },
      { label: 'Index Readiness', value: 'Instant' },
    ],
  },
];
