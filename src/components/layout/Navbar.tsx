import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";
import { ProfilePicture } from "../ui/ProfilePicture";

type NavbarProps = {
  sectionIds: string[];
};

export function Navbar({ sectionIds }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-950/10 bg-stone-50/80 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-ink-950/75">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3 rounded-lg text-base font-bold text-ink-950 outline-none transition focus-visible:ring-4 focus-visible:ring-brand-500/20 dark:text-white"
          onClick={closeMenu}
        >
          Dilraj Singh
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                  isActive
                    ? "text-brand-700 dark:text-brand-100"
                    : "text-ink-950/70 hover:text-ink-950 dark:text-stone-300 dark:hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600 transition ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-950/10 text-ink-950 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:text-stone-100 dark:hover:border-brand-100 dark:hover:text-brand-100"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-950/10 text-ink-950 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 md:hidden dark:border-white/15 dark:text-stone-100 dark:hover:border-brand-100 dark:hover:text-brand-100"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-ink-950/10 bg-stone-50/95 transition-all duration-300 md:hidden dark:border-white/10 dark:bg-ink-950/95 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                    isActive
                      ? "bg-brand-500/10 text-brand-700 dark:text-brand-100"
                      : "text-ink-950/75 hover:bg-ink-950/5 dark:text-stone-300 dark:hover:bg-white/10"
                  }`}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
