import { FiCheckCircle } from 'react-icons/fi';

interface ContactSuccessStateProps {
  message: string;
  isLight?: boolean;
}

export function ContactSuccessState({ message, isLight = false }: ContactSuccessStateProps) {
  return (
    <div
      className={
        isLight
          ? 'rounded-3xl border border-green-500/40 bg-green-50 p-8 sm:p-12 text-center space-y-4 animate-in fade-in zoom-in duration-300'
          : 'rounded-3xl border border-green-500/30 bg-green-500/10 p-8 sm:p-12 text-center space-y-4 animate-in fade-in zoom-in duration-300'
      }
    >
      <div className="h-16 w-16 rounded-full bg-green-500/20 text-green-600 mx-auto flex items-center justify-center text-3xl">
        <FiCheckCircle />
      </div>
      <h3 className={`text-2xl font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
        Inquiry Received!
      </h3>
      <p className={`text-base max-w-lg mx-auto leading-relaxed ${isLight ? 'text-slate-600' : 'text-[#E2E8F0]'}`}>
        {message}
      </p>
      <div className={`pt-4 text-xs ${isLight ? 'text-slate-500' : 'text-[#A7B0C5]'}`}>
        Need immediate assistance? Email us directly at{' '}
        <a href="mailto:contact@evoruno.com" className="text-[#4F7CFF] underline font-medium">
          contact@evoruno.com
        </a>
      </div>
    </div>
  );
}
