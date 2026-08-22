"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const allSections = ["home", ...navLinks.map((link) => link.id), "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (scrollY < 100) {
            setActive("home");
            ticking = false;
            return;
          }

          for (const id of allSections) {
            const element = document.getElementById(id);
            if (!element) continue;
            const top = element.offsetTop - 180;
            const height = element.offsetHeight;
            if (scrollY >= top && scrollY < top + height) {
              setActive(id);
              break;
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] w-[95%] max-w-fit -translate-x-1/2 sm:w-auto">
      <nav aria-label="Primary" className="flex items-center gap-1 rounded-[2rem] border border-white/10 bg-[#0F172A]/85 p-2 shadow-[0_10px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:gap-2">
        <a href="#home" aria-current={active === "home" ? "page" : undefined} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold transition-colors ${active === "home" ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]" : "bg-white/10 text-white hover:bg-white/20"}`} aria-label="Go to home section">
          N
        </a>

        <div className="mx-1 h-6 w-px shrink-0 bg-white/10" aria-hidden="true" />

        <div className="no-scrollbar flex items-center gap-1 overflow-x-auto scroll-smooth">
          {navLinks.map((item) => {
            const isActive = active === item.id;
            return (
              <a key={item.id} href={`#${item.id}`} aria-current={isActive ? "page" : undefined} className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors sm:text-[11px] ${isActive ? "text-[#020617]" : "text-slate-400 hover:text-white"}`}>
                {isActive && <motion.div layoutId="activePill" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]" transition={{ type: "spring", stiffness: 300, damping: 25 }} />}
                <span className="relative z-20">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="mx-1 h-6 w-px shrink-0 bg-white/10" aria-hidden="true" />

        <a href="#contact" aria-current={active === "contact" ? "page" : undefined} className={`group flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all sm:text-sm ${active === "contact" ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white" : "bg-white/10 text-white hover:bg-[#3B82F6]/20"}`}>
          Contact
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </nav>
    </div>
  );
}