"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

const ASCII_PORTRAIT = `                              ..*.-....

                          .+##############.*##**

                        .########################*.

                       .############################

                      ##############################-

                    :#################################

                   ############*######################

                  ##########*:+*#+#:#**##:#############

                 +####*+++ ++ ++*:+++**+++:++*#########

                 #### ++:#*###+:+:+++:::+:+::*+########

                 +##  +::++++#####++###########*+:#####

                  ## :::::#############################

                  ##   :*:#+#####*  +#################

                  ##      :+***+    ++#########**#:##

                   *           :   :+:***:**++++:+##

                   -        :::::**##*:::::  +++:*#

                   ++++:::+++ +*++####*#++++:+*##*#

                    :++::+*+::::**+*+:#*:::######*

                    :+++::+#######################

                     +++++:##+++*:+***###########

                      :::+*:++:+################

                       ####+*+++++:::#########

                   .##*::#####*:::##############.

              .#######:+::*+########################.

         .############-:+:+:############################.

    .+##################*++::+################:#############.

 ###########################. :::**##############################.

#####################################################################

######################################################################`;

export function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-12 px-6 overflow-hidden bg-[#020617]"
    >
      {/* Background Ambience */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "linear-gradient(135deg, #010510 0%, #020a1f 20%, #06102e 35%, #1a1040 55%, #3d2060 75%, #7d4b7a 100%)",
        }}
      />

      {/* Subtle Accent Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-violet-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* TEXT CONTENT */}
          <div
            ref={revealRef}
            className="reveal flex-[1.4] text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tighter">
                Hi, I&apos;m <br />
                {/* 
                  FIXED CONTAINER:
                  Using inline-flex items-center ensures the cursor 
                  is vertically locked to the text line.
                */}
                <span className="inline-flex items-center whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-100 drop-shadow-[0_2px_15px_rgba(167,139,250,0.3)]">
                    Adi Ezakiel.
                  </span>
                  {/* 
                    THINNER WHITE CURSOR:
                    - w-[1px] md:w-[2px] for ultimate sharpness
                    - h-[0.75em] to match the cap-height of the font
                    - translate-y to optically nudge it onto the text floor
                  */}
                  <span className="inline-block w-[1px] md:w-[2px] h-[0.75em] bg-white ml-2 md:ml-3 animate-cursor-blink shadow-[0_0_10px_rgba(255,255,255,0.7)] translate-y-[0.05em]" />
                </span>
              </h1>

              <p className="text-xl md:text-3xl font-medium text-gray-200 leading-tight tracking-tight">
                I build the bridge between <br className="hidden md:block" />
                data and the dashboard.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2">
                Recent Information Technology graduate from Curtin Singapore
                with a passion for building functional software. I enjoy
                exploring the full development lifecycle, from managing data
                systems to crafting the interfaces users interact with.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <a
                href="#projects"
                className="group w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-violet-100 rounded-full font-bold transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
              >
                View Projects
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <div className="flex items-center gap-5 border-white/10 pl-0 sm:border-l sm:pl-6">
                <a
                  href="mailto:adi.ezakiel@gmail.com"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/adi-ezakiel"
                  target="_blank"
                  className="text-gray-500 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* IMAGE CONTENT */}
          {/*<div className="relative flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-[420px] md:h-[500px]">
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
              <div className="relative w-full h-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Adi Ezakiel"
                  fill
                  className="object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 90%, transparent 100%)",
                  }}
                  priority
                />
              </div>
            </div>
          </div>*/}
          {/* ── Right — ASCII portrait ───────────────────── */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative group w-full lg:w-1/2 mt-8 lg:mt-0">
            {/* Decorative glow - adjusted for mobile */}
            <div className="absolute inset-0 bg-violet-500/15 blur-[60px] lg:blur-[100px] rounded-full" />

            <pre
              aria-label="ASCII portrait"
              className="relative z-10 select-none pointer-events-none animate-hologram-pulse"
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                // 1. Slightly more compact size
                fontSize: "min(0.95vw, 5.8px)",
                // 2. Tighter line-height (1.1) removes the vertical "egg" stretch
                lineHeight: "1.1",
                // 3. Wider spacing (2.4px) makes the grid look more "digital"
                letterSpacing: "2.4px",
                fontWeight: "900",

                // 4. Use a brighter "core" color (light lavender)
                // This makes the dots look like actual points of light #e0e7ff
                color: "#c4b5fd",

                // 5. The "Violet Aura"
                // The first shadow is a sharp violet, the second is a soft indigo bloom
                textShadow: `
      0 0 4px rgba(167, 139, 250, 0.7),
      0 0 12px rgba(129, 140, 248, 0.3)
    `,

                whiteSpace: "pre",
                opacity: 0.8,

                // 6. Smoother fade-out
                maskImage:
                  "linear-gradient(to bottom, black 60%, transparent 95%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 60%, transparent 95%)",
              }}
            >
              {ASCII_PORTRAIT}
            </pre>
          </div>
        </div>
      </div>

      {/* CSS FOR THE ANIMATION */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-cursor-blink {
          animation: blink 1.2s step-end infinite;
        }
        @keyframes hologram {
          0%,
          100% {
            opacity: 0.8;
            filter: brightness(1);
          }
          50% {
            opacity: 0.9;
            filter: brightness(1.2);
          }
        }

        .animate-hologram-pulse {
          animation: hologram 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
