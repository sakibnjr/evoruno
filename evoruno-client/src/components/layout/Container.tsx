import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({
  className,
  size = 'default',
  children,
  ...props
}: ContainerProps) {
  const maxWidth =
    size === 'narrow'
      ? 'max-w-4xl'
      : size === 'wide'
      ? 'max-w-[1400px]'
      : 'max-w-7xl';

  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidth, className)}
      {...props}
    >
      {children}
    </div>
  );
}
