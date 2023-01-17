import { Character } from "../components/character";
import { RootState } from "../redux/store";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Favorites = () => {
  const [query, setQuery] = useState("");

  const favorites = useSelector((state: RootState) => state.favorites);
  const filteredFavorites = favorites.filter((favorite) =>
    favorite.name.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="px-4 pt-3">
      <label>
        <span className="block text-sm font-semibold text-white">
          Search for a favorite
        </span>
        <div className="relative mt-3 rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search class="h-5 w-5 text-slate-200" />
          </div>
          <input
            type="search"
            name="query"
            className="text-white placeholder:text-slate-400 block w-full rounded-xl bg-slate-900 border-slate-200 pl-10 focus:border-green-200 focus:ring-green-200 transition"
            placeholder="Luke Skywalker"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </div>
      </label>
      <ul className="divide-y divide-slate-700 pt-6">
        {filteredFavorites.map((favorite) => (
          <Character key={favorite.name} {...favorite} />
        ))}
      </ul>
    </div>
  );
};
