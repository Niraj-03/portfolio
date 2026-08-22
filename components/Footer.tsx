"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/app/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Niraj<span className="text-[#06B6D4]">.</span></h2>
          <p className="mt-1 text-sm text-slate-400">Designing thoughtful software with a focus on clarity and performance.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0F172A]/70 px-3 py-2 text-sm text-slate-300 transition-all hover:border-[#3B82F6]/40 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0F172A]/70 px-3 py-2 text-sm text-slate-300 transition-all hover:border-[#3B82F6]/40 hover:text-white">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0F172A]/70 px-3 py-2 text-sm text-slate-300 transition-all hover:border-[#3B82F6]/40 hover:text-white">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Niraj Vishwakarma. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white">
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}