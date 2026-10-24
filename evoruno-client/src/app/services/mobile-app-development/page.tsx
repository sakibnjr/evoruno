import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiCheck, FiArrowRight, FiSmartphone, FiShield, FiActivity } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS & Android Solutions',
  description:
    'Cross-platform mobile applications engineered for iOS and Android. High-performance UI, 60fps animations, biometric authentication, and offline sync.',
};

export default function MobileAppDevelopmentPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-[#080B16]">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#7C5CFC]/15 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        {/* Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="secondary">
            <FiSmartphone className="mr-1.5 h-3.5 w-3.5" />
            Mobile App Engineering
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
            Intuitive mobile applications shaped around product objectives.
          </h1>
          <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
            From early product validation to app store deployment, we build high-performance iOS and Android mobile applications that deliver native fluidity, tactile haptic feedback, and offline durability.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full">
                Discuss Your Mobile App
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="rounded-full">
                View Mobile Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-[#7C5CFC] flex items-center justify-center text-xl">
              <FiActivity />
            </div>
            <h3 className="text-xl font-bold text-white font-display">60 FPS Fluid UI</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              Silky smooth transitions and gesture interactions optimized to run without frame drops across both flagship and budget smartphones.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-[#4F7CFF] flex items-center justify-center text-xl">
              <FiShield />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Security & Biometrics</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              Biometric login (FaceID / Fingerprint), token encryption, and secure local keychain storage protecting confidential customer data.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 text-[#00E5FF] flex items-center justify-center text-xl">
              <FiSmartphone />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Cross-Platform Efficiency</h3>
            <p className="text-sm text-[#A7B0C5] leading-relaxed">
              Single codebase deployment for iOS and Android, drastically reducing your development timeline and ongoing maintenance overhead.
            </p>
          </div>
        </div>

        {/* Deliverables Breakdown */}
        <div className="glow-card rounded-3xl p-8 sm:p-12 mb-20 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-6">
            Mobile Development Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Native-quality iOS & Android app development with React Native',
              'Offline-first data persistence with local SQLite / WatermelonDB',
              'REST & GraphQL backend API integrations with real-time WebSockets',
              'Push notification systems (Firebase Cloud Messaging / APNs)',
              'In-app analytics, error telemetry, and performance tracking',
              'Apple App Store & Google Play Store submission & review guidance',
              'Biometric authentication (Face ID, Touch ID, Android Biometrics)',
              '30-day post-launch bug triage and version stabilization',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <FiCheck className="h-5 w-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-display">Have a mobile app concept?</h3>
          <p className="text-sm text-[#A7B0C5]">
            Let&apos;s validate the product architecture and turn your wireframes into a live application.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="rounded-full">
              Schedule a Mobile Discovery Call
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
