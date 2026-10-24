import Link from 'next/link';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] rounded-lg ${className}`}
      aria-label="Evoruno Home"
    >
      {/* Dynamic Geometric Mark */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#4F7CFF] to-[#7C5CFC] opacity-80 group-hover:opacity-100 blur-[2px] transition-opacity" />
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-8 h-8 text-white transition-transform duration-300 group-hover:scale-105"
        >
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="8"
            fill="#080B16"
            stroke="url(#logoBorderGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M9 10H23M9 16H19M9 22H23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="21" cy="16" r="2" fill="#00E5FF" />
          <defs>
            <linearGradient id="logoBorderGrad" x1="2" y1="2" x2="30" y2="30">
              <stop stopColor="#4F7CFF" />
              <stop offset="0.5" stopColor="#7C5CFC" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showWordmark && (
        <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#A7B0C5] transition-all">
          EVORUNO
        </span>
      )}
    </Link>
  );
}
