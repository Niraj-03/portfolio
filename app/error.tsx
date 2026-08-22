"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console for now; wire up an error-reporting
    // service (e.g. Sentry) here for production monitoring.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#020617] px-6 text-center text-slate-100">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#06B6D4]">
        Error
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Something went wrong.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
        An unexpected error occurred while loading this page. You can try
        again, or head back to the homepage.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:shadow-[0_0_28px_rgba(6,182,212,0.2)]"
      >
        Try again
      </button>
    </div>
  );
}
