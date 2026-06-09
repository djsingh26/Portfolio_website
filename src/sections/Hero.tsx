import { ArrowRight, Download, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { ParticleField } from '../components/visuals/ParticleField';
import { ProfilePicture } from '../components/ui/ProfilePicture';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(20,184,166,0.10),transparent_38%,rgba(249,115,22,0.10))] dark:bg-[linear-gradient(135deg,rgba(20,184,166,0.18),transparent_40%,rgba(249,115,22,0.12))]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <Reveal>
          <p className="mb-5 inline-flex rounded-full border border-brand-600/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:border-brand-100/20 dark:text-brand-100">
            Frontend developer and product-minded builder
          </p>
          <h1
            id="hero-heading"
            className="max-w-4xl text-4xl font-bold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Alex Carter builds fast, accessible interfaces that feel effortless to use.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-950/70 dark:text-stone-300">
            I design and ship responsive web experiences with React, TypeScript, and clean component
            systems that make products easier to understand, maintain, and scale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" icon={<ArrowRight size={18} />}>
              View Work
            </Button>
            <Button href="#contact" variant="secondary" icon={<Send size={18} />}>
              Contact Me
            </Button>
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-ink-950/75 transition hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 dark:text-stone-300 dark:hover:text-brand-100"
          >
            <Download size={17} />
            Download resume
          </a>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-lg border border-ink-950/10 bg-white/80 shadow-soft dark:border-white/10 dark:bg-white/10">
            <ParticleField />
            <div className="absolute inset-8 rounded-lg border border-brand-600/20" />
            <div className="absolute left-8 top-8 h-16 w-16 rounded-lg border border-ember-500/40 bg-ember-400/15 animate-float" />
            <div className="absolute bottom-8 right-8 h-24 w-24 rounded-lg border border-brand-600/40 bg-brand-500/15 animate-pulseRing" />
            <div className="absolute inset-x-10 bottom-10 rounded-lg border border-ink-950/10 bg-white/90 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-ink-900/80">
              <div className="flex items-center gap-4">
                <ProfilePicture src="/me.svg" alt="Alex Carter" size={72} />
                <div>
                  <p className="text-sm font-semibold text-ink-950 dark:text-white">Current focus</p>
                  <p className="mt-1 text-sm leading-6 text-ink-950/70 dark:text-stone-300">
                    Building resilient UI systems with delightful interaction details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
