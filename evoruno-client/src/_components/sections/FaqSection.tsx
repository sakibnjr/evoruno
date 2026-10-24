import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/_ui/accordion';
import { faqsData } from '@/content/faqs';
import { FiHelpCircle, FiArrowRight } from 'react-icons/fi';

export function FaqSection() {
  return (
    <section className="bg-light-section text-light-section-text py-24 sm:py-32 relative overflow-hidden transition-colors border-t border-slate-200/60">
      <Container size="narrow">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold uppercase tracking-wider">
            <FiHelpCircle className="h-3.5 w-3.5" />
            Clear Answers For Business Owners
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-light-section-text font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our pricing transparency, project timelines, and post-launch partnership.
          </p>
        </div>

        {/* Accordion Component inside White Elevated Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <Accordion type="single" collapsible defaultValue="services-overview" className="w-full text-slate-900">
            {faqsData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-slate-200/80">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Have a specific question about your project?</span>
          <Link href="/contact" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
            Talk to an engineer directly
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
