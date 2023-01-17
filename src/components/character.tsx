import { Fragment } from "react";
import clsx from "clsx";
import { useFavorites } from "../context/favorites";
import { usePlanet } from "../services/planets";
import { Heart, MapPin } from "lucide-react";

const Character = ({
  name,
  gender,
  birthYear,
  planetId,
}: {
  name: string;
  gender: string;
  birthYear: string;
  planetId: number;
}) => {
  const { favorites, dispatch } = useFavorites();
  const isFavorite = Boolean(
    favorites.find((favorite) => favorite.name === name)
  );

  return (
    <article className="py-4 flex justify-between items-start">
      <div className="space-y-2">
        <h2 className="text-white font-semibold text-sm">{name}</h2>
        <p className="text-slate-300 text-sm">
          <span className="capitalize">{gender}</span> | {birthYear}
        </p>
        <span className="px-2 items-center gap-x-1 py-1 inline-flex text-white text-xs font-semibold bg-slate-800 rounded-md">
          <MapPin className="h-3.5 w-3.5" />
          <PlanetName planetId={planetId} />
        </span>
      </div>

      <button
        type="button"
        onClick={() =>
          isFavorite
            ? dispatch({ type: "delete", favoriteName: name })
            : dispatch({
                type: "add",
                favorite: { birthYear, gender, name, planetId },
              })
        }
        className="shrink-0 p-1 rounded-full"
      >
        <span className="sr-only">
          {isFavorite ? "Unbookmark" : "Bookmark"}
        </span>
        <Heart
          className={clsx(
            isFavorite && "fill-green-200",
            "text-green-200 h-4 w-4"
          )}
        />
      </button>
    </article>
  );
};

const PlanetName = ({ planetId }: { planetId: number }) => {
  const planet = usePlanet({ planetId });

  if (planet.isSuccess) {
    return <Fragment>{planet.data.name}</Fragment>;
  }

  return (
    <div
      className="animate-pulse w-12 h-2 my-1 bg-slate-600 rounded"
      aria-label="Loading planet name"
    />
  );
};

export { Character };
