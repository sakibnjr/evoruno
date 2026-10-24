import Link from 'next/link';
import { Container } from '@/_components/layout/Container';
import { Button } from '@/_ui/button';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[#080B16] pt-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4F7CFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <Container size="narrow" className="text-center relative z-10 space-y-6">
        <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4F7CFF] to-[#7C5CFC] font-display">
          404
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-white font-display">
          Page Not Found
        </h1>
        <p className="text-base text-[#A7B0C5] max-w-md mx-auto leading-relaxed">
          The route you are looking for does not exist or has been relocated as part of our platform evolution.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button variant="default" size="lg" className="rounded-full">
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
