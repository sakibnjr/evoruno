'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins safely in browser runtime
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
}

export * from 'gsap';
export { ScrollTrigger };
