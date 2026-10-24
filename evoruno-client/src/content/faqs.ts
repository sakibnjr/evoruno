export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Development' | 'SEO' | 'Process';
}

export const faqsData: Faq[] = [
  {
    id: 'services-overview',
    question: 'How can Evoruno help my business grow?',
    answer:
      'We help businesses grow in three distinct ways: by building fast, professional websites that convert more visitors into paying customers; creating intuitive mobile apps that keep your audience engaged; and optimizing your Google search visibility so new leads discover you organically every single month.',
    category: 'General',
  },
  {
    id: 'pricing-model',
    question: 'How do you price projects, and are there any hidden fees?',
    answer:
      'We believe in 100% price transparency. After an initial discovery audit of your business goals, we provide a clear, fixed-price proposal broken into deliverables and milestone stages. You know the exact investment and scope upfront—zero surprise charges or hidden hourly inflation.',
    category: 'Process',
  },
  {
    id: 'turnaround-time',
    question: 'How long does it take from our first call to a live launch?',
    answer:
      'A standard, high-converting business website typically launches within 3 to 4 weeks. More comprehensive web portals or full mobile applications generally take 6 to 8 weeks. We provide a week-by-week roadmap so you always know where your project stands.',
    category: 'Development',
  },
  {
    id: 'redesign-legacy',
    question: 'Can you redesign and modernize our current outdated website?',
    answer:
      'Yes. Many of our clients come to us with slow, outdated websites that are hurting their sales. We completely refresh your brand image, optimize the mobile user flow, and migrate your site to modern technology while carefully preserving your existing search traffic and customer links.',
    category: 'Development',
  },
  {
    id: 'ongoing-maintenance',
    question: 'What happens after our website or app goes live?',
    answer:
      'We don’t just launch your project and disappear. Every project includes 30 days of complimentary post-launch support and monitoring. Beyond that, we offer simple monthly maintenance retainers covering security updates, continuous speed optimization, and ongoing feature updates.',
    category: 'General',
  },
  {
    id: 'seo-guarantee',
    question: 'Will our website show up on Google search?',
    answer:
      'Yes. Every website we build includes technical SEO directly in the code: fast load speeds, mobile friendliness, clean meta tags, and structured data that Google favors. While no honest agency can guarantee a #1 spot overnight, we set you up with the exact technical foundation needed to outrank slower competitors.',
    category: 'SEO',
  },
  {
    id: 'get-started',
    question: 'How do we take the first step together?',
    answer:
      'Simply send us a message through our contact form. Tell us a little about your business and what you want to achieve. An engineer from our team will personally get back to you within 24 business hours with initial ideas and next steps—no pressure, no aggressive sales pitch.',
    category: 'Process',
  },
];
