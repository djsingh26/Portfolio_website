import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  label: string;
  error?: string;
};

type TextInputProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const inputClass =
  'mt-2 w-full rounded-lg border border-ink-950/15 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition placeholder:text-ink-950/40 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/15 dark:border-white/15 dark:bg-white/10 dark:text-stone-50 dark:placeholder:text-stone-400';

export function TextInput({ label, error, id, ...props }: TextInputProps) {
  return (
    <label className="block text-sm font-semibold text-ink-950 dark:text-stone-100" htmlFor={id}>
      {label}
      <input aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} id={id} className={inputClass} {...props} />
      {error ? (
        <span id={`${id}-error`} className="mt-2 block text-sm font-medium text-red-600 dark:text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function TextArea({ label, error, id, ...props }: TextAreaProps) {
  return (
    <label className="block text-sm font-semibold text-ink-950 dark:text-stone-100" htmlFor={id}>
      {label}
      <textarea
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        id={id}
        className={`${inputClass} min-h-36 resize-y`}
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} className="mt-2 block text-sm font-medium text-red-600 dark:text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}
