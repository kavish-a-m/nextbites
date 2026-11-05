import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-6 py-16">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">404 — Recipe not found</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">That bite is not on the menu.</h1>
      <p className="mt-5 max-w-lg text-lg leading-8 text-stone-600">The recipe you are looking for may have moved, or it was never in our kitchen.</p>
      <Link href="/" className="mt-8 rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700">
        Browse all recipes
      </Link>
    </main>
  );
}
