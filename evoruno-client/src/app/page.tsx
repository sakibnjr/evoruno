import { HeroSection } from '@/_components/sections/HeroSection';
import { SocialProofSection } from '@/_components/sections/SocialProofSection';
import { ProblemSection } from '@/_components/sections/ProblemSection';
import { SolutionSection } from '@/_components/sections/SolutionSection';
import { ProcessSection } from '@/_components/sections/ProcessSection';
import { FaqSection } from '@/_components/sections/FaqSection';
import { FinalCtaSection } from '@/_components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Dark) */}
      <HeroSection />

      {/* 2. Social Proof & Comparison Bento (Light) */}
      <SocialProofSection />

      {/* 3. Problem Statement (Dark) */}
      <ProblemSection />

      {/* 4. Solution & Value Proposition (Light) */}
      <SolutionSection />

      {/* 5. How It Works - 4-Step Process (Dark) */}
      <ProcessSection />

      {/* 6. FAQ Accordion (Light) */}
      <FaqSection />

      {/* 7. Final Conversion Call To Action (Dark) */}
      <FinalCtaSection />
    </>
  );
}
