import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Technology } from "@/components/sections/Technology";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Issa Muiz — AI Automation Engineer" },
      {
        name: "description",
        content:
          "AI Automation Engineer building AI-powered systems that automate repetitive work, improve customer operations, and help businesses work more efficiently.",
      },
      { property: "og:title", content: "Issa Muiz — AI Automation Engineer" },
      {
        property: "og:description",
        content:
          "Building AI-powered systems that automate repetitive work and improve business operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Issa Muiz — AI Automation Engineer" },
      {
        name: "twitter:description",
        content:
          "Building AI-powered systems that automate repetitive work and improve business operations.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Work />
        <Process />
        <About />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
