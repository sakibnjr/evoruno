import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import '@/app/globals.css';
import { Navbar } from '@/_components/layout/Navbar';
import { Footer } from '@/_components/layout/Footer';
import { JsonLd } from '@/_components/seo/JsonLd';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://evoruno.com'),
  title: {
    default: 'Evoruno — Digital Solutions | Websites, Mobile Apps & SEO',
    template: '%s | Evoruno',
  },
  description:
    'Evoruno designs and engineers high-performing websites, mobile applications, and SEO solutions that help businesses evolve beyond limits.',
  keywords: [
    'Web development Bangladesh',
    'Mobile app development',
    'Custom web applications',
    'SEO services Bangladesh',
    'Next.js development company',
    'Evoruno',
  ],
  authors: [{ name: 'Evoruno' }],
  creator: 'Evoruno',
  publisher: 'Evoruno',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evoruno.com',
    siteName: 'Evoruno',
    title: 'Evoruno — Evolving Beyond Limits',
    description: 'High-performing websites, mobile applications, and digital experiences.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Evoruno Brand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evoruno — Evolving Beyond Limits',
    description: 'High-performing websites, mobile applications, and digital experiences.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} dark scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
