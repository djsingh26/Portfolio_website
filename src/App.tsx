import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { BackToTop } from './components/layout/BackToTop';

const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-ink-950 transition-colors duration-300 dark:bg-ink-950 dark:text-stone-50">
      <Navbar sectionIds={sectionIds} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
