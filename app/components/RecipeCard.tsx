import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
      <article className="group flex min-h-72 flex-col rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/70">
        <div className="mb-6 flex items-start justify-between">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-3xl">{recipe.emoji}</span>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">{recipe.cuisine}</span>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-sm font-semibold text-orange-600">{recipe.difficulty}</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 group-hover:text-orange-700">{recipe.title}</h2>
          <p className="mt-3 leading-6 text-stone-600">{recipe.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-2 border-t border-stone-100 pt-4 text-sm font-medium text-stone-600"><span aria-hidden="true">◷</span><span>{recipe.minutes} minutes</span></div>
      </article>
    </Link>
  );
}
