import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type SharedButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorButtonProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const variants = {
  primary:
    'bg-brand-600 text-white shadow-glow hover:bg-brand-700 focus-visible:outline-brand-600 dark:bg-brand-500 dark:text-ink-950 dark:hover:bg-brand-100',
  secondary:
    'border border-ink-950/15 bg-white/80 text-ink-950 hover:border-brand-600 hover:text-brand-700 focus-visible:outline-brand-600 dark:border-white/15 dark:bg-white/10 dark:text-stone-50 dark:hover:border-brand-400 dark:hover:text-brand-100',
  ghost:
    'text-ink-950 hover:bg-ink-950/5 focus-visible:outline-brand-600 dark:text-stone-50 dark:hover:bg-white/10',
};

const baseClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]';

export function Button({ children, icon, variant = 'primary', className = '', ...props }: ButtonProps) {
  const buttonClass = `${baseClass} ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    const anchorProps = props as AnchorButtonProps;

    return (
      <a className={buttonClass} {...anchorProps}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={buttonClass} {...buttonProps}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
