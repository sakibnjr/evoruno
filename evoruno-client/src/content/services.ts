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
    tagline: 'Fast, high-converting websites that turn visitors into paying clients.',
    shortDesc: 'Custom business websites and web platforms engineered to load instantly, build instant credibility, and drive consistent customer inquiries.',
    fullDesc:
      'Your website is the center of your digital sales engine. We design and build modern, lightning-fast web experiences that showcase your brand authority and guide visitors directly toward booking or purchasing. Every page is tailored to your business goals—zero messy templates, zero slow loading, and 100% mobile perfection.',
    deliverables: [
      'High-Conversion Business & Corporate Websites',
      'Custom Web Applications & Client Portals',
      'Modern, Frictionless E-Commerce Experiences',
      'Sub-Second Page Speed & Mobile Optimization',
      'Easy-to-Manage Content Architecture',
      'Google Analytics & Conversion Tracking Setup',
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'React 19', 'GSAP', 'Node.js'],
    outcomes: [
      'Visitors stay on your site longer without bouncing due to slow load times',
      'Seamless buying or inquiry experience on smartphones, tablets, and laptops',
      'Clean, maintainable code that grows seamlessly with your business revenue',
      'Technical SEO foundations that help your pages rank and attract organic traffic',
    ],
    metrics: [
      { label: 'Avg Speed Score', value: '98/100' },
      { label: 'Load Time', value: '< 1.2s' },
      { label: 'Mobile Readiness', value: '100%' },
    ],
  },
  {
    id: 'mobile-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Engaging mobile apps that keep your customers connected to your business.',
    shortDesc: 'Beautiful, intuitive iOS and Android applications built to scale your business, delight your users, and unlock new recurring revenue.',
    fullDesc:
      'Put your business directly in your customers’ hands. We engineer intuitive cross-platform mobile apps for iOS and Android with silky-smooth 60 FPS transitions, secure payments, and offline reliability. From initial concept to App Store launch, we make product development stress-free and predictable.',
    deliverables: [
      'Custom iOS & Android Mobile Applications',
      'User-Friendly UI/UX Flow & Wireframe Prototyping',
      'Secure User Logins & Biometric Authentication',
      'In-App Notifications to Boost Customer Retention',
      'Smooth Offline Support & Instant Data Sync',
      'Full App Store & Google Play Publishing Support',
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Secure Enclave', 'REST APIs'],
    outcomes: [
      'One unified codebase that reaches both iPhone and Android customers efficiently',
      'Higher customer retention through timely push alerts and personalized experiences',
      'Rock-solid reliability with enterprise-grade data protection',
      'Transparent milestone updates throughout every phase of development',
    ],
    metrics: [
      { label: 'Smooth Animation', value: '60 FPS' },
      { label: 'Crash-Free Rate', value: '99.9%' },
      { label: 'Platform Reach', value: 'iOS + Android' },
    ],
  },
  {
    id: 'seo-services',
    slug: 'seo',
    title: 'SEO & Growth Performance',
    tagline: 'Get found on Google by customers actively searching for what you sell.',
    shortDesc: 'Technical SEO audits, speed acceleration, and search architecture that drive high-intent organic visitors to your business every month.',
    fullDesc:
      'A great website is useless if your target audience can’t find it. We optimize your website from the code up so Google effortlessly crawls, understands, and ranks your high-value pages. By fixing speed bottlenecks and implementing structured data, we create a sustainable stream of inbound leads without relying purely on paid ads.',
    deliverables: [
      'In-Depth Technical SEO & Keyword Opportunity Audit',
      'Google Core Web Vitals Speed Acceleration (LCP, INP, CLS)',
      'Schema.org Rich Snippet & Structured Data Setup',
      'Automated XML Sitemaps, Robots.txt & Error-Free Indexing',
      'Mobile Crawl Optimization & Internal Link Architecture',
      'Google Search Console Setup & Growth Monitoring',
    ],
    techStack: ['JSON-LD', 'Schema.org', 'Lighthouse CI', 'Next.js Metadata API', 'OpenGraph'],
    outcomes: [
      'Higher search rankings for terms your prospective clients actually search for',
      'Elimination of technical 404 errors and slow response times that penalize rankings',
      'Eligible for eye-catching rich snippets that increase search click-through rates',
      'Lower customer acquisition costs through compounding organic search traffic',
    ],
    metrics: [
      { label: 'Core Web Vitals', value: '100% Green' },
      { label: 'Schema Validity', value: '100%' },
      { label: 'Index Readiness', value: 'Instant' },
    ],
  },
];
