import { Github, ExternalLink, FileText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GITHUB_PROFILE_URL } from "@/lib/links";

interface Project {
  title: string;
  description: string;
  status: "In Development" | "Completed";
  tags: string[];
  caseStudy: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "AI Customer Support System",
    description:
      "An AI support assistant grounded in business knowledge that answers repetitive customer enquiries automatically and routes complex cases to a human.",
    status: "In Development",
    tags: ["AI APIs", "n8n", "REST APIs"],
    caseStudy: false,
  },
  {
    title: "Poultry Flock Health Triage System",
    description:
      "A computer vision application for classifying poultry health conditions from images, supporting faster triage decisions.",
    status: "Completed",
    tags: ["Python", "Computer Vision", "Machine Learning"],
    caseStudy: false,
  },
  {
    title: "Sentiment Analysis API",
    description:
      "An NLP system for classifying text sentiment through an API, built to plug into other applications and workflows.",
    status: "Completed",
    tags: ["Python", "NLP", "FastAPI"],
    caseStudy: false,
  },
  {
    title: "Inventory Intelligence",
    description:
      "A data-driven project focused on extracting useful insights from inventory and retail data.",
    status: "Completed",
    tags: ["Python", "SQL", "Data Analysis"],
    caseStudy: false,
  },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Systems and applications I've built"
          description="A selection of projects spanning AI systems, computer vision, NLP and data analysis. Case studies and live demos will be added here."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal as="li" key={project.title} delay={(i % 2) * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/40">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span
                    className={
                      project.status === "In Development"
                        ? "shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                        : "shrink-0 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    }
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  <a
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                  <span
                    className="inline-flex cursor-default items-center gap-1.5 text-sm text-muted-foreground/50"
                    title="Demo coming soon"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Demo soon
                  </span>
                  <span
                    className="inline-flex cursor-default items-center gap-1.5 text-sm text-muted-foreground/50"
                    title="Case study coming soon"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Case study soon
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
