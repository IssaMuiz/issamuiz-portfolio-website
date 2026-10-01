import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="About" title="Issa Muiz" />
          </div>
          <Reveal className="lg:col-span-3" delay={150}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm an <span className="font-medium text-foreground">AI Automation Engineer</span>{" "}
                with a background in building machine learning and AI applications.
                Today my focus is practical: applying AI and automation to real
                business problems.
              </p>
              <p>
                I've built systems across computer vision, natural language
                processing and data analysis — and I've seen how much of a
                business's day is spent on repetitive, rule-based work. That gap
                between what AI can do and what businesses actually use it for is
                where I work.
              </p>
              <p>
                My approach is simple: understand the process first, then design
                and build a system that removes the repetitive work — one that
                your team can trust and that keeps working as the business grows.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
