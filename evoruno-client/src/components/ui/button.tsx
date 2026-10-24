import * as React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'ghost' | 'outline' | 'pillNav';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'bg-white text-[#080B16] hover:bg-[#F5F7FF] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]',
  primary:
    'bg-[#4F7CFF] text-white hover:bg-[#3D6CEF] hover:shadow-[0_0_30px_rgba(79,124,255,0.5)]',
  secondary:
    'bg-[#101629] text-[#F5F7FF] border border-white/10 hover:border-white/30 hover:bg-[#172038]',
  ghost:
    'text-[#F5F7FF] hover:bg-white/5 hover:text-white',
  outline:
    'border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40',
  pillNav:
    'bg-white/5 border border-white/10 text-[#A7B0C5] hover:text-white hover:bg-white/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-10 px-5 py-2 text-sm',
  sm: 'h-8 px-4 text-xs',
  lg: 'h-12 px-7 text-base font-medium',
  icon: 'h-9 w-9 p-0',
};

export const buttonVariants = ({
  variant = 'default',
  size = 'default',
  className = '',
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) => {
  return cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]',
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
