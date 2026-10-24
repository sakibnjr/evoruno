import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqsData } from '@/content/faqs';
import { FiHelpCircle, FiArrowRight } from 'react-icons/fi';

export function FaqSection() {
  return (
    <section className="bg-[#F5F7FB] text-[#080B16] py-24 sm:py-32 relative overflow-hidden transition-colors border-t border-slate-200/60">
      <Container size="narrow">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#4F7CFF] text-xs font-semibold uppercase tracking-wider">
            <FiHelpCircle className="h-3.5 w-3.5" />
            Clear Answers For Business Owners
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080B16] font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Everything you need to know about our pricing transparency, project timelines, and post-launch partnership.
          </p>
        </div>

        {/* Accordion Component inside White Elevated Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <Accordion type="single" collapsible defaultValue="services-overview" className="w-full text-[#080B16]">
            {faqsData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-slate-200/80">
                <AccordionTrigger className="text-left font-semibold text-[#080B16] hover:text-[#4F7CFF]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#475569]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-sm text-[#475569] flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Have a specific question about your project?</span>
          <Link href="/contact" className="text-[#4F7CFF] font-semibold hover:underline inline-flex items-center gap-1">
            Talk to an engineer directly
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
