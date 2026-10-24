import * as React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'border-white/10 bg-white/5 text-[#A7B0C5]',
  primary: 'border-[#4F7CFF]/40 bg-[#4F7CFF]/10 text-[#4F7CFF]',
  secondary: 'border-[#7C5CFC]/40 bg-[#7C5CFC]/10 text-[#7C5CFC]',
  accent: 'border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF]',
  outline: 'border-white/20 text-[#F5F7FF]',
};

export const badgeVariants = ({
  variant = 'default',
  className = '',
}: {
  variant?: BadgeVariant;
  className?: string;
} = {}) => {
  return cn(
    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors',
    variantClasses[variant] || variantClasses.default,
    className
  );
};

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className })} {...props} />
  );
}

export { Badge };
