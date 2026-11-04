import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-orange-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Welcome to NextBites</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-stone-900 sm:text-6xl">Fresh ideas for your next delicious bite.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">Discover approachable recipes for busy weeknights, slow weekends, and every meal in between.</p>
          <a className="mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700" href="#recipes">Browse recipes</a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20" id="recipes">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Latest recipes</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">What are you cooking today?</h2>
          </div>
          <p className="font-medium text-stone-500">{recipes.length} recipes to explore</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </section>
    </main>
  );
}
