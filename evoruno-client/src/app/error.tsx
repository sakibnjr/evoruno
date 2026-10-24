'use client';

import { useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { FiRefreshCw, FiAlertTriangle } from 'react-icons/fi';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[#080B16] pt-24">
      <Container size="narrow" className="text-center relative z-10 space-y-6">
        <div className="h-16 w-16 rounded-full bg-red-500/20 text-red-400 mx-auto flex items-center justify-center text-3xl">
          <FiAlertTriangle />
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-white font-display">
          An Unexpected Error Occurred
        </h1>
        <p className="text-base text-[#A7B0C5] max-w-md mx-auto leading-relaxed">
          Our application encountered an issue while processing your request. Please try reloading the page.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="default"
            size="lg"
            className="rounded-full"
          >
            <FiRefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
