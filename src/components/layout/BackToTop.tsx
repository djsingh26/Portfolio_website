import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 560);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600 text-white shadow-glow transition duration-200 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 active:scale-95 dark:bg-brand-500 dark:text-ink-950 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </a>
  );
}
