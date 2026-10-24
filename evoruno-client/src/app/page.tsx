import { HeroSection } from '@/components/sections/HeroSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Social Proof / Capabilities Bento (Light section transition) */}
      <SocialProofSection />

      {/* 3. Problem Statement */}
      <ProblemSection />

      {/* 4. Solution & Value Proposition */}
      <SolutionSection />

      {/* 5. How It Works (4-Step Process) */}
      <ProcessSection />

      {/* 6. FAQ Accordion */}
      <FaqSection />

      {/* 7. Final Conversion Call To Action */}
      <FinalCtaSection />
    </>
  );
}
