import { Headset, PhoneMissed, Files, RefreshCcw } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const PROBLEMS = [
  {
    icon: Headset,
    title: "Customer Support Overload",
    description:
      "Your team spends most of the day answering the same questions over and over. Response times slip, customers wait, and staff time is spent on repetitive enquiries instead of work that actually needs a human.",
  },
  {
    icon: PhoneMissed,
    title: "Poor Lead Follow-up",
    description:
      "Leads come in from different channels and sit untouched for hours or days. By the time someone follows up, the prospect has gone cold — or gone to a competitor who responded first.",
  },
  {
    icon: Files,
    title: "Manual Document Processing",
    description:
      "Invoices, forms, reports and emails are read, retyped and filed by hand. It is slow, error-prone, and it pulls your team away from decisions that actually move the business forward.",
  },
  {
    icon: RefreshCcw,
    title: "Repetitive Business Operations",
    description:
      "Copying data between tools, updating spreadsheets, sending reminders, compiling reports — small manual tasks that quietly consume hours every week across the whole business.",
  },
];

export function Problems() {
  return (
    <section id="problems" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems I Solve"
          title="The operational problems that quietly cost businesses time and money"
          description="Most businesses don't need more software — they need their existing work to run itself. These are the problems I build AI-powered systems to fix."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROBLEMS.map((problem, i) => (
            <Reveal as="li" key={problem.title} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                  <problem.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
