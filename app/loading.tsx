export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20" aria-busy="true" aria-live="polite">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">NextBites</p>
      <div className="mt-4 h-12 max-w-xl animate-pulse rounded-xl bg-orange-100" />
      <p className="mt-6 text-stone-600">Loading delicious recipes…</p>
    </main>
  );
}
