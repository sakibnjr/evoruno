import Link from 'next/link';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showWordmark = true, size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 36 : 28;
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 ${className}`}>
      {/* Dynamic Geometric E-Symbol */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="evoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F7CFF" />
            <stop offset="50%" stopColor="#7C5CFC" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
        </defs>
        {/* Forward momentum geometric evolutionary mark */}
        <path
          d="M6 6H24C25.1 6 26 6.9 26 8V9C26 10.1 25.1 11 24 11H12V14H21C22.1 14 23 14.9 23 16V16C23 17.1 22.1 18 21 18H12V21H25C26.1 21 27 21.9 27 23V24C27 25.1 26.1 26 25 26H6V6Z"
          fill="url(#evoGradient)"
        />
        <circle cx="28" cy="8" r="2" fill="#00E5FF" />
      </svg>

      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-[0.2em] uppercase font-sans text-white ${textSize} leading-none`}>
            EVORUNO
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#A7B0C5] mt-0.5 leading-none font-medium">
            Beyond Limits
          </span>
        </div>
      )}
    </Link>
  );
}
