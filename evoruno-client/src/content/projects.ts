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
    summary: 'A modern digital finance platform that lets businesses manage cash flow, track client payments, and process invoices in real time.',
    challenge: 'The client was losing high-value users because their previous portal was slow, confusing to navigate, and frequently crashed on mobile phones.',
    solution: 'We engineered a lightning-fast, secure Next.js web application with intuitive navigation, automated statements, and sub-second transaction dashboards.',
    technologies: ['Next.js App Router', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL'],
    metrics: [
      { label: 'Page Load Speed', value: '1.1s' },
      { label: 'User Retention', value: '+68%' },
      { label: 'System Uptime', value: '99.99%' },
    ],
    accentColor: '#4F7CFF',
  },
  {
    id: 'lumina-app',
    title: 'Lumina Health Mobile App',
    slug: 'lumina-mobile-app',
    category: 'Mobile App',
    client: 'Lumina Health Inc.',
    isSelfInitiated: false,
    year: '2025',
    summary: 'A cross-platform mobile app that connects patients directly with specialized doctors, schedule checkups, and receive prescription alerts.',
    challenge: 'Patients struggled with clunky booking workflows and slow video call loading, causing high cancellation rates and customer complaints.',
    solution: 'Designed a clean, frictionless mobile experience with one-tap doctor appointments, push notification reminders, and seamless biometric FaceID login.',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Redux', 'Biometrics'],
    metrics: [
      { label: 'Booking Speed', value: '2 mins' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Patient Adoption', value: '15,000+' },
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
    summary: 'A streamlined cargo tracking and dispatch portal helping B2B clients track shipments, request instant quotes, and manage customs documents.',
    challenge: 'Disjointed phone and spreadsheet workflows wasted hundreds of staff hours weekly and led to frustrating shipment status delays.',
    solution: 'Built an automated logistics dashboard with live shipment status maps, one-click quote requests, and automated SMS/email alerts.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mapbox API', 'REST API'],
    metrics: [
      { label: 'Dispatch Speed', value: '3x Faster' },
      { label: 'Support Inquiries', value: '-45%' },
      { label: 'Active Shipments', value: '10k+/mo' },
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
    summary: 'An open-source performance benchmark showing how modern technical SEO and edge caching can supercharge Google indexation for content platforms.',
    challenge: 'Large multi-page websites often struggle with crawl waste, slow rendering times, and lost search rankings on competitive keywords.',
    solution: 'Implemented edge-rendered dynamic sitemaps, automated JSON-LD entity linking, and sub-100ms server response caching.',
    technologies: ['Next.js App Router', 'Schema.org', 'Edge Middleware', 'Lighthouse CI'],
    metrics: [
      { label: 'Lighthouse SEO', value: '100 / 100' },
      { label: 'Google Index Speed', value: '< 24 Hours' },
      { label: 'Crawl Error Rate', value: '0.0%' },
    ],
    accentColor: '#4F7CFF',
  },
];
