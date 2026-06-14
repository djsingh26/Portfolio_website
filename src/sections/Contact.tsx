import { CheckCircle2, Send, XCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TextArea, TextInput } from "../components/ui/TextField";
import { socialLinks } from "../data/portfolio";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 4) {
    errors.subject = "Please add a short subject.";
  }

  if (values.message.trim().length < 12) {
    errors.message = "Please write a message with at least 12 characters.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Thanks, your message is ready to send.";
    }

    if (status === "error") {
      return "Please fix the highlighted fields and try again.";
    }

    return "";
  }, [status]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-ink-900"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something thoughtful."
          description="Have a role, project, or collaboration in mind? Send a note and I will get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-ink-950 dark:text-white">
                  Find me online
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-ink-950/70 dark:text-stone-300">
                  I’m available for Salesforce engineering, product UI builds,
                  and component system work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-ink-950/15 px-4 py-2 text-sm font-semibold text-ink-950/75 transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:text-stone-300 dark:hover:border-brand-100 dark:hover:text-brand-100"
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="p-5 sm:p-6">
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextInput
                    id="name"
                    label="Name"
                    value={values.name}
                    onChange={(event) =>
                      updateValue("name", event.target.value)
                    }
                    error={errors.name}
                    autoComplete="name"
                    placeholder="Your name"
                  />
                  <TextInput
                    id="email"
                    label="Email"
                    value={values.email}
                    onChange={(event) =>
                      updateValue("email", event.target.value)
                    }
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                  />
                </div>
                <TextInput
                  id="subject"
                  label="Subject"
                  value={values.subject}
                  onChange={(event) =>
                    updateValue("subject", event.target.value)
                  }
                  error={errors.subject}
                  placeholder="Project inquiry"
                />
                <TextArea
                  id="message"
                  label="Message"
                  value={values.message}
                  onChange={(event) =>
                    updateValue("message", event.target.value)
                  }
                  error={errors.message}
                  placeholder="Tell me what you are building."
                />

                {statusMessage ? (
                  <div
                    className={`flex items-center gap-3 rounded-lg border p-4 text-sm font-semibold ${
                      status === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200"
                        : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-200"
                    }`}
                    role={status === "error" ? "alert" : "status"}
                    aria-live="polite"
                  >
                    {status === "success" ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <XCircle size={18} />
                    )}
                    {statusMessage}
                  </div>
                ) : null}

                <Button type="submit" icon={<Send size={18} />}>
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
