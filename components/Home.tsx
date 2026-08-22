"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Niraj Vishwakarma standing on a hilltop overlooking a forested valley"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_center] sm:object-center"
        />

        {/* Simple overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Soft gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          

          {/* Name */}
          <h1 className="whitespace-nowrap text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            Niraj Vishwakarma
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            I build thoughtful digital products and AI-powered applications
            with a focus on clean design, useful technology, and great user
            experiences.
          </p>

          {/* CTA */}
          <div className="mt-9">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border-b border-white/50 pb-1.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Explore my work
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-4 w-4 text-white/40" />
      </motion.a>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-white/10 sm:left-8 sm:right-8 lg:left-10 lg:right-10" />
    </section>
  );
}