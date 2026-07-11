"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type ProjectStatus = "completed" | "in-progress";

interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  tags: string[];
  tagColor: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Coffee Brew Tracker & AI Assistant",
    status: "in-progress",
    description:
      "A personal full-stack tool designed for tracking and analysing pour-over coffee brews. Logs brew parameters — grind size, water temperature, coffee-to-water ratio, and brew time — alongside taste ratings and tasting notes. Features a local AI 'Brew Assistant' to suggest adjustments for the next cup.",
    highlights: [
      "Local AI Inference — Integrated LangChain & Ollama (Gemma3) for privacy-conscious brew optimization based on historical taste profiles.",
      "Asynchronous Backend — Built with FastAPI & SQLAlchemy Async for non-blocking database operations and high-concurrency performance.",
      "Data-Driven Insights — Real-time visualization of parameter correlations (grind size vs. rating) using Recharts and Next.js Server Components.",
    ],
    tags: [
      "FastAPI",
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "LangChain",
      "Ollama",
      "Docker",
      "Tailwind",
    ],
    tagColor: "bg-amber-900/30 text-amber-300 border-amber-700/30",
    github: "https://github.com/adiezakiel01/coffee",
    demo: "https://coffee-navy-pi.vercel.app/",
  },
  {
    title: "E-Commerce AI Analytics Platform",
    status: "completed",
    description:
      "A full-stack AI-powered analytics platform for e-commerce businesses. Features a real-time dashboard with KPI cards and revenue charts, an AI chat assistant that converts natural language to SQL queries using a local LLM, and a Prophet-powered 30-day revenue forecasting engine with confidence intervals.",
    highlights: [
      "AI chat assistant — natural language to SQL via LangChain + Ollama",
      "Prophet forecasting with 80% confidence intervals",
      "Async FastAPI backend with SQLAlchemy + PostgreSQL",
      "Next.js 14 dashboard with Recharts visualisations",
    ],
    tags: [
      "FastAPI",
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "LangChain",
      "Ollama",
      "Prophet",
      "Docker",
    ],
    tagColor: "bg-violet-900/50 text-violet-300 border-violet-700/30",
    github: "https://github.com/adiezakiel01/ecommerce",
  },
  {
    title: "Business Intelligence Dashboard (Capstone)",
    status: "completed",
    description:
      "A comprehensive BI dashboard system built as my university capstone project. Features interactive data visualisations, user authentication, and real-time analytics. Deployed on AWS with RDS for the database and S3 for static assets.",
    highlights: [
      "Interactive dashboards with Chart.js visualisations",
      "User authentication and role-based access",
      "Deployed on AWS RDS + S3 + SES",
    ],
    tags: ["Django", "MySQL", "AWS RDS", "AWS S3", "AWS SES", "HTML/CSS/JS"],
    tagColor: "bg-gray-800 text-gray-300 border-gray-700",
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
  const ref1 = useScrollReveal(0);
  const ref2 = useScrollReveal(150);
  const ref3 = useScrollReveal(200);

  const projectRefs = [ref1, ref2, ref3];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="reveal">
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">
            What I&apos;ve built
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            return (
              <div
                key={project.title}
                ref={projectRefs[index]}
                className="reveal rounded-2xl border border-white/10 p-6
                           hover:border-violet-500/40 transition-all duration-300 group"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,13,26,0.95) 0%, rgba(31,21,53,0.95) 100%)",
                }}
              >
                {/* Header Container */}
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  {/* Left Side: Status and Title */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                      <span className={`text-xs font-medium ${status.text}`}>
                        {status.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Right Side: Links */}
                  <div className="flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-violet-400 hover:text-violet-300 transition-colors
                          flex items-center gap-1.5 border border-violet-500/30
                          px-2.5 py-1 rounded-lg hover:border-violet-400/60"
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
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-violet-300 transition-colors
                        flex items-center gap-1.5"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-gray-500"
                    >
                      <span className="text-violet-400 mt-0.5">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
