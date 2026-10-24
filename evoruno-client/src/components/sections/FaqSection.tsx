import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqsData } from '@/content/faqs';
import { FiHelpCircle, FiArrowRight } from 'react-icons/fi';

export function FaqSection() {
  return (
    <section className="bg-[#080B16] text-[#F5F7FF] py-24 sm:py-32 relative overflow-hidden border-t border-white/5">
      <Container size="narrow">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">
            <FiHelpCircle className="mr-1.5 h-3.5 w-3.5" />
            Clear Answers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            Everything you need to know about our engineering approach, pricing transparency, and project timelines.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="glow-card rounded-3xl p-6 sm:p-10 border border-white/10">
          <Accordion type="single" collapsible defaultValue="services-overview" className="w-full">
            {faqsData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-sm text-[#A7B0C5] flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Still have a unique question or custom inquiry?</span>
          <Link href="/contact" className="text-[#4F7CFF] font-semibold hover:underline inline-flex items-center gap-1">
            Talk to an engineer directly
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
