import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#020617] px-6 text-center text-slate-100">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
        The page you&apos;re looking for may have been moved or removed.
        Let&apos;s get you back to the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:shadow-[0_0_28px_rgba(6,182,212,0.2)]"
      >
        Back to home
      </Link>
    </div>
  );
}
