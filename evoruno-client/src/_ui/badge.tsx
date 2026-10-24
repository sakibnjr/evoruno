import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'border-border bg-white/5 text-muted-foreground',
  primary: 'border-primary/40 bg-primary/10 text-primary',
  secondary: 'border-secondary/40 bg-secondary/10 text-secondary',
  accent: 'border-accent/40 bg-accent/10 text-accent',
  outline: 'border-white/20 text-foreground',
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
