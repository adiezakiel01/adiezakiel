"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { on } from "events";

const links = [
  {
    label: "adi.ezakiel@gmail.com",
    href: "mailto:adi.ezakiel@gmail.com",
    primary: true,
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/adiezakiel01",
    primary: false,
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adi-ezakiel-izuan",
    primary: false,
    icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
    ),
  },
  ];
  
  export function Contact() {
    const headingRef = useScrollReveal();
    const contentRef = useScrollReveal(100);

    return (
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={headingRef} className="reveal">
            <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s work together</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-10">
              I&apos;m actively looking for full-stack and AI engineering roles at startups.
              If you&apos;re building something interesting, I&apos;d love to hear about it.
            </p>
          </div>
  
          <div ref={contentRef} className="reveal flex flex-wrap gap-4 justify-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm
                            font-medium transition-all hover:-translate-y-0.5 ${
                  link.primary
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/50"
                    : "border border-white/20 hover:border-violet-400 text-white hover:bg-white/5"
                }`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }