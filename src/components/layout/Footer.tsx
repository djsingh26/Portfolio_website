import { navItems, socialLinks } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-white py-10 dark:border-white/10 dark:bg-ink-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-ink-950 dark:text-white">Alex Carter</p>
          <p className="mt-2 text-sm text-ink-950/60 dark:text-stone-300">
            Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {navItems.slice(1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-2 py-1 text-sm font-medium text-ink-950/70 transition hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:text-stone-300 dark:hover:text-brand-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-950/10 text-ink-950/75 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:text-stone-300 dark:hover:border-brand-100 dark:hover:text-brand-100"
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
