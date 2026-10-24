export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Development' | 'SEO' | 'Process';
}

export const faqsData: Faq[] = [
  {
    id: 'services-overview',
    question: 'What core services does Evoruno provide?',
    answer:
      'Evoruno specializes in three core disciplines: custom modern website development (using Next.js and TypeScript), cross-platform mobile application development (iOS and Android), and technical SEO/performance optimization designed to maximize organic visibility and search indexing.',
    category: 'General',
  },
  {
    id: 'pricing-model',
    question: 'How do you price website and app development projects?',
    answer:
      'We price projects based on transparent scopes and architectural complexity rather than vague hourly estimates. Following our initial Discovery audit, we provide a detailed proposal with fixed milestone tiers so there are no unexpected budget surprises.',
    category: 'Process',
  },
  {
    id: 'turnaround-time',
    question: 'What is the typical timeline for delivering a website or web app?',
    answer:
      'Standard high-performance business websites typically launch within 3 to 5 weeks. More complex web applications, client portals, or cross-platform mobile apps generally take 6 to 10 weeks depending on custom integrations and feature scope. Every project includes a concrete timeline roadmap.',
    category: 'Development',
  },
  {
    id: 'redesign-legacy',
    question: 'Can you redesign or improve an existing, outdated website?',
    answer:
      'Yes. We regularly audit and modernize outdated websites. We migrate existing legacy codebases to modern frameworks like Next.js, elevating visual aesthetics to match high-end industry standards while preserving historical SEO value through careful 301 redirect mapping.',
    category: 'Development',
  },
  {
    id: 'ongoing-maintenance',
    question: 'Do you offer ongoing post-launch maintenance and technical support?',
    answer:
      'Absolutely. Every project includes 30 days of post-launch stabilization support. Afterward, we offer structured maintenance retainers covering security updates, framework upgrades, performance monitoring, and continuous feature enhancements.',
    category: 'General',
  },
  {
    id: 'seo-guarantee',
    question: 'Do you guarantee #1 rankings on Google search results?',
    answer:
      'No ethical agency or engineering firm can guarantee a #1 Google ranking, as search engine algorithms are proprietary and dynamic. What we do guarantee is 100% technically sound search architecture: perfect crawlability, zero indexation errors, valid JSON-LD structured schemas, and green Core Web Vitals.',
    category: 'SEO',
  },
  {
    id: 'get-started',
    question: 'How do we begin a project with Evoruno?',
    answer:
      'Getting started is straightforward. Submit an inquiry through our contact form with a brief summary of your goals. Our team will review your requirements and schedule an introductory discovery conversation within 24 business hours.',
    category: 'Process',
  },
];
