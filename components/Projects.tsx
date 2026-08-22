"use client";

import { ArrowRight, ExternalLink, GitBranch, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    title: "ChatFlow",
    description: "An AI-powered assistant layered with a retrieval pipeline for grounded conversations and rich context handling.",
    tags: ["Python", "Gemini API", "RAG"],
    demo: "https://github.com/",
    repo: "https://github.com/",
    glow: "from-[#3B82F6]/20",
  },
  {
    title: "FinSight",
    description: "A full-stack expense intelligence app with clear dashboards and a focused, modern interface for everyday use.",
    tags: ["Django", "Python", "Tailwind CSS"],
    demo: "https://github.com/",
    repo: "https://github.com/",
    glow: "from-[#06B6D4]/20",
  },
  {
    title: "AI Resume Screener",
    description: "A screening workflow that automates candidate evaluation using machine learning and structured parsing.",
    tags: ["Flask", "Scikit-Learn", "ML"],
    demo: "https://github.com/",
    repo: "https://github.com/",
    glow: "from-[#3B82F6]/20",
  },
  {
    title: "Jarvis Voice AI",
    description: "A desktop voice assistant built to automate common tasks and simplify hands-free interaction.",
    tags: ["Python", "Automation", "Speech AI"],
    demo: "https://github.com/",
    repo: "https://github.com/",
    glow: "from-[#06B6D4]/20",
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(
    () => projectsData.filter((project) => [project.title, project.description, ...project.tags].join(" ").toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <section id="projects" className="relative bg-[#020617] px-6 py-24 text-slate-100 sm:px-8 lg:px-10">
      <div className="absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#3B82F6]/8 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">Portfolio</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Selected projects.</h2>
          </motion.div>

          <div className="group relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-[#06B6D4]" />
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by tech or name..." className="w-full rounded-2xl border border-white/10 bg-[#0F172A]/80 py-4 pl-12 pr-4 text-sm text-slate-100 outline-none backdrop-blur-md transition-all focus:border-[#3B82F6]/50 focus:ring-4 focus:ring-[#3B82F6]/10" />
          </div>
        </div>

        <motion.div layout className="grid gap-8 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article key={project.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="group relative flex flex-col overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0F172A]/70 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#3B82F6]/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)]">
                <div className="relative h-64 overflow-hidden p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#020617]/80 p-8">
                    <div className="flex items-start justify-between">
                      <span className="rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
                        {project.tags[0]}
                      </span>
                      <ExternalLink className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-3xl font-semibold text-white">{project.title}</h3>
                      <p className="line-clamp-2 text-sm leading-7 text-slate-400">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="z-10 flex flex-1 flex-col justify-between p-8 pt-2">
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all group-hover:border-[#3B82F6]/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.demo} className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 active:scale-95" target="_blank" rel="noreferrer">
                      View project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href={project.repo} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3.5 text-slate-300 transition-all hover:border-[#3B82F6]/30 hover:text-white" target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                      <GitBranch className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}