import { Download } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skillGroups } from "../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Software Engineer | Cloud & Salesforce Architectur"
          description="I am a Software Engineer with over 4 years of experience in building scalable enterprise applications, primarily in Salesforce and cloud-based environments. I’ve led automation, debugging, and system modernization efforts that directly improved performance and reduced operational overhead. I bring a strong mix of technical depth and business understanding to every project. I love solving real-world problems through clean code, smart architecture, and cross-team collaboration. "
        />

        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal>
            <div className="max-w-2xl">
              <h3
                id="about-heading"
                className="text-2xl font-bold text-ink-950 dark:text-white"
              >
                Bridging technical depth and business value
              </h3>
              <div className="mt-5 space-y-4 text-base leading-8 text-ink-950/70 dark:text-stone-300">
                <p>
                  I am a Software Engineer with over 4 years of experience
                  designing and optimizing scalable enterprise applications
                  across Salesforce and cloud-based environments. My expertise
                  lies at the intersection of technical depth and business
                  strategy, allowing me to build solutions that solve real-world
                  problems. My work focuses on modern frontend architecture,
                  accessible interaction patterns, and component systems that
                  help teams move faster without losing quality.
                </p>
                <p>
                  Throughout my career, I have led system modernization,
                  automation, and debugging initiatives that significantly
                  improve performance while reducing operational overhead. I
                  thrive on clean code, smart architecture, and close cross-team
                  collaboration. Whether restructuring a legacy system or
                  launching a new cloud feature, I focus on delivering
                  impactful, reliable technology that drives business value.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  href="/resume.pdf"
                  download
                  variant="secondary"
                  icon={<Download size={18} />}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.category} delay={index * 90}>
                <Card className="h-full p-5">
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-brand-700 dark:text-brand-100">
                      {group.level}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-ink-950 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm text-ink-950/75 dark:text-stone-300"
                      >
                        <span
                          className="h-2 w-2 rounded-full bg-ember-500"
                          aria-hidden="true"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
