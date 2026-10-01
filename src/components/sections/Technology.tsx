import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const GROUPS = [
  {
    label: "Automation & Integration",
    tools: ["n8n", "Webhooks", "REST APIs"],
  },
  {
    label: "Backend & Data",
    tools: ["Supabase", "SQL", "Python", "FastAPI"],
  },
  {
    label: "AI",
    tools: ["AI APIs"],
  },
  {
    label: "Frontend & Tooling",
    tools: ["JavaScript", "Lovable", "Streamlit", "Docker", "Git & GitHub"],
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="scroll-mt-20 border-y border-border bg-card/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Tools that support the solution"
          description="Technology is a means to an end — I choose the tools that fit the business problem, not the other way around."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 100}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
