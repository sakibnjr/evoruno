import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-white/10 bg-white/5 text-[#A7B0C5]',
        primary:
          'border-[#4F7CFF]/40 bg-[#4F7CFF]/10 text-[#4F7CFF]',
        secondary:
          'border-[#7C5CFC]/40 bg-[#7C5CFC]/10 text-[#7C5CFC]',
        accent:
          'border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF]',
        outline: 'border-white/20 text-[#F5F7FF]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
