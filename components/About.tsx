"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="rounded-[2.25rem] border border-[#1E293B] bg-[#0F172A]/80 p-8 shadow-[0_0_50px_rgba(2,6,23,0.4)] backdrop-blur-xl md:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-5 lg:col-span-4">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#1E293B] bg-[#020617] shadow-[0_0_30px_rgba(59,130,246,0.18)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
              <Image
                src="/profile.jpg"
                alt="Portrait of Niraj Vishwakarma"
                fill
                sizes="(min-width: 768px) 33vw, 90vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-[#020617]/70 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                Based in Gujarat, India
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8 md:col-span-7 lg:col-span-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">About me</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Building thoughtful products with a developer’s eye for detail.</h2>
            </div>

            <div className="max-w-2xl space-y-5 text-lg leading-8 text-slate-300">
              <p>
                I’m a full-stack developer focused on building dependable, high-performing web applications with a strong foundation in Python, Django, React, and Next.js.
              </p>
              <p>
                My work blends modern product design with practical engineering, from AI-assisted chat experiences and RAG systems to clean dashboards and scalable APIs.
              </p>
              <p>
                I’m an MCA graduate specializing in Artificial Intelligence, and I enjoy translating complex ideas into products people can use with ease.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:shadow-[0_0_28px_rgba(6,182,212,0.2)]">
                Let&apos;s work together
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#020617]/70 px-4 py-2 text-sm text-slate-300">
                <Sparkles className="h-4 w-4 text-[#06B6D4]" />
                Product-minded engineer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}