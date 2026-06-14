import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { timeline } from "../data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of product work, learning, and delivery."
          description="Milestones are structured for quick scanning while still showing the outcomes behind each role."
        />

        <div className="relative">
          <div
            className="absolute left-5 top-0 h-full w-px bg-ink-950/15 md:left-1/2 dark:bg-white/15"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Reveal key={`${item.company}-${item.role}`} delay={index * 100}>
                <article
                  className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  <div className="pl-14 md:px-8">
                    <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-lg border border-brand-600/30 bg-white text-brand-700 shadow-soft md:left-1/2 md:-translate-x-1/2 dark:border-brand-100/25 dark:bg-ink-900 dark:text-brand-100">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <BriefcaseBusiness size={18} aria-hidden="true" />
                      )}
                    </div>
                    <div className="rounded-lg border border-ink-950/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/10">
                      <p className="text-sm font-semibold text-brand-700 dark:text-brand-100">
                        {item.date}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-ink-950 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-ink-950/60 dark:text-stone-300">
                        {item.company}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-3 text-sm leading-6 text-ink-950/70 dark:text-stone-300"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500"
                              aria-hidden="true"
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
