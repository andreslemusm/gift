import { Fragment } from "react";
import { RootState } from "../redux/store";
import clsx from "clsx";
import { favoritesSilce } from "../redux/favorites";
import { swapiApi } from "../redux/swapi.service";
import { Heart, MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

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
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = Boolean(
    favorites.find((favorite) => favorite.name === name)
  );

  const dispatch = useDispatch();

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
            ? dispatch(favoritesSilce.actions.deleteFavorite(name))
            : dispatch(
                favoritesSilce.actions.addFavorite({
                  birthYear,
                  gender,
                  name,
                  planetId,
                })
              )
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
  const planet = swapiApi.useGetPlanetQuery({ planetId });

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
