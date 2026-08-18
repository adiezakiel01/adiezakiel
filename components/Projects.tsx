"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ProjectStatus = "completed" | "in-progress";

interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  tagColor: string;
  github?: string;
  demo?: string;
  preview: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Coffee Brew Tracker & AI Assistant",
    status: "in-progress",
    description:
      "A personal full-stack tool designed for tracking and analysing pour-over coffee brews. Logs parameters like grind size and water temperature, featuring a local AI assistant to suggest adjustments for the next cup.",
    tags: ["FastAPI", "Next.js 14", "TypeScript", "LangChain", "Ollama"],
    tagColor: "bg-violet-900/50 text-violet-300 border-violet-700/30",
    github: "https://github.com/adiezakiel01/coffee",
    demo: "https://coffee-navy-pi.vercel.app/",
    preview: (
      <Image
        src="/images/brew_app.png"
        alt="Coffee Brew Tracker screenshot"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "E-Commerce AI Analytics Platform",
    status: "completed",
    description:
      "Full-stack AI analytics for e-commerce. Features a real-time dashboard and an AI chat assistant that converts natural language to SQL queries using a local LLM.",
    tags: ["FastAPI", "PostgreSQL", "Prophet", "Docker"],
    tagColor: "bg-violet-900/50 text-violet-300 border-violet-700/30",
    github: "https://github.com/adiezakiel01/ecommerce",
    preview: (
      <Image
        src="/images/ecom.png"
        alt="E-Commerce AI Analytics Platform screenshot"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Business Intelligence Dashboard",
    status: "completed",
    description:
      "A comprehensive BI dashboard built as a university capstone project. Features interactive data visualisations, user authentication, and real-time analytics deployed on AWS.",
    tags: ["Django", "MySQL", "AWS RDS", "AWS S3"],
    tagColor: "bg-gray-800 text-gray-300 border-gray-700",
    preview: (
      <Image
        src="/images/iora_dashboard.png"
        alt="Business Intelligence Dashboard screenshot"
        fill
        className="object-cover object-top"
      />
    ),
  },
];

const statusConfig = {
  completed: {
    dot: "bg-green-400",
    text: "text-green-400",
    label: "Completed",
  },
  "in-progress": {
    dot: "bg-amber-400 animate-pulse",
    text: "text-amber-400",
    label: "In progress",
  },
};

export function Projects() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal(100);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0A0820]">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="reveal mb-10">
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-white">
            What I&apos;ve built
          </h2>
        </div>

        <div ref={cardsRef} className="reveal">
          <div
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {projects.map((project) => {
              const status = statusConfig[project.status];
              return (
                <div
                  key={project.title}
                  className="flex-shrink-0 w-80 rounded-2xl border border-white/10
                             hover:border-violet-500/40 transition-all duration-300 group
                             overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(13,13,26,0.95) 0%, rgba(31,21,53,0.95) 100%)",
                    scrollSnapAlign: "start",
                  }}
                >
                  {/* Screenshot preview */}
                  <div className="relative h-44 overflow-hidden">
                    {project.preview}

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 bg-black/60 flex items-center
                                    justify-center gap-3 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-200"
                    >
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="flex items-center gap-1.5 px-4 py-2 bg-violet-600
                                     hover:bg-violet-500 text-white rounded-lg text-xs
                                     font-medium transition-colors"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Visit
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-1.5 px-4 py-2 bg-white/10
                                     hover:bg-white/20 text-white rounded-lg text-xs
                                     font-medium transition-colors border border-white/20"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                      <span className={`text-xs font-medium ${status.text}`}>
                        {status.label}
                      </span>
                    </div>

                    <h3
                      className="text-base font-semibold text-white mb-2
                                   group-hover:text-violet-300 transition-colors leading-snug"
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs
                                      font-medium border ${project.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll hint */}
          <p className="text-xs text-gray-600 mt-3 flex items-center gap-1.5">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            Scroll to see more projects
          </p>
        </div>
      </div>
    </section>
  );
}
