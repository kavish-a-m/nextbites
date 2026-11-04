"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matchingRecipes = recipes.filter(
    (recipe) => recipe.title.toLowerCase().includes(normalizedQuery) || recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="mt-10">
      <label className="block max-w-md"><span className="sr-only">Search recipes</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by recipe or cuisine" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-950 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100" /></label>
      {matchingRecipes.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{matchingRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-12 text-center text-lg text-stone-600">No recipes match “{query}”. Try a different recipe name or cuisine.</p>
      )}
    </div>
  );
}
