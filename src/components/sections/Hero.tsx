import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      {/* Subtle structural grid, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_30%,transparent_75%)]"
      />
      {/* Soft cyan/blue emphasis, low opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            AI Automation Engineer
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Issa Muiz
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Building AI-powered systems that automate repetitive work and improve
            business operations.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground/80">
            I help businesses solve practical problems — support overload, slow
            lead follow-up, manual paperwork — with AI, automation and connected
            software systems.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Work With Me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View My Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
