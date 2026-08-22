"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Page() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.history.replaceState(null, "", window.location.pathname);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 transition-colors duration-300 selection:bg-[#3B82F6]/30 selection:text-white scroll-smooth">
      <Navbar />

      <main className="relative overflow-x-hidden bg-transparent">
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[180px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-[22rem] z-0 h-[24rem] w-[24rem] translate-x-1/4 rounded-full bg-[#06B6D4]/10 blur-[160px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-10 sm:gap-20">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}