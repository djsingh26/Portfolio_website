import { Award, CalendarCheck, ExternalLink, ShieldCheck } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { certifications } from '../data/portfolio';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-ink-900"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          titleId="certifications-heading"
          title="Verified learning that supports real delivery."
          description="A focused set of credentials across frontend engineering, Salesforce development, and accessible web foundations."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.id} delay={index * 90}>
              <Card className="h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-700 dark:bg-brand-100/10 dark:text-brand-100">
                    <Award size={22} aria-hidden="true" />
                  </div>
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-950/10 text-ink-950/70 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:text-stone-300 dark:hover:border-brand-100 dark:hover:text-brand-100"
                    aria-label={`Verify ${certification.title}`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>

                <div className="mt-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-100">
                    <ShieldCheck size={16} aria-hidden="true" />
                    {certification.issuer}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-ink-950 dark:text-white">
                    {certification.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-ink-950/65 dark:text-stone-300">
                    <CalendarCheck size={16} aria-hidden="true" />
                    Issued {certification.issued}
                  </p>
                  {certification.credentialId ? (
                    <p className="mt-2 text-sm text-ink-950/60 dark:text-stone-400">{certification.credentialId}</p>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-ink-950/5 px-3 py-1 text-xs font-semibold text-ink-950/70 dark:bg-white/10 dark:text-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
