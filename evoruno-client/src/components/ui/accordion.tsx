'use client';

import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single';
  collapsible?: boolean;
  defaultValue?: string;
  children: React.ReactNode;
}

function Accordion({
  collapsible = true,
  defaultValue,
  children,
  className,
  ...props
}: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue ?? null);

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItem((prev) => (prev === value ? (collapsible ? null : prev) : value));
    },
    [collapsible]
  );

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItemContext = React.createContext<{ value: string; isOpen: boolean }>({
  value: '',
  isOpen: false,
});

function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const isOpen = context.openItem === value;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className={cn('border-b border-slate-200/80 last:border-b-0 py-1', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const accordionContext = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }

  const { isOpen, value } = itemContext;

  return (
    <button
      type="button"
      onClick={() => accordionContext.toggleItem(value)}
      aria-expanded={isOpen}
      data-state={isOpen ? 'open' : 'closed'}
      className={cn(
        'flex w-full items-center justify-between py-5 text-left font-medium text-inherit transition-all hover:text-[#4F7CFF] cursor-pointer text-base md:text-lg',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <FiChevronDown
        className={cn(
          'h-5 w-5 shrink-0 opacity-60 transition-transform duration-300 ease-out',
          isOpen && 'rotate-180 text-[#4F7CFF] opacity-100'
        )}
      />
    </button>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) {
    throw new Error('AccordionContent must be used within AccordionItem');
  }

  const { isOpen } = itemContext;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      data-state={isOpen ? 'open' : 'closed'}
      className={cn(
        'overflow-hidden text-sm leading-relaxed pb-5 pt-1 text-slate-600 transition-all animate-in fade-in duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
