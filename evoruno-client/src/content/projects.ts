export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Web Development' | 'Mobile App' | 'SEO';
  client: string;
  isSelfInitiated: boolean;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: 'paycore',
    title: 'Paycore Financial Portal',
    slug: 'paycore-financial-portal',
    category: 'Web Development',
    client: 'FinTech Innovation Lab',
    isSelfInitiated: false,
    year: '2025',
    summary: 'A futuristic digital payment and asset management dashboard engineered with sub-second data synchronization.',
    challenge: 'The client needed a high-security, real-time transaction overview that rendered heavy analytics without UI lag or layout shifts.',
    solution: 'Engineered an RSC-first architecture with Next.js App Router, Tailwind CSS, and WebSockets sync with instantaneous chart rendering.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'LCP Score', value: '1.2s' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Client Feedback', value: '100% Positive' },
    ],
    accentColor: '#4F7CFF',
  },
  {
    id: 'lumina-app',
    title: 'Lumina Mobile Experience',
    slug: 'lumina-mobile-app',
    category: 'Mobile App',
    client: 'Lumina Health Inc.',
    isSelfInitiated: false,
    year: '2025',
    summary: 'Cross-platform mobile application delivering biometric habit tracking, telemedicine scheduling, and offline-first encryption.',
    challenge: 'Existing apps suffered from sluggish transition animations, high battery consumption, and poor offline data persistence.',
    solution: 'Designed and implemented a React Native architecture with local SQLite storage, native biometric hooks, and 60 FPS gesture-driven motion.',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Redux Toolkit', 'SQLite', 'Biometrics'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Crash Rate', value: '< 0.01%' },
      { label: 'Store Rating', value: '4.9 / 5' },
    ],
    accentColor: '#7C5CFC',
  },
  {
    id: 'apex-logistics',
    title: 'Apex Global Logistics Engine',
    slug: 'apex-logistics-engine',
    category: 'Web Development',
    client: 'Apex Freight Systems',
    isSelfInitiated: false,
    year: '2024',
    summary: 'Enterprise supply-chain tracking portal with interactive route visualization and multi-carrier booking workflows.',
    challenge: 'Disjointed legacy software with poor mobile usability resulted in high customer inquiry friction and lengthy booking cycles.',
    solution: 'Re-architected the portal with responsive component architecture, automated document generation, and real-time shipment status feeds.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mapbox API', 'REST API'],
    metrics: [
      { label: 'Booking Speed', value: '3x Faster' },
      { label: 'Mobile Drop-off', value: '-42%' },
      { label: 'Daily Shipments', value: '10k+' },
    ],
    accentColor: '#00E5FF',
  },
  {
    id: 'velocity-seo',
    title: 'Velocity Search Architecture',
    slug: 'velocity-search-architecture',
    category: 'SEO',
    client: 'Self-Initiated Innovation Project',
    isSelfInitiated: true,
    year: '2024',
    summary: 'Open research benchmark testing automated JSON-LD generation and dynamic rendering speeds for high-volume content hubs.',
    challenge: 'Exploring the technical upper limits of search engine crawlability and Core Web Vitals performance across 10,000+ dynamic routes.',
    solution: 'Implemented edge-rendered sitemaps, automated Schema.org entity linking, and sub-100ms TTFB edge caching strategies.',
    technologies: ['Next.js App Router', 'Schema.org', 'Edge Middleware', 'Lighthouse CI'],
    metrics: [
      { label: 'Lighthouse SEO', value: '100 / 100' },
      { label: 'Crawl Error Rate', value: '0.0%' },
      { label: 'INP Metric', value: '45ms' },
    ],
    accentColor: '#4F7CFF',
  },
];
