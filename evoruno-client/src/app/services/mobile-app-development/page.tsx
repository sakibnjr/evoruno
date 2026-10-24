import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Badge } from '@/_ui/badge';
import { Button } from '@/_ui/button';
import { FiCheck, FiArrowRight, FiSmartphone, FiShield, FiActivity } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS & Android Solutions | Evoruno',
  description:
    'Cross-platform mobile applications engineered for iOS and Android. High-performance UI, 60fps animations, biometric authentication, and offline sync.',
};

export default function MobileAppDevelopmentPage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: DARK HERO */}
      <section className="pt-32 pb-20 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#7C5CFC]/15 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="secondary">
              <FiSmartphone className="mr-1.5 h-3.5 w-3.5" />
              Mobile App Engineering
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              Intuitive mobile applications that keep customers connected to your business.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B0C5] leading-relaxed">
              Reach your customers wherever they are. We engineer high-performance iOS and Android mobile apps that combine fluid 60 FPS interfaces, reliable offline sync, and enterprise-grade security.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl">
                  Discuss Your Mobile App
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Mobile Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LIGHT FEATURES & SCOPE */}
      <section className="py-24 bg-[#F5F7FB] relative">
        <Container>
          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 text-[#7C5CFC] flex items-center justify-center text-xl">
                <FiActivity />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">60 FPS Native Performance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Silky-smooth animations and zero input lag, ensuring a premium experience on both budget devices and flagship smartphones.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#4F7CFF] flex items-center justify-center text-xl">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Biometric & Data Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Biometric login (FaceID, Fingerprint), end-to-end token encryption, and secure keychain storage safeguarding your users&apos; accounts.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-50 text-[#00A3BF] flex items-center justify-center text-xl">
                <FiSmartphone />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Unified Codebase Savings</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                One unified codebase serving both iOS and Android, cutting your development costs by nearly half and accelerating release speed.
              </p>
            </div>
          </div>

          {/* Deliverables Breakdown */}
          <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-900/5">
            <div className="max-w-2xl mb-8 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4F7CFF] block">
                Deliverables & Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                What we build into your mobile application
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Cross-platform iOS & Android mobile application engineered with React Native',
                'Offline-first data persistence ensuring functionality without active Wi-Fi',
                'Secure REST & GraphQL backend integrations with real-time updates',
                'Targeted push notifications (Firebase Cloud Messaging / APNs) for retention',
                'In-app analytics and crash error telemetry to monitor user health',
                'Full Apple App Store and Google Play Store publishing support',
                'Biometric authentication (Face ID, Touch ID, Android Biometrics)',
                '30 days of post-release bug fixing, store compliance, and handover support',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <FiCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: DARK CONVERSION CALLOUT */}
      <section className="py-24 bg-[#080B16] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7C5CFC]/15 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#101629] to-[#172038] border border-white/10 text-center space-y-6 shadow-2xl relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              Turn Your App Concept Into Reality
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Have an app idea to scale your business?
            </h3>
            <p className="text-base sm:text-lg text-[#A7B0C5] max-w-xl mx-auto leading-relaxed">
              Let&apos;s validate your technical architecture, review budget requirements, and map out a clean milestone launch plan.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="default" size="lg" className="rounded-full shadow-lg hover:shadow-xl text-base px-8 py-6">
                  Schedule a Mobile Discovery Call
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
