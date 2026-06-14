type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
};

export function SectionHeading({ eyebrow, title, description, titleId }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase text-brand-700 dark:text-brand-100">{eyebrow}</p>
      <h2 id={titleId} className="text-3xl font-bold leading-tight text-ink-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink-950/70 dark:text-stone-300">{description}</p>
      ) : null}
    </div>
  );
}
