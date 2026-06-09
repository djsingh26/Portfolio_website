import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-ink-950/10 bg-white/80 shadow-soft backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
