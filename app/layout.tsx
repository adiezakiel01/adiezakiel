import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adi Ezakiel | Full-Stack & AI Engineer",
  description:
    "Full-Stack & AI Engineer based in Singapore. Building AI-powered web applications with FastAPI, Next.js, and local LLMs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#020b18] text-gray-100 antialiased`}
      >
        <Navbar />
        {children}
        <footer className="py-8 px-6 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © 2026 Adi Ezakiel · Built with Next.js 14, TypeScript & Tailwind
            CSS
          </p>
        </footer>
      </body>
    </html>
  );
}

