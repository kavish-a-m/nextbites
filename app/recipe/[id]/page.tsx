import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <Link href="/" className="text-sm font-bold text-orange-700 hover:text-orange-900">← All recipes</Link>
      <article className="mt-8">
        <header className="rounded-3xl bg-orange-50 p-8 sm:p-12">
          <span className="text-6xl" aria-hidden="true">{recipe.emoji}</span>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-700">{recipe.cuisine}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-950 sm:text-6xl">{recipe.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">{recipe.description}</p>
          <div className="mt-7 flex gap-3 text-sm font-bold text-stone-700"><span className="rounded-full bg-white px-4 py-2">◷ {recipe.minutes} minutes</span><span className="rounded-full bg-white px-4 py-2">{recipe.difficulty}</span></div>
        </header>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <section><h2 className="text-2xl font-bold tracking-tight">Ingredients</h2><ul className="mt-5 space-y-3 text-stone-700">{recipe.ingredients.map((ingredient) => <li key={ingredient} className="flex gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />{ingredient}</li>)}</ul></section>
          <section><h2 className="text-2xl font-bold tracking-tight">Steps</h2><ol className="mt-5 space-y-5 text-stone-700">{recipe.steps.map((step, index) => <li key={step} className="flex gap-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">{index + 1}</span><span>{step}</span></li>)}</ol></section>
        </div>
      </article>
    </main>
  );
}
