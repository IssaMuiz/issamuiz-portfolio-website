import { MessagesSquare, Target, FileText, Settings2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    icon: MessagesSquare,
    title: "AI Customer Support",
    description:
      "Automate repetitive customer enquiries using your business knowledge, while routing cases that require human intervention to the right person.",
  },
  {
    icon: Target,
    title: "AI Lead & Sales Automation",
    description:
      "Capture, qualify, route and follow up with leads through automated workflows, so no opportunity goes cold because someone forgot to reply.",
  },
  {
    icon: FileText,
    title: "AI Document Processing",
    description:
      "Extract, structure and process useful information from business documents — turning unstructured paperwork into data your systems can use.",
  },
  {
    icon: Settings2,
    title: "Business Process Automation",
    description:
      "Transform repetitive manual business processes into connected automated systems that run reliably in the background.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-y border-border bg-card/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="AI-powered systems built around your business"
          description="Every engagement starts with the business problem, not the technology. I design and build systems that automate real work and plug into the tools you already use."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 100}>
              <article className="group relative h-full rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/40">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 font-display text-4xl font-bold text-foreground/5 transition-colors group-hover:text-primary/10"
                >
                  0{i + 1}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
