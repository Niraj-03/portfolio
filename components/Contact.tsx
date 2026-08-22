"use client";

import { Mail, Send, Copy, Check, Linkedin, MapPin, Github, Instagram, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { siteConfig } from "@/app/lib/site-config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = siteConfig.email;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus("Copy failed. Please copy manually.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with a prefilled message.");
  };

  const inputClass = "w-full rounded-2xl border border-white/10 bg-[#020617]/70 px-5 py-4 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-[#3B82F6]/50 focus:bg-[#020617] focus:ring-4 focus:ring-[#3B82F6]/10";

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020617] px-6 py-24 text-slate-100 sm:px-8 lg:px-10">
      <motion.div animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-0 left-1/2 -z-10 h-[26rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#06B6D4]/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">Get in touch</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let&apos;s build something notable.</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-[2.25rem] border border-white/10 bg-[#0F172A]/80 p-8 shadow-[0_0_35px_rgba(2,6,23,0.4)] backdrop-blur-xl lg:p-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email address" className={inputClass} />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required placeholder="Tell me about your idea or project..." className={`${inputClass} resize-none`} />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-0.5 active:scale-95 sm:w-auto">
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <AnimatePresence>
                  {status ? (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-[#06B6D4]">
                      {status}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="h-full rounded-[2.25rem] border border-white/10 bg-[#0F172A]/80 p-10 shadow-[0_0_35px_rgba(2,6,23,0.4)] backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-semibold text-white">Connect with me</h3>
              <p className="mb-8 text-sm leading-7 text-slate-400">Open for product roles, frontend engineering work, AI integrations, and technical collaborations.</p>

              <button onClick={handleCopyEmail} className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 p-4 transition-all hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/5 p-2 transition-colors group-hover:bg-[#3B82F6]/10">
                    <Mail className="h-4 w-4 text-[#06B6D4]" />
                  </div>
                  <span className="text-sm font-mono text-slate-300 transition-colors group-hover:text-white">{emailAddress}</span>
                </div>
                {copied ? <Check className="h-4 w-4 text-[#22c55e]" /> : <Copy className="h-4 w-4 text-slate-500 transition-colors group-hover:text-[#06B6D4]" />}
              </button>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a href={siteConfig.social.github} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/70 p-4 text-sm font-medium text-slate-300 transition-all hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10 hover:text-white" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
                  GitHub
                </a>
                <a href={siteConfig.social.linkedin} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/70 p-4 text-sm font-medium text-slate-300 transition-all hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10 hover:text-white" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5 text-slate-500 transition-colors group-hover:text-[#0A66C2]" />
                  LinkedIn
                </a>
                <a href={siteConfig.social.instagram || "#"} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/70 p-4 text-sm font-medium text-slate-300 transition-all hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10 hover:text-white" target="_blank" rel="noreferrer">
                  <Instagram className="h-5 w-5 text-slate-500 transition-colors group-hover:text-[#E1306C]" />
                  Instagram
                </a>
                <a href={siteConfig.social.x || "#"} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/70 p-4 text-sm font-medium text-slate-300 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
                  X
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020617]/70 p-4">
                <div className="rounded-full bg-white/5 p-2">
                  <MapPin className="h-4 w-4 text-[#3B82F6]" />
                </div>
                <span className="text-sm text-slate-300">{siteConfig.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}