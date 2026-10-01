import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { EMAIL_ADDRESS, EMAIL_URL, GITHUB_PROFILE_URL, LINKEDIN_URL } from "@/lib/links";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[640px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Have a repetitive business process that could be automated?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell me about the work that's slowing your business down. I'll help
            you figure out whether — and how — AI and automation can take it off
            your team's plate.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10">
            <a
              href={EMAIL_URL}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <ul className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <li>
              <a
                href={EMAIL_URL}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {EMAIL_ADDRESS}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
                Issa Muiz
              </a>
            </li>
            <li>
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4 text-primary" aria-hidden="true" />
                IssaMuiz
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
