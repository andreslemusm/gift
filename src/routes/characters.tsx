import { Character } from "../components/character";
import { Loader2 } from "lucide-react";
import { swapiApi } from "../redux/swapi.service";

const Characters = () => {
  const peopleQuery = swapiApi.useGetPeopleQuery({ page: 1 });

  if (peopleQuery.isSuccess) {
    return (
      <ul className="px-4 pt-1 divide-y divide-slate-700">
        {peopleQuery.data.results.map((people) => {
          const homeworldURLSplitted = people.homeworld.split("/");

          return (
            <li key={people.url}>
              <Character
                name={people.name}
                birthYear={people.birth_year}
                gender={people.gender}
                planetId={Number(
                  homeworldURLSplitted[homeworldURLSplitted.length - 2]
                )}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  if (peopleQuery.isError) {
    return (
      <p role="alert" className="px-4 text-white">
        An error has ocurred
      </p>
    );
  }

  return (
    <div className="h-[calc(100vh-4.156rem)] w-screen grid place-items-center">
      <Loader2
        aria-label="Loading..."
        className="text-white h-8 w-8 animate-spin"
      />
    </div>
  );
};

export { Characters };
