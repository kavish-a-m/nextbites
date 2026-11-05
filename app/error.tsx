"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-6 py-16">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Something went wrong</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">Our kitchen needs a moment.</h1>
      <p className="mt-5 max-w-lg text-lg leading-8 text-stone-600">{error.digest ? "We logged the issue and " : ""}Please try loading this page again. Your recipes will be waiting for you.</p>
      <button type="button" onClick={reset} className="mt-8 rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700">
        Try again
      </button>
    </main>
  );
}
