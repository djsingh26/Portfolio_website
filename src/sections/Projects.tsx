import { ExternalLink, Github, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/portfolio';

const categories = ['All', 'Frontend', 'Full Stack', 'Design Systems'] as const;
type Category = (typeof categories)[number];

export function Projects() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const searchableText = [project.title, project.description, project.category, ...project.tech]
        .join(' ')
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section id="projects" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with practical polish."
          description="Search by name or technology, then narrow the grid by project type."
        />

        <Reveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <label className="relative block w-full md:max-w-md" htmlFor="project-search">
              <span className="sr-only">Search projects</span>
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-950/40 dark:text-stone-400"
                aria-hidden="true"
              />
              <input
                id="project-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-12 w-full rounded-lg border border-ink-950/15 bg-stone-50 pl-11 pr-4 text-sm text-ink-950 outline-none transition placeholder:text-ink-950/40 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/15 dark:border-white/15 dark:bg-white/10 dark:text-stone-50"
                placeholder="Search projects or tech"
                type="search"
              />
            </label>

            <div className="flex flex-wrap gap-2" aria-label="Project category filters">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    className={`min-h-10 rounded-lg border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                      isActive
                        ? 'border-brand-600 bg-brand-600 text-white dark:border-brand-100 dark:bg-brand-100 dark:text-ink-950'
                        : 'border-ink-950/15 text-ink-950/70 hover:border-brand-600 hover:text-brand-700 dark:border-white/15 dark:text-stone-300 dark:hover:border-brand-100 dark:hover:text-brand-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <Card className="group h-full overflow-hidden">
                <div className={`h-44 bg-gradient-to-br ${project.accent} p-4`}>
                  <div className="flex h-full items-end rounded-lg border border-white/25 bg-white/15 p-4 backdrop-blur">
                    <p className="text-lg font-bold text-white">{project.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-ink-950 dark:text-white">{project.title}</h3>
                    <div className="flex shrink-0 gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-950/10 text-ink-950/70 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:text-stone-300 dark:hover:border-brand-100 dark:hover:text-brand-100"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={17} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-950/10 text-ink-950/70 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:text-stone-300 dark:hover:border-brand-100 dark:hover:text-brand-100"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={17} />
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-950/70 dark:text-stone-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-ink-950/5 px-3 py-1 text-xs font-semibold text-ink-950/70 dark:bg-white/10 dark:text-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 rounded-lg border border-ink-950/10 p-6 text-center text-sm font-medium text-ink-950/70 dark:border-white/10 dark:text-stone-300">
            No projects match your current search.
          </p>
        ) : null}
      </div>
    </section>
  );
}
