"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight, GraduationCap } from "lucide-react";

const experienceData = [
  {
    role: "Python Intern",
    company: "BrainyBeam Technologies",
    period: "2026",
    location: "Internship",
    icon: Briefcase,
    description: "Contributed to backend development using Python with a focus on maintainable service logic and reliable architecture.",
    accent: "from-[#3B82F6]/20 to-[#06B6D4]/10",
    hover: "hover:border-[#3B82F6]/40",
  },
  {
    role: "MCA in Artificial Intelligence",
    company: "Parul University",
    period: "2024 - 2026",
    location: "Vadodara, Gujarat",
    icon: GraduationCap,
    description: "Built AI-assisted applications including a RAG-driven chatbot and an expense intelligence product in collaborative projects.",
    accent: "from-[#06B6D4]/20 to-[#3B82F6]/10",
    hover: "hover:border-[#06B6D4]/40",
  },
  {
    role: "B.Sc. in Computer Science",
    company: "Mumbai University",
    period: "Graduated",
    location: "Maharashtra",
    icon: GraduationCap,
    description: "Built a strong foundation in software engineering, databases, and web development through hands-on academic work.",
    accent: "from-[#3B82F6]/20 to-[#06B6D4]/10",
    hover: "hover:border-[#3B82F6]/40",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#020617] py-24 text-slate-100">
      <div className="absolute right-1/4 top-0 h-[20rem] w-[20rem] rounded-full bg-[#3B82F6]/8 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[16rem] w-[16rem] rounded-full bg-[#06B6D4]/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">My journey</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Career timeline.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 md:flex">
            Swipe through
            <ArrowRight className="h-4 w-4 text-[#3B82F6]" />
          </motion.div>
        </div>

        <div className="relative -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="flex gap-6 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory">
            {experienceData.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div key={experience.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="w-[85vw] shrink-0 snap-center sm:w-[390px] sm:snap-start">
                  <div className={`group relative h-full rounded-[2rem] border border-white/10 bg-[#0F172A]/80 p-8 backdrop-blur-md transition-all duration-300 ${experience.hover}`}>
                    <div className={`absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br ${experience.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="flex h-full flex-col gap-6">
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 ring-1 ring-white/10">
                          <Calendar className="h-3 w-3 text-[#06B6D4]" />
                          {experience.period}
                        </span>
                        <div className="rounded-xl bg-white/5 p-2">
                          <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          <span className="text-white">{experience.company}</span>
                          <span className="h-1 w-1 rounded-full bg-[#3B82F6]" />
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-400 transition-colors group-hover:text-slate-300">{experience.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            <div className="w-[5vw] shrink-0 sm:w-[2vw]" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:hidden">
          Swipe <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </section>
  );
}