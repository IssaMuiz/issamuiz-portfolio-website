import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    title: "Understand the business process",
    description:
      "I start by learning how the work actually happens — the tools involved, the people involved, and where time is being lost.",
  },
  {
    title: "Identify automation opportunities",
    description:
      "Together we pinpoint which steps are repetitive, rule-based and high-volume — the ones automation will pay off on first.",
  },
  {
    title: "Design the solution",
    description:
      "I design the system architecture: workflows, AI components, integrations and the human hand-off points.",
  },
  {
    title: "Build and integrate",
    description:
      "I build the system and connect it to your existing tools and data, so it fits into the business rather than disrupting it.",
  },
  {
    title: "Test and validate",
    description:
      "Every system is tested against real scenarios and measured against the problem it was built to solve before going live.",
  },
  {
    title: "Deploy and improve",
    description:
      "After launch I monitor performance and keep improving the system as the business and its data evolve.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-border bg-card/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I Work"
          title="A clear, practical process from problem to working system"
          description="No black boxes. You always know what is being built, why, and what it will do for your business."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 100}>
              <article className="relative h-full rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/40">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary"
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
