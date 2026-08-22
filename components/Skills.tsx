"use client";

import { motion } from "framer-motion";
import { Layout, Server, Cpu, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend & UI",
    icon: Layout,
    description: "Crafting polished and responsive product interfaces.",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    accent: "from-[#3B82F6]/20 to-[#06B6D4]/10",
    hover: "hover:border-[#3B82F6]/40",
  },
  {
    title: "Backend & Logic",
    icon: Server,
    description: "Building reliable APIs and scalable application architecture.",
    items: ["Python", "Django", "Flask", "REST APIs"],
    accent: "from-[#06B6D4]/20 to-[#3B82F6]/10",
    hover: "hover:border-[#06B6D4]/40",
  },
  {
    title: "AI & Data Systems",
    icon: Cpu,
    description: "Designing AI workflows and retrieval-based experiences.",
    items: ["Gemini API", "RAG Systems", "Scikit-learn", "SQL"],
    accent: "from-[#3B82F6]/20 to-[#06B6D4]/10",
    hover: "hover:border-[#3B82F6]/40",
  },
  {
    title: "Tools & Delivery",
    icon: Wrench,
    description: "Shipping cleanly with modern tooling and deployment habits.",
    items: ["Git", "Vercel", "Postman", "Linux"],
    accent: "from-[#06B6D4]/20 to-[#3B82F6]/10",
    hover: "hover:border-[#06B6D4]/40",
  },
];

const marqueeTech = ["Python", "Django", "React.js", "Next.js", "Tailwind CSS", "Gemini API", "RAG Systems", "Flask", "JavaScript", "SQL", "HTML", "CSS", "Git", "Framer Motion"];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#020617] py-24 text-slate-100">
      <div className="absolute left-0 top-1/3 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-[#3B82F6]/8 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-[#06B6D4]/8 blur-[140px]" />

      <div className="relative z-10 mb-20 flex w-full flex-col items-center justify-center overflow-hidden border-y border-white/10 bg-[#0F172A]/60 py-4 backdrop-blur-sm">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} className="flex w-max items-center whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((tech, index) => (
            <span key={`${tech}-${index}`} className="flex items-center text-xl font-black italic tracking-[0.3em] text-white/20 sm:text-2xl">
              <span className="mx-4 text-[#06B6D4]">—</span>
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">Technical stack</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Skills shaped for modern product delivery.</h2>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`group relative rounded-[2rem] border border-white/10 bg-gradient-to-br ${group.accent} p-8 backdrop-blur-md transition-all duration-300 ${group.hover} bg-[#0F172A]/80`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-xl border border-white/10 bg-[#020617]/70 p-2">
                        <Icon className="h-5 w-5 text-[#06B6D4]" />
                      </div>
                      <h3 className="text-xl font-semibold uppercase tracking-[0.18em] text-white">{group.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">{group.description}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <motion.div key={item} whileHover={{ scale: 1.03, y: -2 }} className="cursor-default rounded-xl border border-white/10 bg-[#020617]/70 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-[#3B82F6]/40 hover:text-white">
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}